const data = [
  {
    name: 'Bench Press',
    target: 'Chest',
    sets: 4,
    reps: 12,
    time: 7,
    image: require('../assets/images/benchpress.jpg'),
    video: require('../assets/videos/benchpress.mp4'),


    instructions: [
      'Lie flat on the bench with feet grounded',
      'Grip bar slightly wider than shoulder width',
      'Lower bar slowly to chest',
      'Pause briefly at bottom',
      'Push bar upward until arms extend',
    ],

    mistakes: [
      'Bouncing bar off chest',
      'Flaring elbows too wide',
      'Lifting feet off ground',
    ],

    tips: [
      'Control the movement throughout',
      'Keep wrists straight',
    ],
  },

  {
    name: 'Incline Dumbbell Press',
    target: 'Upper Chest',
    sets: 3,
    reps: 12,
    time: 6,
    image: require('../assets/images/incline.jpg'),

    instructions: [
      'Set bench at 30-45 degree incline',
      'Hold dumbbells at shoulder level',
      'Press weights upward',
      'Lower slowly with control',
      'Repeat without locking elbows',
    ],

    mistakes: [
      'Using too heavy weights',
      'Arching lower back',
      'Dropping dumbbells too fast',
    ],

    tips: [
      'Focus on upper chest squeeze',
      'Maintain steady tempo',
    ],
  },

  {
    name: 'Push Ups',
    target: 'Chest',
    sets: 3,
    reps: 15,
    time: 5,
    image: require('../assets/images/pushups.jpg'),

    instructions: [
      'Start in plank position',
      'Keep body straight',
      'Lower chest towards floor',
      'Pause briefly at bottom',
      'Push back up fully',
    ],

    mistakes: [
      'Sagging hips',
      'Half range movement',
      'Elbows flaring out',
    ],

    tips: [
      'Engage core throughout',
      'Keep neck neutral',
    ],
  },

  {
    name: 'Shoulder Press',
    target: 'Shoulders',
    sets: 3,
    reps: 12,
    time: 6,
    image: require('../assets/images/shoulderpress.jpg'),
   
    instructions: [
      'Sit upright with dumbbells at shoulders',
      'Keep back straight',
      'Press weights overhead',
      'Lower slowly to start position',
      'Repeat controlled reps',
    ],

    mistakes: [
      'Arching lower back',
      'Locking elbows aggressively',
      'Using momentum',
    ],

    tips: [
      'Keep core tight',
      'Control both up and down movement',
    ],
  },

  {
    name: 'Lateral Raises',
    target: 'Shoulders',
    sets: 3,
    reps: 15,
    time: 5,
    image: require('../assets/images/lateral.jpg'),

    instructions: [
      'Stand with dumbbells at sides',
      'Raise arms to shoulder height',
      'Keep slight bend in elbows',
      'Pause at top',
      'Lower slowly',
    ],

    mistakes: [
      'Swinging weights',
      'Raising above shoulder level',
      'Using too heavy dumbbells',
    ],

    tips: [
      'Use light weight for control',
      'Lead with elbows',
    ],
  },

  {
    name: 'Bicep Curls',
    target: 'Biceps',
    sets: 3,
    reps: 12,
    time: 5,
    image: require('../assets/images/bicepcurls.jpg'),

    instructions: [
      'Stand with dumbbells in hands',
      'Keep elbows close to body',
      'Curl weights upward',
      'Squeeze at top',
      'Lower slowly',
    ],

    mistakes: [
      'Swinging body',
      'Moving elbows forward',
      'Dropping weights quickly',
    ],

    tips: [
      'Focus on muscle contraction',
      'Keep movement slow and controlled',
    ],
  },

  {
    name: 'Hammer Curls',
    target: 'Biceps',
    sets: 3,
    reps: 12,
    time: 5,
    image: require('../assets/images/hammercurls.jpg'),

    instructions: [
      'Hold dumbbells with neutral grip',
      'Keep elbows close',
      'Curl weights upward',
      'Pause at top',
      'Lower slowly',
    ],

    mistakes: [
      'Using momentum',
      'Elbows moving outward',
      'Partial reps',
    ],

    tips: [
      'Keep wrists neutral',
      'Control entire motion',
    ],
  },

  {
    name: 'Tricep Dips',
    target: 'Triceps',
    sets: 3,
    reps: 15,
    time: 6,
    image: require('../assets/images/tricepdips.jpg'),

    instructions: [
      'Place hands on bench edge',
      'Extend legs forward',
      'Lower body by bending elbows',
      'Pause at bottom',
      'Push back up',
    ],

    mistakes: [
      'Going too low causing strain',
      'Flaring elbows outward',
      'Using legs too much',
    ],

    tips: [
      'Keep elbows close',
      'Control descent speed',
    ],
  },
];

export default data;