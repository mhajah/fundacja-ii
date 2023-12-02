<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar kontakt5="1" class="navbar"/>
    <section class="mini_hero">
      <h4>KONTAKT</h4>
    </section>
    <section class="basicInfo">
      <div class="contact">
        <h5>FUNDACJA ABSOLWENTÓW INFORMATYKI UNIWERSYTETU WROCŁAWSKIEGO</h5>
        <div class="contact-sec location">
          <font-awesome-icon class="awesome" icon="fa-solid fa-location-dot" />
          <a href="https://maps.app.goo.gl/rdiDFzaxYRTcb1NL9">50-383 Wrocław, Fryderyka Joliot-Curie 15</a>
        </div>
        <div class="contact-sec phone">
          <font-awesome-icon class="awesome" icon="phone" />
          <a href="tel:+48123456789">+48 123456789</a>
        </div>
        <div class="contact-sec email">
          <font-awesome-icon class="awesome" icon="envelope" />
          <a href="mailto:fundacja@uwr.edu.pl">fundacja@uwr.edu.pl</a>
        </div>
      </div>
    
    <hr>
      <section class="contactForm">
        <form>
          <label for="email">Adres e-mail</label>
          <input type="text" id="email" name="email">

          <label for="name">Imię i nazwisko</label>
          <input type="text" id="name" name="name">

          <label for="phone">Telefon</label>
          <input type="text" id="phone" name="phone">

          <label for="desc">Treść wiadomości</label>
          <textarea type="text" id="desc" name="desc"></textarea>

          <input type="submit" value="WYŚLIJ WIADOMOŚĆ">
        </form>
      </section>
    </section>
    <Footer />
</template>

<style scoped lang="scss">
* {
  font-family: 'Exo 2';
}

.mini_hero {
  margin-top: 8vh;
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)) ,url("/instytut.jpg");
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #B60D18;
}

.mini_hero > h4 {
  color: white;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
}

.contact {
  padding: 30px 30px 30px 30px;
  font-size: 20px;
  font-weight: 600;
}

.contact-sec {
  color: #B60D18;
  padding: 10px;
  padding-top: 15px;
  font-weight: 300;
}

.contact-sec > a {
  font-size: 16px;
  display: block;
  width: 200px;
}

.contact-sec > .awesome {
  padding-right: 10px;
  float:left;
}

.contactForm {
  padding: 30px 30px 30px 30px;
}

.contactForm > form {
  display: flex;
  flex-direction: column;
}

.contactForm > form > label {
  line-height: 40px;
}

.contactForm > form > input {
  border: 1px solid #dadada;
  height: 50px;
  margin-bottom: 15px;
}

.contactForm > form > textarea {
  border: 1px solid #dadada;
  height: 200px;
  margin-bottom: 15px;
  padding: 10px 10px;
}

.contactForm > form > input[type=submit] {
  background-color: #B60D18;
  color: white;
}
.contactForm > form > input[type=text] {
  padding: 10px 10px;
}


@media (min-width: 768px) {

  .mini_hero > h4 {
    font-size: 36px;
  }
  .contact {
    font-size: 24px;
  }
  .contact-sec > a {
    font-size: 18px;
    width: 250px;
  }
}

@media (min-width: 950px) {
  hr {
    display: none;
    position: absolute;
  }
  .mini_hero {
    background: none;
    border: none;
    background-color: #f5f5f5;
    height: 16vh;
  }

  .contact {
    width: 450px;
  }

  .contactForm {
    width: 500px;
  }
  .mini_hero > h4 {
    color: #222;
    letter-spacing: normal;
  }
  .basicInfo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f5f5f5;
  }

  .contactForm > form > input {
    height: 60px;
  }

  .contactForm > form > textarea {
    height: 230px;
  }
}

@media (min-width: 2100px) {
  .mini_hero > h4 {
    font-size: 44px;
  }
  .contact {
    font-size: 28px;
  }
  .contact-sec > a {
    font-size: 20px;
    width: 250px;
  }
  .contact {
    width: 600px;
  }
  .contactForm {
    width: 650px;
  }
  .contactForm > form > input {
    height: 80px;
  }

  .contactForm > form > textarea {
    height: 290px;
  }
}

</style>
