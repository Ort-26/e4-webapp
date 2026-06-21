import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../app/router/AppRoutes";
import { ticketServices } from "../../../core/services/TicketsService";
import type { CreateTicketRequest } from "../../../models/ticket.models";

interface CreateTicketFormState {
  title: string;
  description: string;
}

const initialFormState: CreateTicketFormState = {
  title: "",
  description: ""
};

export default function CreateTicketPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<CreateTicketFormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage(null);

    if (!form.title.trim()) {
      setErrorMessage("El título del ticket es obligatorio.");
      return;
    }

    if (!form.description.trim()) {
      setErrorMessage("La descripción del ticket es obligatoria.");
      return;
    }

    setLoading(true);
    const payload: CreateTicketRequest = {
      ticketTitle: form.title.trim(),
      ticketDesc: form.description.trim()
    };
    try {
      const response = await ticketServices.createTicket(payload);
      navigate(`${AppRoutes.TICKETS.LIST}/${response.ticketId}`);
    } catch (error) {
      console.error("Create ticket error:", error);
      setErrorMessage("No fue posible crear el ticket. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(AppRoutes.TICKETS.LIST);
  };

  return (
    <main className="py-5">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7">
            
            <div className="mb-4">
              <p className="text-uppercase small mb-1 fw-bold tracking-wider" style={{ color: "#38bdf8" }}>
                E4-Support Desk
              </p>
              <h1 className="h3 fw-bold mb-2 text-white">Crear nuevo ticket</h1>
              <p className="text-muted-custom mb-0">
                Describe el problema o solicitud para que el equipo de soporte pueda atenderlo.
              </p>
            </div>

            <div className="p-4 p-md-5 shadow-lg">
              {errorMessage && (
                <div className="alert alert-danger bg-danger-subtle border-danger text-danger-emphasis py-2.5 mb-4" role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                
                {/* Input de Título */}
                <div className="mb-4">
                  <label htmlFor="title" className="form-label fw-semibold text-white small">
                    Título
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control form-control-lg custom-input"
                    placeholder="Ej. No puedo iniciar sesión"
                    value={form.title}
                    onChange={handleChange}
                    disabled={loading}
                    maxLength={120}
                  />
                  <div className="form-text text-muted-custom mt-2 small">
                    Usa un título corto y claro.
                  </div>
                </div>

                {/* Textarea de Descripción */}
                <div className="mb-4">
                  <label htmlFor="description" className="form-label fw-semibold text-white small">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control custom-input"
                    placeholder="Describe qué ocurre, cuándo comenzó y cualquier detalle relevante."
                    value={form.description}
                    onChange={handleChange}
                    disabled={loading}
                    rows={6}
                    maxLength={1000}
                  />
                  <div className="form-text text-muted-custom mt-2 small">
                    Incluye pasos para reproducir el problema si aplica.
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="d-flex justify-content-end gap-2 border-top border-secondary-subtle pt-4" style={{ borderColor: "rgba(255,255,255,0.06) !important" }}>
                  <button
                    type="button"
                    className="btn btn-outline-light px-4 py-2"
                    onClick={handleCancel}
                    disabled={loading}
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-semibold"
                    disabled={loading}
                    style={{ borderRadius: "0.5rem" }}
                  >
                    {loading ? "Creando..." : "Crear ticket"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}