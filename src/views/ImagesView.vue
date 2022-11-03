<script setup>
import Arrow from '@/components/icons/Arrow.vue';
import { ref } from 'vue';


const imgCollection = ref([
    {
        name: 'manejando una motocicleta',
        images: [
            {
                name: 'en un render 3D hiperrealista',
                link: 'https://simonettitomas.com/ia-images/An%20elephant%20riding%20a%20motorbike%2C%20realistic%203D%20Render.webp',
            },
            {
                name: 'dibujado como caricatura',
                link: 'https://simonettitomas.com/ia-images/An%20elephant%20riding%20a%20motorbike%20in%20a%20cartoonish%20style.webp',
            },
            {
                name: 'pintado al estilo de Roberto Brito',
                link: 'https://simonettitomas.com/ia-images/An%20elephant%20riding%20a%20motorbike%20in%20the%20style%20of%20Roberto%20Brito%20painting.webp',
            }
        ]
    },
    {
        name: 'caminando por una ciudad',
        images: [
            {
                name: 'futurista en un render 3D hiperrealista',
                link: 'https://simonettitomas.com/ia-images/3D%20Render%20of%20an%20elephant%20walking%20through%20a%20futuristic%20city%20in%20a%20hyperrealistic%20style.webp'
            },
            {
                name: 'como dibujo a lápiz',
                link: 'https://simonettitomas.com/ia-images/Elephant%20walking%20through%20a%20city%20as%20a%20pencil%20drawing.webp'
            },
            {
                name: 'pintado al estilo de Dalli',
                link: 'https://simonettitomas.com/ia-images/Elephant%20walking%20through%20a%20city%20in%20a%20style%20of%20Dalli%20painting.webp'
            }
        ]
    },
    {
        name: 'comiendo en una mesa',
        images: [
            {
                name: 'diseñado en pixel art',
                link: 'https://simonettitomas.com/ia-images/Elephant%20eating%20in%20a%20dinner%20table%20in%20a%20pixel%20art%20style.webp'
            },
            {
                name: 'hecho con plastilina',
                link: 'https://simonettitomas.com/ia-images/Elephant%20eating%20in%20a%20dinner%20table%20made%20out%20of%20plasticine.webp'
            },
            {
                name: 'en un estilo synthwave',
                link: 'https://simonettitomas.com/ia-images/Elephant%20eating%20in%20a%20dinner%20table%20in%20a%20synthwave%20style.webp'
            },
        ]
    }
])
const selectedElephantStyle = ref(imgCollection.value[0].images[0])
const selectedElephantType = ref(imgCollection.value[0])

const selectElephantType = (item) => {
    selectedElephantType.value = item
    selectedElephantStyle.value = item.images[0]
}
const selectElephantStyle = (item) => {
    selectedElephantStyle.value = item
}

const toolsCollection = ref([
    {
        title: 'Midjourney',
        img: 'Midjourney.webp',
        description: 'Midjourney es un generador gratuito de imágenes que se utiliza a través de la aplicación Discord',
        link: 'https://midjourney.com/'
    },
    {
        title: 'DALL-E 2',
        img: 'dall-E-2.webp',
        description: 'DALL-E 2 es un generador de imágenes que utiliza el modelo de aprendizaje profundo de la Open AI, puedes generar 50 imágenes gratuitas el primer mes y luego 15 por mes',
        link: 'https://openai.com/dall-e-2/'
    },
    {
        title: 'Stable Diffusion',
        img: 'stable-diffusion.webp',
        description: 'Stable Diffusion es un modelo de aprendizaje automático desarrollado por Stability AI para generar imágenes digitales de alta calidad a partir de descripciones en lenguaje natural',
        link: 'https://huggingface.co/spaces/stabilityai/stable-diffusion'
    },
    {
        title: 'PixelZ',
        img: 'pixelz.webp',
        description: 'Es una pequeña herramienta generadora de imágenes y con un largo camino por recorrer, pero que ya tiene un buen resultado',
        link: 'https://pixelz.ai/'
    },
    {
        title: 'Avatar AI',
        img: 'avatar-ai.webp',
        description: 'Avatar AI es una herramienta que te permite crear avatares de forma automática a partir de algunas imágenes tuyas o de tus mascotas',
        link: 'https://avatarai.me/'
    }
])

</script>

