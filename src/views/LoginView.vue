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
            <br />
            <h1>Iniciar Sesion</h1>
            <br />
            <br />
            <form class="row" @submit.prevent="login">
              <div class="col-12 col-lg-10 col-xl-8">
                <div class="mb-3">
                  <label for="username" class="form-label"
                    >Nombre de usuario</label
                  >
                  <input
                    type="username"
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
                <br />
                <br />
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
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {

    login() {
      const hardcodedCreds = {
        username: "prueba",
        password: "12345",
      };
      console.log(this.username);
      console.log(this.password);
      if (
        this.username == hardcodedCreds.username &&
        this.password == hardcodedCreds.password
      ) {
        alert("Inicio de sesión exitoso!");
        // Aquí puedes redirigir a tu usuario a la página principal o realizar cualquier acción necesaria.
        this.$router.push("/crud");
      } else {
        alert("Error en las credenciales");
        // Aquí puedes manejar los errores de inicio de sesión, como mostrar un mensaje de error al usuario.
      }
    },
  },
};
</script>
