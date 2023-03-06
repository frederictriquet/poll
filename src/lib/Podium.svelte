<script lang="ts">
  export let data;
</script>
<div>
  <img src={data.picture_data} alt="">
</div>

<style type="postcss">
  img {
    @apply mx-auto;
	}
</style>