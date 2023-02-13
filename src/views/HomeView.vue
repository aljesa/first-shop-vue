<template>
  <main>
    <div class="xl:container m-auto px-6 md:px-12 lg:px-6 my-20">
      <!-- <div class="mb-10">
        <form @submit.prevent="search">
          <input type="text" v-model="searchTerm" placeholder="Search products" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="mt-20">
        <div class="grid grid-cols-2">
          <h2 class="font-bold xl:text-3xl lg:text-lg md:text-md sm:text-sm mb-10">A list of our most popular products...</h2>
          <div class="text-end">
            <Button text="Explore Products" href="/products" />
          </div>
        </div>

      </div> -->

      <Item />

    </div>
  </main>
</template>
<script>
import Button from '../components/reusable/Button.vue';
import Item from '../components/posts/Item.vue';
export default {
  components: {
    Button,
    Item
  },
  methods: {

  }
};
</script>
