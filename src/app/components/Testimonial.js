import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-10 text-center" id="testimonial">
          What our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-200 rounded-xl text-center sm:p-8 bg-white">
            <div className="h-full flex flex-col justify-center space-y-4">
              <Image
                className="w-20 h-20 mx-auto rounded-full"
                src="/assets/cont.jpg"
                quality={100}
                alt="user avatar"
                height={150}
                width={150}
              />
              <p className="text-gray-600 md:text-xl">
                "I can't imagine my digital life without this tool. It's incredibly easy, convenient, and has become an essential tool for both personal and professional use"
              </p>
              <div>
                <h6 className="text-lg text-gray-800 font-semibold leading-none">
                  Jane Doe
                </h6>
                <span className="text-sm text-gray-500">Content Creator</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl sm:flex sm:space-x-8 sm:p-8 bg-white">
            <Image
              className="w-20 h-20 mx-auto rounded-full"
              src="/assets/stu.jpg"
              alt="user avatar"
              quality={100}
              height={150}
              width={150}
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600">
                "Sharing files with my Professors and fellow students has never been easier. Highly recommended!"
              </p>
              <div>
                <h6 className="text-lg text-gray-800 font-semibold leading-none">
                  John Smith
                </h6>
                <span className="text-sm text-gray-500">Student</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl sm:flex sm:space-x-8 sm:p-8 bg-white">
            <img
              className="w-20 h-20 mx-auto rounded-full"
              src="/assets/ent.jpg"
              alt="user avatar"
              quality={100}
              height={150}
              width={150}
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600">
                "The peace of mind I get from knowing my files are securely
                backed up in the cloud is invaluable. This tool
                has saved me from potential data loss and has become an integral
                part of my daily workflow."
              </p>
              <div>
                <h6 className="text-lg text-gray-800 font-semibold leading-none">
                  Sam Eta
                </h6>
                <span className="text-sm text-gray-500">Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
