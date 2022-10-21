import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "6bf2umld",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25"
});