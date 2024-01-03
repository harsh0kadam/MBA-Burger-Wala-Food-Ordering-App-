import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>MBA Burger Wala</h4>
          <p>
            We are MBA Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg" alt="" />
              <h3>Harsh Kadam</h3>
            </div>

            <p>
              I am Abhishek Singh, the founder of MBA Burger Wala. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
