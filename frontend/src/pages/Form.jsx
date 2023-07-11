function Form(props) {
    const { onSubmit, children } = props;

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === name + "=") {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie("csrftoken");

    return (
        <form onSubmit={onSubmit}>
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
            {children}
        </form>
    );
}

export default Form;
