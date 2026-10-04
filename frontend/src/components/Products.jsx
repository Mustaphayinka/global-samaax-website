import { useEffect, useState } from 'react'
import { fallbackProducts } from '../data/site'

const formatPrice = (price) =>
  price == null ? 'Price on request' : `₦${Number(price).toLocaleString('en-NG')}`

export default function Products() {
  const [products, setProducts] = useState(fallbackProducts)

  useEffect(() => {
    fetch('/api/products')
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(setProducts)
      .catch(() => {}) // keep fallback list if the API is down
  }, [])

  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-nut-500">Our products</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Made fresh, made with love</h2>
        <p className="mt-4 text-leaf-900/70">
          Every product is prepared in small batches with natural ingredients and nothing artificial.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.id}
            className="group relative flex flex-col rounded-3xl border border-nut-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-nut-300/30"
          >
            {p.tag && (
              <span className="absolute right-4 top-4 rounded-full bg-nut-500 px-3 py-1 text-xs font-semibold text-white">
                {p.tag}
              </span>
            )}
            <div className="mb-5 grid h-32 place-items-center rounded-2xl bg-gradient-to-br from-nut-100 to-nut-300/60">
              <span className="text-5xl transition group-hover:scale-110" aria-hidden="true">
                🥥
              </span>
            </div>
            <h3 className="font-display text-lg font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm text-leaf-900/70">{p.description}</p>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="font-semibold text-leaf-700">{formatPrice(p.price)}</span>
              <span className="rounded-full bg-leaf-50 px-3 py-1 text-leaf-700">{p.size}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
