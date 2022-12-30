<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	export let width;
	export let height;
	export let points;

	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	const range = (start, end, step = 1) =>
		Array.from(Array(Math.ceil((end - start) / step) + 1).keys()).map((x) => step * x + start);

	function computeTicks(points) {
		const maxValue = Math.max(...points.map((e) => e.votes));
		if (maxValue < 5) return range(0, 5);
		if (maxValue < 10) return range(0, 10, 5);
		if (maxValue < 40) return range(0, maxValue, 5);
		return range(0, maxValue, 10);
	}

	$: yTicks = computeTicks(points);

	$: xScale = scaleLinear()
		.domain([0, points.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);
	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / points.length;
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%" />
					<text y="-4">{tick}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each points as point, i}
				<g class="tick" transform="translate({xScale(i)},{height})">
					<text x={barWidth / 2} y="-4">{point.name}</text>
				</g>
			{/each}
		</g>

		<g class="bars">
			{#each points as point, i}
				<rect
					x={xScale(i) + 2}
					y={yScale(point.votes)}
					width={barWidth - 4}
					height={yScale(0) - yScale(point.votes)}
				/>
			{/each}
		</g>
	</svg>
</div>

<style>
	.chart {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 200px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		fill: gray;
		stroke: none;
		opacity: 0.65;
	}
</style>
