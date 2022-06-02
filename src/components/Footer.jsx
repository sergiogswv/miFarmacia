import { Link } from "react-router-dom";
import Logo from "../public/logo.png";

import { icons } from "../helpers";

const Footer = () => {
  return (
    <footer className="bg-[#5e7919] h-auto md:h-12 w-full absolute bottom-0">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="gap-4 my-auto flex">
          <img alt="Logo de CDSO" src={Logo} className="h-12" />
          <h3 className="uppercase text-white my-auto">Circulo de la salud</h3>
          <Link to={"#!"} className="my-auto">
            <a className="text-white uppercase">Aviso de Privacidad</a>
          </Link>
        </div>
        <div className="flex flex-row md:flex-column gap-4 mx-auto md:mx-0 py-3 md:py-0">
          {icons.map((icon) => (
            <img
              key={icon.id}
              alt="Icon"
              src={icon.imagen}
              className="h-8 my-auto"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
