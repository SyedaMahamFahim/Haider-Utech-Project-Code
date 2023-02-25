import Link from "next/link";
import "./dashboard.module.css"

export default function Dashboard() {
  return (
    <main className="main">
      <h1>Dashboard</h1>
      <Link href="/">
        Home
      </Link><br/>
      <Link href="/contact">
        Contact
      </Link>
      <br/>
      <Link href="/dashboard/users">
       Users
      </Link><br/>
      <Link href="/dashboard/users/maham">
        User Maham
      </Link><br/>
    </main>
  );
}

