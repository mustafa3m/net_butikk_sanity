import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "lf07pwi2",
  dataset: "production",
  apiVersion: "2022-03-30", //dagen prosjektet ble først opprettet/sist oppdatert
  useCdn: false, //false for localhost, true for netlify
});