<script lang="ts" setup>
import PortContainer from '../components/portContainer.vue';
import Header from '../layouts/header.vue';

const proyectos = [
  { categoria: 'Landing page', titulo: 'Landing page', image: '/images/wow.jpeg'},
  { categoria: 'Eccomerce', titulo: 'Eccomerce', image: '/images/ecco.png'},
  { categoria: 'Portafolio', titulo: 'Portafolio', image: '/images/sam-desarrolloporsamcv.png' },
  { categoria: 'Inmobiliaria', titulo: 'Inmobiliaria', image: '/images/house.png' },
  { categoria: 'Clinica', titulo: 'Clinica', image: '/images/clinit.png'},
];
</script>


<template>
<Header/>
<PortContainer/>
</template>
