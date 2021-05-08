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
  urlWeb = 'https://angular-samouk.stackblitz.io/';
  urlApp = 'https://angular-samouk.stackblitz.io/app.html';

  if (urlNow === urlWeb) {
    platformBrowserDynamic()
      .bootstrapModule(WebModule)
      .then(ref => {
        // *** Ensure Angular destroys itself on hot reloads. ***
        // Pokud v okně již existuje instance aplikace (pojmenovaná "ngRef"), dojde k smazání této instance. Až poté je vytvořena nová instance, což zajistí, že nedojde k přehlcení paměti při opakovaném načítání stejné URL adresy.
        if (window['ngRef']) {
          window['ngRef'].destroy();
          console.log('Previously instantiated WebModule (' + urlWeb + ') was destroyed.');
        }
        window['ngRef'] = ref;
        console.log('WebModule (' + urlWeb + ') was instantiated.');
      })
      // *** Otherwise, log the boot error. ***
      .catch(err => console.error(err));
  
  } else if (urlNow === urlApp) {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(ref => {
        // *** Ensure Angular destroys itself on hot reloads. ***
        // Pokud v okně již existuje instance aplikace (pojmenovaná "ngRef"), dojde k smazání této instance. Až poté je vytvořena nová instance, což zajistí, že nedojde k přehlcení paměti při opakovaném načítání stejné URL adresy.
        if (window['ngRef']) {
          window['ngRef'].destroy();
          console.log('Previously instantiated AppModule (' + urlApp + ') was destroyed.');
        }
        window['ngRef'] = ref;
        console.log('AppModule (' + urlApp + ') was instantiated.');
      })
      // *** Otherwise, log the boot error. ***
      .catch(err => console.error(err));

  } else {
    console.log('Ani jedna podmínka neplatí.');
  }
}

bootstrapModuleDecision();