import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
    state: {
        news: [],
        headline: [],
        selectedNewsdetails: [],
        selectedNewsCategory:[],
    },

    getters: {
        news(state) {
            return state.news.length;
        },
        selectedNewsdetails(state) {
            return state.selectedNewsdetails
        }
    },

    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_HEADLINE(state, headline){
            state.headline = headline;
        },
        SET_SELECTED_NEWSDETAILS(state, newsdetails){
            state.selectedNewsdetails = newsdetails
        },
        SET_NEWS_CATEGORY(state, category){
            state.selectedNewsCategory = category
        },
    },

    actions: {
        async fetchNews({commit}) {
            const response = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php');
            commit("SET_NEWS", response.data);
        },

        async fetchHeadline({commit}) {
            const response = await axios.get('https://alvahtek.com/projects/ota/api/news-api/news.php?type=headline');
            commit("SET_HEADLINE", response.data);
        },
        async fetchNewsdetailsByUuid({commit}, uuid) {
            const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?uuid=${uuid}`);
            commit("SET_SELECTED_NEWSDETAILS", response.data);
        },

        async fetchNewsByCategory({commit}, category) {
            const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?category=${category}`);
            commit("SET_NEWS_CATEGORY", response.data);
        },
        
    }
});