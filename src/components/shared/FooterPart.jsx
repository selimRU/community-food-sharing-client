'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const FooterPart = () => {
    return (
        <Footer container className='bg-blue-200 py-20'>
            <div className=" w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between ">
                    <div className=' flex gap-2 items-center mb-3 md:mb-0 lg:mb-0'>
                        <img className=' w-[30px] h-[30px] rounded-full mr-2' src="https://i.postimg.cc/Ls6RJJX1/logo2.jpg" alt="" />
                        <span className="self-center whitespace-nowrap text-xl md:text-2xl lg:text-2xl font-semibold dark:text-white rancho">Food For All</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Food for All</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <div>
                        <Footer.Copyright by="Food for All™" year={2023} />
                    </div>
                    <div className=' lg:text-center'>
                        <Footer.Title className='text-lg capitalize my-auto' title="Address" />
                        <Footer.Title className=' capitalize my-auto' title=" 2nd Floor, T.K Bhaban," />
                        <Footer.Title className=' capitalize my-auto' title=" 13 Kazi Nazrul Islam Ave, Dhaka 1215" />
                        <Footer.Title className='capitalize my-auto' title="Phone:-043222," />
                        <Footer.Title className='capitalize my-auto' title="Email:-foodforall@gmail.com," />
                    </div>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterPart;