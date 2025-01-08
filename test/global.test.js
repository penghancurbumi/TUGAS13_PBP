require('dotenv').config();
const  request = require("supertest");
const app = require("../index");
const Prisma = require("../prisma/client");

console.log(process.env.DATABASE_URL)

beforeAll(async () => {
    await Prisma.iphone.deleteMany();
    await Prisma.oppo.deleteMany();
    await Prisma.vivo.deleteMany();
    await Prisma.xiomi.deleteMany();
    await Prisma.poco.deleteMany();
});

afterAll(async () => {
  await Prisma.$disconnect();
});

describe("Store API Endpoints", () => {
  const brand = "iphone";
  let id;

  test("GET /iphone - Read Handphone Data", async () => {
    const response = await request(app).get("/iphone");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("handphones");
  });
  test("GET /oppo - Read Handphone Data", async () => {
    const response = await request(app).get("/oppo");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("handphones");
  });
  test("GET /vivo - Read Handphone Data", async () => {
    const response = await request(app).get("/vivo");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("handphones");
  });
  test("GET /xiomi - Read Handphone Data", async () => {
    const response = await request(app).get("/xiomi");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("handphones");
  });
  test("GET /poco - Read Handphone Data", async () => {
    const response = await request(app).get("/poco");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("handphones");
  });

  test("POST /handphone/:brand", async () => {
    const response = await request(app).post(`/handphone/${brand}`).send({
      nama: "Iphone 13",
      merek: "Apple",
      spek: "A15 Bionic",
      harga: "9000000",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("insertHandphone");
    id = response.body.insertedHandphone.insertedHandphone.id;
  });

  test("PUT /handphone/:brand/:id ", async () => {
    const response = await request(app).put(`/handphone/${brand}/${id}`).send({
        nama: "Iphone 13",
        merek: "Apple",
        spek: "A15 Bionic",
        harga: "9000000",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("updateHandphone");
  });

  test("DELETE /handphone/:brand/:id - Menghapus Data Handphone", async () => {
    const response = await request(app).delete(`/handphone/${brand}/${id}`);

    expect(response.statusCode).toBe(202);
    expect(response.body).toHaveProperty("message");
  });
});