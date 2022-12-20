import React from 'react'

interface IAppProps {
  children: React.ReactNode,
}

const App: React.FC<IAppProps> = ({
  children
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default App
