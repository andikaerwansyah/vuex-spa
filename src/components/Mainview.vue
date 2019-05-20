<template>
  <div class="mainview">
    <h3>Mainview</h3>
    <div v-if="singleView">
        <h3>Single View</h3>
        <member :member="active_member"></member>
    </div>
    <div v-else>
      <member v-for="member in members" :key="member.id" :member="member"></member>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Member from "./Member";

export default {
  computed: {
    ...mapGetters([
      "active_member",
      "members", 
      "singleView"
      ])
  },
  components: {
    Member,
  }
};
</script>

<style scoped>
.mainview {
  flex: 3;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}
</style>
