import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>

      <div>
        <h2>Blog 1 </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          aliquam, eius tempora similique doloribus excepturi exercitationem
          rerum nam labore aut deserunt quae temporibus voluptatem esse enim
          facere? Suscipit, inventore ducimus.
        </p>
        <Link href="/blog/1">Read more</Link>
      </div>
      <div>
        <h2>Blog 2 </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          aliquam, eius tempora similique doloribus excepturi exercitationem
          rerum nam labore aut deserunt quae temporibus voluptatem esse enim
          facere? Suscipit, inventore ducimus.
        </p>
        <Link href="/blog/2">Read more</Link>
      </div>
      <div>
        <h2>Blog 3 </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          aliquam, eius tempora similique doloribus excepturi exercitationem
          rerum nam labore aut deserunt quae temporibus voluptatem esse enim
          facere? Suscipit, inventore ducimus.
        </p>
        <Link href="/blog/3">Read more</Link>
      </div>

    <a href="https://beta.nextjs.org/docs/routing/fundamentals" target="_blank" rel="noopener noreferrer">
        <h2>Learn more about Next.js routing</h2>
    </a>
    </main>
  );
}
