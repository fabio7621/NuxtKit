export const useAddCount = () => {
	const targetNumber = ref(null);
	const count = ref(1);
	const increment = 1;
	let interval = null;

	const updateNumber = () => {
		count.value += increment;
		if (count.value >= 395) {
			clearInterval(interval);
		}
		targetNumber.value.innerHTML = Math.floor(count.value);
	};

	const startInterval = () => {
		count.value = 1;
		interval = setInterval(updateNumber, 10);
	};

	onMounted(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					startInterval();
					observer.disconnect();
				}
			},
			{ threshold: 1 }
		);

		observer.observe(targetNumber.value);
	});
	return { targetNumber };
};
