<template>
  <div id="abogado-form">
    <h1>Registre un abogado</h1>
    <br />
    <form @submit.prevent.stop="">
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
      <label for="image">
        <span>Imagen:</span>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          @change="onFileSelected"
        />
      </label>
      <label for="dpto">
        <span>Departamento:</span>
        <select
          name="abogado-departamento"
          id="dpto"
          v-model="abogado.departamento"
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
      <div v-if="errorList.length > 0">
        <h3>Por favor corrija los siguientes errores:</h3>
        <ul>
          <li v-for="error in errorList" :key="error.param">
            {{ error[0] }}
            {{ error[1] }}
            {{ error[2] }}
            {{ error[3] }}
            {{ error[4] }}
            {{ error[5] }}
            {{ error[6] }}
            {{ error[7] }}
            {{ error[8] }}
          </li>
        </ul>
      </div>
    </form>
    {{ abogado }}
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
        departamento: "",
        username: "",
        password: "",
        codigo_abogado: "",
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
          departamento: "",
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
            // set timeout para quitar el mensaje de error
            setTimeout(() => {
              this.errorList = [];
            }, 3000);
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
}
#abogado-form table {
  border-collapse: collapse;
  width: 100%;
}
#abogado-form th,
#abogado-form td {
  text-align: left;
  padding: 8px;
}
#abogado-form tr:nth-child(even) {
  background-color: #f2f2f2;
}
#abogado-form th {
  background-color: #4caf50;
  color: white;
}
#abogado-form button {
  margin-top: 3rem;
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
</style>
