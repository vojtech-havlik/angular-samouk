import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WebModule } from './web/web.module';
import { AppModule } from './app/app.module';

function bootstrapModuleDecision() {
  let urlNow: string;
  let urlWeb: string;
  let urlApp: string;
  //let urlTest: string;
  //urlTest = window.location.href;
  urlNow = window.location.href;
  urlWeb = "https://angular-samouk.stackblitz.io/";
  urlApp = "https://angular-samouk.stackblitz.io/app.html";
  
  if (urlNow === urlWeb) {
    console.log("WebModule ("+urlWeb+")");
    //console.log(urlTest);
    platformBrowserDynamic().bootstrapModule(WebModule).then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;
      // Otherwise, log the boot error
    }).catch(err => console.error(err));
  }
  else if (urlNow === urlApp) {
    console.log("AppModule ("+urlApp+")");
    platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;
      // Otherwise, log the boot erro
    }).catch(err => console.error(err));
  }
  else {
    console.log("Ani jedna podmínka neplatí.");
  }
}

bootstrapModuleDecision();