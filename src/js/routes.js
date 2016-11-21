function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'LayoutController as layout'
    })
    .state('root.contact', {
      url: '/contact/:id',
      templateUrl: 'templates/contact.tpl.html',
      controller: 'ContactController as contact'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController as add'
    })

  $urlRouterProvider.otherwise('/');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };