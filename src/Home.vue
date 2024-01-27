<script setup>
import HeroImage from './components/hero-image.vue'
import Footer  from './components/footer.vue'
import { useNewsStore } from './store.js';
const newsStore = useNewsStore();
</script>

<script>
import { ref } from "vue";
export const helpRef = ref(null);
</script>

<template>
  <HeroImage/>
  <main class="main-section" >
    <section class="main-mid">
      
      <div id="contact-anch"></div>
      <div class="descriptions">
        
        <h3 class="main-header3">KRÓTKO O NAS</h3>
        <p class="main-paragraph">Fundacja powstała z inicjatywy absolwentów Instytutu Informatyki UWr i wspiera działania edukacyjne prowadzone przez Instytut na poziomie szkolnym i studenckim.</p>
        <p class="main-paragraph">Nikt z nas nie urodził się programistą. Komputer był dla nas kiedyś tajemniczą skrzynką; później, maszynką do gier, zakupów, poznawania ludzi. Pamiętamy nasze pierwsze “hello, world!”, i dalszą drogę: lata spędzone na nauce, treningu, wyzwania pierwszych zawodów; pierwszy sprzedany kod, pierwszy projekt, zespół, firmę; pierwszych użytkowników i pierwsze duże pieniądze.</p>
        <p class="main-paragraph">Pamiętamy że gdzieś na tej drodze pojawił się student, doktorant, a czasem nawet siwowłosy profesor UWr. Wiele zawdzięczamy ich pracy. Chcemy wspierać aktywności, w których sami kiedyś uczestniczyliśmy, i które pomogły nam odnieść sukces.</p>
        <p class="main-paragraph activities">Fundacja zapewnia dodatkowe środki na organizację szerokiej gamy zajęć informatycznych:</p>
        <ul class="activities-list">
          <li><span>fakultety w liceach i szkołach podstawowych</span> są dla większości uczniów pierwszy kontakt z informatyką; fundacja pomaga w wynagrodzeniu prowadzących, którzy prowadzą uczniów od pierwszych kroków do medali Olimpiady Informatycznej.</li>
          <li><span>sparingi i zawody</span> zapewniają niezbędny trening uczniom, którzy walczą o tytuły najlepszych programistów i programistek w kraju; fundacja dokłada się do kosztów przygotowania zadań i nagród dla uczestników.</li>
          <li><span id="donate">obozy naukowe</span> gromadzą uczniów z różnych szkół i są czasem intensywnej pracy: początkujący wspólnie zdobywają podstawy informatycznego fachu, zaawansowani uczą się od siebie nawzajem i przygotowują do startu w zawodach; fundacja udziela stypendiów na pokrycie kosztów dla potrzebujących uczestników oraz wspiera finansowo wynagrodzenia kadry.</li>
        </ul>
      </div>

      <div class="descriptions"> 
        <h3 ref="helpRef" class="main-header3" >DLA DARCZYŃCÓW</h3>
        <p class="main-paragraph">Możesz wesprzeć naszą misję poprzez darowiznę; dziękujemy za każdą wpłaconą złotówkę. Chętnych do włączenia się w życie fundacji zachęcamy też do <router-link :to="'kontakt'" class="p-link">kontaktu</router-link>. Fundacja przeznacza całość otrzymanych środków na <router-link :to="'statut'" class="p-link">działalność statutową</router-link>, taką jak projekty opisane powyżej. Wpłaty można dokonywać na konta o numerach:</p>
        <div class="account_numbers">
          <p><span>PLN</span> 88 1240 1473 1111 0011 2847 0067</p>
          <p><span>CHF</span> 97 1240 1473 1797 0011 2847 1107</p>
          <p><span>EUR</span> 65 1240 1473 1978 0011 2847 0878</p>
          <p><span>USD</span> 94 1240 1473 1787 0011 2847 0982</p>
          <p><span id="founders">GBP</span> 98 1240 1473 1789 0011 2847 1295</p>
        </div>
      </div>

      <div class="descriptions">
        <h3 ref="foundersRef" class="main-header3">POSTACIE</h3>
        <p class="main-paragraph"></p>
        <div class="account_numbers">
        </div>
      </div>

      <!-- Newsy -->
      <div class="descriptions">
        <h3 class="main-header3">AKTUALNOŚCI</h3>
        <div v-for="news in newsStore.getLastNews()" class="news">
          <router-link :to="'news/'+news.id">
              <img class="news-image" v-if="news.img" :src="news.img" alt="news cover">
              <span v-else class="no-image-gap"></span>
              <div class="news-content">
                <h6 class="news-header">{{ news.title }}</h6>
                <p class="news-description">{{ news.content.split(" ", 32).join(" ") + "..." }}</p>
                  <div class="news-date-link">
                    <p class="news-date">{{ news.date }}</p>
                    <p>Przeczytaj całość</p>
                  </div>
              </div>
          </router-link>
        </div>
      </div>
    </section>
    <Footer class="footer"/>
  </main>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main-section {
  font-size: 16px;
}
.descriptions {
  padding: 30px 15px 0 15px;
  font-weight: 300;
}
.main-paragraph {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: justify;
  line-height: 30px;
}

