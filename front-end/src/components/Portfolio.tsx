import YummeImg from "../assets/github-image.png";
import AniquestHome from "../assets/aniquest-home.png";
import ViewButton from "./ViewButton";

export default function Portfolio() {
  return (
    <>
      <div className="md:px-[5rem] px-4 pt-[4.5rem] bg-gradient-to-t from-white to-slate-300">
        <div className="font-bold text-5xl">Portfolio</div>
        <div className="mt-1 w-[70px] h-[5px] bg-blue-500"></div>
        <div className="pt-10 ">
          <div className="lg:flex pb-10">
            <div className="w-fill lg:w-[50%]">
              <img
                src={AniquestHome}
                alt=""
                className="md:w-[95%] mb-5 rounded-xl"
              />
            </div>
            <div className="w-fill lg:w-[50%]">
              <p className="text-3xl font-bold">Full Stack Website</p>
              <ul className="pt-2 pl-3 list-disc text-lg">
                <li className="py-1 ml-5">
                  Created a React website where users can search for and access
                  detailed information about their favorite anime
                </li>

                <li className="py-1 ml-5">
                  Express is employed to create a REST API for user
                  registration, login, and data retrieval
                </li>
                <li className="py-1 ml-5">
                  Redux Toolkit is used to manages the app state, enabling
                  shared data access across multiple components
                </li>
                <li className="py-1 ml-5">
                  <b>Tech Stack</b>: React, Redux Toolkit, Express, MongoDB
                </li>
              </ul>
              <div className="md:flex md:gap-2 pt-5">
                <div className="md:w-[50%]">
                  <ViewButton
                    title="Code"
                    icon="github"
                    iconColor="lightgrey"
                    color="bg-zinc-800"
                    textColor="text-gray-300"
                    link="https://github.com/aspandey1/anime-project"
                  />
                </div>
                <div className="md:w-[50%] md:pt-0 pt-2">
                  <ViewButton
                    title="Website"
                    icon="externalLink"
                    color="bg-blue-500"
                    iconColor="black"
                    textColor="text-black"
                    link="https://aniquest-408ea6645f0e.herokuapp.com/"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex pb-10">
            <div className="fill lg:w-[50%]">
              <img
                src={YummeImg}
                alt=""
                className="lg:w-[95%] mb-5 rounded-xl"
              />
            </div>
            <div className="fill lg:w-[50%]">
              <p className="text-3xl font-bold">Yumme App</p>
              <ul className="pt-2 pl-3 list-disc text-lg">
                <li className="py-1 ml-5">
                  Developed a recipe social media application compatible with
                  both iOS and Android platforms using React Native
                </li>
                <li className="py-1 ml-5">
                  Empowered users to post, rate, comment on, and favorite
                  recipes within the application
                </li>

                <li className="py-1 ml-5">
                  Firestore, a NoSQL database, is used to store data, such as
                  user profiles, posts, grocery lists, and recipes
                </li>
                <li className="py-1 ml-5">
                  <b>Tech Stack</b>: React Native and Firebase
                </li>
              </ul>
              <div className="md:flex md:gap-2 pt-5">
                <div className="md:w-[50%]">
                  <ViewButton
                    title="Code"
                    icon="github"
                    iconColor="lightgrey"
                    color="bg-zinc-800"
                    textColor="text-gray-300"
                    link="https://github.com/aspandey1/Yumme"
                  />
                </div>
                <div className="md:w-[50%] md:pt-0 pt-2">
                  <ViewButton
                    title="Demo"
                    icon="youtube"
                    color="bg-[#c4302b]"
                    iconColor="white"
                    textColor="text-white"
                    link="https://youtu.be/5FJjbYQitAg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
