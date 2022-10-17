<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'


const indexLinks = ref([
    {
        title: "¿Quieres saber sobre mí?",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
    {
        title: "¿Dónde me puedes encontrar hoy en día?",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
    {
        title: "¿Qué soy?",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
    {
        title: "Lo que opinan expertos sobre mí",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
    {
        title: "Prueba en Instagram",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
    {
        title: "Mi futuro",
        imgSource: "https://www.science.org/do/10.1126/science.abc2274/abs/AIevolution_1280p.jpg",
        link: "/ia-evolution"
    },
])

</script>
<template>
    <main>
        <h2 class="main__title">Índice de contenidos</h2>
        <div class="index__container">
            <RouterLink v-for="item in indexLinks" :to="item.link" class="index__item">
                <div>
                    <img :src="item.imgSource" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </div>
            </RouterLink>
        </div>
    </main>
</template>

<style lang="sass" scoped>
@use "@/style/mixins"
@use "@/style/variables"
@use "@/style/colors"

.main__title
    margin-block: 2rem
.index__container
    @include mixins.grid(2, null, center, center)
    gap: 2rem
    max-width: 1280px
    width: 95%
    margin-inline: auto
    @media (max-width: variables.$bkp-medium)
        @include mixins.grid(1, null, center, center)
.index__item
    position: relative
    background-color: lighten(colors.$dark, 5%)
    img
        width: 100%
        height: 100%
        z-index: variables.$z-content
        cursor: pointer
        object-position: center 0
        object-fit: cover
        background-color: colors.$dark
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px
        transition: all 0.3s ease-in-out
        display: block
    &:hover img
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
        filter: brightness(0.7)
    h4
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        padding: 1rem
        color: colors.$light
        font-weight: 400
        text-align: right
        z-index: variables.$z-content-above
        cursor: pointer
        transition: all 0.3s ease-in-out
</style>
