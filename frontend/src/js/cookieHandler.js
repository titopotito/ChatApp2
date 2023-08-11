const CookieHandler = {
    get: function (cookieName) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, cookieName.length + 1) === cookieName + "=") {
                    cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    },

    set: function (cookieName, cookieValue) {
        const EXPIRE_DAYS = 7;
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + EXPIRE_DAYS);
        document.cookie =
            cookieName +
            "=" +
            cookieValue +
            ";path=/" +
            (EXPIRE_DAYS == null ? "" : ";expires=" + exdate.toGMTString());
    },

    delete: function (cookieName) {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
};

export default CookieHandler;
