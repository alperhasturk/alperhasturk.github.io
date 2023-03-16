import Head from "next/head";
import { BsFillMoonFill } from "react-icons/bs";
import Image from "next/image";
import toolsiuse from "../public/toolsiuse.png";
import passwordgenerator from "../public/passwordgenerator.jpg";
import portfoliosite from "../public/portfoliosite.jpg";
import game from "../public/game.jpg";
import placeholder from "../public/placeholder.jpg";
import discord from "../public/discord.jpg";
import funnel from "../public/funnel.jpg";
import weather from "../public/weather.jpg";
import emoji from "../public/emoji.png";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alper Hasturk Personal Site</title>
        <meta name="description" content="Personal Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="bg-gray-200 font-poppins dark:bg-gradient-to-bl from-gray-900 to-indigo-900">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="text-xl text-black dark:text-white"></h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-3xl text-black dark:text-white ">
                <BsFillMoonFill onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li className="text-xl">
                {" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 rounded-lg ml-8 mr-2"
                  href="https://github.com/alperhasturk"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-black text-center pb-12 dark:text-white ">
            <h2 className="text-8xl text-cyan-600 pb-6 dark:text-cyan-300 font-extrabold">
              Web Developer
            </h2>
            <h3 className="text-3xl">You can see my work here</h3>
          </div>
          <div className="flex flex-col justify-between sm:flex-row m-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="shadow-lg rounded-lg mx-auto"
                src={passwordgenerator}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2">Password Generator</h3>
              <p className="text-black">
                Made using HTML&CSS and Javascript you can try it{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://alperhasturk.me/Password-Generator/"
                >
                  here
                </a>
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image
                className="shadow-2xl rounded-lg mx-auto"
                src={portfoliosite}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2 ">Personal Website</h3>
              <p className="text-black">
                Made using NextJS and Tailwind you can try it{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://alperhasturk.me"
                >
                  here
                </a>
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="shadow-2xl rounded-lg mx-auto"
                src={game}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2">Hyper Casual Game</h3>
              <p className="text-black">
                Made using C# and Unity Engine you can try it{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://hotdogjump.web.app/"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-between sm:flex-row m-5 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="shadow-2xl rounded-lg"
                src={discord}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2">Discord Bot</h3>
              <p className="text-black">
                Made using Javascript and Discord API{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://github.com/alperhasturk/WorkoutBot"
                >
                  here
                </a>
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="shadow-2xl rounded-lg"
                src={funnel}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2">Email Funnel</h3>
              <p className="text-black">
                Made using Nextjs and Tailwind you can try it{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://kebup4325.github.io/short-form-marketing/"
                >
                  here
                </a>
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="shadow-2xl rounded-lg"
                src={weather}
                alt="passwordgenerator"
                width={500}
                height={500}
              />
              <h3 className="text-2xl text-cyan-800 font-medium pt-8 pb-2">Weather App</h3>
              <p className="text-black">Made using HTML&CSS and </p>
              <p className="text-black">
                Openweathermap API you can try it{" "}
                <a
                  className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-3 py-1 rounded-lg hover:opacity-80"
                  href="https://alperhasturk.me"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          <div className=" text-center pb-8 py-10 rounded-3xl shadow-xl dark:bg-slate-900 opacity-90">
            <h3 className="text-black text-2xl mb-5 dark:text-white">
              You can access to all of my projects here{" "}
            </h3>
            <a
              className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white text-2xl px-4 py-2 rounded-lg m-auto hover:opacity-80"
              href="https://github.com/alperhasturk"
            >
              Github
            </a>
          </div>

          <div className=" flex flex-col mt-36 items-center pb-20 text-center text-black bg-slate-200 shadow-2xl rounded-3xl dark:bg-slate-800 rounded-b-none ">
            <Image
              src={emoji}
              className="mx-auto pt-5"
              alt="google's techlogist emoji"
              width={100}
              height={100}
            />
            <h2 className="text-5xl text-cyan-800 mb-8 dark:text-cyan-300">About Me!</h2>
            <p className="text-2xl text-cyan-800 font-medium dark:text-cyan-100">
              I am always ready to work with new technologies !
            </p>
            <p className="text-xl text-black pt-5 mt-5 mb-10 dark:text-white">
              With an understanding of both sides, I am comfortable to work on Front-End or Back-End
              depending on needs
            </p>
            <h3 className="text-3xl font-medium mt-14 dark:text-white">Technologies I Use</h3>
            <Image
              src={toolsiuse}
              className="ml-10"
              alt="images of web development tools"
              width={700}
              height={700}
            />
            <p className="text-xl text-gray-600 dark:text-gray-300">And much more..!</p>
          </div>
          <div className="text-end bg-slate-200 pt-16  dark:bg-gray-900">
            <p className="text-lg text-center text-gray-600 dark:text-gray300">
              <a
                className="underline underline-offset-2 hover:text-cyan-300"
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
