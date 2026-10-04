import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#benefits', label: 'Why Samaax' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-nut-100 bg-nut-50/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-700 font-display text-lg font-bold text-nut-100">
            S
          </span>
          <span className="font-display text-lg font-bold leading-tight">
            Samaax <span className="text-nut-500">Foods</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-nut-500">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-leaf-700 px-5 py-2.5 text-nut-50 transition hover:bg-leaf-900"
            >
              Order now
            </a>
          </li>
        </ul>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-nut-100 px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2 hover:bg-nut-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
