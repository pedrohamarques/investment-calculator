import { Header } from "@components/header";
import { UserInput } from "@components/user-input";

import { useApp } from "./App.hook";

function App() {
    const { handleChange, userInput } = useApp();

    return (
        <>
            <Header />
            <UserInput handleChange={handleChange} data={userInput} />
        </>
    );
}

export default App;
