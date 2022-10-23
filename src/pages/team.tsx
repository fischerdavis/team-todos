import React, { useState } from "react";
import AddTeamMembers from "../components/AddTeamMembers";
import ViewTeamMembers from "../components/ViewTeamMembers";

const Team = () => {
  return (
    <>
      <div className="flex justify-center p-20">
        <div className="border rounded mr-10 p-14">
          <AddTeamMembers />
        </div>
        <div className="border rounded p-14">
          <ViewTeamMembers />
        </div>
      </div>
    </>
  );
};

export default Team;
