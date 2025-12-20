import { ISidebar, Category, IData } from "types";

/////// Version //////////////////
export type VersionResponse = {
    version: string;
};
let cachedVersion: VersionResponse | null = null;

export async function getVersion(): Promise<VersionResponse> {
    // Return cached value if already fetched
    if (cachedVersion) {
        return cachedVersion;
    }
    // console.log("Fetching version from API...");
    try {
        const res = await fetch("http://localhost:5000/api/get_version", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch version: ${res.status}`);
        }

        const data: VersionResponse = await res.json();

        // Cache result in memory
        cachedVersion = data;
    } catch (error) {
        console.log("Error fetching version:", error);
        cachedVersion = { version: "unknown" }; // Fallback value
        return cachedVersion;
    }



    return cachedVersion;
}


///////// Version Logo //////////////////
export type VersionLogoResponse = {
    version_logo: string;
};
let cachedVersionLogo: VersionLogoResponse | null = null;

export async function getVersionLogo(): Promise<VersionLogoResponse> {
    // Return cached value if already fetched
    if (cachedVersionLogo) {
        return cachedVersionLogo;
    }
    // console.log("Fetching version logo from API...");

    try {
        const res = await fetch("http://localhost:5000/api/get_version_logo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch version logo: ${res.status}`);
        }

        const data: VersionLogoResponse = await res.json();

        // Cache result in memory
        cachedVersionLogo = data;
    } catch (error) {
        console.log("Error fetching version logo:", error);
        cachedVersionLogo = { version_logo: "" }; // Fallback value
        return cachedVersionLogo;
    }

    return cachedVersionLogo;
}

////////// Sidebar Data //////////////////
interface ApiResponse {
    sidebarData: ISidebar[];
    groupedData: IData[][];
    subcategoryList: { [key: string]: string };
    i18nZH: { [key: string]: string };
    announcement: string;
    channel: string;
    // add other cached data if needed
}

let cachedData: ApiResponse | null = null;

// fetch from API once
export async function getAppData(): Promise<ApiResponse> {
    if (cachedData) return cachedData;

    try {
        const res1 = await fetch("http://localhost:5000/api/get_data");
        if (!res1.ok) throw new Error("Failed to fetch API data");

        const apiData = await res1.json();

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
            }))

        const res2 = await fetch("http://localhost:5000/api/get_data_raw");
        if (!res2.ok) throw new Error("Failed to fetch API raw data");

        const rawData = await res2.json();

        const grouped: Record<string, IData[]> = {}

        // Populate the grouped object
        rawData.forEach((item: IData) => {
        const key = item.subcategory
        if (!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(item)
        })

        // Convert to array of arrays
        const groupedData: IData[][] = Object.values(grouped)

        const res3 = await fetch("http://localhost:5000/api/get_subcategories");
        if (!res3.ok) throw new Error("Failed to fetch subcategory list");

        const subcategoryList = await res3.json();
        // console.log("Fetched subcategory list:", subcategoryList);

        const res4 = await fetch("http://localhost:5000/api/get_i18n_ZH");
        if (!res4.ok) throw new Error("Failed to fetch i18n data");

        const i18nZH = await res4.json();

        const res5 = await fetch("http://localhost:5000/api/get_announcement");
        if (!res5.ok) throw new Error("Failed to fetch announcement data");

        const announcementData = await res5.json();
        const announcement = announcementData.announcement || "";

        const res6 = await fetch("http://localhost:5000/api/get_channel");
        if (!res6.ok) throw new Error("Failed to fetch channel data");

        const channelData = await res6.json();
        const channel = channelData.channels || "";

        cachedData = { sidebarData, groupedData, subcategoryList, i18nZH, announcement, channel };
    } catch (error) {
        console.log("Error fetching sidebar data:", error);
        cachedData = { sidebarData: [], groupedData: [], subcategoryList: {}, i18nZH: {}, announcement: "", channel: "" }; // Fallback value
        return cachedData;
    }
    return cachedData;
}