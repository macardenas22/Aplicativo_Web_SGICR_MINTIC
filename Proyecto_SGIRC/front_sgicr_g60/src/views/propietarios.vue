<template>
  <div class="propietarios">
    <formOwner @refresh="refrescar"/>
    <footerPagina/>
  </div>

</template>

<script>
import formOwner from '@/components/formularioPropietarios.vue'
import footerPagina from '@/components/footerPagina.vue'
import axios from 'axios';

export default {
  name:"propietarios-view",
  
  components:{
    formOwner,footerPagina,

  },
  data: () => ({
    propietarios: [],
  }),
  
  mounted() {
    this.getPropietarios();
    
  },
  methods: {
    refrescar() {
      this.getPropietarios();
    },
    getPropietarios() {
      axios
        .get("http://150.136.153.196:8080/SGICR/api/propietario/listar")
        /*.get("http://150.136.153.196:8080/SGICR/api/propietario/listar")*/
        .then((response) => {
          this.propietarios = response.data;

        });
    },
  },
}
</script>

<style>

</style>