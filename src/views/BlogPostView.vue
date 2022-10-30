<script setup>
import sanity from "../client";
import { useDatabaseStore } from '@/stores/sanityDB';
import imageUrlBuilder from "@sanity/image-url";
import { useRoute } from 'vue-router'
import { marked } from 'marked';
const route = useRoute()




const query = `*[_type == "sitePages" && slug.current == "${route.params.slug}"] {
    title,
    coverImage,
    bodyContent
}`
// convert markdown item.blogContent to html

const imageBuilder = imageUrlBuilder(sanity);
const imageUrlFor = (source) => {
      return imageBuilder.image(source);
}
const db = useDatabaseStore();
await db.getBlogPost(query);

const bodyContent = marked.parse(db.blogPost[0].bodyContent);

</script>
<template>
    <main>
        <h2>{{ db.blogPost[0].title }}</h2>
        <img :src="imageUrlFor(db.blogPost[0].coverImage).width(500).url()" />
        <div v-html="bodyContent" class="markdown-text container"></div>
    </main>
</template>

<style lang="sass" scoped>
main
    min-height: 100vh
</style>