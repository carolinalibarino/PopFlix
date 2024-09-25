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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]

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