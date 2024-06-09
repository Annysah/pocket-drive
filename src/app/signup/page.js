"use client";

import { useState } from "react";
import { Auth } from "aws-amplify";

import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

import "../../configureAmplify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [code, setCode] = useState("");

  const router = useRouter();

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
      setNewUser(true);
    } catch (err) {
      console.error(err);
    }

    if (email === '' || password === '') {
      setValid(false)
    }
  };

  const onConfirmSignUp = async (e) => {
    e.preventDefault();

    try {
      await Auth.confirmSignUp(email, code);
      await router.push("/signin");
    } catch (error) {
      console.error("error confirming sign up", error);
    }
  };

  return (
    <>
      <Header />
      {newUser ? (
        <div className="flex flex-wrap mt-16 w-full content-center justify-center">
          <div className="flex">
            <div
              className="flex flex-wrap content-center justify-center rounded-2xl border"
              style={{ width: "40rem", height: "23rem" }}
            >
              <div style={{ width: "30rem" }}>
                <h1 className="text-3xl font-medium text-gray-700 text-center">
                  Confirm your Email
                </h1>
                <p className="text-gray-500 text-center mt-4">
                  Please check your inbox, we sent a verification code to your
                  email.
                </p>

                <form className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="code"
                      className="mb-3 block text-xs text-gray-700 font-medium"
                    >
                      Verification code
                    </label>
                    <input
                      id="code"
                      type="text"
                      value={code}
                      placeholder="Enter code"
                      className="block w-full rounded-md border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 py-2 px-4 text-gray-500"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      className="mb-4 mt-4 px-4 py-3 block w-full text-center text-white bg-black border hover:border-black hover:bg-white hover:text-black rounded-md"
                      type="submit"
                      onClick={onConfirmSignUp}
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap mt-16 w-full content-center justify-center">
          <div className="flex">
            <div
              className="flex flex-wrap content-center justify-center rounded-2xl border"
              style={{ width: "40rem", height: "30rem" }}
            >
              <div style={{ width: "30rem" }}>
                <h1 className="text-2xl font-medium text-gray-700 text-center">
                  Create an Account
                </h1>
                <p className="text-gray-500 text-center mt-4">
                  Please enter your details to sign up
                </p>

                <form className="mt-4">
                  {!valid && <p class="mb-2 text-lg text-red-500">Please enter a valid email and password</p>}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs text-gray-700 font-medium"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      placeholder="Enter email address"
                      className="block w-full rounded-md border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 py-2 px-4 text-gray-500"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-xs font-semibold"
                    >
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      className="block w-full rounded-md border border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 py-2 px-4 text-gray-500"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      className="mb-4 mt-4 px-4 py-3 block w-full text-center text-white bg-black border hover:border-black hover:bg-white hover:text-black rounded-md"
                      type="submit"
                      onClick={onSignUp}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-xs text-gray-500 font-semibold">
                    Already have an account?
                  </span>
                  <Link href="/signin">
                    <p className="text-xs font-semibold text-orange-400">
                      Sign In
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
