const db = require("../../data/db-config");

const  getAll= async ()=>{
    return db("Merkez as M")
};

const getById= async (merkez_id)=> {
    return db("Merkez as M","MerkezPersonel as mp").where("merkez_id",merkez_id) 
    .leftJoin("Sehir as s","s.sehir_id","M.sehir_id")
    .select("M.merkez_id","M.merkez_telefon_1","M.merkez_telefon_2",
    "M.sehir_id","M.adres","s.sehir_adi")
}
 const getCoordinates=async (merkez_id)=>{
    return db("Merkez as M").where("merkez_id",merkez_id).select("enlem","boylam")
}
const getByPersonel=async(merkez_id)=>{
    return db("MerkezPersonel as mp").where("mp.merkez_id",merkez_id).leftJoin("Personel as p","p.personel_id","mp.personel_id").select("p.personel_adi","p.personel_soyadi","mp.danisan_sayisi","mp.saha_adres","p.personel_telefon_1")
}




module.exports={getCoordinates,getAll,getById,getByPersonel} 