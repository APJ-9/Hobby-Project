import React,{useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length<= 0){
        return null;
    }

  return (
    <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        {
            SliderData.map((slide,index) => {
                return(
                    <img src={slide.image} alt='wallpapers' className='image' />
                )
            })
        }
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    </div>
  );
};

export default ImageSlider