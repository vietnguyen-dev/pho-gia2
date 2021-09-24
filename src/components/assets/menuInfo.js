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
        dietType: "gluten free",
        choices: [ 
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: 5.50},
          {id: 2, meat: `Beef or Shrimp`, price: 5.95},
          {id: 3, meat: `Combined Shrimp and Pork OR Chicken`, price: 7.50},
          {id: 4, meat: `Combined Shrimp, Pork, and Chicken `, price: 8.50},
        ]
      },
      {
        id: 2,
        name: "Crab Puffs",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: '4.95',
        dietType: "none",
      },
      {
        id: 3,
        name: "Pot Sticker (deep fried or steamed)",
        description: "Deep fried wonton skin wrapped with vegetables and pork meat.",
        price: '4.95',
        dietType: "none",
      },
      {
        id: 4,
        name: "Deep Fried Tofu",
        description: "Deep fried tofu with soy sauce (soy sauce contains gluten, sweet chili sauce contains no gluten)",
        price: '4.95',
        dietType: "both",
      },
      {
        id: 5,
        name: "Chicken Satay",
        description: "Deep fried tofu with soy sauce (soy sauce contains gluten, sweet chili sauce contains no gluten)",
        price: '6.95',
        dietType: "gluten free",
      },
      {
        id: 6,
        name: "Chicken Nuggets",
        description: "Deep fried and battered chicken",
        price:'4.95',
        dietType: "none",
      },
      {
        id: 7,
        name: "Crispy Eggs Rolls - Cha Gio",
        description: 'Cripsy rolls with ground pork, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '5.50',
        dietType: "none",
      },
      {
        id: 8,
        name: "Veggie Crispy Eggs Rolls - Cha Gio Chay",
        description: 'Cripsy rolls with tofu, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '5.50',
        dietType: "vegetarian",
      },
      {
        id: 9,
        name: "Chicken Wings - Canh Ga Chien",
        description: 'Cripsy rolls with tofu, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '6.95',
        dietType: "none",
      },
      {
        id: 10,
        name: "Cocout Breaded Shrimp",
        description: 'Cripsy deep fried coconut breaded shrimp served with chili sauce',
        price: '6.95',
        dietType: "none",
      },
      {
        id: 11,
        name: "Pepper Salted Shrimp or Calimari",
        description: 'Crispy deep fried pepper salted shrimp or calimari with carrots and onions',
        price: '9.50',
        dietType: "none",
      },
      {
        id: 12,
        name: "Battered Cod fish fillets",
        description: 'Deep fried battered Cod fish fillets',
        price: '4.50',
        dietType: "none",
      },
      {
        id: 13,
        name: "French Fries",
        description: 'Our French Fries are crispy and golden on the outside and fluffy on the inside with 0 grams trans fat',
        price: '3.95',
        dietType: "none",
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
        price: "11.95",
        dietType: "none",
      },
      {
        id: 19,
        name: "Chicken Breast Salad - Goi Ga",
        description:
          "Finely shredded cabbage, chicken, cilantro, red bell pepper, fried shallots, pickled carrots and radish, roasted peanuts tossed in our special homemade sauce",
        price: "9.50",
        dietType: "gluten free",
      },
      {
        id: 20,
        name: "Garden Salad",
        description:
          "Fresh green lettuce, red bell pepper, tomatoes, cilantro, fresh advocado, cucumbers, carrots, boiled egg, seasoned cruton",
        price: "9.95 with choice",
        dietType: "both",
        choices: [ 
          {id: 1, meat: `Chicken breast, tofu, or naturally smoked real bacon`, price: ""},
          {id: 2, meat: `Blue, romano, cheddar, or swiss cheese`, price: ""},
          {id: 3, meat: `Caesar, ranch, thousand island, italian olive garden, or homemade sauce (sauce contains gluten)`, price: ""},
        ]
      },
      {
        id: 21,
        name: "Green Papaya Salad",
        description:
          "Finely shredded green papaya, shrimp or tofu, carrots, tomatoes, dry pepper, cilantro, red bell pepper, string bean, topped with fried shallots and roasted peanuts",
        price: "10.95",
        dietType: "gluten free",
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
        price: "9.50",
        dietType: "none",
      },
      {
        id: 29,
        name: "Pho Tai Gan",
        description: "Beef Round Steak and beef tendon",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 30,
        name: "Pho Gia Special - Pho Dac Biet",
        description: "Combination noodle soup with beed round steak brisket, flank, tendon, shredded tripe, and beef meatballs",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 31,
        name: "Pho Tai Nam",
        description: "Beef Round Steak and well done beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 32,
        name: "Pho Tai Sach",
        description: "Beef Round Steak and beef tripe",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 33,
        name: "Pho Chin Nam",
        description: "Well done beef brisket and beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 34,
        name: "Pho Gan Sach",
        description: "Beef tendon and beef tripe",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 35,
        name: "Pho Chin Bo Vien",
        description: "Well done beef brisket and beef meatballs",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 36,
        name: "Pho Seafood - Pho Hai San",
        description: "Shrimp, scallop, mussle, squid, brocolli, zucchini, and mushroom",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 37,
        name: "Pho Tai Chin",
        description: "Beef Round Steak and well done beef brisket",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 38,
        name: "Pho Bo Vien",
        description: "Beef Meatballs",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 39,
        name: "Pho Tai, Bo Vien",
        description: "Beef Round Steak and beef meatballs",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 40,
        name: "Pho Chin",
        description: "Well done beef brisket",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 41,
        name: "Pho Ga (Chicken)",
        description: "Sliced Chicken Breast",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 42,
        name: "Pho Nam, Bo Vien",
        description: "Well done beef flank and beef meat balls",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 43,
        name: "Pho Nam Gan",
        description: "Well done beef flank and beef tendon",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 44,
        name: "Pho Nam",
        description: "Well done beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 45,
        name: "Pho Veggie - Pho Chay",
        description: "Vegetable broth with tofu, mushrooms, bell pepper, brocolli, zucchini, cabbage, carrot, topped with fried onion",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 46,
        name: "Pho Shrimp",
        description: "Shrimps, brocolli, zucchini, carrots, and mushrooms",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 47,
        name: "Spicy Beef Noodle - Bun Bo Hue * (one size)",
        description: "Round rice noodles, beef shank, in a spicy lemongrass beef broth",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 48,
        name: "Chicken Glass Noodle Soup - Mien Ga * (one size)",
        description: "Glass noodles, chicken breast, cilantro onions, fried shallots, with chicken broth",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 49,
        name: "Chicken and Bamboo Shoot Vermicelli Noodle Soup - Bun Mang Ga * (one size)",
        description: "Bamboo Shoot, chicken breast, cilantro, onions, fired shallots, with vermicelli rice noodles, and chicken broth",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 50,
        name: "Tom Yum or Tom Kha Noodle Soup * (one size)",
        description: "Spicy and sour lemongrass soup with rice noddle, tomatoes, galangal root, lime leaves celery, shallots, and mushrooms",
        price: "choice",
        dietType: "none",
        choices: [ 
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "10.50"},
          {id: 2, meat: `Beef or Shrimp`, price: "11.50"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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