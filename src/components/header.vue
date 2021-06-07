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

/* DESKTOP */
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
   header{ 
   padding: 15px;
   left: 0px;
   right: 0px;
   display: flex;
   flex-direction: row;
 }

.logo{
width: 9%;
}

.nav_header{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
}

 ul{
   padding: 0px;
   margin: 0px !important;
   list-style: none;
   display: flex;
   flex-direction: row;
 }

 a{
    text-decoration: none !important;
    font-family: 'Roboto'!important;
    font-weight: 100!important;
    color: white!important;
    font-size: 20px!important;
    margin-right: 10px!important;
 }
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {

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
   margin: 0px !important;
   list-style: none;
   display: flex;
   flex-direction: row;
 }

 a{
    text-decoration: none !important;
    font-family: 'Roboto'!important;
    font-weight: 100!important;
    color: white!important;
    font-size: 14px!important;
    margin-right: 10px!important;
 }
}
</style>
