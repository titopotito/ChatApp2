function ProfileImage() {
    const spanStyle = { position: "relative" };
    const imgStyle = { width: "3rem", borderRadius: "1.5rem" };
    const statusStyle = {
        width: "11px",
        height: "11px",
        backgroundColor: "rgb(0, 192, 0)",
        borderRadius: "9.5px",
        border: "4px solid #242424",
        position: "absolute",
        bottom: "0",
        right: "-0.2rem",
    };

    return (
        <span style={spanStyle}>
            <img src="images/default_user_image.jpg" alt="Profile image of user" style={imgStyle} />
            <div style={statusStyle}></div>
        </span>
    );
}

export default ProfileImage;
