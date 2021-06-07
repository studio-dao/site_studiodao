<template>
  <div class="section_CV" id="section_CV">
    <h1 class="titre_CV" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Téléchargez mon CV</h1>
    <a :href="require('../assets/images/images_doc/CV_uxui_designer_graphic_designer_FR.pdf')" download="CV.pdf" target="_blank"><button class="bouton_telechargement" >Je télécharge</button></a> 
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "section_CV",

  data() {
    return {
    }
  },

    methods: {

    },

};
</script>

<!-- STYLE -->
<style>

/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
 
.section_CV {
  left: 0px;
  right: 0px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(11, 202, 203, 1) 67%
  );
}
.titre_CV {
  margin: 0px;
  padding: 10px;
  text-align: center;
  font-family: "Roboto condensed";
  color: white;
  font-size: 50px;
}
.bouton_telechargement {
  margin-top: 30px;
  border-radius: 10px;
  background: rgb(21, 21, 21);
  font-family: "Roboto condensed";
  color: rgb(11, 202, 203);
  border: none;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: all .2s ; 
}

.bouton_telechargement:hover { 
  transform: scale(1.2); 
  }

}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
  
.section_CV {
  left: 0px;
  right: 0px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(11, 202, 203, 1) 67%
  );
}
.titre_CV {
  margin: 0px;
  padding: 10px;
  text-align: center;
  font-family: "Roboto condensed";
  color: white;
  font-size: 30px;
}
.bouton_telechargement {
  border-radius: 10px;
  background: rgb(21, 21, 21);
  font-family: "Roboto condensed";
  color: rgb(11, 202, 203);
  border: none;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  transition: all .2s ; 
}

.bouton_telechargement:hover { 
  transform: scale(1.2); 
  }
}
</style>
