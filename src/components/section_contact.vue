<template>
  <div class="section_contact" id="section_contact">
    <div class="chapeau_section_contact">
      <div class="rectangle_lumineux"></div>
      <img class="portrait_filaire" :src="portrait_filaire" alt="portrait dessiné"/>
      <div class="box_droite_contact">
        <h1 class="form_title">Me contacter :</h1>
        <a class="mailto" href="mailto:jean.emmanuel.dao@gmail.com"><button class="bouton_bleu bouton_mail">Ecrire à Studio Dao</button></a>
      </div>
    </div>

    <!-- formulaire 
    <form class="formulaire_contact" action="post">
      <label for="input_nom">Nom</label>
      <input
        class="input_nom"
        type="text"
        name="input_nom"
        placeholder="Entrez votre nom ici..."
      />
      <label for="input_objet">Objet</label>
      <input
        class="input_objet"
        type="text"
        name="input_objet"
        placeholder="Entrez l'objet de votre mail ici..."
      />
      <label for="mail_content">Contenu</label>
      <input
        class="mail_content textarea"
        type="textarea"
        name="input_contenu"
        placeholder="Entrez votre message ici..."
      />
      <div class="div_bouton_form">
      <input type="submit" class="bouton_bleu" value="Envoyer"/>
      </div>
    </form>
    -->
  </div>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
export default {
  name: "section_contact",
  computed: {
    ...mapState(["portrait_filaire"]),
  },
};
</script>

<!-- STYLE -->
<style>
/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {

.section_contact {
  left: 0px;
  right: 0px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chapeau_section_contact {
  position: relative;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}
.rectangle_lumineux{
  position:absolute;
  z-index: 1;
  top: 10px;
  left: 420px;
  width: 200px;
  height: 230px;
  border:none;
  animation: 1.5s linear 0s  infinite alternate animrect;
}
@keyframes animrect {from { box-shadow: 0 0 1px .2px rgba(11, 202, 203, .1), 0 0 2px .2px rgba(4, 77, 77, .1),inset 0 0 1px .2px rgba(11, 202, 203, .1), inset 0 0 2px .2px rgba(4, 77, 77, .1); }  to { box-shadow: 0 0 3px .2px rgba(11, 202, 203, 1), 0 0 3px .3px rgba(4, 77, 77, .8),inset 0 0 3px .2px rgba(11, 202, 203, 1), inset 0 0 3px .3px rgba(4, 77, 77, .8); } };


.portrait_filaire {
  z-index: 2;
  width: 330px;
  height: auto;
}

/* BOX DROITE */

.box_droite_contact{
    height: 300px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.form_title {
  margin: 0px 0px 10px 0px;
  color: white;
  font-family: "Roboto condensed";
  font-size: 30px;
}

.bouton_mail {
  width: 100%;
}

.mailto {
  width: 100%;
  text-align: center;
}

/* FORM */
.formulaire_contact {
  display: flex;
  flex-direction: column;
}

input {
  background: rgb(68, 65, 61);
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  border-style: none;
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 100;
  overflow: scroll;
}

label {
  margin-bottom: 5px;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 14px;
}

.div_bouton_form {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.textarea {
  height: 150px;
}
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
  
.section_contact {
  left: 0px;
  right: 0px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chapeau_section_contact {
  position: relative;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
}
.rectangle_lumineux{
  position:absolute;
  z-index: 1;
  left:10px;
  width:80px;
  height: 100px;
  border:none;
  animation: 1.5s linear 0s  infinite alternate animrect;
}
@keyframes animrect {from { box-shadow: 0 0 1px .2px rgba(11, 202, 203, .1), 0 0 2px .2px rgba(4, 77, 77, .1),inset 0 0 1px .2px rgba(11, 202, 203, .1), inset 0 0 2px .2px rgba(4, 77, 77, .1); }  to { box-shadow: 0 0 3px .2px rgba(11, 202, 203, 1), 0 0 3px .3px rgba(4, 77, 77, .8),inset 0 0 3px .2px rgba(11, 202, 203, 1), inset 0 0 3px .3px rgba(4, 77, 77, .8); } };


.portrait_filaire {
  z-index: 2;
  width: 130px;
  height: 150px;
}

/* BOX DROITE */

.box_droite_contact{
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.form_title {
  margin: 0px 0px 10px 0px;
  color: white;
  font-family: "Roboto condensed";
  font-size: 30px;
}

.bouton_mail {
  width: 100%;
}

.mailto {
  width: 100%;
  text-align: center;
}

/* FORM */
.formulaire_contact {
  display: flex;
  flex-direction: column;
}

input {
  background: rgb(68, 65, 61);
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  border-style: none;
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 100;
  overflow: scroll;
}

label {
  margin-bottom: 5px;
  font-family: "Roboto";
  font-weight: 100;
  color: white;
  font-size: 14px;
}



.div_bouton_form {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.textarea {
  height: 150px;
}
}
</style>
