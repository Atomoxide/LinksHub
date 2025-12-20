import 'styles/globals.css'
import type { AppProps } from 'next/app'
import GeneralLayout from 'layouts/GeneralLayout'
import { GlobalProvider } from 'context/GlobalContext'
import { Preloader } from 'components/Loader/Preloader'
import { ThemeProvider } from 'next-themes'
import { ResultsProvider } from 'hooks/ResultsContext'

import { getVersion, getVersionLogo, getAppData } from 'lib/variablesCache'
import { ISidebar } from 'types'

type MyAppProps = AppProps & {
  version: string
  version_logo: string
  sidebarData: ISidebar[]
};

function App({ Component, pageProps, version, version_logo, sidebarData }: MyAppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <GlobalProvider initialSidebar={sidebarData} initialVersion={version} initialLogo={version_logo}>
        <ResultsProvider>
          <Preloader backgroundColor="bg-yellow-100" color="#8b5cf6" size={40}>
            <GeneralLayout>
              <Component {...pageProps} />
            </GeneralLayout>
          </Preloader>
        </ResultsProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

App.getInitialProps = async () => {
  if (typeof window !== 'undefined') return { } // Skip on client side
  const { version } = await getVersion();
  const { version_logo } = await getVersionLogo();
  const sidebarData = await getAppData();
  return { version, version_logo, sidebarData };
};


export default App;