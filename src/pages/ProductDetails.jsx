// import React, { useEffect, useState } from 'react'
// import { FaCarSide, FaQuestion } from 'react-icons/fa'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

// const ProductDetails = () => {
//   const { id } = useParams()
//   const products = useSelector(state => state.product.products)
//   const [product, setProduct] = useState()

//   useEffect(() => {
//     const newProduct = products.find(p => p.id === parseInt(id))
//     setProduct(newProduct)
//   }, [id, products])

//   if (!product) {
//     return <div>Loading product details...</div>
//   }

//   return (
//     <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24 '>
//         <div className='flex flex-col md:flex row gap-x-16'>
//             <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
//             <img src={product.image} alt={product.name} className='h-full'></img>
//             </div>

//             <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
//                 <h2 className='text-3xl font-semibold mb-2 '></h2>
//                 <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
//                 <div className='flex items-center mb-4 gap-x-2'>
//                     <input id="quantity" type="number" min="1" className='border p-1 w-16'></input>
//                     <button className='bg-red-600 text-white py-1.5 px-4 hover:bg-red-800'>Add to Cart</button>
//                 </div>
//                 <div className='flex flex-col gap-y-4 mt-4'>
//                     <p className='flex items-center'>
//                         <FaCarSide className='mr-1'/>
//                         Delivery & Return</p>
//                     <p className='flex items-center'>
//                         <FaQuestion className='mr-1'/>
//                          Ask a Question </p>
//                 </div>
//             </div>
//         </div>
//      <div className='mt-8'>
//         <h3 className='text-xl font-bold mb-2 '>Product Description</h3>
//         <p>Product descrition will goes here.</p>
//      </div>
//     </div>
//   )
// }

// export default ProductDetails



import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const products = useSelector(state => state.product.products)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const newProduct = products.find(p => p.id === parseInt(id))
    setProduct(newProduct)
  }, [id, products])

  if (!product) {
    return <div className='text-center py-8 text-lg font-semibold'>Loading product details...</div>
  }

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      
      {/* Product main section */}
      <div className='flex flex-col md:flex-row gap-x-16'>
        
        {/* Product image */}
        <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center items-center rounded-lg border'>
          <img 
            src={product.image} 
            alt={product.name} 
            className='h-full object-contain' 
          />
        </div>

        {/* Product details */}
        <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col justify-center items-start gap-y-4 rounded-lg border'>
          <h2 className='text-3xl font-semibold'>{product.name}</h2>
          <p className='text-xl font-semibold text-gray-800'>${product.price}</p>

          <div className='flex items-center gap-x-2'>
            <input 
              id="quantity" 
              type="number" 
              min="1" 
              defaultValue="1"
              className='border p-1 w-16 text-center rounded'
            />
            <button className='bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-800 transition duration-200'>
              Add to Cart
            </button>
          </div>

          <div className='flex flex-col gap-y-3 mt-4 text-gray-700'>
            <p className='flex items-center'>
              <FaCarSide className='mr-2 text-red-600' /> Delivery & Return
            </p>
            <p className='flex items-center'>
              <FaQuestion className='mr-2 text-red-600' /> Ask a Question
            </p>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-2'>Product Description</h3>
        <p className='text-gray-700 leading-relaxed'>
          Product description will go here. You can update this section with actual details about the product.
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
    