const Pricing = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-center mb-4" id="pricing">
          Our Pricing Plan
        </h2>
        <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 mb-4 text-center text-lg text-gray-600">
          Choose the plan that is best for you and explore it happily and
          cheerfully
        </p>
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full scale-90 max-w-sm p-8 space-y-8 text-center bg-white border rounded-2xl lg:mx-4 dark:bg-gray-800 dark:border-gray-700 hover:scale-100">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-400 uppercase rounded-lg bg-gray-50">
                Free
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 dark:text-gray-100">
                $0
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Up to 15 GB storage per user
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Access your files from any device
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Self-service and community forums support
              </li>
            </ul>

            <button className="inline-flex border items-center justify-center px-4 py-4 font-semibold text-white capitalize transition-colors bg-black rounded-full hover:bg-white hover:text-black hover:border-black transition-all hover:shadow-orange">
              Choose Plan
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border rounded-2xl lg:mx-4 dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Pro
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $24.99
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Up to 200 GB storage per user
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Access your files from any device
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Self-service and community forums support
              </li>
            </ul>

            <button className="inline-flex border items-center justify-center px-4 py-4 font-semibold text-white capitalize transition-colors bg-black rounded-full hover:bg-white hover:text-black hover:border-black transition-all hover:shadow-orange">
              Choose Plan
            </button>
          </div>

          <div className="flex flex-col w-full scale-90 max-w-sm p-8 space-y-8 text-center bg-white border rounded-2xl lg:mx-4 dark:bg-gray-800 dark:border-gray-700 hover:scale-100">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Premium
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $49.99
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Up to 1 TB storage per user
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Access your files from any device
              </li>
              <li className="text-gray-500 dark:text-gray-400">24x7 Support</li>
              <li className="text-gray-500 dark:text-gray-400">
                Real-time collaborations
              </li>
            </ul>

            <button className="inline-flex border items-center justify-center px-4 py-4 font-semibold text-white capitalize transition-colors bg-black rounded-full hover:bg-white hover:text-black hover:border-black transition-all hover:shadow-orange">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
