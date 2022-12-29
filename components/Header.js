import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const image = session?.user.image.toString();
  const router = useRouter();
  return (
    <div className="shadow-sm border-b sticky top-0 z-50 bg- ">
      <div className="flex justify-between  bg-white max-w-6xl mx-5 lg:mx-auto">
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid items-center  w-32 "
        >
          <Image fill alt="" src="https://links.papareact.com/ocw" />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 my-auto h-10 lg:hidden flex-shrink-0 cursor-pointer "
        >
          <Image src="https://links.papareact.com/jjm" fill contain />
        </div>
        {/* middle search */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 items-center  pointer-events-none flex">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border  focus:ring-black focus:border-black border-gray-300 rounded-md  "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon onClick={() => router.push("/")} className="navbutton" />
          <MenuIcon className="h-6 md:hidden cursor-pointer w-10" />

          {session ? (
            <>
              <PaperAirplaneIcon className="navbutton" />
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navbutton"
              />
              <UserGroupIcon className="navbutton" />
              <HeartIcon className="navbutton" />
              <img
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer "
                src={image}
              ></img>
            </>
          ) : (
            <button onClick={signIn} type="">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
