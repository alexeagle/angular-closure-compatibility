import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

declare var angular: ng.IAngularStatic;

angular.module('angularjs-app').directive('helloFromNewAngular', downgradeComponent({component: AppComponent}));

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then((ref) => {
  const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
  adapter.bootstrap(document.body, ['angularjs-app']);
});
