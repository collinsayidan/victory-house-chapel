// components/GoogleMapEmbed.js
export default function GoogleMapEmbed({
  query = 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
  title = 'Church location map'
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const encoded = encodeURIComponent(query);

  // Without an API key, show a simple link rather than a broken map
  if (!apiKey) {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card sm:p-8">
        <p className="font-semibold">{query}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encoded}`}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line-light">
      <iframe
        title={title}
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encoded}`}
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
