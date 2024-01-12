import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsList: [
      { id: 1, title: 'News 1', content: 'Content of News 1' },
      { id: 2, title: 'News 2', content: 'ConteneewwwwwwwwContent of News 2' },
      { id: 3, title: 'News 3', content: 'Content of News 3' },
      { id: 4, title: 'News 4', content: 'Content of News 4' },
      // Dodaj więcej newsów według potrzeb
    ],
  }),
  getters: {
    getNewsById: (state) => (id) => {
      return state.newsList.find(news => news.id === parseInt(id));
    },
  },
  actions: {
    addNews(newNews) {
      this.newsList.push(newNews);
    },
    getLastNews() {
        const threeLastNews = this.newsList.slice(-3);
        return threeLastNews.reverse();
    },
  },
});