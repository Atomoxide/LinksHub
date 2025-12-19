import { useReducer, createContext, ReactNode } from 'react'
import { IContext, ISidebar } from 'types'
import GlobalReducer from './GlobalReducer'

const initialState: IContext = {
  sidebar: false,
  sidebarData: [],
}
const GlobalContext = createContext<IContext>({
  ...initialState,
  openNav: () => {},
  closeNav: () => {},
  toggleNav: () => {},
})

const GlobalProvider = ({ children, sidebarData }: { children: ReactNode; sidebarData: ISidebar[] }) => {
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
        openNav,
        closeNav,
        toggleNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
