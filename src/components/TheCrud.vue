<template>
  <div id="crud-view">
    <div>
      <div>
        <h1>
          Personas
          <!-- <router-link class="btn btn-primary float-end">
            Añadir Persona</router-link
          > -->
        </h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tipo de documento</th>
              <th>Número de documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Sexo</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="persona in this.personas"
              :key="(persona.numero_documento, persona.tipo_documento)"
            >
              <td>{{ persona[0] }}</td>
              <td>{{ persona[1] }}</td>
              <td>{{ persona[2] }}</td>
              <td>{{ persona[3] }}</td>
              <td>{{ persona[4] }}</td>
              <td>{{ persona[5] }}</td>
              <td>
                <router-link to="/" class="btn btn-success">Edit</router-link>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonas } from "@/services/crud.api.js";
export default {
  data() {
    return {
      personas: [],
    };
  },
  methods: {
    async getPersonasShow() {
      const response = await getPersonas();
      this.personas = response;
      console.log(this.personas);
      console.log(response[0]);
    },
  },
  mounted() {
    this.getPersonasShow();
  },
};
</script>

<style scoped>
#crud-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
table {
  border-collapse: collapse;
  width: 100%;
}
#crud-view th,
#crud-view td {
  text-align: left;
  padding: 8px;
}
#crud-view tr:nth-child(even) {
  background-color: #f2f2f2;
}
#crud-view th {
  background-color: #4caf50;
  color: white;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-success {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
