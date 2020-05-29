const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'/schedule',
    children: [
      {
        path: '/schedule',
        component: () => import('pages/Schedule/schedule.vue'),

      },{
        path:'/cookbooks',
        component: () => import('pages/Cookbooks/cookbooks.vue'),
      },{
        path:'/detail/:id',
        name:'Detail',
        component:()=>import('pages/Cookbooks/detail.vue')
      },{
        path:'detail-edit/:id',
        name:'DetailEdit',
        component:()=>import('pages/Cookbooks/detail_edit.vue'),
        meta:{
          requiresAuth:true
        }
      },{
        path:'/myself',
        component:()=>import('pages/Myself/myself.vue')
      },
    ]
  },{
    path:'/test',
    component:()=>import('components/test.vue')
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
