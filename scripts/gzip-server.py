#!/usr/bin/env python3
"""Локальный статический сервер с gzip и кэшем — имитация CDN (GitHub Pages) для аудита.
Использование: python3 scripts/gzip-server.py [port] [root]"""
import gzip
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = sys.argv[2] if len(sys.argv) > 2 else 'dist'
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
COMPRESS_TYPES = {
    # 'text/html' исключён: gzip на HTML-документе даёт артефакт в трейсе Lighthouse
    'text/css', 'application/javascript', 'text/javascript', 'application/json',
    'image/svg+xml', 'text/plain', 'application/xml',
}


class Handler(SimpleHTTPRequestHandler):
    # HTTP/1.0 + закрытие соединения: без keep-alive артефактов в трейсе Lighthouse
    protocol_version = 'HTTP/1.0'

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, 'index.html')
        if not os.path.exists(path):
            self.send_error(404)
            return
        ctype = self.guess_type(path)
        with open(path, 'rb') as f:
            data = f.read()
        self.send_response(200)
        self.send_header('Content-Type', ctype)
        if ctype in COMPRESS_TYPES and len(data) > 512:
            data = gzip.compress(data, 6)
            self.send_header('Content-Encoding', 'gzip')
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'public, max-age=3600')
        self.send_header('Connection', 'close')
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt, *args):
        pass  # тише в логах


if __name__ == '__main__':
    os.chdir(ROOT)
    print(f'serving {os.getcwd()} on :{PORT} (gzip + cache)')
    ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
