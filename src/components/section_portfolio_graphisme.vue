<template>
<section class="main_section">
  <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg.image" alt="image" />
      <div class="description_slider_graph">
        <p class="description_image_slide categorie">Catégorie: <span class="category_name">{{currentImg.categorie}}</span></p>
        <p class="description_image_slide">{{ currentImg.description }}</p>
      </div>
      <div class="div_fleches">
      <i class=" fleche_gauche fas fa-caret-left"  @click="prevLogo" ></i>
      <i class=" fleche_droite fas fa-caret-right" @click="nextLogo"></i>
      </div>
    </div>
  </div>
  <!-- flyer -->
    <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg1.image" alt="image" />
      <div class="description_slider_graph">
        <p class="description_image_slide categorie">Catégorie: <span class="category_name">{{currentImg1.categorie}}</span></p>
        <p class="description_image_slide">{{ currentImg1.description }}</p>
      </div>
      <div class="div_fleches">
      <i class=" fleche_gauche fas fa-caret-left"  @click="prevFlyer" ></i>
      <i class=" fleche_droite fas fa-caret-right" @click="nextFlyer"></i>
      </div>
    </div>
  </div>
  <!-- mode -->
    <div class="section_portfolio">
      <div class="slider_web" >
      <img class="slide_image" :src="currentImg2.image" alt="image" />
      <div class="description_slider_graph">
        <p class="description_image_slide categorie">Catégorie: <span class="category_name">{{currentImg2.categorie}}</span></p>
        <p class="description_image_slide">{{ currentImg2.description }}</p>
      </div>
      <div class="div_fleches">
      <i class=" fleche_gauche fas fa-caret-left"  @click="prevMode" ></i>
      <i class=" fleche_droite fas fa-caret-right" @click="nextMode"></i>
      </div>
    </div>
  </div>
</section>

</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";

export default {
  name: "section_portfolio_graphisme",

  computed: {
    ...mapState(["sliderGraphicdesignLogo","sliderGraphicdesignFlyer", "sliderGraphicdesignMode"]),
      currentImg: function() {
      return this.sliderGraphicdesignLogo[Math.abs(this.index_slide_logo) % this.sliderGraphicdesignLogo.length];
    },
      currentImg1: function() {
      return this.sliderGraphicdesignFlyer[Math.abs(this.index_slide_flyer) % this.sliderGraphicdesignFlyer.length];
    },
      currentImg2: function() {
      return this.sliderGraphicdesignMode[Math.abs(this.index_slide_mode) % this.sliderGraphicdesignMode.length];
    }
  },

  data() {
    return {
      index_slide_logo: 0,
      index_slide_flyer: 0,
      index_slide_mode: 0,
    };
  },

  methods: {
    nextLogo() { 
      this.index_slide_logo += 1;
    },
    prevLogo() {
      this.index_slide_logo -= 1;
    },

    nextFlyer() { 
      this.index_slide_flyer += 1;
    },
    prevFlyer() {
      this.index_slide_flyer -= 1;
    },
  
    nextMode() { 
      this.index_slide_mode += 1;
    },
    prevMode() {
      this.index_slide_mode -= 1;
    },
  }
};
</script>

<!-- STYLE -->
<style>

.description_slider_graph {
  padding-left: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.description_image_slide{
  width:80%;
}

.categorie{
  margin-bottom: 5px;
}

.category_name{
    font-size: 12px;
    font-weight: 300;
}

</style>
