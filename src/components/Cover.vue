<script setup>
import { ref } from 'vue';

const isMobile = ref(false);
</script>
<template>
    <header>
      <div class="cover__background">
            <video v-if="!isMobile"
                class="cover__background--video"
                autoplay
                loop
                preload="metadata"
                muted
            >
                <source src="@/assets/background-header.mp4" type="video/mp4">
                <!-- <source src="@/assets/reel-website.webm" type="video/webm"> -->
            </video>

            <img v-else-if="isMobile" alt="ia-background" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.atriainnovation.com%2Fcomo-de-inteligente-puede-ser-una-ia%2F&psig=AOvVaw2wzeYRtSp1NBTDEUZXESXb&ust=1665936413448000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJinnN7O4voCFQAAAAAdAAAAABAE"/>
        </div>

        <div class="cover__content">
            <nav></nav>
            <div class="cover__titles">
                <h1>Inteligencia Artificial</h1>
                <h5>¿Qué quieres crear conmigo?</h5>
                <div class="cover__mediatype-container">
                    <RouterLink to="" class="cover__btn">Textos</RouterLink>
                    <RouterLink to="" class="cover__btn">Imágenes</RouterLink>
                    <RouterLink to="" class="cover__btn">Sonidos</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/variables"
@use "@/style/mixins"

header
    height: 100vh
    min-height: 550px
    position: relative
    color: colors.$light

// Background
.cover__background
    filter: brightness(0.5)
    top: 0
    left: 0
    overflow: hidden
    z-index: variables.$z-content-bellow
.cover__background--video
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    object-fit: cover
.cover__background, .cover__background--video
    width: 100%
    height: 100%
    position: absolute
.cover__content
    z-index: variables.$z-content-above
    height: 100%
.cover__titles
    @include mixins.flex(column, center, center, nowrap)
    width: 100%
    height: 100%
    h1
        margin-bottom: 5rem
    h5
        margin-bottom: 1rem
.cover__btn
    border: 0
    font-weight: 400
    font-size: fonts.$font-base
    padding: 7px 25px
    cursor: pointer
    background-color: transparent
    color: darken(colors.$light, 5%)
    letter-spacing: 0.08rem
    border: 1px solid darken(colors.$light, 40%)
    margin-inline: 1rem
    &:hover
        color: colors.$light
        background-color: opacify(colors.$dark, 0.5)
        border-color: colors.$brand
        transition: all variables.$transition-fast
        box-shadow: variables.$shadow-1
</style>