export interface OrganizationInterface {
    id: string;
    name: string;
    country: string;
    address?: string | null;
    creator_id: string;
    created_at: string;
    description?: string | null;
    time_zone: string;
    mobile?: string | null;
    image?: string | null;
    creator?: UserInterface;
    users?: UserInterface[];
    categories?: CategoryInterface[];
    items?: Item[];
    purchases?: Purchase[];
    sales?: Sale[];
}



export interface CategoryInterface {
    id: string;
    name: string;
    imageUrl?: string | null;
    description?: string | null;
    organization_id: string;
}


export interface Item {
    id: string;
    name: string;
    created_at?: string;
    updated_at?: string;
    category_id?: string | null;
    created_by?: string | null;
    image?: string | null;
    unit?: string | null;
    cost_price?: number | null;
    sale_price: number;
    quantity: number;
    discount: number;
    alert_level: number;
    organization_id: string;
    obsolete: boolean;
    organization?: OrganizationInterface;
    category?: CategoryInterface;
    purchase_history?: Purchase[];
    sale_history?: Sale[];
}


export interface Purchase {
    id: string;
    date: string;
    organization_id: string;
    done_by: string;
    item_id: string;
    quantity: number;
    purchase_cost: number;
    total_items_in_store?: number | null;
    details?: string | null;
    organization: OrganizationInterface;
    item: Item;
}


export interface Sale {
    id: string;
    date: string;
    organization_id: string;
    done_by: string;
    item_id: string;
    quantity: number;
    sale_total: number;
    items_left?: number | null;
    details?: string | null;
    organization: OrganizationInterface;
    item: Item;
}


export interface UserInterface {
    id: string;
    last_name: string;
    first_name: string;
    email?: string | null;
    created_at: string;
    mobile?: string | null;
    email_verified: boolean;
    mobile_verified: boolean;
    organizations?: OrganizationInterface[];
    org_created?: OrganizationInterface[];
}

export interface OrgUserAssociation {
    organization_id: string;
    user_id: string;
    user_role: string;
}
