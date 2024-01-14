import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsList: [
      { id: 1, title: 'News 1', 
              img: null,
              date: '1 stycznia 2024', 
              content: 'Content of News 1' },
      { id: 2, title: 'News 2', 
              img: 'https://e1.pxfuel.com/desktop-wallpaper/524/494/desktop-wallpaper-cute-brown-bear-aesthetic-bear-cute-pc.jpg',
              date: '2 stycznia 2024', 
              content: 'Lorem ipsumConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of <br><br>News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2ConteneewwwwwwwwContent of News 2' },
      { id: 3, title: 'Mistrzostwa Polski w Programowaniu Zespolowym 2024', 
              img: 'https://pixelz.cc/wp-content/uploads/2016/11/windows-10-uhd-4k-wallpaper.jpg',
              date: '3 stycznia 2024',
              content: 'Content of News 3'},
      { id: 4, title: 'News 4', 
              img: null, 
              date: '4 stycznia 2024',
              content: 'Content of News 4' },
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