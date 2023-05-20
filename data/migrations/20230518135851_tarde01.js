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
      tablo
        .integer("sehir_id")
        .references("sehir_id")
        .inTable("Sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tablo.string("merkez_adres");
    })
    .createTable("Personel", (tablo) => {
      tablo.increments("personel_id").unique(), tablo.string("personel_adi");
    })
    .createTable("MerkezTelefon", (tablo) => {
      tablo.increments("merkez_telefon_id");
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tablo.string("telefon").notNullable();
    })
    .createTable("DanisanSayisi", (tablo) => {
      tablo.increments("danisan_sayisi_id");
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.timestamp("created_at").defaultTo(knex.fn.now());
      tablo.integer("danisan_sayisi");
    })
    .createTable("MerkezIsBirligi", (tablo) => {
      tablo.increments("Merkez_is_birligi_id");
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tablo.string("is_birligi_kurum_adi");
    })
    .createTable("AracSayisi", (tablo) => {
      tablo.increments("arac_sayisi_id");
      tablo.integer("binek_arac");
      tablo.integer("gezici_karavan");
      tablo.integer("diger");
      tablo
        .integer("merkez_id")
        .references("merkez_id")
        .inTable("Merkez")
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
    .dropTableIfExists("AracSayisi")
    .dropTableIfExists("MerkezIsBirligi")
    .dropTableIfExists("DanisanSayisi")
    .dropTableIfExists("MerkezTelefon")
    .dropTableIfExists("Personel")
    .dropTableIfExists("Merkez")
    .dropTableIfExists("Sehir");
};
