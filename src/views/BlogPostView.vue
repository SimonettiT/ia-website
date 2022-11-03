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
        <RouterLink to="/" class="go-back">&lt Volver al Inicio</RouterLink>
        <div class="blog__header">
            <h2 class="container"> <span>BLOG</span> {{ db.blogPost[0].title }}</h2>
            <img :src="imageUrlFor(db.blogPost[0].coverImage).width(1280).url()" />
        </div>
        <article v-html="bodyContent" class="markdown-text container"></article>
    </main>
</template>

<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/colors"
main
    min-height: 100vh
    padding-top: 3rem
.blog__header
    margin-bottom: 2rem
    h2
        font-weight: 700
        margin-block: 1rem
        text-align: left
        span
            color: colors.$brand
            font-size: inherit
            margin-right: 1rem
    img
        width: 100%
        max-width: 1280px
        max-height: 700px
        display: block
        height: auto
        object-fit: cover
        object-position: center
.go-back
    text-align: left
    display: block
    margin-inline: auto
    width: 95%
    max-width: 1280px
    font-size: fonts.$font-base
    font-weight: 500
    &:hover
        text-decoration: underline
</style>