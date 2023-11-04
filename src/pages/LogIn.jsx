'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';


const LogIn = () => {
    return (
        <div className=' max-w-5xl mx-auto flex items-center border justify-between bg-slate-200 p-5 my-10 rounded-md'>
            <div className=' w-full md:w-[40%] lg:w-[40%]'>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput id="repeat-password" type="password" required shadow />
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
                    <Button type="submit">Log In</Button>
                    <Button outline gradientDuoTone="purpleToBlue">
                        Purple to Blue
                    </Button>
                    <p className=' text-center'>New here? <Link to={'/register'}><span className=' text-blue-500 font-semibold underline ml-5'>Register</span></Link></p>
                </form>
            </div>
            <div className=' w-[60%] hidden lg:block md:block'>
                <img className=' w-[50%] mx-auto' src="https://i.postimg.cc/dVs0dnHy/key.png" alt="" />
            </div>
        </div>
    );
};

export default LogIn;