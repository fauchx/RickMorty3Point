import url from '../utils/utils';

export const fetchCharacters = async () => {
    const response = await fetch(`${url}/character`);
    const data = await response.json();
    return data;
};

export const fetchSingleCharacter = async (name) => {
    const response = await fetch(`${url}/character/?name=${encodeURIComponent(name)}`)
    const data = await response.json();
    return data;
};