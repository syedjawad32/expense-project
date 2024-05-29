import { useEffect, useState } from "react"

const Product = ({category}:{category:string}) => {
const [product,setProduct]=useState<string[]>([])
useEffect(()=>{
console.log("fetching products in",category)
setProduct(['clothing','marketing'])
},[category])

  return (
    <div>
product
    </div>
  )
}

export default Product