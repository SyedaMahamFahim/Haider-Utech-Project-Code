import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'y71flc2f',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2022-02-01",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
