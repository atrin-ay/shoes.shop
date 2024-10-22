<!-- <template>
  <v-app-bar app>
    
    
    <v-spacer></v-spacer>
    
    <v-row>
      <v-col class="text-center">
        <nuxt-link to="/" exact-active-class="active" class="nav-link">صفحه اصلی</nuxt-link>
      </v-col>
      <v-col class="text-center">
        <nuxt-link to="/profile" exact-active-class="active" class="nav-link">پروفایل</nuxt-link>
      </v-col>
    </v-row>
    
    <v-divider vertical></v-divider>
    
    <v-icon>mdi-cart</v-icon>
  </v-app-bar>
</template>

<style scoped>
.nav-link {
  padding: 16px;
  text-decoration: none;
  color: #000;
  position: relative;
}

.nav-link.active {
  font-weight: bold;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px; 
  width: 100%;
  height: 2px; 
  background-color: black; 
  transform: translateX(-50%);
}
</style> -->

<template>
  <v-card class="px-0 py-0 mb-0 mx-0 my-0"   >
<v-tabs >
  <div class="ml-1" >
   
    <v-tab class=" custom-font " to="/" >صفحه اصلی </v-tab> 
  
    <v-tab to="/login" class="custom-font" v-if="!user" >  ورود</v-tab>
  
    <v-tab to="/profile" class="custom-font" v-if="user">  پروفایل</v-tab>
  </div>
<v-spacer></v-spacer>
  <h2 class="text-h4 pt-2 ma-0 mr-15">katoni store</h2>

  <v-spacer></v-spacer>
   
    <nuxt-link class="pl-0 mx-2 fit nav-link" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mx-3 mt-2 nav-link"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></nuxt-link>
   <nuxt-link class="pl-0 mx-2 fit nav-link "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" class="mx-3 mt-2 nav-link"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg></nuxt-link>

     
</v-tabs>
</v-card>
</template>
<style scoped>
.d{margin-top: 10px !important;}
.custom-font{font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
 font-weight:bold;
 font-size:medium;

 }
 .fit{min-width: 30px !important;}
 .custom-link{
  text-decoration: none;
  font-size: medium;
  color: black
}
.nav-link{
  font-size: larger!important;
 


}

.nav-link.active{
 font-size: x-large;

 text-shadow: 0 2px 5px  rgba(113, 113, 113, 0.626);

}
</style>
<script setup>
const {user} = state()

console.log(user.value,'log');

</script>