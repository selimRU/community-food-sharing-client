import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Bannar = () => {
    return (
        <div className=" relative">
            <Carousel animationHandler={"fade"} autoPlay={true} interval={3000} showStatus={false} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="https://i.postimg.cc/2jWNVTsb/New-Project-2023-11-05-T141243-228.png" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/K8rSyXBJ/New-Project-2023-11-05-T133812-992.png" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/P52BB7wc/New-Project-2023-11-05-T141151-412.png" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/3wNP7Zjw/New-Project-2023-11-05-T141039-493.png" />
                </div>
                <div>
                    <img src="https://i.postimg.cc/qqyPSMsX/New-Project-2023-11-05-T140941-725.png" />
                </div>
            </Carousel>
            <div className=" bg-black opacity-70 absolute bottom-0 w-full h-full">
                <h2 className="  text-white text-2xl md:text-4xl lg:text-7xl ml-[10%] mt-[20%] z-50 ">Help People <br /> <span className=" text-blue-300 ralway font-semibold">Save Humanity</span></h2>
            </div>
        </div>
    );
};

export default Bannar;