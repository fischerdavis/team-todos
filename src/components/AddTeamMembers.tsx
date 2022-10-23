import React, { useState } from "react";
import { trpc } from "../utils/trpc";

const AddTeamMembers = () => {

  const {data: users, isLoading} = trpc.user.getAll.useQuery();

  const [search, setSearch] = useState<string>('');

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="flex">
        <input
          value={search}
          className="w-80 h-10 border rounded mr-4 pl-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-20 h-10 border rounded bg-indigo-600 text-white hover:bg-indigo-500"
          type="submit"
          onClick={onClick}
        >
          Search
        </button>
      </form>

      <div className="pt-8">
        {
          isLoading
            ? <h1>Loading...</h1>
            : <>
              {
                users?.map((user) => (
                  <div key={user.id} className="border rounded mb-1 p-2 pl-4">
                    <div>{user.name}</div>
                  </div>
                ))
              }
            </>
        }
      </div>
    </div>
  );
};

export default AddTeamMembers;
