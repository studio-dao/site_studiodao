<template>
  <section>
    <div class="section_competences" id="section_competences">
      <div class="box_fields" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       

          <div class="list_fields" @click="toggleSectionWebdesign(); myFilterWeb(); ">
            <div class="cerclebleu " v-bind:class="{ cercleBorderWeb : isActive, cercleHalo: hover }" @mouseover="hover = true"
      @mouseleave="hover = false" >
              <img class="image_fields" :src="fields[0].image_field" alt="field"/>
              <p class="field_nom">{{ fields[0].title }}</p>
            </div>
        </div>

        
          <div class="list_fields" @click="toggleSectionGraphdesign();myFilterGraph() ">
            <div class="cerclebleu" v-bind:class="{ cercleBorderGraph : isActiveG, cercleHalo: hoverG }" @mouseover="hoverG = true"
      @mouseleave="hoverG = false">
              <img class="image_fields" :src="fields[1].image_field" alt="field"/>
              <p class="field_nom">{{ fields[1].title }}</p>
            </div>
          </div>

        
          <div class="list_fields" @click="toggleSectionArtDir();myFilterArt() ">
            <div class="cerclebleu" v-bind:class="{ cercleBorderArt : isActiveA, cercleHalo: hoverA }" @mouseover="hoverA = true"
      @mouseleave="hoverA = false">
              <img class="image_fields" :src="fields[2].image_field" alt="field" />
              <p class="field_nom">{{ fields[2].title }}</p>
            </div>
          </div>

      </div>
   <!-- Box droite -->
   <div class="alert_click">
     <p class="text_alert" >{{alert_fonct()}}</p>
   </div>
      <div class="field_block_right" v-if="showSectionWeb" :showSectionWeb="showSectionWeb">
        <div class="field_description_box">
          <h1 class="field_nom_right">{{ fields[0].title }}</h1>
          <p class="field_description">{{ fields[0].description }}</p>
        </div>
      </div>

      <div class="field_block_right" v-if="showSectionGraph" :showSectionGraph="showSectionGraph">
        <div class="field_description_box">
          <h1 class="field_nom_right">{{ fields[1].title }}</h1>
          <p class="field_description">{{ fields[1].description }}</p>
        </div>
      </div>

      <div class="field_block_right" v-if="showSectionAD" :showSectionAD="showSectionAD">
        <div class="field_description_box">
          <h1 class="field_nom_right">{{ fields[2].title }}</h1>
          <p class="field_description">{{ fields[2].description }}</p>
        </div>
      </div>

      <div class="barre_bleu_verticale"></div>
    </div>
    <!-- section sliders -->
    <div v-if="showSectionWeb" :showSectionWeb="showSectionWeb">
      <section_portfolio_webdesign class="port_webdesign" />
    </div>
    <div v-if="showSectionGraph" :showSectionGraph="showSectionGraph">
      <section_portfolio_graphisme class="port_graphisme" />
    </div>
    <div v-if="showSectionAD" :showSectionAD="showSectionAD">
      <section_portfolio_artistic_direction class="port_artDir" />
    </div>
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
  data() {
    return {
      showSectionWeb: false,
      showSectionGraph: false,
      showSectionAD: false,
      isActive: false,
      isActiveG: false,
      isActiveA: false,
      hover:false,
      hoverG:false,
      hoverA:false,
      buttonColor:false,
      alert:''
    };
  },
  computed: {
    ...mapState(["fields"]),

  },

  components: {
    section_portfolio_graphisme,
    section_portfolio_webdesign,
    section_portfolio_artistic_direction,
  },

  methods: {
     toggleSectionWebdesign() {
      this.showSectionGraph = false;
      this.showSectionAD = false;
      this.showSectionWeb = !this.showSectionWeb;
    },
       toggleSectionGraphdesign() {
      this.showSectionWeb = false;
      this.showSectionAD = false;
      this.showSectionGraph = !this.showSectionGraph;
    },
      toggleSectionArtDir() {
      this.showSectionWeb = false;
      this.showSectionGraph = false;
      this.showSectionAD = !this.showSectionAD;
    },
     myFilterWeb() {
      this.isActiveG= false,
      this.isActiveA= false,
      this.isActive = !this.isActive
    },
    myFilterGraph() {
      this.isActive= false,
      this.isActiveA= false,
      this.isActiveG = !this.isActiveG
    },
    myFilterArt() {
      this.isActiveG= false,
      this.isActive= false,
      this.isActiveA = !this.isActiveA
    },
      alert_fonct(){
      if(this.showSectionWeb === true |
      this.showSectionGraph === true|
      this.showSectionAD === true){
      return this.alert = ''
      }else{
        return this.alert = 'Cliquez sur une des catégories à gauche pour afficher mes portfolios'
      }
    }
  },

};
</script>

