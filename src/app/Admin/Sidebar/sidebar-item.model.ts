export class SidebarItemModel {

    public constructor(
        public url: string,
        public icon: string,
        public name: string,
        public childSidebar: SidebarItemModel[] = null
    ){
    }
}