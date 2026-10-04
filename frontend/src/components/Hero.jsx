import { business } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-nut-100 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-leaf-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full bg-leaf-100 px-4 py-1 text-sm font-medium text-leaf-700">
            Freshly made in {business.city}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Enjoy life.
            <br />
            <span className="text-nut-500">Stay healthy.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-leaf-900/75">
            Wholesome, natural foods and drinks crafted to nourish your body, from our signature
            creamy tiger nut drinks to treats for every occasion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-leaf-700 px-7 py-3 font-medium text-nut-50 shadow-lg shadow-leaf-700/20 transition hover:-translate-y-0.5 hover:bg-leaf-900"
            >
              See our products
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-leaf-700 px-7 py-3 font-medium text-leaf-700 transition hover:bg-leaf-700 hover:text-nut-50"
            >
              Place an order
            </a>
          </div>
        </div>

        {/* Illustrated bottle. Swap for a real product photo later. */}
        <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nut-300 to-nut-500 opacity-90" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-nut-50/60" />
          <svg viewBox="0 0 120 220" className="relative h-64 drop-shadow-2xl sm:h-72" aria-hidden="true">
            <rect x="45" y="4" width="30" height="18" rx="4" fill="#23602f" />
            <path d="M48 22h24v20c0 6 18 16 18 34v126a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14V76c0-18 18-28 18-34z" fill="#fdf8ef" />
            <path d="M30 110h60v92a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14z" fill="#f8ecd4" />
            <rect x="30" y="118" width="60" height="50" fill="#23602f" />
            <text x="60" y="140" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="13" fontWeight="700" fill="#fdf8ef">SAMAAX</text>
            <text x="60" y="157" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="#e8c27f">TIGER NUT</text>
          </svg>
          <span className="absolute -left-2 top-10 rotate-[-8deg] rounded-xl bg-nut-50 px-4 py-2 text-sm font-semibold shadow-lg">
            100% natural
          </span>
          <span className="absolute -right-2 bottom-12 rotate-[6deg] rounded-xl bg-leaf-700 px-4 py-2 text-sm font-semibold text-nut-50 shadow-lg">
            No preservatives
          </span>
        </div>
      </div>
    </section>
  )
}
