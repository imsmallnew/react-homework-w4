function LoginPage({ 
    account, 
    handleInputChange, 
    handleLogin 
}) {
    return(
        <div className="container-fluid bg-light">
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 className="mb-5">商品管理系統</h1>
                <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                    <div className="form-floating mb-3">
                        <input type="email" name="username" onChange={handleInputChange} className="form-control" id="username" placeholder="" value={account.username}/>
                        <label htmlFor="username">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" onChange={handleInputChange} className="form-control" id="password" placeholder="" value={account.password}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn btn-primary">登入</button>
                </form>
                <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
            </div>
        </div>
    )
}

export default LoginPage
