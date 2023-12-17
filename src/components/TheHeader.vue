<template>
	<nav class="nav p-4">
		<div class="container-fluid">
			<ul class="d-flex justify-content-center align-items-center gap-5">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/articles">Articles </router-link>
				</li>
				<li>
					<router-link to="/books">Books </router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
.nav {
    border-bottom: 1px solid black;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    color: black;
    text-decoration: none;
    user-select: none;
    padding: 10px 20px;
    border-radius: 5px;
}

a:active,
a:hover,
a.active {
    color: white;
    background-color: black;
}
</style>
