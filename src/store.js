import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsList: [
      { id: 1, title: 'News 1', 
              img: null,
              date: '1 stycznia 2024', 
              content: "Reprezentacja Uniwersytetu Wrocławskiego odnosi kolejne zwycięstwo w zawodach botów programistycznych CodinGame Fall Challenge 2023. Zawody odbywały się od 18 grudnia 2023 do 8 stycznia 2024. Udział wzięło 4669 osób z całego świata, które projektowały, implementowały i optymalizowały boty rywalizujące między sobą w grze zaprojektowanej przez organizatorów. <br><br> W rankingu szkół wyższych sklasyfikowano 186 uczelni. Z UWr aktywnie uczestniczyły 33 osoby. Najwyższe miejsce wśród nich - drugie w klasyfikacji generalnej - zajął Marek Szykuła (pracownik UWr). Do sukcesu drużynowego znacząco przyczynili się zajmując czołowe miejsca indywidualnie również Szymon Mikler (absolwent UWr, obecnie AI Software Engineer w NVidia), Daniel Górski (doktorant UWr i Staff Software Engineer w TomTom), Dominik Kowalczyk (student UWr i Junior Software Engineer w Google) oraz Jakub Kowalski (pracownik UWr). <br><br>Znakiem rozpoznawczym tych zawodów jest wspólna rywalizacja pracowników, studentów i absolwentów, przy czym nasi studenci oprócz satysfakcji intelektualnej mogli zdobyć również punkty w kursie Artificial Intelligence for Games: A Bit of Classics. <br><br>Wielkie gratulacje!" },
      { id: 2, title: 'News 2', 
              img: 'https://e1.pxfuel.com/desktop-wallpaper/524/494/desktop-wallpaper-cute-brown-bear-aesthetic-bear-cute-pc.jpg',
              date: '2 stycznia 2024', 
              content: "Reprezentacja Uniwersytetu Wrocławskiego odnosi kolejne zwycięstwo w zawodach botów programistycznych CodinGame Fall Challenge 2023. Zawody odbywały się od 18 grudnia 2023 do 8 stycznia 2024. Udział wzięło 4669 osób z całego świata, które projektowały, implementowały i optymalizowały boty rywalizujące między sobą w grze zaprojektowanej przez organizatorów. <br><br> W rankingu szkół wyższych sklasyfikowano 186 uczelni. Z UWr aktywnie uczestniczyły 33 osoby. Najwyższe miejsce wśród nich - drugie w klasyfikacji generalnej - zajął Marek Szykuła (pracownik UWr). Do sukcesu drużynowego znacząco przyczynili się zajmując czołowe miejsca indywidualnie również Szymon Mikler (absolwent UWr, obecnie AI Software Engineer w NVidia), Daniel Górski (doktorant UWr i Staff Software Engineer w TomTom), Dominik Kowalczyk (student UWr i Junior Software Engineer w Google) oraz Jakub Kowalski (pracownik UWr). <br><br>Znakiem rozpoznawczym tych zawodów jest wspólna rywalizacja pracowników, studentów i absolwentów, przy czym nasi studenci oprócz satysfakcji intelektualnej mogli zdobyć również punkty w kursie Artificial Intelligence for Games: A Bit of Classics. <br><br>Wielkie gratulacje!" },
      { id: 3, title: 'Mistrzostwa Polski w Programowaniu Zespolowym 2024', 
              img: 'https://pixelz.cc/wp-content/uploads/2016/11/windows-10-uhd-4k-wallpaper.jpg',
              date: '3 stycznia 2024',
              content: "Reprezentacja Uniwersytetu Wrocławskiego odnosi kolejne zwycięstwo w zawodach botów programistycznych CodinGame Fall Challenge 2023. Zawody odbywały się od 18 grudnia 2023 do 8 stycznia 2024. Udział wzięło 4669 osób z całego świata, które projektowały, implementowały i optymalizowały boty rywalizujące między sobą w grze zaprojektowanej przez organizatorów. <br><br> W rankingu szkół wyższych sklasyfikowano 186 uczelni. Z UWr aktywnie uczestniczyły 33 osoby. Najwyższe miejsce wśród nich - drugie w klasyfikacji generalnej - zajął Marek Szykuła (pracownik UWr). Do sukcesu drużynowego znacząco przyczynili się zajmując czołowe miejsca indywidualnie również Szymon Mikler (absolwent UWr, obecnie AI Software Engineer w NVidia), Daniel Górski (doktorant UWr i Staff Software Engineer w TomTom), Dominik Kowalczyk (student UWr i Junior Software Engineer w Google) oraz Jakub Kowalski (pracownik UWr). <br><br>Znakiem rozpoznawczym tych zawodów jest wspólna rywalizacja pracowników, studentów i absolwentów, przy czym nasi studenci oprócz satysfakcji intelektualnej mogli zdobyć również punkty w kursie Artificial Intelligence for Games: A Bit of Classics. <br><br>Wielkie gratulacje!"},
      { id: 4, title: 'News 4', 
              img: null, 
              date: '4 stycznia 2024',
              content: "Reprezentacja Uniwersytetu Wrocławskiego odnosi kolejne zwycięstwo w zawodach botów programistycznych CodinGame Fall Challenge 2023. Zawody odbywały się od 18 grudnia 2023 do 8 stycznia 2024. Udział wzięło 4669 osób z całego świata, które projektowały, implementowały i optymalizowały boty rywalizujące między sobą w grze zaprojektowanej przez organizatorów. <br><br> W rankingu szkół wyższych sklasyfikowano 186 uczelni. Z UWr aktywnie uczestniczyły 33 osoby. Najwyższe miejsce wśród nich - drugie w klasyfikacji generalnej - zajął Marek Szykuła (pracownik UWr). Do sukcesu drużynowego znacząco przyczynili się zajmując czołowe miejsca indywidualnie również Szymon Mikler (absolwent UWr, obecnie AI Software Engineer w NVidia), Daniel Górski (doktorant UWr i Staff Software Engineer w TomTom), Dominik Kowalczyk (student UWr i Junior Software Engineer w Google) oraz Jakub Kowalski (pracownik UWr). <br><br>Znakiem rozpoznawczym tych zawodów jest wspólna rywalizacja pracowników, studentów i absolwentów, przy czym nasi studenci oprócz satysfakcji intelektualnej mogli zdobyć również punkty w kursie Artificial Intelligence for Games: A Bit of Classics. <br><br>Wielkie gratulacje!" },

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