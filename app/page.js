import HomeClient from "@/components/home/HomeClient";
import { client } from "../app/sanity/client";

const HOME_QUERY = `*[_type == "home"][0]`;
const CONTACT_QUERY = `*[_type == "contact"][0]`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const [homeData, contactData] = await Promise.all([
    client.fetch(HOME_QUERY, {}, options),
    client.fetch(CONTACT_QUERY, {}, options),
  ]);
  return <HomeClient homeData={homeData} contactData={contactData} />;
}
