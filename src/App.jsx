import React from "react";

const cards = [
  {
    title: "Frontend",
    body: "Vite + React dev server on port 3000, served through the Alloy preview proxy.",
  },
  {
    title: "Docker Compose",
    body: "docker-compose.alloy.yaml runs the dev server with network_mode: host.",
  },
  {
    title: "Environment",
    body: ".alloy/environment.json declares the compose path and frontend port.",
  },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            color: "var(--muted)",
            fontSize: 12,
            letterSpacing: 0.6,
            textTransform: "uppercase",
          }}
        >
          Alloy ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>Carino</h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 18, maxWidth: 620 }}>
          This repository is configured to boot inside an Alloy sandbox via Docker Compose. Start
          building your app from here.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 16 }}>{card.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <footer style={{ color: "var(--muted)", fontSize: 14 }}>
        Edit <code style={{ color: "var(--accent)" }}>src/App.jsx</code> and the page reloads
        automatically.
      </footer>
    </main>
  );
}
