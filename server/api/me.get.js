

export default defineEventHandler(async (event) => {

  
    const token = getCookie(event,'token')
     const cookie = event.node.req.headers.cookie
     console.log(token);
     if(token){
        try {
            const data = await $fetch('https://atrin.taamito.com/api/v1/layout/web', {
                headers: {
                    Cookie: cookie,
                      Authorization : `Bearer ${token}`,    
                }
                
            })
    
            console.log(cookie,'cookie')
            return data;
        } catch (error) {
            if (error.statusCode==401){setCookie(event,'token', '',{
                httpOnly:true,
                secure:true,
                maxAge:new Date(0) ,
                path:'/'
            
            } )
    }
            console.log(error.data );
            return error
        }
    
    }  
    }) 




// const {apim} = useRuntimeConfig()

//         export default defineEventHandler(async (event) => {
            
//            const token = getCookie(event,'tokenm') 
        

 
    
//     try {
   
//         const data = await $fetch(`${apim}/api/me` , {
//             headers: token
            
//         })
//    console.log(token)
//          console.log(data)
//         return data;
//     } catch (error) {
//         console.log(error.data );
//         return error
//     }

  
// }) 