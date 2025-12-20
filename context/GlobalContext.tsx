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
  subcategoryList: {},
  i18nZH: {},
  announcement: '',
  channel: '',
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
  initialSubcategoryList: { [key: string]: string }
  initialI18nZH: { [key: string]: string }
  initialAnnouncement: string
  initialChannel: string
}

const GlobalProvider = ({ children, initialSidebar, initialVersion, initialLogo, initialGroupedData, initialSubcategoryList, initialI18nZH, initialAnnouncement, initialChannel }: GlobalProviderProps) => {
  const [sidebarData, setSidebarData] = useState<ISidebar[]>(initialSidebar)
  const [version] = useState(initialVersion)
  const [versionLogo] = useState(initialLogo)
  const [groupedData] = useState<IData[][]>(initialGroupedData)
  const [subcategoryList] = useState<{ [key: string]: string }>(initialSubcategoryList)
  const [i18nZH] = useState<{ [key: string]: string }>(initialI18nZH)
  const [announcement] = useState<string>(initialAnnouncement)
  const [channel] = useState<string>(initialChannel)
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
        subcategoryList: subcategoryList,
        i18nZH: i18nZH,
        announcement: announcement,
        channel: channel,
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
