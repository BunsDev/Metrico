type TOfficialLinks = {
    name: string;
    link: string;
}

export type TCoinProfileData = {
    id: string;
    name: string;
    profile: {
        general: {
            overview: {
                official_links: TOfficialLinks[];
                project_details: string;
                sector: string;
                category: string;
            },
            background: {
                background_details: string;
            },
        }
    };
}
