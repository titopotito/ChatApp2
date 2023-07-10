function Home() {
    const sectionStyle = { maxWidth: "360px" };
    return (
        <section style={sectionStyle}>
            <Navbar />
            <ActiveUserList />
            <ChatList />
        </section>
    );
}

function ActiveUserList() {
    const sectionStyle = { margin: "0.5rem" };
    const pStyle = { margin: "0.5rem 0" };
    const divStyle = {
        display: "flex",
        flexDirection: "flex-start",
        gap: "1rem",
        overflowX: "scroll",
        padding: "0 0 0.5rem 0",
    };

    return (
        <section style={sectionStyle}>
            <p style={pStyle}>Active Now</p>
            <div style={divStyle}>
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
            </div>
        </section>
    );
}

function Navbar() {
    const sectionStyle = {
        display: "flex",
        justifyContent: "space-even",
    };
    const buttonStyle = {
        flexGrow: "1",
        borderRadius: "0",
        padding: "1rem",
    };

    return (
        <section style={sectionStyle}>
            <button style={buttonStyle}>Messages</button>
            <button style={buttonStyle}>Search</button>
            <button style={buttonStyle}>Settings</button>
        </section>
    );
}

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

function ChatList() {
    const aStyle = { display: "flex", gap: "1rem", padding: "0.7rem 1rem" };

    const div2Style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexGrow: "1",
    };
    const div3Style = { display: "flex", justifyContent: "space-between", width: "100%" };

    return (
        <section>
            <ul>
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Home;
