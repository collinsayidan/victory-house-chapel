'use client';

import { useEffect, useState } from 'react';

// Regular gatherings in UK time. day: 0 = Sunday … 6 = Saturday.
// `firstOfMonth` limits a gathering to the first such weekday of the month.
const schedule = [
  { name: 'Sunday prayer', day: 0, hour: 10, minute: 0 },
  { name: 'Sunday worship service', day: 0, hour: 11, minute: 0 },
  { name: 'Midweek prayer meeting', day: 3, hour: 19, minute: 0 },
  { name: 'Community outreach', day: 6, hour: 11, minute: 0, firstOfMonth: true }
];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// The current date and time as seen on a clock in Edinburgh
function londonNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23'
    })
      .formatToParts(new Date())
      .map((part) => [part.type, part.value])
  );
  return new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute));
}

function findNext() {
  const now = londonNow();
  for (let offset = 0; offset < 40; offset += 1) {
    const date = new Date(now);
    date.setUTCDate(now.getUTCDate() + offset);
    const matches = schedule
      .filter((item) => item.day === date.getUTCDay() && (!item.firstOfMonth || date.getUTCDate() <= 7))
      .map((item) => {
        const at = new Date(date);
        at.setUTCHours(item.hour, item.minute, 0, 0);
        return { ...item, at };
      })
      .filter((item) => item.at > now)
      .sort((a, b) => a.at - b.at);
    if (matches.length) return { ...matches[0], offset };
  }
  return null;
}

function formatTime({ hour, minute }) {
  const h = hour % 12 || 12;
  return `${h}:${String(minute).padStart(2, '0')}${hour < 12 ? 'am' : 'pm'}`;
}

/** Shows the next gathering ("Today", "Tomorrow" or the weekday). */
export default function NextGathering() {
  const [next, setNext] = useState(null);

  useEffect(() => setNext(findNext()), []);

  if (!next) {
    return (
      <p className="max-w-none">
        <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-gold-800">Every Sunday</span>
        <span className="mt-1 block text-2xl font-bold">Worship at 11:00am</span>
      </p>
    );
  }

  const when =
    next.offset === 0 ? 'Today' : next.offset === 1 ? 'Tomorrow' : DAYS[next.at.getUTCDay()];

  return (
    <p className="max-w-none">
      <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-gold-800">Next gathering</span>
      <span className="mt-1 block text-2xl font-bold">
        {next.name}
        <span className="block text-lg font-semibold text-navy-700">
          {when} at {formatTime(next)}
        </span>
      </span>
    </p>
  );
}
