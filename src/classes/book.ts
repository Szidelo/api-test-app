class Book {
    public id: string;
    public title: string;
    public description: string;
    public image: string;
    public authors: string[]

    constructor(id: string, title: string, description: string, image: string, authors: string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.authors = authors
    }
}

export default Book