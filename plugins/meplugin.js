
export default defineNuxtPlugin (async (NuxtApp)=>{
  const {user} = state()
    try{
        const cookie = useRequestHeader(['Cookie'])
    const data = await $fetch ('/api/me',{headers:cookie,})
    user.value=data.entity.user
     
     console.log(user.value,'mypl')
  
}
catch(error){console.log(error);
    return error
}

})