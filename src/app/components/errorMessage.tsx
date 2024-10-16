interface ErrorMessageProps {
    message: string;
  }
  
  const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800">
        <div className="border border-red-400 rounded-lg p-4 bg-white shadow-md">
          <h2 className="font-semibold text-xl">Error</h2>
          <p>{message}</p>
        </div>
      </div>
    );
  };
  
  export default ErrorMessage;