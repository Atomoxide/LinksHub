import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const metaDescription =
    '星渡斯特拉的以太之光 - FF14固定队开荒实用链接中转站'
  const ogImageUrl =
    'https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png'

  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Common Meta Tags */}
        <meta name="title" content="星渡斯特拉的以太之光" />
        <meta name="description" content={metaDescription} />
        {/* <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites"
        /> */}
        {/* <meta name="author" content="Rupali Haldiya" /> */}
        <meta name="robots" content="index, follow" />
        {/* <meta name="revisit-after" content="7 days" /> */}
        {/* <meta name="language" content="English" /> */}

        {/* Open Graph Meta Tags */}
        {/* <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="LinksHub" /> */}

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkshub.dev" />
        <meta
          property="twitter:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={ogImageUrl} />
        <meta
          name="twitter:site"
          content="https://twitter.com/linkshubdotdev"
        /> */}

        {/* Discord Meta Tags */}
        {/* <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        /> */}

        {/* Google Tag Manager Script */}
        {/* <Script
          id="my-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PC5DFJG');`,
          }}
        /> */}
      </Head>
      <body>
        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PC5DFJG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Overlay and Backdrop Roots */}
        <div id="overlay-root"></div>
        <div id="backdrop-root"></div>
        <Main />

        {/* Next.js Script */}
        <NextScript />
      </body>
    </Html>
  )
}
