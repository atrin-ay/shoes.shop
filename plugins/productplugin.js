
    export default defineNuxtPlugin (async (NuxtApp)=>{
        const {product}=state()
        try{
        const data = await $fetch ('https://atrin.taamito.com/api/v1/products',{method:'POST'})
         product.value= data
         
      
    }
    catch(error){console.log(error);
        return error
    }
    
    })
