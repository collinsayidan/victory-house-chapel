// components/LeadershipGrid.js
import Image from 'next/image';

export default function LeadershipGrid({ leaders = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {leaders.map((leader) => (
        <article
          key={leader.id}
          className="group overflow-hidden rounded-2xl border border-church-border bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-navy"
        >
          <div className="relative aspect-[4/4.5] overflow-hidden bg-church-panel">
            <Image
              src={leader.image}
              alt={leader.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
          </div>

          <div className="p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              {leader.role}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-church-heading">
              {leader.name}
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6 text-church-text">
              <p>
                <span className="font-semibold text-church-heading">Email: </span>
                <a
                  href={`mailto:${leader.email}`}
                  className="break-words text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
                >
                  {leader.email}
                </a>
              </p>

              <p>
                <span className="font-semibold text-church-heading">Phone: </span>
                <a
                  href={`tel:${leader.phone}`}
                  className="transition hover:text-brand-800"
                >
                  {leader.phone}
                </a>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}