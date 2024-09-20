interface SearchProps {
    value: string;
    onInputChange: (value: string) => void;
}
export default function Search({ value, onInputChange }: SearchProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement >) => {
        onInputChange(event.target.value)
    }

    return (    
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Digite o nome do clube de Futebol"
            />     
    )
}