<template>
  <div class="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="row gx-5 d-flex">
            <div class="col-md-11">
              <div
                class="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
                data-aos="fade-right"
                style="
                  background-image: url(/frontend/img/webp/people15.webp);
                  --bs-aspect-ratio: 50%;
                "
              ></div>
            </div>
            <div class="col-md-5 offset-md-1">
              <div
                class="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
                data-aos="fade-up"
                style="
                  background-image: url(/frontend/img/webp/interior42.webp);
                "
              ></div>
            </div>
            <div class="col-md-6">
              <div
                class="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
                data-aos="fade-left"
                style="
                  background-image: url(/frontend/img/webp/people4.webp);
                  --bs-aspect-ratio: 150%;
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h3 class="py-5 border-top border-dark" data-aos="fade-left">
            En Justa, estamos revolucionando la forma en que los abogados
            trabajan
          </h3>
          <p data-aos="fade-left" data-aos-delay="200">
            Nuestro software impulsado por inteligencia artificial está
            transformando la eficiencia y la precisión en el trabajo legal,
            permitiéndote destacar entre la competencia.
          </p>
          <p>
            <a
              href="#"
              class="link-fancy link-dark"
              data-aos="fade-left"
              data-aos-delay="400"
              >Saber más
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
