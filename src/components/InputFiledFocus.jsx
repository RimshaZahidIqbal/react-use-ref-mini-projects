import React, { useRef } from 'react';
import { GiClick } from "react-icons/gi";

function InputFiledFocus() {
    const refFocus = useRef(null);

    const handleClick = () => {
        refFocus.current.focus();
    };

    return (
        <div className="bg-radial-[at_50%_75%] from-sky-300 via-blue-300 to-blue-500 to-90% flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] px-4">
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center w-full max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Input Focus & Mirror
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <input
                        type="text"
                        ref={refFocus}
                        placeholder="Type here..."
                        className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm transition-all w-full md:w-auto"
                    />
                    <button
                        onClick={handleClick}
                        className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 justify-center"
                    >
                        Start Typing <GiClick size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputFiledFocus;
