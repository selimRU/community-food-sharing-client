import { BsArrow90DegLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-row hover:bg-blue-500 hover:text-white gap-2 items-center bg-blue-200 w-[150px] mx-auto justify-center mt-5 py-3 rounded-md'>
                <BsArrow90DegLeft className='  font-semibold' />
                <Link to='/'>
                    <button className=" text-center "> Back To Home</button>
                </Link>
            </div>
            <img className=" w-[70%] mx-auto" src="https://i.postimg.cc/fRXtKy1Z/404-error-page-examples-best-removebg-preview.png" alt="" />
        </div >
    );
};

export default ErrorPage;