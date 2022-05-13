<template>
	<header>

		<Logo />
		<!-- nav-pills 부트스트랩이 요구하는 클래스명 추가 -->
		<div class="nav nav-pills">
			<div
				v-for="menu in nav"
				:key="menu.name"
				class="nav-item"
			>
				<!-- active-class -> 뷰에서 active일때 사용할 클래스를 부트스트랩의 요구에 맞춰 설정 -->
				<RouterLink
					:to="menu.href"
					active-class="active"
					class="nav-link"
				>
					{{menu.name}}
				</RouterLink>
			</div>
		</div>
	</header>
</template>

<script>
  import Logo from '@/components/Logo'

export default {
  components:{
    Logo
  },
  data(){
    return {
      nav: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie',
        },
                {
          name: 'About',
          href: '/about',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
	header {
		height: 70px;
		padding: 0 40px;
		display: flex;
		align-items: center;
		.logo {
			margin-right: 40px;
		}
		a {
			font-weight: 900;
		}
	}
</style>
