import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({target})=>setNewTaskContent(target.value) }
                placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;