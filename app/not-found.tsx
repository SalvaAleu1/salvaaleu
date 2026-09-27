import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="section not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not here.</h1>
      <p>The useful part is still easy to find.</p>
      <Link className="button button-dark" href="/">
        Back home
      </Link>
    </main>
  );
}
