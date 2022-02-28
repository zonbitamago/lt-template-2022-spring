import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Layout>
  );
};

export default Home;
