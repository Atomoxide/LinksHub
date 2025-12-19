import 'styles/globals.css'
import type { AppProps } from 'next/app'
import GeneralLayout from 'layouts/GeneralLayout'
import { GlobalProvider } from 'context/GlobalContext'
import { Preloader } from 'components/Loader/Preloader'
import { ThemeProvider } from 'next-themes'
import { ResultsProvider } from 'hooks/ResultsContext'

import { getVersion } from 'lib/variablesCache'
import { getVersionLogo } from 'lib/variablesCache'

type MyAppProps = AppProps & {
  version: string;
  version_logo: string;
};

function App({ Component, pageProps, version, version_logo }: MyAppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <GlobalProvider>
        <ResultsProvider>
          <Preloader backgroundColor="bg-yellow-100" color="#8b5cf6" size={40}>
            <GeneralLayout version={version} version_logo={version_logo}>
              <Component {...pageProps} />
            </GeneralLayout>
          </Preloader>
        </ResultsProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

App.getInitialProps = async () => {
  const { version } = await getVersion();
  const { version_logo } = await getVersionLogo();
  return { version, version_logo };
};


export default App;