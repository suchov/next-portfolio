import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>A JavaScript programmer</p>
    <img src="/static/logo.svg" alt="JavaScript" height="200px" />
  </Layout>
);
