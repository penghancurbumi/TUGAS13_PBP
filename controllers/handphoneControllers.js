const { message } = require("statuses");
const handphoneservice = require("../services/handphoneservice")

const getiphone = async (req, res, next) => {
    try {
        const handphones = await handphoneservice.getAllhandphoneiphone();
        res.status(200).json({message:"handphone berhasil diambil", handphones});
    }catch (error) {
        next(error);
    }
};
const getoppo = async (req, res, next) => {
    try { 
        const handphones = await handphoneservice.getAllhandphoneoppo();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};
const getvivo = async (req, res, next) => {
    try{
        const handphones = await handphoneservice.getAllhandphonevivo();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};
const getxiomi = async (req, res, next) => {
    try {
        const handphones = await handphoneservice.getAllhandphonexiomi();
        res.status(200).json({message:"handphone berhasil diambil", handphones});
    }catch (error) {
        next(error);
    }
};
const getpoco = async (req, res, next) => {
    try{
        const handphones = await handphoneservice.getAllhandphonepoco();
        res.status(200).json({message:"handphone berhasil diambil",handphones});
    }catch (error) {
        next(error);
    }
};

const inserthandphone = async (req, res, next) => {
    const store =req.params.store
    const {nama, merek, spek, harga} = req.body;

    try {
        const inserthandphone = await handphoneservice.inserthandphone(
            nama,
            merek,
            spek,
            harga,
        );
        res.status(201).json({
            message: "handphone berhasil di tambahkan ke store" + store,
            inserthandphone
        });
    } catch (error) {
        next(error);
    }
};

const updateHandphone = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const store = req.params.store;

    const { nama, merek, spek, harga} = req.body

    try{
        const updateHandphone = await handphoneservice.updateHandphone(
            id,
            store,
            nama,
            merek,
            spek,
            harga
        );
    res.status(200).json({message:"Data handphone berhasil diupdate!"});
    }catch (error) {
        console.log(error);
        next(error);
    }
};

const deleteHandphone = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const store = req.params.store;
    try{
        const deleteuser = await handphoneservice.deleteHandphone(store, id);
        res.status(200).json({message:"Data handphoone berhasil dihapus!"});
    }catch (error) {
        next(error);
    }
};

module.exports ={
    getiphone,
    getoppo,
    getvivo,
    getxiomi,
    getpoco,
    inserthandphone,
    updateHandphone,
    deleteHandphone,
};