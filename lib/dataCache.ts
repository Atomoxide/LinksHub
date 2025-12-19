// lib/dataCache.ts
import { ISidebar, Category } from "types";

interface ApiResponse {
    sidebarData: ISidebar[];
    // add other cached data if needed
}

let cachedData: ApiResponse | null = null;

// fetch from API once
export async function getAppData(): Promise<ApiResponse> {
    if (cachedData) return cachedData;

    const res = await fetch("http://127.0.0.1:5000/api/get_data");
    if (!res.ok) throw new Error("Failed to fetch API data");

    const apiData = await res.json();

    // transform API data into your ISidebar[] format
    const sidebarData: ISidebar[] = Object.entries(apiData).map(
        ([category, subcats]: [string, any]) => ({
            category: category as Category, // cast string to Category
            subcategory: Object.entries(subcats).map(([subName, items]: [string, any]) => ({
                name: subName,
                url: `/${subName}`,
                resources: items.map((item: any) => ({
                    id: String(item.item_id),
                    name: item.item_name,
                    description: item.item_description,
                    url: item.item_url,
                    category: category as Category,
                    subcategory: subName,
                })),
            })),
        }));

    cachedData = { sidebarData };
    return cachedData;
}
