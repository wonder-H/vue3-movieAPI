import { createRouter, createWebHashHistory } from 'vue-router'
import Search from './Search'
import About from './About'
import Movie from './Movie'

export default createRouter({
  //#형태 아니라면 createWebHistory로 적용
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Search
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/movie',
      component: Movie
    }
  ]
})
