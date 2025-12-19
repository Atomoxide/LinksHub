// lib/dataCache.ts
import { ISidebar, Category } from "types";
import { cache } from 'react'

interface ApiResponse {
    sidebarData: ISidebar[];
    // add other cached data if needed
}


let cachedData: ISidebar[] | null = null

export async function getAppData(): Promise<ISidebar[]> {
    if (cachedData) return cachedData

    const res = await fetch('http://127.0.0.1:5000/api/get_data')
    if (!res.ok) throw new Error('Failed to fetch API data')

    const apiData = await res.json()

    const sidebarData: ISidebar[] = Object.entries(apiData).map(
        ([category, subcats]: [string, any]) => ({
            category: category as any,
            subcategory: Object.entries(subcats).map(([subName, items]: [string, any]) => ({
                name: subName,
                url: `/${subName}`,
                resources: items.map((item: any) => ({
                    id: String(item.item_id),
                    name: item.item_name,
                    description: item.item_description,
                    url: item.item_url,
                    category: category as any,
                    subcategory: subName,
                })),
            })),
        }))

    cachedData = sidebarData
    return cachedData
}

export async function getSubCategories() {
    const sidebarData = await getAppData()

    return sidebarData.flatMap(({ category, subcategory }) =>
        subcategory.map(({ url }) => ({
            category,
            subcategory: url.replace('/', ''),
        }))
    )
}

export async function getSearchOptions() {
    const sidebarData = await getAppData()

    return sidebarData.flatMap(({ category, subcategory }) =>
        subcategory.map((subcat) => ({
            ...subcat,
            category,
        }))
    )
}
