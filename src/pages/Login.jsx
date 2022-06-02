import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alerta from "../components/Alerta";

const Login = () => {
  // const navigation = Navigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email no válido")
        .required("El correo es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(8, "La contraseña debe de tener mínimo 8 caracter")
        .max(20, "La contraseña debe de tener un máximo de 20 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // <Navigate to={"/clientes"} />;
    },
  });

  return (
    <main className="flex flex-col md:flex-row md:justify-evenly mt-28 md:h-screen md:mt-0">
      <div className="w-full md:w-1/2 md:my-auto pb-10">
        <p className="text-5xl md:text-6xl xl:text-8xl w-11/12 md:w-9/12 mx-auto">
          Continua y verifica tus pasos para ser parte de nuestro programa{" "}
          <span className="colorBase uppercase">Mi Farmacia</span>
        </p>
      </div>
      <div className="my-auto w-full md:w-1/2">
        <h1 className="text-4xl lg:text-7xl text-center my-2 md:my-8 ">
          Iniciar Sesión
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-7/12 mx-auto grid"
        >
          <div className="flex flex-col">
            <label className="text-left my-4 text-xl md:text-2xl">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-600"
              placeholder="Email"
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <Alerta mensaje={formik.errors.email} />
          ) : null}
          <div className="flex flex-col">
            <label className="text-left my-4 text-xl md:text-2xl">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-600"
              placeholder="Contraseña"
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <Alerta mensaje={formik.errors.password} />
          ) : null}

          <Link to={"/"} className="colorBase text-sm">
            <a>¿Aún no tienes cuenta? Registrate aquí</a>
          </Link>

          <input
            type="submit"
            value={"Enviar"}
            className="w-full md:w-1/4 mt-4 botonBase text-white uppercase md:ml-[75%] rounded-2xl h-10 md:text-xl xl:text-2xl hover:botonHover transition-colors cursor-pointer"
          />
        </form>
      </div>
    </main>
  );
};

export default Login;
