<template>
  <div class="formBuild">
    <form @submit.prevent="guardar">
      <label for="idconjunto">Id Conjunto</label>
      <input
        class="d"
        type="text"
        id="idconjunto"
        name="idconjunto"
        

      />
      <br />
      <label for="nombre">Nombre del conjunto </label>
      <input
        class="a"
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Ingrese el nombre del Conjunto.."
      />

      <label for="direccion">Dirección del Conjunto</label>
      <input class="a" type="text" id="direccion" name="direccion" />
      <br><br>
      
      
      <label for="idciudad">Ciudad</label>
      <select id="idciudad" name="idciudad">
        <option value="">...</option>
         <option value="05001">Medellín</option>
        <option value="11001">Bogotá</option>
        <option value="76001">Calí</option>
        <option value="68001">Bucaramanga</option>
      </select>

      <label for="email">Correo Electrónico</label>
      <input
        class="a"
        type="text"
        id="email"
        name="email"
        placeholder="usuario@dominio"
      />
      <label for="celular">Celular</label>
      <input class="b" type="text" id="celular" name="celular" placeholder="" />
      <br />
      <br />
      <label for="estrato">Estrato</label>
      <select id="estrato" name="estrato">
        <option value="">...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <label for="total_aptos">Total Apartamentos</label>
      <input
        class="d"
        type="text"
        id="total_aptos"
        name="total_aptos"
        placeholder=""
      />

      <label for="total_torres">Total Torres</label>
      <input
        class="d"
        type="text"
        id="total_torres"
        name="total_torres"
        placeholder=""
      />

      <label for="area_aptos_mts">Área Total Habitable (mts)</label>
      <input
        class="d"
        type="text"
        id="area_aptos_mts"
        name="area_aptos_mts"
        placeholder=""
      />

      <label for="cant_tipo_aptos">Cantidad de Tipos </label>
      <input
        class="d"
        type="text"
        id="cant_tipo_aptos"
        name="cant_tipo_aptos"
        placeholder=""
      />

      <div class="buttonGroup">
        <button type="submit">Guardar</button>
        <button type="button" @click="eliminar(propietario.idpropietario)">Eliminar</button>
      </div>
    </form>
  </div>
</template>
 
 <script>
export default {
  name: "formBuild",
};
</script>
 
 <style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

label {
  padding: 6px 2px;
  margin: 8px 20px;
  font-family: "nunito", sans-serif;
  text-align: left;
  font-weight: bold;
  width: 30px;
  align-items: stretch;
}

select {
  width: 9%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
  color: #003049;

}


input[type="text"].a {
  width: 24%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
  text-align: center;
}


input[type="text"].b {
  width: 15%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
  text-align: center;
}


input[type="text"].c {
  width: 6%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
  text-align: center;
}


input[type="text"].d {
  width: 4%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
  text-align: center;
}

input[type="date"].a {
  width: 15%;
  padding: 6px 6px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "lato", sans-serif;
}

button[type="submit"] {
  width: 10%;
  background-color: #fcbf49;
  color: #001d3d;
  padding: 8px 6px;
  margin: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
}


button[type="button"] {
  width: 10%;
  background-color: #fcbf49;
  color: #001d3d;
  padding: 8px 6px;
  margin: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
}

div .buttonGroup {
  border-radius: 5px;
  background-color: #003566;
  padding: 20px;
  text-align: center;
}

div .formBuild {
  border-radius: 5px;
  background-color: #003566;
  padding: 20px;
  text-align: left;
}


</style>