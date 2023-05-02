const Section1 = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-gray-950 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl text-white md:text-3xl font-thin">
                Descripción de la percepción y sensación humana y su relación con el cerebro
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block font-thin">
                La percepción y sensación humana son procesos complejos e interrelacionados que nos permiten interactuar con el entorno y tomar decisiones de manera adecuada. La capacidad del cerebro humano para interpretar y dar sentido a la información sensorial es una de las diferencias más importantes entre la percepción y sensación humana y la de las máquinas.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="https://learn.microsoft.com/es-es/surface/inclusive-tech-lab/sensation-perception"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-purple-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Más Información
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="./images/monkey.png"
                className="h-40 w-full object-cover saturate-150 sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src="./images/brain.png"
                className="h-40 w-full object-cover saturate-200 sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section1;
