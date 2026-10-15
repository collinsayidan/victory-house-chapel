// components/LeadershipGrid.js
import Image from 'next/image';
import { filled } from '../content/siteContent';

// Names, emails and phone numbers still marked "[Insert …]" are hidden,
// so a card shows only the details the church has confirmed.
export default function LeadershipGrid({ leaders = [] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader) => {
        const name = filled(leader.name);
        const email = filled(leader.email);
        const phone = filled(leader.phone);

        return (
          <li key={leader.id} className="card overflow-hidden">
            <div className="relative aspect-square bg-surface">
              <Image
                src={leader.image}
                alt={leader.alt}
                fill
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              {name ? (
                <>
                  <p className="text-base font-semibold text-gold-800">{leader.role}</p>
                  <h3 className="mt-1 text-xl">{name}</h3>
                </>
              ) : (
                <h3 className="text-xl">{leader.role}</h3>
              )}
              {email || phone ? (
                <dl className="mt-3 space-y-1 text-base">
                  {email ? (
                    <div>
                      <dt className="inline font-semibold">Email: </dt>
                      <dd className="inline break-words">
                        <a href={`mailto:${email}`}>{email}</a>
                      </dd>
                    </div>
                  ) : null}
                  {phone ? (
                    <div>
                      <dt className="inline font-semibold">Phone: </dt>
                      <dd className="inline">
                        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
