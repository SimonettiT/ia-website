<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Cover.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <Header/>
    <Suspense>
        <RouterView v-slot="{ Component }"> 
            <Transition name="fade">
                <component class="main__container" :key="route.path" :is="Component" id="main"/>
            </Transition>
        </RouterView>
        <template #fallback>
            Loading content...
        </template>
    </Suspense>
    <Footer />
</template>

<style lang="sass">
@use "@/style/base"
@use "@/style/fonts"
@use "@/style/links"
@use "@/style/colors"
@use "@/style/animations"



    
#app
    font-family: "Hind", sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    line-height: 1.5

body
    background-color: colors.$dark
    color: colors.$light

//  Scrollbar
* 
    scrollbar-width: auto
    scrollbar-color: lighten(colors.$dark, 10%)
*::-webkit-scrollbar 
    width: 0.7rem
*::-webkit-scrollbar-track 
    background: colors.$dark
*::-webkit-scrollbar-thumb 
    background-color: lighten(colors.$dark, 20%)
    border-radius: 10px
    &:hover
        background-color: lighten(colors.$dark, 25%)

.main__container
    min-height: 100vh
//   When the modal is open, the body isn't scrollable.
//   This style is marked as !important because otherwise it is nullified by the default element style  

#modal-open
    overflow: hidden !important





</style>
