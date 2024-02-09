<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar kontakt5="1" class="navbar"/>
    <section class="gmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.868227002865!2d17.050502277165577!3d51.11089137172589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe82b2976c511%3A0x36e92b9161fb469a!2sInstytut%20Informatyki%20Uniwersytetu%20Wroc%C5%82awskiego!5e0!3m2!1spl!2spl!4v1705952809828!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></section>
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
          <a href="tel:+48123456789">+48 -</a>
        </div>
        <div class="contact-sec email">
          <font-awesome-icon class="awesome" icon="envelope" />
          <a href="mailto:fundacja@uwr.edu.pl">fundacjaabsolwentowiiuwr@cs.uni.wroc.pl</a>
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

.gmap {
  visibility: hidden;
  position: absolute;
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
  font-size: 14px;
  display: block;
  max-width: 300px;
}

.contact-sec:last-child > a {
  font-size: 11px;
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

.contact-sec:last-child {
    padding-right: 0;
  }

@media (min-width: 310px) {

  .contact-sec:last-child > a {
    font-size: 13px;
  }
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
  .contact-sec:last-child > a {
    width: 400px;
    max-width: 400px;
    font-size: 16px;
  }
}

@media (min-width: 1050px) {
  hr {
    display: none;
    position: absolute;
  }
  .mini_hero {
    background: none;
    border: none;
    background-color: #f5f5f5;
    height: 16vh;
    margin-top: 0;
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

  .gmap {
    visibility: visible;
    position: relative;
    margin-top: 8vh;
    width: 100%;
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
  }
  .contact-sec:last-child > a {
    max-width: 400px;
    font-size: 18px;
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