<!-- STYLE -->
<style>
/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {

.section_competences {
  position: relative;
  padding: 4% 0% 0 0%;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(11, 202, 203);
}

/* box gauche */
.cerclebleu {
  width: 115px;
  height: 115px;
  padding: 17px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.cercleHalo{
    box-shadow: 0 0 9px 1px rgb(11 202 203), 0 0 12px 2px rgb(4 77 77);

    -webkit-animation: .8s linear 0s  animcercle;
    animation: .8s linear 0s  animcercle;
}
@-webkit-keyframes animcercle {from { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 0), 0 0 12px 2px rgba(4, 77, 77, 0); } to { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 1), 0 0 12px 2px rgba(4, 77, 77, .8); } };
@keyframes animcercle {from { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 0), 0 0 12px 2px rgba(4, 77, 77, 0); } to { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 1), 0 0 12px 2px rgba(4, 77, 77, .8); } };

.cercleBorderWeb {
  border: 0.5px solid rgb(11, 202, 203);
}
.cercleBorderGraph{
  border: 0.5px solid rgb(11, 202, 203);
}
.cercleBorderArt{
  border: 0.5px solid rgb(11, 202, 203);
}
.box_fields {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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
  margin: 0px;
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
/* box droite */
.field_block_right {
  position: absolute;
  padding: 5%;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: space-between;
}
.text_alert{
  font-family: 'Roboto';
  font-weight: 200;
  color:rgb(66, 66, 66)
}
.field_nom_right {
  text-align: left;
  font-family: "Roboto";
  color: white;
  font-size: 40px;
}

.field_description {
  width: 100%;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 12px;
}

.barre_bleu_verticale {
  position: absolute;
  bottom: 0px;
  right: 130px;
  width: 1px;
  height: 100px;
  background: rgb(11, 202, 203);
}
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
  .section_competences {
  position: relative;
  padding: 7% 7% 0 7%;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(11, 202, 203);
}

/* box gauche */
.cerclebleu {
  width: 115px;
  height: 115px;
  padding: 17px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.cercleHalo{
    box-shadow: 0 0 9px 1px rgb(11 202 203), 0 0 12px 2px rgb(4 77 77);

    -webkit-animation: .8s linear 0s  animcercle;
    animation: .8s linear 0s  animcercle;
}
@-webkit-keyframes animcercle {from { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 0), 0 0 12px 2px rgba(4, 77, 77, 0); } to { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 1), 0 0 12px 2px rgba(4, 77, 77, .8); } };
@keyframes animcercle {from { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 0), 0 0 12px 2px rgba(4, 77, 77, 0); } to { box-shadow: 0 0 9px 1px rgba(11, 202, 203, 1), 0 0 12px 2px rgba(4, 77, 77, .8); } };

.cercleBorderWeb {
  border: 0.5px solid rgb(11, 202, 203);
}
.cercleBorderGraph{
  border: 0.5px solid rgb(11, 202, 203);
}
.cercleBorderArt{
  border: 0.5px solid rgb(11, 202, 203);
}
.box_fields {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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
  margin: 0px;
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
/* box droite */
.field_block_right {
  position: absolute;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: space-between;
}
.text_alert{
  padding: 10px 0px 0px 5px;
  color:rgb(66, 66, 66);
  font-family:'Roboto';
  font-size: 12px
}
.field_nom_right {
  text-align: left;
  font-family: "Roboto";
  color: white;
  font-size: 25px;
}

.field_description {
  width: 100%;
  padding: 10px 20px 0px 0px;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 12px;
}

.barre_bleu_verticale {
  position: absolute;
  bottom: 0px;
  right: 100px;
  width: 1px;
  height: 70px;
  background: rgb(11, 202, 203);
}
}

</style>
