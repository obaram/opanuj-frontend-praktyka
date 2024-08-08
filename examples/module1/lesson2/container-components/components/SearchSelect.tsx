import {Option} from "../types/Option.ts";

export type SearchSelectProps = {
    label: string
    value: string;
    options: Option[];
    onChange: (option: string) => void
}

export function SearchSelect({label, value, options, onChange}: SearchSelectProps) {
    return <label className="flex flex-col">
        {label}
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border h-7 mt-1"
        >{
            options.map((option) =>  <option value={option.value}>{option.label}</option> )
        }
        </select>
    </label>
}