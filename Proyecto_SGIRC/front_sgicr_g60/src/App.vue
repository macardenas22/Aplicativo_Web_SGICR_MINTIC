<template>        
  <div id="app">
    <div id="cabecera">
      <img id="header" alt="icono1" src="@/assets/Icono1.png">
    </div>
    
    <nav>
      <ul> 

        <li><div><router-link to="/about">Inicio</router-link></div></li>
        <li><div><router-link to="/propietarios">Propietarios</router-link></div></li>
        <li><div><router-link to="/conjuntos">Conjuntos</router-link></div></li>
        <li><div><router-link to="/apartamentos">Apartamentos</router-link></div></li>
        <li><div><router-link to="/cuentas_cobro">Cuentas de Cobro</router-link></div></li>
        <li><div><router-link to="/recaudos_pago">Recaudo Pago</router-link></div></li>
      </ul>
    </nav>
    <router-view/>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300;1,700&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eae2b7;
  background-color: #003049 ;
}

#titles{
  font-family: 'Nunito', sans-serif;
}

body{
  font-family: 'Lato', sans-serif;
}

#app #cabecera
{
  text-align: left;
}

#app #cabecera #header{
  height: 95px;
  width: 320px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #eae2b7;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #001d3d;
}

li {
  float: left;
  border-right:1px solid;
}

li:last-child {
  border-right: none;
}

li div {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li div:hover:not(.active) {
  background-color: #46bdc6;

}

.active {
  background-color: #f77f00;

}



</style>

<script>

</script>
