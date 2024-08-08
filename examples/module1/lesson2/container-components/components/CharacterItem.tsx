type CharacterItemProps = {
    name: string;
    image: string;
}

export function CharacterItem({name, image}: CharacterItemProps) {
    return <li className="flex flex-col items-center">
        <h3>{name}</h3>
        <img src={image} alt={image}/>
    </li>
}