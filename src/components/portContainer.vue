<script lang="ts" setup>

const proyectos = [
  { categoria: 'Landing page', titulo: 'Landing page', image: '/images/wow.jpeg'},
  { categoria: 'Eccomerce', titulo: 'Eccomerce', image: '/images/ecco.png'},
  { categoria: 'Portafolio', titulo: 'Portafolio', image: '/images/sam-desarrolloporsamcv.png' },
  { categoria: 'Inmobiliaria', titulo: 'Inmobiliaria', image: '/images/house.png' },
  { categoria: 'Clinica', titulo: 'Clinica', image: '/images/clinit.png'},
];
</script>


<template>
    <section class="bg-gray-50 py-16 px-4 pt-[10vh] h-screen md:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <p class="text-sm font-semibold text-purple-600 bg-purple-100 inline-block px-4 py-1 rounded-full mb-3">
              Nuestro Portafolio
            </p>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Proyectos destacados
            </h2>
            <p class="text-gray-600 max-w-xl">
              Explora nuestra selección de trabajos para diversos clientes y sectores,
              demostrando nuestra experiencia y versatilidad.
            </p>
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(proyecto, i) in proyectos"
            :key="i"
            class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:scale-[1.1]"
          >
            <img :src="proyecto.image" class="h-40"/>
            <div class="p-4">
              <p class="text-sm text-gray-500">{{ proyecto.categoria }}</p>
              <h3 class="text-lg font-semibold text-gray-900">
                {{ proyecto.titulo }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
