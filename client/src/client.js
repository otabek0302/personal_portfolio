import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1106lgg9",
  dataset: "production",
  apiVersion: "2023-10-09",
  useCdn: true,
  token:
    "skGfWPfphG6KKieedqocui8qmibmzdxwYy4BDPC8ySQy9XhP1qdUw9B2VWTRvkhi7zX8I6ErhT0osZ1atORbQbXJhRi0wXzOHtMqQsZskCQUc4H4wPsAnLIm3obdxJt8OhPDvcaQUw8da8Xn9d9CZ4xcNSWQstykxc3Kj4D64g2fnCC28Rxb",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
