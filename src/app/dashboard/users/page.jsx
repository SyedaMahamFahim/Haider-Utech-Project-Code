import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <h1>User</h1>
      <Link href="/">
        Home
      </Link><br/>
      <Link href="/contact">
        Contact
      </Link>

    </main>
  );
}

