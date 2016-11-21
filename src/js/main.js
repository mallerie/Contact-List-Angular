import angular from 'angular';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/layout';
import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
import { ContactController } from './controllers/contact';

import { ContactService } from './services/contact-server';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ContactService', ContactService)
  ;