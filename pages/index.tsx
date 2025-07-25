import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Logo from 'assets/logo.svg'
import Link from 'next/link'
import Button from 'components/Button'
import { sidebarData } from '../database/data'
import { Icons } from 'components/icons'
import { ReportBug } from 'components/ReportBug/Reportbug'
import { ZH } from 'locales/i18n'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

interface RatingForkProps {
  type: 'star' | 'fork'
  count: string | number
  link: string
  bgColor: string
  iconBgColor: string
  btnBgColor: string
  btnTextColor: string
  btnHoverColor: string
  btnText: string
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  title,
  description,
}) => (
  <div className="md:w-1/3 w-full dark:bg-slate-800 bg-theme-primary-light hover:bg-theme-primary-light/8 dark:hover:bg-slate-700 border border-theme-secondary/25 shadow-md p-6 mb-4 rounded-lg lg:h-44">
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center dark:text-text-quinary gap-2 mb-3">
        <div>{icon}</div>
        <span className="sm:inline">{title}</span>
      </div>
      <p className="text-sm sm:text-base text-text-quinary sm:h-24 h-fit lg:h-fit overflow-hidden font-sans text-ellipsis line-clamp-4">
        {description}
      </p>
    </Link>
  </div>
)

const RatingForkComponent: React.FC<RatingForkProps> = ({
  type,
  count,
  link,
  iconBgColor,
  btnBgColor,
  btnTextColor,
  btnHoverColor,
  btnText,
}) => {
  const iconStyle = { backgroundColor: iconBgColor }
  const [hovered, setHovered] = useState(false)
  const buttonStyle = {
    backgroundColor: hovered ? btnHoverColor : btnBgColor,
    color: btnTextColor,
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  }

  return (
    <div
      className={`dark:text-white rounded-lg md:w-[200px] text-3xl p-4 dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.05)] w-full`}
    >
      {type === 'star' ? (
        <Icons.ioStar
          className={`rounded-full text-black text-3xl p-1`}
          style={iconStyle} // Add style={iconStyle}
        />
      ) : (
        <Icons.gitBranch
          className={`rounded-full text-white text-3xl p-1`}
          style={iconStyle} // Add style={iconStyle}
        />
      )}
      <div className="text-3xl my-1">
        {count}
        <span className="text-lg m-1">
          {type === 'star' ? 'Stars' : 'Forks'}
        </span>
      </div>
      <Link href={link}>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={buttonStyle}
          className="text-base p-2 rounded-lg text-center w-full"
        >
          {btnText}
        </button>
      </Link>
    </div>
  )
}

