export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const token = getCookie(event,'token')
     const cookie = event.node.req.headers.cookie
     console.log(token);
     if(token){
        try {
            const data = await $fetch(`https://atrin.taamito.com/api/v1/products/${body.product}/like`, {
                headers: {
                    Cookie: cookie,
                      Authorization : `Bearer ${token}`,    
                },
                body:body.id

                
            })
    
            console.log(cookie,'cookie')
            return data;
        } catch (error) {
            console.log(error.data );
            return error
        }
    
    }  
    }) 