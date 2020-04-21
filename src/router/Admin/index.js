export default [
	{
	    path: "/admin",
	    name: "admin",
	    component: () =>
	      import(/* webpackChunkName: "admin" */ "../../views/Admin/index.vue"),
	    children: [
	    	{
			    path: "products",
			    name: "products",
			    component: () =>
			      import(/* webpackChunkName: "products" */ "../../views/Admin/Products/index.vue")
			},
			{
			    path: "categories",
			    name: "categories",
			    component: () =>
			      import(/* webpackChunkName: "categories" */ "../../views/Admin/Categories/index.vue")
			},
	    ]
	},
];