/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const all = knex.schema
    .createTable("Sehir", (tablo) => {
      tablo.increments("sehir_id"); //1-1 arttırmasını belirttiğimiz ifade sadece pk kolonlarında belirtiyoruz.
      tablo.string("sehir_adi").notNullable(); //acaba string mi olmalıydı --evet string olmalıydı
    })
    .createTable("Merkez", (tablo) => {
      tablo.increments("merkez_id");
      tablo.string("merkez_adi").notNullable();
      tablo.integer("sehir_id").references("sehir_id").inTable("Sehir");
      tablo.string("merkez_adres");
    })
    .createTable("Personel", (tablo) => {
      tablo.increments("personel_id").unique(), tablo.string("personel_adi");
    })
    .createTable("MerkezTelefon", (tablo) => {
      tablo.increments("merkez_telefon_id");
      tablo.integer("merkez_id").references("merkez_id").inTable("Merkez");
      tablo.string("telefon").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
