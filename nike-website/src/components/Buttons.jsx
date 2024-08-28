import { arrowRight } from "../assets/icons/index"

const Buttons = ({ label, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
   <button className={`flex justify-center 
   items-center gap-2 px-7 py-4 border 
   text-lg leading-none 
   ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` : ' bg-coral-red text-white border-coral-red' }
   rounded-full ${fullWidth && 'w-full'}  max-lg:max-w-[400px] max-lg:px-16 max-lg:mx-auto`}>
    {label}
    <img
    src={arrowRight}
    alt="arrow-right-icon"
    className="ml-2 rounded-full w-5 h-5 "
    />


   </button>
  )
}

export default Buttons