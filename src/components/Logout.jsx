function Logout ({
    handleLogout
}) {
    return(
        <form className="container-fluid ">
            <div className="nav float-end">
            <button className="btn btn-outline-secondary" type="button" id="logoutBtn" onClick={handleLogout}>登出系統</button>
            </div>
        </form>
    )
}

export default Logout