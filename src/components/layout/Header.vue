<script>

export default {
    name: 'Header',
}
</script>

<template>
    <header>
        <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true">
        <nav class="fixed z-20 top-0 w-full bg-slate-50/90 backdrop-blur navbar peer-checked:navbar-active">
            <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
                <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                    <div class="w-full items-center flex justify-between lg:w-auto">
                        <a class="relative z-10 font-bold text-2xl" href="/" aria-label="logo">
                            ALJESA HOXHA
                        </a>
                        <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                            <div aria-hidden="true" class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                        </label>
                    </div>
                    <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                        <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                            <ul class="space-y-6 tracking-wide font-bold text-lg  lg:flex lg:space-y-0 text-gray-900">
                                <li>
                                    <router-link to="/" class="block md:px-4">Home</router-link>
                                </li>
                                <li>
                                    <router-link to="/products" class="block md:px-4">Products</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
