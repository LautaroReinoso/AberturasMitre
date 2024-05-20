import { ICard } from "../interfaces/ICard";

export class Card implements ICard {
    id: number = 0;
    title?: string = '';
    text: string = '';
    marginLeft?: number = 0;
    bg?: string = '';
}


