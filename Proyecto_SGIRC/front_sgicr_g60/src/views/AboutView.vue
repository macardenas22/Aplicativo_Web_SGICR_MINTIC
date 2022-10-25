<template>
  <div class="inicio">
    <inicio/>
    <footerPagina/>
  </div>

</template>
<script>
import footerPagina from '@/components/footerPagina.vue'
import inicio from '@/components/inicioPagina.vue'
export default {
  name:"inicio-view",
  components:{
  footerPagina,inicio,

  }
}
</script>
