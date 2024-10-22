export const state = ()=>{
    const product = useState('product' ,()=> null) 
    const user = useState('data-user' ,()=> null) 
    const price= useState('price' ,()=> null) 
return {product,user,price}}