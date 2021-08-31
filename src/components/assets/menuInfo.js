let sections = [
  {
    id: 0,
    name: "Appetizers",
    servedWith: "",
    items: [
      {
        id: 1,
        name: "Fresh Salad Rolls",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: "choice",
        dietType: "none",
      },
      {
        id: 2,
        name: "Fresh Veggie Salad Rolls",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: "4.50",
        dietType: "vegetarian",
      },
      {
        id: 3,
        name: "Pot Sticker (deep fried or steamed)",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: "4.50",
        dietType: "none",
      },
      {
        id: 4,
        name: "Deep Fried Tofu",
        description: "Deep fried tofu with soy sauce",
        price: "4.50",
        dietType: "gluten free",
      },
    ],
  },
  {
    id: 1,
    name: "Salad",
    servedWith: "",
    items: [
      {
        id: 18,
        name: "Beef Salad - Goi Bo",
        description:
          "Beef, lettuce, cilantro, red bell pepper, cucumber, dry pepper, tomatoes fried shallots, tappes with roasted peanuts",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 19,
        name: "Chicken Breast Salad",
        description:
          "Finely shredded cabbage, chicken, cilantro, red bell pepper, fried shallots, pickled carrots and radish, roasted peanuts tossed in our special homemade sauce",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 2,
    name: "Noodle Soup - Pho",
    servedWith:
      "Served with noodles, fresh bean sprouts, basil leaves, onions, cilantro, and a lime wedge except for entrees with *. Add 2.00 for Larger size. Add 4.00 for Super Bowl size. Add extra vegetable or noodle 2.00. add extra meat 3.00. Add extra seafood 4.00",
    items: [
      {
        id: 28,
        name: "Pho Tai",
        description: "Beef Round Steak",
        price: "7.95",
        dietType: "none",
      },
      {
        id: 29,
        name: "Pho Tai Gon",
        description: "Beef Round Steak and beef tenderloin",
        price: "7.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 3,
    name: "Vermicelli Noodle Entree - Bun",
    servedWith:
      "Bowl of Vermicelli rice noodles served with lettuce, bean sprouts, basil, cilantro, cucumbers, fried fresh green onions, fried shallots, picked carrots, and radish, roasted peanutes, with a side of housemade fish sauce",
    items: [
      {
        id: 56,
        name: "Grilled Pork",
        description: "Bowl of Vermicelli with choice of grilled marinated pork",
        price: "8.95",
        dietType: "none",
      },
      {
        id: 57,
        name: "Grilled Chicken",
        description:
          "Bowl of Vermicelli with choice of grilled marinated chicken",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 4,
    name: "Rice Entrees - Com",
    servedWith:
      "All rice entrees served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 75,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 76,
        name: "Chicken or Pork Fried Rice",
        description:
          "Fried rice with chien or pork, eggs, peas, corn, onions, and carrots",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 5,
    name: "Beef Entrees",
    servedWith:
      "All entrees served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 0,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 1,
        name: "Chicken or Pork Fried Rice",
        description:
          "Fried rice with chien or pork, eggs, peas, corn, onions, and carrots",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 6,
    name: "House Specialties",
    servedWith:
      "All plates served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 112,
        name: "Curry Chicken dishes",
        description:
          "Yellow, red, or green curry with potatoes mixed with vegatables and chicken",
        price: "8.95",
        dietType: "gluten free",
      },
      {
        id: 113,
        name: "Chicken or Pork Fried Rice",
        description:
          "Yellow, red, or green curry with potatoes mixed with vegatables and chicken",
        price: "8.95",
        dietType: "both",
      },
    ],
  },
  {
    id: 7,
    name: "Egg Noodle Soup",
    servedWith:
      "Served with egg noodles, fresh bean sprouts, basil leaves, onion, cilantro, and a lime wedge except for entrees with *",
    items: [
      {
        id: 136,
        name: "Udon Soup",
        description:
          "Chicken or tofu with brocoli, carrot, cilantro, onions, mushrooms, and seaweed",
        price: "8.95",
        dietType: "vegetarian",
      },
      {
        id: 137,
        name: "Udon Seafood Soup",
        description:
          "Shrimp, Scallop, Squid, brocoli, carrot, cilantro, onions, mushrooms, and seaweed",
        price: "10.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 8,
    name: "Drink - Nuoc Uong",
    servedWith:
      "Smoothies, Thai Ice Tea, and Boba Tea, Milk Tea. Contains milk with or w/o dairy (coconut milk also available)",
    items: [
      {
        id: 0,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 1,
        name: "Chicken or Pork Fried Rice",
        description:
          "Fried rice with chien or pork, eggs, peas, corn, onions, and carrots",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
];


export default sections