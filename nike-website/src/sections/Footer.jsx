import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 
      flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
              <a href="/">
                <img src={footerLogo}
                width={150}height={46}
                />
              </a>
              <p className="text-base mt-6 leading-7 sm:max-w-sm text-white-400">Get shoes ready for the new term at your nearest Nike 
              store. Find your perfect size in the store. Happy Shopping!</p>
              <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((item) => (
                  <div key={item.alt} className="flex justify-center items-center 
                  w-12 h-12 bg-white rounded-full">
                    <img
                    src={item.src}
                    alt={item.src}
                    width={24}
                    height={24}
                    />
                  </div>
                ))}
              </div>
          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((item) => (
              <div key={item}>
                  <h4 className="text-white text-2xl leading-normal mb-6">{item.title}</h4>
                  <ul>
                    {item.links.map((list, i) => (
                      <li key={i} className="leading-normal text-white-400 mt-3
                      text-base hover:text-slate-gray cursor-pointer">
                        <a href="">{list.name}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
                <img
                src={copyrightSign}
                alt="ocpyright-sign"
                width={20}
                height={20}
                className="rounded-full m-0"/>

                <p>All rights reserved</p>
            </div>      
            <p className="font-monserrat cursor-pointer">Terms and Conditions</p>    
      </div>
    </footer>
  )
}

export default Footer