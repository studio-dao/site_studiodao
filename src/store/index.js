import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: require('@/assets/images/images_portrait_et_logo/logo_sdao_v3.png'),
    portrait: require('@/assets/images/images_portrait_et_logo/portrait.png'),
    portrait_filaire: require('@/assets/images/images_portrait_et_logo/portrait_filaire_et_halo.png'),
    fields: [
      {
          image_field: require('@/assets/images/images_logos_sections/logo_webdesign.png'),
          title: 'Web design (Ux Ui) \r& Intégration',
          description: 'blablabla'
      },
      {
          image_field: require('@/assets/images/images_logos_sections/logo_graphic_design.png'),
          title: 'Graphic design',
          description: 'okokok'
      },
      {
          image_field: require('@/assets/images/images_logos_sections/logo_DA.png'),
          title: 'Direction artistique',
          description: 'ouioui'
      },
    ],

  sliderWebdesign:[
    {
      image:require('@/assets/images/images_webdesign/website_exed.png'),
      description:'Site \'Executive education program\' de Rennes school of Business.',
      buttonLink:'https://executive.rennes-sb.com/'
    },
    {
      image:require('@/assets/images/images_webdesign/website_ronan_paitier.png'),
      description:'Site pro de Ronan Paitier.',
      buttonLink:'https://ronanpaitier.wordpress.com/'
    },
    {
      image:require('@/assets/images/images_webdesign/website_muremur.png'),
      description:'Site Muremur©',
      buttonLink:'https://www.muremur.fr/'
    },
    {
      image:require('@/assets/images/images_webdesign/landing_election_BDE.png'),
      description:'Landing page election BDE, Rennes School of business.',
    },
    {
      image:require('@/assets/images/images_webdesign/website_passionfilmick.png'),
      description:'Blog passion-filmick (non active).',
    
    },
    {
      image:require('@/assets/images/images_webdesign/website_toolkit.png'),
      description:'Site Toolkit, Rennes School of Business.',
      
    }
  ],

  sliderGraphicdesignLogo:[
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_coton_road.jpg'),
      description:'Logo réalisé pour la société Coton road',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_my_home_agency.jpg'),
      description:'Logo réalisé pour la société My Home Agency',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/aloha_square.png'),
      description:'Logo réalisé pour le département Aloha square de la Rennes school of business',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo campus fest.jpg'),
      description:'Logo réalisé pour le campus festival de la Rennes school of business',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_unframed.jpg'),
      description:'Logo réalisé pour le unframed festival de la Rennes school of business',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_muremur.jpg'),
      description:'Logo réalisé pour l\'application Muremur©',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_janis_rainer.jpg'),
      description:'Logo réalisé pour le groupe Janis rainer',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_inter_lgbti.jpg'),
      description:'Logo réalisé pour L\'inter-LGBTQI+ française'
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_iskis.png'),
      description:'Logo réalisé pour l\' association ISKIS de la ville de Rennes',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_mariane_fede_lgbtqi.png'),
      description:'Logo réalisé pour la campagne de l\'inter_LGBTQI+ française',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_ronan_paitier.png'),
      description:'Logo réalisé pour l\'artisant Ronan paitier',
    },
    {
      categorie: 'Logo',
      image:require('@/assets/images/images_graphic_design/gd_logos/logo_slutty_sue.jpg'),
      description:'Logo réalisé pour le DJ Slutty Sue',
    }
  ],
  sliderGraphicdesignFlyer:[
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/rsb_bachelor.jpg'),
      description:'Visuel réalisé pour la promo du programme bachelor de la Rennes school of business',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/rsb_int_fair.jpg'),
      description:'Visuel réalisé pour l\'Internationnal Fair de la Rennes school of business',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/rsb_jpo.jpg'),
      description:'Visuel réalisé pour les journées portes ouvertes de la Rennes school of business',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/rsb_master.jpg'),
      description:'Visuel réalisé pour la promo du master de la Rennes school of business',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/concert_lyric.jpg'),
      description:'Visuel de concert lyrique de l\'association Ars viva',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/flyer_gwendal.jpg'),
      description:'Visuel un stage de danse des Ateliers Fougère',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/flyer_menage_a_trois.jpg'),
      description:'Visuel la promotion d\'une soirée du collectif barcelonnais \'Menage à trois\'',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_10ans.jpg'),
      description:'Visuel officiel des 10ans de la marque Bonobo',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_denim_guide.jpg'),
      description:'Guide du denim réalisé pour les vendeurs de la marque Bonobo',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_etiquettes_jeans.jpg'),
      description:'Hangtags réalisé pour identifier les coupes de jeans de la marque Bonobo',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_PLV_jeans.jpg'),
      description:'PLV réalisées pour promouvoir les coupes de jeans de la marque Bonobo',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_ramadan_kareem_carte.jpg'),
      description:'Visuel les voeux de ramadan de la marque Bonobo à ses partenaires du Moyen-Orient',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_event_blog.jpg'),
      description:'Carton d\'invitation réalisé pour un événement blogueur, de la marque Bonobo jeans',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_PLV_bus_2.jpg'),
      description:'PLV pour abris bus réalisé pour une opération spéciale de la marque Bonobo jeans',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/BNB_PLV_bus.jpg'),
      description:'PLV pour abris bus réalisé pour une opération spéciale de la marque Bonobo jeans',
    },
    {
      categorie: 'Flyer',
      image:require('@/assets/images/images_graphic_design/gd_flyer/anniv_michael.jpg'),
      description:'Visuel pour une soirée d\'anniversaire privée',
    },
    
  ],
  sliderGraphicdesignMode:[
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_durable.jpg'),
      description:'Imprimé réalisé pour la collection été durable, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_indien.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_jardin.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_navajo.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_palmiers.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_perroquets.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_californie.jpg'),
      description:'Visuel réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_tropical.jpg'),
      description:'Imprimé réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_aop_ski.jpg'),
      description:'Imprimé réalisé pour la collection hiver homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_beyond.jpg'),
      description:'Visuel réalisé pour la collection hiver homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_bonnet.jpg'),
      description:'Visuel réalisé pour la collection hiver homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_calecon_chat.jpg'),
      description:'Visuel réalisé pour la collection hiver homme, de la marque Bonobo',
    },
  
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_hindou.jpg'),
      description:'Visuel réalisé pour la collection hiver homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_denim_terre_happy.jpg'),
      description:'Visuel réalisé pour la collection été homme, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_punk_cat.jpg'),
      description:'Visuel réalisé pour la collection festival, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_sport.jpg'),
      description:'Visuel réalisé pour la collection hiver, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_tigre.jpg'),
      description:'Visuel réalisé pour la collection hiver, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_wearenotrebels.jpg'),
      description:'Visuel réalisé pour la collection festival, de la marque Bonobo',
    },
    {
      categorie: 'Mode',
      image:require('@/assets/images/images_graphic_design/gd_mode/mode_workwear.jpg'),
      description:'Visuel réalisé pour la collection hiver, de la marque Bonobo',
    },
    
  ],
  sliderAD:[
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_couple_summer.png'),
      description:'Direction artistique du shooting lookbook summer réalisé pour la marque Bonobo',
    },
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_couple_AH.png'),
      description:'Direction artistique du shooting lookbook hiver réalisé pour la marque Bonobo',
    },
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_couple_leaflet.png'),
      description:'Direction artistique du shooting pour le lancement de la collection hiver réalisé pour la marque Bonobo',
    },
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_couple_AH.png'),
      description:'Direction artistique du shooting lookbook hiver réalisé pour la marque Bonobo',
    },
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_leaftlet.png'),
      description:'Direction artistique du shooting pour le lancement de la collection hiver réalisé pour la marque Bonobo',
    },
    {
      categorie: 'Direction artistique',
      image:require('@/assets/images/images_DA/DA_noel.png'),
      description:'Direction artistique du shooting du lookbook de Noël réalisé pour la marque Bonobo',
    },
  ]
  
  },
  mutations: {},
  actions: {},
  modules: {}
})