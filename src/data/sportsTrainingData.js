

// const sportsTrainingData = {
// Football: [
//     {
//       name: 'Dribbling',
//       target: 'Ball Movement',
//       drills: 5,
//       duration: 14,
     
//      image: require('../assets/images/dribbling.png'),
//     },

//     {
//       name: 'Passing',
//       target: 'Passing Accuracy',
//       drills: 4,
//       duration: 11,
      
//      image: require('../assets/images/passing.png'),
//     },

//     {
//       name: 'Shooting',
//       target: 'Finishing Power',
//       drills: 5,
//       duration: 13,
   
//     image: require('../assets/images/shooting.png'),
//     },

//     {
//       name: 'Ball Control',
//       target: 'First Touch',
//       drills: 4,
//       duration: 12,
    
//     image: require('../assets/images/ballControll.png'),
//     },

//     {
//       name: 'Goalkeeping',
//       target: 'Shot Stopping',
//       drills: 6,
//       duration: 15,
     
//      image: require('../assets/images/goalkeeping.png'),
//     },
//   ],
//   Basketball: [
//     {
//       name: 'Jump Shot',
//       target: 'Shooting',
//       drills: 4,
//       duration: 12,

//      image: require('../assets/images/jumpShot.png'),
//     },

//     {
//       name: 'Crossover Dribble',
//       target: 'Ball Handling',
//       drills: 5,
//       duration: 14 ,
//      image: require('../assets/images/crossoverDribble.png'),
//     },

//     {
//       name: 'Layup Finish',
//       target: 'Finishing',
//       drills: 3,
//       duration: 10 ,
//       image: require('../assets/images/layupFinish.png'),
//     },

//     {
//       name: 'Fadeaway Shot',
//       target: 'Scoring',
//       drills: 4,
//       duration: 13,
//      image: require('../assets/images/fadeawayShot.png'),
//     },

//     {
//       name: 'Bounce Pass',
//       target: 'Passing',
//       drills: 3,
//       duration: 9 ,
//      image: require('../assets/images/bouncePass.png'),
//     },
//   ],

//   Cricket: [
//     {
//       name: 'Cover Drive',
//       target: 'Batting',
//       drills: 5,
//       duration: 15,
//       image: require('../assets/images/coverDrive.png'),
//     },

//     {
//       name: 'Pull Shot',
//       target: 'Batting Power',
//       drills: 4,
//       duration: 13,
//     image: require('../assets/images/pullShot.png'),
//     },

//     {
//       name: 'Yorker Delivery',
//       target: 'Fast Bowling',
//       drills: 5,
//       duration: 16 ,
//       image: require('../assets/images/yorkerDelivery.png'),
//     },

//     {
//       name: 'Straight Drive',
//       target: 'Timing',
//       drills: 3,
//       duration: 10 ,
//       image: require('../assets/images/straightDrive.png'),
//     },

//     {
//       name: 'Spin Control',
//       target: 'Spin Bowling',
//       drills: 4,
//       duration: 12,

//      image: require('../assets/images/spinControl.png'),
//     },
//   ],

//   Tennis: [
//     {
//       name: 'Topspin Forehand',
//       target: 'Forehand',
//       drills: 4,
//       duration: 12,
//       image: require('../assets/images/topspinForehand.png'),
//     },

//     {
//       name: 'Backhand Slice',
//       target: 'Backhand',
//       drills: 5,
//       duration: 14 ,
//      image: require('../assets/images/backhandSlice.png'),
//     },

//     {
//       name: 'Serve Accuracy',
//       target: 'Serving',
//       drills: 3,
//       duration: 10,
//       image: require('../assets/images/serveAccuracy.png'),
//     },

//     {
//       name: 'Volley Control',
//       target: 'Net Play',
//       drills: 4,
//       duration: 11,
//       image: require('../assets/images/volleyControl.png'),
//     },

//     {
//       name: 'Drop Shot',
//       target: 'Touch Play',
//       drills: 5,
//       duration: 13,
//       image: require('../assets/images/dropShot.png'),
//     },
//   ],

//   Badminton: [
//     {
//       name: 'Jump Smash',
//       target: 'Smashing',
//       drills: 5,
//       duration: 14,
//       image: require('../assets/images/jumpSmash.png'),
//     },

//     {
//       name: 'Net Drop',
//       target: 'Net Control',
//       drills: 3,
//       duration: 9,
//         image: require('../assets/images/netDrop.png'),
//     },

