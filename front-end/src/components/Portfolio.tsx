import YummeImg from "../assets/github-image.png";
import AniquestHome from "../assets/aniquest-home.png";

export default function Portfolio() {
  return (
    <>
      <div className="px-9 pt-10 bg-gradient-to-t from-white to-slate-200">
        <div className="font-bold text-5xl">Portfolio</div>
        <div className="mt-1 w-[70px] h-[5px] bg-blue-500"></div>
        <div className="pt-10 ">
          <div className="md:flex pb-10">
            <div className="w-fill md:w-[50%]">
              <img src={AniquestHome} alt="" className="md:w-[95%] pb-5" />
            </div>
            <div className="w-fill md:w-[50%]">
              <p className="text-3xl font-bold">Full Stack Website</p>
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
                  <b>Tech Stack</b>: React, Redux Toolkit, Express, MongoDB
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex pb-10">
            <div className="fill md:w-[50%]">
              <img src={YummeImg} alt="" className="md:w-[95%] pb-5" />
            </div>
            <div className="fill md:w-[50%]">
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
