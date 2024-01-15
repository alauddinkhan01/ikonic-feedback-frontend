<script setup>
import { ref } from "vue";
import Navbar from "../Layouts/Navbar.vue";

let userToken = JSON.parse(localStorage.getItem("user-token"));

defineProps({
  msg: String,
});
</script>

<template>
  <!-- <div
    class="fixed inset-0 z-[-10] object-cover w-full h-screen"
    style="
      background-image: url('');
      background: cover;
    "
  ></div>
  <div>
    <Navbar/>

  </div> -->
  <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <router-link to="/" class="flex items-center">
                    <img src="/src/assets/images/ikonic.jpeg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ikonic</span>
                </router-link>
                <div class="flex items-center lg:order-2">
                    <router-link v-if="userToken == null || userToken == undefined" to="/login" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none  border">Login</router-link>
                    <router-link v-if="userToken == null || userToken == undefined" to="/register" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none  border">Register</router-link>
                    <router-link v-if="userToken != null && userToken != undefined" to="/dashboard" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none  border">Dashboard</router-link>
                    
                    
                </div>
                
            </div>
        </nav>
    </header>

    <section class="bg-white dark:bg-gray-900">
        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="place-self-center mr-auto lg:col-span-7">
                <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Welcom to Ikonic Feedback System</h1>
                <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to Ikonic Feedback System! Register now for exclusive benefits and have your opinions shape our services. Your feedback matters, and as a member, you'll enjoy personalized insights and special programs. Join us in enhancing the Ikonic experience together!</p>
                <router-link to="/register" class="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                <router-link to="/register" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700  ">
                    Get Started
                </router-link> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex h-[415px] w-full">
                <img src="/src/assets/images/html.avif" alt="mockup">
            </div>                
        </div>
    </section>

  <router-view/>
  <!-- </div> -->
</template>

<script>

</script>

<style lang="sss" scoped>

</style>
