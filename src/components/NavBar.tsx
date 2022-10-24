import React from "react";
import Link from "next/link";

const NavBar = () => (
  <div className="flex bg-slate-800 text-slate-200 h-16 pl-4 pr-4 items-center">
    <div className="flex gap-4 justify-left flex-grow">
      <Link href='/'>
        <div className=" ml-6 rounded hover:bg-slate-600 p-2 cursor-pointer">
          Todos
        </div>
      </Link>
      <Link href='/teams'>
        <div className="rounded hover:bg-slate-600 p-2 cursor-pointer">
          Teams
        </div>
      </Link>
    </div>
    <div className="flex gap-4 mr-6">
      <Link href="/login">
        <div
          className="p-2 w-16 text-center rounded bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
        >
          Login
        </div>
      </Link>
    </div>
  </div>
);

export default NavBar;
