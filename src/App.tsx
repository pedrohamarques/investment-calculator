import { Header } from "@components/header";
import { UserInput } from "@components/user-input";

import { useApp } from "./App.hook";
import { Results } from "@components/results";

function App() {
    const { handleChange, userInput, inputIsValid } = useApp();

    return (
        <>
            <Header />
            <UserInput onChange={handleChange} data={userInput} />
            {inputIsValid ? (
                <Results input={userInput} />
            ) : (
                <p className='center'>
                    Please enter a duration greater than zero.
                </p>
            )}
        </>
    );
}

export default App;
