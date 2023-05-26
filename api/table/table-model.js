const db = require("../../data/db-config");

const getAll = async () => {
  return db("Merkez as M");
};

const getById = async (merkez_id) => {

const subquerySum= db("MerkezPersonel as mp")
.where("mp.merkez_id", merkez_id)
.sum("mp.danisan_sayisi");

const subquery= db("MerkezPersonel as mp")
.where("mp.merkez_id", merkez_id)
.sum("mp.danisan_sayisi");
  return db("Merkez as M")
    .leftJoin("Sehir as s", "s.sehir_id", "M.sehir_id")
    .select(
      "M.merkez_id",
      "M.merkez_telefon_1",
      "M.merkez_telefon_2",
      "M.sehir_id",
      "M.adres",
      "s.sehir_adi",subquerySum.as("total")
    );
};
const getCoordinates = async () => {
  return db("Merkez as M")
    .select("merkez_adi","enlem", "boylam");
};
const getByPersonel = async (merkez_id) => {
  return db("MerkezPersonel as mp")
    .where("mp.merkez_id", merkez_id)
    .leftJoin("Personel as p", "p.personel_id", "mp.personel_id").leftJoin("Merkez as m","m.merkez_id","mp.merkez_id")
    .select(
      "p.personel_adi",
      "p.personel_soyadi",
      "mp.danisan_sayisi",
      "mp.saha_adres",
      "p.personel_telefon_1",
      "p.personel_calisma_durumu",
      "m.merkez_adi",
      "p.personel_id"
    );
};

module.exports = { getCoordinates, getAll, getById, getByPersonel };
