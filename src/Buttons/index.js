import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="section__buttons">
        {
            tasks.length > 0 && (
                <>
                    <button
                        onClick={toggleHideDone}
                        className="section__header--button"
                    >{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                    <button 
                    onClick={setAllDone}
                    className="section__header--button"
                        disabled={tasks.every(({ done }) => done)}
                    >Ukończ wszytskie</button>
                </>
            )
        }
    </div>
)
export default Buttons;