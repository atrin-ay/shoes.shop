<template >
    <v-hover v-slot="{ isHovering, props }" style="width: 300px;" >
<v-card 
  style="background-color: rgb(255, 253, 253);"
  class="mx-2  custom-cart "
  color="grey-lighten-4"
  max-width="600"
  v-bind="props"
>

  <v-img
    :aspect-ratio="16/9"
    :src="image"
    :height="size"
    
  >
    <v-expand-transition>
      <div
        v-if="isHovering"
        class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal text-h3"
        style="height: 100%;font-size: small;"
              >
     {{price}} 
      </div>
    </v-expand-transition>
  </v-img>
      <v-card-title justify="center" align="center">{{ name }}</v-card-title>
    
   
  </v-card>
  </v-hover>
</template>

<script setup>
const props =defineProps(
   {
    name:{type:String,requir:true},
    price:{type:String,requir:true},
    image:{type:String,requir:true},
    size:{type:String,requir:true},
   
   })
   
   </script>
<style scoped>
.custom-cart{box-shadow: none;
border: none;
background-color: rgb(255, 253, 253)  ;
}
</style>