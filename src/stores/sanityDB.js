import { defineStore } from "pinia";
import sanity from "@/client";

export const useDatabaseStore = defineStore("sanityDB", {
    state: () => ({
        indexList: [],
        error: null,
        timelineData: [],
        blogPost: [],
    }),

    actions: {
        async getIndexList(query) {
            await sanity.fetch(query).then(
                (data) => {
                    this.indexList = data;
                },
                (error) => {
                    this.error = error;
                }
            );
        },
        async getTimeline(query) {
            await sanity.fetch(query).then(
                (data) => {
                    this.timelineData = data;
                },
                (error) => {
                    this.error = error;
                }
            );
        },
        async getBlogPost(query) {
            this.blogPost = [];
            await sanity.fetch(query).then(
                (data) => {
                    this.blogPost = data;
                },
                (error) => {
                    this.error = error;
                }
            );
        },
    },
});