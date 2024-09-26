import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Importa la función platformBrowserDynamic, que se utiliza para iniciar la aplicación Angular en el navegador.

import { AppModule } from './app/app.module';
// Importa el módulo principal de la aplicación (AppModule), que contiene la configuración y los componentes necesarios para la aplicación.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// Inicia la aplicación Angular llamando a bootstrapModule con AppModule como argumento.
// Si ocurre un error durante la inicialización, se captura y se imprime en la consola.
