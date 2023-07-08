import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [testdata, setTestdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setTestdata(data);
                console.log(testdata);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <div>
                <h1>TESTING FRONTEND</h1>
                <ul>
                    {testdata.map((data) => (
                        <li>
                            text: {data.text}, number: {data.number}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
