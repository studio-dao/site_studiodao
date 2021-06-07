<template>
<section class="main_section">
  <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg.image" alt="image" />
      <div class="description_slider_web">
        <p class="description_image_slide">{{ currentImg.description }}</p>
        <a class="lien_webdesign" :href="currentImg.buttonLink" target="_blank"><button v-if="currentImg.buttonLink" class="bouton_bleu">Voir le site</button></a>
      </div>
      <div class="div_fleches">
      <i class=" fleche_gauche fas fa-caret-left"  @click="prev(); buttonDisplay()" ></i>
      <i class=" fleche_droite fas fa-caret-right" @click="next(); buttonDisplay()"></i>
      </div>
    </div>
  </div>
</section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";

export default {
  name: "section_portfolio_webdesign",

  computed: {
    ...mapState(["sliderWebdesign"]),
      currentImg: function() {
      return this.sliderWebdesign[Math.abs(this.index_slide) % this.sliderWebdesign.length];
    }
  },

  data() {
    return {
      index_slide: 0,
      button_display: true
    };
  },

  methods: {
    next() { 
      this.index_slide += 1;
    },
    prev() {
      this.index_slide -= 1;
    },
    buttonDisplay(){
      if(this.sliderWebdesign[4], this.sliderWebdesign[5], this.sliderWebdesign[6]){
        return this.button_display = false
      }
    }
  }
};
</script>

<!-- STYLE -->
<style>
/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {

.main_section{
  left: 0px;
  right: 0px;
}
.section_portfolio{
  position: relative;
  left: 0px;
  right: 0px;
}
.div_fleches{
  position: absolute;;
  padding: 10px;
  top: 155px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.fleche_droite{
  font-size: 30px;
  color: white
}

.fleche_gauche{
  font-size: 30px;
  color: white
}

.slider {
  display: flex;
  flex-direction: column;
}
.slider_web {
  margin-bottom: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide_image {
  margin: 20px 0px;
  width: 40%;
}
.description_slider_web {
  margin-top: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
}
.description_image_slide {
  width: 20%;
  margin-bottom: 0px;
  text-align: left;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 14px;
}
.lien_webdesign{
  width: 100%;
}
.bouton_bleu {
  margin-top:15px;
  border-radius: 8px;
  background: rgb(11, 202, 203);
  font-family: "Roboto condensed";
  color: white;
  border: none;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
.bouton_bleu:hover{
  transform: scale(1.2)
}
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
  
.main_section{
  left: 0px;
  right: 0px;
}
.section_portfolio{
  position: relative;
  left: 0px;
  right: 0px;
}
.div_fleches{
  position: absolute;;
  padding: 10px;
  top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

.fleche_droite{
  font-size: 30px;
  color: white
}

.fleche_gauche{
  font-size: 30px;
  color: white
}

.slider {
  display: flex;
  flex-direction: column;
}
.slider_web {
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide_image {
  margin: 20px 0px;
  width: 70%;
}
.description_slider_web {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.description_image_slide {
  width: 45%;
  margin-bottom: 0px;
  text-align: left;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 10px;
}
.lien_webdesign{
 width: 100%;
 margin-top: 10px;
}
.bouton_bleu {
    border-radius: 4px;
    background: rgb(11, 202, 203);
    font-family: "Roboto condensed";
    height: 20px;
    color: white;
    border: none;
    padding: 5px 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    display: flex;
    font-size: 12px;
}
.bouton_bleu:hover{
  transform: scale(1.2)
}
}
</style>
