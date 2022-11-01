<script setup>
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

</script>

<template>
<main>
    <div class="container">
        <h2>Crea Imágenes</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed cumque voluptas dolorem sequi quae voluptates explicabo similique corrupti, quibusdam animi velit quo nulla perspiciatis consequuntur expedita recusandae mollitia natus. </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed cumque voluptas dolorem sequi quae voluptates explicabo similique corrupti, quibusdam animi velit quo nulla perspiciatis consequuntur expedita recusandae mollitia natus. </p>

    </div>
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
            <div class="img__showcase-container">
                <img :src="selectedElephantStyle.link" :alt="selectedElephantStyle.name">
                <p>Un elefante {{ selectedElephantType.name }} {{ selectedElephantStyle.name }}.</p>
            </div>
        </div>

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
    margin-top: 2rem
.img-selector-section
    background-color: lighten(colors.$dark, 10%)
    text-align: left
    padding-block: 3rem
    .img-selector__container
        @include mixins.flex(row, space-between, flex-start, nowrap)
.img__showcase-container
    width: 45%
    max-width: 600px
    img, p
        width: 100%
        max-width: 555px
        padding-inline: auto
    p
        display: inline-block
        font-size: fonts.$font-sm
.img__selector-options
    width: 50%
    max-width: 900px
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
            margin-block: 2rem 0
</style>