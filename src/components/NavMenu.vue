<script setup>
import { onMounted, ref } from 'vue';
import Close from '@/components/icons/Close.vue';
import Logo from '@/components/icons/Logo.vue';


const emit = defineEmits(["closeNavMenu"])

const closeNavMenu = () => {
    emit('closeNavMenu')
}
const modal = ref(null);
onMounted(() => {
  modal.value.focus();
});
</script>

<template>
    <div ref="modal" class="nav__background" @keyup.esc="closeNavMenu()" tabindex="0">
        <div class="nav__container">
            <Close class="close-icon" @click="closeNavMenu()"/>
            <Transition name="nav-links-list">
                <div class="nav__wrapper">
                    <RouterLink @click="closeNavMenu()" to="/" class="nav__link">Inicio</RouterLink>
                    <h4 class="nav__category-title">Imagina</h4>
                    <div class="nav__links-section">
                        <RouterLink @click="closeNavMenu()" to="/generate/text" class="nav__link">Textos</RouterLink>
                        <RouterLink @click="closeNavMenu()" to="/generate/images" class="nav__link">Imágenes</RouterLink>
                        <RouterLink @click="closeNavMenu()" to="/generate/sound" class="nav__link">Sonidos</RouterLink>
                    </div>
                </div>
            </Transition>
            <Logo class="nav__background-logo"/>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
.nav__background
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: lighten(colors.$dark, 10%)
    z-index: variables.$z-modal-background
    overflow: hidden
    &:focus-visible
        outline: none
.nav__container
    position: relative
    height: 100%
    width: 100%
.nav__background-logo
    position: absolute
    top: -60px
    left: -40px
    aspect-ratio: 1
    width: 120%
    min-width: 400px
    z-index: variables.$z-modal-background
    fill: darken(colors.$light, 80%)
    color: darken(colors.$light, 80%)
    user-select: none
.close-icon
    position: absolute
    top: 2rem
    right: 2rem
    width: 3rem
    height: 3rem
    cursor: pointer
    z-index: variables.$z-modal-above
.nav__wrapper
    @include mixins.flex(column, center, flex-start, nowrap)
    gap: 1rem
    text-align: left
    width: 80%
    margin-inline: auto
    padding-top: 5rem
    .nav__links-section
        @include mixins.flex(column, center, flex-start, nowrap)
        @media (min-width: variables.$bkp-large) and (max-height: 630px)
            flex-direction: row
            width: 100%
            justify-content: space-between
    .nav__link
        font-size: fonts.$font-xxxl
        font-family: "Khand", sans-serif
        letter-spacing: 0.3rem
        color: colors.$light
        position: relative
        transition: padding-left 0.3s ease-in-out
        z-index: variables.$z-modal-content
        &::before
            content: ''
            position: absolute
            z-index: -1
            top: 0
            bottom: 0
            left: -0.25em
            right: -0.25em
            background-color: colors.$brand
            transform-origin: center right
            transform: scaleX(0)
            transition: transform 0.2s ease-in-out
        &:hover::before
            transform: scaleX(1)
            transform-origin: center left
        &:hover
            padding-left: 2rem
    .nav__category-title
        z-index: variables.$z-modal-content
        letter-spacing: 0.5rem
        color: darken(colors.$light, 20%)



</style>