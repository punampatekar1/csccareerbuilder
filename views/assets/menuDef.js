module.exports = {
	items :[
		{
			name: "Home",
			link: "/m/main/",
			icon: "fa-home",
			roles: "customer"
		},
		{
			name: "Create Position",
			link: "/m/positions/#/createpos",
			icon: "fa-group",
			roles: "admin"
		}, 
        {
			name: "Create Feedback Template",
			link: "/m/positions/#/feedbackTmpl/add",
			icon: "fa-group",
			roles: "admin"
		}, 
  		{
			name: "Open Positions",
			link: "/m/positions#/positions",
			icon: "fa-phone",
			roles: "user,exec,customer,vManager,admin"
		},
		{
			name: "Feedback",
			link: "/m/visits/#/feedback",
			icon: "fa-comments",
			roles: "exec,customer"
		},
		{
			name: "Logout",
			link: "/logout",
			icon: "fa-sign-out",
			roles: "user,exec,customer,vManager,admin"
		}
	]
}
