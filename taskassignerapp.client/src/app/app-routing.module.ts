import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Uygulamanın yönlendirme yollarını tanımlayan boş bir dizi oluşturur
const routes: Routes = [];

@NgModule({
  // RouterModule'u kök yönlendirme yapılandırması ile birlikte modüle dahil eder
  imports: [RouterModule.forRoot(routes)],
  // RouterModule'u dışa aktararak diğer modüllerde kullanılabilir hale getirir
  exports: [RouterModule]
})
// AppRoutingModule sınıfı, Angular uygulamasının yönlendirme yapılandırmasını tanımlar
export class AppRoutingModule { }
