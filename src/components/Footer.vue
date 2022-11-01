<script setup>
import InstagramLogo from '@/components/icons/InstagramLogo.vue';
import UBPLogo from '@/components/icons/UBPLogo.vue';
import Logo from '@/components/icons/Logo.vue';
</script>

<template>
    <footer>
        <div class="footer__wrapper">
            <section class="footer__section footer__identity">
                <Logo class="identity__logo"/>
                <div class="identity__content">
                    <p>Diseñado por <a href="https://simonettitomas.com/">Tomás Simonetti</a></p>
                    <p>Creado por Rosario Arrieta, Julieta Glasman y Tomás Simonetti</p>
                </div>
            </section>

            <section class="footer__section footer__nav">
                <h5>Menú</h5>
                <ul>
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><RouterLink to="/">Textos</RouterLink></li>
                    <li><RouterLink to="/generate/images">Imágenes</RouterLink></li>
                    <li><RouterLink to="/">Sonidos</RouterLink></li>
                </ul>
            </section>

            <section class="footer__section footer__social">
                <h5>Síguenos</h5>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ia.noticias/" target="_blank" title="Instagram">
                            <InstagramLogo />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ubp.edu.ar/" target="_blank" title="Universidad Blas Pascal">
                            <UBPLogo />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </footer>
</template>
<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
footer
    background-color: lighten(colors.$dark, 10%)
    margin-top: 5rem
    .footer__wrapper
        @include mixins.flex(row, space-between, flex-start, nowrap)
        padding: 2rem 3rem
        width: 95%
        max-width: 1280px
        margin-inline: auto
.footer__section
    text-align: left
    li
        list-style: none
        margin-block: 1rem
    h5
        color: colors.$brand
        user-select: none
        letter-spacing: 0.15rem
    a:hover
        text-decoration: underline

.footer__identity
    @include mixins.flex(column, center, flex-start, nowrap)
    max-width: 50%
    .identity__logo
        width: 40%
        aspect-ratio: 1/1
        margin-right: 1rem
        fill: colors.$light
        color: colors.$light
        margin-bottom: 1rem
    .identity__content
        p
            color: darken(colors.$light, 15%)
            font-size: fonts.$font-sm
            a
                text-decoration: underline
                font-size: fonts.$font-sm
                &:hover
                    text-decoration: underline
.footer__social
    ul
        @include mixins.flex(row, flex-start, center, nowrap)
        gap: 1rem
        svg
            width: 2.5rem
            padding: 0.3rem
            transition: all variables.$transition-fast
            &:hover
                padding: 0

@media (max-width: variables.$bkp-small)
    footer
        .footer__wrapper
            @include mixins.flex(column-reverse, center, center, nowrap)
            gap: 2rem
            padding-inline: 0
    .footer__section
        text-align: center
    .footer__identity
        align-items: center
        .identity__logo
            width: 70%
            margin-right: 0

</style>