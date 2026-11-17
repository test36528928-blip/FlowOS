# FlowOS

**FlowOS**, Arch Linux tabanlı, KDE Plasma masaüstü ortamını kullanan bir Linux işletim sistemi projesidir. Calamares kurucusu, FlowOS’a ait sistem profili ve görsel düzenlemeleriyle tek bir kurulum imajında bir araya gelir.

FlowOS’un amacı; Linux’un esnekliğini, KDE Plasma’nın özelleştirilebilir masaüstü deneyimini ve kendine ait bir proje kimliğini bir arada sunmaktır. Bu depo, FlowOS’un ArchISO profilini, masaüstü ayarlarını, kurulum yapılandırmalarını ve görsel varlıklarını içerir.

[🌐 FlowOS web sitesi](https://flowosweb.netlify.app) · [⬇️ Sürümleri ve ISO dosyalarını indir](https://github.com/test36528928-blip/FlowOS/releases)   [🌐 FlowOS geçici web sitesi](https://flowos-temporary.vercel.app)

## FlowOS’un yaklaşımı

FlowOS; masaüstünü, başlangıç deneyimini ve kurulum adımlarını tutarlı bir bütün hâline getirmeyi hedefler. Sistem profili Arch Linux paketleri üzerine kuruludur. Masaüstü deneyimi KDE Plasma bileşenleriyle hazırlanır; kurulum akışı ise Calamares yapılandırması üzerinden sunulur.

Proje, kullanıcıların bir ISO ile sistemi başlatıp canlı ortamı görmesini ve kurulum seçeneğine ulaşmasını amaçlar. FlowOS’a özgü profil dosyaları ve yapılandırmalar bu depoda tutulur; yayımlanabilir ISO imajları GitHub Releases bölümünden paylaşılır.

## Öne çıkan bileşenler

### Arch Linux tabanı

FlowOS’un profilinde Arch Linux paketleri ve ArchISO ile uyumlu yapılandırmalar bulunur. Paket manifestleri mimariye göre ayrı dosyalarda tutulur. Sistem imajı oluşturulurken kullanılan profil; paket listelerini, canlı sistem yapılandırmalarını, önyükleme dosyalarını ve masaüstü ayarlarını bir araya getirir.

### KDE Plasma masaüstü

FlowOS’un masaüstü ortamı KDE Plasma’dır. Profilde Plasma masaüstü ve çalışma alanı bileşenlerinin yanı sıra SDDM oturum açma yöneticisi, Konsole terminali, Dolphin dosya yöneticisi, Ark arşiv yöneticisi, Kate metin düzenleyicisi ve Sistem Ayarları gibi bileşenler yer alır.

Masaüstü düzeni, renk şeması, başlangıç görünümü ve kullanıcıya sunulan varsayılan ayarlar FlowOS profili içindeki yapılandırmalarla belirlenir. Kullanıcı tercihleri ve FlowOS’a ait Plasma düzenlemeleri profilin ilgili dosyalarında saklanır.

### Calamares kurucusu

FlowOS, grafik arayüzlü kurulum için Calamares yapılandırmasını içerir. Kurulum akışında karşılama, dil, klavye, bölüm seçimi, kullanıcı oluşturma ve tamamlanma adımları yer alır. FlowOS’un Calamares marka dosyaları ve modül ayarları profil içindeki ilgili dizinlerde bulunur.

Kurulum sırasında disk ve bölüm seçimini dikkatlice incele. Kurulum hedefindeki mevcut veriler etkilenebileceği için önemli dosyalarını önceden yedekle.

## FlowOS logosu

FlowOS logosu, projenin görsel kimliğini temsil eder. Depodaki logo dosyası README’de de kullanılır.

<p align="center">
  <img src="flowos-logo-black.png" alt="FlowOS logosu" width="220">
</p>

## Masaüstü görünümü

FlowOS’un masaüstü görünümü KDE Plasma yapılandırmaları, FlowOS renk şeması, oturum açma ekranı ve projeye ait duvar kâğıdıyla şekillenir. Duvar kâğıdı dosyası profil içinde yer alır ve kurulacak sistemin arka plan görseli olarak kullanılır.

![FlowOS masaüstü duvar kâğıdı](profile/airootfs/usr/share/backgrounds/flowos/FlowOS-Wallpaper.jpg)

## Sistem gereksinimleri

Aşağıdaki değerler FlowOS için belirtilen hedef gereksinimlerdir. Canlı ortamın kullanılabilirliği, donanıma ve aynı anda çalışan uygulamalara göre değişebilir.

| Bileşen | Minimum gereksinim | Önerilen |
|---|---|---|
| İşlemci | 64-bit, çift çekirdekli, 1.5 GHz | Çift çekirdek / 4 izlek, 2.0 GHz veya üzeri |
| Bellek (RAM) | Kurulu sistem için en az 1 GB | Canlı sistem ve pratik kullanım için 2.5–4 GB veya üzeri |
| Depolama alanı | En az 10 GB boş alan | 20–25 GB boş alan |
| Mimari | x86_64 (64-bit Intel/AMD) | Bu sürüm için tek ISO imajı |
| Grafik donanımı | OpenGL 2.1 veya OpenGL ES 2.0 desteği, en az 128 MB VRAM | OpenGL 3.3 veya Vulkan 1.1 desteği, 256 MB veya üzeri VRAM |
| ISO imajı | Yaklaşık 1.8 GB | İmaj boyutu sürüme göre değişebilir |

Depodaki mimari paket listeleri, profilin kaynak yapılandırmalarını gösterir. Burada yayımlanan tek ISO imajı yalnızca kendi oluşturulduğu mimariyi destekler; ayrı bir ARM64 imajı yayımlanmadan bu sürüm aarch64 uyumlu olarak değerlendirilmemelidir.

## Kurulum

FlowOS’u kurmak için GitHub Releases bölümündeki ISO imajını indirip önyüklenebilir bir USB belleğe yaz.

1. Releases bölümünden FlowOS ISO imajını indir.
2. İndirdiğin imajı bir USB yazma aracıyla USB belleğe aktar.
3. Bilgisayarı USB bellekten başlat.
4. Canlı FlowOS ortamının açılmasını bekle.
5. Sistemi canlı ortamda incele veya Calamares kurucusunu başlat.
6. Kurulum adımlarını izleyerek dil, klavye, disk ve kullanıcı seçeneklerini belirle.
7. Seçimlerini kontrol edip kurulumu tamamla.

Kurulum seçenekleri bilgisayara, disk düzenine ve kullanılan FlowOS sürümüne göre değişebilir. Bölüm seçimi ekranında doğru diski seçtiğinden emin ol.

## Depo yapısı

Depodaki temel alanlar şunlardır:

| Yol | İçerik |
|---|---|
| README.md | FlowOS proje açıklaması, gereksinimler ve kurulum bilgileri |
| LICENSE | FlowOS projesi için MIT lisans metni |
| flowos-logo-black.png | README’de kullanılan FlowOS logosu |
| profile/profiledef.sh | ISO adı, etiket, sürüm ve önyükleme profili ayarları |
| profile/packages.x86_64 | x86_64 ISO profili için paket listesi |
| profile/packages.aarch64 | ARM64 profil kaynakları için paket listesi |
| profile/pacman.conf | Profilde kullanılan paket yöneticisi yapılandırması |
| profile/airootfs | Canlı sistemin dosya sistemi, masaüstü, servis ve kurulum yapılandırmaları |
| profile/grub, profile/syslinux, profile/efiboot | Önyükleme yapılandırmaları ve ilgili görseller |

## İndirilebilir sürüm

FlowOS ISO imajları yayımlandıklarında GitHub deposunun Releases bölümüne eklenir. Release sayfasında sürüm numarası, imaj dosyası ve o sürüme ait açıklamalar bulunur.

Bu depodaki profil dosyaları kaynak ve yapılandırma amacıyla paylaşılır. ISO imajı, kullanıcıların doğrudan indirmesi için Release dosyası olarak sunulur.

## Katkıda bulunma

FlowOS’a katkı sunmak, hata bildirmek veya öneri paylaşmak isteyenler GitHub deposunun Issues ve Pull requests bölümlerini kullanabilir.

Bir hata bildirirken mümkünse FlowOS sürümünü, kullandığın donanımı, sorunun hangi adımda ortaya çıktığını ve ekranda görünen hata mesajını belirt. Ekran görüntüsü veya günlük eklemeden önce kişisel bilgileri ve gizli verileri kaldır.

Kod ya da yapılandırma değişikliği önerirken değişikliğin neyi amaçladığını ve hangi dosyaları etkilediğini açıklamak incelemeyi kolaylaştırır.

## Lisans

FlowOS’a ait proje çalışmaları depodaki LICENSE dosyasında belirtilen MIT Lisansı kapsamında yayımlanır. Arch Linux, KDE Plasma, Calamares ve depoda kullanılan diğer üçüncü taraf bileşenlerin kendi lisansları ve bildirimleri geçerlidir.

## Kullanılan projeler

- Arch Linux — temel sistem ve paket altyapısı
- ArchISO — canlı ISO profili ve imaj oluşturma yapısı
- KDE Plasma — masaüstü ortamı
- Calamares — grafik kurulum arayüzü

FlowOS bu projelerden yararlanır; ilgili proje adları ve bileşenler kendi sahiplerine aittir.
