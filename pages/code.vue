<template>
    <v-app>
      <v-main class="bg-grey-lighten-2">
        <v-container class="d-flex align-center justify-center " style="height: 100vh;">
          <v-sheet class="pa-8 bg-white rounded-lg shadow-lg" width="700">
            <h3 class="text-center mb-6 custom-font">ورود / ثبت نام</h3>
            <v-divider></v-divider>
  
            <v-form ref="form" @submit.prevent="check" class="mt-4">
              <v-text-field
                v-model="number"
                label="کد" 
                :error-messages="errorMessages"
                required
                outlined
                prepend-inner-icon="mdi-phone"
              ></v-text-field>
  
              <v-btn
                :loading="loading"
                @click="check"
                color="primary"
                class="mt-4"
                block
                elevation="2"
              >
                NEXT
              </v-btn>
            </v-form>
  
            
     
        
          </v-sheet>
        </v-container>
      </v-main>
    </v-app>
  </template>
  <style scoped>
  .custom-font {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
    color: blue; 
  }
  
  .v-sheet {
    transition: transform 0.2s ease;
  }
  
  .v-sheet:hover {
    transform: scale(1.02); 
  }
  
  .v-btn {
    font-weight: bold; 
  }
  </style>
  <script setup>
  import { ref } from 'vue';
   const loading = ref(false)
  const number = ref('');
  const errorMessages = ref([]);
  async function check (){
    errorMessages.value = []; 
  
    if (!number.value.startsWith('09') || number.value.length!==11) {
      errorMessages.value.push('لطفا شماره درست وارد کنید.');
    }
  
    if (errorMessages.value.length === 0) {
     try{
      loading.value=true
      const data = await $fetch('https://atrin.taamito.com/api/v1/auth/login',{method:'POST'
      ,body:{mobile:number.value}})
     console.log(data)
     loading.value=false
    }
       catch(error){
        loading.value=false
        errorMessages.value.push(error);
      
       }
      
     
    }
  };
  </script>