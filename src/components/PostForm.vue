<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="body" v-model="body" />
    <button type="submit">Create post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      if (this.title && this.body) {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now(),
        });
        this.title = this.body = "";
      }
    },
  },
};
</script>

<style>
input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
