import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Vegetable-Pizza",
    availableOrNot: true,
    priceOld: 150,
    priceNew: 75,
    offerOFF: "50%",
    categoryName: "Italian",
    offer: true,
    rating: 5,
    imageUrl: 'https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Shahi-Thali",
    availableOrNot: true,
    priceOld: 200,
    priceNew: 200,
    offerOFF: "0",
    categoryName: "North-Indian",
    offer: false,
    rating: 5,
    imageUrl: 'https://imgmedia.lbb.in/media/2020/11/5fa0387bec0d8e30ee455776_1604335739366.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Momos",
    availableOrNot: true,
    priceOld: 80,
    priceNew: 80,
    offerOFF: "0",
    categoryName: "Chineese",
    offer: false,
    rating: 4,
    imageUrl: 'https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-FB.jpg?auto=format,compress&cs=strip',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Special-Thali",
    availableOrNot: true,
    priceOld: 200,
    priceNew: 100,
    offerOFF: "50%",
    categoryName: "South-Indian",
    offer: true,
    rating: 4.5,
    imageUrl: 'https://cdn.5280.com/2020/10/Thali-platter_Bawarchi-Biryani-Point-Denver-Facebook.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Fried-Potato",
    availableOrNot: false,
    priceOld: 250,
    priceNew: 250,
    offerOFF: "0",
    categoryName: "Spanish",
    offer: false,
    rating: 2.5,
    imageUrl: 'https://www.expatica.com/app/uploads/sites/2/2016/09/croquetas.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Stuffed-Bread",
    availableOrNot: false,
    priceOld: 100,
    priceNew: 100,
    offerOFF: "0",
    categoryName: "Italian",
    offer: false,
    rating: 3,
    imageUrl: 'https://www.cookingvdo.com/wp-content/uploads/2017/05/ita.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Noodles",
    availableOrNot: true,
    priceOld: 120,
    priceNew: 60,
    offerOFF: "50%",
    categoryName: "Chineese",
    offer: true,
    rating: 3,
    imageUrl: 'https://c.ndtvimg.com/2018-09/i9993f38_noodles_625x300_26_September_18.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Fries",
    availableOrNot: true,
    priceOld: 60,
    priceNew: 60,
    offerOFF: "0",
    categoryName: "Spanish",
    offer: false,
    rating: 1.5,
    imageUrl: 'https://nomadparadise.com/wp-content/uploads/2020/04/spanish-foods-004-1024x640.jpg.webp',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Plain-Thali",
    availableOrNot: true,
    priceOld: 90,
    priceNew: 65,
    offerOFF: "30%",
    categoryName: "North-Indian",
    offer: true,
    rating: 4.5,
    imageUrl: 'https://www.srigurunalapaka.in/assets/images/2.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Masala-Dosa",
    availableOrNot: false,
    priceOld: 70,
    priceNew: 70,
    offerOFF: "0",
    categoryName: "South-Indian",
    offer: false,
    rating: 3.5,
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/admin/eazymedia/trends/3091/16164196070.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Chineese-Platter",
    availableOrNot: true,
    priceOld: 250,
    priceNew: 150,
    offerOFF: "50%",
    categoryName: "Chineese",
    offer: true,
    rating: 4.5,
    imageUrl: 'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/golden-fiesta-h.jpg',
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Burger-Combo",
    availableOrNot: true,
    priceOld: 200,
    priceNew: 150,
    offerOFF: "25%",
    categoryName: "Italian",
    offer: true,
    rating: 4,
    imageUrl: 'https://hotgrillburger.com/wp-content/uploads/2021/05/01_0007_VEG-BURGER-COMBO-MEAL-3.jpg',
    quantity: 1
  },
];
