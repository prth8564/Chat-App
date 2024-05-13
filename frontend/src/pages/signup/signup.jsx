import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs , setInputs] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  const {loading , signup} = useSignup();
  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs , gender});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3x1 font-semibold text-center text-gray-300'>
        SignUp
        <span className='text-yellow-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs , fullName:e.target.value})}></input>
          </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
          value={inputs.userName}
          onChange={(e) => setInputs({...inputs , userName:e.target.value})}
          ></input>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>  
          <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'
          value={inputs.password}
          onChange={(e) => setInputs({...inputs , password:e.target.value})}
          ></input>
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>  
          <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs , confirmPassword:e.target.value})}
          ></input>
        </div>

        <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender = {inputs.gender} />

        <Link to='/login' className='text-sm hover:underline hover:text-yellow-600 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
          </div>
        </form>

      </div>
      </div>
  )
}

export default SignUp





//Starter code for SIgnup
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//         SignUp
//         <span className='text-yellow-500'>ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10'></input>
//           </div>
//         <div>
//         <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>  
//           <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>  
//           <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
//         </div>

//         <GenderCheckBox />

//         <a href="#" className='text-sm hover:underline hover:text-yellow-600 mt-2 inline-block'>
//             Already have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//           </div>
//         </form>

//       </div>
//       </div>
//   )
// }

// export default SignUp