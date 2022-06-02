import React from "react";

const Alerta = ({ mensaje }) => {
  return (
    <div className="grid">
      <p className="bg-gradient-to-tr from-red-700 to-red-500 text-white text-center uppercase w-full h-auto rounded-xl my-auto mt-2">
        {mensaje}
      </p>
    </div>
  );
};

export default Alerta;
