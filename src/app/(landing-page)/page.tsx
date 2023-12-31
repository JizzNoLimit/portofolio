import Image from "next/image";
import hero from '@/assets/hero-ai.png'
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <div id="#" className="flex items-center w-full h-full min-h-[calc(100vh-94px)]">
        <div className='flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6 w-full h-full max-w-[1180px] mx-auto px-6 lg:px-10 xl:px-0'>
          <div className='lg:flex-[60%] xl:flex-[64%] w-full text-center lg:text-left'>
            <h3 className="text-xl lg:text-4xl xl:text-5xl">Hello, <span className="text-tertiary-text dark:text-tertiary-text-dark">Im</span></h3>
            <h1 className='leading-normal uppercase lg:normal-case text-tertiary-text dark:text-tertiary-text-dark'>Muhammad Ajiz Alfarizi</h1>
            <h3 className='pt-2 lg:pt-1 lg:leading-normal xl:leading-normal'>Fullstack Web Developer</h3>
            <p className='pt-1 w-[94%] mx-auto lg:mx-0 lg:w-[70%] xl:w-[64%] lg:text-lg'>A fresh graduate with expertise in web development, enthusiastic about exploring and innovating in the digital world.</p>
          </div>
          <div className='relative lg:flex-[40%] xl:flex-[36%] flex justify-center w-full'>
            <div className="relative w-full h-full flex justify-center z-10">
              <Image 
                src={hero} 
                width={323} 
                height={464}
                className="relative w-[80%] lg:w-[76%] xl:h-full xl:scale-110 xl:bottom-6" 
                alt="gambar jizznolimit"
              />
            </div>
            <div className="absolute inset-0 m-auto w-52 h-52 lg:w-[334px] lg:h-[334px] bg-[rgba(189,230,251,1)] dark:bg-[rgba(23,16,17,1)] blur-[100px] rounded-full z-0"></div>
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[84%] h-[380px] lg:w-[322px] xl:w-[383px] lg:h-[395px] xl:h-[435px] bg-tertiary-text dark:bg-secondary-bg-dark rounded-2xl z-0"></div>
          </div>
        </div>
      </div>
      {/* Akhir Hero */}

      {/* About Me */}
      <div id="about" className="relative w-full h-full pt-24 pb-10 lg:pt-32 lg:pb-10">
        <div className="relative w-full h-full max-w-[1180px] mx-auto px-6 lg:px-10 xl:px-0 overflow-hidden">
          <div className="relative w-full lg:h-[380px] xl:h-[436px] px-8 pt-10 pb-16 lg:pb-0 lg:px-16 lg:py-10 text-center bg-secondary-bg dark:bg-secondary-bg-dark rounded-2xl xl:rounded-3xl overflow-hidden z-10">
            <div className="absolute -left-[110px] -bottom-[140px] lg:-left-[250px] lg:-bottom-[340px] w-[400px] h-[400px] lg:w-[800px] lg:h-[600px] bg-[#ffeafd] dark:bg-[#293a41] rounded-[100%] z-0"></div>
            <div className="absolute -right-[50px] -top-[50px] lg:-right-[100px] lg:-top-[100px] w-[160px] lg:w-[300px] h-[160px] lg:h-[300px] bg-[#ffeafd] dark:bg-[#293a41] rounded-[100%] z-0"></div>
            <h2 className="relative">About Me<span className="text-tertiary-text text-4xl lg:text-6xl">.</span></h2>
            <p className="relative mt-2 leading-relaxed lg:leading-loose text-center ">I am Muhammad Ajiz Alfarizi, a fresh graduate with an Associate&#96;s Degree in Informatics Management. As someone who is always curious, I am always ready to expand my knowledge in the world of technology.<br/>My primary expertise lies in web development, where I have mastered various programming languages, frameworks, and related technologies. I believe that web technology is a powerful medium for changing the world, and I am enthusiastic about continuing to contribute to innovation and advancement in this field.</p>
          </div>
        </div>
        <div className="absolute inset-0 m-auto w-[300px] h-[300px] lg:w-[500px] lg:h-[200px] bg-[#bde6fb] dark:bg-[#222a2f] rounded-[100%] blur-[90px] lg:blur-[130px] z-0"></div>
      </div>
      {/* Akhir About Me */}

      {/* Project */}
      <div id="project" className="relative w-full h-full py-5 lg:py-20">
        <div className="relative w-full h-full max-w-[1180px] mx-auto px-6 lg:px-10 xl:px-0 text-center">
          <h2>Project<span className="text-tertiary-text text-4xl lg:text-6xl">.</span></h2>
          <p className="mt-2 lg:mt-4 mb-8 lg:mb-12">A Collection Of Projects That Showcase My Skills<br className="hidden lg:block"/>And Expertise.</p>
          <ProjectSlider />
        </div>
      </div>
      {/* Akhir Project */}
    </main>
  )
}
