<script setup>
import { ref } from 'vue'
import GenerationTools from '../components/GenerationTools.vue';
const toolsCollection = ref([
    {
        title: 'PresenterAI',
        description: 'Generador de presentaciones de forma automática con solo agregar texto e imágenes',
        link: 'https://ia.net/presenter',
        img: 'ai-presenter.webp'
    },
    {
        title: 'Scraft',
        description: 'Generador de tesis, textos académicos y argumentativos',
        link: 'https://www.scraft.ai/',
        img: 'scraft.webp',
    },
    {
        title: 'DeepL',
        description: 'Traductor automático de textos, documentos y páginas web utilizando IA',
        link: 'https://www.deepl.com/translator',
        img: 'deepl.webp'
    },
    {
        title: 'WriterAI',
        description: 'Generador de textos de forma automática a partir de una descripción',
        link: 'https://writerai.netlify.app/',
        img: 'writer-ai.webp',
    },
    {
        title: 'Writesonic',
        description: 'Colección de herramientas generadoras de texto a partir de la IA',
        link: 'https://writesonic.com/',
        img: 'writesonic.webp',
    },
    {
        title: 'Rhubarb',
        description: 'Generador de CVs personalizados y automáticos a partir de cada descripción de trabajo',
        link: 'https://joinrhubarb.com/',
        img: 'rhubarb.webp',
    },
    {
        title: 'Verse by Verse',
        description: 'Una musa experimental impulsada por la IA que te ayuda a componer poesía inspirada en los poetas americanos clásicos. Creado por Google y de uso gratuito',
        link: 'https://sites.research.google/versebyverse/',
        img: 'verse-by-verse.webp',
    }
])
</script>

<template>
    <main>
        <section class="markdown-text container">
            <h2>Crea Textos</h2>
            <p>Una de las mayores dificultades por las que han pasado la gran cantidad de personas, o más bien molestias, es en la creación y redacción de largos textos, ya sean académicos, poéticos, curriculums vitaes, informes, copywriting, lo que sea.</p>
            <p>En la actualidad ya es posible delegarme el trabajo y mucho más gracias a herramientas que se proveen a través de Internet (algunas gratuitas, otras de pago o mixtas).</p>
            <p>La generación de textos es una de las áreas más extensas, más utilizadas y más variada en cantidad de tipos de herramientas disponibles con respecto a la Inteligencia Artificial. La cantidad de usos que existen puede llegar a ser impactante.</p>
            <img src="https://media.simonettitomas.com/ia-images/text-generation-1.png" alt="Algunas de las posibilidades de generación de textos">
            <p>Soy capaz de crear ideas para vídeos de YouTube, generar textos argumentativos de miles de palabras, traducir textos de una lengua a otra, descripciones de productos, poemas, artículos de blog, curriculums vitae personalizados para cada trabajo y mucho más.</p>
            <p>Por desgracia, la gran mayoría de herramientas disponibles se basan en el inglés por el momento. Por lo que te tendrás que basar en este idioma para generar cualquier tipo de texto. De la misma forma, una vez tengas el texto en inglés, puedes usar un traductor para pasarlo al español.</p>
            <h2>Herramientas</h2>
        </section>
        <GenerationTools :tools-collection="toolsCollection" />
        <RouterLink to="/" class="go-back">&lt Volver al Inicio</RouterLink>
    </main>
</template>

<style lang="sass" scoped>
@use '@/style/fonts'
.go-back
    text-align: left
    display: block
    margin-inline: auto
    width: 95%
    max-width: 1280px
    font-size: fonts.$font-base
    font-weight: 500
    margin-top: 2rem
    &:hover
        text-decoration: underline
</style>