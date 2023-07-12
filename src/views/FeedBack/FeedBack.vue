<template>
  <crud-nav></crud-nav>
  <div id="feed_back">
    <label for="miComboBox">Elige una opción:</label>
    <form @submit.prevent="feed_back">
      <select id="miComboBox" v-model="nombre_escogido">
        <option
          v-for="abogado in this.nombres_abogados"
          :key="(abogado[0], abogado[1])"
        >
          {{ abogado }}
        </option>
      </select>
      <button type="submit" class="btn btn-primary btn-xl">Submit</button>
    </form>
    <br />
    <textarea
      v-model="contenido"
      id="miTextarea"
      rows="30"
      cols="50"
    ></textarea>
  </div>
  <svg width="200" height="200">
    <PolyGraph :stats="stats"></PolyGraph>
  </svg>

  <!-- controls -->
  <div v-for="stat in stats" :key="stat">
    <label>{{ stat.label }}</label>
    <input type="range" v-model="stat.value" min="0" max="100" />
    <span>{{ stat.value }}</span>
    <button @click="remove(stat)" class="remove">X</button>
  </div>

  <form id="add">
    <input name="newlabel" v-model="newLabel" />
    <button @click="add">Add a Stat</button>
  </form>

  <pre id="raw">{{ stats }}</pre>
</template>

<script>
import CrudNav from "@/components/CrudNav.vue";
import { get_nombres } from "@/services/feed_back.api";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
export default {
  name: "TheListView",
  data() {
    return {
      nombres_abogados: [],
      contenido: "",
      nombre_escogido: "",
    };
  },
  components: {
    CrudNav,
  },
  methods: {
    async get_abogados() {
      const response = await get_nombres();
      console.log(response);
      this.nombres_abogados = response.nombres_abogados;
      console.log(this.nombres_abogados);
    },
    async feed_back() {
      try {
        const response = await axios.post("http://127.0.0.1:5000/feed_back/", {
          nombre_abogado: this.nombre_escogido,
        });
        this.contenido = response.data.texto;
        console.log(response.data.texto);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.get_abogados();
  },
};
</script>

<style>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>
