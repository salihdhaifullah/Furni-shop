const Companies = () => {
    const companiesLogos = [
        "./icon/Microsoft.svg",
        "./icon/Mashable.svg",
        "./icon/Fortune.svg",
        "./icon/Entrepreneur.svg",
        "./icon/Business web.svg"
    ];

    return (
        <div className="bg-gray-100 py-8 text-center w-full px-8 sm:px-12 md:px-20 lg:px-28">
            <h2 className="lg:text-lg sm:text-base text-sm mb-8 font-bold">TRUSTED BY OVER 1K+ COMPANIES</h2>
            <div className="flex justify-between items-center">
                {companiesLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={logo} className="lg:h-6 md:h-4 sm:h-3 h-[10px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies
