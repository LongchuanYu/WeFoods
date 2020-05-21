
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/schedule',
        component: () => import('pages/Schedule/schedule.vue')
      },{
        path:'/cookbooks',
        component: () => import('pages/Cookbooks/cookbooks.vue')
      },{
        path:'/myself',
        component:()=>import('pages/Myself/myself.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
