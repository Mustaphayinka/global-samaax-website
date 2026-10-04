const benefits = [
  {
    icon: '🌿',
    title: 'All natural',
    text: 'Real ingredients you can pronounce. No artificial colours, flavours or preservatives.',
  },
  {
    icon: '💪',
    title: 'Packed with goodness',
    text: 'Tiger nuts are naturally rich in fibre, healthy fats and essential minerals.',
  },
  {
    icon: '🍯',
    title: 'Naturally sweet',
    text: 'Sweetened with dates and the natural sugars of the nut, not refined sugar.',
  },
  {
    icon: '🚚',
    title: 'Delivered fresh',
    text: 'Made to order and delivered across Lagos, chilled and ready to enjoy.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-nut-100/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-nut-500">Why Samaax</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Health in every sip</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-3xl bg-nut-50 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-100 text-2xl" aria-hidden="true">
                {b.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-leaf-900/70">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
