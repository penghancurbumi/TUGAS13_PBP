const prisma = require("../prisma/client");
const { validateInsert, validateUpdate } = require("../utils/validators");

const getAllHandphoneIphone = async () => {
    const handphonesRespons = await prisma.iphone.findMany();
    return { handphones: handphonesRespons};
};

const getAllHandphoneOppo = async () => {
    const handphonesRespons = await prisma.oppo.findMany();
    return { handphones: handphonesRespons};
};

const getAllHandphoneVivo = async () => {
    const handphonesRespons = await prisma.vivo.findMany();
    return { handphones: handphonesRespons};
};

const getAllHandphoneXiomi = async () => {
    const handphonesRespons = await prisma.xiomi.findMany();
    return { handphones: handphonesRespons};
};

const getAllHandphonePoco = async () => {
    const handphonesRespons = await prisma.poco.findMany();
    return { handphones: handphonesRespons};
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
    getAllHandphoneIphone,
    getAllHandphoneOppo,
    getAllHandphoneVivo,
    getAllHandphoneXiomi,
    getAllHandphonePoco,
    insertHandphone,
    updateHandphone,
    deleteHandphone,
}