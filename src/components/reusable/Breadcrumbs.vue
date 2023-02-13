<template>
    <div class="breadcrumbs bg-red mt-20">
        <template v-for="(breadcrumb, index) in breadcrumbs">
            <router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
            <template v-if="index + 1 < breadcrumbs.length"> / </template>
        </template>
    </div>
</template>

<script>
export default {
    computed: {
        breadcrumbs() {
            return this.$route.matched
                .filter(route => route.name)
                .map(route => {
                    return {
                        name: route.meta.breadcrumb || route.name,
                        path: route.path
                    };
                });
        }
    }
};
</script>

<style>
.breadcrumbs {
    font-size: 14px;
    font-weight: 600;
    color: #000;
}
</style>