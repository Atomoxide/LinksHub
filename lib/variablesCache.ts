import { ISidebar, Category } from "types";

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
    console.log("Fetching version from API...");
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
    console.log("Fetching version logo from API...");

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
    // add other cached data if needed
}

let cachedData: ApiResponse | null = null;

// fetch from API once
export async function getAppData(): Promise<ApiResponse> {
    if (cachedData) return cachedData;

    try {
    const res = await fetch("http://localhost:5000/api/get_data");
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
        }))
    cachedData = { sidebarData };
    } catch (error) {
        console.log("Error fetching sidebar data:", error);
        cachedData = { sidebarData: [] }; // Fallback value
        return cachedData;
    }
    return cachedData;
}