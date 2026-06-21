import { useState } from "react";

export interface FormSectionProps {
    handleSubmit: (event: React.SubmitEvent<HTMLFormElement>, email: string, password: string) => void;
    errorMessage: string | null;
    loading: boolean;
}

export default function FormSection({handleSubmit, errorMessage, loading}: FormSectionProps) {
    const [email, setEmail] = useState("cliente.demo@e4-support.com");
    const [password, setPassword] = useState("");
    
    return (
    <section className="col-12 col-lg-6">
        <div className="p-4 p-md-5">
        <div className="mb-4">
            <h2 className="fw-bold mb-2 text-white">Iniciar sesión</h2>
            <p className="text-muted-custom mb-0">
            Accede con tus credenciales del sistema.
            </p>
        </div>

        {errorMessage && (
            <div className="alert alert-danger bg-danger-subtle border-danger text-danger-emphasis" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {errorMessage}
            </div>
        )}

        <form onSubmit={(event) => handleSubmit(event, email, password)}>
            {/* Input Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label text-white small fw-semibold">
                    Correo electrónico
                </label>
                <input
                    id="email"
                    type="email"
                    className="form-control form-control-lg custom-input"
                    placeholder="usuario@empresa.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                />
            </div>

            {/* Input Password */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label text-white small fw-semibold">
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    className="form-control form-control-lg custom-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                className="btn btn-primary btn-lg w-100 fw-bold py-2"
                disabled={loading}
            >
            {loading ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Validando...
                </>
            ) : ("Entrar al sistema")}
            </button>
        </form>
        <div className="text-center mt-4">
            <small className="text-muted-custom">Acceso exclusivo para usuarios autorizados.</small>
        </div>
        </div>
    </section>
    )
}