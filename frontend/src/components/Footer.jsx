import { business } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-nut-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-leaf-900/70 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={business.facebook} target="_blank" rel="noreferrer" className="hover:text-nut-500">
            Facebook
          </a>
          <a href={`mailto:${business.email}`} className="hover:text-nut-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
