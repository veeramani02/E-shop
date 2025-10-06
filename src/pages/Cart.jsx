import { useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address,setAddress]=useState("main street,004646")
  const [isModalOpen,setIsModalOpen]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>

          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            {/* Left Section */}
            <div className="md:w-2/3">
              {/* Header Row */}
              <div className="flex justify-between border-b pb-2 items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {/* Product List */}
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex items-center space-x-12">
                    <p>${product.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center border rounded">
                      <button className="text-xl font-bold px-2 border-r hover:bg-gray-100" onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                      <p className="text-lg px-2">{product.quantity}</p>
                      <button className="text-xl px-2 border-l hover:bg-gray-100"  onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                    </div>

                    <p>${(product.quantity * product.price).toFixed(2)}</p>

                    {/* Remove Button */}
                    <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(removeFromCart(product.id))}>
                      
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
 <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
  <h3 className="text-lg font-semibold mb-5 border-b pb-2">CART TOTAL</h3>

  
  <div className="flex justify-between mb-5 border-b pb-2">
    <span className="text-sm font-medium text-gray-600">Total Items</span>
    <span className="font-semibold">{cart.totalQuantity}</span>
  </div>

  <div className="mb-5 border-b pb-3">
    <p className="text-sm font-medium text-gray-600">Shipping:</p>
    <p className="text-sm text-gray-700 mt-1">
      Shipping to: <span className="font-semibold">{address}</span>
    </p>
    <button className="text-blue-600 hover:underline text-sm mt-2" onClick={()=>setIsModalOpen(true)}>
      Change Address
    </button>
  </div>

  
  <div className="flex justify-between items-center mb-5 text-base font-semibold">
    <span>Total Price:</span>
    <span>${cart.totalPrice.toFixed(2)}</span>
  </div>

  
  <button className="w-full bg-red-600 text-white py-2.5 rounded-md hover:bg-red-700 transition-all duration-200" onClick={()=>navigate('/checkout')}>
    Proceed to Checkout
  </button>
</div>


          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={EmptyCart} alt="Empty Cart" className="w-72 h-72 object-contain" />
          <p className="text-gray-600 mt-4 text-lg font-medium">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
