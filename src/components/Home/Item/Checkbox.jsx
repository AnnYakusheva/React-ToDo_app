import React from 'react';
import {FaCheck} from 'react-icons/fa'

function Checkbox({isComplited}) {
    return (
        <div className={`border-2 rounded-md border-pink-400 ${isComplited ? 'bg-pink-400' : ''} w-7 h-7 mr-3 flex items-center justify-center`}>
            {isComplited && <FaCheck size={24} className='text-gray-900' />}
        </div>
    );
}

export default Checkbox;