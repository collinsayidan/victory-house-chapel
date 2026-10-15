import { siteConfig } from '../content/siteContent';

/** Weekly service times as an accessible table. */
export default function ServiceTimes({ caption = 'Weekly service times', onDark = false }) {
  const cellBorder = onDark ? 'border-white/25' : 'border-line-light';
  return (
    <table className={`w-full border-collapse text-left ${onDark ? 'text-white' : ''}`}>
      <caption className={`mb-3 text-left text-xl font-bold ${onDark ? 'text-white' : ''}`}>
        {caption}
      </caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Gathering</th>
          <th scope="col">Day</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {siteConfig.weeklyServices.map((service) => (
          <tr key={service.name} className={`border-b ${cellBorder}`}>
            <th scope="row" className="py-3 pr-4 font-semibold">
              {service.name}
            </th>
            <td className="py-3 pr-4">{service.day}</td>
            <td className="whitespace-nowrap py-3 font-semibold">{service.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
