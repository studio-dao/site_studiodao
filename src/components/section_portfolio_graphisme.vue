<template>
  <div class="section_portfolio">
    <div class="slider">
      <img src="#" alt="" />
      <div class="description_slider">
        <p class="description_image"></p>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "section_portfolio_graphisme",
};
</script>

<!-- STYLE -->
<style>
.section_portfolio {
  left: 0px;
  right: 0px;
  border-top: 2px solid rgb(11,202,203);
}
.slider {
  display: flex;
  flex-direction: column;
}
.description_image {
  text-align: left;
}

</style>
