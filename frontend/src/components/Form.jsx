import CookieHandler from "../js/cookieHandler.js";

function Form(props) {
    const { onSubmit, children } = props;
    return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
