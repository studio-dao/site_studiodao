<template>
<section>
  <div class="section_competences" id="section_competences">
    <div class="box_fields" >
      
      <!-- boucle card -->
      <div class="list_fields" v-for="field of fields" :key="field.id" >
        <img class="image_fields" :src="field.image_field" alt="" />
        <p class="field_nom">{{ field.title }}</p>
      </div>
    </div>
    <div class="field_block_right">
      <div class="field_description_box">
        <h1 class=".field_nom_right">{{ fields.title }}</h1>
        <p class="field_description">{{ fields.description }}</p>
      </div>
      <div class="barre_bleu_verticale"></div>
    </div>
  </div>
  <!-- section sliders -->
    <section_portfolio_webdesign />
    <section_portfolio_graphisme />
    <section_portfolio_artistic_direction/>
</section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
import section_portfolio_webdesign from "@/components/section_portfolio_webdesign.vue";
import section_portfolio_graphisme from "@/components/section_portfolio_graphisme.vue";
import section_portfolio_artistic_direction from "@/components/section_portfolio_artistic_direction.vue";

export default {
  name: "section_competences",
  computed: {
    ...mapState(["fields"]),
  },
  components:{
    section_portfolio_graphisme,
    section_portfolio_webdesign,
    section_portfolio_artistic_direction
  }

};
</script>

<!-- STYLE -->
<style>
.section_competences {
  padding: 10% 10% 0 10%;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.box_fields {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

/* CARD */
/* box droite */
.list_fields {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.image_fields {
  width: 70px;
}

.field_nom {
  text-align: center;
  font-weight: 100;
  font-family: "Roboto";
  color: white;
  font-size: 9px;
}

.field_description_box {
  display: flex;
  flex-direction: column;
}
/* box gauche */
.field_block_right {
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: space-between;
}

.field_nom_right {
  text-align: left;
  font-family: "Roboto";
  color: white;
  font-size: 25px;
}

.field_description {
  width: 100%;
  font-family: "Roboto";
  color: white;
  font-size: 14px;
}

.barre_bleu_verticale {
  width: 2px;
  height: 100px;
  background: rgb(11,202,203);
}
</style>
