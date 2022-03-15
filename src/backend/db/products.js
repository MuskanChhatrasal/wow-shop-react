import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Vegetable-Pizza",
    availableOrNot: "Available",
    price: "150/-",
    categoryName: "Italian",
    imageUrl: 'https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg'
  },
  {
    _id: uuid(),
    title: "Stuffed-Bread",
    availableOrNot: "Not-Available",
    price: "100/-",
    categoryName: "Italian",
    imageUrl: 'https://www.cookingvdo.com/wp-content/uploads/2017/05/ita.jpg'
  },
  {
    _id: uuid(),
    title: "Momos",
    availableOrNot: "Available",
    price: "80/-",
    categoryName: "Chineese",
    imageUrl: 'https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-FB.jpg?auto=format,compress&cs=strip'
  },
  {
    _id: uuid(),
    title: "Noodles",
    availableOrNot: "Available",
    price: "200/-",
    categoryName: "Chineese",
    imageUrl: 'https://c.ndtvimg.com/2018-09/i9993f38_noodles_625x300_26_September_18.jpg'
  },
  {
    _id: uuid(),
    title: "Fried-Potato",
    availableOrNot: "Not-Available",
    price: "250/-",
    categoryName: "Spanish",
    imageUrl: 'https://www.expatica.com/app/uploads/sites/2/2016/09/croquetas.jpg'
  },
  {
    _id: uuid(),
    title: "Fries",
    availableOrNot: "Available",
    price: "60/-",
    categoryName: "Spanish",
    imageUrl: 'https://nomadparadise.com/wp-content/uploads/2020/04/spanish-foods-004-1024x640.jpg.webp'
  },
  {
    _id: uuid(),
    title: "Plain-Thali",
    availableOrNot: "Available",
    price: "90/-",
    categoryName: "North-Indian",
    imageUrl: 'https://www.srigurunalapaka.in/assets/images/2.jpg'
  },
  {
    _id: uuid(),
    title: "Shahi-Thali",
    availableOrNot: "Available",
    price: "200/-",
    categoryName: "North-Indian",
    imageUrl: 'https://imgmedia.lbb.in/media/2020/11/5fa0387bec0d8e30ee455776_1604335739366.jpg'
  },
  {
    _id: uuid(),
    title: "Masala-Dosa",
    availableOrNot: "Available",
    price: "70/-",
    categoryName: "South-Indian",
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/admin/eazymedia/trends/3091/16164196070.jpg'
  },
  {
    _id: uuid(),
    title: "Special-Thali",
    availableOrNot: "Available",
    price: "200/-",
    categoryName: "South-Indian",
    imageUrl: 'https://cdn.5280.com/2020/10/Thali-platter_Bawarchi-Biryani-Point-Denver-Facebook.jpg'
  },
];
