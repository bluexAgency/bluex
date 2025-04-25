<script lang="ts" setup>
const props = defineProps<{
    text: string,
    icon: string,
    description: string,
    invert: boolean
}>()
</script>

<template>
    <article :class="[
    'px-10 text-black gap-20 my-10 w-full items-center justify-between text-center md:h-[200px] md:flex md:px-32', 
    invert ? 'flex-row-reverse' : '']
    ">
        <div class="shadow-xl rounded-full flex items-center justify-center text-center mx-auto w-[30%] h-[50%] p-10 md:p-0  md:w-[15%]">
            <font-awesome-icon :icon="icon" class="text-companie h-[50%]"/>
        </div>
        <div class="w-full shadow-xl p-10 text-left text-[#191919] rounded-2xl md:w-[80%]">
            <h3 class="text-xl font-bold ml-10 md:text-3xl 2xl:text-4xl">{{ text }}</h3>
            <p class="my-4 font-normal text-md text-gray-600">{{ description }}</p>
        </div>
    </article>
</template>