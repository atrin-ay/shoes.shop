<template>
  <v-container>
    <div v-if="loading" style="height: 100vh;">
    <v-alert
    title="loading..."
    type="info"
    variant="tonal"
  ></v-alert>
</div>
  <div v-if="erroralert & !loading">
    <v-alert
    title="خطا"
    type="red"
    variant="tonal"
  ></v-alert></div>
    <v-card elevation="2" style="background-color: white;" v-if="!loading">
      <v-card-title class="d-flex align-center justify-between">
        <!-- <v-icon class="ma-2">mdi-account</v-icon> -->
        <div class="ma-2">your Profile</div>
        <v-icon
          @click="Edit"
          color="blue"
          class="ml-auto"
        >
          mdi-pencil
        </v-icon>
        
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field 
                v-model="user.name"
                label="نام" 
                :disabled="!editMode"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field 
                  v-model="user.family"
                label="نام خانوادگی" 
                :disabled="!editMode"
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field 
                v-model="user.mobile"
                label="شماره" 
                disabled
                outlined
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field 
                  v-model="user.email"
                label="ایمیل" 
                :disabled="!editMode"
                outlined
              />
            </v-col>
          </v-row>
          <v-row  class="text-end">
            <v-col cols="12">
  
              <v-btn 
              :disabled="!editMode" 
                @click="logoutt" 
                color="red" 
                class="mx-5 custom-fon"
              >
                خروج از حساب
              </v-btn>
              <v-btn 
              :disabled="!editMode" 
                @click="saveChanges" 
                color="blue"
                class="custom-fon " 
              >
                تایید
              </v-btn>
              </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    </v-container>
    <v-container fluid>
    <h2 class="text-center mb-4">محصولات ما</h2>

    <v-carousel hide-delimiter-background>
      <v-carousel-item v-for="(slide, index) in slides" :key="index" class="px-2">
        <v-row justify="center" class="mx-4">
          <v-col v-for="(item, idx) in slide.items" :key="idx" cols="12" sm="6" md="4">
            <v-card class="mx-auto" outlined>
              <v-img :src="item.image" height="200" contain />
              <v-card-title class="text-h6 text-center">{{ item.title }}</v-card-title>
              <v-card-subtitle class="text-center">{{ item.description }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="cyan" text @click="addToCart(item)">
                  افزودن به سبد خرید
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';

const token = useCookie('token')
const {user} = state()
const router = useRoute()
const loading = ref(true)
const erroralert= ref(false)
const users = ref({});
console.log(user.value);

const editMode = ref(false);
const check = () => {
 
 if (user) {
 users.value = user
 loading.value = false; 
} else {
 error.value = 'User data is not available';
 loading.value = false; 
 }
};

const Edit = () => {
  editMode.value = !editMode.value;
};
 async function logoutt(){
  try{
   
    const data = await $fetch('/api/logout',{method:'POST',
 
  })
  console.log(data);
   return navigateTo('/')
  }
     catch(error){
    
      console.log(error);  }
}

async function saveChanges(){
  editMode.value = false; 
  try{
    const cookie = useRequestHeader(['Cookie'])
    const data = await $fetch('/api/profile',{method:'POST',
    headers: cookie,
    body:{name:user.value.name,
      family:user.value.family,
       email:user.value.email},
        
  })

window.location.reload(true)
  }
     catch(error){
      erroralert.value=true
      console.log(error);  }
};
const slides = ref([
  {
    items: [
      { title: 'محصول 1', description: 'توضیحات محصول 1', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 2', description: 'توضیحات محصول 2', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 3', description: 'توضیحات محصول 3', image: 'https://via.placeholder.com/200' },
    ],
  },
  {
    items: [
      { title: 'محصول 4', description: 'توضیحات محصول 4', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 5', description: 'توضیحات محصول 5', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 6', description: 'توضیحات محصول 6', image: 'https://via.placeholder.com/200' },
    ],
  },
]);

// تابع برای افزودن محصول به سبد خرید
const addToCart = (item) => {
  console.log('Added to cart:', item);
};
onMounted(check)
</script>

<style scoped>
.v-btn{font-size: medium;
font-weight: 600;}
.custom-font{font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
 font-weight:bold !important;
 font-size:large !important;

 }
.v-card {
  border-radius: 10px;
}

.v-card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

</style>

<!-- <template>
  <v-container fluid>
    <h2 class="text-center mb-4">محصولات ما</h2>

    <v-carousel hide-delimiter-background>
      <v-carousel-item v-for="(slide, index) in slides" :key="index">
        <v-row justify="center" class="mx-4">
          <v-col v-for="(item, idx) in slide.items" :key="idx" cols="12" sm="6" md="4">
            <v-card class="mx-auto" outlined>
              <v-img :src="item.image" height="200" contain />
              <v-card-title class="text-h6 text-center">{{ item.title }}</v-card-title>
              <v-card-subtitle class="text-center">{{ item.description }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="cyan" text @click="addToCart(item)">
                  افزودن به سبد خرید
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

// داده‌های نمونه برای اسلایدها
const slides = ref([
  {
    items: [
      { title: 'محصول 1', description: 'توضیحات محصول 1', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 2', description: 'توضیحات محصول 2', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 3', description: 'توضیحات محصول 3', image: 'https://via.placeholder.com/200' },
    ],
  },
  {
    items: [
      { title: 'محصول 4', description: 'توضیحات محصول 4', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 5', description: 'توضیحات محصول 5', image: 'https://via.placeholder.com/200' },
      { title: 'محصول 6', description: 'توضیحات محصول 6', image: 'https://via.placeholder.com/200' },
    ],
  },
]);

// تابع برای افزودن محصول به سبد خرید
const addToCart = (item) => {
  console.log('Added to cart:', item);
};
</script>

<style scoped>
.v-carousel-item {
  padding: 20px; 
}
</style> -->