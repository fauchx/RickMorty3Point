import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import ViewCharacter from './ViewCharacter';

function SearchBar() {
    const [character, setCharacter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    
    useEffect(() => {
        const delaySearch = setTimeout(() => {
            setSearchTerm(character);
        }, 500); 

        return () => clearTimeout(delaySearch); 
    }, [character]);

    return (
        <>
            <div className="flex justify-center p-4 w-full">
                <form className='flex items-center w-2/5 border-2 rounded-xl p-2 bg-gray-300'>
                    <button type='button' className='text-black'>
                        <HiOutlineSearch className='mr-2 size-7'/>
                    </button>
                    <input 
                        className="bg-gray-300 text-black w-full outline-none" 
                        type='text' 
                        value={character} 
                        onChange={e => setCharacter(e.target.value)} 
                        placeholder="Search for a character..."
                    />
                </form>
            </div>
            <ViewCharacter character={searchTerm} /> 
        </>
    );
}

export default SearchBar;
