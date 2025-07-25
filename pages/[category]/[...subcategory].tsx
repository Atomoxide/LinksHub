import React from 'react'
import { TopBar } from 'components/TopBar/TopBar'
import Head from 'next/head'
import useFilterDB from 'hooks/useFilterDB'
import CardsList from 'components/Cards/CardsList'
import ComingSoon from 'components/NewIssue/NewIssue'
import { sidebarData } from 'database/data'
import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { usePagination } from 'hooks/usePagination'
import Pagination from 'components/Pagination/Pagination'
import { ReportBug } from 'components/ReportBug/Reportbug'
import type { IData } from 'types'

interface PageProps {
  category: string
  subcategory: string
}

interface Params extends ParsedUrlQuery, PageProps {}

const SubCategory: NextPage<PageProps> = ({ subcategory }) => {
  const { filterDB, pageCategory } = useFilterDB(subcategory[0])
  const title = `星渡斯特拉的以太之光 - ${
    pageCategory[0].toUpperCase() + pageCategory.slice(1)
  }`

  const sortedData = filterDB.length
    ? [...filterDB[0]]
    : []

  // const sortedData = filterDB.length
  //   ? [...filterDB[0]].sort((a: IData, b: IData) =>
  //       a.name.localeCompare(b.name)
  //     )
  //   : []

  const numberOfCards = sortedData.length

  const { totalPages, currentPage, startIndex, endIndex, handlePageChange } =
    usePagination(sortedData.length)
  let content: JSX.Element[] | JSX.Element
  let filterData

  if (sortedData.length > 0) {
    filterData = sortedData.slice(startIndex, endIndex)
    content = <CardsList cards={filterData} />
  } else {
    content = <ComingSoon />
  }
  const toporbottom = true

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="星渡斯特拉的以太之光" />
        <meta
          name="description"
          content="星渡斯特拉的以太之光 - FF14固定队开荒实用链接中转站"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites"
        /> */}
        {/* <meta name="author" content="Rupali Haldiya" /> */}
        <meta name="robots" content="index, follow" />
        {/* <meta name="revisit-after" content="7 days" /> */}

        {/* Open Graph */}
        {/* <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="og:description"
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
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
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
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
      </Head>
      <TopBar />
      <ReportBug />
      <div
        data-custom="restrict-click-outside"
        className="relative min-h-[calc(100%-68px)] w-full  pb-4 md:min-h-[calc(100%-76px)] md:pl-5 lg:px-10 md:pt-2"
      >
        {content}
        <div className="min-w-full h-10 py-5" />
        <Pagination
          toporbottom={toporbottom}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          numberOfCards={numberOfCards}
        />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = sidebarData.flatMap(({ category, subcategory }) =>
    subcategory.map(({ url }) => ({
      params: { category, subcategory: url.replace('/', '').split('/') },
    }))
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const { category, subcategory } = context.params as PageProps

  return {
    props: {
      category,
      subcategory,
    },
  }
}

export default SubCategory
