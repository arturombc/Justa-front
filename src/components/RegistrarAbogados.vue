<template>
  <div id="abogado-form">
    <h1>Registre un abogado</h1>
    <br />
    <div v-if="errorList.length > 0" id="div-errors">
      <ul>
        <li v-for="error in errorList" :key="error.param">
          {{ error }}
        </li>
      </ul>
    </div>
    <form @submit.prevent.stop="saveAbogado">
      <label for="nombre">
        <span>Nombre:</span>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          autocomplete="given-name"
          v-model="abogado.nombre"
        />
      </label>
      <label for="apellido">
        <span>Apellido:</span>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          autocomplete="family-name"
          v-model="abogado.apellido"
        />
      </label>
      <label for="telefono">
        <span>Teléfono:</span>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
          autocomplete="tel"
          v-model="abogado.telefono"
        />
      </label>
      <label for="email">
        <span>Email:</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autocomplete="email"
          v-model="abogado.email"
        />
      </label>
      <label for="username">
        <span>Username:</span>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          v-model="abogado.username"
        />
      </label>
      <label for="password">
        <span>Password:</span>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autocomplete="password"
          v-model="abogado.password"
        />
      </label>
      <label for="codigo-abogado">
        <span>Código:</span>
        <input
          type="text"
          id="codigo-abogado"
          name="codigo-abogado"
          placeholder="Código de abogado"
          v-model="abogado.codigo_abogado"
        />
      </label>
      <!-- <label for="image">
        <span>Imagen:</span>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          @change="onFileSelected"
        />
      </label> -->
      <label for="dpto">
        <span>Departamento:</span>
        <select
          name="abogado-departamento"
          id="dpto"
          v-model="abogado.departamento_id"
        >
          <option
            v-for="departamento in departamentos"
            :key="departamento.id"
            :value="departamento.id"
          >
            {{ departamento.nombre }}
          </option>
        </select>
      </label>
      <button type="submit">Registrar Abogado</button>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
import { postAbogados } from "@/services/abogados.api";
import { getDepartamentos } from "@/services/departamentos.api";
export default {
  name: "RegistrarAbogado",
  data() {
    return {
      errorList: [],
      abogado: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        departamento_id: "",
        username: "",
        password: "",
        codigo_abogado: "",
        nombre_empresa: "Firma los K-mens",
      },
      image: null,
      departamentos: [],
    };
  },
  methods: {
    async saveAbogado() {
      try {
        const response = await postAbogados(this.abogado);
        console.log(response);
        this.abogado = {
          nombre: "",
          apellido: "",
          telefono: "",
          email: "",
          departamento_id: "",
          username: "",
          password: "",
          codigo_abogado: "",
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
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    async getDepartamentos_() {
      const response = await getDepartamentos();
      console.log(response.departamentos);
      this.departamentos = response.departamentos;
    },
  },
  mounted() {
    this.getDepartamentos_();
  },
};
</script>

<style scoped>
#abogado-form {
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
#abogado-form table {
  border-collapse: collapse;
  width: 100%;
}
#abogado-form button {
  margin-top: 1rem;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 12px;
}
#abogado-form button:hover {
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
