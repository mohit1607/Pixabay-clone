import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { NavLink } from 'react-router-dom'

export default function Card({
  image,
  height, 
  width, 
  name,
  userImageUrl,
  userName,
  likes
}) {

  // Lazy loading used successfully.

  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }

  // const errorThrower = () => {
  //   if(likes > 1){
  //     throw new Error("ha ha you got more likes")
  //   } 
  // }   custom error thrower for checking error boundaries.
  const handleMouseLeave = () => {
    setHover(false)
  }

  // errorThrower()
 
    return (
       <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}
        className={`relative mb-4 rounded-lg overflow-hidden hover:cursor-pointer`}>
         <div className={`absolute top-0 left-0 z-20 w-full h-full overflow-hidden inner-shadow`}>
          <div className={` ${hover ? 'mb-0': '-mb-72' } text-white flex justify-between items-center gap-2 absolute w-full bottom-0 half-black h-[5rem] transition-all ease-in-out duration-200 px-3 py-3`}>
            <div className='flex gap-2 items-center'>
                By :-
                <img className='z-20 h-[90%] w-[10%] rounded-3xl hover:border-2 border-white' 
                loading='lazy'
                src={userImageUrl} 
                alt={userImageUrl} 
                />
                <a className='text-white font-bold no-underline hover:underline'>
                  {userName}
                </a>
            </div>
            <div className='text-center w-[8rem] text-sm items-center p-2 border font-semibold rounded-lg border-white'>
              {likes} <span>Likes</span>
            </div>
          </div>
         </div>
         <LazyLoadImage  src={image} alt={name} height={height} width={width} />
       </div>
  )
}
