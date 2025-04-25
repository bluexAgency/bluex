<script lang="ts" setup>
const pasos = [
    {
        titulo: 'Planificación',
        descripcion: 'Analizamos tus necesidades y definimos los objetivos del proyecto.',
    },
    {
        titulo: 'Diseño',
        descripcion: 'Creamos bocetos y prototipos visuales personalizados para tu aprobación.',
    },
    {
        titulo: 'Desarrollo',
        descripcion: 'Implementamos la web con código limpio y optimizado para un rendimiento óptimo.',
    },
    {
        titulo: 'Pruebas',
        descripcion: 'Realizamos pruebas exhaustivas para garantizar que todo funcione perfectamente.',
    },
    {
        titulo: 'Lanzamiento',
        descripcion: 'Publicamos tu sitio web y lo configuramos en los motores de búsqueda.',
    },
    {
        titulo: 'Soporte',
        descripcion: 'Te brindamos soporte continuo para mantener tu web actualizada y segura.',
    },
];
</script>

<template>
    <section class="py-16 px-4 md:px-12 bg-white text-center">
        <div class="max-w-6xl mx-auto">
            <p class="text-sm font-semibold text-companie bg-gray-100 inline-block px-4 py-1 rounded-full mb-4">
                Nuestro Proceso
            </p>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Metodología simple y efectiva
            </h2>
            <p class="text-gray-600 mb-10">
                Seguimos un proceso estructurado y transparente para asegurar que tu proyecto se desarrolle
                exitosamente, desde la concepción hasta el lanzamiento.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(paso, i) in pasos" :key="i"
                    class="bg-white grid shadow-sm border border-gray-100 p-6 rounded-xl h-[200px] text-left">
                    <div class="flex items-center mb-2">
                        <div
                            class="bg-purple-100 text-companie font-bold w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                            {{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }} </div>
                                <h3 class="text-lg font-semibold text-gray-900">{{ paso.titulo }}</h3>
                        </div>
                        <p class="text-gray-600 text-sm">{{ paso.descripcion }}</p>
                    </div>
                </div>
            </div>
    </section>
</template>