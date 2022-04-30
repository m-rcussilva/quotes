import "./SignInForm.css";

const SignInForm = ({ toggleModal }) => {
    return (
        <div className="SignInForm-overlay">
            <form className="SignInForm">
                <div className="SignInForm-control">
                    <label className="label">Email</label>
                    <input type="email" className="input" />
                </div>

                <div className="SignInForm-control">
                    <label className="label">Senha</label>
                    <input type="password" className="input" />
                </div>

                <div className="SignInForm-container-btn">
                    <button className="SignInForm-btn">Log In</button>
                </div>

                <button
                    className="SignInForm-close-modal"
                    onClick={() => toggleModal(false)}
                >
                    X
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
