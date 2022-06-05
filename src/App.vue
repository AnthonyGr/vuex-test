<template>
  <div class="post" v-for="post in allPosts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <h3>Posts count: {{ postsCount }}</h3>
  <PostForm />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm";

export default {
  name: "App",
  computed: mapGetters(["allPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  components: { PostForm },
  async mounted() {
    this.fetchPosts(4);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
