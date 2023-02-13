<template >
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-4 mb-20">
        <div v-for="product in data.products" :key="product.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <router-link :to="`/item/${product.id}`" class="w-full inline-block h-80">
                <img class="rounded-t-lg w-full h-full object-cover " :src="product.thumbnail" :alt="product.name" />
            </router-link>
            <div class="p-5">
                <router-link :to="'/products/' + product.id">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ product.title }}</h5>
                </router-link>
                <p class="mb-3 font-base text-gray-700 dark:text-gray-400">{{ product.description }}</p>

                <router-link :to="`/item/${product.id}`" class="text-white bg-amber-500 hover:bg-amber-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 mr-2 mb-2">
                    Read more
                </router-link>
            </div>
        </div>
    </div>
</template>



<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Item',

    computed: {
        ...mapGetters({
            data: 'items/getData'
        })
    },

    created() {
        this.$store.dispatch('items/fetchData')
    }
}
</script>