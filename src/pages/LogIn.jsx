'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BiLogoGoogle } from 'react-icons/bi';
import UseAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';


const LogIn = () => {
    const { loginWithGoogle, user, logIn } = UseAuth()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    // handle google login
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user);
            })
    }

    // handle password email login
    const handleLogIn = (e) => {
        e.preventDefault()
        logIn(email, password)
            .then(res => {
                console.log(res.user);
                toast('Log in successfully')
            })
            .catch(error => {
                toast(error.message);
            })
    }

    return (
        <div className=' max-w-5xl mx-auto flex items-center border justify-between bg-slate-200 p-5 my-10 rounded-md'>
            <div className=' w-full md:w-[40%] lg:w-[40%]'>
                <form onSubmit={handleLogIn} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput onBlur={(e) => setEmail(e.target.value)} id="email2" type="email" placeholder="Your email" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput onBlur={(e) => setPassword(e.target.value)} id="password2" type="password" placeholder="Your password" required shadow />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type='submit' outline gradientDuoTone="purpleToBlue">
                        Log In
                    </Button>
                </form>
                <div>
                    <Button onClick={handleGoogleLogin} className='w-full my-3' outline gradientDuoTone="purpleToBlue">
                        <BiLogoGoogle className=' text-blue-700 text-xl ' /> JOIN WITH GOOGLE
                    </Button>
                    <p className=' text-center'>New here? <Link to={'/register'}><span className=' text-blue-500 font-semibold underline ml-5'>Register</span></Link></p>
                </div>
            </div>
            <div className=' w-[60%] hidden lg:block md:block'>
                <img className=' w-[50%] mx-auto' src="https://i.postimg.cc/dVs0dnHy/key.png" alt="" />
            </div>
        </div>
    );
};

export default LogIn;