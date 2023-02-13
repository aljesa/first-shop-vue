<template>
    <button v-if="btnType === 'button'" :class="classes" @click="handleClick" :type="type">
        {{ text }}
    </button>

    <a v-else :href="href" @click="handleClick" :class="classes">
        {{ text }}
    </a>

</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            required: true
        },
        btnClasses: {
            type: String,
            default: 'text-white bg-amber-500 hover:bg-amber-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 mr-2 mb-2'
        },
        btnType: {
            type: String,
        },
        type: {
            type: String,
            default: 'submit'
        },
        href: {
            type: String,
            default: '#'
        }
    },
    computed: {
        classes() {
            return [`${this.btnClasses}`];
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
};
</script>