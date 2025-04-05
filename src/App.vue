<template>
  <div>
    <h1>{{ $t('greeting') }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("header.home translation: ", this.$t('header.home'));
  }
};
</script>