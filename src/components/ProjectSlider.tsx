"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from '@/assets/project-1.svg'
import project2 from '@/assets/project-2.svg'
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const ProjectSlider = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        spaceBetween: 18,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 18,
                        slidesPerView: 2,
                    }
                }}
                style={{paddingBottom: '3rem'}}
            >
                <SwiperSlide 
                    style={{ 
                        display: 'relative', 
                        backgroundColor: 'rgb(255,255,255)', 
                        overflow: 'hidden',
                        borderRadius: '14px',
                        border: 'solid 1px #c1cdee'
                    }}
                    className="group"
                >
                    <div className="w-full h-[200px] lg:h-[320px]">
                        <div className="absolute inset-x-0 -bottom-[120px] mx-auto w-[264px] h-[264px] lg:w-[364px] lg:h-[364px] bg-[#004365] blur-[80px] rounded-full"></div>
                        <div className="absolute -top-[44px] -right-[35px] lg:-top-[64px] w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] bg-[#f6f8f9] rounded-full "></div>
                        <div className="absolute -bottom-[146px] -left-[80px] lg:-bottom-[186px] lg:-left-[110px] w-[275px] h-[275px] lg:w-[375px] lg:h-[375px] bg-[#f6f8f9] rounded-full "></div>
                        <Image 
                            src={project1} 
                            className="relative w-[80%] group-hover:w-[84%] top-10 lg:top-16 group-hover:top-8 mx-auto transition-all duration-500 z-20"
                            width={415}
                            height={268}
                            alt="project 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'relative',
                        backgroundColor: 'rgb(255,255,255)',
                        overflow: 'hidden',
                        borderRadius: '14px',
                        border: 'solid 1px #c1cdee'
                    }}
                    className="group"
                >
                    <div className="w-full h-[200px] lg:h-[320px]">
                        <div className="absolute inset-x-0 -bottom-[120px] mx-auto w-[264px] h-[264px] lg:w-[364px] lg:h-[364px] bg-[#004365] blur-[80px] rounded-full"></div>
                        <div className="absolute -top-[44px] -right-[35px] lg:-top-[64px] w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] bg-[#f6f8f9] rounded-full "></div>
                        <div className="absolute -bottom-[146px] -left-[80px] lg:-bottom-[186px] lg:-left-[110px] w-[275px] h-[275px] lg:w-[375px] lg:h-[375px] bg-[#f6f8f9] rounded-full "></div>
                        <Image
                            src={project2}
                            className="relative w-[80%] group-hover:w-[84%] top-10 lg:top-16 group-hover:top-8 mx-auto transition-all duration-500 z-20"
                            width={415}
                            height={268}
                            alt="project 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'relative',
                        backgroundColor: 'rgb(255,255,255)',
                        overflow: 'hidden',
                        borderRadius: '14px',
                        border: 'solid 1px #c1cdee'
                    }}
                    className="group"
                >
                    <div className="w-full h-[200px] lg:h-[320px]">
                        <div className="absolute inset-x-0 -bottom-[120px] mx-auto w-[264px] h-[264px] lg:w-[364px] lg:h-[364px] bg-[#004365] blur-[80px] rounded-full"></div>
                        <div className="absolute -top-[44px] -right-[35px] lg:-top-[64px] w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] bg-[#f6f8f9] rounded-full "></div>
                        <div className="absolute -bottom-[146px] -left-[80px] lg:-bottom-[186px] lg:-left-[110px] w-[275px] h-[275px] lg:w-[375px] lg:h-[375px] bg-[#f6f8f9] rounded-full "></div>
                        <Image
                            src={project2}
                            className="relative w-[80%] group-hover:w-[84%] top-10 lg:top-16 group-hover:top-8 mx-auto transition-all duration-500 z-20"
                            width={415}
                            height={268}
                            alt="project 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'relative',
                        backgroundColor: 'rgb(255,255,255)',
                        overflow: 'hidden',
                        borderRadius: '14px',
                        border: 'solid 1px #c1cdee'
                    }}
                    className="group"
                >
                    <div className="w-full h-[200px] lg:h-[320px]">
                        <div className="absolute inset-x-0 -bottom-[120px] mx-auto w-[264px] h-[264px] lg:w-[364px] lg:h-[364px] bg-[#004365] blur-[80px] rounded-full"></div>
                        <div className="absolute -top-[44px] -right-[35px] lg:-top-[64px] w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] bg-[#f6f8f9] rounded-full "></div>
                        <div className="absolute -bottom-[146px] -left-[80px] lg:-bottom-[186px] lg:-left-[110px] w-[275px] h-[275px] lg:w-[375px] lg:h-[375px] bg-[#f6f8f9] rounded-full "></div>
                        <Image
                            src={project2}
                            className="relative w-[80%] group-hover:w-[84%] top-10 lg:top-16 group-hover:top-8 mx-auto transition-all duration-500 z-20"
                            width={415}
                            height={268}
                            alt="project 1"
                        />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default ProjectSlider