<script setup>
const { targetNumber } = useAddCount();
const number = ref(null);
const count = ref(500);
const increment = 10;
let interval = null;

const updateNumber = () => {
	count.value += increment;
	if (count.value >= 2010) {
		clearInterval(interval);
		setTimeout(startInterval, 5000);
	}
	number.value.innerHTML = Math.floor(count.value);
};

const startInterval = () => {
	count.value = 500;
	interval = setInterval(updateNumber, 20);
};

onMounted(() => {
	watchEffect(() => {
		if (number.value) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						startInterval();
						observer.disconnect();
					}
				},
				{ threshold: 1 }
			);

			observer.observe(number.value);
		}
	});
});
</script>
<template>
	<section class="section-numRun">
		<div class="section-bulid-number">
			<div class="num">
				<h4 ref="number">{{ number }}</h4>
				<p>Since We Started</p>
			</div>
			<article>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
				a quis delectus adipisicing elit.adipisicing elit.
			</article>
			<div class="num">
				<h4 ref="targetNumber">{{ targetNumber }}</h4>
				<p>Kitchens Designed</p>
			</div>
		</div>
	</section>
</template>

<style></style>
