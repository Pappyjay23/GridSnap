interface ErrorMessageProps {
    message: string
  }
  
  const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
      <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
        <p>{message}</p>
      </div>
    )
  }
  
  export default ErrorMessage
  
  