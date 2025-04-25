<script setup lang="ts">
import CardNosotros from '../components/cardNosotros.vue';
import CardPrice from '../components/cardPrice.vue';
import CardServices from '../components/cardServices.vue';
import HeaderSections from '../components/headerSections.vue';
import PortContainer from '../components/portContainer.vue';
import Proceso from '../components/proceso.vue';
import SectionHome from '../components/sectionHome.vue';
import Header from '../layouts/header.vue';
import { planes } from '../utils/constantes';

</script>

<template>

<Header/>

    <main>
        <!--section class="w-full grid place-items-center text-center relative bg-grid h-screen">
            <div class="text-4xl font-bold text-white md:text-7xl 2xl:text-8xl">
                <h1 class="text-black">Transformamos ideas en</h1>
                <h2 class="text-companie">realidad digital</h2>
                <p class="text-[#a0a0a0] font-bold w-[80%] mx-auto my-5 text-xl md:text-xl 2xl:text-xl">Creamos soluciones web innovadoras y personalizadas que transforman la visión de tu negocio en experiencias digitales extraordinarias.</p>
            
            <div class="flex gap-4 items-center justify-center text-2xl w-full">
                <a href="#" class="block py-5 px-6 text-white rounded-2xl bg-companie border-[1px] transition-all hover-text-companie hover:border-[#1EAEDB] hover:bg-transparent">Conocer más</a>
                <a href="#" class="block py-5 px-6 text-companie rounded-2xl border-[1px] border-[#1EAEDB] transition-all hover:bg-[#1EAEDB] hover:text-white">Contacto</a>
            </div>
            </div>
        </section-->
        
        <SectionHome/>

        <section id="about" class="bg-[#fcfbfb] pt-20 pb-10 border-[1px] border-t-[#e2e2e2] py-5">
            <HeaderSections title="¿Quiénes Somos?" subtitle="En Bluex, combinamos creatividad y tecnología de vanguardia para crear experiencias digitales que transforman negocios y cautivan usuarios"/>
            <div class="pt-10 mb-10 mx-auto 2xl:max-w-[70%]">
                <CardNosotros text="Nuestra Empresa" icon="building" :invert="false" data-aos="fade-right" description="Bluex es una empresa líder en desarrollo web que combina innovación tecnológica con diseño creativo para crear soluciones digitales excepcionales. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente."/>
                <CardNosotros text="Nuestra Misión" icon="bullseye" :invert="true" data-aos="fade-left" description="Transformar ideas en soluciones digitales innovadoras que impulsen el éxito de nuestros clientes. Nos dedicamos a crear experiencias web únicas que generan valor real y resultados medibles para cada proyecto."/>
                <CardNosotros text="Nuestra Visión" icon="lightbulb" :invert="false" data-aos="fade-right" description="Ser reconocidos como líderes en la industria del desarrollo web, destacando por nuestra innovación, calidad y compromiso con la excelencia. Aspiramos a transformar el panorama digital a través de soluciones tecnológicas vanguardistas."/>
                <CardNosotros text="Nuestro Equipo" icon="users" :invert="true" data-aos="fade-left" description="Contamos con un equipo multidisciplinario de desarrolladores, diseñadores y consultores apasionados por la tecnología. Cada miembro aporta su experiencia única para crear soluciones web que superan las expectativas."/>
            
            </div>
        </section>

        <section id="services" class="pt-20 pb-10 border-[1px] border-t-[#e2e2e2] py-5">
           <HeaderSections title="Nuestros Servicios" subtitle="Ofrecemos soluciones digitales completas para impulsar tu presencia en línea y potenciar el crecimiento de tu negocio"/>
            <div class="pt-10 my-10 flex flex-wrap justify-center gap-4 items-center">
                <CardServices text="Landing Pages" icon="table-cells-large" image="https://venngage-wordpress-es.s3.amazonaws.com/uploads/2023/09/Ejemplos-de-paginas-de-destino.png" description="Creamos páginas de aterrizaje optimizadas que convierten visitantes en clientes. Diseño responsivo, optimización SEO y experiencia de usuario excepcional para maximizar las conversiones."/>
                <CardServices text="Páginas Web" icon="laptop-code" image="https://www.conmasfuturo.com/wp-content/uploads/2014/03/objetivos-paginas-web-antoniosanjuan.jpg" description="Desarrollamos sitios web profesionales que representan tu marca de manera única. Incluimos mantenimiento continuo, actualizaciones de seguridad y soporte técnico."/>
                <CardServices text="Desarrollo a medida" icon="database" image="https://concepto.de/wp-content/uploads/2018/02/sistemas-de-informacion.jpg" description="Creamos aplicaciones web complejas y personalizadas que impulsan tu negocio. Nuestras soluciones incluyen sistemas ERP, CRM y plataformas de comercio electrónico."/>
            </div>
            
            <router-link to="/services" class="bounce-top p-6 py-4 bg-[#1EAEDB] text-white mx-auto block rounded-2xl transition-all text-center w-[80%] md:w-[200px] hover:scale-[1.2]">Ver</router-link>
        </section>
        <section id="process" class="relative border-[1px]">
                <router-link to="/portafolio"
                class="absolute top-5 right-5 inline-flex items-center px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                >
                    Ver todos los proyectos
                    <span class="ml-2">→</span>
                </router-link>
            <PortContainer/>
        </section>
        <section id="process" class="border-[1px]">
            <Proceso/>
        </section>

        <section id="prices" class="bg-[#fcfbfb] pt-20 pb-10 border-[1px] border-t-[#e2e2e2] py-5">
            <HeaderSections title="Planes y Precios" subtitle="En Bluex, ofrecemos los mejores planes y precios adaptados a tus necesidades"/>

            <div class="grid grid-cols-1 items-center justify-center gap-5 mx-auto md:w-[90%] 2xl:w-[60%] md:grid-cols-3">
                <CardPrice :title="plan.title" :subtitle="plan.subtitle" :price="plan.price" :beneficts="plan.benefits" v-for="plan in planes"/>
            </div>
        </section>
    </main>
</template>

<style scoped>
.bounce-top {
	-webkit-animation: bounce-top 2s both infinite alternate-reverse;
	        animation: bounce-top 2s both infinite alternate-reverse;
}
 @-webkit-keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}

</style>