<script setup>
import { ref } from 'vue';
import Logo from '@/components/icons/Logo.vue';
import NavbarIcon from '@/components/icons/NavbarIcon.vue';
import NavMenu from '@/components/NavMenu.vue';
const isNavOpen = ref(false);

</script>
<template>

    <header>
        <Transition name="fade">
            <NavMenu v-if="isNavOpen" @closeNavMenu="isNavOpen = false"/>
        </Transition>
        <div class="cover__background">
            <video
                class="cover__background--video"
                autoplay
                loop
                preload="metadata"
                muted
            >
                <source src="@/assets/background-header.mp4" type="video/mp4">
                <!-- <source src="@/assets/background-header.webm" type="video/webm"> -->
            </video>
        </div>

        <div class="cover__content">
            <nav>
                <RouterLink to="/" title="Ir a Inicio">
                    <Logo class="nav__logo cover__icon"/>
                </RouterLink>
                <button class="nav__burger-btn" title="Abrir menú de navegación">
                    <NavbarIcon class="cover__icon" @click="isNavOpen = !isNavOpen"/>
                </button>
            </nav>
            <div class="cover__titles">
                <h1 data-text="ARTE.AI">ARTE.AI</h1>
                <h5>¿Qué quieres crear conmigo?</h5>
                <div class="cover__mediatype-container">
                    <RouterLink to="/" class="cover__btn">Textos</RouterLink>
                    <RouterLink to="/generate/images" class="cover__btn">Imágenes</RouterLink>
                    <RouterLink to="/" class="cover__btn">Sonidos</RouterLink>
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


nav
    @include mixins.flex(row, space-between, center, nowrap)
    width: 95%
    margin-inline: auto
    padding-top: 1.5rem
    .cover__icon
        fill: colors.$light
        width: 4rem
    .nav__burger-btn
        border: none
        background-color: transparent
        cursor: pointer
        svg
            color: colors.$light
            width: 3rem
.cover__titles
    @include mixins.flex(column, center, center, nowrap)
    width: 100%
    height: 100%
    padding-bottom: 4rem
    h1
        margin-bottom: 3rem
        max-width: 95%
    h5
        margin-bottom: 1rem
.cover__mediatype-container
    @include mixins.flex(row, center, center, nowrap)
    gap: 1rem
    @media (max-width: variables.$bkp-small)
        flex-direction: column
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
    &:hover
        color: colors.$light
        background-color: opacify(colors.$dark, 0.5)
        border-color: colors.$brand
        transition: all variables.$transition-fast
        box-shadow: variables.$shadow-1
    @media (max-width: variables.$bkp-small)
        width: 100%

.cover__titles h1
    animation: glitch 2s linear infinite
    letter-spacing: 0.5rem
    &:before,
    &:after
        content: attr(data-text)
        position: absolute
        left: 0

    &:before
        animation: glitchTop 2s linear infinite
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
    &:after
        animation: glitchBotom 1.5s linear infinite
        clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)
        -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)


@keyframes glitch
    2%, 64%
        transform: translate(2px,0) skew(0deg)

    4%, 60%
        transform: translate(-2px,0) skew(0deg)

    62%
        transform: translate(0,0) skew(5deg) 



@keyframes glitchTop
  2%, 64%
    transform: translate(2px,-2px)

  4%, 60%
    transform: translate(-2px,2px)

  62%
    transform: translate(13px,-1px) skew(-13deg) 




@keyframes glitchBotom
  2%, 64%
    transform: translate(-2px,0)

  4%, 60%
    transform: translate(-2px,0)

  62%
    transform: translate(-22px,5px) skew(21deg) 


.fade-enter-active,
.fade-leave-active
  transition: all 0.5s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: translateY(40px) scale(0.97)
</style>