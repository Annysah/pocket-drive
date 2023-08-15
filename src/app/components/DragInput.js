import React, { useRef, useState } from "react";
import Image from "next/image";
import { ImgConfig } from "../../../public/config/ImgConfig";

const DragInput = ({ onFileChange }) => {
  const [fileList, setFileList] = useState([]);
  const wrapperRef = useRef(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  const onFileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="relative ml-12 sm:w-[70%] md:w-[80%] lg:w-[90%] h-52 border border-2 border-dashed border-orange-300 flex items-center justify-center mt-16"
      >
        <div className="font-medium">
          <Image
            src="/assets/upload.svg"
            alt="Upload icon"
            quality={100}
            width={50}
            height={50}
            className="ml-20"
          />
          <p className="text-gray-700 text-center">
            Drag &amp; Drop your files here
          </p>
        </div>
        <input
          className={`opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer ${
            wrapperRef.current &&
            wrapperRef.current.classList.contains("dragover")
              ? "opacity-0"
              : ""
          }`}
          type="file"
          value=""
          onChange={onFileDrop}
        />
      </div>
      {fileList.length > 0 ? (
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
                          <div className="font-semibold text-center">
                            File Size
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {fileList?.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0">
                                <Image
                                  src={
                                    ImgConfig[item.type.split("/")[1]] ||
                                    ImgConfig["default"]
                                  }
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="mt-2.5"
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
                              {item.date}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">--</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">
                              <Image
                                src="/assets/delete.svg"
                                alt="Delete icon"
                                width={20}
                                height={20}
                                className="mt-3"
                                onClick={onFileRemove}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DragInput;
