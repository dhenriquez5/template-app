import { IconType } from "react-icons";
import { AiOutlineHome,AiOutlineFolderOpen,AiOutlineProject,AiOutlineSetting,AiOutlineLogout } from "react-icons/Ai";

export interface MenuI{
    id :number;
    label?:string;
    to:string;
    Icon: IconType
}
export const MenuData:MenuI[] = [
    { id: 1, label: "Home", Icon: AiOutlineHome, to:'/'},
    { id: 2, label: "Products", Icon: AiOutlineFolderOpen, to:'/product' },
    { id: 3, label: "Orders", Icon: AiOutlineProject , to:'/order' },
    { id: 4, label: "Stock", Icon: AiOutlineProject , to:'/stock' },
]

export const MenuData2:MenuI[] = [
    { id: 1, label: "Settings", Icon: AiOutlineSetting, to:'/settings'},
    { id: 2, label: "Exit", Icon: AiOutlineLogout, to:'/logout' },
]