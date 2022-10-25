<template>
    <div class="apartamentos">
      <formApartment/>
      <footerPagina/>
    </div>
  </template>
  
  <script>
  import formApartment from '@/components/formularioApartamentos.vue'
  import footerPagina from '@/components/footerPagina.vue'
  export default {
    name:"apartamentos-view",
    components:{
    formApartment,footerPagina
  
    }
  }
  </script>
  
  <style>
  
  </style>