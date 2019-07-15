import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your data: Status Code ${statusCode}`
      : `Couldn't get that pate, sorry!`}
    <p />
  </Layout>
);
