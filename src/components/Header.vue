<script setup>
	import { UserInfoState } from 'store/UserStore'

	const loginPageName = import.meta.env.ROUTER_LOGIN_NAME
</script>

<template>
	<header class="header">
		<div v-if="UserInfoState.email" class="header-right">
			<span>{{ UserInfoState.email }}</span> |
			<span
				style="cursor: pointer"
				@click="
					() => {
						UserInfoState.email = ''
						$route.meta.reProtect?.()
					}
				"
				>Logout</span
			>
		</div>
		<router-link v-else :to="{ name: loginPageName }"> Login </router-link>
	</header>
</template>

<style lang="scss">
	.header {
		text-align: right;
		padding: 16px;
	}
</style>
