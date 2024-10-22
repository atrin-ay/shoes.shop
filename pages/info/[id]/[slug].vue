
<template>
     <v-app>
    
        <v-contaner class="my-5 mx-9">
          <v-row>
            <v-col cols="12" md="6">
              <v-contaner  class="mt-5 pt-5 name mx-3 custom-font w-50">
                <h2 style="font-family: Arial, Helvetica, sans-serif;" class="d-flex justify-end mt-7 mb-2  " justify="left" align="left" > {{product.name }}</h2>
             
              <div>
                <h3 class="d-flex justify-end mt-2 mb-0">: توضیحات</h3>
                <p style="font-size:large" class="d-flex text-end my-1 ml-8 ">{{ product.short_description }}</p>
                <div class="d-flex justify-end my-2" justify="center" align="center"><h2>تومان</h2>
                  <h2 style="font-family: Arial, Helvetica, sans-serif;"> {{newprice(product.price)}}</h2></div> 
                <h3 class="d-flex justify-end text-green"> موجود در انبار</h3>
             <!-- <h3 class="d-flex justify-end color-red-light d-none"> ناموجود  </h3> -->
              </div> 
   
              <v-container class="my-0 py-0 pt-2">
              <h4 class="d-flex justify-end "> انتخاب سایز</h4>
              <div class="d-flex justify-space-betwin my-0 pr-0 end py-0">
            
                <v-chip-group
                
                v-model= size
                selected-class="text-deep-purple-accent-4"
                mandatory
                 >
               <v-chip
               style=" font-size: larger;"
               color="blue"
                v-for="size in product.features"
               :key="size"
               :text="size.feature_value"
              :value="size.feature_value"
               variant="outlined"
              ></v-chip>
      </v-chip-group>
    </div > 
  </v-container>  

  <div class="pa-1 custom-font d-flex ">
         
  <v-container class="d-flex mt-0 pa-0 mx-2 justify-end ">
    <v-card class="text-center pa-4 rounded-lg h-10" >
      <v-row align="center" justify="center">
        <v-col cols="auto py-0">
          <v-btn class="custom-btn " @click="count--" v-if="count>1 " icon >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto py-0 my-0">
          <div class="counter ">{{ count }}</div>
        </v-col>

        <v-col cols="auto py-0">
          <v-btn class="custom-btn " @click="count++" icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-btn
          style="font-size: larger;"
          size="large"
            class="py-3 mt-3"
            color="blue"
            min-width="450px"
            variant="flat"
            :disabled="!size "
           
          >
            افزودن به سبد خرید
  </v-btn>
  <v-btn @click="addlike" icon class="mt-2 mx-3" :color="like?'red' : ''" >
<v-icon>mdi-heart</v-icon>
  </v-btn>
        </div>
              </v-contaner>
            </v-col>
            <v-col cols="12" md="6">    
                <v-img 
                class="my-5"
             
                height="400px"
                :src="product.thumbnail_url">
               </v-img></v-col>
          </v-row>
    </v-contaner>
        <v-divider></v-divider>
        <v-container class="mx-20">
          <h2 class="text-end mr-4 my-2"> معرفی محصول</h2>
         
<div class="font text-end mr-3 mb-3" v-html="product.description"></div>
        </v-container>
      
     </v-app>
</template>
<script setup>
import {ref , onMounted} from 'vue'
import {useRoute} from 'vue-router'
const product =ref(null)
const rout = useRoute()
const size = ref(null)
const count = ref(1)
const like = ref(false)
const productslug = rout.params.slug
const productid = rout.params.id
const newprice = (n)=>{return n.toLocaleString('en-US')}
console.log(productslug);
console.log(product, 'oo')
 try{
   const products = await $fetch( `https://atrin.taamito.com/api/v1/products/${productid}/${productslug}`,{method:'GET'})
 console.log(products);
 product.value=products.entity.product 
 
}
catch(error){console.log(error);
}
async function addlike(){
  
  try{
    const cookie = useRequestHeader(['Cookie'])
   const products = await $fetch("/api/like",{method:'POST'})
 console.log(products);
 product.value=products.entity.product 
 
}
catch(error){console.log(error);
}
}
</script>

<style scoped>

.font{font-size: large;}
.custom-btn{box-shadow: none;
border: none;
background-color:none;
height: 40px;
}
.end{justify-content: end !important;}
.name{justify-content: center !important;}
.custom-font{font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;}
</style>

