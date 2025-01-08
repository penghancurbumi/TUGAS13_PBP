const prisma = require("../prisma/client");
const { validateInsert, validateUpdate } = require("../utils/validators");

const getAllhandphoneiphone = async () => {
    const handphoneRespons = await prisma.iphone.findMany();
    return { handphone: handphoneRespons};
};

const getAllhandphoneoppo = async () => {
    const handphoneRespons = await prisma.oppo.findMany();
    return { handphone: handphoneRespons};
};

const getAllhandphonevivo = async () => {
    const handphoneRespons = await prisma.vivo.findMany();
    return { handphone: handphoneRespons};
};

const getAllhandphonexiomi = async () => {
    const handphoneRespons = await prisma.xiomi.findMany();
    return { handphone: handphoneRespons};
};

const getAllhandphonepoco = async () => {
    const handphoneRespons = await prisma.poco.findMany();
    return { handphone: handphoneRespons};
};

const insertHandphone = async (
    brand,
    nama,
    merek,
    spek,
    harga
) => {
    validateInsert(nama,merek,spek,harga);
    const insertedHandphone = await prisma[brand].create({
        data: {
            nama,
            merek,
            spek,
            harga,
        },
    });
    return { insertedHandphone };
};

const updateHandphone = async (
    id,
    brand,
    nama,
    merek,
    spek,
    harga
) => {
    validateUpdate(nama, merek, spek, harga);
    const updatedHandphone = await prisma[brand].update({
        where: {id: id},
        data: {
            nama,
            merek,
            spek,
            harga,
        },
    });
    return { updatedHandphone };
};

const deleteHandphone = async (brand, id) => {
    const deletedHandphone = await prisma[brand].delete({
        where: {id: id},
    });
    return { deletedHandphone };
};

module.exports = {
    getAllhandphoneiphone,
    getAllhandphoneoppo,
    getAllhandphonevivo,
    getAllhandphonexiomi,
    getAllhandphonepoco,
    insertHandphone,
    updateHandphone,
    deleteHandphone,
}