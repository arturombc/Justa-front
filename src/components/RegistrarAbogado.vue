<template>
  <section
    class="main__item"
    id="form-abogado"
    style="width: 50%;display:{{regitro_abogado}};"
  >
    <h1 style="display: flex; justify-content: center">Registre un abogado</h1>
    <br />
    <form action="/abogado/registrar" id="create-lawer" method="post">
      <input type="hidden" name="empresa_id" value="{{session.empresa_id}}" />
      <label for="nombre">
        <span>Nombre:</span>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          autocomplete="given-name"
          required
        />
      </label>
      <label for="apellido">
        <span>Apellido:</span>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          autocomplete="family-name"
          required
        />
      </label>
      <label for="telefono">
        <span>Teléfono:</span>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
          required
        />
      </label>
      <label for="email">
        <span>Email:</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autocomplete="email"
          required
        />
      </label>
      <label for="codigoabogado">
        <span>Codigo Abogado:</span>
        <input
          type="text"
          id="codigoabogado"
          name="codigo_abogado"
          placeholder="codigo_abogado"
          autocomplete="codigo_abogado"
          required
        />
      </label>
      <label for="username">
        <span>Username:</span>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          required
        />
      </label>
      <label for="password">
        <label class="label">password*</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          required
        />
      </label>

      <label for="departamentos">
        <span>Departamento:</span>
        <select name="departamento" id="departamentos">
          {% for d in departamentos %}
          <option value="{{d.id}}">{{ d.nombre }}</option>
          {% endfor %}
        </select>
      </label>
      <button type="submit">Registrar Abogado</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "RegistrarAbogado",
  data() {
    return {
      regitro_abogado: "none",
    };
  },
  methods: {
    mostrar: function () {
      this.regitro_abogado = "flex";
    },
  },
};
</script>

<style scoped></style>
