import Image from "next/image";
import { ImgConfig } from "../../../public/config/ImgConfig";
const Table = ({ fileList }) => {
  return (
    <>
      <div className="flex flex-col justify-center sm:w-[75%] md:w-[80%] lg:w-[85%] xl:w-[90%] h-full ml-12 mt-16">
        <div className="bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Owner</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Last Modified
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">File Size</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {fileList.map((item, index) => (
                    <>
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <Image
                                src={
                                  ImgConfig[item.type.split("/")[1]] ||
                                  ImgConfig["default"]
                                }
                                alt=""
                                width={25}
                                height={25}
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {item.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">me</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left text-gray-400">
                            --
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">--</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">X</div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
