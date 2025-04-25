<script setup lang="ts">
import ServicesDetails from '../components/servicesDetails.vue';
import Header from '../layouts/header.vue';

const services = [
    {
        "nombre": "Landing Pages",
        "image": "/images/house.png",
        "descripcion": "Creamos páginas de aterrizaje optimizadas diseñadas para convertir visitantes en clientes potenciales. Nuestras landing pages se desarrollan con un enfoque centrado en el usuario, asegurando:",
        "caracteristicas": [
            {
                "titulo": "Diseño Responsivo",
                "descripcion": "Diseño responsivo y adaptable a cualquier dispositivo.",
                "imagen": "https://universidadeuropea.com/resources/media/images/diseno-responsive-1200x630.original.jpg"
            },
            {
                "titulo": "Optimización SEO",
                "descripcion": "Optimización SEO para mejorar la visibilidad en buscadores.",
                "imagen": "https://dinahosting.com/blog/upload/2021/01/seo-optimizacion.jpg"
            },
            {
                "titulo": "Experiencia de Usuario",
                "descripcion": "Experiencia de usuario excepcional para aumentar conversiones.",
                "imagen": "https://base22.com/wp-content/uploads/2019/10/blogspot_uxcliente_2019.png"
            },
            {
                "titulo": "Rendimiento Óptimo",
                "descripcion": "Carga rápida y estructura eficiente para mejor rendimiento.",
                "imagen": "https://josefacchin.com/wp-content/uploads/2021/12/como-mejorar-rendimiento-sitio-web.png"
            }
        ]
    },
    {
        "nombre": "Páginas Web",
        "image": "/images/ecco.png",
        "descripcion": "Desarrollamos sitios web profesionales y personalizados que reflejan la esencia de tu marca. Nuestros servicios incluyen:",
        "caracteristicas": [
            {
                "titulo": "Diseño Atractivo",
                "descripcion": "Diseño moderno y atractivo alineado con tu identidad corporativa.",
                "imagen": "https://www.nuntiumcomunicacion.com/wp-content/uploads/2016/09/diseno-web-atractivo.jpg"
            },
            {
                "titulo": "Mantenimiento Continuo",
                "descripcion": "Mantenimiento continuo para garantizar el correcto funcionamiento.",
                "imagen": "https://tucandesign.net/wp-content/uploads/2021/05/servicios-de-mantenimiento-para-mi-paginas-web.jpg"
            },
            {
                "titulo": "Actualizaciones de Seguridad",
                "descripcion": "Actualizaciones de seguridad para mantener la integridad del sitio.",
                "imagen": "https://www.comunicare.es/wp-content/uploads/2021/08/consejos-seguridad-web.png"
            },
            {
                "titulo": "Soporte Técnico",
                "descripcion": "Soporte técnico para resolver cualquier inconveniente.",
                "imagen": "https://blog.comparasoftware.com/wp-content/uploads/2020/07/soporte-tecnico-en-linea-768x432.png"
            },
        ]
    },
    {
        "nombre": "Desarrollo a Medida",
        "image": "/images/clinit.png",
        "descripcion": "Desarrollamos aplicaciones web avanzadas adaptadas a las necesidades específicas de tu negocio. Nuestras soluciones incluyen:",
        "caracteristicas": [
            {
                "titulo": "Sistemas ERP",
                "descripcion": "Sistemas ERP para la gestión eficiente de recursos empresariales.",
                "imagen": "https://gestaoclick.com.br/wp-content/uploads/sistema-ERP-online_.webp"
            },
            {
                "titulo": "Plataformas CRM",
                "descripcion": "Plataformas CRM para mejorar la relación con los clientes.",
                "imagen": "https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/Sugar-CRM.png"
            },
            {
                "titulo": "Comercio Electrónico",
                "descripcion": "Comercios electrónicos con funcionalidades avanzadas de ventas.",
                "imagen": "https://www.iebschool.com/blog/wp-content/uploads/2021/09/ebay-1024x557.jpg"
            },
            {
                "titulo": "Aplicaciones Escalables",
                "descripcion": "Aplicaciones web escalables con arquitectura robusta.",
                "imagen": "https://impulso06.com/wp-content/uploads/2023/10/Guia-de-desarrollo-de-aplicaciones-web-de-manera-efectiva.png"
            },
            {
                "titulo": "Tecnologías Modernas",
                "descripcion": "Desarrollo con tecnologías modernas y optimización de rendimiento.",
                "imagen": "https://pontia.tech/wp-content/uploads/2023/05/A0CG0002140-1-1.jpg"
            }
        ]
    }
];



</script>

<template>
<Header/>
    <main class="w-full md:w-[90%] mx-auto py-12 px-6 mt-[8vh]">
        <ServicesDetails :section="service" v-for="service in services"/>
    </main>

</template>