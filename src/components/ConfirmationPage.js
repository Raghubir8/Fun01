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

      <div className=" text-center text-2xl text-green-700">
        Thank you 💙, यदि तुम्हारा उत्तर हाँ है तो,अपना उत्तर पेज (pen paper) में लिख कर भेजना!
      </div>
    </div>
  );
};

export default ConfirmationPage;
