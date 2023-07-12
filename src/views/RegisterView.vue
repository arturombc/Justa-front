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
                    v-model="nombre_empresa"
                  />
                </div>
                <div class="mb-3">
                  <label for="ruc" class="form-label">RUC</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="ruc"
                    v-model="ruc"
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
                    v-model="nombre"
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
                    v-model="apellido"
                  />
                </div>
                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input
                    type="tel"
                    class="form-control form-control-lg"
                    id="telefono"
                    v-model="telefono"
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
                    v-model="correo"
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
                    v-model="username"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="password"
                    v-model="password"
                  />
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
      nombre_empresa: "",
      ruc: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://127.0.0.1:5000/usuarios", {
          nombre_empresa: "Nombre de la empresa",
          ruc: "1234567890",
          nombre: "Nombre de la persona",
          apellido: "Apellido de la persona",
          telefono: "123456789",
          correo: "ejemplo@empresa.com",
          username: "aasdasd",
          password: "asd",
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async login() {
      try {
        const response = await axios.post("http://127.0.0.1:5000/sessiones", {
          username: this.username,
          password: this.password,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
        // Aquí puedes manejar los errores, como mostrar un mensaje de error al usuario.
      }
    },
  },
};
</script>
