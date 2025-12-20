// import { sidebarData } from 'database/data'

import { useGlobal } from "context/GlobalContext"

export const regEx = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/g

const cleanText = (text: string) =>
  text
    .toLocaleLowerCase()
    .replaceAll(regEx, ' ')
    .replaceAll('  ', ' ')
    .replaceAll('-', ' ')

export const isValidResource = (name: string) => {
  if (!name) return
  const { sidebarData } = useGlobal()

  const subCategoryNames: string[] = []
  sidebarData.forEach((category) =>
    category.subcategory.forEach((subcategory) =>
      subCategoryNames.push(subcategory.url?.replaceAll('/', ''))
    )
  )

  const isValid = !!subCategoryNames?.find(
    (n) => cleanText(n) === cleanText(name)
  )

  return isValid
}
