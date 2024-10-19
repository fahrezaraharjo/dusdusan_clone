export interface MenarikArticle {
    id: string;
    name: string;
    imagePath: string;
    publishDate: string;
    category: {
        categoryId: string;
        categoryName: string;
    };
}
