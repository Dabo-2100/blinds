export default function Check(props) {
    const handleChange = (event) => {
        console.log(event.target.checked)
    }
    return (
        <div className="content">
            <label className="checkBox">
                <input id="ch1" type="checkbox" onChange={handleChange} defaultChecked={props.isChecked} />
                <div className="transition"></div>
            </label>
        </div>
    )
}
