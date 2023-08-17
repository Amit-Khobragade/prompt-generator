import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const PromptButton = ({
    prompt,
    id,
}: {
    prompt: string;
    id: number;
}) => {
    const navigate = useNavigate();

    return (
        <Button
            variant="outline-secondary"
            className="row-2 text-truncate"
            onClick={() => navigate(`/${id}`)}
        >
            {prompt}
        </Button>
    );
};