export default function Home() {
  const [welcome, setWelcome] = useState(true)
  const [community, setCommunity] = useState(true)
  const [resources, setResources] = useState(true)

  const [starCount, setStarCount] = useState(0)
  const [forkCount, setForkCount] = useState(0)

  useEffect(() => {
    const getStarForkCount = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/rupali-codes/LinksHub`
        )
        const data = await response.json()
        setStarCount(data.stargazers_count)
        setForkCount(data.forks)
      } catch (error) {
        console.error('Error fetching fork count:', error)
      }
    }

    getStarForkCount()
  }, [starCount, forkCount])

  const handleWelcome = () => {
    setWelcome((prev) => !prev)
  }
  const handleCommunity = () => {
    setCommunity((prev) => !prev)
  }
  const handleResources = () => {
    setResources((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>星渡斯特拉的以太之光 - 实用链接中转站</title>
        <meta name="title" content="星渡斯特拉的以太之光" />
        <meta
          name="description"
          content="星渡斯特拉的以太之光 - FF14固定队开荒实用链接中转站"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites, free tools, developer tools, tech resources"
        /> */}
        {/* <meta name="author" content="Rupali Haldiya" /> */}
        <meta name="robots" content="index, follow" />
        {/* <meta name="revisit-after" content="7 days" /> */}
        {/* <link rel="canonical" href="https://linkshub.dev" /> */}

        {/* Open Graph */}
        {/* <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="og:description"
          content="LinksHub aims to provide people with access to a wide range of free resources and tools that they can use in their work and projects."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta property="og:site_name" content="LinksHub" /> */}

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkshub.dev" />
        <meta
          property="twitter:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="twitter:description"
          content="LinksHub aims to provide people with access to a wide range of free resources and tools that they can use in their work and projects."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta name="language" content="English" />
        <meta
          name="twitter:site"
          content="https://twitter.com/linkshubdotdev"
        />
        <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        /> */}

        <link rel="icon" href="/new-icon.png" className="rounded-full" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LinksHub',
              url: 'https://linkshub.dev',
              description:
                'LinksHub is the ultimate hub for free, ready-to-use tech resources, tools, and libraries for developers and tech enthusiasts.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://linkshub.dev/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        /> */}
      </Head>
      <section
        data-custom="restrict-click-outside"
        className="flex flex-col max-h-[calc(100vh - 165px)] max-w-[calc(100% - 165px)] flex-col sm:m-3 lg:m-8"
      >
        <ReportBug />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl dark:text-text-tertiary mb-0 mt-6 md:mt-0">
              公告
            </h2>
            <div className="hidden sm:flex" onClick={handleWelcome}>
              {welcome ? (
                <Icons.rxCaretDown size={50} className="cursor-pointer" />
              ) : (
                <Icons.rxCaretRight size={50} className="cursor-pointer" />
              )}
            </div>
          </div>
          {welcome && (
            <>
              <p className="text-md text-text-quinary">
                暂定上班时间国内早上9：00，美东21：00
              </p>
              <p className="text-md text-text-quinary">
                QQ群926116127
              </p>
              {/* <div
                className={
                  'min-h-52 p-8 rounded-3xl dark:bg-slate-800 bg-theme-primary-light mt-4 mb-6 border border-theme-secondary/25 shadow-md'
                }
              >
                <div
                  className={
                    'h-full flex flex-col lg:flex-row items-center justify-around'
                  }
                >
                  <div className={'mr-0 lg:mr-8'}>
                    <div className="flex justify-center lg:justify-start">
                      <Logo />
                    </div>
                    <p className={'my-2 text-base text-text-quinary pt-3'}>
                      LinksHub aims to provide people access to a wide range of
                      free resources and tools that they can use to learn and
                      develop their tech skills. These resources include links
                      to free software, libraries, frameworks, and other tools
                      that can be used to build and deploy applications,
                      website, and other projects.
                    </p>
                  </div>
                  <div
                    className={
                      'flex sm:flex-row flex-col items-center justify-center gap-10 mt-4 lg:mt-0 w-full '
                    }
                  >
                    <RatingForkComponent
                      type="star"
                      count={starCount ? starCount : '570+'}
                      link="https://github.com/rupali-codes/LinksHub"
                      bgColor="#575448"
                      iconBgColor="#FBD449"
                      btnBgColor="#FBD449"
                      btnHoverColor="#FFF455"
                      btnTextColor="black"
                      btnText="Give a star"
                    />

                    <RatingForkComponent
                      type="fork"
                      count={forkCount ? forkCount : '480+'}
                      link="https://github.com/rupali-codes/LinksHub/blob/main/CONTRIBUTING.md"
                      bgColor="#403B56"
                      iconBgColor="#714EFF"
                      btnBgColor="#714EFF"
                      btnHoverColor="#7E8EF1"
                      btnTextColor="white"
                      btnText="Contribute now"
                    />
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl dark:text-text-tertiary">游戏社区</div>
            <div className="hidden sm:flex" onClick={handleCommunity}>
              {community ? (
                <Icons.rxCaretDown size={50} className="cursor-pointer" />
              ) : (
                <Icons.rxCaretRight size={50} className="cursor-pointer" />
              )}
            </div>
          </div>
          {community && (
            <>
              {/* <div className="text-text-quinary">
                Get involved! Everyone is welcome!
              </div> */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <SocialLink
                  href="https://kook.vip/THjxKB"
                  icon={<Icons.kook size={30} />}
                  title="Kook频道"
                  description="固定队开荒频道"
                />
                <SocialLink
                  href="https://bbs.nga.cn/thread.php?fid=-362960"
                  icon={<Icons.nga size={30} />}
                  title="NGA"
                  description="经典屎黄色论坛"
                />
                <SocialLink
                  href="https://ff14risingstones.web.sdo.com/pc/index.html#/post"
                  icon={<Icons.shizhijia size={30} />}
                  title="石之家"
                  description="官方社区，角色数据统计，跨大区"
                />
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl dark:text-text-tertiary">实用链接分类</div>
            <div className="hidden sm:flex" onClick={handleResources}>
              {resources ? (
                <Icons.rxCaretDown size={50} className="cursor-pointer" />
              ) : (
                <Icons.rxCaretRight size={50} className="cursor-pointer" />
              )}
            </div>
          </div>
          <div>
            {resources && (
              <>
                <span className="text-text-quinary">
                  点击以下链接跳转至相应页面
                </span>
                <ul className="flex flex-wrap mt-4 gap-5">
                  {resources &&
                    sidebarData.map((el, i) => (
                      <Link
                        key={i}
                        href={`/${el.category}`}
                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(33.33%-1rem)] group"
                      >
                        <div className="border border-theme-secondary border-opacity-25 shadow-sm dark:border dark:border-theme-primary dark:border-opacity-20 duration-300 transition-all dark:bg-slate-800 dark:hover:bg-slate-700 bg-theme-primary-light hover:bg-theme-primary-light/8 flex items-center justify-between rounded-xl sm:h-16 h-fit">
                          <div className="p-5 truncate ...">
                            {ZH(el.category)}
                          </div>
                          <div>
                            <Icons.arrowRightLong className="m-4 hidden group-hover:block" />
                          </div>
                        </div>
                      </Link>
                    ))}
                </ul>
              </>
            )}
          </div>
        </div>
        {/* <div className="mt-10 mb-6 md:mb-0">
          <div className="dark:bg-slate-800 bg-theme-primary-light rounded-lg border border-theme-secondary/25 sm:flex-row items-center justify-between md:p-7 md:pr-12 p-5">
            <div className="md:flex items-center gap-4">
              <div className="text-yellow-400 ml-4 lg:ml-0">
                <Icons.star className="h-8 w-8" />
              </div>
              <h1 className="text-xl dark:text-text-tertiary">
                More awesome resources are coming soon!
              </h1>
            </div>
            <div className="lg:w-full flex flex-col lg:flex-row items-center justify-between mt-6 sm:mt-0">
              <div className="text-text-quinary pt-1 md:pl-4 lg:mx-8 text-md">
                Discover valuable resources without extensive research. We have
                diligently curated a wealth of materials to make your journey
                smoother. Show us some love and support our efforts in
                simplifying your path to success.
              </div>
              <Button
                label="Sponsor"
                icon={<Icons.heart className="h-4 w-4" />}
                variant="pale"
                link="https://github.com/sponsors/rupali-codes"
                className="w-full sm:w-auto border border-theme-secondary/25 bg-primary/8 mt-4 lg:mt-0 md:ml-4 md:mr-auto"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  )
}
