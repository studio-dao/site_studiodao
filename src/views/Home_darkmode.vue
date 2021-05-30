<template>
  <div class="main_home_darkmode">

    <header_app />
    <section_intro />
    <section_competences />
    <section_CV />
    <section_contact />
    <footer_app />
  </div>
</template>

<!-- SCRIPT -->
<script>
import header_app from "@/components/header.vue";
import section_intro from "@/components/section_intro.vue";
import section_competences from "@/components/section_competences.vue";
import section_CV from "@/components/section_CV.vue";
import section_contact from "@/components/section_contact.vue";
import footer_app from "@/components/footer.vue";

export default {
  name: "home_darkmode",

  components: {
    header_app,
    section_intro,
    section_competences,
    section_CV,
    section_contact,
    footer_app,
  }
  };

</script>

<!-- STYLE -->
<style>
.main_home_darkmode {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgb(21, 21, 21);
  display: flex;
  flex-direction: column;
}
</style>
