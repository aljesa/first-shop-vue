<template>
  <div class="xl:container m-auto px-6 md:px-12 lg:px-6 pt-36">
    <div class="flex">
      <div class="w-1/4">
        <h4 class="font-bold mb-3 uppercase">Categories:</h4>
        <ul class="list-disc ml-5">
          <li v-for="item in categories" :key="item.id">
            <a href="#" @click="filterData(item)">{{ formatName(item) }}</a>
            <v-icon name="beer" />
          </li>
        </ul>
      </div>
      <div class="">
        <Item :aljesa="filterData" />
      </div>

    </div>
  </div>
</template>
<script>
import Item from '../components/posts/Item.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Item },

  computed: {
    ...mapGetters({
      data: 'items/getData',
      categories: 'items/getCategoriesData',
    })
  },
  created() {
    this.$store.dispatch('items/fetchData', 50);
    this.$store.dispatch('items/fetchCategories');
  },
  methods: {
    formatName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    filterData(category) {
      this.selectedCategory = category;
    }
  }



}
</script>

