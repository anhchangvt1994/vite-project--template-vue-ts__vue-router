<script setup lang="ts">
	import Header from 'components/Header.vue'
</script>

<template>
	<div class="layout">
		<div class="main-container">
			<Header />
			<RouterView v-slot="{ Component }">
				<template v-if="Component">
					<Suspense>
						<component :is="Component"></component>
					</Suspense>
				</template>
			</RouterView>
		</div>
		<!-- .main-container -->
	</div>
	<!-- .layout -->
</template>

<style lang="scss">
	.main-container {
		max-width: 1280px;
		min-width: 0;
		min-height: 100vh;
		overflow: hidden;
		padding: 16px;
		margin: 0 auto;
	}
</style>
