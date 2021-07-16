export interface SidenavModel {
    title: string;
    icon?: string;
    route: string;
    children?: SidenavModel[];
}