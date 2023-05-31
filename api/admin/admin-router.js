const router = require("express").Router();
const model = require("./admin-model");
const db = require("../../data/db-config");

// Admin merkez tablosu
router.get("/merkez/:id", async (req, res, next) => {
  try {
    const sehirler = await db("Merkez").where("sehir_id", req.params.id);
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

// Merkez Edit
router.put("/merkez/:id", async (req, res, next) => {
  try {
    const update = await db("Merkez")
      .where("merkez_id", req.params.id)
      .update(req.body);
    res.status(201).json({ update, message: "Düzenlendi" });
  } catch (error) {
    next(error);
  }
});
//personel Edit
router.put("/personel/:id", async (req, res, next) => {
  try {
    const update = await db("Personel")
      .where("personel_id", req.params.id)
      .update(req.body);
    res.status(201).json({ update, message: "Düzenlendi" });
  } catch (error) {
    next(error);
  }
});

//Personel Silme
router.delete("/personel/:id", async (req, res, next) => {
  try {
    const personelDelete = await db("Personel")
      .where("personel_id", req.params.id)
      .del();
    res.status(204).json({ personelDelete, message: "Personel Silindi" });
  } catch (error) {
    next(error);
  }
});

//Merkez Silme
router.delete("/merkez/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("Merkez")
      .where("merkez_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "Merkez Silindi" });
  } catch (error) {
    next(error);
  }
});

// Merkez Ekleme
router.post("/merkez/", async (req, res, next) => {
  try {
    const insert = await db("Merkez").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Merkez Eklendi" });
  } catch (error) {
    next(error);
  }
});
// Personel Ekleme
router.post("/personel/", async (req, res, next) => {
  try {
    const insert = await db("Personel").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Merkez Eklendi" });
  } catch (error) {
    next(error);
  }
});
router.get("/sehir/", async (req, res, next) => {
  try {
    const sehirler = await db("Sehir");
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
router.get("/merkez/", async (req, res, next) => {
  try {
    const sehirler = await db("Merkez");
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
// Admin merkez tablosu
router.get("/personel/:id", async (req, res, next) => {
  try {
    const sehirler = await db("Personel as P")
      .leftJoin("MerkezPersonel as M", "M.personel_id", "P.personel_id")
      .where("M.merkez_id", req.params.id);
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
