<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log("slide change");
		};
		return {
			modules: [FreeMode, Pagination],
		};
	},
};
</script>
<template>
	<div class="section-message-box">
		<div class="section-message-box-container">
			<swiper
				:spaceBetween="30"
				:freeMode="true"
				:pagination="{
					clickable: true,
				}"
				:breakpoints="{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					'@1.00': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide>
					<i style="font-size: 60px"
						><font-awesome-icon icon="fa-2xl fa-brands fa-untappd"
					/></i>
					<p>Kitchen Designs</p>
					<span
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						mauris arcu.</span
					>
				</swiper-slide>
				<swiper-slide>
					<i style="font-size: 60px"
						><font-awesome-icon icon="fa-2xl fa-brands fa-ups"
					/></i>
					<p>Kitchen Panels</p>
					<span
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						mauris arcu.</span
					>
				</swiper-slide>
				<swiper-slide>
					<i style="font-size: 60px"
						><font-awesome-icon icon="fa-brands fa-studiovinari"
					/></i>
					<p>Living Rooms</p>
					<span
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						mauris arcu.</span
					>
				</swiper-slide>
				<swiper-slide>
					<i style="font-size: 60px"
						><font-awesome-icon icon="fa-brands fa-space-awesome"
					/></i>
					<p>Dining Rooms</p>
					<span
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						mauris arcu.</span
					>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<style scoped>
.section-message-box {
	width: 100%;
}
.section-message-box-container {
	width: 60%;
	height: 400px;
	margin: auto;
	transform: rotate(0);
}
.swiper {
	margin-top: -6vw;
	padding-top: 3vw;
	padding-bottom: 2vw;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 1;
}
.mySwiper .swiper-slide {
	background-color: #26313c;
	color: #fff;
	padding: 30px 30px 60px;
	position: relative;
	box-sizing: border-box;
	text-align: center;
}
.mySwiper .swiper-slide i {
	font-size: 72px;
}
.mySwiper .swiper-slide p {
	margin-top: 50px;
	font-size: 24px;
	margin-bottom: 100px;
}
.mySwiper .swiper-slide span {
	display: block;
	font-size: 12px;
}

@media (min-width: 905px) {
	.section-message-box-container .swiper-slide-next {
		background-color: #36a837;
		transform: scale(1.1);
		position: relative;
		z-index: 1;
	}
}
@media (max-width: 768px) {
	.mySwiper .swiper-slide {
		background-color: #fff;
		color: #000;
	}
	.mySwiper .swiper-slide i {
		color: #36a837;
	}
}
</style>
