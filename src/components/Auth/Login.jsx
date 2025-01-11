import React, {useState} from 'react'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("email is",email)
    console.log("password is",password)

    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
            <form 
            onSubmit ={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-white rounded-full placeholder:text-gray-400'
                type="Email" 
                placeholder='Enter Your Email' 
                />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='m-2 outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-white rounded-full placeholder:text-gray-400'type="password" placeholder='Enter Your Password' />
                <button className='m-7 bg-emerald-600 rounded-full px-10 py-1 '>Log In</button>
            </form>
        </div>    
    </div>
  )
}

export default Login