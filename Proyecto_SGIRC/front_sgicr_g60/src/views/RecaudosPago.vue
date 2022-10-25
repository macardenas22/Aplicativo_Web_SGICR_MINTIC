
<template>
    <div class="recaudoPago">
      <formCollectionPayment/>
      <footerPagina/>
    </div>
  </template>
  
  <script>
  import formCollectionPayment from '@/components/formularioRecaudoPago.vue'
  import footerPagina from '@/components/footerPagina.vue'
  export default {
    name:"recaudoPago-view",
    components:{
        formCollectionPayment,footerPagina,
  
    }
  }
  </script>
  
  <style>
  
  </style>