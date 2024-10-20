import React from 'react'


const Card = () => {
    const steps = [
        {
            number: '01',
            title: 'Research and Analysis',
            description: "After the briefing, WhatBytes researches the client's industry, audience, competitors, and market trends to build a strong strategy."
        },
        {
            number: '02',
            title: 'Strategy Development',
            description: 'Strategy development involves creating a detailed plan to achieve goals by analyzing factors, setting priorities, and focusing on deliverables.'
        },
        {
            number: '03',
            title: 'Delivery and Implementation',
            description: 'Delivery and implementation turn strategies into actionable outcomes by mobilizing teams and ensuring efficient, timely execution aligned with objectives.'
        }
    ];

    return (
        <div className="text-white p-5 w-full" style={{ backgroundColor: 'rgb(5, 6, 26)' }}>
            <div className="max-w-4xl  mx-auto flex flex-col items-center justify-center">
                <div>
                    <h2 className="font-custom2 font-bold text-[40px] lg:text-[50px] px-5 w-full" style={{ color: `rgb(253, 253, 253)` }}>How do we do it?</h2>
                    <p className=" font-custom3 text-[17px] lg:text-[20px] px-5 w-full -mt-2" style={{ color: `rgb(253, 253, 253)` }}>
                        We have a procedure of three simple steps
                    </p>
                </div>

                <div className="flex gap-5 md:gap-[25px] lg:gap-[25px] flex-col lg:mt-1 mt-7 md:flex-row px-2 lg:p-8 md:p-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-3xl py-[50px] pl-[20px] lg:pl-[40px] pr-[40px] border-[50%] shadow-lg flex-1 lg:w-[400px] hover:scale-110 transition-all duration-500"
                            style={{ backgroundColor: 'rgba(110, 111, 122, 0.2)' }}
                        >

                            <div className=" bg-clip-text  text-transparent bg-gradient-to-r from-gray-500 to-white font-custom2 font-bold mb-4 text-6xl">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-[20px] lg:text-[24px] font-custom3 mb-2 bg-clip-text font-bold text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
                                    {step.title}
                                </h3>
                                <p className="text-sm lg:text-md font-normal  text-gray-300"
                                    style={{ color: 'rgb(153, 153, 161)' }}
                                >
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card