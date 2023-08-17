import { InputBar } from "./Input";

export const InputContainers = ({ prompt }: { prompt: string }) => {
    if (!prompt || prompt.length == 0) {
        return;
    }
    let results = prompt
        .split("[")
        .splice(1)
        .map((str) => str.split("]")[0]);

    results = [...new Set(results)];

    return (
        <div className="container">
            <div className="row row-cols-2">
                {results.map((field, id) => (
                    <InputBar field={field} key={id} id={id} />
                ))}
            </div>
        </div>
    );
};
