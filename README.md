# İşletme Görev Atama Sistemi

## Amaç
Bu proje, bir işletmede farklı zorluk derecelerine sahip altı çeşit işlemi adil bir şekilde altı çalışana günlük olarak atamayı amaçlamaktadır. İşletme sahibi, her işlem için belirli bir personele sabit görev atamak yerine, zorluk derecesine göre adil bir dağılım ile personelin görevlerinin her gün sistem tarafından belirlenmesini istemektedir. Görevlerin ardışık olarak zorluk derecesinde ilerlememesi önemlidir.

## Back-End

### Controllers

#### TaskAssignmentController.cs
- Çalışanlar, işlemler ve çalışma günleri için gerekli servisleri kullanarak görev atamalarını oluşturur.
- Her gün için tüm işlemler karıştırılır ve uygun çalışanlara atanır.
- Aynı görev bir çalışana tekrar verilmez.
- Görev atamaları tamamlandıktan sonra çalışanların görev geçmişi temizlenir.
- **API Endpoint**: `GET /api/TaskAssignment`

#### EmployeeController.cs
- Çalışan bilgilerini sağlar.
- **API Endpoint**: `GET /api/Employee`

#### WorkingDayController.cs
- Çalışma günlerini sağlar.
- **API Endpoint**: `GET /api/WorkingDay`

### Models

#### Employee.cs
- Çalışan bilgilerini tutar.
- **Properties**: Name, Surname

#### Process.cs
- İşlem bilgilerini tutar.
- **Properties**: Name, Difficulty

#### TaskAssignment.cs
- Görev atama bilgilerini tutar.
- **Properties**: EmployeeName, EmployeeSurname, ProcessName, ProcessDifficulty, Day

### Services

#### EmployeeService.cs
- Çalışan bilgilerini sağlar.
- **Method**: `GetEmployees()`

#### ProcessService.cs
- İşlem bilgilerini sağlar.
- **Method**: `GetProcesses()`

#### WorkingDayService.cs
- Çalışma günlerini sağlar.
- **Method**: `GetDays()`

## Front-End

### Services

#### TaskService.ts
- API çağrıları yaparak görev atamalarını, çalışanları ve günleri alır.
- **Methods**: `getTaskAssignments()`, `getEmployees()`, `getDays()`

### Components

#### TaskListComponent.ts
- Görev atamalarını yükler ve görüntüler.
- ASSIGN TASKS butonuna basıldığında görev atamalarını yeniler.
- Her gün için görevleri çalışanlara göre gruplar ve zorluk derecelerini hesaplar.

#### TaskListComponent.html
- Görev atamalarını tablo halinde görüntüler.
- Her günün ve her çalışanın aldığı görevleri ve toplam zorluk derecelerini gösterir.

#### TaskListComponent.css
- Tablo ve buton için stil tanımları içerir.

## İşleyiş

### Veri Yükleme
- Sayfa yüklendiğinde, çalışma günleri, çalışanlar ve görev atamaları back-end'den alınır.

### Görev Atamaları
- ASSIGN TASKS butonuna basıldığında, görev atamaları yenilenir ve yeniden dağıtılır.

### Gösterim
- Tüm görev atamaları ve zorluk dereceleri bir tablo içinde kullanıcıya gösterilir.

Bu proje, her gün tüm görevlerin tamamlanmasını ve çalışanların görevlerinin adil bir şekilde dağıtılmasını sağlar.

## Proje Bilgileri
- Toplamda 6 Gün, 6 Çalışan ve 6 Görev mevcuttur. Her gün 6 görevin tamamının ataması yapılmaktadır.
