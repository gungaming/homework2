import { useState, useCallback } from "react"
import { useAppContext } from "../Context/AppContext"

const OperatorInput = () => {

    const { plus, minus, multiple, divide } = useAppContext();
    const [operator, setOperator] = useState<string>('');

    return (
        <>
            <button onClick={() => { plus() }}> + </button>
            <button onClick={() => { minus() }}> - </button>
            <br></br>
            <button onClick={() => { multiple() }}> * </button>
            <button onClick={() => { divide() }}> / </button>
        </>
    )
}

export default OperatorInput