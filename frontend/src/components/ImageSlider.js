import { useState, useEffect } from 'react';
import '../components/ImageSlider.css';

export default function ImageSlider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryDisplayed, setIsGalleryDisplayed] = useState(false);

    const ImageSlideStyle = {
        backgroundImage: `url(${props.slides[currentIndex]})`
    }

    const goToPrevImg = () => {
        const newIndex = (currentIndex === 0) ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNextImg = () => {
        const newIndex = (currentIndex === props.slides.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const dotsStyle = {
        fontSize: '60px',
        lineHeight: '47px',
        marginTop: "-12px"
    }

    // Auto sliding
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextImg();
        }, 7000);
      
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]); // goToNextImg changes currentIndex invoking this effect which invokes goToNextImg making loop.

    return (
        <div className="container-slider">
            <div 
                className='ImageSlide' 
                style={ImageSlideStyle}
                onClick={() => setIsGalleryDisplayed(true)}
            ></div>

            <div 
                className='container-slider__left-arrow' 
                onClick={goToPrevImg}
            ><p>&#8249;</p></div>

            <div 
                className='container-slider__right-arrow' 
                onClick={goToNextImg}
            ><p>&#8250;</p></div>

            <div
                className="container-slider__dots-area"
            >
                {props.slides.map((slide, index) => (
                    <div 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={currentIndex === index ? dotsStyle : {}}
                    >
                        &#8226;
                    </div>
                ))} 
            </div>

            {/* Bigger slider with modal */}
            <div id='gallery-modal-overlay' 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
            ></div>


            <div 
                className='gallery-modal__left-arrow gallery-modal__arrow' 
                onClick={goToPrevImg} 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            >&#8249;</div>

            <div
                id='bigSlide'
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            >
                <img src={props.slides[currentIndex]} alt='Quality used cars, trusted dealer' />  
                <div 
                    id='close-gallery'
                    style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                    onClick={() => setIsGalleryDisplayed(false)}
                >+</div>
            </div>

            <div 
                className='gallery-modal__right-arrow gallery-modal__arrow'
                onClick={goToNextImg}
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            >&#8250;</div>
        </div>
    )
}
