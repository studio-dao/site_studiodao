<template>
<header>
  <img class="logo" :src="logo" alt="logo">
  <nav class="nav_header">
   <ul class="nav_list">
     <li class="competence"><a href="#section_competences">Compétences</a></li>
     <li class="CV"><a href="#section_CV">CV</a></li>
     <li class="contact"><a href="#section_contact">Contact</a></li>
   </ul>
  </nav>
</header>
</template>

<!--SCRIPT-->
<script>
import {mapState} from 'vuex'

export default {
  name: 'header_app',
  computed :{
    ...mapState(['logo'])
  }
}
</script>

<!-- STYLE-->
<style >

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&family=Roboto:wght@700;900&display=swap');

 header{ 
   padding: 15px;
   left: 0px;
   right: 0px;
   display: flex;
   flex-direction: row;
 }

.logo{
width: 15%;
}

.nav_header{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
}

 ul{
   padding: 0px;
   margin: 0px;
   list-style: none;
   display: flex;
   flex-direction: row;
 }

 a{
    text-decoration: none;
    font-family: 'Roboto';
    font-weight: 100;
    color: white;
    font-size: 14px;
    margin-right: 10px;
 }

</style>
