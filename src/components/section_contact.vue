<template>
  <div class="section_contact" id="section_contact">
    <div class="chapeau_section_contact">
      <img class="portrait_filaire" :src="portrait_filaire" alt="" />
      <h1 class="form_title">Me contacter</h1>
    </div>
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
      <button class="bouton_bleu">Envoyer</button>
      </div>
    </form>
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
.section_contact {
  left: 0px;
  right: 0px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chapeau_section_contact {
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.portrait_filaire {
  width: 130px;
  height: 150px;
}

.formulaire_contact {
  display: flex;
  flex-direction: column;
}
.form_title {
  margin: 0px 0px 20px 0px;
  color: white;
  font-family: "Roboto condensed";
  font-size: 30px;
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


.bouton_bleu {
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
.div_bouton_form{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.textarea{
  height: 150px;
}

</style>
