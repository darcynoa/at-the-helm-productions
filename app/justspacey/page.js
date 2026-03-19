import JustSpaceyClient from "@/components/justspacey/JustSpaceyClient";
import { client } from "../sanity/client";

const CONTACT_QUERY = `*[_type == "contact"][0]`;
const JUST_SPACEY_QUERY = `*[_type == "justSpacey"][0]`;

const options = { next: { revalidate: 30 } };

export default async function JustSpacey() {
  const contactData = await client.fetch(CONTACT_QUERY, {}, options);
  const justSpaceyData = await client.fetch(JUST_SPACEY_QUERY, {}, options);

  return (
    <JustSpaceyClient
      contactData={contactData}
      justSpaceyData={justSpaceyData}
    />
  );
}
