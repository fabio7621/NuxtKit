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
	<section class="section-clientBox">
		<div
			class="section-clinetBox-container"
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
		>
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
				class="mySecondSwiper"
			>
				<swiper-slide>
					<div class="dottbox">
						<i><font-awesome-icon icon="fa-brands fa-tiktok fa-xl" /></i>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
						facilis, eaque vero illo natus iste corrupti maxime, possimus.
					</p>
					<div class="clinet-hand-pic">
						<img src="~/assets/image/testimonial1.png" alt="" />
					</div>
					<div class="clinet-name-job">
						<h4>David RaleWay</h4>
						<p>Businessman</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="dottbox">
						<i><font-awesome-icon icon="fa-brands fa-tiktok fa-xl" /></i>
					</div>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
						facilis, eaque vero illo natus iste corrupti maxime, possimus.
					</p>
					<div class="clinet-hand-pic">
						<img src="~/assets/image/testimonial2.png" alt="" />
					</div>
					<div class="clinet-name-job">
						<h4>Kata Marasisa</h4>
						<p>interior Designer</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="dottbox">
						<i><font-awesome-icon icon="fa-brands fa-tiktok fa-xl" /></i>
					</div>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
						facilis, eaque vero illo natus iste corrupti maxime, possimus.
					</p>
					<div class="clinet-hand-pic">
						<img src="~/assets/image/testimonial3.png" alt="" />
					</div>
					<div class="clinet-name-job">
						<h4>Sam Billings</h4>
						<p>Company Owner</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="dottbox">
						<i><font-awesome-icon icon="fa-brands fa-tiktok fa-xl" /></i>
					</div>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
						facilis, eaque vero illo natus iste corrupti maxime, possimus.
					</p>
					<div class="clinet-hand-pic">
						<img src="~/assets/image/testimonial4.png" alt="" />
					</div>
					<div class="clinet-name-job">
						<h4>Daniel Bryan</h4>
						<p>Designer</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>
<style scoped>
.section-clientBox {
	width: 100%;
	padding-bottom: 4vw;
}
.section-clinetBox-container {
	width: 60%;
	height: 400px;
	margin: auto;
	filter: blur(0);
}
.mySecondSwiper.section-clientBox.mySecondSwiper {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 1;
}
/* 卡片內部設定 */
.mySecondSwiper.mySecondSwiper .swiper-slide {
	padding: 20px;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #26313c;
	border-radius: 20px;
}
/* 圓形點點 */
.dottbox {
	width: 30px;
	height: 30px;
	padding: 15px;
	border-radius: 50%;
	margin-bottom: 20px;
	background-color: #36a837;
	display: flex;
	justify-content: center;
	align-items: center;
}
.dottbox i {
	font-size: 36px;
	color: #fff;
}
/* 圓形點點 */
.mySecondSwiper .swiper-slide p {
	text-align: justify;
	margin-bottom: 20px;
	font-size: 16px;
	color: #fff;
}
.clinet-hand-pic {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
}
.swiper-slide .clinet-hand-pic img {
	width: 100%;
}
.clinet-name-job {
	margin-top: auto;
	padding-top: 20px;
}
.swiper-slide .clinet-name-job h4 {
	font-size: 20px;
	color: #fff;
}
.swiper-slide .clinet-name-job p {
	font-size: 12px;
	margin-top: 20px;
	text-align: center;
	color: #fff;
}
@media (min-width: 905px) {
	.mySecondSwiper.mySecondSwiper .swiper-slide-next {
		background-color: #36a837;
		position: relative;
		z-index: 1;
	}
	.mySecondSwiper .swiper-slide-next .dottbox {
		background-color: #26313c;
		color: #fff;
	}
}
@media (max-width: 768px) {
	.mySecondSwiper .swiper-slide i {
		color: #fcfffc;
	}
}
</style>
