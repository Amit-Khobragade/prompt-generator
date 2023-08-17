import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const Results = () => {
    const param = useParams();
    const id = parseInt(param.id ?? "-1");
    const [results, updateResults] = useState("");
    const currentValue = useSelector<any, any>((state) => state.fields);

    useEffect(() => {
        fetch(`/prompt/${id}`, {
            method: "post",
            body: JSON.stringify(currentValue),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.text())
            .then(updateResults);
    }, []);

    return <textarea cols={150} rows={30} value={results}></textarea>;
};
