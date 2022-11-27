"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const spots = [
      {
        id: "7429e704-6b7d-41b0-9bd0-5459c1f543d1",
        title: "Gemah Beach",
        description:
          "This tour in Tulungagung is unique because it has pine trees along the shoreline. The place is shady and shady, very comfortable to take shelter from the sun. This area is usually also used as a parking lot, as well as a strategic location for visitors who want to relax while rolling out their mats. Taste Fresh Processed Seafood at Gemah",
        location: "Keboireng, Besuki",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526934/samples/gemah_xw8qjd.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "8b509e9c-4b36-4e55-b91f-7b4aa780ee53",
        title: "Kedungtumpang Beach",
        description:
          "This beach is known for the beauty of the rocks and steep cliffs. Therefore, visiting Kedung Tumpang Beach should use a motorbike. If using a car, visitors must park it in the space provided and continue the long journey to reach the top of the hill.",
        location: "Pucanglaban, Pucanglaban",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526935/samples/kedung-tumpang_lzbfii.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "e2a1662d-005a-4a66-98e2-3da537762ffa",
        title: "Lumbung Beach",
        description:
          "The big waves of Lumbung Beach are directly adjacent to the Indian Ocean. Although beautiful, this beach is still extreme to visit because some of the roads are still quite steep. However, if you have arrived at this beach, it feels lazy to go home because you are amazed by its beauty.",
        location: "Pucanglaban, Pucanglaban",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526934/samples/gemah_xw8qjd.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "7e7004ab-6859-4e45-b4e9-1be5cb5df02a",
        title: "Banyumulok Beach",
        description:
          "The view on Banyu Mulok Hill is very special, here you can see the vastness of the sea and hills. In addition, if you are lucky you will see rainbows and waves rising up to the top of the hill. The expanse of green meadows will add to the beauty of this tourist spot. Your photos will be cooler with the background of the vast sea combined with the expanse of the meadow.",
        location: "Besole,  Besuki",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/banyu-mulok_vihcxr.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "b27a5781-f9df-45de-ae3e-9cf41083e18e",
        title: "Sanggar Beach",
        description:
          "White sand beach tourism is an attractive destination for pampering family vacation trips when exploring Tulungagung. The natural charm of Sanggar Beach is suitable for healing activities to relieve fatigue and boredom from busy daily activities.",
        location: "Jegglungharjo, Tanggung Gunung",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/sanggar_l7few2.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "061964b4-94be-4e5a-9a36-60688d5e1fb8",
        title: "Ranu Gumbolo",
        description:
          "Ranu Gumbolo is one of the leading tourist destinations in Tulungagung which presents natural tourism in the form of a lake with a charming panorama. The lake has an attraction in the form of green waters with a stretch of pine forest.",
        location: "Mulyosari, Pagerwojo",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526934/samples/ranu-gumbolo_cwnlsw.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "f82ad5df-3a61-4fbe-abf3-e380e0e149b0",
        title: "Gunung Budeg",
        description:
          "The beauty of Mount Budeg is not inferior to Mount Ijen, Mount Wilis, and Mount Kelud. Mount Budeg has an exotic view and changes depending on the season. If the rainy season, this hill will be very green. But Mount Budeg will suddenly look very arid and dry when the dry season arrives.",
        location: "Tanggung, Campurdarat",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/budeg_iju3qq.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "4e0e995c-3919-49a0-bcca-eecd3104dc04",
        title: "Air Terjun Alas Kandung",
        description:
          "Alas Kandung Waterfall has 3 levels with varying heights, the highest at the top of the waterfall has a height of about 15 meters. The water looks blue-blue which is very tempting for you to swim. However, please note that the depth of Alas Kandung Waterfall is quite deep, about 4-8 meters, so for those who are not swimming experts or do not bring swimming equipment, you should refrain from soaking in this Alas Kandung Waterfall.",
        location: "Tanen - Rejotangan",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669526933/samples/alas-kandung_pswdok.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "442f0b27-a828-46f2-b239-46b3dd136ecb",
        title: "Dendy Sky View",
        description:
          "Dendy Sky View is the newest cafe in Tulungagung, East Java. Not just a place to hang out, this place also presents amazing spots such as instagenic buildings so it is perfect for photo hunting. And the most special thing is that we can enjoy the beautiful view of the Wonorejo reservoir or dam. Around the location there are also towering green trees.",
        location: "Mulyosari, Pagerwojo",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669528293/samples/dendy-sky-view_ygh06e.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
      {
        id: "99dc9255-2487-4658-91fc-d9967f610976",
        title: "Mbalong Kawok",
        description:
          "Mbalong Kawok used to be a swamp, seeing that the land was less productive. However, in 2016 the village took the initiative to make the land productive.",
        location: "Sumberjo Kulon, Ngunut",
        images:
          "https://res.cloudinary.com/matchoshop/image/upload/v1669528294/samples/mbalong-kawok_xoltvb.jpg",
        created_by: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        timestamp: new Date().getTime(),
      },
    ];

    return queryInterface.bulkInsert("spots", spots, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("spots", null, {});
  },
};
