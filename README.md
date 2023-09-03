# Nest.js İle İlgili Notlar

Bu README dosyası, Nest.js ile ilgili bazı önemli notları içermektedir.

## Test Dosyaları

- `app.controller.spec.ts`, test dosyalarını ve test senaryolarını yazmak için kullanılır.

## Terminal Komutları

Nest.js projesi oluştururken ve yönetirken sık kullanılan terminal komutları:

- `nest generate module name`: Belirtilen isimde bir modül oluşturur.
- `nest g controller name/controllers/name`: Dosya yolunu belirterek bir controller oluşturur.

## Injectable Decorator

- `@Injectable` decoratoru, bir sınıfın provide edildiği tüm modüllerde kullanılmasını sağlar. Bu, diğer modüller ve controller'ların constructor'ları ile bu sınıfın örneğini doğrudan oluşturabilmesini sağlar. Temelde basit bir singleton mantığı içerir.

## Parametre Decoratorları

- Parametre decoratorlarının yanına eklenen `ParseIntPipe` veya `ParseStringPipe`, belirli bir değerin int veya string türünde olmasını sağlar. Bu, gelen veriyi işlemek ve doğru türde veriyi almak için kullanılır.

## Global Prefix Ayarı

- `main.ts` dosyasında `app.setGlobalPrefix('api')` kullanarak, tüm rotaların başına "api" endpointi ekleyebilirsiniz. Bu, API rotalarınızı daha iyi organize etmek için kullanışlıdır.

## DTO Nedir?

- "DTO" kısaltması "Data Transfer Object" anlamına gelir. DTO'lar, gelen verinin hangi koşullarda ve hangi veri türünde olması gerektiğini belirlemek için kullanılır. Genellikle gelen isteklerin doğrulama ve işlenme süreçlerinde kullanılırlar.

## Önerilen Paketler
- `npm i --save class-validator class-transformer` : Validation işlemi yapmanı sağlar

## Validatörler (class-validator)
- Dtodaki değişkenlerin başına @IsInt() gibi decoratörler yazarak kullanabilirsiniz
- Validator kullanacağınız apinin başına @UsePipes(ValidationPipe) decoratörü eklenmesi gerekli
- Bir Dtonun içerisinde başka bir Dto daha alacaksanız @ValidateNested Decoratörü kullanılabilir ve aynı zamanda @Type(()=> Dto)  decoratörü ile o Dtonun türünü belirleyebilirsiniz

## Exception filters
- Nestjs in otomatik döndürdüğü exceptionları NotFoundException gibi, bizim istediğimiz şekilde döndürmesini sağlıyor
- Kendiniz CustomExceptionlar yaratabilirsiniz. Bunun için sadece oluşturduğunuz class'ı HttpException'dan extends etmeniz yeterlidir.

## Middlewares
- Middleware oluştururken `NestMiddleware` sınıfından implement edilecek
- Oluşturduğunuz sınıfın use() fonksiyonu temel fonksiyondur ve ondan gelen parametreler ile kontroller yapılabilir
- next parametresine `NextFunction` classı eklenecek
- Middleware kullanmak için module tarafında `configure` methodu kullanılır. Ve gelen consumer değeri ile ayarlamalar yapılır. Dökümantasyonda ilgili kaynak detaylı anlatılıyor

## Typeorm With Mysql
- Entityler ile çalışıyor app.module içerisinde genel configuration işlemlerini yapıyoruz. `synchronize` parametresi debugda true olabilir fakat canlıda false olmalı. Bu veri kaybına yol açabilir
- Entityleri `@Entity()` decorator'u ile oluşturuyoruz

Bu notlar, Nest.js ile ilgili önemli kavramları ve kullanımı hakkında bilgi vermektedir. Projelerinizde bu kavramları ve yönergeleri kullanarak Nest.js'i daha etkili bir şekilde kullanabilirsiniz.


