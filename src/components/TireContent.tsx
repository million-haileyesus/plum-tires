function TireContent() {
    const tires = ["185-65R15", "195-65R15", "205-55R16", "205-65R16", "215-55ZR17", "215-65R17", "225-65R17", "235-65R18", "245-45ZR17", "245-45ZR18"];

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-4 text-3xl font-semibold text-black md:text-4xl lg:text-5xl font-[Poppins Extra Light]">
                    Tires For All
                </h1>
                <p className="mt-4 text-shadow-black text-xl font-normal font-[Poppins Extra Light]">
                    Explore our extensive range of tires that suit every budget and need, <br />
                    ensuring safety on the road.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 p-8 justify-items-center bg-inherit">
                {tires.map((tire) => (
                    <div key={tire} className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer group">
                        <img src={`./Tires/${tire}.jpg`} className="w-50 h-60 object-contain transition-all duration-300" alt={tire}/>
                        <p className="mt-4 text-[32px] font-bold text-center uppercase transition-colors duration-300 group-hover:text-[#8C3e90] font-[Poppins Extra Light]">
                            {tire.replace("-", "/")}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TireContent;