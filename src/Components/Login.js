import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    return (
        <body>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 ">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div
                                    class="row justify-content-center"
                                    style={{
                                        background:
                                            "url(https://mcdn.wallpapersafari.com/medium/11/34/CjRMDs.jpg)",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: "100vh",
                                    }}
                                >
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-100 mb-4">Welcome Back!</h1>
                                            </div>
                                            <div class="text-center">
                                                <h1 class="h3 text-gray-100 mb-4">
                                                    Library Management
                                                </h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-user"
                                                        placeholder="Enter Your Name"
                                                        style={{ marginBottom: "5px" }}
                                                    />
                                                    <br></br>
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        type="password"
                                                        class="form-control form-control-user"
                                                        placeholder="Password"
                                                        style={{ marginBottom: "5px" }}
                                                    />
                                                </div>
                                                <Link to="/portal/dashboard">
                                                    <Button
                                                        size="sm"
                                                        variant="primary"
                                                        style={{ marginLeft: "10rem" }}
                                                    >
                                                        Login
                                                    </Button>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;
