<script setup>
import { useDatabaseStore } from '@/stores/sanityDB';
import BlogCardsList from "../components/BlogCardsList.vue";


const query = `*[_type == "sitePages"] {
  _id,
  title,
  coverImage,
  slug,
}`

const db = useDatabaseStore();
await db.getIndexList(query);




</script>
<template>
    <main>
        <h2 class="main__title">Índice de contenidos</h2>
        <BlogCardsList :postList="db.indexList" :size="'medium'" />
    </main>
</template>

<style lang="sass" scoped>
.main__title
    margin-block: 2rem
</style>
