import React, { useState } from "react";
import { trpc } from "../utils/trpc";

const CreateUser = () => {

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');

  const addUser = trpc.user.create.useMutation();
  const utils = trpc.useContext();

  const onCreate = async () => {
    if (userName.length && name.length) {
      await addUser.mutateAsync({
        userId: userName,
        name
      }, {
        onSuccess: () => {
          setUserName('');
          setName('');
          utils.user.invalidate();
        }
      });
    }
  };

  const onClear = () => {
    setName('');
    setUserName('');
  }

  return (
    <div>
      <input
        value={userName}
        placeholder="User Name"
        className="w-80 h-10 border rounded mr-4 pl-2 mb-4"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        value={name}
        placeholder="Full Name"
        className="w-80 h-10 border rounded mr-4 pl-2"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="mt-4">
        <button
          className="w-20 h-10 mr-2 border rounded bg-indigo-600 text-white hover:bg-indigo-500"
          type="submit"
          onClick={onCreate}
        >
          Create
        </button>
        <button
          className="w-20 h-10 border rounded text-black hover:bg-gray-50"
          type="submit"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
