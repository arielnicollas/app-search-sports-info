
import { useState } from "react"
import Action from "./Action"
import Search from "./Search"
import Card from "./Card";

export default function EnvelopedComponent() {

    // Armazenamento de estado.
    const [inputValue, setValue] = useState('');
    const [finalInput, setFinal] = useState('');

    // Função para manipular e atualizar o valor do estado.
    const manipulationValue = (value: string) => {
        return setValue(value)
    }

    // // Função para gerenciar a ação do botão
    // const postClick = () => {
    //     console.log("Valor Enviado: ", inputValue)
    // }

    //Função que atualiza o estado do botão.

    const handleButtonClick = () => {
       setFinal(inputValue)
    }

    return (
        <div>
            <Search value={inputValue} onInputChange={manipulationValue}></Search>
            <Action onButtonClick={handleButtonClick}></Action>
            <Card value={finalInput}></Card>
        </div>
    )
}