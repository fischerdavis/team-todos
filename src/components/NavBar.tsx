import React from "react";
import Link from "next/link";

const NavBar = () => (
  <div className="flex bg-slate-700 text-slate-200 h-16 items-center">
    <div className="flex gap-4 justify-left flex-grow">
      <Link href='/'>
        <div className=" ml-6 rounded hover:bg-slate-600 p-2 cursor-pointer">
          Todos
        </div>
      </Link>
      <Link href='/team'>
        <div className="rounded hover:bg-slate-600 p-2 cursor-pointer">
          Team
        </div>
      </Link>
    </div>
    <div className="flex gap-4 mr-6">
      <div
        className="p-2 w-16 text-center rounded bg-blue-600 hover:bg-blue-500 cursor-pointer"
      >
        Login
      </div>
    </div>
  </div>
);

export default NavBar;
