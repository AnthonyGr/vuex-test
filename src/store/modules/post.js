export default {
  actions: {
    //В экшенах первый параметр всегда context
    //который можно деструктурировать
    async fetchPosts({ commit, getters, dispatch }, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();

      //Деструктуризация контекста
      //content = {commit, getters, dispatch}
      //Если нужно вызвать еще экшен
      //context.dispatch("testAction", context);
      commit("updatePosts", posts);
    },
    testAction(ctx) {
      //test
      console.log(ctx);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state) {
      return state.posts.length;
    },
  },
};
