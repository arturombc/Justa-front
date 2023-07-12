<template>
  <div id="departamento-form">
    <h1>Registre un departamento</h1>
    <br />
    <form @submit.prevent.stop="registrardepartamento">
      <label for="nombre">
        <span>Nombre:</span>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          autocomplete="given-name"
          v-model="departamento.nombre"
        />
      </label>
      <label for="apellido">
        <span>Nombre corto:</span>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Nombre corto"
          autocomplete="family-name"
          v-model="departamento.short_name"
        />
      </label>
      <div v-if="errorList.length > 0" id="div-errors">
        <ul>
          <li v-for="error in errorList" :key="error.param">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit">Registrar departamento</button>
    </form>
  </div>
</template>

<script>
import { createDepartmentos } from "@/services/departamentos.api";
export default {
  name: "RegistrarDepartamentos",
  data() {
    return {
      departamento: {
        nombre: "",
        short_name: "",
      },
      errorList: [],
    };
  },
  methods: {
    async registrardepartamento() {
      try {
        const response = await createDepartmentos(this.departamento);
        console.log(response);
        this.departamento = {
          nombre: "",
          short_name: "",
        };
        this.errorList = [];
      } catch (err) {
        if (err.response) {
          if (err.response.status === 400) {
            // Poner el código de validación cuando es incorrecto
            this.errorList = err.response.data.errors; // por definir
            console.log(this.errorList);
            // set timeout para quitar el mensaje de error
            setTimeout(() => {
              this.errorList = [];
            }, 6000);
          }
          console.log(err.response.data);
        }
      }
    },
  },
};
</script>

<style scoped>
#departamento-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  border: 1px solid bisque;
  background-color: #f2f2f2;
  /* ponerle un límite a los lados */
  padding: 1rem;
  border-radius: 30px;
  max-width: 500px;
}
#departamento-form table {
  border-collapse: collapse;
  width: 100%;
}
#departamento-form th,
#departamento-form td {
  text-align: left;
  padding: 8px;
}
#departamento-form tr:nth-child(even) {
  background-color: #f2f2f2;
}
#departamento-form th {
  background-color: #4caf50;
  color: white;
}
#departamento-form button {
  margin-top: 3rem;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 12px;
}
#departamento-form button:hover {
  background-color: #3e8e41;
}

label {
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  max-width: 700px;
}
#div-errors {
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
}
</style>
