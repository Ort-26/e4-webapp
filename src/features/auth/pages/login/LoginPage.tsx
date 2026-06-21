import { type SubmitEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InformationSection from "./InformationSection";
import FormSection from "./FormSection";
import { AppRoutes } from "../../../../app/router/AppRoutes";
import { useAuth } from "../../../../core/auth/useAuth";

export function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>, email: string, password: string) => {
        event.preventDefault();
        setErrorMessage(null);
        setLoading(true);
        try {
            await login(email, password);
            navigate(AppRoutes.TICKETS.LIST);
        } catch(error) {
            console.log("Login error:", error);
            setErrorMessage("Credenciales inválidas o sesión no autorizada.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-vh-100 d-flex align-items-center bg-dark">
            <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-10">
                <div className="card border-secondary shadow-lg overflow-hidden custom-container-bg">
                    <div className="row g-0">
                        <InformationSection />
                        <FormSection 
                            handleSubmit={handleSubmit} 
                            errorMessage={errorMessage} 
                            loading={loading} 
                            />
                    </div>
                </div>
                {/* Footer MVP */}
                <p className="text-center text-muted-custom small mt-4">
                    Support Tickets MVP · <span className="text-primary fw-semibold">CREATED</span> → ASSIGNED → IN_PROGRESS → WAITING_FOR_CLIENT → RESOLVED → CLOSED
                </p>
                </div>
            </div>
            </div>
        </main>
    );
}