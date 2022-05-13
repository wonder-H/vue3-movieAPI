


<template>
	<RouterLink
		to="/"
		class="logo"
	>
		<span>Search</span>MOVIES
	</RouterLink>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
	@import "@/scss/main";

	.logo {
		font-family: "Heebo", sans-serif;
		font-size: 30px;
		font-weight: 900;
		color: $black;
		text-decoration: none;
		&:hover {
			color: $black;
		}
		span {
			color: $blue;
		}
	}
</style>