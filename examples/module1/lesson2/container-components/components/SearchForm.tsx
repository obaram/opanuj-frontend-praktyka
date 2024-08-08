import {SearchInput} from "./SearchInput.tsx";
import {SearchSelect} from "./SearchSelect.tsx";

type SearchFormProps = {
  name: string;
  gender: string;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  onNameChange: (name: string) => void;
  onGenderChange: (name: string) => void;
};

const GENDER_OPTIONS = [
  {label: "Any Gender", value: ""},
  {label: "Female", value: "female"},
  {label: "Male", value: "male"},
  {label: "Genderless", value: "genderless"},
  {label: "Unknown", value: "unknown"},
]

const SORT_OPTIONS = [
  {label: "initial", value: ""},
  {label: "name", value: "Name"},
  {label: "created", value: "Created Date"},
]

function SearchForm({
  name,
  onNameChange,
  onGenderChange,
  gender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchInput onChange={onNameChange} value={name}/>
      <SearchSelect label="Gender" value={gender} options={GENDER_OPTIONS} onChange={onGenderChange}/>
      <SearchSelect label="Sort by" value={sortOption} options={SORT_OPTIONS} onChange={setSortOption}/>
    </form>
  );
}

export default SearchForm;
