<template>
  <div class="formApartment">
    <form action="/action_page.php">
      <label for="idconjunto">Id Apartamento</label>
      <input 
        class="c" type="text" 
        id="idconjunto" name="idconjunto" />
      <br><br>
      <label for="idpropietario">Identificación Propietario </label>
      <input
        class="b" type="text" id="idpropietario"
        name="idpropietario" placeholder="Identificación Propietario"
      />

      <label for="idconjunto">Id. del Conjunto</label>
      <input class="c" type="text" id="idconjunto" name="idconjunto" />

      <label for="idcoeficiente">Código Coeficiente</label>
      <input class="c" type="text" id="idcoeficiente" name="idcoeficiente" />
      
      <label for="idconjunto">Id. del Conjunto</label>
      <input class="c" type="text" id="idconjunto" name="idconjunto" />
      
      <br><br>

      <label for="idtipoapto">Tipo Apartamento</label>
      <select id="idtipoapto" name="idtipoapto">
        <option value="">...</option>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        <option value=5>5</option>
      </select>

      <label for="torre">Nro. Torre</label>
      <input
        class="c" type="text"
        id="torre" name="torre"
        placeholder=""
      />

      <label for="apartamento">Nro. Apartamento</label>
      <input
        class="c" type="text" id="apartamento"
        name="apartamento"
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
  name: "formApartment",
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
  width: 10%;
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

div .formApartment {
  border-radius: 5px;
  background-color: #003566;
  padding: 20px;
  text-align: left;
}
</style>