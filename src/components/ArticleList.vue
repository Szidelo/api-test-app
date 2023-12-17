<template>
	<h3>See list</h3>
	<div class="d-flex justify-content-center w-50 mx-auto mb-5">
		<input
			class="form-control"
			v-model="enteredValue"
			placeholder="Search..."
		/>
		<button
			@click="articles.searchArticles(enteredValue)"
			class="btn btn-success"
		>
			Search
		</button>
	</div>
	<div class="container row mx-auto">
		<ArticleCard
			v-for="article in articles.getArticles()"
			:key="article.uri"
			:id="article.uri"
			:img="article.image ? article.image : fallBackImg"
			:title="article.title"
			:desc="article.body"
		/>
	</div>
</template>

<script lang="ts">
import ArticleCard from "./ArticleCard.vue";
import Article from "../classes/article";
import fallBackImg from "../../public/assets/unavailable-image.jpg";
import { defineComponent, ref, onMounted } from "vue";
import Articles from '../classes/Articles'
export default defineComponent({
	components: {
		ArticleCard,
	},

	setup() {
		const enteredValue = ref("");
		const articles = new Articles()

		const localArticles = ref<Article[]>([])

		const fetchArticles = async() => {

			

			await articles.fetchArticles('books')

			localArticles.value = articles.getArticles()

			
		}

		onMounted(() => {
			fetchArticles()
		})

		console.log(localArticles.value)

		return {
			articles,
			enteredValue,
			fallBackImg
		}


		// const articles = ref<Article[]>();

		// const removeDuplicateTitles = () => {
		// 	const uniqueArticles: Article[] = [];

		// 	if (articles.value) {
		// 		for (const article of articles.value) {
		// 			// Check if there is no article in uniqueArticles with the same title
		// 			if (
		// 				!uniqueArticles.some(
		// 					(uniqueArticle) =>
		// 						uniqueArticle.title === article.title
		// 				)
		// 			) {
		// 				uniqueArticles.push(article);
		// 			}
		// 		}
		// 	}

		// 	articles.value = uniqueArticles;
		// };

		// const getNews = async (category: string) => {
		// 	const response = await fetchNews(category);
		// 	if (response.status === 200) {
		// 		const filteredArticles = response.data.articles.results.filter(
		// 			(article: Article) => {
		// 				return (
		// 					article.image !== null &&
		// 					!article.isDuplicate &&
		// 					article.lang === "eng"
		// 				);
		// 			}
		// 		);
		// 		if (filteredArticles.length > 0) {
		// 			articles.value = filteredArticles;
		// 			removeDuplicateTitles();
		// 		}
		// 	} else {
		// 		console.warn(`Error ${response.status}`);
		// 	}
		// };

		// getNews("books");

		// const searchArticle = async () => {
		// 	const filteredArticles = await getNews(
		// 		!enteredValue.value ? "books" : `books ${enteredValue.value}`
		// 	);

		// 	return filteredArticles;
		// };

		// console.log(articles);

		// return { articles, fallBackImg, enteredValue, searchArticle };
	},
});
</script>
../classes/Articles