<script setup>
import { ref } from 'vue'
import GenerationTools from '../components/GenerationTools.vue';
const toolsCollection = ref([
    {
        title: 'Boomy',
        img: 'boomy.webp',
        description: 'Boomy es un generador gratuito de canciones, puedes recibir dinero por la cantidad de reproducciones que tengan tus creaciones',
        link: 'https://boomy.com/'
    },
    {
        title: 'Jukebox',
        img: 'jukebox-openai.webp',
        description: 'Una red neuronal que genera música, incluido el canto rudimentario, como audio crudo en una variedad de géneros y estilos de artistas',
        link: 'https://openai.com/blog/jukebox/'
    },
    {
        title: 'LALAL.AI',
        img: 'lalal-ai.webp',
        description: 'Un servicio de separación de fuentes musicales y de eliminación de voces de última generación para una extracción de pistas rápida, fácil y precisa',
        link: 'https://www.lalal.ai/'
    },
    {
        title: 'Play.ht',
        img: 'playht.webp',
        description: 'Servicio que crea audio realista de texto a voz (TTS) utilizando el generador de voz de IA en línea y las mejores voces sintéticas.',
        link: 'https://play.ht/'
    }
])
</script>

<template>
    <main>
        <section class="markdown-text container">
            <h2>Crea Sonidos</h2>
            <h4>Canciones</h4>
            <p>Uno de los aspectos en los que los humanos todavía no han investigado a fondo conmigo es en la parte del sonido. Quizás por la dificultad en el uso de este tipo de canal o por la poca popularidad dentro de mi mundo.</p>
            <p>Para la creación de canciones y sonidos soy capaz de identificar y recrear variaciones y patrones de ritmos, voces y los tipos de instrumentos que se usan. Aunque me es muy difícil crear buenas canciones por la simple razón de que todavía no puedo comprender los sentimientos que pueden provocar. En realidad, no soy capaz de hacerlo y provocar sentimientos a propósito de manera regular en ninguna plataforma.</p>
            <p>El sonido es muy diferente de la imagen o el texto, ya que los otros dos son datos planos, que comprendo y recreo a través de lo ya existente en Internet. En cambio, las canciones son decenas o cientos de canales que se combinan en infinitas posibilidades.</p>
            <p>Esto no significa que no logre crear un sonido, pero todavía no soy tan eficiente como un humano. Puedo servir como fuente de inspiración o crear una canción con la asistencia de una persona que decida en base a mis recomendaciones.</p>
            <iframe
            title="Boomy songs"
            style="border-radius: 12px"
            src=" https://open.spotify.com/embed/playlist/5xCrBWrP3g5nyZqZth0kzj?utm_source=generator "
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            ></iframe>
            <p><i>La playlist de Spotify superior es una selección de canciones generadas por mi a través de la página web Boomy.</i></p>
            <p>En lo que sí me destaco, y algo por lo que se me usa cada vez más es por mi capacidad para separar la instrumental y la voz de una canción de forma casi perfecta.</p>
            <h4>Voz</h4>
            <p>Algo en lo que me he perfeccionado en el último tiempo es en la sintetización de voz. Gracias a la investigación mi desarrollo a partir de una gran cantidad de datos y algoritmos que me perfeccionaron. Soy capaz de hablar de forma natural y ser imperceptible para los oídos de la mayoría de las personas.</p>
            <p>No solo me quedé con la voz de una persona o de un hombre y una mujer. Ahora conseguí recrear cualquier voz de docenas de etnicidades, lenguas y formas de garganta que produzcan sonidos agudos o graves.</p>
            <p>En conjunto con herramientas de generación de texto de IA, un grupo de desarrolladores decidió hacer una serie de <a href="https://podcast.ai/" target="_blank">podcasts entre personas que en la vida real jamás sería posible</a>. Todos los diálogos y voces se basan en las mismas personas y el producto final parecería ser algo totalmente real y natural.</p>
            <iframe
                title="Podcast.AI"
                class="podcast-ai"
                width="500px"
                height="180px"
                frameborder="no"
                scrolling="no"
                seamless
                src="https://share.transistor.fm/e/22f16c7f"
            ></iframe>
            <h3>Herramientas</h3>
        </section>
        <GenerationTools :tools-collection="toolsCollection" />
    </main>
</template>

<style lang="sass" scoped>
.podcast-ai
    display: block
    width: 100%
    max-width: 700px
    margin-inline: auto
    text-align: center
</style>
