import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container-site flex flex-col items-start">
      <p className="eyebrow mb-6">404</p>
      <h1 className="mb-6">Page not found.</h1>
      <p className="text-stone-500 mb-10 max-w-md">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">Return home</Link>
    </section>
  );
}
