const { default: knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("MerkezIsBirligi").truncate();
  await knex("DanisanSayisi").truncate();
  await knex("MerkezTelefon").truncate();
  await knex("Personel").truncate();
  await knex("Merkez").truncate();
  await knex("Sehir").truncate();

  await knex("Sehir").insert([
    { sehir_id: 1, sehir_adi: "Hatay/iskenderun" },
    { sehir_id: 2, sehir_adi: "Adiyaman" },
    { sehir_id: 3, sehir_adi: "Antep" },
    { sehir_id: 4, sehir_adi: "Urfa" },
    { sehir_id: 5, sehir_adi: "Kahramanmaras" },
    { sehir_id: 6, sehir_adi: "Osmaniye" },
    { sehir_id: 7, sehir_adi: "Malatya" },
    { sehir_id: 8, sehir_adi: "Diyarbakir" },
  ]);
  await knex("Merkez").insert([
    { merkez_id: 1, sehir_id: 1, merkez_adi: "IBB Afet Koordinasyon Merkezi" },
    { merkez_id: 2, sehir_id: 1, merkez_adi: "Harbiye/Hidropark Cadırkent" },
    { merkez_id: 3, sehir_id: 1, merkez_adi: "Samandag Konteyner Kent" },
    { merkez_id: 4, sehir_id: 1, merkez_adi: "Orhanli Konteyner Kent" },
  ]);
  await knex("Personel").insert([
    { personel_id: 1, personel_adi: "Sergen Tut" },
    { personel_id: 2, personel_adi: "Ebru Akkoyun" },
    { personel_id: 3, personel_adi: "Tilbe Yigit" },
    { personel_id: 4, personel_adi: "Ayse Baykara" },
    { personel_id: 5, personel_adi: "Fatma Boz" },
    { personel_id: 6, personel_adi: "Feyza Nur Ak" },
    { personel_id: 7, personel_adi: "Mehmet Zekeriya Cincinoglu" },
    { personel_id: 8, personel_adi: "Busra Basik" },
    { personel_id: 9, personel_adi: "Zeynep Gultenkilisli" },
    { personel_id: 10, personel_adi: "Zeynep Gultenkilisli" },
    { personel_id: 11, personel_adi: "Deniz Onuk" },
    { personel_id: 12, personel_adi: "Sinan Turkmen" },
    { personel_id: 13, personel_adi: "Evin Korsu" },
    { personel_id: 14, personel_adi: "Pinar Avcil" },
    { personel_id: 15, personel_adi: "Havvanur Mercimek" },
    { personel_id: 16, personel_adi: "Merve Nur Kazgi" },
    { personel_id: 17, personel_adi: "Sumeyra Al" },
    { personel_id: 18, personel_adi: "Canan Tutunen" },
    { personel_id: 19, personel_adi: "Dilan Akgul" },
    { personel_id: 20, personel_adi: "Abidin Aydin" },
    { personel_id: 21, personel_adi: "Mehmet Ercan" },
    { personel_id: 22, personel_adi: "Yarencan Cingir" },
    { personel_id: 23, personel_adi: "Ayca Dagilgan " },
    { personel_id: 24, personel_adi: "Gozde Murt" },
    { personel_id: 25, personel_adi: "Sumeyra Sulu" },
    { personel_id: 26, personel_adi: "Derya Genc" },
    { personel_id: 27, personel_adi: "Sevgi Tarhan" },
    { personel_id: 28, personel_adi: "Şevval Çoban" },
  ]);
  await knex("MerkezTelefon").insert([
    { merkez_telefon_id: 1, telefon: "0533 289 00 61" },
    { merkez_telefon_id: 2, telefon: "0535 628 90 52" },
  ]);
  await knex("DanisanSayisi").insert([{ merkez_id: 1, danisan_sayisi: 524 }]);
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
      binek_arac: 1,
      gezici_karavan: 1,
      diger: 0,
    },
  ]);
};
