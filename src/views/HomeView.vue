<script setup>
import sanity from "../client";
import { useDatabaseStore } from '@/stores/sanityDB';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "sitePages"] {
  _id,
  title,
  coverImage,
  slug,
}`

const db = useDatabaseStore();
await db.getIndexList(query);

const imageUrlFor = (source) => {
      return imageBuilder.image(source);
}

const indexLinks = ref([
    {
        title: "¿Quieres saber sobre mí?",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
    {
        title: "¿Dónde me puedes encontrar hoy en día?",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
    {
        title: "¿Qué soy?",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
    {
        title: "Lo que opinan expertos sobre mí",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
    {
        title: "Prueba en Instagram",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
    {
        title: "Mi futuro",
        imgSource: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "/ia-evolution"
    },
])

</script>
<template>
    <main>
        <h2 class="main__title">Índice de contenidos</h2>
        <div class="index__container">
            <RouterLink v-for="item in db.indexList" :to="item.slug.current" class="index__item">
                <div class="item__img--gradient">
                    <img :src="imageUrlFor(item.coverImage).width(480)" :alt="item.title">
                </div>
                <h4>{{ item.title }}</h4>
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
    width: 100%
    height: auto
    aspect-ratio: 4/3
    border-radius: 10px
    overflow: hidden
    max-width: 624px
    max-height: 474px
    position: relative
    background-color: lighten(colors.$dark, 5%)
    &:hover
        img
            filter: brightness(0.8)
    &:active
        h4
            color: colors.$brand
    .item__img--gradient
        background-color: black
        height: 100%
    img
        width: 100%
        height: 100%
        display: block
        z-index: variables.$z-content
        cursor: pointer
        object-fit: cover
        object-position: center 0
        background-color: colors.$dark
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px
        transition: all 0.3s ease-in-out
    &:hover img
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
        transform: scale(1.05)
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
