import React from 'react';

function AccountButtons() {
  return (
    <div className="flex justify-center mt-4">
      <button className="bg-white text-purple-500 font-bold rounded-full px-6 py-2 mr-2 focus:outline-none">
        LOGIN
      </button>
      <button className="bg-white text-purple-500 font-bold rounded-full px-6 py-2 focus:outline-none">
        SIGN UP
      </button>
    </div>
  );
}

export default AccountButtons;
