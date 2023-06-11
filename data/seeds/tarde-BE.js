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
  await knex("MerkezPersonel").truncate();
  await knex("Sehir").truncate();
  await knex("hizmet").truncate();
  await knex("users").truncate();
  await knex("AracSayisi").truncate();
  await knex("roles").truncate();
  await knex("gonullu").truncate();
  await knex("danisan").truncate();

  await knex("Sehir").insert([
    {
      sehir_id: 1,
      sehir_adi: "Hatay/iskenderun",
      enlem: 36.22,
      boylam: 36.1,
      sehir_tel_1: "0212 464 42 11",
      sehir_tel_2: "0212 964 13 11",
    },
    {
      sehir_id: 2,
      sehir_adi: "Adiyaman",
      sehir_tel_1: "0212 164 42 11",
      sehir_tel_2: "0212 164 13 11",
      enlem: 38.28,
      boylam: 37.55,
    },
    {
      sehir_id: 3,
      sehir_adi: "Gaziantep",
      sehir_tel_1: "0212 264 42 11",
      sehir_tel_2: "0212 564 13 11",
      enlem: 37.38,
      boylam: 36.86,
    },
    {
      sehir_id: 4,
      sehir_adi: "Sanliurfa",
      sehir_tel_1: "0242 264 42 11",
      sehir_tel_2: "0262 564 13 11",
      enlem: 38.8,
      boylam: 36.9,
    },
    {
      sehir_id: 5,
      sehir_adi: "Kahramanmaras",
      sehir_tel_1: "0512 264 42 11",
      sehir_tel_2: "0312 564 13 11",
      enlem: 36.93,
      boylam: 37.38,
    },
    {
      sehir_id: 6,
      sehir_adi: "Osmaniye",
      sehir_tel_1: "0212 264 44 21",
      sehir_tel_2: "0212 564 43 11",
      enlem: 36.25,
      boylam: 36.86,
    },
    {
      sehir_id: 7,
      sehir_adi: "Malatya",
      sehir_tel_1: "0222 264 42 11",
      sehir_tel_2: "0272 564 13 11",
      enlem: 38.31,
      boylam: 38.14,
    },
    {
      sehir_id: 8,
      sehir_adi: "Diyarbakir",
      sehir_tel_1: "0242 264 42 11",
      sehir_tel_2: "0292 564 15 11",
      enlem: 40.24,
      boylam: 37.7,
    },
  ]);
  await knex("Merkez").insert([
    {
      merkez_id: 1,
      sehir_id: 1,
      merkez_adi: "IBB Afet Koordinasyon Merkezi",
      adres: "test test",
      telefon_numarasi: "05313011111",
    },

    { merkez_id: 2, sehir_id: 1, merkez_adi: "Samandag Konteyner Kent" },
    { merkez_id: 3, sehir_id: 1, merkez_adi: "Orhanli Konteyner Kent" },
    {
      merkez_id: 4,
      sehir_id: 3,
      merkez_adi: "Gorusme Konteyneri - Nurdagi 1 Konteyner Kent",
    },
    {
      merkez_id: 5,
      sehir_id: 3,
      merkez_adi:
        "Mobil Ekip - TOKI Konteyner Egitim Kampusu, Nurdagi B-1 ve C-1",
    },
    { merkez_id: 6, sehir_id: 3, merkez_adi: "Mobil Ekip - Ahbap Okullari" },
    { merkez_id: 7, sehir_id: 3, merkez_adi: "Mobil Ekip - Nurdagi 2" },
    { merkez_id: 8, sehir_id: 3, merkez_adi: "Mobil Ekip - Fatih Mahallesi" },
    { merkez_id: 9, sehir_id: 3, merkez_adi: "Mobil Ekip - Yeni Mahalle" },
    {
      merkez_id: 10,
      sehir_id: 3,
      merkez_adi: "Mobil Ekip - Kurudere Mahallesi",
    },
    {
      merkez_id: 11,
      sehir_id: 2,
      merkez_adi: "Adıyaman Merkez",
    },
    {
      sehir_id: 4,
      merkez_adi: "Şanlıurfa Merkez",
    },
    {
      sehir_id: 5,
      merkez_adi: "Kahramanmaraş Merkez",
    },
    {
      sehir_id: 6,
      merkez_adi: "Osmaniye Merkez",
    },
    {
      sehir_id: 7,
      merkez_adi: "Malatya Merkez",
    },
    {
      sehir_id: 8,
      merkez_adi: "Diyarbakır Merkez",
    },
  ]);
  await knex("Personel").insert([
    {
      personel_id: 1,
      personel_adi: "Sergen",
      personel_soyadi: "Tut",
      personel_telefon_1: "058656",
      personel_telefon_2: "098765432",
      personel_tc: "05615",
      personel_kan_grubu: "Brh+",
      personel_adres: "adresadres",
      personel_calisma_durumu: false,
    },
    {
      personel_id: 2,
      personel_adi: "Ebru ",
      personel_soyadi: "Akkoyun",
      personel_telefon_1: "058652",
      personel_telefon_2: "098765432",
      personel_tc: "062255",
      personel_kan_grubu: "0rh+",
      personel_adres: "adresadres",
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
    {
      merkez_id: 1,
      personel_id: 1,
      etkinlik_adi: "Merkez 1 patlıyo herkes",
      danisan_sayisi: 4,
    },
    {
      merkez_id: 2,
      personel_id: 1,
      etkinlik_adi: "Merkez 2 patlıyo herkes",
      danisan_sayisi: 5,
    },
    {
      merkez_id: 3,
      personel_id: 1,
      etkinlik_adi: "Merkez 3 patlıyo herkes",
      danisan_sayisi: 2,
    },
    //tarih formatı yeniden ele alınabilir
  ]);
  await knex("MerkezPersonel").insert([
    {
      merkez_personel_id: 1,
      personel_id: 1,
      merkez_id: 2,

      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 2,
      personel_id: 2,
      merkez_id: 3,

      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 3,
      personel_id: 3,
      merkez_id: 5,

      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 4,
      personel_id: 7,
      merkez_id: 3,

      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 5,
      personel_id: 6,
      merkez_id: 3,

      saha_adres: "zıttır sokkak no 5",
    },
    {
      merkez_personel_id: 6,
      personel_id: 4,
      merkez_id: 3,

      saha_adres: "zıttır sokkak no 5",
    },

    //tarih formatı yeniden ele alınabilir
  ]);

  await knex("MerkezIsBirligi").insert([
    {
      Merkez_is_birligi_id: 1,
      sehir_id: 1,
      is_birligi_kurum_adi: "İzmit Belediyesi",
    },
    {
      Merkez_is_birligi_id: 2,
      sehir_id: 1,
      is_birligi_kurum_adi: "Mor Yerleske",
    },
    {
      Merkez_is_birligi_id: 3,
      sehir_id: 1,
      is_birligi_kurum_adi: "Samandag Belediyesi",
    },
    {
      Merkez_is_birligi_id: 4,
      sehir_id: 1,
      is_birligi_kurum_adi: "Suna'nin Kizlari",
    },
    { Merkez_is_birligi_id: 5, sehir_id: 2, is_birligi_kurum_adi: "MAYA" },
    { Merkez_is_birligi_id: 6, sehir_id: 3, is_birligi_kurum_adi: "ACEV" },
    { Merkez_is_birligi_id: 7, sehir_id: 4, is_birligi_kurum_adi: "İBB" },
    { Merkez_is_birligi_id: 8, sehir_id: 5, is_birligi_kurum_adi: "MSF" },
    { Merkez_is_birligi_id: 9, sehir_id: 6, is_birligi_kurum_adi: "Unicef" },
    {
      Merkez_is_birligi_id: 10,
      sehir_id: 7,
      is_birligi_kurum_adi: "Hayata Destek Dernegi",
    },
    {
      Merkez_is_birligi_id: 11,
      sehir_id: 1,
      is_birligi_kurum_adi: "World Human Relief ",
    },
  ]);
  await knex("AracSayisi").insert([
    {
      merkez_id: 1,
      binekarac_sayisi: 4,
      gezicikaravan_sayisi: 1,
    },
    {
      merkez_id: 2,
      binekarac_sayisi: 3,
      gezicikaravan_sayisi: 2,
    },
    {
      merkez_id: 3,
      binekarac_sayisi: 5,
      gezicikaravan_sayisi: 1,
    },
    {
      merkez_id: 4,
      binekarac_sayisi: 5,
      gezicikaravan_sayisi: 1,
    },
  ]);
  await knex("Acil_Durum").insert([
    {
      acil_durum_id: 1,
      acil_telefon: "05441563344",
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
  await knex("gonullu").insert([
    {
      gonullu_adi: "ömrü",
      gonullu_soyadi: "can",
      gonullu_numara:"05439748655",
      gonullu_sehir:"Gaziantep",
      gonullu_baslagıc:"04.08.2023",
      gonullu_bitis:"08.08.2023",
      gonullu_motivasyon:"böyle hayatın ."
    },
  ]);
  await knex("danisan").insert([
    {
      danisan_adi: "ömrü",
      danisan_soyadi: "can",
      danisan_numara:"05439748655",
      danisan_sehir:"Gaziantep",
      danisan_yakinlik:"Abisi",
      danisan_basvuru_nedeni:"Hasta psikolojik nedenleri var alın bunu buradan",
      danisan_not:""
    },
  ]);

  await knex("users").insert([
    {
      username: "admin",
      password: "$2a$10$T653aY/iM313QIFsU0B6q.ZdmBlmYc0cXJd.DCYdOLKTiggZ990Py",
      role_id: 1,
    },
  ]);
};
