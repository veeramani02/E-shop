import { useState } from "react"

const ChangeAddress = ({setAddress,setIsModelOpen}) => {
    const[newAddress,setNewAddress]=useState("")
    const onClose=()=>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div>
      <input type="text" 
      placeholder="Enter new Address"
      className="border p-2 w-full mb-4"
      onChange={(e)=>setAddress(e.target.value)}></input>
      <div className="flex justify-end ">
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={()=>setIsModelOpen(false)} >Cancel</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onclose}>Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
