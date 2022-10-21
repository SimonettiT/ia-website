<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Cover.vue'
</script>

<template>
    <Header/>
    <Suspense>
        <RouterView />
        <template #fallback>
            Loading content...
        </template>
    </Suspense>
</template>

<style lang="sass">
@use "@/style/base"
@use "@/style/fonts"
@use "@/style/links"
@use "@/style/colors"



    
#app
    font-family: "Hind", sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    line-height: 1.5

body
    background-color: colors.$dark
    color: colors.$light
    padding-bottom: 10rem // DELETE AFTER

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


//   When the modal is open, the body isn't scrollable.
//   This style is marked as !important because otherwise it is nullified by the default element style  

#modal-open
    overflow: hidden !important





</style>
