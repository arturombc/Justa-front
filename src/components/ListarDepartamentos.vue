<template>
  <div id="listar-departamentos">
    <div>
      <div>
        <h1>
          Departamentos
          <router-link to="/" class="btn btn-primary float-end">
            Añadir Departamento</router-link
          >
        </h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nombre corto</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="departamento in this.departamentos"
              :key="(departamento[0], departamento[1])"
            >
              <td>{{ departamento.nombre }}</td>
              <td>{{ departamento.short_name }}</td>
              <td>{{ departamento.descripcion }}</td>
              <td>
                <router-link to="/" class="btn btn-success">Edit</router-link>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deleteDepartamentoNombre(departamento.id)"
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
import {
  getDepartamentos,
  deleteDepartmentos,
} from "@/services/departamentos.api";
export default {
  data() {
    return {
      departamentos: [],
    };
  },
  methods: {
    async getDepartamentosShow() {
      const response = await getDepartamentos();
      this.departamentos = response.departamentos;
      console.log(this.departamentos);
    },
    async deleteDepartamentoNombre(id) {
      const response = await deleteDepartmentos(id);
      console.log(response);
      this.getDeparatmentosShow();
    },
  },
  mounted() {
    this.getDepartamentosShow();
  },
};
</script>

<style scoped>
#listar-departamentos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
table {
  border-collapse: collapse;
  width: 100%;
}
#listar-departamentos th,
#listar-departamentos td {
  text-align: left;
  padding: 8px;
}
#listar-departamentos tr:nth-child(even) {
  background-color: #f2f2f2;
}
#listar-departamentos th {
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

#listar-departamentos {
  margin-right: 10rem;
  margin-left: 10rem;
}
</style>
