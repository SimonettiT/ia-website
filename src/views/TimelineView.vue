<script setup>
import IconCommunity from '../components/icons/IconCommunity.vue';

</script>

<template>
    <main>
        <h2 class="main__title">Línea de tiempo</h2>
        <div class="timeline__container">

            <div class="timeline__item">
                <div class="timeline-item__date">15 Dec</div>
                <IconCommunity class="icon timeline-item__icon" />
                <div class="timeline-item__content">
                    <h4>Lorem ipsum dolor sit amet left</h4>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline-item__date">15 Dec</div>
                <IconCommunity class="icon timeline-item__icon" />
                <div class="timeline-item__content">
                    <h4>Lorem ipsum dolor sit amet right</h4>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline-item__date">15 Dec</div>
                <IconCommunity class="icon timeline-item__icon" />
                <div class="timeline-item__content">
                    <h4>Lorem ipsum dolor sit amet left</h4>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline-item__date">15 Dec</div>
                <IconCommunity class="icon timeline-item__icon" />
                <div class="timeline-item__content">
                    <h4>Lorem ipsum dolor sit amet right</h4>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/variables"
@use "@/style/fonts"

h2
    border-bottom: colors.$brand 2px solid
.timeline__container
    position: relative
    width: 100%
    max-width: 1280px
    margin: 0 auto
    padding: 15px 0
    text-align: left
    &::after
        content: ''
        position: absolute
        width: 2px
        background: colors.$brand
        top: 0
        bottom: 0
        left: 50%
        margin-left: -1px

.timeline__item
    padding: 15px 30px
    position: relative
    background: inherit
    width: 50%

    &:nth-child(odd) // left
        left: 0
        .timeline-item__date
            right: -75px
        .timeline-item__icon
            right: 56px


    &:nth-child(even) // right
        left: 50%
        .timeline-item__date
            left: -75px
        .timeline-item__icon
            left: 56px
        .timeline-item__content
            padding: 30px 30px 30px 90px
            border-radius: 500px 0 0 500px
        &::before
            left: 8px
        &::after
            left: -9px


    &::after 
        content: ''
        position: absolute
        width: 16px
        height: 16px
        top: calc(50% - 8px)
        right: -9px
        background: colors.$light
        border: 2px solid lighten(colors.$brand, 20%)
        border-radius: 16px
        z-index: 1
    &::before
        content: ''
        position: absolute
        width: 50px
        height: 2px
        top: calc(50% - 1px)
        right: 8px
        background: colors.$brand
        z-index: 1
    .timeline-item__date
        position: absolute
        display: inline-block
        top: calc(50% - 12px)
        text-align: center
        font-size: fonts.$font-base
        font-weight: bold
        color: colors.$light
        text-transform: uppercase
        letter-spacing: 1px
        z-index: 1
    .timeline-item__icon
        position: absolute
        display: inline-block
        width: 40px
        height: 40px
        padding: 9px 10px
        top: calc(50% - 20px)
        text-align: center
        font-size: 18px
        color: colors.$brand
        z-index: 1
    .timeline-item__content
        padding: 30px 90px 30px 30px
        background: lighten(colors.$dark, 15%)
        position: relative
        border-radius: 0 500px 500px 0
        h4
            margin: 0 0 10px 0
            font-weight: normal
            color: colors.$light
        p
            margin: 0
            font-size: 16px
            line-height: 22px
            color: colors.$light


@media (max-width: variables.$bkp-medium)
    .timeline__container::after
        left: 90px
    .timeline__item
        width: 100%
        padding-inline: 120px 0
        &:nth-child(even) //right
            left: 0%
        &:nth-child(even),
        &:nth-child(odd)
            &::after
                left: 82px
            &::before
                left: 100px
                border-color: transparent #006E51 transparent transparent
            .timeline-item__date
                right: auto
                left: 15px
            .timeline-item__icon
                right: auto
                left: 146px
            .timeline-item__content
                padding: 30px 30px 30px 90px
                border-radius: 500px 0 0 500px
</style>