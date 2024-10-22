<script setup lang="ts">
import Footerr from './components/footer.vue';
</script>

<template>
  <NuxtLayout>
  <v-app class="custom-bg">
     <headertab></headertab>
     
    <NuxtRouteAnnouncer />
   
    
      <NuxtPage />
     <Footer></Footer>
    </v-app>
 
 </NuxtLayout>
</template>
<style scoped>
.custom-bg{background-color: rgba(200, 200, 200, 0.1);
min-height: 100vh;
}
.custom-font{font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;}
</style>
