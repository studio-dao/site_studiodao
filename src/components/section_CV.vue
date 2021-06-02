<template>
  <div class="section_CV" id="section_CV">
    <h1 class="titre_CV">Téléchargez mon CV</h1>
    <button class="bouton_telechargement" >Je télécharge</button>
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


</style>
