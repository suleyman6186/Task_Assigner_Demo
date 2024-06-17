import { Component } from '@angular/core';

// @Component decorator: Angular'a bu sınıfın bir bileşen olduğunu belirtir ve ilgili metadata'yı sağlar
@Component({
  selector: 'app-root', // Bu bileşenin HTML etiketinde kullanıldığı isim
  templateUrl: './app.component.html', // Bu bileşenin şablon dosyasının yolu
  styleUrls: ['./app.component.css'] // Bu bileşenin stil dosyasının yolu
})
export class AppComponent {
  title = 'taskassignerapp'; // Bileşenin başlığı, bir değişken olarak tanımlanmış
}
