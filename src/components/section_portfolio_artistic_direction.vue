<template>
<section class="main_section">
  <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg3.image" alt="image" />
      <div class="description_slider_graph">
        <p class="description_image_slide categorie">Catégorie: <span class="category_name">{{currentImg3.categorie}}</span></p>
        <p class="description_image_slide">{{ currentImg3.description }}</p>
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
  name: "section_portfolio_artistic_direction",

  computed: {
    ...mapState(["sliderAD"]),
      currentImg3: function() {
      return this.sliderAD[Math.abs(this.index_slide) % this.sliderAD.length];
    },
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
</style>
