import { business } from '../data/site'

const stats = [
  { value: '100%', label: 'Natural ingredients' },
  { value: 'Lagos', label: 'Proudly local' },
  { value: 'Fresh', label: 'Made in small batches' },
]

export default function About() {
  return (
    <section id="about" className="bg-leaf-900 text-nut-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-nut-300">Our story</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Good food should make you feel good.
          </h2>
        </div>
        <div className="space-y-5 text-nut-100/85">
          <p>
            {business.name} is a Lagos-based food and beverage business on a simple mission: to make
            foods and drinks that help people enjoy life and stay healthy.
          </p>
          <p>
            We start with real, wholesome ingredients like tiger nuts, dates and coconut, and prepare
            everything fresh, without artificial additives, so every bottle tastes as good as it is
            for you.
          </p>
          <dl className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-leaf-700/50 p-4">
                <dt className="text-xs text-nut-100/70">{s.label}</dt>
                <dd className="mt-1 font-display text-xl font-bold text-nut-300">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
