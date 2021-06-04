import { useAppContext } from "../Context/AppContext"
import { useCallback, useState } from "react"

const CalculatorPad = () => {

    const { plus, minus, multiple, divide } = useAppContext();
    const [input, setInput] = useState<number | string>('');
    const [operator, setOperator] = useState<string>(''); 

    return (
        <div>
            
        </div>
    )
}

export default CalculatorPad