export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
   
        const data = await $fetch('https://atrin.taamito.com/api/v1/auth/verify' , {
            method:'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
            }
           
            
        })

        setCookie(event,'token', data.entity.token,{
            httpOnly:true,
            secure:true,
            maxAge:60 *60*24*7  ,
            path:'/'
        
        } )

    
        return data.entity.user;
    } catch (error) {
        console.log(error );
        return error
    }

  
}) 