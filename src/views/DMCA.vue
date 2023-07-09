<template>
  <div class="dmca"></div>
</template>

<script>
  export default {
    name: "DMCA",

    mounted() {
      window.open('https://www.youtube.com/embed/izMn-8fQwbE?autoplay=1', '_blank');
      this.$router.push({ name: 'home' });
    }
  }
</script>