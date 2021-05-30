<template>
<section>
  <div class="section_portfolio_web">
      <div class="slider_web" >
      <div class="contenant_image_slide"></div>
      <img class="slide_image" :src="currentImg.image" alt="image" />
      <div class="description_slider_web">
        <p class="description_image_slide">{{ currentImg.description }}</p>
        <a :href="currentImg.buttonLink"><button class="bouton_bleu">Voir le site</button></a>
      </div>
      <button class="prev" @click="prev" href="#">&#10094;</button>
      <button class="next" @click="next" href="#">&#10095;</button>
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
      sliderTab: [],
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
.section_portfolio_webdesign {
  left: 0px;
  right: 0px;
}
.slider {
  display: flex;
  flex-direction: column;
}
.slider_web {
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
