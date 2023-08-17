import { useSelector } from "react-redux";
import { PromptButton } from "../Components/PromptButton/PromptButton";

export const Homepage = () => {
    const state = useSelector<{ prompt: string[] }, string[]>(
        (state) => state.prompt
    );

    return (
        <div className="d-grid gap-2">
            <p className="lead" style={{ justifySelf: "start" }}>
                Prompts:{" "}
            </p>
            {state.map((text, id) => (
                <PromptButton prompt={text} key={id} id={id} />
            ))}
        </div>
    );
};