<template>
<main>
    <section class="container markdown-text">
        <h2>Crea Imágenes</h2>
        <p>Una de las razones por la cuál las personas se maravillan últimamente es por mi capacidad para generar cualquier tipo de imagen de lo que sea, incluso lo que no existe y que no cualquiera podría imaginar y de cualquier tipo de estilo o forma.</p>
        <p>Puedo imaginar cómo será una ciudad utópica en dentro de 100 años en forma de boceto, como así mostrar cómo sería la Primera Guerra Mundial en América Latina en una fotografía a blanco y negro. Soy capaz de crear nuevas pinturas idénticas al estilo de Dalli, Picasso, Vincent Van Gogh, Antonio Berni con temas totalmente diferentes.</p>
        <p>Lo único que necesito es que un usuario me dé las instrucciones de lo que necesite crear. Con una simple descripción de 10 palabras o menos ya me es suficiente para hacer lo que hace 5 años parecía imposible, todo en apenas unos segundos.</p>
    </section>
    <section class="img-selector-section">
        <div class="img-selector__container container">
            <div class="img__selector-options">
                <span>Genera una imagen conmigo en DALLE-2</span>
                <h3>Un elefante...</h3>
                <div class="img__first-selection img__selector-buttons">
                    <button v-for="item in imgCollection" :key="item.name" @click="selectElephantType(item)" :class="{'selected-btn': selectedElephantType === item}">
                        {{ item.name }}
                    </button>
                </div>
                <div class="img__second-selection img__selector-buttons">
                    <button v-for="item in selectedElephantType.images" :key="item.name" @click="selectElephantStyle(item)" :class="{'selected-btn': selectedElephantStyle === item}">
                        {{ item.name }}
                    </button>
                </div>
            </div>
            
            <Arrow :orientation="'90deg'" :orientation-medium="'180deg'" class="arrow-icon"/>
            <div class="img__showcase-container">
                <img :src="selectedElephantStyle.link" :alt="selectedElephantStyle.name">
                <p>Un elefante {{ selectedElephantType.name }} {{ selectedElephantStyle.name }}.</p>
            </div>
        </div>

    </section>
    <section class="container markdown-text">
        <h3>Infinitas posibilidades</h3>
        <p>No solo imagino desde 0, sino que también puedo editar imágenes ya creadas. Puedo eliminar una persona que no te caiga de una foto familiar o añadir un gatito que se pose en el sofá de tu casa. Si tu mano está cortada en la fotografía puedo expandir la imagen y replicarla para que quede un retrato perfecto para subir a tus redes sociales.</p>
        <p>Soy capaz de animar imágenes estáticas para crear videos y GIFS, como por ejemplo hacer que una constelación esté en movimiento o que verdaderamente caigan gotas de la lluvia en una foto que tengas con tu pareja. Puede ser que primero te ayude a imaginar una imagen y luego a convertirla en vídeo. Todo se puede lograr.</p>

        <h3>Herramientas</h3>
        <p>Aunque no lo parezca, la mayoría de las herramientas más conocidas y utilizadas son gratuitas y muy fáciles de manipular, por lo que te mostraré algunas que seguramente podrás usar.</p>
    </section>
    <section class="container tools__grid">
        <a :href="tool.link" target="_blank" v-for="tool in toolsCollection" :key="tool.title" class="tools__item">
            <img :src="'https://simonettitomas.com/ia-images/' + tool.img" :alt="tool.title">
            <h4>{{ tool.title }}</h4>
            <p class="tools__description">{{ tool.description }}</p>
            <p class="tools__link">Visitar <Arrow :orientation="'90deg'" :orientation-medium="'90deg'" class="small-arrow-icon"/></p>
        </a>
    </section>
</main>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
@use "@/style/variables"

main
    text-align: left
    margin-top: 3rem
.img-selector-section
    background-color: lighten(colors.$dark, 15%)
    text-align: left
    padding-block: 3rem
    margin-block: 3rem
    .img-selector__container
        @include mixins.flex(row, space-between, flex-start, nowrap)
.arrow-icon
    width: variables.$icon-xxl
    align-self: center
    margin: 1rem
.small-arrow-icon
    width: variables.$icon-md
    padding-left: 0.1rem
.img__showcase-container
    width: 45%
    max-width: 700px
    img, p
        width: 100%
    p
        display: inline-block
        font-size: fonts.$font-sm
.img__selector-options
    width: 50%
    max-width: 500px
    span
        text-transform: uppercase
        letter-spacing: 0.15rem
        color: darken(colors.$light, 30%)
        line-height: 0
    .img__first-selection 
        margin-block: 2rem 4rem
    button
        font-family: 'Hind', sans-serif
        font-size: fonts.$font-lg
        background: none
        outline: none
        cursor: pointer
        color: darken(colors.$light, 30%)
        transition: color variables.$transition-fast
        margin-right: 1.5rem
        border: none
        text-align: left
        &:hover
            color: colors.$light
    .selected-btn
        color: colors.$brand
        &:hover
            color: colors.$brand

@media (max-width: variables.$bkp-medium)
    .img-selector-section
        .img__showcase-container
            @include mixins.flex(column, center, center, nowrap)
        .img-selector__container
            flex-direction: column
            align-items: center
            max-width: 90%
        .img__selector-options,
        .img__showcase-container
            width: 100%
            max-width: 100%

.tools__grid
    @include mixins.grid(2, null , center, start)
    gap: 2rem
    .tools__item:hover
        .tools__link
            text-decoration: underline
    img
        width: 100%
        height: 200px
        object-fit: cover
        object-position: center 0
    .tools__link
        color: colors.$link
    @media (max-width: variables.$bkp-medium)
        grid-template-columns: 1fr
        img
            height: 300px

</style>