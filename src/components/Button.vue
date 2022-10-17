<script setup>
</script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/variables"
.btn
    border: 0
    font-weight: 400
    font-size: fonts.$font-base
    padding: 7px 25px
    cursor: pointer
    background-color: transparent
    color: darken(colors.$light, 5%)
    letter-spacing: 0.04rem
    border: 1px solid darken(colors.$light, 40%)
    margin-inline: 1rem
    &:hover
        color: colors.$light
        background-color: colors.$brand
        transition: all variables.$transition-fast
</style>