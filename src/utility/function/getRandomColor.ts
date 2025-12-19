const projectPalette = ['#FFFFAF', '#9EF7FF', '#FF9FD2', '#B7FF8E', '#FFAE4C'] as const

type HSL = { h: number; s: number; l: number }

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const rand = (min: number, max: number) => Math.random() * (max - min) + min

function hexToHsl(hex: string): HSL {
  const clean = hex.replace('#', '')
  const num = parseInt(clean, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255

  const rPct = r / 255
  const gPct = g / 255
  const bPct = b / 255

  const max = Math.max(rPct, gPct, bPct)
  const min = Math.min(rPct, gPct, bPct)
  const delta = max - min

  let h = 0
  if (delta) {
    if (max === rPct) h = ((gPct - bPct) / delta) % 6
    else if (max === gPct) h = (bPct - rPct) / delta + 2
    else h = (rPct - gPct) / delta + 4
    h *= 60
  }

  const l = (max + min) / 2
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  return { h: (h + 360) % 360, s, l }
}

function hslToHex({ h, s, l }: HSL): string {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let [r, g, b] = [0, 0, 0]
  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]

  const toHex = (v: number) => {
    const n = Math.round((v + m) * 255)
    return n.toString(16).padStart(2, '0')
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

// Ambil warna basis dari palette, lalu jitter HSL sedikit agar tetap on-brand tapi variatif.
function getRandomColor({
  palette = projectPalette,
  hueJitter = 10, // derajat
  satJitter = 0.08, // 0-1
  lightJitter = 0.08, // 0-1
}: {
  palette?: readonly string[]
  hueJitter?: number
  satJitter?: number
  lightJitter?: number
} = {}): string {
  if (!palette.length) throw new Error('Palette must contain at least one color')

  const base = palette[Math.floor(Math.random() * palette.length)]
  const hsl = hexToHsl(base)

  const h = (hsl.h + rand(-hueJitter, hueJitter) + 360) % 360
  const s = clamp(hsl.s + rand(-satJitter, satJitter), 0, 1)
  const l = clamp(hsl.l + rand(-lightJitter, lightJitter), 0, 1)

  return hslToHex({ h, s, l })
}

export default getRandomColor