<template>
  <footer>
    <nav class="nav_header">
      <ul class="nav_list">
        <li class="competence">
          <a href="#section_competences">Competences</a>
        </li>
        <li class="CV"><a href="#section_CV">CV</a></li>
        <li class="contact"><a href="#section_contact">Contact</a></li>
      </ul>
    </nav>


  </footer>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "footer_app",
};
</script>

<!-- STYLE -->
<style>
footer {
  padding: 25px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid rgb(11, 202, 203);
}
</style>
