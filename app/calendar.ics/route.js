import { siteConfig } from '../../content/siteContent';

// Regular gatherings as an iCalendar feed, so visitors can add them to
// Google, Apple or Outlook calendars in one step.
// TODO: adjust DURATION if services usually run longer than an hour.
const gatherings = [
  { uid: 'sunday-prayer', name: 'Sunday prayer', start: '20260104T100000', rule: 'FREQ=WEEKLY;BYDAY=SU' },
  { uid: 'sunday-worship', name: 'Sunday worship service', start: '20260104T110000', rule: 'FREQ=WEEKLY;BYDAY=SU' },
  { uid: 'midweek-prayer', name: 'Midweek prayer meeting', start: '20260107T190000', rule: 'FREQ=WEEKLY;BYDAY=WE' },
  { uid: 'community-outreach', name: 'Community outreach', start: '20260103T110000', rule: 'FREQ=MONTHLY;BYDAY=1SA' }
];

const timezone = [
  'BEGIN:VTIMEZONE',
  'TZID:Europe/London',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:+0000',
  'TZOFFSETTO:+0100',
  'TZNAME:BST',
  'DTSTART:19700329T010000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0100',
  'TZOFFSETTO:+0000',
  'TZNAME:GMT',
  'DTSTART:19701025T020000',
  'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'END:STANDARD',
  'END:VTIMEZONE'
];

function escape(text) {
  return text.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\;');
}

export function GET() {
  const location = escape(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Victory House Chapel//Services//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escape(siteConfig.shortName)}`,
    'X-WR-TIMEZONE:Europe/London',
    ...timezone,
    ...gatherings.flatMap((event) => [
      'BEGIN:VEVENT',
      `UID:${event.uid}@victoryhousechapel`,
      'DTSTAMP:20260101T000000Z',
      `DTSTART;TZID=Europe/London:${event.start}`,
      'DURATION:PT1H',
      `RRULE:${event.rule}`,
      `SUMMARY:${escape(`${event.name} – ${siteConfig.shortName}`)}`,
      `LOCATION:${location}`,
      `URL:${siteConfig.url}/visit`,
      'END:VEVENT'
    ]),
    'END:VCALENDAR'
  ];

  return new Response(lines.join('\r\n'), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="victory-house-chapel.ics"'
    }
  });
}

export const dynamic = 'force-static';
