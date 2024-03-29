const router = require("express").Router();
const model = require("./admin-model");
const db = require("../../data/db-config");

//PUT

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
router.put("/isbirligi/", async (req, res, next) => {
  try {
    const update = await db("MerkezIsBirligi")
      .where("Merkez_is_birligi_id", req.body.Merkez_is_birligi_id)
      .update(req.body);
    res.status(201).json({ update, message: "İş Birliği Kurum Düzenlendi" });
  } catch (error) {
    next(error);
  }
});
router.put("/hizmet/", async (req, res, next) => {
  try {
    const update = await db("hizmet").where("hizmet_id",req.body.hizmet_id)
      .update(req.body);
    res.status(201).json({ update, message: "Hizmet Düzenlendi" });
  } catch (error) {
    next(error);
  }
});
router.put("/aracsayisi/", async (req, res, next) => {
  try {
    const update = await db("AracSayisi")
      .update({"binekarac_sayisi":req.body.binekarac_sayisi,"gezicikaravan_sayisi":req.body.gezicikaravan_sayisi});
    res.status(201).json({ update, message: "İş Birliği Kurum Düzenlendi" });
  } catch (error) {
    next(error);
  }
});
//personel Edit
router.put("/merkezpersonel/:id", async (req, res, next) => {
  try {
    const {
      personel_adi,
      personel_soyadi,
      merkez_id,
      personel_telefon_1,
      personel_telefon_2,
      personel_tc,
      personel_kan_grubu,
      personel_adres,
      personel_calisma_durumu,
      danisan_sayisi,
      merkez_personel_id,
    } = req.body;
    const update = await db("Personel")
      .where("personel_id", req.params.id)
      .update({
        personel_adi,
        personel_soyadi,
        personel_telefon_1,
        personel_telefon_2,
        personel_tc,
        personel_kan_grubu,
        personel_adres,
        personel_calisma_durumu,
      });
    const inserted = await db("MerkezPersonel")
      .where("merkez_personel_id", merkez_personel_id)
      .update({
        merkez_id,
        personel_id: req.params.id,
        danisan_sayisi,
      });
    res
      .status(201)
      .json({ update, inserted, message: "Personel Tablosu Düzenlendi" });
  } catch (error) {
    next(error);
  }
});

//DELETE

//Personel Silme
router.delete("/merkezpersonel/:id/:pid", async (req, res, next) => {
  try {
    const personelDelete = await db("MerkezPersonel")
      .where("merkez_id", req.params.id)
      .where("personel_id", req.params.pid)
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
//Hizmet Silme
router.delete("/hizmet/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("hizmet")
      .where("hizmet_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "Hizmet Silindi" });
  } catch (error) {
    next(error);
  }
});
//Araç Silme
router.delete("/aracsayisi/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("AracSayisi")
      .where("arac_sayisi_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "Araç Silindi" });
  } catch (error) {
    next(error);
  }
});
//İşbirliği Silme
router.delete("/isbirligi/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("MerkezIsBirligi")
      .where("Merkez_is_birligi_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "İş Birliği Silindi" });
  } catch (error) {
    next(error);
  }
});
//POST

// Merkez Ekleme
router.post("/merkez/", async (req, res, next) => {
  try {
    const insert = await db("Merkez").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Merkez Eklendi" });
  } catch (error) {
    next(error);
  }
});
// Araç Sayısı Ekleme
router.post("/aracsayisi/", async (req, res, next) => {
  try {
    const insert = await db("AracSayisi").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Araç Eklendi" });
  } catch (error) {
    next(error);
  }
});
// Hizmet Ekleme
router.post("/hizmet/", async (req, res, next) => {
  try {
    const insert = await db("hizmet").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Hizmet Eklendi" });
  } catch (error) {
    next(error);
  }
});
// Personel Ekleme
router.post("/merkezpersonel/", async (req, res, next) => {
  try {
    const {
      personel_adi,
      personel_soyadi,
      merkez_id,
      personel_telefon_1,
      personel_telefon_2,
      personel_tc,
      personel_kan_grubu,
      personel_adres,
      personel_calisma_durumu,
      danisan_sayisi,
    } = req.body;
    const insert = await db("Personel").insert({
      personel_adi,
      personel_soyadi,
      personel_telefon_1,
      personel_telefon_2,
      personel_tc,
      personel_kan_grubu,
      personel_adres,
      personel_calisma_durumu,
    });

    const inserted = await db("MerkezPersonel").insert({
      merkez_id,
      personel_id: insert[0],
      danisan_sayisi,
    });
    res.status(201).json({ inserted, message: "Yeni Personel Eklendi" });
  } catch (error) {
    next(error);
  }
});
// MERKEZ İş Birliği

router.post("/isbirligi/", async (req, res, next) => {
  try {
    const sehirler = await db("MerkezIsBirligi").insert(req.body);
    res.status(201).json(sehirler);
  } catch (error) {
    next(error);
  }
});

