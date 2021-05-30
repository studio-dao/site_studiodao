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
          title: 'Web design',
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
      description:'Site\'Executive education program\' de Rennes school of Business.',
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
  ]


  },
  mutations: {},
  actions: {},
  modules: {}
})