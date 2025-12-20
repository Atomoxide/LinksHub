import { useReducer, createContext, ReactNode, useState, useContext } from 'react'
import { IContext, IData, ISidebar } from 'types'
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
  groupedData: [],
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
  initialGroupedData: IData[][]
}

const GlobalProvider = ({ children, initialSidebar, initialVersion, initialLogo, initialGroupedData }: GlobalProviderProps) => {
  const [sidebarData, setSidebarData] = useState<ISidebar[]>(initialSidebar)
  const [version] = useState(initialVersion)
  const [versionLogo] = useState(initialLogo)
  const [groupedData] = useState<IData[][]>(initialGroupedData)
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
        groupedData: groupedData,
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
