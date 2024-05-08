import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About  </title>
      </Head>
      <Navbar />
      <div>About</div>
      <h3 id="saqibcolor">default deam</h3>
      <h2 className="intro">im a frontend react developer</h2>
      <style jsx>{`
        h3 {
          color: orange;
          background-color: grey;
        }
        .intro {
          color: red;
          background-color: yellow;
        }
      `}</style>

      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nostrum amet mollitia nesciunt harum atque laudantium eius aliquam
        inventore illo cumque, quas eligendi praesentium architecto, fugit nobis
        omnis asperiores quaerat.
      </h3>
      <h1>red</h1>
      <Image
        src="/image_2024_04_22T13_06_42_653Z.png"
        alt="tested"
        height={500}
        width={500}
      ></Image>
      <Image
        src="https://images.unsplash.com/photo-1714498975277-ad0de33eceb4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="tested"
        height={500}
        width={500}
      ></Image>
    </>
  );
};

export default About;