//GET
// Merkezler
router.get("/sehir/", async (req, res, next) => {
  try {
    const sehirler = await db("Sehir");
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

// Merkezler
router.get("/merkez/", async (req, res, next) => {
  try {
    const sehirler = await db("Merkez");
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

// Admin merkez tablosu
router.get("/merkez/:id", async (req, res, next) => {
  try {


    const sehirler = await db("Merkez as m")
      .where("m.sehir_id", req.params.id)
    
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

// Admin merkeze göre Personel tablosu
router.get("/merkezpersonel/:id", async (req, res, next) => {
  try {
    const sehirler = await db("Personel as P")
      .leftJoin("MerkezPersonel as M", "M.personel_id", "P.personel_id")
      .where("M.merkez_id", req.params.id);
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
// Personeller
router.get("/personel/", async (req, res, next) => {
  try {
    const sehirler = await db("Personel as P")
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
// Tüm Gönüllüler göre Personel tablosu
router.get("/personel/null", async (req, res, next) => {
  try {
    const sehirler = await db("Personel as P").leftJoin(
      "Acil_Durum as A",
      "A.personel_id",
      "P.personel_id"
    );
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});

// Get isbirliği
router.get("/isbirligi/:id", async (req, res, next) => {
  try {
    const sehirler = await db("MerkezIsBirligi").where(
      "sehir_id",
      req.params.id
    );
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
// Get isbirliği merkeze göre

router.get("/aracsayisi/:id/", async (req, res, next) => {
  try {
    const sehirler = await db("AracSayisi as A").leftJoin("Merkez as m", "A.merkez_id", "m.merkez_id")
    .leftJoin("Sehir as s", "m.sehir_id", "s.sehir_id").select("s.sehir_adi","A.binekarac_sayisi",
    "A.gezicikaravan_sayisi","m.merkez_adi","A.arac_sayisi_id",
    "m.merkez_id").where("m.merkez_id",req.params.id)

    res.status(200).json(sehirler[0]);
  } catch (error) {
    next(error);
  }
});
router.get("/aracsayisi/sehir/:id/", async (req, res, next) => {
  try {
    const sehirler = await db("AracSayisi as A").leftJoin("Merkez as m", "A.merkez_id", "m.merkez_id")
    .leftJoin("Sehir as s", "m.sehir_id", "s.sehir_id").select("s.sehir_adi","A.binekarac_sayisi",
    "A.gezicikaravan_sayisi","m.merkez_adi","A.arac_sayisi_id",
    "m.merkez_id").where("s.sehir_id",req.params.id)

    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
router.get("/hizmet/:id", async (req, res, next) => {
  try {
    const sehirler = await db("hizmet as h").leftJoin("Merkez as m", "m.merkez_id", "h.merkez_id")
    .select("m.merkez_adi","etkinlik_adi","personel_id","danisan_sayisi","tarih","hizmet_id","m.merkez_id")

    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
router.get("/hizmet/", async (req, res, next) => {
  try {
    const sehirler = await db("hizmet as h")
  
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});



// GÖNÜLLÜ

router.post("/gonullu/", async (req, res, next) => {
  try {
    const insert = await db("gonullu").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Gönüllü Eklendi" });
  } catch (error) {
    next(error);
  }
});
router.get("/gonullu/", async (req, res, next) => {
  try {
    const sehirler = await db("gonullu")
  
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
router.delete("/gonullu/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("gonullu")
      .where("gonullu_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "Gönüllü Silindi" });
  } catch (error) {
    next(error);
  }
});
router.put("/gonullu/:id", async (req, res, next) => {
  try {
    const update = await db("gonullu").where("gonullu_id", req.params.id)
      .update(req.body);
    res.status(201).json({ update, message: "Gönüllü Düzenlendi" });
  } catch (error) {
    next(error);
  }
});

// DANISAN

router.post("/danisan/", async (req, res, next) => {
  try {
    const insert = await db("danisan").insert(req.body);
    res.status(201).json({ insert, message: "Yeni Gönüllü Eklendi" });
  } catch (error) {
    next(error);
  }
});
router.get("/danisan/", async (req, res, next) => {
  try {
    const sehirler = await db("danisan")
  
    res.status(200).json(sehirler);
  } catch (error) {
    next(error);
  }
});
router.delete("/danisan/:id", async (req, res, next) => {
  try {
    const merkezDelete = await db("danisan")
      .where("danisan_id", req.params.id)
      .del();
    res.status(204).json({ merkezDelete, message: "Danısan Silindi" });
  } catch (error) {
    next(error);
  }
});
router.put("/danisan/:id", async (req, res, next) => {
  try {
    const update = await db("danisan").where("danisan_id", req.params.id)
      .update(req.body);
    res.status(201).json({ update, message: "Danısan Düzenlendi" });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
