const UseContent = () =>{
    return(
        <>
        <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="./images/gpt.jpeg" alt="blog"/>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">Chat GPT</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Crea textos a partir de un prompt.</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Modelo de lenguaje avanzado creado por OpenAI para responder preguntas y generar texto coherente en varios idiomas.</p>
                <div class="mt-4">
                    <a href="https://openai.com/blog/chatgpt" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Leer más » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="./images/midjourney.png" alt="blog"/>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">Midjourney</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Crea imagenes a partir de un prompt.</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Midjourney es un modelo de inteligencia artificial que genera imágenes realistas a partir de descripciones o palabras clave proporcionadas.</p>
                <div class="mt-4">
                    <a href="https://www.midjourney.com/home/" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="leer mas"> Leer más » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="./images/adobe.png" alt="blog"/>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">Adobe Podcast</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Mejora calidad de audio de un archivo mp3.</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Grabación y edición de audio con tecnología de IA, todo en la web.</p>
                <div class="mt-4">
                    <a href="https://podcast.adobe.com/" target="_blank" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="leer mas"> Leer más » </a>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default UseContent