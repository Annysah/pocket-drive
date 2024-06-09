"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Auth } from "aws-amplify";
import "../../configureAmplify";

import DragInput from "../components/DragInput";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [folders, setFolders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");

  const router = useRouter();

  const onLogOut = async () => {
    await Auth.signOut();
    await router.push("/signin");
    setUser(null);
  };

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const onFileChange = (files) => {
    console.log(files);
  };

  const createFolder = (folderName) => {
    const newFolder = { id: Date.now(), name: folderName };
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="text-2xl text-center px-6 py-5">
            <Link href="/">
              <span className="text-orange-400 font-medium">PocketDrive</span>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src="/assets/user.png"
              alt="User"
              width={100}
              height={100}
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <span className="hidden text-gray-400 lg:block">Welcome,</span>
            <h5 className="hidden text-md font-semibold text-gray-600 lg:block">
              {user?.attributes.email}
            </h5>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-orange-400"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">My Storage</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-orange-400"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-600"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Recent</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-orange-400"
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Favorite</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-orange-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-orange-200"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current"
                  ></path>
                </svg>
                <span className="-mr-1">Shared</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-orange-400"
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Recycle Bin</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span
              className="group-hover:text-gray-700 font-semibold"
              onClick={onLogOut}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>
      <div className="ml-auto mb-6 sm:w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-orange-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search"
                  className="w-96 pl-14 pr-1 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-orange-400 transition"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className="w-full h-10 px-4 py-4 flex items-center text-white space-x-4 rounded-lg bg-orange-400 group focus:bg-gray-100 active:bg-gray-200"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/assets/addw.svg"
                  alt="Plus Icon"
                  quality={100}
                  width={25}
                  height={25}
                />
                <span>Create Folder</span>
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="my-6">
          <h2 className="text-md text-gray-700 font-medium pl-4">Folders</h2>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch lg:space-y-0">
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="flex w-80 h-20 max-w-sm p-5 space-y-10 text-center bg-white border rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/folder.svg"
                    alt="Folder"
                    width={25}
                    height={25}
                  />
                  <span className="font-medium text-gray-700">
                    {folder.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Drag Input Component */}
        <DragInput onFileChange={(files) => onFileChange(files)} />
      </div>

      {/* Folder Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Overlay */}
          <div className="absolute inset-0 bg-gray-800 opacity-50" />
          
          {/* Modal Content */}
          <div className="bg-white py-6 px-10 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Folder Name"
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setIsModalOpen(false);
                  setFolderName(""); // Clear folderName input on modal close
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 ml-2 bg-orange-400 text-white rounded-md hover:bg-orange-500"
                onClick={() => {
                  if (folderName) {
                    createFolder(folderName);
                  }
                  setIsModalOpen(false);
                  setFolderName(""); // Clear folderName input on modal close
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
