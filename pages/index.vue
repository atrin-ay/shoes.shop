<template >
  <v-app class="custom-bg">
   <v-main >
    <v-cantaner hight="200px" flue>
      <img src="../public/img3.jpg" height="530px" width="100%" alt="no"> 

</v-cantaner>
    
     
     <v-container class="my-4">
        <v-row justify="center" align="center">
          <v-col class="text-center pb-0">
              <v-divider  class="divider" >
            <v-card-title class="  pb-1 text-h5  text-md-h5 text-lg-h3 mp-0  pb-0 custom-font mx-2 px-2	" >جدید ترین</v-card-title>
            <v-col class="text-center pt-0 ma">
            <v-card-title class="text-h6 text-md-h6 text-lg-h6 mt-0 custom-font"  >محصولات</v-card-title>
          </v-col>
             </v-divider>
          </v-col>
        </v-row>
     </v-container>

     <v-contanet class="mx-4">
      <v-row  justify="center" align="center">
      <v-col  
        v-for="(product, index) in cards1"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        lg="3"
        class="text-center "
      >
      <nuxt-link :to="`/info/${product.id}/${product.slug}`" class="custom-link">
       <card  :name="product.name"  :price="newprice(product.price)" :image="product.thumbnail_url" size="200px" />
      </nuxt-link>
      </v-col>
    </v-row>
     </v-contanet>

    
     <v-container class="my-4 ">
        <v-row justify="center" align="center">
          <v-col class="text-center pb-0">
             <v-divider  class="divider2 " >
            <v-card-title class="text-h3 text-md-h3 text-lg-h3 mp-0  pb-1 custom-font mx-2 mb-2" >پرفروش ترین</v-card-title>
            <v-col class="text-center pt-0 ma">
            <v-card-title class="text-h6 text-md-h6 text-lg-h6 pt-1 custom-font">محصولات</v-card-title>
          </v-col>
              </v-divider>
          </v-col>
        </v-row>
     </v-container>

    <v-container fluid >
    <v-row class="mx-5 mb-3" justify="center" align="center">
      <!-- کارد بزرگ -->
     
      <v-col cols="12" md="5">
        <nuxt-link :to="`/info/${product.id}/${product.slug}`" class="custom-link">
        <card  :name="asli.name" :price="newprice(asli.price)" :image="asli.thumbnail_url" />
        </nuxt-link>
      </v-col>

      <!-- بخش کاردهای کوچک -->
      
      <v-col cols="12" md="6">
        <v-row v-if="p">
          <v-col v-for="product in cards2" :key="n" cols="12" sm="6" lg="4">
            <nuxt-link :to="`/info/${product.id}/${product.slug}`" class="custom-link">
            <card size="130px" :name="product.name" :price="newprice(product.price)"  :image="product.thumbnail_url" font="medium" />
          </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</v-app>
</template>
<script setup>
import { ref,computed } from 'vue';
const show = ref(false)
const {product} = state()
const p =  product.value.entity.data
const cards1= p.slice(0,4)
const asli=  product.value.entity.data[6]
const cards2= p.slice(5,11)

const newprice = (x)=>{return x.toLocaleString('en-US')}
// function format (p){
//   return new Intl.NumberFormat('fa-IR').format(p)
// }
</script>


<style>
.custom-link{
  text-decoration: none;
  font-size: medium;
}
.divider2{
  margin: 0 -9px;
  margin-top: -22px;
opacity: 22% !important;

}
.divider{
  margin: 0 -19px;
  margin-top: -20px;
opacity: 32% !important;

}

.custom-bg{
  /* background-color: rgba(200 , 200, 200, 0.2); */
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }

.v-card{margin: 10px;}

.titel{font-size: 32px;
font-weight: bold;
font-family:Arial, Helvetica, sans-serif;
}
.ma{margin-top: -18px}
</style>