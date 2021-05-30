<template>
<section class="main_section">
  <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg.image" alt="image" />
      <div class="description_slider_web">
        <p class="description_image_slide">{{ currentImg.description }}</p>
        <a :href="currentImg.buttonLink"><button class="bouton_bleu">Voir le site</button></a>
      </div>
      <div class="div_fleches">
      <i class=" fleche_gauche fas fa-caret-left"  @click="prev" ></i>
      <i class=" fleche_droite fas fa-caret-right" @click="next"></i>
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
    };
  },

  methods: {
    next() { 
      this.index_slide += 1;
    },
    prev() {
      this.index_slide -= 1;
    },
  }
};
</script>

<!-- STYLE -->
<style>
.main_section{
  left: 0px;
  right: 0px;
  border-top: 2px solid rgb(11,202,203);
}
.section_portfolio{
  position: relative;
  left: 0px;
  right: 0px;
}
.div_fleches{
  position: absolute;;
  padding: 10px;
  top: 40%;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
.bouton_bleu {
  background: rgb(11, 202, 203);
  font-family: "Roboto";
  color: white;
}
</style>
