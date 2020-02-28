import {ISubMenu} from './submenu.model';

export interface IMenu{
    name: string,
    link: string | null,
    sub?: Array<ISubMenu>
}