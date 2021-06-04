interface CalculatorProps {
    answer: number;
    input: number;
    operator: string;
}

const Calculator = ({answer, input, operator}: CalculatorProps) => {
    return (
        <div>
            <h1>Answer : {answer}</h1>
            <h3>Input: {input}</h3>
            <h3>Operator: {operator}</h3>            
        </div>
    );
};

export default Calculator