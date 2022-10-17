<script setup>
import { ref } from 'vue';


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
        <div class="index__container">
            <RouterLink v-for="item in indexLinks" :to="item.link" class="index__item">
                <div>
                    <img :src="item.imgSource" alt="">
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
.index__container
    @include mixins.grid(2, null, center, center)
    @media (max-width: variables.$bkp-medium)
        @include mixins.grid(1, null, center, center)
.index__item
    position: relative
    img
        width: 100%
        height: 100%
        display: block
        z-index: variables.$z-content
        cursor: pointer
        object-fit: cover
        object-position: center 0
        background-color: darken(colors.$light, 10%)
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px
        transition: all 0.3s ease-in-out
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
        font-size: 1.5rem
        font-weight: 400
        text-align: center
        z-index: variables.$z-content-above
        cursor: pointer
        transition: all 0.3s ease-in-out
</style>
