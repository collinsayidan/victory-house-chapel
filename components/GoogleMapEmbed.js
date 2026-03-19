// components/GoogleMapEmbed.js
export default function GoogleMapEmbed({
  query = 'Murrayburn House, 2nd Floor, Edinburgh EH14 3HR',
  title = 'Church location map'
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!apiKey) {
    return (
      <div className="rounded-2xl border border-church-border bg-white p-6 shadow-soft">
        <p className="text-base text-church-text">
          Add <code>NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY</code> to your
          environment variables to display the Google Map.
        </p>
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(query)}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-church-border bg-white shadow-soft">
      <iframe
        title={title}
        src={src}
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}