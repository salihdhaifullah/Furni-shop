const Hero = () => {
    return (
        <div id="home" className="flex w-full mt-14 sm:px-12 md:px-20 lg:px-28">
            <div className="w-[25%] relative items-center justify-center md:flex hidden">
                
                <div className="w-full flex justify-center items-start h-full">
                    <div className="grid grid-rows-8 grid-cols-7 gap-2 z-10 lg:mt-[5vh] mt-[2vh]">
                        {Array.from({ length: 56 }).map((_, i) => (
                            <div key={i} className="h-[3px] w-[3px] bg-black rounded-full"></div>
                        ))}
                    </div>
                </div>

                <div className="xl:h-[500px] xl:w-[500px] lg:h-[400px] lg:w-[400px] w-[300px] h-[250px] lg:top-auto top-[20%] gap-4 lg:gap-16 absolute left-0  bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-20 rounded-sm flex flex-col justify-center items-center">
                    <h2 className="title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">We Help You Make Modern Interior</h2>
                    <p className="text-base text-gray-600">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
                </div>
            </div>

            <div className="md:w-[75%] md:static relative w-full flex ">
                <img src="./images/hero.png" className="w-full" />

                <div className="w-[50vw] h-[50vw] md:hidden absolute inset-0 p-2 text-center m-auto bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-20 rounded-sm flex flex-col justify-center items-center gap-2">
                    <h2 className="title-font text-2xl sm:text-4xl lg:text-5xl font-bold text-primary">We Help You Make Modern Interior</h2>
                    <p className="sm:text-sm text-xs text-gray-600">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero