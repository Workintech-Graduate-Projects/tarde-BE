const router = require("express").Router();
const model =require("./admin-model");
const db = require("../../data/db-config");


  // Admin merkez tablosu
router.get(
    "/merkez/:id",
    async (req, res, next) => {
      try {
        const sehirler = await db("Merkez").where("sehir_id",req.params.id);
     res.status(200).json(sehirler)
      } catch (error) {
        next(error);
      }
    }
  );
router.put(
    "/merkez/:id",
    async (req, res, next) => {
      try {
        const update = await db("Merkez").where("merkez_id",req.params.id).update(req.body);
     res.status(201).json({update,message:"Düzenlendi"})
      } catch (error) {
        next(error);
      }
    }
  );
router.put(
    "/personel/:id",
    async (req, res, next) => {
      try {
        const update = await db("Personel").where("personel_id",req.params.id).update(req.body);
     res.status(201).json({update,message:"Düzenlendi"})
      } catch (error) {
        next(error);
      }
    }
  );
router.get(
    "/sehir/",
    async (req, res, next) => {
      try {
        const sehirler = await db("Sehir");
     res.status(200).json(sehirler)
      } catch (error) {
        next(error);
      }
    }
  );
router.get(
    "/merkez/",
    async (req, res, next) => {
      try {
        const sehirler = await db("Merkez");
     res.status(200).json(sehirler)
      } catch (error) {
        next(error);
      }
    }
  );
    // Admin merkez tablosu
router.get(
    "/personel/:id",
    async (req, res, next) => {
      try {
        const sehirler = await db("Personel as P").leftJoin("MerkezPersonel as M","M.personel_id","P.personel_id").where("M.merkez_id",req.params.id);
     res.status(200).json(sehirler)
      } catch (error) {
        next(error);
      }
    }
  );

  module.exports = router;