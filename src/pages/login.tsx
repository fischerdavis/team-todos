import React, { useState } from "react";

const Login = () => {

  const [userName, setUserName] = useState('');

  const onLogin = () => {

  };

  const onClear = () => {
    setUserName('');
  }

  return (
    <div className="flex justify-center">
      <div className="border rounded p-14 mt-8">
        <input
          value={userName}
          placeholder="User Name"
          className="w-80 h-10 border rounded mr-4 pl-2 mb-4"
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="mt-4">
          <button
            className="w-20 h-10 mr-2 border rounded bg-indigo-600 text-white hover:bg-indigo-500"
            type="submit"
            onClick={onLogin}
          >
            Login
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
    </div>
  );
};

export default Login;
