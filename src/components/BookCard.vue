<template>
	<div class="col-6 mb-5">
		<div
			class="card w-75"
			style="width: 18rem"
		>
			<img
				:src='img'
				class="card-img-top"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text">
					{{ desc }}
				</p>
				<router-link
					:to="'/articles/' + id"
					class="btn btn-primary"
					>Go somewhere</router-link
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        desc: {
            type: String
        },
        id: {
            type: String
        }
    },


})
</script>

<style scoped>
.card img {
	max-height: 250px;
	object-fit: contain;
}

.card-body p {
	max-height: 100px;
	overflow: hidden;
}
.card-body h5 {
	min-height: 100px;
}
</style>
