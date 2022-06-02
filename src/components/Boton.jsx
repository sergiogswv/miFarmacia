const Boton = () => {
  return (
    <button
      type="submit"
      className="w-full md:w-1/4 mt-4 text-black h-10 text-lg md:text-xl xl:text-3xl cursor-pointer animate-bounce flex absolute bottom-20 right-0"
    >
      Siguiente
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 md:h-9 md:w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </button>
  );
};

export default Boton;
