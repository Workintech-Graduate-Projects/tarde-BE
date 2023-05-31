const { default: knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("MerkezIsBirligi").truncate();
  await knex("Acil_Durum").truncate();
  await knex("Personel").truncate();
  await knex("Merkez").truncate();
  await knex("Sehir").truncate();
  await knex("hizmet").truncate();
  await knex("users").truncate();
  await knex("AracSayisi").truncate();

  await knex("Sehir").insert([
    { sehir_id: 1, sehir_adi: "Hatay/iskenderun" },
    { sehir_id: 2, sehir_adi: "Adiyaman" },
    { sehir_id: 3, sehir_adi: "Gaziantep" },
    { sehir_id: 4, sehir_adi: "Sanliurfa" },
    { sehir_id: 5, sehir_adi: "Kahramanmaras" },
    { sehir_id: 6, sehir_adi: "Osmaniye" },
    { sehir_id: 7, sehir_adi: "Malatya" },
    { sehir_id: 8, sehir_adi: "Diyarbakir" },
  ]);
  await knex("Merkez").insert([
    {
      merkez_id: 1,
      sehir_id: 1,
      merkez_adi: "IBB Afet Koordinasyon Merkezi",
      adres: "test test",
      enlem: 38.3233075,
      boylam: 37.7291557,
      telefon_numarasi: 05313011111,
    },
    {
      merkez_id: 2,
      sehir_id: 1,
      merkez_adi: "Harbiye/Hidropark Cadırkent",
      adres: "test test",
      enlem: 38.3233075,
      boylam: 37.7291557,
      telefon_numarasi: 05313011111,
    },
    { merkez_id: 3, sehir_id: 1, merkez_adi: "Samandag Konteyner Kent" },
    { merkez_id: 4, sehir_id: 1, merkez_adi: "Orhanli Konteyner Kent" },
    {
      merkez_id: 5,
      sehir_id: 3,
      merkez_adi: "Gorusme Konteyneri - Nurdagi 1 Konteyner Kent",
    },
    {
      merkez_id: 6,
      sehir_id: 3,
      merkez_adi:
        "Mobil Ekip - TOKI Konteyner Egitim Kampusu, Nurdagi B-1 ve C-1",
    },
    { merkez_id: 7, sehir_id: 3, merkez_adi: "Mobil Ekip - Ahbap Okullari" },
    { merkez_id: 8, sehir_id: 3, merkez_adi: "Mobil Ekip - Nurdagi 2" },
    { merkez_id: 9, sehir_id: 3, merkez_adi: "Mobil Ekip - Fatih Mahallesi" },
    { merkez_id: 10, sehir_id: 3, merkez_adi: "Mobil Ekip - Yeni Mahalle" },
    {
      merkez_id: 11,
      sehir_id: 3,
      merkez_adi: "Mobil Ekip - Kurudere Mahallesi",
    },
    {
      merkez_id: 12,
      sehir_id: 2,
      merkez_adi:
        "Mersin Buyuksehir Belediyesi Konteyner Kent, K12 Çalışma ve Yaşam Ofisi",
    },
  ]);
  await knex("Personel").insert([
    {
      personel_id: 1,
      personel_adi: "Sergen",
      personel_soyadi: "Tut",
      personel_telefon_1: "058656",
      personel_tc: "05615",
      personel_kan_grubu: "Brh+",
      personel_calisma_durumu: false,
    },
    {
      personel_id: 2,
      personel_adi: "Ebru ",
      personel_soyadi: "Akkoyun",
      personel_telefon_1: "058652",
      personel_tc: "062255",
      personel_kan_grubu: "0rh+",
      personel_calisma_durumu: true,
    },
    { personel_id: 3, personel_adi: "Tilbe Yigit" },
    { personel_id: 4, personel_adi: "Ayse Baykara" },
    { personel_id: 5, personel_adi: "Fatma Boz" },
    { personel_id: 6, personel_adi: "Feyza Nur Ak" },
    { personel_id: 7, personel_adi: "Mehmet Zekeriya Cincinoglu" },
    { personel_id: 8, personel_adi: "Busra Basik" },
    {
      personel_id: 9,
      personel_adi: "Zeynep Gultenkilisli",
    },
    { personel_id: 10, personel_adi: "Deniz Onuk" },
    { personel_id: 11, personel_adi: "Sinan Turkmen" },
    { personel_id: 12, personel_adi: "Evin Korsu" },
    { personel_id: 13, personel_adi: "Pinar Avcil" },
    { personel_id: 14, personel_adi: "Havvanur Mercimek" },
    { personel_id: 15, personel_adi: "Merve Nur Kazgi" },
    { personel_id: 16, personel_adi: "Sumeyra Al" },
    { personel_id: 17, personel_adi: "Canan Tutunen" },
    { personel_id: 18, personel_adi: "Dilan Akgul" },
    { personel_id: 19, personel_adi: "Abidin Aydin" },
    { personel_id: 20, personel_adi: "Mehmet Ercan" },
    { personel_id: 21, personel_adi: "Yarencan Cingir" },
    { personel_id: 22, personel_adi: "Ayca Dagilgan " },
    { personel_id: 23, personel_adi: "Gozde Murt" },
    { personel_id: 24, personel_adi: "Sumeyra Sulu" },
    { personel_id: 25, personel_adi: "Derya Genc" },
    { personel_id: 26, personel_adi: "Sevgi Tarhan" },
    { personel_id: 27, personel_adi: "Şevval Çoban" },
    { personel_id: 28, personel_adi: "Gizem Yilmaz" },
  ]);

  await knex("hizmet").insert([
    { merkez_id: 1, personel_id: 1, danisan_sayisi: 32, tarih: "01.02.2023" },
    //tarih formatı yeniden ele alınabilir
  ]);
  await knex("MerkezPersonel").insert([
    {
      merkez_personel_id: 1,
      personel_id: 1,
      merkez_id: 2,
      danisan_sayisi: 5,
      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 2,
      personel_id: 2,
      merkez_id: 3,
      danisan_sayisi: 4,
      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 3,
      personel_id: 3,
      merkez_id: 5,
      danisan_sayisi: 6,
      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 4,
      personel_id: 4,
      merkez_id: 3,
      danisan_sayisi: 2,
      saha_adres: "zıttır sokkak no 5",
    },

    //tarih formatı yeniden ele alınabilir
  ]);

  await knex("MerkezIsBirligi").insert([
    {
      Merkez_is_birligi_id: 1,
      merkez_id: 1,
      is_birligi_kurum_adi: "İzmit Belediyesi",
    },
    {
      Merkez_is_birligi_id: 2,
      merkez_id: 1,
      is_birligi_kurum_adi: "Mor Yerleske",
    },
    {
      Merkez_is_birligi_id: 3,
      merkez_id: 1,
      is_birligi_kurum_adi: "Samandag Belediyesi",
    },
    {
      Merkez_is_birligi_id: 4,
      merkez_id: 1,
      is_birligi_kurum_adi: "Suna'nin Kizlari",
    },
    { Merkez_is_birligi_id: 5, merkez_id: 1, is_birligi_kurum_adi: "MAYA" },
    { Merkez_is_birligi_id: 6, merkez_id: 1, is_birligi_kurum_adi: "ACEV" },
    { Merkez_is_birligi_id: 7, merkez_id: 1, is_birligi_kurum_adi: "İBB" },
    { Merkez_is_birligi_id: 8, merkez_id: 1, is_birligi_kurum_adi: "MSF" },
    { Merkez_is_birligi_id: 9, merkez_id: 1, is_birligi_kurum_adi: "Unicef" },
    {
      Merkez_is_birligi_id: 10,
      merkez_id: 1,
      is_birligi_kurum_adi: "Hayata Destek Dernegi",
    },
    {
      Merkez_is_birligi_id: 11,
      merkez_id: 1,
      is_birligi_kurum_adi: "World Human Relief ",
    },
  ]);
  await knex("AracSayisi").insert([
    {
      arac_sayisi_id: 1,
      merkez_id: 1,
      arac_adi: "binek",
      arac_sayisi: 1,
    },
  ]);
  await knex("Acil_Durum").insert([
    {
      acil_durum_id: 1,
      acil_telefon: 05441563,
      personel_id: 1,
      acil_isim: "fatma",
      acil_soyisim: "fsasda",
      acil_bagi: "anaa",
    },
  ]);
  
  await knex("roles").insert([
    {
      role_id: 1,
      role_name: "admin",
    },
  ]);
  await knex("users").insert([
    {
      username: "admin",
      password: "$2a$10$T653aY/iM313QIFsU0B6q.ZdmBlmYc0cXJd.DCYdOLKTiggZ990Py",
    },
  ]);
};
