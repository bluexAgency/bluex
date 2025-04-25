<script setup lang="ts">
const props = defineProps<{
    section: any,
}>()
</script>

<template>
    <section class="mb-12">
        <div class="grid place-items-center grid-cols-1 gap-5 md:grid-cols-2">
            <img :src="section.image" class="rounded-2xl" />
            <div>
                <h2 class="text-3xl font-semibold text-[#1EAEDB] mb-4">{{ section.nombre }}</h2>
                <p class="text-lg text-gray-700">{{ section.descripcion }}</p>
            </div>
        </div>

        <div class="flex gap-5 mt-20">
            <div class="relative image-full w-96 shadow-sm rounded-2xl overflow-hidden aspect-video" v-for="(service, i) in section.caracteristicas">
                <img :src="service.imagen" alt="image" class="h-full w-full object-cover"/>
                <div class="absolute inset-0 bg-black/70 grid place-items-center text-white text-center">
                    <div>
                        <h2 class="font-bold text-2xl mb-5">{{ service.titulo }}</h2>
                        <p class="text-md">{{ service.descripcion }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>