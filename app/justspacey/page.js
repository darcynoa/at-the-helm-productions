import JustSpaceyClient from "@/components/justspacey/JustSpaceyClient";
import { client } from "../sanity/client";

const CONTACT_QUERY = `*[_type == "contact"][0]`;

const options = { next: { revalidate: 30 } };

export default async function JustSpacey() {
  const contactData = await client.fetch(CONTACT_QUERY, {}, options);

  return <JustSpaceyClient contactData={contactData} />;
}
