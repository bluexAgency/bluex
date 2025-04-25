<script lang="ts" setup>
const props = defineProps<{
    text: string,
    icon: string,
    description?: string,
}>()
</script>

<template>
    <article class="shadow-xl bg-white h-[300px] w-[400px] rounded-3xl text-center transition-all hover:-translate-y-[20%]">
        <font-awesome-icon :icon="icon" class="text-white p-4 rounded-full bg-companie shadow-xl h-[6%] scale-[1.3] my-[5%] -translate-y-[50%]"/>
        <h5 class="text-xl font-bold px-5 md:text-2xl">{{ text }}</h5>
        <p class="font-normal text-md px-5 mt-5" v-if="description">{{ description }}</p>
    </article>
</template>