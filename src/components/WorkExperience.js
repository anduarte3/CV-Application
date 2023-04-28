
function WorkExperience(props) {

    return (
        <div>
            <h1>Work Experience</h1>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Job Location"
                        />
                    <input
                        type="text"
                        name="role"
                        placeholder="Job Role"
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
export default WorkExperience


//Work experience

//job location
//job role
//date join
//date end (or present)
