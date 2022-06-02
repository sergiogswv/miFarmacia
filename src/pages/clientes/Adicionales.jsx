import { useFormik } from "formik";
import * as Yup from "yup";
import Alerta from "../../components/Alerta";
import Boton from "../../components/Boton";

const DatosGenerales = () => {
  const formik = useFormik({
    initialValues: {
      distribucion: "",
      link: "",
      longitud: "",
      latitud: "",
    },
    validationSchema: Yup.object({
      distribucion: Yup.string().required(
        "El canal de distribución es obligatorio"
      ),
      link: Yup.string(),
      longitud: Yup.string().required(
        "El longitud del establecimiento es obligatorio"
      ),
      latitud: Yup.string().required(
        "La latitud del establecimiento es obligatoria"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex h-screen overflow-auto font-[HeadlandOne]">
      <main className="mx-auto w-full pt-[20%] md:pt-[17.5%] lg:pt-[12.5%] xl:pt-[7.5%] ">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center  md:my-auto">
          2.- Adicionales.
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:w-7/12 lg:w-4/12 xl:w-3/12  mx-auto grid gap-10"
        >
          <div className="flex flex-col">
            <label className="text-left mt-0 text-xl md:text-2xl md:pb-2 ">
              Canal de Distribución:
            </label>
            <select
              className="colorInput rounded-xl w-full mx-auto h-10 text-slate-400 text-xl -mb-10 "
              value={formik.values.distribucion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="distribucion"
              id="distribucion"
            >
              <option value={""} disabled>
                -- Seleccione una opción --
              </option>
              <option> - Hospitales</option>
              <option> - Autoservicios</option>
              <option> - Independientes</option>
            </select>
          </div>
          {formik.errors.distribucion && formik.touched.distribucion ? (
            <Alerta mensaje={formik.errors.distribucion} />
          ) : null}

          <div className="grid grid-cols-2 gap-3 -mb-5">
            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                longitud:
              </label>
              <input
                type="text"
                name="longitud"
                id="longitud"
                value={formik.values.longitud}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Longitud: (-999.125)"
              />
              {formik.errors.longitud && formik.touched.longitud ? (
                <Alerta mensaje={formik.errors.longitud} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Número:
              </label>
              <input
                type="text"
                name="latitud"
                id="latitud"
                value={formik.values.latitud}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Latitud: (-122.1264)"
              />
              {formik.errors.latitud && formik.touched.latitud ? (
                <Alerta mensaje={formik.errors.latitud} />
              ) : null}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-left text-xl md:text-2xl">
              Link de página web (opcional para Hospitales):
            </label>
            <input
              type="text"
              name="link"
              id="link"
              value={formik.values.link}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400 -mb-10"
              placeholder=" Link: (https://farmacia.com.mx)"
            />
          </div>
          {formik.errors.legal && formik.touched.legal ? (
            <Alerta mensaje={formik.errors.legal} />
          ) : null}

          <input
            type="submit"
            value={"Enviar"}
            className="w-full md:w-1/4 mt-4 botonBase text-white uppercase md:ml-[75%] rounded-2xl h-10 md:text-xl xl:text-2xl hover:botonHover transition-colors cursor-pointer"
          />
          {/* 
        <Link to={"/login"} className="colorBase text-sm">
          <a>¿Ya tienes una cuenta? Inicia Sesión</a>
        </Link> */}
        </form>

        <Boton />
      </main>
    </div>
  );
};

export default DatosGenerales;
