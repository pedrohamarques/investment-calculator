import { useState } from "react";

const initialUserInput = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
};

export function useApp() {
    const [userInput, setUserInput] = useState(initialUserInput);

    function handleChange(inputId: string, newValue: string) {
        setUserInput(previousUserInput => ({
            ...previousUserInput,
            [inputId]: Number(newValue),
        }));
    }

    return { userInput, handleChange };
}
