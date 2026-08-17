export function setSEO({ title, description, image, jsonLd }) {
  if (title) document.title = title;
  const meta = (attr, key, content) => {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
    el.setAttribute("content", content);
  };
  meta("name", "description", description);
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("property", "og:type", "website");
  if (image) meta("property", "og:image", image);
  meta("name", "twitter:card", "summary_large_image");

  const old = document.getElementById("evo-jsonld");
  if (old) old.remove();
  if (jsonLd) {
    const s = document.createElement("script");
    s.id = "evo-jsonld";
    s.type = "application/ld+json";
    s.text = JSON.stringify(jsonLd);
    document.head.appendChild(s);
  }
}