import React from "react";

const Alerta = ({ mensaje }) => {
  console.log(mensaje);
  return (
    <div>
      <p className="from-red-700 to-red-500 text-white text-center uppercase w-full">
        {mensaje}123
      </p>
    </div>
  );
};

export default Alerta;
