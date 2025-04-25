<script lang="ts" setup>

const props = defineProps<{
    title: string,
    subtitle: string
}>()

</script>

<template>
    <div class="mx-auto max-w-screen-md text-center mb-2">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">{{title}}</h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl" v-if="subtitle">{{subtitle}}</p>
    </div>
</template>