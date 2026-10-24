// content/siteContent.js
export const siteConfig = {
  name: 'Victory House Chapel Assemblies of God, Edinburgh',
  shortName: 'Victory House Chapel',
  // Public web address, used for search engines and link previews.
  // Inferred from the church email domain — update if the site lives elsewhere.
  url: 'https://www.victoryhousechapelag.org',
  location: 'Edinburgh, Scotland',
  tagline: 'A welcoming Christ-centred church for Edinburgh.',
  description:
    'A Christian church within the Assemblies of God, serving a diverse congregation with Sunday services, midweek prayer meetings and community outreach.',
  addressLine1: 'Murrayburn House, 2nd Floor',
  addressLine2: 'Edinburgh EH14 3HR',
  charityNumber: '[Insert Scottish charity number]',
  email: 'info@victoryhousechapelag.org',
  phone: '013 1244 18915',
  privacyEmail: '[Insert privacy email]',
  financeEmail: '[Insert finance email]',
  dataProtectionContact: '[Insert contact name or role]',
  officeHours: '[Insert office or enquiry hours]',
  // Structured version of the weekly timetable, used for the service times
  // tables and for search engines. Keep in step with `serviceTimes` below.
  weeklyServices: [
    { name: 'Sunday prayer', day: 'Sunday', time: '10:00am' },
    { name: 'Sunday worship service', day: 'Sunday', time: '11:00am' },
    { name: 'Midweek prayer meeting', day: 'Wednesday', time: '7:00pm' },
    { name: 'Community outreach', day: 'First Saturday of the month', time: '11:00am' }
  ],
  serviceTimes: [
    'Sunday Prayer - 10:00 am',
    'Sunday Worship Service - 11:00 am',
    'Midweek Prayer Meeting - Wednesday, 7:00 pm',
    'Community Outreach - First Saturday of each month, 11:00 am'
  ],
  hero: {
    title: 'A place to worship, grow and belong.',
    intro:
      'Victory House Chapel Assemblies of God, Edinburgh is a welcoming local church serving people of many backgrounds across the city. We gather to worship Jesus, pray together, learn from Scripture and share the love of Christ in practical ways.'
  },
  footerNotice:
    'This starter site includes sample wording and placeholders that should be reviewed and updated before publication.'
};

export const socialLinks = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/[insert-channel]',
    handle: '@[insert-youtube-handle]',
    icon: 'youtube'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/[insert-instagram-handle]',
    handle: '@[insert-instagram-handle]',
    icon: 'instagram'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@[insert-tiktok-handle]',
    handle: '@[insert-tiktok-handle]',
    icon: 'tiktok'
  },
  {
    name: 'X',
    href: 'https://x.com/[insert-x-handle]',
    handle: '@[insert-x-handle]',
    icon: 'x'
  }
];

export const homeHighlights = [
  {
    title: 'Sunday gatherings',
    text: 'Join us each Sunday for worship, biblical teaching, prayer and warm fellowship for all ages.'
  },
  {
    title: 'Prayer and discipleship',
    text: 'We seek to grow as disciples of Jesus through prayer, teaching, encouragement and shared life.'
  },
  {
    title: 'Outreach and care',
    text: 'We serve our local community through hospitality, support, outreach and practical compassion.'
  }
];

export const ministries = [
  {
    title: "Children's ministry",
    text: 'A safe and encouraging environment where children can learn about Jesus in an age-appropriate way.'
  },
  {
    title: 'Youth ministry',
    text: 'Helping young people grow in faith, confidence and Christian community.'
  },
  {
    title: 'Prayer ministry',
    text: 'Regular times of intercession for the church, city and wider world.'
  },
  {
    title: 'Outreach ministry',
    text: 'Practical service, evangelism and support for people in the local community.'
  },
  {
    title: "Women's and men's fellowship",
    text: 'Spaces for encouragement, friendship, discipleship and prayer.'
  },
  {
    title: 'Worship and media',
    text: 'Serving the gathered church through music, sound, projection and communication.'
  }
];

export const events = [
  {
    title: 'Sunday Worship Service',
    schedule: 'Every Sunday, 11:00 am',
    location: 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
    description: 'A weekly gathering for worship, prayer, Bible teaching and fellowship.',
    image: '/images/events/church-service.webp',
    alt: 'Congregation gathered for Sunday worship at Victory House Chapel in Edinburgh'
  },
  {
    title: 'Midweek Prayer Meeting',
    schedule: 'Every Wednesday, 7:00 pm',
    location: 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
    description: 'A time to seek God together and pray for the church, community and wider world.',
    image: '/images/events/prayer-meeting.png',
    alt: 'Church members praying together during a prayer gathering'
  },
  {
    title: 'Community Outreach Saturday',
    schedule: 'First Saturday of each month, 11:00 am',
    location: 'Various local venues',
    description: 'Serving our neighbours through practical support, hospitality and Christian witness.',
    image: '/images/events/outreach.webp',
    alt: 'Church volunteers serving the local community during outreach in Edinburgh'
  },
  {
    title: 'Youth Fellowship Evening',
    schedule: 'Fortnightly Friday, 6:30 pm',
    location: 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
    description: 'A welcoming gathering for young people with teaching, conversation and community.',
    image: '/images/events/youth-fellowship.webp',
    alt: 'Young people taking part in a church youth programme activity'
  }
];

