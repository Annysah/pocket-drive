import React from "react";

const TestCode = () => {
  return (
    <>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <Image
                src="/assets/folder.svg"
                alt="Upload icon"
                quality={100}
                width={25}
                height={25}
              />
            </div>
            <div className="font-medium text-gray-800">React Handbook</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">me</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left text-gray-400">Jan 4, 2023</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">--</div>
        </td>
      </tr>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <Image
                src="/assets/ppt.png"
                alt="Upload icon"
                quality={100}
                width={25}
                height={25}
              />
            </div>
            <div className="font-medium text-gray-800">Presentation.ppt</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">me</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left text-gray-400">Feb 15, 2022</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">--</div>
        </td>
      </tr>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <Image
                src="/assets/folder.svg"
                alt="Upload icon"
                quality={100}
                width={25}
                height={25}
              />
            </div>
            <div className="font-medium text-gray-800">Marketing</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">me</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left text-gray-400">May 15, 2021</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">--</div>
        </td>
      </tr>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <Image
                src="/assets/pdf.png"
                alt="Upload icon"
                quality={100}
                width={25}
                height={25}
              />
            </div>
            <div className="font-medium text-gray-800">Catalog.pdf</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">me</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left text-gray-400">Sep 12, 2021</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">--</div>
        </td>
      </tr>
    </>
  );
};

export default TestCode;
