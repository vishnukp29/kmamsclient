import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {HiArrowLeft,HiArrowRight} from "react-icons/hi";
import { fetchBannerAction } from "../../../Redux/Slices/bannerSlices";
// import b1 from '../../../Logo/b1.png';
// import b2 from '../../../Logo/b2.png';
// import b3 from '../../../Logo/b3.png';

//const bannerArray = [b1,b2,b3]

let count = 0

let slideInterval;

const Banner = () => {

  const banner = useSelector((state) => state?.banners);
  const { bannerList } = banner;

  const bannerArray = bannerList?.map((obj)=>{
    return obj.bannerImage
  })

  console.log(bannerArray);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerAction());
  }, [dispatch]);

  const [currentIndex,setCurrentIndex]= useState(0)

  const slideRef = useRef()
  
  const removeAnimation = ()=>{
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(()=>{ 
    slideRef.current.addEventListener('animationend',removeAnimation)
    slideRef.current.addEventListener('mouseenter',pauseInterval)
    slideRef.current.addEventListener('mouseleave',startSlider)
    
    startSlider()
    return ()=>{
      pauseInterval()
    }
  },[])

  const startSlider= ()=>{
    slideInterval= setInterval(() => {
      handleOnNextClick()
    }, 3000);
  }

  const pauseInterval= ()=>{
    clearInterval(slideInterval)
  }

  const handleOnNextClick = ()=>{
    count = (count + 1) % bannerArray?.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  const handleOnPrevClick = ()=>{
    const imgLength = bannerArray?.length
    count = (currentIndex+imgLength-1) % imgLength
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  console.log(slideRef);
  
  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="">
        <img src={bannerArray&&bannerArray[currentIndex]} alt="" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 px-3 w-full flex justify-between items center">
        <button onClick={handleOnPrevClick} className='p-2 px-4 rounded-md bg-gray-800 bg-opacity-50 text-lime-400'>
          <HiArrowLeft size={25}/>
        </button>
        <button onClick={handleOnNextClick} className='p-2 px-4 rounded-md bg-gray-800 bg-opacity-50 text-lime-400'>
          <HiArrowRight size={25}/>
        </button>
      </div>
    </div>
  );
};

export default Banner;
