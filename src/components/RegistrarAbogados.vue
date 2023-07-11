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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
        />
      </label>
      <label for="departamentos">
        <span>Departamento:</span>
        <select
          name="departamento"
          id="departamentos"
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
    </form>
    {{ abogado }}
  </div>
</template>

<script>
import axios from "axios";
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
      departamentos: [
        { nombre: "Antioquia", id: 1 },
        { nombre: "Cundinamarca", id: 2 },
        { nombre: "Valle del Cauca", id: 3 },
      ],
    };
  },
  methods: {
    saveAbogado() {
      axios
        .post("http://localhost:3000/abogados", this.abogado)
        .then((res) => {
          console.log(res.data);
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
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 400) {
              // Poner el código de validación cuando es incorrecto
              this.errorList = err.response.data.ALGO; // por definir
            }
            console.log(err.response.data);
          }
        });
    },
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
