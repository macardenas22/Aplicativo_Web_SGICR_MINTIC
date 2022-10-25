<template>
 <div class="formOwner">
  <form @submit.prevent="guardar">
    <label for="idpropietario">Identificación</label>
    <input 
      class ="b" type="text" name="idpropietario"
      placeholder="Número de identificación"
      id="idpropietario" 
      v-model = "propietario.idpropietario">

    
    <label for="fechanacimiento">Fecha Nacimiento</label>
    <input class ="a" type="date" name="fechanacimiento" 
    value="1920-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
    id="fechanacimiento" 
    v-model="propietario.fechanacimiento"
    >
    
    <br><br>

    <label for="nombre">Nombre Propietario</label>
    <input class ="a" type="text" name="nombre" 
    placeholder="Ingrese su nombre Completo.."
    id="nombre"
    v-model="propietario.nombre"
    >

    <label for="direccion">Dirección Propietario</label>
    <input class ="a" type="text" name="direccion" id="direccion"
    v-model="propietario.direccion"
    >

    <br><br>
    
    <label for="idciudad">Ciudad</label>
    <select name="idciudad" id="idciudad"
    v-model="propietario.idciudad"
    >
    
    <option value="05001">Medellín</option>
    <option value="11001">Bogotá</option>
    <option value="76001">Calí</option>
    <option value="68001">Bucaramanga</option>

  </select>

    <label for="email">Correo Electrónico</label>
    <input class ="a" type="text" name="email"
     placeholder="usuario@dominio"
     id="email"
     v-model="propietario.email"
     >

    <label for="celular">Celular</label>
    <input class ="b" type="text" name="celular" placeholder=""
      id="celular"
      v-model="propietario.celular"
    >
    
    <br><br>

    <div class="buttonGroup">
    <button type="submit">Guardar</button>
    <button type="button" @click="eliminar(propietario.idpropietario)">Eliminar</button>
    </div>    
</form>

</div>



</template>

<script>
import axios from "axios";

export default {
    name:"formOwner",
    data:function(){
      return {
        propietario: {
          idpropietario:"",
          nombre: "",
          direccion: "",
          idciudad: "",
          celular:"",
          email:"",
          fechanacimiento:"",
        },
      };
    },
    methods:{
      guardar(){
        axios
        .post("http://http://150.136.153.196:8080/SGICR/api/propietario", this.propietario)
        .then((data)=>{
          console.log("response",data);
          this.$emit("refresh");
        });
      },
      eliminar(id){
        axios
        .delete("http://150.136.153.196:8080/SGICR/api/propietario/"+ id)
        .then ((data) =>{
          console.log("response",data);
          this.propietario.idpropietario = null;
          this.$emit("refresh");
        })
        .catch(()=>{
          alert("La identificación de propietario NO existe");

        });
        console.log(id);
      },
    },
  };




</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  

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
div .formOwner{
  border-radius: 5px;
  background-color: #003566;
  padding: 20px;
  text-align: left;
}


</style>