import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chineese",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    imageUrl:
      "https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-FB.jpg?auto=format,compress&cs=strip",
  },
  {
    _id: uuid(),
    categoryName: "Spanish",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    imageUrl:
      "https://www.expatica.com/app/uploads/sites/2/2016/09/croquetas.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Italian",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl: "https://www.cookingvdo.com/wp-content/uploads/2017/05/ita.jpg",
  },
  {
    _id: uuid(),
    categoryName: "South-Indian",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl:
      "https://d4t7t8y8xqo0t.cloudfront.net/admin/eazymedia/trends/3091/16164196070.jpg",
  },
  {
    _id: uuid(),
    categoryName: "North-Indian",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl: "https://www.srigurunalapaka.in/assets/images/2.jpg",
  },
];
