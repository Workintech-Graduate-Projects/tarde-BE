const router = require("express").Router();
const model =require("./table-model");


router.get(
    "/:id",
    async (req, res, next) => {
      try {
     const merkezler = await model.getById(req.params.id);
     const personel = await model.getByPersonel(req.params.id);
     res.status(200).json(merkezler.concat(personel))
      } catch (error) {
        next(error);
      }
    }
  );
router.get(
    "/coordinate",
    async (req, res, next) => {
      try {
       return getCoordinates
      } catch (error) {
        next(error);
      }
    }
  );


  module.exports = router;