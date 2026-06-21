interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export const Loading = ({
  message = 'Cargando...',
  fullScreen = false,
}: LoadingProps) => {
  const containerClassName = fullScreen
    ? 'min-vh-100 d-flex justify-content-center align-items-center bg-dark text-light'
    : 'd-flex justify-content-center align-items-center py-5';

  return (
    <div className={containerClassName}>
      <div className="text-center">
        <div
          className="spinner-border mb-3"
          role="status"
          aria-hidden="true"
        />

        <div className="fw-semibold">{message}</div>
      </div>
    </div>
  );
};