<template>
  <div class="position-relative overflow-hidden w-100 bg-light" id="gallery">
    <div class="container-fluid">
      <div class="row overflow-scroll">
        <div class="col-12">
          <div
            class="row vw-100 px-0 py-vh-5 d-flex align-items-center scrollx"
          >
            <div class="col-md-3" data-aos="fade-up">
              <img
                src="@/assets/abogados1.webp"
                class="rounded shadow img-fluid"
                alt="nice gallery image"
                width="512"
                height="341"
              />
            </div>

            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <img
                src="@/assets/abogados3.webp"
                class="img-fluid rounded shadow"
                alt="nice gallery image"
                width="1164"
                height="776"
              />
            </div>

            <div class="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <img
                src="@/assets/abogados2.webp"
                class="img-fluid rounded shadow"
                alt="nice gallery image"
                width="844"
                height="1054"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheGallery",
};
</script>
