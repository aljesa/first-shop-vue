

<template >
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-4">
        <div v-for="(product, index) in data.products" :key="index" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

            <router-link :to="`/item/${product.id}`" class="w-full inline-block h-80">
                <img class="rounded-t-lg w-full h-full object-cover " :src="product.thumbnail" :alt="product.name" />
            </router-link>
            <div class="p-5">
                <router-link :to="'/products/' + product.id">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ product.title }}</h5>
                </router-link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>

                <router-link :to="'/products/' + product.id" class="text-white bg-amber-500 hover:bg-amber-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 mr-2 mb-2">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Post',

    components: {
    },
    computed: {
        // recipes is the name of module, data is the property of the state in the recipes module
        ...mapState('recipes', ['data']),
    },

    created() {
        // recipes is the name of module, fetchData is the method of the actions in the recipes module
        this.$store.dispatch('recipes/fetchData');
    },

}
</script>