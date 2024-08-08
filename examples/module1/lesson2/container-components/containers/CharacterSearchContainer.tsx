import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { Character } from '../types/Character';
import {useCharacters} from "../api/useCharacters.ts";
import {useSortedCharacters} from "../api/useSortedCharacters.ts";

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const [sortOption, setSortOption] = useState('');

  const {characters} = useCharacters(name, gender);
  const sortedCharacters = useSortedCharacters(characters, sortOption);
  
  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Pokemon"/>
      <div className="pt-8" />
      <SearchForm
        name={name}
        onNameChange={setName}
        gender={gender}
        onGenderChange={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
