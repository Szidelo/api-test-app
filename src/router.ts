import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import ArticlePage from "./Pages/ArticlePage.vue";
import NotFound from './Pages/NotFound.vue'
import ArticleContent from './components/ArticleContent.vue'
import BooksPage from './Pages/BooksPage.vue'
import BookContent from './components/BookContent.vue'

const routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/articles",
		component: ArticlePage,
	},
	{
		path: "/articles/:id",
		component: ArticleContent,
	},
	{
		path: '/books',
		component: BooksPage
	},
	{
		path: '/books/:id',
		component: BookContent
	},
    {
        path: "/:notFound(.*)",
        component: NotFound
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
    linkActiveClass: "active"
});

export default router;
