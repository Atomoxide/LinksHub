import { useRouter } from 'next/router'
import { sidebarData } from 'database/data'
import { SubCategories } from 'types'
import Head from 'next/head'
import Link from 'next/link'
import BreadCrumbs from 'components/Breadcrumbs'
import categoryDescriptions from 'components/TopBar/CategoryDescriptions'
import { Icons } from 'components/icons'
import { ReportBug } from 'components/ReportBug/Reportbug'
import { ZH } from 'locales/i18n'

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query as { category: string }

  const subcategories: SubCategories[] = category
    ? sidebarData.filter((c) => c.category == category)[0]['subcategory']
    : []

  const getDesc = (subcatName: string) => {
    for (const desc in categoryDescriptions) {
      if (desc == subcatName) {
        return categoryDescriptions[desc]
      }
    }

    return 'No description'
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
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/new-icon.png" className="rounded-full" />
      </Head>
      <section className="flex min-h-[calc(100vh-165px)] flex-col">
        <ReportBug />
        <div className="sm:ml-4 2xl:mx-auto items-start gap-2">
          {subcategories?.length ? (
            <>
              <div className="flex mt-8 justify-between">
                <BreadCrumbs
                  sections={[{ name: ZH(category), url: `/${category}` }]}
                />

                <a
                  className="flex my-auto gap-x-3"
                  href="https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=status%3A+awaiting+triage&projects=&template=other.yml&title=%5BOTHER%5D"
                  target="_blank"
                >
                  {/* <Icons.messageIcon className="w-5 h-5 m-auto" />
                  <span className="text-md text-text-quinary hidden md:block">
                    Give a feedback
                  </span> */}
                </a>
              </div>
              <div className="flex max-w-1038 justify-center">
                <div className="flex flex-wrap gap-x-5 gap-y-5 mt-6 mb-28 flex-start items-start">
                  {subcategories.map((subcat, i) => (
                    <Link
                      key={i}
                      href={`/${category}${subcat.url}`}
                      aria-label={`Explore ${subcat.name}`}
                      className="group flex flex-col dark:border dark:border-theme-primary dark:border-opacity-8 rounded-xl dark:bg-theme-tertiary bg-theme-primary-light border border-theme-secondary/25 dark:bg-opacity-25 dark:hover:bg-theme-quaternary dark:hover:bg-opacity-25 dark:hover:border-opacity-25 hover:text-dark-primary dark:shadow-lg shadow-tile md:max-w-[320px] px-4 py-4 group max-w-none w-full"
                    >
                      <div className="flex justify-between">
                        <div className="dark:text-gray-300 text-text-primary-light text-lg capitalize font-medium">
                          {ZH(subcat.name)}
                        </div>
                        <Icons.arrow className="opacity-0 group-hover:opacity-100 duration-300 w-6 h-6 text-theme-secondary dark:text-white" />
                      </div>
                      <div className="dark:text-text-tertiary text-text-quinary text-md h-12 pb-4">
                        <div className="text-ellipsis ... line-clamp-2 w-full">
                          {getDesc(subcat.url.slice(1))}
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/* <Link
                    href={`https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=chore%2Cgoal%3A+new-category%2Cpriority%3A+low&projects=&template=---category-suggestion.yml&title=%5BADD%5D+%3Cwrite+the+name+of+category%2Fsubcategory%3E`}
                    aria-label={`Add new subcategory issue template link`}
                    target="_blank"
                    className="flex gap-x-2 border dark:border-theme-primary dark:border-opacity-8 rounded-xl bg-theme-secondary hover:border-dashed hover:text-dark-primary shadow-lg lg:max-w-xs px-4 py-4"
                  >
                    <Icons.add className="h-10 w-10 mt-[-6px] dark:text-text-primary" />

                    <div>
                      <div className="text-lg font-medium dark:text-text-primary text-white">
                        Wanna add something?
                      </div>
                      <div
                        className={`dark:text-text-primary text-white text-md font-medium opacity-75`}
                      >
                        Share resources, and help other fellows in the journey.{' '}
                      </div>
                    </div>
                  </Link> */}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-theme-secondary dark:text-gray-text w-fit mx-auto text-center">
                <span className="md:text-7xl text-xl uppercase font-bold">
                  404|
                </span>{' '}
                No resources found.
              </p>
            </div>
          )}
        </div>
      </section>
  </>
  )
}

export default CategoryPage
