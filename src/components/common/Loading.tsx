interface LoadingProps {
    children: React.ReactNode
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  return (
    <>
      <div className="loading">
        {children}
      </div>
    </>
  )
}

export default Loading
