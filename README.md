# Haktan Toptan Saç Satış — V5 tasarım demosu

## İçerik
- Siyah / krem / altın responsive tasarım ve mobil menü
- 8 **temsili** saç modeli; ombre düz, ombre dalgalı, karamel balayaj dalgalı, siyah kıvırcık dahil
- Ürün detay penceresi; örnek uzunluk ve gramaj seçimi
- Tarayıcıda saklanan **teklif talep listesi**; WhatsApp üzerinden ürün/varyant/adet bilgisi
- Bireysel ve toptan iletişim bölümleri
- İzmir içi koşullu aynı gün teslimat, mağazadan teslim, alıcı ödemeli kargo
- Henüz onaylanmamış %5 EFT/FAST indirimi açıklaması
- Hukuki sayfalar için **tamamlanmamış örnek bilgi pencereleri**
- Demo sayfalarının arama motorlarınca indekslenmesini engellemeye yönelik robots metadata

## Çalıştırma
Node.js 20+ gerekir. Proje klasöründe `npm install` ve `npm run dev` çalıştırın. Ardından `http://localhost:3000` açın.

## GitHub/Vercel güncellemesi
Mevcut repoya `app/`, `public/`, `package.json`, `tsconfig.json`, `next-env.d.ts`, `README.md` ve gerekiyorsa `.env.example` dosyalarını yükleyin. `node_modules/`, `.next/`, gerçek `.env` dosyalarını yüklemeyin. GitHub güncellemesinden sonra Vercel bağlıysa yeniden deploy eder. Yeni marka için Vercel proje adını ve domaini ayrıca değiştirin.

## ÖNEMLİ — Bu bir satış sitesi DEĞİLDİR
Gerçek ürün veritabanı, stok, fiyat, ödeme kuruluşu, sipariş takibi, kimlik doğrulamalı admin paneli, faturalama, kargo entegrasyonu ve tamamlanmış hukuki belgeler **yoktur**. Sepet bir sipariş değil, yalnızca WhatsApp fiyat teklifi talebidir. EFT/FAST %5 indirim onay bekler. Demo görselleri AI ile üretilmiştir ve gerçek ürünleri temsil etmez. Sitede 7/24 mesaj gönderilebilmesi, 7/24 yanıt veya mağazanın açık olduğu anlamına gelmez.

## Canlı satış öncesi gerekenler
İşletmenin resmî unvanı, vergi/fatura bilgileri, domain, e-posta, gerçek ürün fotoğrafları, ürün varyantlarına göre stok ve fiyat, kargo ücret/kuralları, ödeme kuruluşu hesabı, mesafeli satış ve ön bilgilendirme metinleri, KVKK/çerez metinleri ve güvenlik/ödeme testleri. Hukuki metinler yetkili danışmanla onaylanmalıdır.


## V6 gerçek işletme medya güncellemesi
- 12 fotoğraf: `public/images/real/urun-01.webp` ... `urun-12.webp`
- 7 video: `public/videos/urun-01.mp4` ... `urun-07.mp4`
- Ana sayfa ve koleksiyon gerçek işletme fotoğraflarını kullanır; video galerisi eklenmiştir.
- Ürün isimleri görsel betimlemesidir; ürün kodları, gramaj, uzunluk, stok ve fiyat işletme onayı bekler.
- Bu demo gerçek sipariş/ödeme almaz.
- GitHub'a yeni sürümü yüklerken önceki dosyaların üzerine güncelleme yapın; `public` klasörünü eksiksiz ekleyin.


## V7 tasarım iyileştirmeleri
- Masaüstü ve mobil yazı boyutları büyütüldü; butonların dokunma alanları iyileştirildi.
- Gerçek işletme görselleriyle sarı, kumral ve kahve tonları için renk rehberi eklendi.
- Video galerisindeki başlıklar açıklayıcı hale getirildi ve ilk yüklemede video indirme azaltıldı.
- Mobil ürün kartları, menü ve tipografide okunabilirlik düzenlendi.
- Kesin ürün ölçüleri ve fiyatları doğrulanmadığından demo / teklif talebi akışı korundu.
- Üretim öncesinde resmi işletme bilgileri, yasal metinler, ödeme altyapısı ve ürün stok/fiyat bilgileri doğrulanmalıdır.
