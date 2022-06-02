import { useFormik } from "formik";
import * as Yup from "yup";
import Alerta from "../../components/Alerta";
import Boton from "../../components/Boton";

const DatosGenerales = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      legal: "",
      calle: "",
      num: "",
      colonia: "",
      cp: "",
      municipio: "",
      estado: "",
      telefono: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(
        "El nombre del establecimiento es obligatorio"
      ),
      legal: Yup.string().required(
        "El nombre del representante legal es obligatorio"
      ),
      calle: Yup.string().required(
        "El calle del establecimiento es obligatorio"
      ),
      num: Yup.string().required(
        "El número del establecimiento es obligatorio"
      ),
      colonia: Yup.string().required(
        "La colonia del establecimiento es obligatorio"
      ),
      cp: Yup.string().required(
        "El codigo postal del establecimiento es obligatorio"
      ),
      municipio: Yup.string().required(
        "El municipio del establecimiento es obligatorio"
      ),
      estado: Yup.string().required(
        "El estado del establecimiento es obligatorio"
      ),
      telefono: Yup.string().required(
        "El teléfono del establecimiento es obligatorio"
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
          1.- Datos Generales.
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:w-7/12 lg:w-4/12 xl:w-3/12  mx-auto grid gap-10"
        >
          <div className="flex flex-col">
            <label className="text-left mt-0 text-xl md:text-2xl md:pb-2 ">
              Nombre de la Farmacia u Hospital:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400 -mb-10"
              placeholder=" Farmacia/Hospital"
            />
          </div>
          {formik.errors.nombre && formik.touched.nombre ? (
            <Alerta mensaje={formik.errors.nombre} />
          ) : null}

          <div className="flex flex-col">
            <label className="text-left mt-2 text-xl md:text-2xl">
              Nombre del representante legal:
            </label>
            <input
              type="text"
              name="legal"
              id="legal"
              value={formik.values.legal}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400 -mb-10"
              placeholder=" Representante legal"
            />
          </div>
          {formik.errors.legal && formik.touched.legal ? (
            <Alerta mensaje={formik.errors.legal} />
          ) : null}

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Calle:
              </label>
              <input
                type="text"
                name="calle"
                id="calle"
                value={formik.values.calle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. Av. Reforma"
              />
              {formik.errors.calle && formik.touched.calle ? (
                <Alerta mensaje={formik.errors.calle} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Número:
              </label>
              <input
                type="text"
                name="num"
                id="num"
                value={formik.values.num}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. 456"
              />
              {formik.errors.num && formik.touched.num ? (
                <Alerta mensaje={formik.errors.num} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Colonia:
              </label>
              <input
                type="text"
                name="colonia"
                id="colonia"
                value={formik.values.colonia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. Juaréz"
              />
              {formik.errors.colonia && formik.touched.colonia ? (
                <Alerta mensaje={formik.errors.colonia} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Código Postal:
              </label>
              <input
                type="text"
                name="cp"
                id="cp"
                value={formik.values.cp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. 01122"
              />{" "}
              {formik.errors.cp && formik.touched.cp ? (
                <Alerta mensaje={formik.errors.cp} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Municipio:
              </label>
              <input
                type="text"
                name="municipio"
                id="municipio"
                value={formik.values.municipio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. Cuauhtemoc"
              />
              {formik.errors.municipio && formik.touched.municipio ? (
                <Alerta mensaje={formik.errors.municipio} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Estado:
              </label>
              <input
                type="text"
                name="estado"
                id="estado"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. Ciudad de México"
              />
              {formik.errors.estado && formik.touched.estado ? (
                <Alerta mensaje={formik.errors.estado} />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-left mt-2 text-xl md:text-2xl">
                Teléfono:
              </label>
              <input
                type="text"
                name="telefono"
                id="telefono"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="colorInput rounded-xl w-full mx-auto h-10 placeholder-slate-400"
                placeholder=" Ej. 5564174931"
              />
              {formik.errors.telefono && formik.touched.telefono ? (
                <Alerta mensaje={formik.errors.telefono} />
              ) : null}
            </div>
          </div>

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
