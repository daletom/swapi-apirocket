<template>
  <div :posts="posts">
    <div class="posts__container flex flex-wrap" v-if="posts.length > 0">
      <div class="post xs:w-full md:w-1/3 px-2 xs:mb-6 md:mb-12" v-for="post in posts" :key="post.id">
        <p>
          <span class="paragraph__title">Title</span>
          : {{ post.title }}
        </p>
      </div>
    </div>
    <div class="posts__container" v-else>
      <div class="empty__report">
        <h5>You have no posts yet</h5>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/post.id">View Episode Info</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  data () {
    return {
      id: this.$route.params.id,
      posts: []
    }
  },
  methods: {
    async getPosts() {
	  let res = await this.$store.dispatch('getPosts')
	  this.posts = res;
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
