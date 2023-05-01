<script setup></script>

<template>
	<div class="wrap" id="default">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<style scoped>
.wrap {
	width: 100%;
	margin: auto;
}
</style>
