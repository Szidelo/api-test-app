<template>
	<h3>See list</h3>
	<div class="d-flex justify-content-center w-50 mx-auto mb-5">
		<input
			class="form-control"
			v-model="enteredValue"
			placeholder="Search..."
		/>
		<button
			@click="search"
			class="btn btn-success"
		>
			Search
		</button>
	</div>
	<div class="container row mx-auto">
		<ArticleCard
			v-for="(article, index) in articles.slice(0, 12)"
			:key="index"
			:id="article.author"
			:img="article.urlToImage"
			:title="article.title"
			:desc="article.description"
		/>
	</div>
</template>

<script lang="ts">
import ArticleCard from "./ArticleCard.vue";
import Article from "../classes/article";
import NewsArticle from '../classes/newsArticle'
import fallBackImg from "../../public/assets/unavailable-image.jpg";
import { defineComponent, ref, onMounted } from "vue";
import Articles from '../classes/Articles'
import {fetchNewsApi} from '../Fetch/fetchNewsApi'
export default defineComponent({
	components: {
		ArticleCard,
	},

    setup() {
        const enteredValue = ref('')
        const articles = ref<NewsArticle[]>([])

        const fetchData = async(keyWord: string) => {
            const response = await fetchNewsApi(keyWord)

            console.log(response[0].description)
            return articles.value = response
        }

        const search = () => {
            fetchData(enteredValue.value)
        }

        onMounted(() => {
            fetchData('books')
        })

        return {
            enteredValue, search, articles
        }
    }
});
</script>
../classes/Articles