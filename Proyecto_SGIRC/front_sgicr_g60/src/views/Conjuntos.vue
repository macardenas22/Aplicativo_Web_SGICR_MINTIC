<template>
    <div class="conjuntos">
      <formBuild/>
      <footerPagina/>
    </div>
  </template>
  
  <script>
  import formBuild from '@/components/formularioConjuntos.vue'
  import footerPagina from '@/components/footerPagina.vue'
  
  export default {
    name:"conjuntos-view",
    components:{
      formBuild,footerPagina
  
    }
  }
  </script>
  
  <style>
  
  </style>