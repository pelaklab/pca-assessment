import React from 'react';

const InstructionsPage: React.FC = () => {
    return (
        <main className="flex h-full flex-col items-start justify-between p-24 w-3/5">
            <h1 className="my-4 text-lg text-gray-500">Instructions</h1>
            <p className="text-pink-pony-club">This page is under construction.
                Please check back later for more details 🩷</p>

            <h3 className="my-4 text-base text-gray-500">Calibration</h3>
            <p className="my-1">To calibrate the test, you need to measure the length of the line on 
                your screen in cm. Use the following table to map it to the correct 
                viewing distances, for the Corvist Crowding test. </p>

            <div className="w-[3cm] sm:w-[3.5cm] lg:w-[5cm] xl:w-[10cm] h-2 bg-pink-pony-club border-gray-500 m-5"></div>

            <div className="overflow-x-auto mt-5 mr-5">
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2">Length of line on your screen (cm)</th>
                            <th className="border border-gray-400 p-2">Correct viewing distance (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 p-2">3</td>
                            <td className="border border-gray-400 p-2">180</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 p-2">3.5</td>
                            <td className="border border-gray-400 p-2">210</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 p-2">5</td>
                            <td className="border border-gray-400 p-2">300</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 p-2">10</td>
                            <td className="border border-gray-400 p-2">600</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </main>
    );
};

export default InstructionsPage;