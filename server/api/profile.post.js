export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = getCookie(event,'token')
    const cookies = event.node.req.headers.cookie
    
    try {
   
        const data = await $fetch('https://atrin.taamito.com/api/v1/users/profile' , 
            {method:'POST'
                ,body:body,
                headers: {
                                Cookie: cookies,
                                  Authorization : `Bearer ${token}`,    
                            }
                            
              }
           
            
        )
      
        
       
      
       
        return data;
    } catch (error) {
        console.log(error );
        return error
    }

  
}) 