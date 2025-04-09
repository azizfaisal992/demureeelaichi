import React, { useContext, useEffect } from 'react'

function RelatedProducts({category,subCategory}) {

    const{products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=> category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            console.log(productsCopy.slice(0,5));
            
        }

    },[products])

  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
