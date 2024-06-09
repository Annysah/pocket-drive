import Link from "next/link";
import Image from "next/image";

const Hero = ({
  listUser = [
    {
      name: "Active Users",
      number: "200",
      icon: "/assets/people.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/location.svg",
    },
    {
      name: "Cloud Uploads",
      number: "500",
      icon: "/assets/cloud.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-loose">
            Securely store, access files and share with ease.
          </h1>
          <p className="text-black-500 mt-6 mb-6 text-lg">
            Discover a better way to store files. Save, organize, and access
            your files seamlessly across all your devices with PocketDrive!
          </p>
          <Link href="/signup">
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-black border hover:bg-white hover:text-black hover:border-black transition-all outline-none">
              Try it now
            </button>
          </Link>
        </div>
        <div className="flex w-full mt-8">
          <Image
            src="/assets/wfh_1.svg"
            alt="Work from home illustration"
            quality={100}
            width={612}
            height={383}
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10 shadow-md">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <Image
                    width={10}
                    height={10}
                    src={listUsers.icon}
                    className="h-8 w-8"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
