import Head from "next/head";
import Image from "next/image";
import toolsiuse from "../public/toolsiuse.png";
import emoji from "../public/emoji.png";
import { useState } from "react";
import CardSlider from "./CardSlider";
import passwordgenerator from "../public/passwordgenerator.jpg";
import portfoliosite from "../public/portfoliosite.jpg";
import globe from "../public/globe.jpg";
import discord from "../public/discord.jpg";
import funnel from "../public/funnel.jpg";

export default function Home() {
  const cards = [
    {
      title: "Password Generator",
      content: "A password generator with a user interface",
      image: passwordgenerator,
      alt: "password generator",
      link: "https://alperhasturk.me/Password-Generator/",
    },
    {
      title: "Portfolio Site",
      content: "Made using Next.js and Tailwind you can try it here",
      image: portfoliosite,
      alt: "portfolio site",
      link: "https://alperhasturk.me",
    },
    {
      title: "3D Globe",
      content: "A 3D globe that I made using ThreeJS",
      image: globe,
      alt: "globe",
      link: "https://alperhasturk.github.io/threejsglobe/",
    },
    {
      title: "Discord Bot",
      content: "A discord bot that I made using discord.js",
      image: discord,
      alt: "discord bot",
      link: "https://github.com/alperhasturk/WorkoutBot",
    },
    {
      title: "E-Mail Funnel",
      content: "A funnel that I made using Next.js and TailwindCSS",
      image: funnel,
      alt: "email funnel",
      link: "https://kebup4325.github.io/short-form-marketing/",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="bg-bg text-text font-poppins  ">
        <section className="min-h-screen">
          {/**************************************************LINKS********************************************************************/}
          <nav className="flex justify-end pb-10 px-10  pt-5 mb-24">
            <ul className="flex items-end">
              <li className="cursor-pointer text-black  "></li>
              <li className="pr-5">
                <a href="https://www.linkedin.com/in/alperhasturk/">
                  <svg
                    className="fill-current text-text hover:text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                  </svg>
                </a>
              </li>
              <li className="pr-5">
                <a href="https://github.com/alperhasturk">
                  <svg
                    className="fill-current text-text hover:text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          {/******************************************************UPPER SECTION*******************************************/}
          <div className="text-text text-center flex flex-col items-center mb-60 pb-24">
            <h2 className="text-7xl font-poppins bg-gradient-to-r from-accent via-orange-500 to-yellow-500 text-transparent bg-clip-text  pb-6   font-extrabold md:text-8xl">
              Web Developer
            </h2>
            <h3 className="text-3xl pt-3">Welcome, Take a look around!</h3>
            <h4 className="text-lg pt-6 text-gray-500">Scroll down to check out my projects</h4>
            <svg
              height={70}
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce mt-24 border-2 fill-current text-orange-500 border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-bg hover:border-bg"
            >
              <path
                d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          {/******************************************************PROJECTS******************************************/}
          <div className=" text-center mt-64  pb-8 py-10 rounded-3xl border-t-2 border-orange-400 opacity-90">
            <h3 className="text-text text-2xl mb-5">You can access to all of my projects from</h3>
            <a
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-text text-2xl px-4 py-2 rounded-lg m-auto  hover:opacity-80"
              href="https://github.com/alperhasturk"
            >
              Github
            </a>
            <h4 className="text-2xl pt-6 mt-6 ">Here are some of my work</h4>
          </div>
          <div className="mb-40 justify-items-center whitespace-nowrap scroll-smooth flex flex-row">
            <CardSlider cards={cards} />
          </div>
          {/******************************************************ABOUT ME******************************************/}
          <div className=" flex flex-col items-center pb-20 my-60 text-center text-black bg-bg rounded-3xl rounded-b-none border-t-2 border-orange-500 ">
            <Image
              src={emoji}
              className="mx-auto pt-5"
              alt="google's techlogist emoji"
              width={100}
              height={100}
            />
            <h2 className="text-5xl text-orange-500 mb-8">About Me!</h2>
            <p className="text-2xl text-text font-medium">
              I am always ready to work with new technologies !
            </p>
            <p className="text-xl text-text pt-5 mt-5 mb-10 leading-loose w-full md:w-1/2 md:leading-loose">
              {"I'm"} a front-end developer with a focus on adaptation and a passion for learning.
              My toolkit includes <span className="text-cyan-400">React.js,</span>{" "}
              <span className="text-green-400">Vue.js,</span>{" "}
              <span className="text-purple-400">Next.js.</span> And {"I'm"} proficient with the
              building blocks such as vanilla JavaScript, HTML and CSS, which I like to style with{" "}
              <span className="text-accent">Tailwind.</span> {"I'm"} always{" "}
              <span className="underline underline-offset-4 decoration-orange-500">
                ready to embrace new challenges and technologies,
              </span>{" "}
              ensuring that my web development journey is a constant evolution.
            </p>
            <h3 className="text-3xl font-medium mt-14 text-gray-300 pt-8">Technologies I Use</h3>
            <Image
              src={toolsiuse}
              className="ml-10"
              alt="images of web development tools"
              width={700}
              height={700}
            />
            <p className="text-xl text-gray-200 ">And much more..!</p>
          </div>
          {/******************************************************CONTACT******************************************/}

          <div className=" flex flex-col justify-center text-center rounded-3xl rounded-t-none border-t-2 border-orange-500 ">
            <h3 className="text-3xl mt-5 bg-bg">Contact Me</h3>
            <div className="mt-8 text-black sm:mx-auto sm:w-full shadow rounded-lg sm:px-10">
              <form
                action="https://formsubmit.co/alperrhasturk@gmail.com"
                method="POST"
                className="bg-secondary px-6 py-8 text-center rounded-3xl "
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://alperhasturk.me/" />
                <div className="">
                  <label htmlFor="email" className=" block text-md font-bold ">
                    Email adress <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-1 text-white">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@email.com"
                    autoComplete="email"
                    required
                    className="bg-bg border rounded-lg focus:opacity-80 text-center w-full p-3 md:w-2/3 md:mx-auto"
                  />
                </div>
                <div className="mt-4 ">
                  <label htmlFor="subject" className="block text-md font-bold ">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject of your message"
                    autoComplete="subject"
                    required
                    className="bg-bg border text-white rounded-lg focus:opacity-80 text-center w-full md:w-2/3 md:mx-auto p-3"
                  />
                </div>
                <div></div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-md font-bold ">
                    Message <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-1 text-white">
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="What's on your mind?"
                    autoComplete="message"
                    required
                    className="bg-bg border rounded-lg focus:opacity-80 text-center w-full md:w-2/3 md:mx-auto md:p-5 md:pb-20"
                  />
                </div>
                <div>
                  <p className=" text-slate-600">
                    <span className="text-red-500 ">*</span> Required fields
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-text text-2xl px-4 py-2 rounded-lg m-auto  hover:opacity-80"
                  >
                    Send
                  </button>
                </div>

                <div className="flex flex-col text-left">
                  <p className="text-left text-xs font-bold mt-10 ">Im also available on</p>
                </div>
                <p className="w-min">
                  <a href="https://www.linkedin.com/in/alperhasturk/">
                    <svg
                      className="fill-current text-bg hover:text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                    </svg>
                  </a>
                </p>
              </form>
            </div>
          </div>
          {/******************************************************FOOTER******************************************/}
          <div className=" bg-bg pt-16 ">
            <p className="text-lg text-center text-gray-600 ">
              <a
                className="underline underline-offset-2 hover:text-orange-500"
                href="https://github.com/alperhasturk"
              >
                2023 Alper Hastürk
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
