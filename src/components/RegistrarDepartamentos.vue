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
          required
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
          required
        />
      </label>
      <button type="submit">Registrar departamento</button>
    </form>
    {{ departamento }}
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
    };
  },
  methods: {
    async registrardepartamento() {
      const response = await createDepartmentos(this.departamento);
      console.log(response);
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
