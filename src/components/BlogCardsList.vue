<script setup>
import sanity from "../client";
import { RouterLink } from 'vue-router'
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
defineProps({
    postList: {
        type: Array,
        required: true,
    },
    size: {
        type: String,
        default: 'medium'
    },
})

const imageUrlFor = (source) => {
      return imageBuilder.image(source);
}
</script>

<template>
    <div class="cards__container" :class="{ 'cards--medium': size === 'medium', 'cards--small': size === 'small'}">
            <RouterLink v-for="item in postList" :key="item._id" :to="'/blog/' + item.slug.current" class="cards__item">
                <div class="item__img--gradient">
                    <img :src="imageUrlFor(item.coverImage).width(600)" :alt="item.title">
                </div>
                <h4>{{ item.title }}</h4>
            </RouterLink>
        </div>
</template>


<style lang="sass" scoped>
@use "@/style/mixins"
@use "@/style/variables"
@use "@/style/colors"
.cards__container
    gap: 2rem
    max-width: 1280px
    width: 95%
    margin-inline: auto
.cards--medium
    @include mixins.grid(2, null, center, center)
    @media (max-width: variables.$bkp-medium)
        @include mixins.grid(1, null, center, center)
.cards--small
    @include mixins.grid(3, null, center, center)
    @media (max-width: variables.$bkp-medium)
        @include mixins.grid(2, null, center, center)
.cards__item
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
        text-shadow: 2px 3px 3px rgba(0,0,0,0.3)
</style>