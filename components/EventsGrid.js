import Image from 'next/image';

export function EventsGrid({ events }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {events.map((event) => (
        <li key={event.title} className="card flex flex-col overflow-hidden sm:flex-row">
          <div className="relative aspect-[16/9] w-full shrink-0 bg-surface sm:aspect-auto sm:w-48">
            <Image
              src={event.image}
              alt={event.alt}
              fill
              sizes="(min-width: 640px) 12rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3>{event.title}</h3>
            <dl className="mt-3 space-y-1 text-base">
              <div>
                <dt className="inline font-semibold">When: </dt>
                <dd className="inline">{event.schedule}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Where: </dt>
                <dd className="inline">{event.location}</dd>
              </div>
            </dl>
            <p className="mt-3 text-base">{event.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
