<template>
  <div class="section_intro">
    <div class="presentation" data-aos="fade-left">
      <h1 class="presa_h1">Studio Dao</h1>
      <p class="presa_txt">Ux Ui designer<br>Intégrateur </p>
    </div>
    <img class="portrait" :src="portrait" alt="portrait_jm" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"/>
  </div>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
export default {
  name: "section_intro",
  computed: {
    ...mapState(["portrait"]),
  },
};
</script>
<!-- STYLE -->

<style>
/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
  
.section_intro {
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(
    101deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(11, 202, 203, 1) 48%,
    rgba(233, 237, 237, 1) 84%
  );
}
.presentation {
  padding: 10%;
  display: flex;
  flex-direction: column;
}
.presa_h1 {
  margin-bottom: 50px;
  line-height: 40px;
  text-align: left;
  font-family: "Roboto";
  color: white;
  font-size: 100px;
}
.presa_txt {
  text-align: left;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 50px;
}
.portrait {
  width: 20%;
}
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {

.section_intro {
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(
    101deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(11, 202, 203, 1) 48%,
    rgba(233, 237, 237, 1) 84%
  );
}
.presentation {
  padding: 10%;
  display: flex;
  flex-direction: column;
}
.presa_h1 {
  margin: 0px;
  line-height: 40px;
  text-align: left;
  font-family: "Roboto";
  color: white;
  font-size: 50px;
}
.presa_txt {
  text-align: left;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 14px;
}
.portrait {
  width: 30%;
}
}
</style>
