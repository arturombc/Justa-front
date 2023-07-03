<template>
  <!-- crear una vista para insertar una consulta sql y luego mostrarla -->
  <div id="bd">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/crud">CRUD</router-link> |
      <router-link to="/query">Queries</router-link> |
      <router-link to="/sql">SQL</router-link>
    </nav>
    <div>
      <h1>SQL</h1>
      <p>Ingrese una consulta SQL</p>
      <input type="text" v-model="query" />
      <button @click="getQueryData">Consultar</button>
      <div v-if="success">
        <h1>Consulta</h1>
        <table>
          <thead>
            <tr>
              <th v-for="i in length" :key="i">Columna {{ i }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in queryData" :key="item.id">
              <td v-for="i in length" :key="i">{{ item[i - 1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { sqlQuery } from "@/services/sql.api.js";
export default {
  name: "SqlView",
  data() {
    return {
      query: "",
      queryData: [],
      success: false,
      length: 0,
    };
  },
  methods: {
    async getQueryData() {
      const response = await sqlQuery(this.query);
      if (response.data.success == true) {
        this.success = true;
        this.queryData = response.data.info;
        this.length = this.queryData[0].length;
      } else {
        this.success = false;
        this.query = "";
        this.queryData = [];
        this.length = 0;
      }
    },
  },
};
</script>

<style scoped>
#bd {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
reate nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
#bd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
table {
  border-collapse: collapse;
  width: 100%;
}
#bd th,
#bd td {
  text-align: left;
  padding: 8px;
}
#bd tr:nth-child(even) {
  background-color: #f2f2f2;
}
#bd th {
  background-color: #4caf50;
  color: white;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
