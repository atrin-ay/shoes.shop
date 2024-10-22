<template>
  <v-app>
    <v-main class="bg-grey-lighten-2">
      <v-container class="d-flex align-center justify-center " style="height: 100vh;">
        <v-sheet class="pa-8 bg-white rounded-lg shadow-lg" width="700" v-if="!CodeSend">
          <h3 class="text-center mb-6 custom-font">ورود / ثبت نام</h3>
          <v-divider></v-divider>

          <v-form ref="form" @submit.prevent="check" class="mt-4">
            <v-text-field
              v-model="number"
              label="شماره خود را وارد کنید"
              :error-messages="errorMessages"
              required
              outlined
              prepend-inner-icon="mdi-phone"
            ></v-text-field>

            <v-btn
              :loading="loading"
              @keydown.enter="check"
              @click="check"
              color="primary"
              class="mt-4 custom-font"
              block
              elevation="2"
            >
              ادامه
            </v-btn>
          </v-form>
        </v-sheet>
   <!-- کد -->
 
          <v-sheet class="pa-8 bg-white rounded-lg shadow-lg" width="700"  v-else>
            <h3 class="text-center mb-6 custom-font">ورود / ثبت نام</h3>
            <v-divider></v-divider>
            <h4 class="text-center ma-0 mt-3 custom-font">کد ارسال شده به شماره {{ number }} را وارد نمایید</h4>
            <v-form ref="form" @submit.prevent="fetchcode" class="mt-4">
              <v-otp-input
               variant="underlined"
               length="4"
               v-model="code"
              ></v-otp-input>
              <div class="d-flex " style="width: 300px;">
              <v-btn
              block
                 @keydown.enter="back"
                @click="back"
                color="red-lighten-1"
                class="mt-4 ma-3 justify-center custom-font"
                elevation="2"
              >
                تغییر شماره
              </v-btn>
              <v-btn
               @keydown.enter="check"
                @click="check"
                color="white"
                class="mt-4 justify-center custom-font"
                block
                elevation="2"
              >
                ارسال مجدد کد
              </v-btn>
            </div>
              <v-btn
              :loading="loading"
               @keydown.enter="fetchcode"
              @click="fetchcode"
              color="primary"
              class="mt-1 custom-font"
              block
              elevation="2"
             :style="{BackgroundColor: CodeSend ?'green':'' }"
            >
             ورود
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
import {useRouter} from'vue-router'
import { ref } from 'vue';

 const loading = ref(false)
 const CodeSend = ref(false)
const number = ref('');
const code = ref('');
const errorMessages = ref([]);
const {user} = state()
const router = useRouter()
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
   CodeSend.value=true
   
  }
     catch(error){
      loading.value=false
      errorMessages.value.push("خطا");  }}};

async function fetchcode (){
        try{
    loading.value=true
    const data = await $fetch('/api/login',{method:'POST'
    ,body:{
      code:code.value,
      mobile:number.value}})
   console.log(data)
   console.log("finali")
   user.value=data
   
return navigateTo('/')
   
  
  
  }
     catch(error){
      loading.value=false
      errorMessages.value.push(error);  }
  
      }

function back (){CodeSend.value=false}
</script>
