import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header aria-label="Page Header" className="bg-gray-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-thin text-gray-50 sm:text-3xl">
              Percepción y sensación Humana Vs Máquina
              </h1>

              <p className="mt-1.5 text-sm text-gray-200 font-thin">
              La percepción y sensación de las máquinas son programadas y limitadas por su diseño y capacidad de procesamiento. 
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

            <Link to={"/preguntas_frecuentes"}>
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-900 px-5 py-3 text-gray-200 transition hover:text-purple-300 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> Preguntas Frecuentes </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              </Link>

              <Link to={"/"}> 
              <button
                className="block rounded-lg font-semibold bg-sky-500 px-5 py-3 text-sm text-white transition hover:bg-sky-600 focus:outline-none focus:ring"
                type="button"
              >
                Inicio
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
