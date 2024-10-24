import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authUser';

const SignUpPage = () => {
    const {searchParams} = new URL(document.location);
    const emailValue = searchParams.get("email");
    const [email , setEmail] = useState(emailValue || "");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {signup} = useAuthStore();
    const handleSignUp = (e)=> {
        e.preventDefault();
        signup({email , username, password})
    }
    return (
        <div className='h-screen w-full hero-bg'>
        {/* Header of Navigation*/}
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <Link to = {"/"}>
                <img src="/flickpick.png" alt="Logo"  className='w-40'/> 
            </Link>
        </header>
        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-[#003245]/60 rounded-lg shadow-md'>
            <h1 className='text-center text-white text-2xl font-bold mb-4'>
                Sign Up
            </h1>

            {/* Form of Sign Up which contains email - username - password*/}
            
            <form className='space-y-4' onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="email" className='text-sm font-medium text-white block'>
                        Email
                    </label>
                    <input type="email"
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                    focus:outline focus:ring'
                    placeholder='you@email.com'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="username" className='text-sm font-medium text-white block'>
                        Username
                    </label>
                    <input type="text"
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                    focus:outline focus:ring'
                    placeholder='John Doe'
                    id='username'
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className='text-sm font-medium text-white block'>
                        Password
                    </label>
                    <input type="password"
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                    focus:outline focus:ring'
                    placeholder='*******'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='w-full py-2 bg-[#022837] text-white font-semibold rounded-md
                hover:bg-[#03222f]
                '>
                    Sign Up
                </button>
            </form>
            <div className='text-gray-400 text-center'>
                Already have an account?
                <Link to = {"/login"} className='text-white underline px-1'>
                    Login
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SignUpPage