// Sermons, newest first. Fields still to be supplied by the church show
// a friendly placeholder on the site (for example "Speaker to be announced").
export const sermons = [
  {
    title: 'Hope in Christ',
    series: 'Living Hope',
    scripture: '1 Peter 1:3–9',
    speaker: '[Insert speaker name]',
    date: 'Sunday, 2 March 2026',
    summary: 'A message on the living hope we have through the resurrection of Jesus Christ.',
    href: '/sermons/hope-in-christ-notes.pdf',
    linkLabel: 'Read message notes',
    image: '/images/sermons/sermon - 01.jpg',
    alt: 'Pastor preaching a sermon about hope in Christ during a church service'
  },
  {
    title: 'A Church Devoted to Prayer',
    series: 'Acts: The Church on Mission',
    scripture: 'Acts 2:42–47',
    speaker: '[Insert speaker name]',
    date: 'Sunday, 23 February 2026',
    summary: 'An encouragement from Acts on prayer, unity and dependence on the Holy Spirit.',
    href: '/audio/devoted-to-prayer.mp3',
    linkLabel: 'Listen to sermon audio',
    image: '/images/sermons/sermon - 02.jpg',
    alt: 'Church members gathered prayerfully during a sermon on prayer and unity'
  },
  {
    title: 'Faithful in Everyday Witness',
    series: 'Acts: The Church on Mission',
    scripture: 'Acts 1:8',
    speaker: '[Insert speaker name]',
    date: 'Sunday, 16 February 2026',
    summary: 'A practical sermon on following Jesus in daily life, work, study and relationships.',
    href: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    linkLabel: 'Watch sermon',
    image: '/images/sermons/sermon - 03.webp',
    alt: 'A church sermon focused on faithful Christian witness in everyday life'
  },
  // Placeholder slots: replace with real sermons as they are uploaded
  {
    title: '[Insert sermon title]',
    series: '[Insert series]',
    scripture: '[Insert scripture]',
    speaker: '[Insert speaker name]',
    date: '[Insert date]',
    summary: '[Insert a one-sentence summary]',
    href: '',
    linkLabel: 'Watch sermon',
    image: '',
    alt: ''
  },
  {
    title: '[Insert sermon title]',
    series: '[Insert series]',
    scripture: '[Insert scripture]',
    speaker: '[Insert speaker name]',
    date: '[Insert date]',
    summary: '[Insert a one-sentence summary]',
    href: '',
    linkLabel: 'Watch sermon',
    image: '',
    alt: ''
  },
  {
    title: '[Insert sermon title]',
    series: '[Insert series]',
    scripture: '[Insert scripture]',
    speaker: '[Insert speaker name]',
    date: '[Insert date]',
    summary: '[Insert a one-sentence summary]',
    href: '',
    linkLabel: 'Watch sermon',
    image: '',
    alt: ''
  }
];

export const donateOptions = [
  'Bank transfer: [Insert bank details or donation instructions]',
  'PayPal: [Insert verified PayPal donation link]',
  'Online donation page: [Insert secure donation link]',
  'Standing order: [Insert regular giving details]',
  'In-person offering: [Insert details if applicable]'
];

export const donateSummary = [
  {
    title: 'Worship and ministry',
    text: 'Supporting Sunday services, prayer gatherings, Bible teaching and the ongoing ministry of the church.'
  },
  {
    title: 'Pastoral care',
    text: 'Helping provide prayer, encouragement, support and practical care for members, visitors and those in need.'
  },
  {
    title: 'Community outreach',
    text: 'Supporting local outreach, hospitality, evangelism and compassionate service within the wider community.'
  },
  {
    title: 'Church operations',
    text: 'Helping with the practical running costs that enable the church to remain open, active and welcoming.'
  }
];

export const leaders = [
  {
    id: 1,
    name: 'Pastor [Insert Name]',
    role: 'Lead Pastor',
    email: '[insert-pastor-email@example.org]',
    phone: '[Insert contact number]',
    image: '/images/leaders/HeadPastor.JPG',
    alt: 'Portrait of the lead pastor at Victory House Chapel'
  },
  {
    id: 2,
    name: '[Insert Name]',
    role: 'Associate Pastor',
    email: '[insert-associate-email@example.org]',
    phone: '[Insert contact number]',
    image: '/images/leaders/Henry.jpg',
    alt: 'Portrait of the associate pastor at Victory House Chapel'
  },
  {
    id: 3,
    name: '[Insert Name]',
    role: 'Church Administrator',
    email: '[insert-admin-email@example.org]',
    phone: '[Insert contact number]',
    image: '/images/leaders/IMG_6433.JPG',
    alt: 'Portrait of the church administrator at Victory House Chapel'
  }
];

