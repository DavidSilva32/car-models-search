interface LoadingProps {
    message?: string; // A mensagem é opcional
  }
  
  const Loading: React.FC<LoadingProps> = ({ message = "Loading models..." }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 animate-spin"></div>
          <p className="text-xl font-semibold">{message}</p>
        </div>
      </div>
    );
  };
  
  export default Loading;