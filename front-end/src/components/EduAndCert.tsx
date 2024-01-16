export default function Resume() {
  return (
    <>
      <div className="px-[5rem] pt-10">
        <div className="md:flex pt-10 gap-10 w-full">
          <div className="md:w-[50%]">
            <div className="w-auto">
              <h1 className="text-4xl font-bold">Education</h1>
              <div className=" pt-4">
                <p className="font-bold text-xl">
                  Bachelor of Science in Computer Science
                </p>
                <p className="font-bold text-xl">
                  <i>Texas Tech University</i>
                </p>
                <p className="my-1 bg-gray-300 w-fit p-2 text-xl">
                  2019 - 2023
                </p>
                <ul className="pt-2 pl-3 list-disc text-lg">
                  <li className="py-1 ml-5">
                    <b>GPA:</b> 3.68/4.0
                  </li>
                  <li className="py-1 ml-5">
                    <b>Relevant Courses:</b> Data Structure, Design Analysis of
                    Algorithms, Object Oriented Programming, Software
                    Engineering, Computer Networks, Software Security, Concepts
                    of Database Systems, and Operating Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] pt-10 md:pt-0">
            <div className="">
              <h1 className="text-4xl font-bold">Certification</h1>
              <div className=" pt-4">
                <p className="font-bold text-xl">
                  AZ-204: Developing Solutions for Microsoft Azure
                </p>
                <p className="my-1 bg-gray-300 w-fit p-2 text-xl">
                  October 2023
                </p>
                <ul className="pt-2 pl-3 list-disc text-lg">
                  <li className="py-1 ml-5">
                    Experience creating and managing Azure Functions, Azure App
                    Service, and Azure Logic Apps
                  </li>
                  <li className="py-1 ml-5">
                    Proficiency with Azure services, such as Azure Storage,
                    Azure SQL Database, and Azure Cosmos DB
                  </li>
                  <li className="py-1 ml-5">
                    Knowledge in designing scalable and high-performance Azure
                    solutions, including load balancing and auto-scaling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
