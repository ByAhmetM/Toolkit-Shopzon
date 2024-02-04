import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum in
              ea minus aperiam amet, eaque eveniet est. Aut sit nulla quasi
              repudiandae, iusto similique magnam enim, quo consequuntur aliquid
              corporis!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="h-[600px] "
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa7c385b-0f6d-4bd9-8a0f-6038d8d8a355/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum in
              ea minus aperiam amet, eaque eveniet est. Aut sit nulla quasi
              repudiandae, iusto similique magnam enim, quo consequuntur aliquid
              corporis!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="h-[600px] "
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-ayakkab%C4%B1s%C4%B1-lkVhs6.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
