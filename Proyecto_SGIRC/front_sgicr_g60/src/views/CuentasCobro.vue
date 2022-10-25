<template>
    <div class="cuentaCobro">
      <formCollectionAccount/>
      <footerPagina/>
    </div>
  </template>
  
  <script>
  import formCollectionAccount from '@/components/formularioCuentaCobro.vue'
  import footerPagina from '@/components/footerPagina.vue'
  export default {
    name:"cuentaCobro-view",
    components:{
        formCollectionAccount,footerPagina
  
    }
  }
  </script>
  
  <style>
  
  </style>