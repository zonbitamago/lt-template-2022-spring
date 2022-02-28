import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Layout>
  );
};

export default About;
