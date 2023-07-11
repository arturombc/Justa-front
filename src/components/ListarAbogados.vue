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
              <th>Codigo de Abogado</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>Correo</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="abogado in this.abogados"
              :key="(abogado[0], abogado[1])"
            >
              <td>{{ abogado.abogado.codigo_abogado }}</td>
              <td>{{ abogado.persona.nombre }}</td>
              <td>{{ abogado.persona.apellido }}</td>
              <td>{{ abogado.persona.username }}</td>
              <td>{{ abogado.persona.correo }}</td>
              <td>{{ abogado.departamento.nombre }}</td>
              <td>
                <router-link to="/" class="btn btn-success">Edit</router-link>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deletePersonaNdocTdoc(abogado.abogado.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {{ abogados[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import { getAbogados, deleteAbogados } from "@/services/abogados.api";
export default {
  data() {
    return {
      abogados: [],
    };
  },
  methods: {
    async getPersonasShow() {
      const response = await getAbogados();
      this.abogados = response.abogados;
    },
    async deletePersonaNdocTdoc(id) {
      if (confirm("¿Está seguro que desea eliminar el abogado?")) {
        const response = await deleteAbogados(id);
        this.getPersonasShow();
        if (response.status === 200) {
          alert("Abogado eliminado correctamente");
        } else {
          alert("Error al eliminar el abogado");
        }
      }
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

#listar-abogados {
  margin-top: 3rem;
  padding: 12px 24px;
  text-decoration: none;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
