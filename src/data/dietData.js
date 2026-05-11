const dietData = {
  veg: [
    {
      title: 'Breakfast',
      time: '7:00 AM',
      calories: 480,
      items: [
        { name: 'Oats + Milk', cal: 300, protein: 12, fat: 5, carbs: 45 },
        { name: 'Banana', cal: 180, protein: 2, fat: 1, carbs: 40 },
      ],
    },

    {
      title: 'Mid-Morning Snack',
      time: '10:30 AM',
      calories: 250,
      items: [
        { name: 'Greek Yogurt', cal: 150, protein: 15, fat: 4, carbs: 10 },
        { name: 'Almonds (10)', cal: 100, protein: 4, fat: 9, carbs: 3 },
      ],
    },

    {
      title: 'Lunch',
      time: '1:00 PM',
      calories: 550,
      items: [
        { name: 'Paneer Sabzi', cal: 320, protein: 20, fat: 18, carbs: 10 },
        { name: 'Roti (2)', cal: 230, protein: 6, fat: 5, carbs: 35 },
      ],
    },

    {
      title: 'Evening Snack',
      time: '4:30 PM',
      calories: 280,
      items: [
        { name: 'Protein Shake', cal: 180, protein: 20, fat: 3, carbs: 10 },
        { name: 'Apple', cal: 100, protein: 1, fat: 0, carbs: 25 },
      ],
    },

    {
      title: 'Dinner',
      time: '8:00 PM',
      calories: 500,
      items: [
        { name: 'Dal', cal: 250, protein: 15, fat: 6, carbs: 30 },
        { name: 'Rice', cal: 250, protein: 5, fat: 1, carbs: 45 },
      ],
    },
  ],

  nonveg: [
    {
      title: 'Breakfast',
      time: '7:00 AM',
      calories: 520,
      items: [
        { name: 'Egg Omelette (3)', cal: 300, protein: 18, fat: 20, carbs: 2 },
        { name: 'Brown Bread', cal: 220, protein: 6, fat: 3, carbs: 40 },
      ],
    },

    {
      title: 'Mid-Morning Snack',
      time: '10:30 AM',
      calories: 250,
      items: [
        { name: 'Boiled Eggs (2)', cal: 140, protein: 12, fat: 10, carbs: 1 },
        { name: 'Green Tea', cal: 0, protein: 0, fat: 0, carbs: 0 },
      ],
    },

    {
      title: 'Lunch',
      time: '1:00 PM',
      calories: 600,
      items: [
        { name: 'Grilled Chicken', cal: 350, protein: 40, fat: 8, carbs: 0 },
        { name: 'Rice', cal: 250, protein: 5, fat: 1, carbs: 45 },
      ],
    },

    {
      title: 'Evening Snack',
      time: '4:30 PM',
      calories: 285,
      items: [
        { name: 'Protein Shake', cal: 180, protein: 24, fat: 3, carbs: 10 },
        { name: 'Banana', cal: 105, protein: 1, fat: 0, carbs: 27 },
      ],
    },

    {
      title: 'Dinner',
      time: '8:00 PM',
      calories: 550,
      items: [
        { name: 'Fish Curry', cal: 320, protein: 35, fat: 15, carbs: 5 },
        { name: 'Roti (2)', cal: 230, protein: 6, fat: 5, carbs: 35 },
      ],
    },
  ],
};

export default dietData;