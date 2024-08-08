type SearchInputProps = {
    onChange: (value: string) => void
    value: string;
    placeholder?: string;
}

export function SearchInput({onChange, value, placeholder = "Rick Sanchez..."}: SearchInputProps) {
    return <label className="flex flex-col">
        Name
        <input
            className="border h-7 mt-1 indent-2"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </label>
}