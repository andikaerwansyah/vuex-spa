<template>
  <div class="sidebar">
    <h3>Sidebar</h3>
    <member v-for="member in members" :key="member.id" :member="member" @click.native.prevent="showMember(member)"></member>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Member from "./Member"
 
export default {
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  components: {
    Member
  },
  methods: {
    ...mapActions([
      'showMember'
    ])
  }
}
</script>
<style scoped>
.sidebar {
  flex: 1;
  background-color: grey;
}

</style>
