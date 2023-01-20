import ImageSlider, { Slide } from "react-auto-image-slider";
import ravi from '../images/bg-1.jpg'
import img3 from '../images/bg-2.jpg'
import img2 from '../images/imggg1.jpg'

function Homee() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="ravi" src={ravi} className="object-fill h-full" />
      </Slide>
      <Slide>
        <img alt="img3" src={img3} className="object-fill h-full" />
      </Slide>
      <Slide>
        <img alt="img2" src={img2} className="object-fill h-full" />
      </Slide>
    </ImageSlider>
  );
}

export default Homee;
