import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <h1>Contact Page</h1>
      <Link href="/">
        Home
      </Link><br/>
      <Link href="/about">
        About
      </Link>
    </main>
  );
}
