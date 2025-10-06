import React from 'react'

const Register = ({OpenLoginUp}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
      <form>
        <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type='text' className='w-full px-3 py-2 border' placeholder='Enter Name'></input>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 '>Password</label>
            <input type='password' className='w-full px-3 py-2 border' placeholder='Enter Password'></input>
        </div>
        
        <div className='mb-4'>
            <button type="submit" className='w-full bg-red-600 text-white py-2'> Sign up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already have an account?</span>
        <button className='text-red-800'  onClick={OpenLoginUp}>Login</button>
      </div>
    </div>
  )
}

export default Register
