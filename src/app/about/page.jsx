import Link from "next/link";
import AboutSectionTitle from "./AboutSectionTitle";
export default function About() {
  return (
    <main>
      <AboutSectionTitle />
      <h1>About Page</h1>
      <Link href="/">
        Home
      </Link><br/>
      <Link href="/contact">
        Contact
      </Link>

    </main>
  );
}

