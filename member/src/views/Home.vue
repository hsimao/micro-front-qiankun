<template>
  <div class="aboutpage home">
    <h1 class="title">Sub App Vue Member</h1>
    <p>containerState</p>
    <pre>{{ getContainerState }}</pre>

    <button @click="handleAdd">count++</button>
    <label for="">
      name:
      <input
        v-if="getContainerState"
        type="text"
        :value="getContainerState.name"
        @input="handleChangeGlobalStateName"
      />
    </label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getContainerState"])
  },
  methods: {
    handleAdd() {
      const currentCount = this.getContainerState?.count;
      this.$store.setGlobalState({ count: currentCount + 1 });
    },
    handleChangeGlobalStateName(event) {
      this.$store.setGlobalState({ name: event.target.value });
    }
  }
};
</script>
