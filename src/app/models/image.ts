import { IImage } from "../interfaces/IImage";

export class Image implements IImage {
    
    id: number = 0;
    url: string = '';
    title?: string = '';
    subtitle?: string = '';
    marginLeft: number = 0;
}



