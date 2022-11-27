<script setup>
import Arrow from '@/components/icons/Arrow.vue';

defineProps({
    toolsCollection: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="container tools__grid">
        <a :href="tool.link" target="_blank" v-for="tool in toolsCollection" :key="tool.title" class="tools__item">
            <img :src="'https://media.simonettitomas.com/ia-images/' + tool.img" :alt="tool.title">
            <h4>{{ tool.title }}</h4>
            <p class="tools__description">{{ tool.description }}</p>
            <p class="tools__link">Visitar <Arrow :orientation="'90deg'" :orientation-medium="'90deg'" class="small-arrow-icon"/></p>
        </a>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/variables"
@use "@/style/mixins"
.small-arrow-icon
    width: variables.$icon-md
    padding-left: 0.1rem

.tools__grid
    @include mixins.grid(2, null , center, start)
    gap: 2rem
    text-align: left
    .tools__item
        width: 100%
        &:hover
            .tools__link
                text-decoration: underline
    img
        width: 100%
        height: 300px
        object-fit: cover
        object-position: center center
    .tools__link
        color: colors.$link
        margin-top: 0.5rem
    @media (max-width: variables.$bkp-medium)
        grid-template-columns: 1fr
</style>