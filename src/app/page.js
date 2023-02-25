import Link from "next/link";
import ImagesSection from "@/components/ImageSection/ImagesSection";

export default function Home() {
  return (
    <main>
      <ImagesSection/>
      <h1>Hoome</h1>
       <Link href="/about">
        about
      </Link> <br/>
      <Link href="/contact">
        Contact
      </Link>
    </main>
  )
}
