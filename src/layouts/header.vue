<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isScrolled = ref(false);
const isHome = ref(false);
const isVisible = ref(true);

const headerClass = computed(() => {
    if (isHome.value) return isScrolled.value ? 'bg-white shadow-xl text-companie' : 'text-white';
    else return 'bg-white shadow-xl text-companie'
});

const handleScroll = () => {
    isScrolled.value = window.scrollY > 500;
    isVisible.value = window.scrollY < window.innerHeight;
};

onMounted(() => {
    isHome.value = location.pathname == '/'
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <header :class="headerClass"
        class="flex h-[10vh] w-full fixed top-0 z-[1000] transition-all justify-between items-center gap-10 px-4 2xl:h-[8vh]">

        <router-link to="/" class="h-[70%] md:h-full p-2">
            <img src="/logo.png" class="h-full" alt="logo bluex">
        </router-link>


        <nav class="gap-4 hidden md:flex">
            <router-link to="/services"
                class="block text-xl cursor-pointer hover-text-companie">Servicios</router-link>
            <router-link to="/portafolio"
                class="block text-xl cursor-pointer hover-text-companie">Portafolio</router-link>
            <router-link to="/#about" class="block text-xl cursor-pointer hover-text-companie">Nosotros</router-link>
            <router-link to="/#prices" class="block text-xl cursor-pointer hover-text-companie">Planes y precios</router-link>

        </nav>


        <button @click="toggleMenu" class="text-companie hover-text-companie md:hidden focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <div class="fixed inset-0 text-companie bg-white transition-all grid place-items-center" v-if="isMenuOpen">
            <p class="fixed top-3 right-5 text-4xl cursor-pointer" @click="toggleMenu">x</p>
            <nav class="gap-4 block text-center">
                <router-link to="/services"
                    class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie">Servicios</router-link>
                <router-link to="/portafolio"
                    class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie">Portafolio</router-link>
                <router-link to="/#about" class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie">Nosotros</router-link>
                <router-link to="/#prices" class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie">Planes y precios</router-link>
            </nav>
        </div>
    </header>
</template>