const Qoute = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <section className="rounded-lg bg-gray-100 p-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <img
              alt="Women"
              src="./images/Laura_Freberg.jpg"
              className="aspect-square w-full saturate-100 rounded-lg object-cover"
            />

            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl">
              "La percepción y la sensación son dos procesos interdependientes. La percepción es el proceso por el cual el cerebro selecciona, organiza e interpreta la información sensorial para dar sentido al mundo que nos rodea. La sensación, por otro lado, es la detección y respuesta de los órganos sensoriales a los estímulos externos".
              </p>

              <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-gray-500 sm:ms-3">
                  <strong>Laura A. Freberg</strong>, Discovering Behavioral Neuroscience
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
};
export default Qoute;