export const galleryItems = [
  {
    id: 1,
    title: 'Sunday worship',
    category: 'Worship',
    image: '/images/gallery/worship.jpg',
    alt: 'Congregation gathered for Sunday worship at Victory House Chapel in Edinburgh'
  },
  {
    id: 2,
    title: 'Prayer gathering',
    category: 'Prayer',
    image: '/images/gallery/worship03.jpg',
    alt: 'Church members praying together during a prayer gathering'
  },
  {
    id: 3,
    title: 'Community outreach',
    category: 'Outreach',
    image: '/images/gallery/Outreach02.webp',
    alt: 'Church volunteers serving the local community during outreach in Edinburgh'
  },
  {
    id: 4,
    title: 'Pastoral leadership',
    category: 'Pastors',
    image: '/images/leaders/HeadPastor.JPG',
    alt: 'Portrait of the pastor and leadership team at Victory House Chapel'
  },
  {
    id: 5,
    title: 'Youth programme',
    category: 'Programmes',
    image: '/images/gallery/youth-fellowship.webp',
    alt: 'Young people taking part in a church youth programme activity'
  },
  {
    id: 6,
    title: 'Church fellowship',
    category: 'Community',
    image: '/images/gallery/worship05.jpg',
    alt: 'Members and visitors spending time together after a church gathering'
  },
  {
    id: 7,
    title: "Children's programme",
    category: 'Programmes',
    image: '/images/children-ministries/children-ministry - 03.jpg',
    alt: "Children taking part in a church programme activity with appropriate supervision"
  },
  {
    id: 8,
    title: 'Special church event',
    category: 'Events',
    image: '/images/hero/church-activities.jpeg',
    alt: 'Church members attending a special event or celebration at Victory House Chapel'
  }
];

// Photos from church life, added in the second design pass
galleryItems.push(
  {
    id: 9,
    title: 'Sunday service',
    category: 'Worship',
    image: '/images/gallery/church-service.jpeg',
    alt: 'Members of the congregation seated together during a Sunday service'
  },
  {
    id: 10,
    title: 'Prayer and reflection',
    category: 'Prayer',
    image: '/images/gallery/church-service02.jpeg',
    alt: 'A church member holding a microphone with head bowed in prayer during a service'
  },
  {
    id: 11,
    title: 'Preaching the Word',
    category: 'Pastors',
    image: '/images/gallery/preaching.jpeg',
    alt: 'A minister in a suit preaching to the congregation'
  },
  {
    id: 12,
    title: 'After church',
    category: 'Community',
    image: '/images/gallery/after-church-gathring.jpeg',
    alt: 'Church members in colourful outfits standing together outside after a service'
  },
  {
    id: 13,
    title: 'Outdoor activities',
    category: 'Programmes',
    image: '/images/gallery/children-activities.jpeg',
    alt: 'Children and adults playing a game together in a park'
  }
);

// Reasons someone might get in touch. `value` is used in links such as /contact?topic=prayer
export const contactTopics = [
  { value: 'general', label: 'A general question' },
  { value: 'visit', label: 'Planning a visit' },
  { value: 'prayer', label: 'A prayer request' },
  { value: 'pastoral', label: 'Pastoral support' },
  { value: 'serving', label: 'Getting involved or serving' }
];

export const galleryCategories = [
  'All',
  'Worship',
  'Prayer',
  'Outreach',
  'Pastors',
  'Programmes',
  'Community',
  'Events'
];

// Primary navigation, in the order it appears in the header.
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/visit', label: 'Plan your visit' },
  { href: '/events', label: 'Events' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/donate', label: 'Give' },
  { href: '/contact', label: 'Contact' }
];

export const legalNavigation = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/cookie-policy', label: 'Cookie policy' },
  { href: '/data-protection', label: 'Data protection' }
];

// True when a value still holds an "[Insert …]" placeholder.
export function isPlaceholder(value) {
  return typeof value === 'string' && value.includes('[');
}

// The value when it has been filled in, otherwise null. Pages use this to
// hide a line rather than show "[Insert …]" to visitors.
export function filled(value) {
  return value && !isPlaceholder(value) ? value : null;
}

// Where to send privacy and finance questions until dedicated inboxes are set
export const privacyContactEmail = filled(siteConfig.privacyEmail) || siteConfig.email;
export const financeContactEmail = filled(siteConfig.financeEmail) || siteConfig.email;
