import "./login.css";
import { useRef, useState } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../firebase/firebase-config";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value).then((user) => {
        localStorage.setItem("usuario", user.uid);
      });
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }

  return (
    <div className="login-section animate__animated animate__fadeIn">
      <h3 className="login-h3">
        Si no eres el administrador de esta web, por favor vuelve al inicio.
      </h3>
      <div className="form-div-login">
        <form className="form-login" onSubmit={handleSubmit}>
          {error && <p variant="danger">{error}</p>}
          <input
            type="email"
            placeholder="email@email.com"
            id="email"
            name="email"
            ref={emailRef}
            className="login-input"
          />
          <input
            ref={passwordRef}
            required
            type="password"
            placeholder="*******"
            name="password"
            className="login-input"
          />
          <button className="btn-login" type="submit" disabled={loading}>
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
};
