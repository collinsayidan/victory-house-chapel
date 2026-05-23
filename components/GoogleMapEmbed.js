// components/GoogleMapEmbed.js
export default function GoogleMapEmbed({
  query = 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
  title = 'Church location map'
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!apiKey) {
    return (
      <div
        className="rounded-3xl border border-church-border bg-white p-8"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {/* Tri-colour top bar */}
        <div
          className="mb-6 h-1 w-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
        />
        <p className="eyebrow mb-3">Map unavailable</p>
        <p className="text-base text-church-text">
          Add{' '}
          <code
            className="rounded px-1.5 py-0.5 text-sm font-medium"
            style={{ background: 'var(--violet-lt)', color: 'var(--violet-dk)' }}
          >
            NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
          </code>{' '}
          to your environment variables to display the Google Map.
        </p>
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(query)}`;

  return (
    <div
      className="overflow-hidden rounded-3xl"
      style={{
        border: '1px solid rgba(14,27,61,0.10)',
        boxShadow: 'var(--shadow-xl)'
      }}
    >
      {/* Tri-colour top bar */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
      />
      <iframe
        title={title}
        src={src}
        width="100%"
        height="440"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}