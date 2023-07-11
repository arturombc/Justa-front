<template>
  <div id="listar-abogados">
    <div>
      <div>
        <h1>
          Personas
          <router-link to="/" class="btn btn-primary float-end">
            Añadir Persona</router-link
          >
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
              :key="(persona[0], persona[1])"
            >
              <td>{{ persona.tdoc }}</td>
              <td>{{ persona.ndoc }}</td>
              <td>{{ persona.nombre }}</td>
              <td>{{ persona.apellido }}</td>
              <td>{{ persona.sexo }}</td>
              <td>{{ persona.correo }}</td>
              <td>
                <router-link to="/" class="btn btn-success">Edit</router-link>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deletePersonaNdocTdoc(persona[0], persona[1])"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getAbogados } from "@/services/abogados.api";
export default {
  data() {
    return {
      personas: [
        {
          tdoc: "dni",
          ndoc: "7654321213",
          nombre: "arturo",
          apellido: "raaaa",
          sexo: "M",
          correo: "arturo@gmail.com",
        },
      ],
    };
  },
  methods: {
    async getPersonasShow() {
      const response = await getAbogados();
      this.personas = response;
      console.log(response);
      // console.log(this.personas);
      // console.log(response[0]);
    },
    // deletePersonaNdocTdoc(tdoc, ndoc) {
    //   deletePersonas(tdoc, ndoc);
    //   this.getPersonasShow();
    //   // const response = await deletePersona(ndoc,tdoc);
    //   // this.personas = response;
    // },
  },
  mounted() {
    //this.getPersonasShow();
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
#listar-abogados th,
#listar-abogados td {
  text-align: left;
  padding: 8px;
}
#listar-abogados tr:nth-child(even) {
  background-color: #f2f2f2;
}
#listar-abogados th {
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
