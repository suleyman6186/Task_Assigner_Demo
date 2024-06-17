import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Angular uygulamasını başlatan fonksiyon
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err)); // Başlatma sırasında oluşabilecek hataları yakalar ve konsola yazdırır
