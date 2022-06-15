import man from "../../asset/images/man.png"
import wamen from "../../asset/images/wamen.png"

const Pepole = () => {
    return (
        <>
            <div className="flex absolute z-[332425] rounded-[40px] min-w-[400px] top-[200px] drop-shadow-lg bg-white px-4 py-3">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex">
                        <img src={wamen} alt="wamen" className="rounded-full object-contain min-w-[42px] min-h-[42px] " />
                        <div className="flex flex-col h-full flex-wrap w-full text-center items-center justify-center">
                            <h2 className="font-semibold text-lg">
                                Angela Taylor
                            </h2>
                            <p className="text-[#8593A3] font-light text-sm">
                                Completed task
                            </p>
                        </div>

                    </div>


                    <div className="flex justify-center items-center mr-3 text-[#27BB7B]">
                        <p>12:54pm today</p>
                    </div>


                </div>
            </div>
            <div className="flex absolute z-[332425] rounded-[40px] min-w-[350px] top-[300px] drop-shadow-lg bg-white px-4 py-3">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex">
                        <img src={man} alt="man" className="rounded-full object-contain min-w-[42px] min-h-[42px] " />
                        <div className="flex flex-col h-full flex-wrap w-full text-center items-center justify-center">
                            <h2 className="font-semibold text-lg">
                                AR Shakir
                            </h2>
                            <p className="text-[#8593A3] font-light text-sm">
                                Task Delayed
                            </p>
                        </div>


                    </div>

                    <div className="flex justify-center items-center mr-3 text-[#FF6954]">
                        <p>For 3 days</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pepole