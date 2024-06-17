import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list.component';

// @NgModule decorator: Bu sınıfın bir Angular modülü olduğunu belirtir ve ilgili metadata'yı sağlar
@NgModule({
  // declarations: Bu modül tarafından bildirilen ve kullanılan bileşenler, direktifler ve pipe'lar
  declarations: [
    AppComponent, // Ana bileşen
    TaskListComponent // Görev listesi bileşeni
  ],
  // imports: Bu modülün bağımlı olduğu diğer Angular modülleri
  imports: [
    BrowserModule, // Tarayıcı tabanlı uygulamalar için gerekli modül
    HttpClientModule, // HTTP isteklerini yapmak için kullanılan modül
    BrowserAnimationsModule, // Animasyonları desteklemek için gerekli modül
    MatTableModule, // Angular Material Tablo modülü
    MatCardModule, // Angular Material Kart modülü
    MatToolbarModule, // Angular Material Araç Çubuğu modülü
    MatButtonModule // Angular Material Buton modülü
  ],
  // providers: Bu modül tarafından sağlanan servisler (boş, çünkü bu örnekte servis yok)
  providers: [],
  // bootstrap: Uygulamanın ana bileşeni (kök bileşen)
  bootstrap: [AppComponent]
})
// AppModule sınıfı, uygulamanın kök modülüdür ve Angular uygulamasının ana yapı taşlarını içerir
export class AppModule { }
