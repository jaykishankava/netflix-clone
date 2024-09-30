import React from 'react'
import Header from '../../Component/Header'
import './Home.css'

import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../../Component/Footer';

function Home() {
  return (
    <div>
        <Header/>
       <section>
       <div className="container-fluid">
            <div className="row">
            <div className="image text-center">
            <div className="col-lg-12 mt-5 mb-5 ">  
                    <h1>Unlimited movies,<br/> TV shows and more</h1> 
                    <h4 className='mt-5'>Starts at ₹149. Cancel at any time.</h4>
                    <span className='mt-3'>Ready to watch? Enter your email to create or restart your membership.</span><br/>
                    <button className='btn mt-4 btn-lg'>Get Started <IoIosArrowDropright style={{fontSize:'30px'}} /></button>
               </div>
                   </div>       
            </div>
        </div>
       </section>
        {/* movies section */}

        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="movies ">
                    <h2 className='ms-3 mt-5 '>Latest Movies</h2>
                    <hr  className='mb-5'/>
                        <div className="col-lg-12 d-flex  mb-3 ">

                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-17.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-02.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-03.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-01.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="movies ">
                    <h2 className='ms-3 mt-5 '>Horror Series</h2>
                    <hr  className='mb-5'/>
                        <div className="col-lg-12 d-flex  mb-3 ">

                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/horror-1.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/horror-2.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-12.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/horror-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="movies ">
                    <h2 className='ms-3 mt-5 '>Old Movies</h2>
                    <hr  className='mb-5'/>
                        <div className="col-lg-12 d-flex  mb-5 ">

                            <div className="photo col-lg-3 ps-3">
                                <img  src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-11.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-09.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-07.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-08.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* pack section start */}
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pack ps-5  pb-5">
                            <h2 >3 in 1 Combo Pack</h2>
                            <span className='span-1'>200TK</span> <span className='span-2 ms-2'><del>350TK</del></span><br/>
                            <button className='btn mt-4 btn-lg'>Watch NOW </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Family movie section */}
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="movies">
                        <h2 className='ms-3 mt-5 '>Watch With Family</h2>
                        <hr  className='mb-5'/>
                        <div className="col-lg-12 d-flex  mb-5 ">

                            <div className="photo col-lg-3 ps-3">
                                <img  src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-14.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-15.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-16.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-17.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* web series section  */}
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="image-2">
                            <img  src="https://htmldemo.net/streamo/streamo/assets/images/slider/series-2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Award Winning Movie section */}
         <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="movies">
                        <h2 className='ms-3 mt-5 '>Award Winning Movie</h2>
                        <hr  className='mb-5'/>
                        <div className="col-lg-12 d-flex  mb-5 ">

                            <div className="photo col-lg-3 ps-3">
                                <img  src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-21.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-22.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-23.jpg" alt="" />
                            </div>
                            <div className="photo col-lg-3 ps-3">
                                <img src="https://htmldemo.net/streamo/streamo/assets/images/product/movie-02.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
  )
}

export default Home