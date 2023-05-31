/** @param { import("knex").Knex } knex
 *
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Sehir", (tablo) => {
      tablo.increments("sehir_id"); //1-1 arttırmasını belirttiğimiz ifade sadece pk kolonlarında belirtiyoruz.
      tablo.string("sehir_adi").notNullable(); //acaba string mi olmalıydı --evet string olmalıydı
    })
    .createTable("Merkez", (tablo) => {
      tablo.increments("merkez_id");
      tablo.string("merkez_adi").notNullable();
      tablo.decimal("enlem");
      tablo.decimal("boylam");
      tablo.string("merkez_telefon_1");
      tablo.string("merkez_telefon_2");
      tablo
        .integer("sehir_id")
        .notNullable()
        .references("sehir_id")
        .inTable("Sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tablo.string("adres");
      tablo.string("telefon_numarasi");
      tablo.dateTime("hizmet_baslangic_tarihi");
    })

    .createTable("Personel", (tablo) => {
      tablo.increments("personel_id");
      tablo.string("personel_adi").notNullable();
      tablo.string("personel_soyadi");
      tablo.string("personel_telefon_1");
      tablo.string("personel_telefon_2");
      tablo.string("personel_tc");
      tablo.string("personel_kan_grubu");
      tablo.string("personel_adres");
      tablo.boolean("personel_calisma_durumu");
    })
    .createTable("MerkezPersonel", (tablo) => {
      tablo.increments("merkez_personel_id");
      tablo
        .integer("personel_id")
        .notNullable()
        .references("personel_id")
        .inTable("Personel")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo
        .integer("merkez_id")
        .notNullable()
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.integer("danisan_sayisi").notNullable();
      // tablo.dateTime("tarih");
      tablo.string("saha_adres");
    })
    .createTable("Acil_Durum", (tablo) => {
      //sehir_id
      tablo.increments("acil_durum_id");
      tablo
        .integer("personel_id")
        .references("personel_id")
        .inTable("Personel")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.string("acil_telefon");
      tablo.string("acil_isim");
      tablo.string("acil_soyisim");
      tablo.string("acil_bagi");
    })
    .createTable("MerkezIsBirligi", (tablo) => {
      tablo.increments("Merkez_is_birligi_id");
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.string("is_birligi_kurum_adi").notNullable();
    })
    .createTable("AracSayisi", (tablo) => {
      tablo.increments("arac_sayisi_id");
      tablo.string("arac_adi").notNullable();
      tablo.integer("arac_sayisi").notNullable();
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("hizmet", (tablo) => {
      tablo.increments("hizmet_id");
      tablo
        .integer("personel_id")
        .notNullable()
        .references("personel_id")
        .inTable("Personel")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo
        .integer("merkez_id")
        .notNullable()
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.integer("danisan_sayisi").notNullable();
      tablo.dateTime("tarih");
    })
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("role_name", 32).notNullable().unique();
    })
    .createTable("users", (tablo) => {
      tablo.increments("user_id");
      tablo.string("username", 128).notNullable().unique();
      tablo.string("password", 128).notNullable();
      tablo
        .integer("role_id")
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
    .dropTableIfExists("hizmet")
    .dropTableIfExists("AracSayisi")
    .dropTableIfExists("MerkezPersonel")
    .dropTableIfExists("MerkezIsBirligi")
    .dropTableIfExists("Acil_Durum")
    .dropTableIfExists("DanisanSayisi")
    .dropTableIfExists("MerkezTelefon")
    .dropTableIfExists("Personel")
    .dropTableIfExists("Merkez")
    .dropTableIfExists("Sehir");
};
