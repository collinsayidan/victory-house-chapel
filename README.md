# Victory House Chapel website

The website for Victory House Chapel Assemblies of God, Edinburgh, built with Next.js 16 (App Router), React 18 and Tailwind CSS.

## Design standards

The design follows GOV.UK Design System patterns adapted to the church's navy and gold brand:

- WCAG 2.2 AA: every text colour pairing passes 4.5:1, with a yellow high-visibility focus state
- plain English and UK spelling throughout
- underlined links, breadcrumbs, summary lists, error summaries on forms and a native `<dialog>` for the gallery viewer
- no auto-advancing carousels or decorative motion

Colours and components live in `tailwind.config.js` and `app/globals.css`. Use those tokens rather than inline colours.

## Run locally

```bash
npm install
npm run dev
```

## CMS-ready content structure

Most editable content is centralised in:

- `content/siteContent.js`

This makes it easier to later connect a headless CMS such as Sanity, Contentful, Strapi or Directus.

## Before launch

Replace placeholder values for:

- charity number
- leadership names
- giving links and finance contact
- privacy and data protection contacts
- safeguarding wording and ministry details
- analytics and cookie implementation details
- live event data and sermon links
- email delivery for the contact form (`app/api/contact/route.js`)
- the confirmed phone number in `content/siteContent.js`
