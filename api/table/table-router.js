const router = require("express").Router();
const model =require("./table-model");
const db = require("../../data/db-config");

// merkezlerin id ile çekildiği kısım
router.get(
    "/sehir/:id",
    async (req, res, next) => {
      try {
        const sehirler = await model.getById(req.params.id);
     res.status(200).json(sehirler)
      } catch (error) {
        next(error);
      }
    }
  );


  // Merkezde bulunan kişiler
router.get(
    "/personel/:id",
    async (req, res, next) => {
      try {
        const personel = await model.getByPersonel(req.params.id);
     res.status(200).json(personel)
      } catch (error) {
        next(error);
      }
    }
  );

// Merkezlerin coordinatları
router.get(
    "/coordinate",
    async (req, res, next) => {
      try {
        const coordinates= await model.getCoordinates()
        res.status(200).json(coordinates)
      } catch (error) {
        next(error);
      }
    }
  );


  // Merkez Ekleme
router.post("/sehir", async(req,res,next)=>{
  try {
    
  } catch (error) {
    
  }
})

  module.exports = router;