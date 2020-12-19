<template>
  <div>
    <div class="posts__container" v-if="posts.length > 0">
      <div class="post" v-for="post in posts" :key="post.id">
        <div class="image">
          <img
            src="{{post.poster}}"
            class="post__image"
            :alt="post.title"
          />
        </div>
        <p>
          <span class="paragraph__title">Title</span>
          : {{ post.title }}
        </p>
        <p>
          <span class="paragraph__title">Episode ID</span>
          : {{ post.episodeId }}
        </p>
        <p>
          <span class="paragraph__title">Date</span>
          : {{ post.releaseDate }}
        </p>
        <p>
          <span class="paragraph__title">Director</span>
          : {{ post.director }}
        </p>
        <p>
          <span class="paragraph__title">Producer(s)</span>
          : {{ post.producer }}
        </p>
      </div>
    </div>
    <div class="posts__container" v-else>
      <div class="empty__report">
        <h5>You have no posts yet</h5>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/{{ post.id  }}">View Episode Info</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-card",
  props: {
    incidents: Array
  },
  methods: {
    emitEvent(post) {
      this.$emit("deletePost", post);
    }
  }
};
</script>

<style></style>