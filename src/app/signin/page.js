"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";

import "../../configureAmplify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const router = useRouter();

  const onLogIn = async (e) => {
    e.preventDefault();

    try {
      await Auth.signIn(email, password);
      await router.push("/dashboard");
    } catch (error) {
      console.error("error signing in", error);
    }

    if (email === "" || password === "") {
      setValid(false);
    }
  };

  const onLogInWithGoogle = async (e) => {
    e.preventDefault();
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  };
  return (
    <>
      <Header />
      <div className="flex flex-wrap mt-16 w-full content-center justify-center">
        <div className="flex">
          <div
            className="flex flex-wrap content-center justify-center border rounded-2xl"
            style={{ width: "40rem", height: "40rem" }}
          >
            <div style={{ width: "30rem" }}>
              <h1 className="text-2xl font-medium text-gray-700 text-center">
                Login to <span className="text-orange-400">PocketDrive</span>
              </h1>
              <p className="text-gray-500 text-center mt-4">
                Please enter your details to sign in
              </p>

              <form className="mt-4" onSubmit={onLogIn}>
                {!valid && (
                  <p class="mb-2 text-xl text-red-500">
                    Invalid email or password
                  </p>
                )}
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

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-xs text-gray-700 font-medium"
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

                <div className="mb-4 mt-4 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-orange-700"
                  />
                  <a href="#" className="text-xs font-semibold text-gray-500">
                    Forgot password?
                  </a>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="mb-4 mt-4 px-4 py-3 block w-full text-center text-white bg-black border hover:border-black hover:bg-white hover:text-black rounded-md"
                  >
                    Log in
                  </button>

                  <p className="text-center mb-4 text-gray-500">Or</p>
                  <button
                    onClick={onLogInWithGoogle}
                    className="flex flex-wrap px-4 py-3 mt-3 justify-center w-full border border-black rounded-md"
                  >
                    <Image
                      src="/assets/googleicon.png"
                      alt="."
                      width={20}
                      height={20}
                    />
                    Log in with Google
                  </button>
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-500">
                  Don't have account?
                </span>
                <Link href="/signup">
                  <span className="text-xs font-semibold text-orange-400">
                    {" "}
                    Sign up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
