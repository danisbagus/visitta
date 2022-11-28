"use strict";

const crypto = require("crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const spots = [
      {
        id: crypto.randomUUID(),
        spot_id: "7429e704-6b7d-41b0-9bd0-5459c1f543d1",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526934/samples/gemah_xw8qjd.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "7429e704-6b7d-41b0-9bd0-5459c1f543d1",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669539313/samples/gemah2_jhmzdf.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "8b509e9c-4b36-4e55-b91f-7b4aa780ee53",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526935/samples/kedung-tumpang_lzbfii.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "e2a1662d-005a-4a66-98e2-3da537762ffa",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/lumbung_hb1ivo.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "7e7004ab-6859-4e45-b4e9-1be5cb5df02a",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/banyu-mulok_vihcxr.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "b27a5781-f9df-45de-ae3e-9cf41083e18e",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/sanggar_l7few2.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "061964b4-94be-4e5a-9a36-60688d5e1fb8",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526934/samples/ranu-gumbolo_cwnlsw.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "f82ad5df-3a61-4fbe-abf3-e380e0e149b0",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/budeg_iju3qq.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "4e0e995c-3919-49a0-bcca-eecd3104dc04",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/alas-kandung_pswdok.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "442f0b27-a828-46f2-b239-46b3dd136ecb",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669528293/samples/dendy-sky-view_ygh06e.jpg",
      },
      {
        id: crypto.randomUUID(),
        spot_id: "99dc9255-2487-4658-91fc-d9967f610976",
        url: "https://res.cloudinary.com/matchoshop/image/upload/v1669528294/samples/mbalong-kawok_xoltvb.jpg",
      },
    ];

    return queryInterface.bulkInsert("images", spots, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("images", null, {});
  },
};
