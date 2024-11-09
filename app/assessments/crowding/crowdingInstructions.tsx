

const CrowdingTestInstructions: React.FC = () => {
    return (
        <div className="m-10 text-center justify-between p-8">
            <h1 className='text-3xl font-bold text-gray-700 md:text-4xl p-6'>
                Calibration Instructions
            </h1>
            <p className="text-pink-pony-club">This page is under construction.
                Please check back later for more details 🩷</p>
            <p className="my-1">To calibrate the test, you need to measure the length of the line on
                your screen in cm. Use the following table to map it to the correct
                viewing distances, for the Corvist Crowding test. </p>

            <div className="w-[3cm] lg:w-[5cm] xl:w-[10cm] h-2 bg-pink-pony-club border-gray-500 m-5"></div>

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
        </div>
    )
}

export { CrowdingTestInstructions };