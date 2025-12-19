
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

    const res = await fetch("http://127.0.0.1:5000/api/get_version", {
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

    const res = await fetch("http://127.0.0.1:5000/api/get_version_logo", {
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

    return cachedVersionLogo;
}