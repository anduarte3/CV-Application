
function Education(props) {

    return (
        <div>
            <h1>Education</h1>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                    <input
                        type="text"
                        name="school"
                        placeholder="School"
                        />
                    <input
                        type="text"
                        name="course"
                        placeholder="Course"
                        />
                    <input
                        type="text"
                        name="start-date"
                        placeholder="Start Date"
                        />
                    <input
                        type="text"
                        name="end-date"
                        placeholder="End Date"
                        />
                    </label>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={props.handleEdit}>Edit</button>
                </form>
            </div>
        </div>
    )
}
export default Education

//Education

//School
//degree curso tecnologico
//subject formacao tecnica em eletroncia e computadores
//Date join
//Date end