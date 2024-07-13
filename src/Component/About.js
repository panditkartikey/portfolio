import React from "react";
import Portfolio from './Portfolio';
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a frontend developer specializes in creating the visual and interactive elements of a website or web application. I use HTML, CSS, JavaScript,REACT JS, Tailwind CSS, to build user interfaces, ensuring a seamless and engaging user experience. Their role bridges design and technology, bringing creative concepts to life on the web.
        </p>

        <br />

        <p className="text-xl">
        my main focus on creating visually appealing and user-friendly interfaces, ensuring seamless user interactions. Their work combines technical skills and creativity to deliver engaging digital experiences. currently i also focus on learning NODE JS and built a Fullstack project using Javascript library and also learning some database like MONGODB and SQL
        </p>
      </div>
      <Portfolio/>
    </div>
  );
};

export default About;