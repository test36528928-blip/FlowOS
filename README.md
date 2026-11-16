# FlowOS

**FlowOS**, Arch Linux tabanlı ve KDE Plasma masaüstü ortamını kullanan bir Linux işletim sistemi projesidir. Proje, kendi logosu ve Calamares kurucusuyla özgün bir masaüstü ve kurulum deneyimi sunmayı amaçlar.

## Öne çıkanlar

- **Arch Linux tabanı:** Esnek ve özelleştirilebilir bir Linux altyapısı.
- **KDE Plasma:** Modern ve kişiselleştirilebilir masaüstü ortamı.
- **Calamares kurucusu:** Grafik arayüzü üzerinden işletim sistemi kurulumu.
- **FlowOS logosu:** Projeye ait siyah, geometrik ve piksel ayrıntıları taşıyan görsel kimlik.
- **Birden fazla mimari hedefi:** x86_64 ve aarch64 sistemler için destek.

<p align="center">
  <img src="flowos-logo-black.png" alt="FlowOS logosu" width="220">
</p>

## Sistem gereksinimleri

| Bileşen | Minimum gereksinim | Önerilen |
|---|---|---|
| **İşlemci** | 64-bit, çift çekirdekli, 1.5 GHz | Çift çekirdek / 4 izlek, 2.0 GHz veya üzeri |
| **Bellek (RAM)** | Kurulu sistem için en az 1 GB | Canlı sistem (Live ISO) ve pratik kullanım için 2.5–4 GB veya üzeri |
| **Depolama alanı** | En az 10 GB boş alan | 20–25 GB boş alan |
| **Mimari** | x86_64 (64-bit Intel/AMD)| — |
| **Grafik donanımı** | OpenGL 2.1 veya OpenGL ES 2.0 desteği, en az 128 MB VRAM | OpenGL 3.3 veya Vulkan 1.1 desteği, 256 MB veya üzeri VRAM |
| **ISO imajı** | Yaklaşık 1.8 GB | Boyut sürüme göre değişebilir |

## FlowOS hakkında

FlowOS, Arch Linux tabanlı bir işletim sistemi projesidir. KDE Plasma masaüstü ortamını kullanır ve sistem kurulumu için Calamares kurucusunu içerir.

Bu depo, FlowOS’un kaynak kodlarını, sistem yapılandırmalarını, kurulum dosyalarını, proje belgelerini ve görsel materyallerini bir araya getirir. Depo içeriği proje geliştikçe güncellenir.

## Kurulum

FlowOS’u kurmak için yayımlanan ISO imajını indirip önyüklenebilir bir USB belleğe yazabilirsin.

1. FlowOS ISO imajını edin.
2. İmajı uygun bir USB yazma aracıyla USB belleğe aktar.
3. Bilgisayarı USB bellekten başlat.
4. FlowOS canlı ortamı açıldığında sistemi deneyebilir veya kurulumu başlatabilirsin.
5. Calamares kurucusundaki adımları izleyerek kurulumu tamamla.

Kurulum sırasında disk ve bölüm seçeneklerini dikkatlice kontrol et. Kurulum hedefini seçmeden önce önemli dosyalarını yedekle.

## Depo içeriği

Bu depo FlowOS projesiyle ilgili dosyaları içerir. Dizin ve dosyaların ayrıntılı açıklaması, depo yapısı geliştikçe eklenebilir.

| Dosya veya dizin | Açıklama |
|---|---|
| `README.md` | FlowOS proje bilgileri ve belgeleri |
| `flowos-logo-black.png` | FlowOS logosu |
| Diğer proje dosyaları | Sistem, kurulum ve geliştirme dosyaları |

## Katkıda bulunma

FlowOS için hata bildirimi, öneri veya katkı paylaşmak isteyenler GitHub deposundaki **Issues** ve **Pull requests** bölümlerini kullanabilir.

Bir hata bildirirken FlowOS sürümünü, kullanılan donanımı, hatanın nasıl oluştuğunu ve varsa hata mesajını eklemek sorunun incelenmesine yardımcı olur. Günlük veya ekran görüntüsü paylaşmadan önce kişisel bilgileri kontrol et.

## Sürümler

FlowOS’un ISO imajları ve sürüm notları GitHub deposunun **Releases** bölümünde paylaşılır. Her sürüm için yeni özellikler, düzeltmeler, bilinen sorunlar ve indirme dosyaları burada duyurulabilir.

## Lisans

FlowOS, MIT Lisansı altında yayımlanmaktadır. Ayrıntılar için depodaki [`LICENSE`](LICENSE) dosyasına bakın.

## Kullanılan projeler

FlowOS aşağıdaki açık kaynaklı projelerden yararlanır:

- [Arch Linux](https://archlinux.org/)
- [KDE Plasma](https://kde.org/plasma-desktop/)
- [Calamares](https://calamares.io/)

Bu projelerin kendi lisansları ve kullanım koşulları bulunabilir.
``` **Not:** `aarch64` desteğini README’de belirtmek, ARM64 için de FlowOS imajı veya kurulum yolu sunacağın anlamına gelir.
