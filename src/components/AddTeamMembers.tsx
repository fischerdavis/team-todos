import React, { useState } from "react";

const AddTeamMembers = () => {

  const [search, setSearch] = useState<string>('');

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
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
        List
      </div>
    </div>
  );
};

export default AddTeamMembers;
