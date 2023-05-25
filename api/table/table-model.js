const db = require("../../data/db-config");

const  getAll= async ()=>{
    return db("Merkez as M")
};

const getById= async (merkez_id)=> {
    return db("Merkez as M").where("merkez_id",merkez_id)
    .leftJoin("Sehir as s","s.sehir_id","M.sehir_id")
    .select("M.merkez_id","M.merkez_telefon_1","M.merkez_telefon_2","M.sehir_id","M.adres","s.sehir_adi")
}
 const getCoordinates=async ()=>{
    return db("Merkez as M").select("enlem","boylam")
}




module.exports={getCoordinates,getAll,getById} 