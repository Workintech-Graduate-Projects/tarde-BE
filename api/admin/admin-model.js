const db = require("../../data/db-config");

const getAll = async () => {
  return db("Merkez as M");
};

const getById = async (sehir_id) => {
  const subquerySum = db("MerkezPersonel as mp")
    .leftJoin("Merkez as M", "M.merkez_id", "mp.merkez_id")
    .where("M.sehir_id", sehir_id)
    .sum("mp.danisan_sayisi");

  return db("Merkez as M")
    .leftJoin("Sehir as s", "s.sehir_id", "M.sehir_id")
    .where("s.sehir_id", sehir_id)
    .select(
      "M.merkez_adi",
      "M.merkez_id",
      "M.merkez_telefon_1",
      "M.merkez_telefon_2",
      "M.sehir_id",
      "M.adres",
      "s.sehir_adi",
      subquerySum.as("total")
    );
};
const getByAdminId = async (sehir_id) => {
  const subquerySum = db("MerkezPersonel as mp")
    .leftJoin("Merkez as M", "M.merkez_id", "mp.merkez_id")
    .where("M.sehir_id", sehir_id)
    .sum("mp.danisan_sayisi");

  return db("Merkez as M")
    .leftJoin("Sehir as s", "s.sehir_id", "M.sehir_id")
    .where("s.sehir_id", sehir_id)
    .select(
      "M.merkez_adi",
      "M.merkez_id",
      "M.merkez_telefon_1",
      "M.merkez_telefon_2",
      "M.sehir_id",
      "M.adres",
      "s.sehir_adi",
      subquerySum.as("total")
    );
};
const getByPersonel = async (merkez_id) => {
  return db("MerkezPersonel as mp")
    .where("mp.merkez_id", merkez_id)
    .leftJoin("Personel as p", "p.personel_id", "mp.personel_id")
    .leftJoin("Merkez as m", "m.merkez_id", "mp.merkez_id")
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
const insertMerkez = async (merkez_id) => {
  return db("MerkezPersonel as mp")
    .where("mp.merkez_id", merkez_id)
    .leftJoin("Personel as p", "p.personel_id", "mp.personel_id")
    .leftJoin("Merkez as m", "m.merkez_id", "mp.merkez_id")
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

module.exports = { getAll, getById, getByPersonel, getByAdminId };
