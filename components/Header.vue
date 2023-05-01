<template>
	<header class="top-navbar col-12">
		<!-- 側邊欄 -->
		<div class="menu" v-bind:class="{ open: isOpen }">
			<div class="menu-nav">
				<div class="menu-logo">
					<img src="~/assets/image/logo-white.png" alt="logo" />
				</div>
				<div class="menu-switch" id="hb2" @click="handOpenClass">
					<img src="@/assets/image/Xmak.png" alt="X" />
				</div>
			</div>
			<ul class="menu-list">
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Kitchen Designs</a></li>
				<li><a href="">Clinet Reviews</a></li>
				<li><a href="">Contact us</a></li>
			</ul>
			<div class="menu-box">
				<div class="menu-socialMedia">
					<i style="font-size: 32px"
						><font-awesome-icon icon="fa-brands fa-facebook fa-xl"
					/></i>
					<i style="font-size: 32px"
						><font-awesome-icon icon="fa-brands fa-twitter fa-xl"
					/></i>
					<i style="font-size: 32px"
						><font-awesome-icon icon="fa-brands fa-instagram fa-xl"
					/></i>
					<i style="font-size: 32px"
						><font-awesome-icon icon="fa-brands fa-youtube fa-xl"
					/></i>
				</div>
				<div class="menu-co">
					<p>© 2023 MegaOne. Made With Love By LiChangJen</p>
				</div>
			</div>
		</div>
		<!-- 側邊欄 -->
		<nav class="navbar-center col-9 col-md-7 col-11">
			<div class="top-logo">
				<img src="~/assets/image/logo-white.png" alt="" />
			</div>
			<ul class="navbar-center-list">
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Kitchen Designs</a></li>
				<li><a href="">Clinet Reviews</a></li>
				<li><a href="">Contact us</a></li>
			</ul>
		</nav>
		<div class="hb" id="hb1" @click="handOpenClass">
			<span class="bar01"></span>
			<span></span>
			<span class="bar03"></span>
		</div>
	</header>
</template>

<script setup>
const isOpen = ref(false);
const handOpenClass = () => {
	isOpen.value = !isOpen.value;
};
</script>

<style></style>
