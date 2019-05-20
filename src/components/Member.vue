<template>
  <div class="members">
      <h3>{{ member.name }} - {{ member.point }}</h3>
      <img :src="member.img" width="200">
    </div>
</template>

<script>
export default {
  props: [
    'member'
  ]
}
</script>

<style>

.sidebar img {
  width: 100px;
  border-radius: 50%;
}
</style>
