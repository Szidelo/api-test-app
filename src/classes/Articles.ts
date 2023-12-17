import Article from "./article";
import { fetchNews } from "@/Fetch/fetchNews";
import { ref } from "vue";

class Articles {
	private data = ref<Article[]>([]);

	getArticles() :Article[] {
		return this.data.value
	}

    removeDuplicateTitles() {
        const uniqueArticles: Article[] = [];

        if (this.data.value) {
            for (const article of this.data.value) {
                // Check if there is no article in uniqueArticles with the same title
                if (
                    !uniqueArticles.some(
                        (uniqueArticle) =>
                            uniqueArticle.title === article.title
                    )
                ) {
                    uniqueArticles.push(article);
                }
            }
        }

        this.data.value = uniqueArticles;
    }

	async fetchArticles(keyWord: string) {
		const response = await fetchNews(keyWord);
		if (response.status === 200) {
			const filteredArticles = response.data.articles.results.filter(
				(article: Article) => {
					return (
						article.image !== null &&
						!article.isDuplicate &&
						article.lang === "eng"
					);
				}
			);
			if (filteredArticles.length > 0) {
				this.data.value = filteredArticles;
				// removeDuplicateTitles();
			}
		} else {
			console.warn(`Error ${response.status}`);
		}

		console.log(this.data.value)
		return this.data.value;
	}

	async searchArticles(keyWord: string) {
		const filteredArticles = await this.fetchArticles(!keyWord ? "Books" : keyWord)
		
		return filteredArticles
	}

}

export default Articles;
