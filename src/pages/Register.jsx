'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Register = () => {
    const { createUser, profileUpdate } = UseAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [image, setImage] = useState('')
    const [error, setError] = useState('')


    const handleCreateUser = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password length must be more than or equal to six')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('You must use a uppercase letter')
            return
        }
        if (!/[!@#$%^&*()_+]/.test(password)) {
            setError('You must use a special character')
            return
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                profileUpdate(name, image)
                    .then(res => {
                    })
                toast('User created succesfully')
            }).catch(error => {
                toast(error.message)
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className=' max-w-5xl mx-auto flex items-center border justify-between bg-slate-200 p-5 my-10 rounded-md'>
            <div className=' w-full md:w-[40%] lg:w-[40%]'>
                <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput onBlur={(e) => setName(e.target.value)} id="name" type="text" placeholder="Your name" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo url" value="Your Photo Url" />
                        </div>
                        <TextInput onBlur={(e) => setImage(e.target.value)} id="photo url" type="text" placeholder="Your photo url" required shadow />
                    </div>
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
                        <p className=' text-red-500'>{error}</p>
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
                    <Button type="submit">Register</Button>
                    <p className=' text-center'>Already have ana account? <Link to={'/logIn'}><span className=' text-blue-500 font-semibold underline ml-5'>Log In</span></Link></p>
                </form>
            </div>
            <div className=' w-[60%] hidden lg:block md:block'>
                <img className=' w-[50%] mx-auto' src="https://i.postimg.cc/dVs0dnHy/key.png" alt="" />
            </div>
        </div>
    );
};

export default Register;