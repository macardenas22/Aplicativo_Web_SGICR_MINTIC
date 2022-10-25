<template>
  <div class="formciudad">
    <fieldset>
      <legend>Formulario Registro</legend>
      <form action="">
        <label for="idCiudad">Código Ciudad</label>
        <input type="text" name="idCiudad" id="idciudad"><br>
        <label for="nombre">Nombre Ciudad</label>
        <input type="text" name="nombre" id="nombre"><br>
        <label for="departamento">Departamento</label>
        <input type="text" name="departamento" id="departamento"><br>

        <button>Guardar</button>    <button>Eliminar</button>

      </form>
    </fieldset>
  </div>
</template>

<script>
export default {
    name:"formularioCiudad"
    }
</script>

<style>

</style> 
