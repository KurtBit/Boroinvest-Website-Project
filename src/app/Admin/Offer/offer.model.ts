export class OfferModel {
    public constructor(
        name: string, content: string,
        date: Date, img: string,
        price: number, author: string
    ) {
        this.name = name;
        this.content = content;
        this.date = date;
        this.img = img;
        this.price = price;
        this.createdOn = new Date();
        this.author = author;
    }

    public name: string;
    public content: string;
    public date: Date;
    public img: string;
    public price: number;
    public createdOn: Date;
    public author: string;
}