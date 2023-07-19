import CookieHandler from "../js/cookieHandler.js";

function Form(props) {
    const { onSubmit, children } = props;

    const csrftoken = CookieHandler.get("csrftoken");

    return (
        <form onSubmit={onSubmit}>
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
            {children}
        </form>
    );
}

export default Form;
