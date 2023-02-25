import Link from "next/link";

export default function Maham() {
  return (
    <main>
      <h1>User: Maham</h1>
      <Link href="/dashboard">
        Back to dashboard
      </Link><br/>
      <Link href="/dashboard/users">
        Back to users
      </Link>

    </main>
  );
}

