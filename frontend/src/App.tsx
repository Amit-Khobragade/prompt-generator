import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { useDispatch } from "react-redux";
import { PromptPage } from "./pages/[id]";
import { useEffect } from "react";
import { promptAction } from "./store/prompt/prompt.reducer";
import { Results } from "./pages/[id]/results";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/prompt")
            .then((res) => res.json())
            .then((body: string[]) => {
                dispatch({
                    type: promptAction.UPDATE_CURRENT_STATE,
                    payload: body ?? [],
                });
            });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:id" element={<PromptPage />} />
                <Route path="/:id/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
