<template>
  <body
    class="d-flex h-100 w-100"
    data-bs-spy="scroll"
    data-bs-target="#navScroll"
  >
    <div class="h-100 container-fluid">
      <div class="h-100 row d-flex align-items-stretch">
        <div
          class="col-12 col-md-7 col-lg-6 d-flex align-items-start flex-column px-vw-5"
        >
          <header class="mb-auto py-vh-2 col-12">
            <a class="navbar-brand pe-4 fs-4" href="/">
              <a class="navbar-brand pe-4 fs-4" href="/">
                <img
                  src="@/assets/justa_logo.webp"
                  alt="logo"
                  width="32"
                  height="32"
                  class="bi bi-layers-half"
                  viewbox="0 0 16 16"
                />
                <span class="ms-1 fw-bolder">Justa</span>
              </a>
            </a>
          </header>
          <main class="mb-auto col-12">
            <h1>Registra una nueva cuenta</h1>

            <form class="row" @submit.prevent="submitForm">
              <div class="col-12 col-lg-10 col-xl-8">
                <div class="mb-3">
                  <label for="nombre_empresa" class="form-label"
                    >Nombre de la empresa</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="nombre_empresa"
                    v-model="usuario.nombre_empresa"
                  />
                </div>
                <div class="mb-3">
                  <label for="ruc" class="form-label">RUC</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="ruc"
                    v-model="usuario.ruc"
                  />
                </div>
                <div class="mb-3">
                  <label for="nombre" class="form-label"
                    >Nombre de la persona</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="nombre"
                    v-model="usuario.nombre"
                  />
                </div>
                <div class="mb-3">
                  <label for="apellido" class="form-label"
                    >Apellido de la persona</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="apellido"
                    v-model="usuario.apellido"
                  />
                </div>
                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input
                    type="tel"
                    class="form-control form-control-lg"
                    id="telefono"
                    v-model="usuario.telefono"
                  />
                </div>
                <div class="mb-3">
                  <label for="correo" class="form-label"
                    >Correo Electrónico</label
                  >
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="correo"
                    v-model="usuario.correo"
                  />
                </div>
                <div class="mb-3">
                  <label for="username" class="form-label"
                    >Nombre de usuario</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="username"
                    v-model="usuario.username"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="password"
                    v-model="usuario.password"
                  />
                </div>
                <div v-if="errorList.length > 0" id="div-errors">
                  <ul>
                    <li v-for="error in errorList" :key="error.param">
                      {{ error }}
                    </li>
                  </ul>
                </div>
                <button type="submit" class="btn btn-primary btn-xl">
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>

        <div
          class="col-12 col-md-5 col-lg-6 bg-cover"
          style="background-image: url('./frontend/img/webp/colorful.webp')"
        ></div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        nombre_empresa: "",
        ruc: "",
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        username: "",
        password: "",
      },
      errorList: [],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/usuarios/",
          this.usuario
        );
        console.log(this.usuario);
        console.log(response);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 400) {
            // Poner el código de validación cuando es incorrecto
            this.errorList = err.response.data.errors; // por definir
            console.log(this.errorList);
            // set timeout para quitar el mensaje de error
            setTimeout(() => {
              this.errorList = [];
            }, 6000);
          }
          console.log(err.response.data);
        }
      }
    },
  },
};
</script>

<style scoped>
#div-errors {
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
}
</style>
