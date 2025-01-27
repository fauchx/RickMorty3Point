import React, { useEffect, useState } from 'react';
import { fetchCharacters, fetchSingleCharacter } from '../services/Connection';

function ViewCharacter({ character }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        if (!character) {
            fetchCharacters()
                .then(data => setCharacters(data.results))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            fetchSingleCharacter(character)
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        setCharacters(data.results);
                    } else {
                        setCharacters([]);
                        setError("No results found");
                    }
                })
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        }
    }, [character]); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {characters.length > 0 ? (
                characters.map((char) => (
                <div 
                    key={char.id} 
                    className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white"
                >
                    <h2 className="text-lg font-semibold mb-2">{char.name}</h2>
                    <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-32 h-32 object-cover rounded-full mb-2"
                    />
                    <p className="text-sm text-gray-600">{char.species}</p>
                    <p className={`text-sm font-medium ${char.status === 'Alive' ? 'text-green-500' : 'text-red-500'}`}>
                    {char.status}
                    </p>
                </div>
                ))
            ) : (
                <p className="text-center col-span-full text-2xl font-bold text-gray-500">No characters found</p>
            )}
            </section>

    );
}

export default ViewCharacter;
