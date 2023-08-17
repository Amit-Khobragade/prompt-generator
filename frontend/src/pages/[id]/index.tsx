import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { InputContainers } from "../../Components/InputContainers/InputContainers";
import { Button } from "react-bootstrap";

export const PromptPage = () => {
    const param = useParams();

    const id = parseInt(param.id ?? "-1");

    const prompt = useSelector<{ prompt: string[] }, string>(
        (state) => state.prompt[id]
    );

    const navigate = useNavigate();

    return (
        <div className="d-grid gap-4">
            <h5 className="text-start">{prompt}</h5>
            <InputContainers prompt={prompt} />
            <div className="d-flex justify-content-between pt-2">
                <Button
                    variant="outline-secondary"
                    className="row-2 text-truncate"
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                <Button
                    variant="secondary"
                    className="row-2 text-truncate"
                    onClick={() => navigate(`/${id}/results`)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
