// src/components/ConfirmationPage.js
import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.pinimg.com/564x/16/1b/db/161bdb488e4743cae63b8f9f76fe690a.jpg"
        alt="Congratulations"
        style={{ width: '300px', height: 'auto', background: 'transparent' }}

      />

      <div className=" text-center text-2xl text-green-500">
        Thank you 💙 for saying yes ! I knew this 🫣
      </div>
    </div>
  );
};

export default ConfirmationPage;
