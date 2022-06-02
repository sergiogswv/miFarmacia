import Logo from "../public/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 flex justify-between h-20 md:h-32  bg-gradient-to-r from-[#5e8420] to-[#95cb30] w-full ">
      <img alt="Logo de CDSO" src={Logo} className="md:ml-32" />
    </nav>
  );
};

export default Navbar;
