import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/sanity/client"; // your Sanity client

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
