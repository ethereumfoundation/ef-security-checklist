import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      {/* Basics */}
      <title>EF Security Checklist</title>
      <meta name="description" content="Step by step guide to personal digital security and privacy" />
      
      {/* Site config */}
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta name="theme-color" content="#6419e8" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:title" content="EF Security Checklist" />
      <meta property="og:description" content="Step by step guide to personal digital security and privacy" />
      <meta property="og:image" content="/banner.png" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
