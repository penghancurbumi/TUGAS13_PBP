const { message } = require("statuses");
const handphoneService = require("../services/handphoneService")

const getIphone = async (req, res, next) => {
    try {
        const handphones = await handphoneService.getAllHandphoneIphone();
        res.status(200).json({message:"handphone berhasil diambil", handphones});
    }catch (error) {
        next(error);
    }
};
const getOppo = async (req, res, next) => {
    try { 
        const handphones = await handphoneService.getAllHandphoneOppo();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};
const getVivo = async (req, res, next) => {
    try{
        const handphones = await handphoneService.getAllHandphoneVivo();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};
const getXiomi = async (req, res, next) => {
    try {
        const handphones = await handphoneService.getAllHandphoneXiomi();
        res.status(200).json({message:"handphone berhasil diambil", handphones});
    }catch (error) {
        next(error);
    }
};
const getPoco = async (req, res, next) => {
    try{
        const handphones = await handphoneService.getAllHandphonePoco();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};

const insertHandphone = async (req, res, next) => {
    const brand =req.params.brand
    const {nama, merek, spek, harga} = req.body;

    try {
        const insertHandphone = await handphoneService.insertHandphone(
            nama,
            merek,
            spek,
            harga,
        );
        res.status(201).json({
            message: "handphone berhasil di tambahkan ke store" + brand,
            insertHandphone 
        });
    } catch (error) {
        next(error);
    }
};

const updateHandphone = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const brand = req.params.brand;

    const { nama, merek, spek, harga} = req.body

    if (isNaN(id) || !id) {
        return res.status(400).json({ error: "ID tidak valid" });
    }
   
    try{
        const updatedHandphone = await handphoneService.updateHandphone(
            id,
            brand,
            nama,
            merek,
            spek,
            harga
        );
    res.status(200).json({
        message:"Data handphone berhasil diupdate!",
        updatedHandphone
    });
    }catch (error) {
        console.log(error);
        next(error);
    }
};

const deleteHandphone = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const brand = req.params.brand;

    if (isNaN(id) || !id) {
        return res.status(400).json({ error: "ID tidak valid" });
    }

    try{
        const deleteuser = await handphoneService.deleteHandphone(brand, id);
        res.status(202).json({message:"Data handphoone berhasil dihapus!"});
    }catch (error) {
        next(error);
    }
};

module.exports ={
    getIphone,
    getOppo,
    getVivo,
    getXiomi,
    getPoco,
    insertHandphone,
    updateHandphone,
    deleteHandphone,
};