import React, { useState } from "react";
import AddTeamMembers from "../components/AddTeamMembers";
import CreateUser from "../components/CreateUser";

const Team = () => {
  return (
    <>
      <div className="flex justify-center p-20 pt-10">
        <div className="border rounded mr-10 p-14">
          <CreateUser />
        </div>
        <div className="border rounded mr-10 p-14">
          <AddTeamMembers />
        </div>
      </div>
    </>
  );
};

export default Team;
