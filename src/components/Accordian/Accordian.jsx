import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(selected);
        console.log(getCurrentId);

        setSelected(selected === getCurrentId ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMutiple = [...multiple];
        const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId);

        findIndexOfCurrentId === -1
            ? copyMutiple.push(getCurrentId)
            : copyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMutiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <ul className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <li onClick={enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} key={dataItem.id} className="item">
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content ">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="content ">{dataItem.answer}</div>
                                )}
                        </li>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </ul>
        </div>
    );
}