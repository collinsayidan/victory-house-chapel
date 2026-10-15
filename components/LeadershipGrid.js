// components/LeadershipGrid.js
import Image from 'next/image';
import { isPlaceholder } from '../content/siteContent';

export default function LeadershipGrid({ leaders = [] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {leaders.map((leader) => (
        <li key={leader.id} className="card overflow-hidden">
          <div className="relative aspect-square bg-surface">
            <Image
              src={leader.image}
              alt={leader.alt}
              fill
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-base font-semibold text-gold-800">{leader.role}</p>
            <h3 className="mt-1 text-xl">{leader.name}</h3>
            <dl className="mt-3 space-y-1 text-base">
              <div>
                <dt className="inline font-semibold">Email: </dt>
                <dd className="inline break-words">
                  {isPlaceholder(leader.email) ? (
                    leader.email
                  ) : (
                    <a href={`mailto:${leader.email}`}>{leader.email}</a>
                  )}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Phone: </dt>
                <dd className="inline">
                  {isPlaceholder(leader.phone) ? (
                    leader.phone
                  ) : (
                    <a href={`tel:${leader.phone.replace(/\s/g, '')}`}>{leader.phone}</a>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