//     {
//       name: 'Backhand Clear',
//       target: 'Backhand',
//       drills: 4,
//       duration: 12,

//      image: require('../assets/images/backhandClear.png'),
//     },

//     {
//       name: 'Forehand Drive',
//       target: 'Speed Shots',
//       drills: 4,
//       duration: 11,

//       image: require('../assets/images/forehandDrive.png'),
//     },

//     {
//       name: 'Footwork Agility',
//       target: 'Movement',
//       drills: 6,
//       duration: 15,
//       image: require('../assets/images/footworkAgility.png'),
//     },
//   ],
// };

// export default sportsTrainingData;









































const sportsTrainingData = {
  Football: [
    {
      name: 'Dribbling',
      target: 'Ball Movement',
      drills: 5,
      duration: 14,

      image: require('../assets/images/dribbling.png'),

     video: require('../assets/videos/dribbling.mp4'),

      instructions: [
        'Keep the ball close to your feet',
        'Use both inside and outside foot touches',
        'Keep your head slightly up while moving',
        'Change direction quickly to beat defenders',
        'Maintain balance while accelerating',
      ],

      mistakes: [
        'Looking down constantly at the ball',
        'Taking heavy touches',
        'Using only one foot',
        'Running too fast without control',
      ],

      tips: [
        'Practice cone dribbling daily',
        'Stay light on your feet',
        'Use quick short touches',
      ],
    },

    {
      name: 'Passing',
      target: 'Passing Accuracy',
      drills: 4,
      duration: 11,

      image: require('../assets/images/passing.png'),

      video: require('../assets/videos/passing.mp4'),

      instructions: [
        'Position your body toward the target',
        'Place non-kicking foot beside the ball',
        'Strike using inside of the foot',
        'Follow through toward your teammate',
        'Keep eyes on passing direction',
      ],

      mistakes: [
        'Passing too hard',
        'Incorrect foot placement',
        'Leaning backward during pass',
        'Ignoring teammate positioning',
      ],

      tips: [
        'Focus on accuracy first',
        'Communicate before passing',
        'Practice one-touch passing',
      ],
    },

    {
      name: 'Shooting',
      target: 'Finishing Power',
      drills: 5,
      duration: 13,

      image: require('../assets/images/shooting.png'),

       video: require('../assets/videos/shooting.mp4'),

      instructions: [
        'Plant support foot beside the ball',
        'Strike with laces for power',
        'Keep ankle locked firmly',
        'Lean slightly forward while shooting',
        'Follow through after contact',
      ],

      mistakes: [
        'Leaning too far back',
        'Weak ankle position',
        'Rushing the shot',
        'Poor body balance',
      ],

      tips: [
        'Aim before shooting',
        'Practice weak foot shots',
        'Focus on clean contact',
      ],
    },

    {
      name: 'Ball Control',
      target: 'First Touch',
      drills: 4,
      duration: 12,

      image: require('../assets/images/ballControll.png'),

       video: require('../assets/videos/ballcontroll.mp4'),

      instructions: [
        'Relax your foot before receiving ball',
        'Use inside foot for softer touch',
        'Keep knees slightly bent',
        'Control ball into open space',
        'Stay balanced during reception',
      ],

      mistakes: [
        'Hard first touch',
        'Standing flat-footed',
        'Watching only the ball',
        'Poor body positioning',
      ],

      tips: [
        'Train with wall passes',
        'Use different body parts for control',
        'Improve reaction timing',
      ],
    },

    {
      name: 'Goalkeeping',
      target: 'Shot Stopping',
      drills: 6,
      duration: 15,

      image: require('../assets/images/goalkeeping.png'),

      video: require('../assets/videos/goalkeeping.mp4'),

      instructions: [
        'Maintain ready stance',
        'Keep hands in front position',
        'Track the ball continuously',
        'Dive using full body extension',
        'Recover quickly after save',
      ],

      mistakes: [
        'Standing too upright',
        'Late reaction timing',
        'Poor hand positioning',
        'Ignoring footwork',
      ],

      tips: [
        'Practice reflex drills',
        'Stay vocal with defenders',
        'Improve lateral movement',
      ],
    },
  ],

  Basketball: [
    {
      name: 'Jump Shot',
      target: 'Shooting',
      drills: 4,
      duration: 12,

      image: require('../assets/images/jumpShot.png'),

      video: require('../assets/videos/jumpshot.mp4'),

      instructions: [
        'Square shoulders toward basket',
        'Bend knees before jumping',
        'Release ball at highest point',
        'Follow through with wrist snap',
        'Land balanced after shot',
      ],

      mistakes: [
        'Releasing too early',
        'Poor elbow alignment',
        'Fading backward unnecessarily',
        'Flat shot trajectory',
      ],

      tips: [
        'Focus on shooting form',
        'Practice free throws regularly',
        'Keep eyes on rim target',
      ],
    },

    {
      name: 'Crossover Dribble',
      target: 'Ball Handling',
      drills: 5,
      duration: 14,

      image: require('../assets/images/crossoverDribble.png'),

       video: require('../assets/videos/crossoverDribble.mp4'),

      instructions: [
        'Keep dribble low',
        'Shift body weight quickly',
        'Cross ball rapidly between hands',
        'Protect ball with opposite arm',
        'Explode after crossover',
      ],

      mistakes: [
        'Dribbling too high',
        'Slow hand movement',
        'Looking down at ball',
        'Poor balance during move',
      ],

      tips: [
        'Stay low while dribbling',
        'Practice both hands equally',
        'Use quick foot movement',
      ],
    },

    {
      name: 'Layup Finish',
      target: 'Finishing',
      drills: 3,
      duration: 10,

      image: require('../assets/images/layupFinish.png'),

       video: require('../assets/videos/layupfinish.mp4'),

      instructions: [
        'Approach basket at angle',
        'Take proper two-step movement',
        'Jump off correct foot',
        'Use backboard for accuracy',
        'Extend arm fully toward rim',
      ],

      mistakes: [
        'Incorrect footwork',
        'Releasing too hard',
        'Poor timing',
        'Watching defenders instead of rim',
      ],

      tips: [
        'Practice both sides',
        'Improve jump timing',
        'Use soft touch on board',
      ],
    },

    {
      name: 'Fadeaway Shot',
      target: 'Scoring',
      drills: 4,
      duration: 13,

      image: require('../assets/images/fadeawayShot.png'),

      // video: require('../assets/videos/fadeawayShot.mp4'),

      instructions: [
        'Create space from defender',
        'Jump slightly backward',
        'Maintain shooting balance',
        'Release at peak jump',
        'Follow through properly',
      ],

      mistakes: [
        'Leaning excessively backward',
        'Poor balance',
        'Rushing release',
        'Weak leg drive',
      ],

      tips: [
        'Master basic jumper first',
        'Use legs for stability',
        'Practice mid-range shots',
      ],
    },

    {
      name: 'Bounce Pass',
      target: 'Passing',
      drills: 3,
      duration: 9,

      image: require('../assets/images/bouncePass.png'),

      // video: require('../assets/videos/bouncePass.mp4'),

      instructions: [
        'Aim pass at floor midpoint',
        'Use both hands evenly',
        'Step toward target',
        'Keep wrists firm',
        'Follow through forward',
      ],

      mistakes: [
        'Passing too hard',
        'Wrong bounce angle',
        'Weak follow through',
        'Poor teammate awareness',
      ],

      tips: [
        'Communicate before pass',
        'Keep passes sharp',
        'Practice moving passes',
      ],
    },
  ],


  // ========================= CRICKET =========================

Cricket: [
  {
    name: 'Cover Drive',
    target: 'Batting',
    drills: 5,
    duration: 15,

    image: require('../assets/images/coverDrive.png'),

    // video: require('../assets/videos/coverDrive.mp4'),

    instructions: [
      'Step toward the pitch of the ball',
      'Keep front elbow high',
      'Swing bat in straight line',
      'Transfer weight forward properly',
      'Complete full follow through',
    ],

    mistakes: [
      'Playing away from body',
      'Poor foot movement',
      'Lifting head too early',
      'Weak grip control',
    ],

    tips: [
      'Watch ball till contact',
      'Practice timing over power',
      'Maintain balance throughout shot',
    ],
  },

  {
    name: 'Pull Shot',
    target: 'Batting Power',
    drills: 4,
    duration: 13,

    image: require('../assets/images/pullShot.png'),

    // video: require('../assets/videos/pullShot.mp4'),

    instructions: [
      'Move quickly into position',
      'Rock weight onto back foot',
      'Keep eyes level on the ball',
      'Swing horizontally across body',
      'Roll wrists after impact',
    ],

    mistakes: [
      'Playing too early',
      'Poor balance on back foot',
      'Closing eyes during shot',
      'Incorrect bat angle',
    ],

    tips: [
      'Practice against short balls',
      'Stay relaxed during swing',
      'Keep strong wrist position',
    ],
  },

  {
    name: 'Yorker Delivery',
    target: 'Fast Bowling',
    drills: 5,
    duration: 16,

    image: require('../assets/images/yorkerDelivery.png'),

    // video: require('../assets/videos/yorkerDelivery.mp4'),

    instructions: [
      'Maintain smooth run-up',
      'Release ball late',
      'Aim near batter’s toes',
      'Use wrist snap at release',
      'Follow through naturally',
    ],

    mistakes: [
      'Overstepping crease',
      'Releasing too early',
      'Inconsistent line and length',
      'Poor wrist position',
    ],

    tips: [
      'Practice target bowling',
      'Strengthen wrist control',
      'Focus on accuracy first',
    ],
  },

  {
    name: 'Straight Drive',
    target: 'Timing',
    drills: 3,
    duration: 10,

    image: require('../assets/images/straightDrive.png'),

    // video: require('../assets/videos/straightDrive.mp4'),

    instructions: [
      'Move front foot toward pitch',
      'Keep bat face straight',
      'Maintain head stability',
      'Drive ball along the ground',
      'Complete smooth follow through',
    ],

    mistakes: [
      'Opening bat face early',
      'Poor foot placement',
      'Losing body balance',
      'Hitting too hard',
    ],

    tips: [
      'Focus on timing',
      'Keep elbow high',
      'Stay balanced during shot',
    ],
  },

  {
    name: 'Spin Control',
    target: 'Spin Bowling',
    drills: 4,
    duration: 12,

    image: require('../assets/images/spinControl.png'),

    // video: require('../assets/videos/spinControl.mp4'),

    instructions: [
      'Grip ball correctly',
      'Rotate fingers over seam',
      'Use wrist for extra spin',
      'Aim consistent line',
      'Follow through toward target',
    ],

    mistakes: [
      'Wrong finger placement',
      'Bowling too fast',
      'Inconsistent spin release',
      'Ignoring body alignment',
    ],

    tips: [
      'Practice flight variation',
      'Control pace carefully',
      'Focus on seam position',
    ],
  },
],

// ========================= TENNIS =========================

Tennis: [
  {
    name: 'Topspin Forehand',
    target: 'Forehand',
    drills: 4,
    duration: 12,

    image: require('../assets/images/topspinForehand.png'),

    // video: require('../assets/videos/topspinForehand.mp4'),

    instructions: [
      'Use semi-western grip',
      'Rotate shoulders early',
      'Brush upward on the ball',
      'Transfer weight forward',
      'Finish racket above shoulder',
    ],

    mistakes: [
      'Flat racket swing',
      'Late preparation',
      'Poor foot positioning',
      'Overhitting the shot',
    ],

    tips: [
      'Generate spin with legs',
      'Stay relaxed during swing',
      'Focus on racket acceleration',
    ],
  },

  {
    name: 'Backhand Slice',
    target: 'Backhand',
    drills: 5,
    duration: 14,

    image: require('../assets/images/backhandSlice.png'),

    // video: require('../assets/videos/backhandSlice.mp4'),

    instructions: [
      'Use continental grip',
      'Keep racket face slightly open',
      'Swing downward through ball',
      'Stay balanced during contact',
      'Extend follow through forward',
    ],

    mistakes: [
      'Swinging too hard',
      'Incorrect grip pressure',
      'Poor timing',
      'Leaning backward',
    ],

    tips: [
      'Keep movement smooth',
      'Use slice for defense',
      'Practice low ball control',
    ],
  },

  {
    name: 'Serve Accuracy',
    target: 'Serving',
    drills: 3,
    duration: 10,

    image: require('../assets/images/serveAccuracy.png'),

    // video: require('../assets/videos/serveAccuracy.mp4'),

    instructions: [
      'Position feet correctly',
      'Toss ball consistently',
      'Reach full arm extension',
      'Snap wrist at contact',
      'Land inside baseline',
    ],

    mistakes: [
      'Poor ball toss',
      'Weak follow through',
      'Incorrect stance',
      'Hitting too flat',
    ],

    tips: [
      'Practice toss separately',
      'Aim before serving',
      'Use legs for power',
    ],
  },

  {
    name: 'Volley Control',
    target: 'Net Play',
    drills: 4,
    duration: 11,

    image: require('../assets/images/volleyControl.png'),

    // video: require('../assets/videos/volleyControl.mp4'),

    instructions: [
      'Keep racket in front',
      'Take short compact swings',
      'Move quickly toward ball',
      'Punch through contact',
      'Recover after volley',
    ],

    mistakes: [
      'Large backswing',
      'Poor reaction timing',
      'Standing too upright',
      'Weak grip stability',
    ],

    tips: [
      'Stay on toes',
      'Improve hand-eye coordination',
      'Practice reflex volleys',
    ],
  },

  {
    name: 'Drop Shot',
    target: 'Touch Play',
    drills: 5,
    duration: 13,

    image: require('../assets/images/dropShot.png'),

    // video: require('../assets/videos/dropShot.mp4'),

    instructions: [
      'Use soft grip pressure',
      'Open racket face slightly',
      'Brush gently under ball',
      'Disguise shot preparation',
      'Aim close to net',
    ],

    mistakes: [
      'Too much force',
      'Poor disguise',
      'Incorrect racket angle',
      'Standing too far back',
    ],

    tips: [
      'Use at right moment',
      'Practice touch control',
      'Mix with deep shots',
    ],
  },
],

// ========================= BADMINTON =========================

Badminton: [
  {
    name: 'Jump Smash',
    target: 'Smashing',
    drills: 5,
    duration: 14,

    image: require('../assets/images/jumpSmash.png'),

    // video: require('../assets/videos/jumpSmash.mp4'),

    instructions: [
      'Move quickly behind shuttle',
      'Jump explosively upward',
      'Rotate shoulders fully',
      'Hit shuttle at highest point',
      'Land balanced after smash',
    ],

    mistakes: [
      'Late jump timing',
      'Weak wrist snap',
      'Poor body rotation',
      'Incorrect landing balance',
    ],

    tips: [
      'Strengthen leg power',
      'Practice timing regularly',
      'Use full body momentum',
    ],
  },

  {
    name: 'Net Drop',
    target: 'Net Control',
    drills: 3,
    duration: 9,

    image: require('../assets/images/netDrop.png'),

    // video: require('../assets/videos/netDrop.mp4'),

    instructions: [
      'Hold racket loosely',
      'Approach shuttle early',
      'Tap shuttle softly',
      'Keep racket face controlled',
      'Recover position quickly',
    ],

    mistakes: [
      'Hitting too hard',
      'Poor footwork',
      'Late shuttle contact',
      'Overextending wrist',
    ],

    tips: [
      'Practice delicate touch',
      'Stay low near net',
      'Focus on control',
    ],
  },

  {
    name: 'Backhand Clear',
    target: 'Backhand',
    drills: 4,
    duration: 12,

    image: require('../assets/images/backhandClear.png'),

    // video: require('../assets/videos/backhandClear.mp4'),

    instructions: [
      'Turn shoulders sideways',
      'Grip racket firmly',
      'Generate wrist power',
      'Hit shuttle high and deep',
      'Recover to center quickly',
    ],

    mistakes: [
      'Weak wrist movement',
      'Poor body positioning',
      'Late contact point',
      'Incorrect grip',
    ],

    tips: [
      'Strengthen wrist flexibility',
      'Practice shadow swings',
      'Use smooth follow through',
    ],
  },

  {
    name: 'Forehand Drive',
    target: 'Speed Shots',
    drills: 4,
    duration: 11,

    image: require('../assets/images/forehandDrive.png'),

    // video: require('../assets/videos/forehandDrive.mp4'),

    instructions: [
      'Stand balanced on toes',
      'Use quick forearm action',
      'Hit shuttle flat',
      'Maintain compact swing',
      'Recover immediately after shot',
    ],

    mistakes: [
      'Large backswing',
      'Slow racket movement',
      'Poor foot positioning',
      'Loose grip control',
    ],

    tips: [
      'Increase reaction speed',
      'Practice continuous rallies',
      'Stay aggressive at net',
    ],
  },

  {
    name: 'Footwork Agility',
    target: 'Movement',
    drills: 6,
    duration: 15,

    image: require('../assets/images/footworkAgility.png'),

    // video: require('../assets/videos/footworkAgility.mp4'),

    instructions: [
      'Stay on toes constantly',
      'Move with small quick steps',
      'Push off explosively',
      'Maintain low center of gravity',
      'Recover to base position',
    ],

    mistakes: [
      'Crossing feet unnecessarily',
      'Standing flat-footed',
      'Slow recovery movement',
      'Poor balance control',
    ],

    tips: [
      'Train ladder drills',
      'Improve endurance',
      'Focus on recovery speed',
    ],
  },
],
};

export default sportsTrainingData;