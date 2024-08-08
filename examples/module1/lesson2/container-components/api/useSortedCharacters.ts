import {useMemo} from "react";
import {Character} from "../types/Character.ts";

export function useSortedCharacters(characters: Character[], sortOption: string){
    return  useMemo(() => [...characters].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
            return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
    }), [characters, sortOption])}
