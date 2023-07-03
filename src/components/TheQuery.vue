<template>
  <div id="query-view">
    <div v-if="show % 3 == 0">
      <h1>Query 1</h1>
      <p>
        Seleccionar el número de documento, el nombre, el apellido, el sueldo,
        los casos ganados y los casos perdidos de los abogados que actualmente
        estan llevando un caso, que sean peruanos, que sean asistidos por un
        secretario, que tengan menos de un 33\% de casos ganados, que tengan
        sueldo mayor al promedio y que sean trabajadores a tiempo completo.
      </p>
      <table>
        <thead>
          <tr>
            <th>Número de documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sueldo</th>
            <th>Casos ganados</th>
            <th>Casos perdidos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in queryData1" :key="item.id">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
            <td>{{ item[3] }}</td>
            <td>{{ item[4] }}</td>
            <td>{{ item[5] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="show % 3 == 1">
      <h1>Query 2</h1>
      <p>
        Obtener las abogadas mujeres que han empezado a trabajar en el ultimo
        año y se encuentran dentro del 20% de todos los abogados con más casos
        ganados. Además, incluye la cantidad de veces que cada abogada ha
        trabajado con la persona jurídica cuyo identificador es 18164809220.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tipo de documento</th>
            <th>Número de documento</th>
            <th>Cantidad de casos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in queryData2" :key="item.id">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="show % 3 == 2">
      <h1>Query 3</h1>
      <p>
        Obtener los abogados que se encuentren dentro del percentil 75 en base a
        los casos ganados, sean a tiempo completo, tengan más de un año
        trabajando y trabajen en un departamento que tenga dos o más años de
        experiencia.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tipo de documento</th>
            <th>Número de documento</th>
            <th>Casos ganados</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in queryData3" :key="item.id">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="show++">
      {{ show % 3 == 0 ? "Query 1" : show % 3 == 1 ? "Query 2" : "Query 3" }}
    </button>
  </div>
</template>

<script>
import { bdQuery1, bdQuery2, bdQuery3 } from "@/services/query.api.js";

export default {
  data() {
    return {
      show: 0,
      queryData1: [],
      queryData2: [],
      queryData3: [],
    };
  },
  mounted() {
    this.getQueryData();
  },
  methods: {
    async getQueryData() {
      const res1 = await bdQuery1();
      this.queryData1 = res1;
      const res2 = await bdQuery2();
      this.queryData2 = res2;
      const res3 = await bdQuery3();
      this.queryData3 = res3;
    },
  },
};
</script>

<style scoped>
#query-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#query-view table {
  border-collapse: collapse;
  width: 100%;
}
#query-view th,
#query-view td {
  text-align: left;
  padding: 8px;
}
#query-view tr:nth-child(even) {
  background-color: #f2f2f2;
}
#query-view th {
  background-color: #4caf50;
  color: white;
}
#query-view button {
  margin-top: 3rem;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  font-size: 16px;
}
#query-view button:hover {
  background-color: #3e8e41;
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
