# COSTY - E-Commerce Web Application 🛒

COSTY, modern bir e-ticaret platformunun temel işlevlerini (ürün listeleme, sepet yönetimi ve dinamik veri çekme) sergileyen kapsamlı bir web uygulamasıdır. Proje, sadece görsel bir arayüz değil, aynı zamanda bir backend simülasyonu ile entegre çalışan dinamik bir yapıya sahiptir.

## 🚀 Öne Çıkan Özellikler
* **Dinamik Veri Yönetimi:** Ürünler `db.json` dosyasından JavaScript `fetch` API kullanılarak asenkron bir şekilde çekilir.
* **Gelişmiş Sepet Sistemi:** Ürünlerin sepete eklenmesi, miktarların güncellenmesi ve toplam tutarın anlık hesaplanması.
* **Modüler Mimari:** JavaScript `type="module"` yapısı kullanılarak kod organizasyonu sağlanmıştır.
* **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlar için tam uyumlu (responsive) arayüz.

## 🛠️ Kullanılan Teknolojiler
* **HTML5 & CSS3:** Semantik yapı ve modern tasarım düzenleri (Flexbox & Grid).
* **JavaScript (ES6+):** DOM manipülasyonu, asenkron işlemler ve sepet mantığı.
* **JSON Server:** Veritabanı ve REST API simülasyonu.
* **BoxIcons:** Şık ve kullanıcı dostu ikon seti.

## 💻 Proje Kurulumu ve Çalıştırma
Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyin:

1. **Backend'i Başlatın:**
   Terminali açın ve `db.json` dosyasının bulunduğu klasörde şu komutu çalıştırın:
   ```bash
   json-server --watch db.json --port 3000
##tanıtım 

![](costy.gif)
  
