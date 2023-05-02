const Banner = () => {
  return (
    <>
      <section className="overflow-hidden bg-[url('./images/ia_women_banner.jpg')] bg-cover bg-top bg-no-repeat opacity-95 h-600">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-thin text-left text-white sm:text-3xl md:text-5xl shadow-lg">
              Términos clave sobre percepción y sensación humana vs máquina
            </h2>

            <p className="max-w-lg text-left text-gray-300 md:mt-6 md:text-lg md:leading-relaxed font-thin shadow-2xl block backdrop-blur-lg p-5 rounded-3xl">
              La percepción y sensación humana son procesos cognitivos complejos
              que implican la interpretación y análisis de información sensorial
              recibida por los órganos de los sentidos. Estos procesos están
              influenciados por factores como la experiencia previa, el contexto
              y las expectativas.
              <br />
              <br />
              <span>
                Por otro lado, la percepción y sensación de las máquinas son
                programadas y limitadas por su diseño y capacidad de
                procesamiento. Aunque las máquinas pueden detectar y procesar
                información sensorial de manera rápida y precisa, no tienen la
                capacidad de interpretarla y contextualizarla de la misma manera
                que lo hacen los seres humanos. En resumen, la percepción y
                sensación humana son procesos complejos que implican la
                interpretación y contextualización de información sensorial,
                mientras que la percepción y sensación de las máquinas son
                limitadas por su diseño y capacidad de procesamiento.
              </span>
            </p>
            <audio class="w-full m-2 rounded-3xl" controls>
              <source src="./sound/La_percepcion.mp3" type="audio/mp3" />
              Tu navegador no admite el elemento de audio.
            </audio>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
