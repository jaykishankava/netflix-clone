// import React from 'react'
// import "./Footer.css"
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// function Footer() {
//   return (
//     <div>
//         <div className="cotainer-fluid">
//             <div className="row">
//                 <div className="col-lg-12">
//                     <footer>
//                         <div className="col-lg-4 pt-5 ps-5 pb-5">
//                             <div className="logo">
//                                 <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" /><br />
//                                <div className="ps-4">
//                                <span>Eiusmod tempor incididunt ut la <br /> abore et minim ven exerc itation <br /> ulla mco lboris naliquip comm.</span><br />
//                               <div className="mt-2">
//                               <a href="#"><FaFacebookF /></a>
//                                <a href="#"><FaTwitter /></a>
//                                <a href="#"><FaLinkedinIn /></a>
//                                <a href="#"><RiInstagramFill />
//                                </a>
//                               </div>
//                                </div>
//                             </div>        
//                         </div>
//                      <div className="image-3 col-lg-8">   
                        
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                         <span>
//                             <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
//                         </span>
//                      </div>
//                     </footer>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="bg container-fluid">
                <div className="row">
                    <div className="col-gl-12 m-3 mt-5 mb-5 d-flex flex-wrap">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="logo">
                            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" style={{ width: "200px", height: "60px" }} />
                            </div>
                            <div className="image-conten">
                                <p>Eiusmod tempor incididunt ut la <br /> abore et minim ven exerc itation <br /> ulla mco lboris naliquip comm.</p>
                               
                                <h3>
                                    <i> <RiMailSendLine /></i> Neteflix@email.com
                                </h3>
                            </div>
                        </div>
                       
                        <div className="Subscribe col-lg-4">
                            <h3 style={{color:'#fff'}}>Subscribe Our Newsletter</h3>
                            <input type="text" className='form-control' placeholder='search here...' />
                            <div className="arrow">
                                <BsFillSendArrowUpFill />
                            </div>
                            <div className="icon d-flex">

                                <p className='me-3 mt-4 '>
                                    <FaFacebookF />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaXTwitter />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaDribbble />
                                </p>
                                <p className='me-3 mt-4 '>
                                    <FaInstagram />

                                </p>

                            </div>
                            <div className="logo d-flex">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/1.png" alt="" />
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/2.png" alt="" />
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/6.png" alt="" />
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/3.png" alt="" />
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/brand/4.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer