function FormGroup(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} />
        </div>
    );
}

export default FormGroup;
