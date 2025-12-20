import { useReducer, createContext, ReactNode, useState, useContext } from 'react'
import { IContext, ISidebar } from 'types'
import GlobalReducer from './GlobalReducer'

interface IGlobalContext {
  sidebarData: ISidebar[]
  version: string
  versionLogo: string
  setSidebarData: (data: ISidebar[]) => void
}

const initialState: IContext = {
  sidebar: false,
  sidebarData: [],
  version: '',
  version_logo: '',
}
const GlobalContext = createContext<IContext>({
  ...initialState,
  version: '',
  version_logo: '',
  openNav: () => {},
  closeNav: () => {},
  toggleNav: () => {},
})

interface GlobalProviderProps {
  children: ReactNode
  initialSidebar: ISidebar[]
  initialVersion: string
  initialLogo: string
}

const GlobalProvider = ({ children, initialSidebar, initialVersion, initialLogo }: GlobalProviderProps) => {
  const [sidebarData, setSidebarData] = useState<ISidebar[]>(initialSidebar)
  const [version] = useState(initialVersion)
  const [versionLogo] = useState(initialLogo)
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  function openNav() {
    dispatch({
      type: 'OPEN_NAV',
    })
  }
  function closeNav() {
    dispatch({
      type: 'CLOSE_NAV',
    })
  }
  function toggleNav() {
    dispatch({
      type: 'TOGGLE_NAV',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebar: state.sidebar,
        sidebarData: sidebarData,
        version: version,
        version_logo: versionLogo,
        openNav,
        closeNav,
        toggleNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider }
