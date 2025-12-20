// import { database } from 'database/data'
import { useRouter } from 'next/router'
import { IData } from 'types'
import { useResults } from './ResultsContext'
import { useGlobal } from 'context/GlobalContext'

const useFilterDB = (subcategory: string) => {
  const database = useGlobal().groupedData
  // console.log('useFilterDB called with subcategory:', database)
  const router = useRouter()
  const { results } = useResults()

  let pageCategory = subcategory
  if (typeof window !== 'undefined') {
    pageCategory = router.asPath.slice(1)
  }

  // This filters trough the DB with the subcategory which results in an array of arrays
  const filterSubCat = database?.map((item) =>{
    return item?.filter((cat: IData) => cat.subcategory === subcategory)
})



  // This filters out an empty array from the filterSubCat
  const filterDB = filterSubCat?.filter((item) => item.length !== 0)

  return {
    filterSubCat,
    filterDB,
    results,
    pageCategory
  }
}

export default useFilterDB
