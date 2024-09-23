interface ActionProps {
    onButtonClick: () => void;
}

export default function Action({ onButtonClick }: ActionProps) {
    return (
        <>
            <button onClick={onButtonClick}>Pesquisar</button>
        </>
    )
}