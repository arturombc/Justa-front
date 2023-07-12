<template>
  <nav
    id="navScroll"
    class="navbar navbar-expand-lg navbar-light fixed-top"
    tabindex="0"
  >
    <div class="container">
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

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#services"
              aria-label="Brings you to the frontpage"
            >
              Servicios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#aboutus"> Sobre Nosotros </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#numbers"> Cifras </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery"> Galería </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#workwithus"> Trabaja con nosotros </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials"> Testimonios </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/abogados-registrar"> Queries </a>
          </li>
        </ul>
        <a
          href="/register"
          data-splitbee-event="Click Download"
          aria-label="Registrate"
          class="link-dark pb-1 link-fancy me-2"
        >
          Regístrate
        </a>
        <a
          href="/login"
          data-splitbee-event="Click Download"
          aria-label="IniciarSesion"
          class="link-dark pb-1 link-fancy me-2"
        >
          Iniciar Sesión
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>
