import { useDispatch, useSelector } from "react-redux";
import { fieldAction } from "../../store/fields/fields.reducer";

export const InputBar = ({ field, id }: { field: string; id: number }) => {
    const currentValue = useSelector<any, any>((state) => state.fields)[field];
    const dispatch = useDispatch();
    const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
        const payload: { [char: string]: any } = {};
        payload[field] = target.value;

        dispatch({
            type: fieldAction.UPDATE_CURRENT_STATE,
            payload,
        });
    };

    return (
        <div className="col d-grid text-start" key={id}>
            <p className="lead">{field}</p>
            <textarea value={currentValue} onChange={onChange}></textarea>
        </div>
    );
};
