"use client"

import { usePathname } from 'next/navigation';

export default function Blog() {
    const pathname = usePathname();

    console.log("this is the pathname",pathname)

  return (
    <main>
      <h1>Blog No</h1>

      <div>
        <h2>{pathname} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          aliquam, eius tempora similique doloribus excepturi exercitationem
          rerum nam labore aut deserunt quae temporibus voluptatem esse enim
          facere? Suscipit, inventore ducimus.
        </p>
      </div>
      
    </main>
  );
}
