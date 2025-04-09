import React, { useContext, useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products, search, showSearch  } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true); 
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))//includes used for containning specified element
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item=>category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
      
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {

    let fpcopy = filterProducts.slice();   //slice is used for minus the element from the array

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)))
        break;
        case 'high-low':
          setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)))
          break;
          default:
            applyFilter();
            break;

    }
  }

  useEffect(()=>{
    applyFilter();

  },[category,subCategory,search,showSearch ])

  useEffect(()=>{
    sortProducts();
  },[sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t container mx-auto'>

      {/* Filter Section */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)} 
        >
          FILTER
          <ChevronUp className={`h-3 sm:hidden transform transition-transform duration-200 ${showFilter ? 'rotate-180' : ''}`} />
        </p>

        {/* Category Section */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Men" onChange={toggleCategory} /> MEN
            </div>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Women" onChange={toggleCategory} /> WOMEN
            </div>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Kids" onChange={toggleCategory}/> KIDS
            </div>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Unisex" onChange={toggleCategory}/> UNISEX
            </div>
          </div>
        </div>

        {/* Subcategory Section */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Sweatshirt" onChange={toggleSubCategory} /> SWEAT-SHIRT
            </div>
            <div className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Hoodie" onChange={toggleSubCategory} /> HOODIE
            </div>
            <div  className='flex gap-2'>
              <input className='w-3 cursor-pointer' type="checkbox" value="Baggy" onChange={toggleSubCategory} /> BAGGY
            </div>
          </div>
        </div>

      </div>
      {/*Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb:4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/*product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map products */}
        <div className=' mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index )=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default Collection;
