import Slider from "react-slick";
import "./carousel.css"

function Carousel({ children }){
    
    const setting = {
        dots: false,
        infinite: false, //true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesShow: 5,
        slidesToScroll: 1,
    }

    return(
        <div>
            <Slider {...setting}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;