.p-link {
  color: #B60D18;
  text-decoration: underline;
}

.activities {
  font-weight: 900;
  margin-top: 30px;
}

.activities-list {
  text-align: justify;
  list-style-type: disc;
  padding-left: 20px;
}


.activities-list > li > span {
  color: #B60D18;
  text-decoration: dashed;
}

.main-header3 {
  font-weight: 600;
  font-size: 24px;
}
.separator {
  margin: 15px 0 10px 0;
}

.desc2 {
  background-color: #ebebeb;
  color: #222;
}

.sponsor-section {
  padding: 30px 15px 20px 15px;
}

.sponsors {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.sponsor-logo {
  background-repeat: no-repeat;
  background-position: center;
  width: 45vw;
  max-width: 250px;
  max-height: 250px;
  height: 45vw;
  background-size: contain;
}

.news {
  background-color: #ebebeb;
  margin-top: 15px;
  transition: 0.5s ease-in-out;
}

.news:hover {
  color: #B60D18;
  font-size: 17.5px;
}

.news-header {
  font-size: 20px;
  font-weight: 900;
  padding-bottom: 10px;
}

.news-description {
  color:#282828;
}

.news-date-link {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #878787;
  margin-top: 30px;
  padding: 10px 0;
  color:#B60D18;
}

.news-image {
  width: 100%;
  height: 21vh;
  object-fit: cover;
  margin-bottom: 20px;
}

.news-content {
  padding: 0 15px;
}

.no-image-gap {
  height: 20px;
  display: block;
}

.account_numbers {
  margin-bottom: 15px;
}

.account_numbers > p {
  margin: 8px 0;
  text-align: justify;
  line-height: 30px;
}

.account_numbers > p > span {
    color: white;
    font-weight: 900;
    background-color: #B60D18;
    padding: 5px;
    border-radius: 25%;
    margin-right: 5px;   
}

.footer {
  margin-top: 30px;
}

@media (min-width: 1100px) {
  .main-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .main-mid {
    background-color: #fff;
    position: relative;
    top: -10vh;
    width: 65vw;
    align-self: center;
    border-top: 3px solid #B60D18;
  }
  .descriptions {
    margin-right: 3vw;
    margin-left: 3vw;
    line-height: 32px;
  }

  .desc2 {
    background-color: #fff;
  }
  .sponsor-section {
    background-color: #f5f5f5;
  }
  .main-section {
    font-size: 17px;
  }
  .main-header3 {
    text-align: center;
    font-size: 24px;
  }
  .sponsor-logo {
    width: 190px;
    height: 190px;
  }

  .news-image {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    margin-bottom: 20px;
  }
}

@media (min-width: 1600px) {
  .main-mid {
    width: 55vw;
  }
  .sponsor-logo {
    width: 220px;
    height: 220px;
  }

  .sponsor-section {
    padding: 50px 30px;
  }
  .main-header3 {
    font-size: 32px;
    padding: 15px;
  }

  .news-image {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .account_numbers {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }

  .account_numbers > p {
    margin-right: 50px;
    width: 42%;
  }
}

@media (min-width: 2100px) {
  .account_numbers > p {
    margin-right: 50px;
    width: 32%;
  }
}


</style>
