import * as React from 'react'

type ProviderProps = { children: React.ReactNode }

const GlobalContext = React.createContext<
  | {
      preferences: {}
      setPreferences: React.Dispatch<React.SetStateAction<{}>>
    }
  | undefined
>(undefined)

const GlobalContextProvider = ({ children }: ProviderProps) => {
  const [preferences, setPreferences] = React.useState({})
  const value = { preferences, setPreferences }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

function useGlobalContext() {
  const context = React.useContext(GlobalContext)
  if (context === undefined) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    )
  }
  return context
}

export { GlobalContextProvider, useGlobalContext }
