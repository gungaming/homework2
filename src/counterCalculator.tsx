import { useCallback, useEffect, useState, useMemo} from "react"

export const useCounterCalculator = () => {
    const [answer, setAnswer] = useState<number>(0);
    const [input, setInput] = useState<string>('');

    const seeResult = useCallback(
        () => {
            setAnswer(eval(input));
        },
        [input],
    )

    const handleClick = useCallback(
        (e) => {
            setInput((prev : string ) => prev + e.target.value);
            console.log(input)
        },
        [input],
    )

    const resetCalculator = useCallback(
        () => {
            setAnswer(0);
            setInput(" ");
        },
        [],
    )

    useEffect(() => {
        if (input !== '0' && answer !== 0){
            console.log(input)
            console.log(answer)
        }
    }, [input, answer])

    const answerComponent = useMemo (() => {
       return <div>Answer : {answer}</div>
    }, [answer])

    useEffect(() => {
        if (answer || answer === 0) {
            console.log('answer from custom hook ', answer);
        }
    }, [answer])
    
    return { resetCalculator , answerComponent  , seeResult , handleClick , input }
}