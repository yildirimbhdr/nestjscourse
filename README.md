app.controller.spec.ts = Test dosyası ve test caseleri yazmak için kullanılıyor



Terminal komutları
- nest generate module name = Modül oluşturur
- nest g controller name/controllers/name = Dosya yolu ile birlikte controller olluşturur oluşturur


-@Injectable decoratoru o classın provide edildiği tüm modüllerde kullanılan diğer modül ve controllerların constructları ile direkt instance yaratabilmeyi sağlıyor. Aslında basit bir singleton mantığı içeriyor

-Parametre decoratorlarının yanına yazılar ParseIntPipe ya da ParseStringPipe gelne değerin int ya da string olmasını sağlar bir nevi parse eder

-main.ts de app.setGlobalPrefix('api'); yazarak tüm routeların başına api endpointi ekleyebiliyorsun

-dto açılımı Data Transfer Object. dto bir nevi schema görevi görür gelen datanın hangi koşullarda olması gerektiğini belirler
