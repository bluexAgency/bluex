<script lang="ts" setup>
const props = defineProps<{
    title: string,
    subtitle: string,
    price: string,
    beneficts: string[]
}>()
</script>

<template>
    <div
        class="flex flex-col pb-6 justify-between mx-auto w-full h-full text-center text-gray-900 bg-white border border-[#1EAEDB] rounded-2xl overflow-hidden shadow">
        <div class="h-[30px] w-full mb-4 bg-companie">

        </div>

        <div class="px-6">
            <h3 class="mb-4 text-2xl font-semibold">{{ title }}</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400" v-if="subtitle">{{ subtitle }}</p>
            <div class="flex justify-center items-baseline my-8">
                <span class="text-gray-500 dark:text-gray-400 mr-2">desde/</span>
                <span class="text-5xl font-extrabold text-companie">${{ price }}</span>
            </div>
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3" v-for="benefict in beneficts">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>{{ benefict }}</span>
                </li>
            </ul>
        </div>
        <!--a href="#" class="bg-companie text-white bg-primary-600 w-[80%] mx-auto p-3 rounded-2xl">Ver más planes</a-->
    </div>
</template>