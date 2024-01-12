import YummeImg from "../assets/github-image.png";
import AniquestHome from "../assets/aniquest-home.png";

export default function Portfolio() {
  return (
    <>
      <div className="px-9 pt-[4.5rem] bg-gradient-to-t from-white to-slate-300">
        <div className="font-bold text-5xl">Portfolio</div>
        <div className="mt-1 w-[70px] h-[5px] bg-blue-500"></div>
        <div className="pt-10 ">
          <div className="lg:flex pb-10">
            <div className="w-fill lg:w-[50%]">
              <img src={AniquestHome} alt="" className="md:w-[95%] pb-5" />
            </div>
            <div className="w-fill lg:w-[50%]">
              <p className="text-3xl font-bold">Full Stack Website</p>
              <ul className="pt-2 pl-3 list-disc">
                <li className="py-1 ml-5">
                  Created a React website where users can search for and access
                  detailed information about their favorite anime
                </li>
                <li className="py-1 ml-5">
                  Implemented user account functionality, allowing users to
                  create accounts to view the most popular and trending anime on
                  the website
                </li>
                <li className="py-1 ml-5">
                  Provided users with the capability to save or delete anime
                  titles, managing their personalized library of favorites
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
            </div>
          </div>
          <div className="lg:flex pb-10">
            <div className="fill lg:w-[50%]">
              <img src={YummeImg} alt="" className="lg:w-[95%] pb-5" />
            </div>
            <div className="fill lg:w-[50%]">
              <p className="text-3xl font-bold">Yumme App</p>
              <ul className="pt-2 pl-3 list-disc">
                <li className="py-1 ml-5">
                  Developed a recipe social media application compatible with
                  both iOS and Android platforms using React Native
                </li>
                <li className="py-1 ml-5">
                  Empowered users to post, rate, comment on, and favorite
                  recipes within the application
                </li>
                <li className="py-1 ml-5">
                  Implemented a recipe matching feature, enabling users to find
                  recipes based on keywords and providing details such as
                  serving size, required ingredients, and instructions
                </li>
                <li className="py-1 ml-5">
                  Included a grocery list feature that allows users to add or
                  delete ingredients and check off items already purchased
                </li>
                <li className="py-1 ml-5">
                  Firestore, a NoSQL database, is used to store data, such as
                  user profiles, posts, grocery lists, and recipes
                </li>
                <li className="py-1 ml-5">
                  <b>Tech Stack</b>: React Native and Firebase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
