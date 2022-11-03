<script setup>
defineProps({
    orientation: {
        type: String,
        default: '0deg'
    },
    orientationMedium: {
        type: String,
        default: '0deg'
    }
})
</script>
<template>
    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"></path></svg>
</template>

<style lang="sass" scoped>
@use "@/style/variables"
svg
    transform: rotate(v-bind(orientation))
@media (max-width: variables.$bkp-medium)
    svg
        transform: rotate(v-bind(orientationMedium))
</style>
