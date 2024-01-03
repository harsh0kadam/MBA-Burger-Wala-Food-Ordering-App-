import React from "react";
import { motion } from "framer-motion";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg" alt="Founder" height={200} width={200} />
        <h3>Harsh Kadam</h3>

        <p>
          Hey, Everyone I am Harsh Kadm, the founder of MBA Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
