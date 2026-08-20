// Браузерный шим для Node-модуля 'url' (используется page-constructor в utils/url.js)
export function parse(input: string) {
  try {
    const u = new URL(input, 'https://example.org');
    return {
      protocol: u.protocol,
      hostname: u.hostname,
      pathname: u.pathname,
      search: u.search,
      hash: u.hash,
      query: u.search.replace(/^\?/, ''),
    };
  } catch {
    return {protocol: 'https:', hostname: '', pathname: '', search: '', hash: '', query: ''};
  }
}

export function format(obj: Record<string, string | undefined>) {
  const {protocol = 'https:', hostname = '', pathname = '', search = '', hash = ''} = obj || {};
  return `${protocol}//${hostname}${pathname}${search}${hash}`;
}
