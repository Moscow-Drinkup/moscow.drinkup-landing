#!/usr/bin/env python3
"""Генератор og-баннера 1200x630 для соцпревью (Telegram/VK/WhatsApp/X).
Дизайн по бренду: тёмный фон #0b0907, акцент #f09018, шрифт Liberation Sans (кириллица)."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
LIB = '/usr/share/fonts/truetype/liberation/'
DEJ = '/usr/share/fonts/truetype/dejavu/'

# --- фон: вертикальный градиент + тёплое свечение ---
bg = Image.new('RGB', (W, H), (11, 9, 7))
d = ImageDraw.Draw(bg)
top, bottom = (11, 9, 7), (28, 19, 7)
for y in range(H):
    t = y / H
    col = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
    d.line([(0, y), (W, y)], fill=col)

glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse([W - 520, -260, W + 120, 380], fill=(240, 144, 24, 42))
glow = glow.filter(ImageFilter.GaussianBlur(130))
bg = Image.alpha_composite(bg.convert('RGBA'), glow).convert('RGB')
draw = ImageDraw.Draw(bg)

f_bold = ImageFont.truetype(LIB + 'LiberationSans-Bold.ttf', 96)
f_reg = ImageFont.truetype(LIB + 'LiberationSans-Regular.ttf', 46)
f_small = ImageFont.truetype(LIB + 'LiberationSans-Regular.ttf', 34)
f_mono = ImageFont.truetype(DEJ + 'DejaVuSansMono-Bold.ttf', 30)

# --- логотип: скруглённый квадрат с оранжевой рамкой ---
logo = Image.open('public/img/logo.png').convert('RGBA').resize((212, 212), Image.LANCZOS)
mask = Image.new('L', logo.size, 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, 212, 212], radius=30, fill=255)
logo.putalpha(mask)
bg.paste(logo, (78, 88), logo)
draw.rounded_rectangle([78, 88, 78 + 212, 88 + 212], radius=30, outline=(240, 144, 24), width=3)

# --- текст ---
x = 350
draw.text((x, 96), 'Moscow DrinkUp', font=f_bold, fill='#f0f0f0')
draw.rectangle([x + 2, 226, x + 190, 235], fill='#f09018')
draw.text((x, 268), 'Барные айти-митапы в Москве', font=f_reg, fill='#f0f0f0')
draw.text((x, 342), 'Экспертные доклады за кружкой пива', font=f_small, fill='#c9c1b6')
draw.text((x, 394), 'по четвергам · участие бесплатное', font=f_small, fill='#c9c1b6')

# --- низ: домен + слоган beerjs ---
draw.text((78, 540), 'drinkup.moscow', font=f_mono, fill='#f09018')
draw.text((78, 585), 'часть международного объединения beerjs.global', font=f_small, fill='#8a8278')

bg.save('public/img/og-banner.png', 'PNG', optimize=True)
print('og-banner.png saved:', bg.size)
