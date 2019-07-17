import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. A praesentium
      ipsam ex eum fugit, placeat voluptatum ut optio corrupti at. Repudiandae
      quae rerum odit blanditiis sunt libero pariatur fugiat placeat.
    </p>
  </Layout>
);

export default withRouter(Post);
