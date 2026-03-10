import { ShopItem, UserProfile, VocabWord } from './types';

export const SHOP_ITEMS: ShopItem[] = [
  // HEAD
  { id: 'hat_cowboy', name: 'Sheriff Hat', emoji: '🤠', price: 50, type: 'HEAD', description: 'Yeehaw! Extra gold.', bonus: { type: 'GOLD', value: 20 } },
  { id: 'hat_wizard', name: 'Wizard Hat', emoji: '🧙‍♂️', price: 100, type: 'HEAD', description: 'Magical hints.', bonus: { type: 'HINT', value: 2 } },
  { id: 'hat_crown', name: 'Golden Crown', emoji: '👑', price: 500, type: 'HEAD', description: 'Royal wealth.', bonus: { type: 'GOLD', value: 50 } },
  { id: 'hat_viking', name: 'Viking Helm', emoji: '🤘', price: 150, type: 'HEAD', description: 'Battle XP.', bonus: { type: 'XP', value: 25 } },
  { id: 'hat_space', name: 'Space Helmet', emoji: '👩‍🚀', price: 300, type: 'HEAD', description: 'Galactic XP.', bonus: { type: 'XP', value: 40 } },
  { id: 'hat_grad', name: 'Smart Cap', emoji: '🎓', price: 75, type: 'HEAD', description: 'Learning boost.', bonus: { type: 'XP', value: 15 } },

  // FACE
  { id: 'face_cool', name: 'Cool Shades', emoji: '🕶️', price: 30, type: 'FACE', description: 'Style XP.', bonus: { type: 'XP', value: 5 } },
  { id: 'face_monocle', name: 'Fancy Monocle', emoji: '🧐', price: 150, type: 'FACE', description: 'Classy hints.', bonus: { type: 'HINT', value: 1 } },
  { id: 'face_mask', name: 'Ninja Mask', emoji: '😷', price: 75, type: 'FACE', description: 'Hidden gold.', bonus: { type: 'GOLD', value: 10 } },
  { id: 'face_eye', name: 'Eye Patch', emoji: '👁️', price: 60, type: 'FACE', description: 'Pirate gold.', bonus: { type: 'GOLD', value: 5 } },
  { id: 'face_clown', name: 'Clown Nose', emoji: '🔴', price: 40, type: 'FACE', description: 'Funny XP.', bonus: { type: 'XP', value: 5 } },
  { id: 'face_3d', name: '3D Glasses', emoji: '👓', price: 120, type: 'FACE', description: 'Depth XP.', bonus: { type: 'XP', value: 10 } },

  // HAND
  { id: 'hand_sword', name: 'Toy Sword', emoji: '🗡️', price: 100, type: 'HAND', description: 'Training XP.', bonus: { type: 'XP', value: 10 } },
  { id: 'hand_wand', name: 'Magic Wand', emoji: '🪄', price: 200, type: 'HAND', description: 'Spell hints.', bonus: { type: 'HINT', value: 3 } },
  { id: 'hand_shield', name: 'Hero Shield', emoji: '🛡️', price: 150, type: 'HAND', description: 'Wrong answer protection.', bonus: { type: 'SHIELD', value: 2 } },
  { id: 'hand_pizza', name: 'Pepperoni', emoji: '🍕', price: 50, type: 'HAND', description: 'Tasty gold.', bonus: { type: 'GOLD', value: 10 } },
  { id: 'hand_glove', name: 'Boxing Glove', emoji: '🥊', price: 120, type: 'HAND', description: 'Power XP.', bonus: { type: 'XP', value: 10 } },
  { id: 'hand_controller', name: 'Game Pad', emoji: '🎮', price: 250, type: 'HAND', description: 'Gamer XP.', bonus: { type: 'XP', value: 30 } },

  // PET
  { id: 'pet_dog', name: 'Doggo', emoji: '🐕', price: 200, type: 'PET', description: 'Loyal XP.', bonus: { type: 'XP', value: 15 } },
  { id: 'pet_dragon', name: 'Baby Dragon', emoji: '🐉', price: 1000, type: 'PET', description: 'Massive XP.', bonus: { type: 'XP', value: 75 } },
  { id: 'pet_alien', name: 'Alien Pal', emoji: '👽', price: 500, type: 'PET', description: 'Space gold.', bonus: { type: 'GOLD', value: 30 } },
  { id: 'pet_cat', name: 'Lazy Cat', emoji: '🐈', price: 200, type: 'PET', description: 'Lucky gold.', bonus: { type: 'GOLD', value: 15 } },
  { id: 'pet_robot', name: 'Beep Boop', emoji: '🤖', price: 600, type: 'PET', description: 'Future shields.', bonus: { type: 'SHIELD', value: 4 } },
  { id: 'pet_ghost', name: 'Spooky', emoji: '👻', price: 400, type: 'PET', description: 'Spooky hints.', bonus: { type: 'HINT', value: 5 } },
];

export const INITIAL_USER: UserProfile = {
  name: 'Hero',
  gold: 0,
  xp: 0,
  level: 1,
  questsCompleted: 0,
  inventory: [],
  equipped: {}
};

export const DEMO_WORDS: VocabWord[] = [
  {
    id: 'vocab-suppose',
    word: 'suppose',
    definition: 'To think that something is likely to be true or to happen.',
    sentences: [
      'I ______ it could rain this afternoon, so I\'d better wear my boots just in case.',
      'Do you ______ we will have enough time to finish the project before lunch?',
      'Since he didn\'t call, I ______ he completely forgot about our plans today.'
    ],
    synonyms: ['guess', 'imagine', 'believe'],
    antonyms: ['know', 'prove', 'doubt'],
    distractors: [
      'To know for sure that something will happen.',
      'To forcefully demand someone to do a task.',
      'To completely forget about an important event.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-impose',
    word: 'impose',
    definition: 'To take advantage of someone\'s time or ask for too much.',
    sentences: [
      'It is considered rude to show up uninvited because you can ______ on them and their time.',
      'I don\'t want to ______, but could you help me carry these heavy boxes inside?',
      'The coach didn\'t want to ______ extra practice on the tired players after the long game.'
    ],
    synonyms: ['force', 'require', 'bother'],
    antonyms: ['help', 'release', 'assist'],
    distractors: [
      'To politely request a small favor from a friend.',
      'To give someone a thoughtful and unexpected gift.',
      'To accidentally forget to invite someone over.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-propose',
    word: 'propose',
    definition: 'To suggest a plan or idea for others to think about.',
    sentences: [
      'Since it is a sunny, beautiful day, I ______ that we all go to the park to play.',
      'The student council will ______ a new theme for the upcoming school dance.',
      'I\'d like to ______ a different way to solve this challenging math puzzle.'
    ],
    synonyms: ['suggest', 'recommend', 'offer'],
    antonyms: ['reject', 'refuse', 'oppose'],
    distractors: [
      'To loudly disagree with someone\'s carefully made plan.',
      'To secretly hide an object from your best friend.',
      'To quickly forget an important piece of information.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-oppose',
    word: 'oppose',
    definition: 'To be firmly against something or to disagree with it.',
    sentences: [
      'The students are really upset because they ______ the new dress code policies.',
      'Many neighbors ______ the plan to build a noisy factory right next to their homes.',
      'Even though it\'s popular, I strongly ______ cheating on the weekly history test.'
    ],
    synonyms: ['resist', 'fight', 'challenge'],
    antonyms: ['support', 'agree', 'accept'],
    distractors: [
      'To fully support and encourage a new school policy.',
      'To happily agree with a difficult choice or decision.',
      'To quietly ignore a very loudly debated conversation.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-disposable',
    word: 'disposable',
    definition: 'Made to be thrown away after being used only once.',
    sentences: [
      'At parties, many people use ______ cups and plates to have an easy clean-up.',
      'We bought a cheap ______ camera to take fun pictures during our camping trip.',
      'It is better for the environment to use a real water bottle instead of a ______ one.'
    ],
    synonyms: ['throwaway', 'temporary', 'single-use'],
    antonyms: ['reusable', 'permanent', 'lasting'],
    distractors: [
      'Made to be kept and cherished for many long years.',
      'Designed to be incredibly strong and very unbreakable.',
      'Meant to be carefully washed and used every single day.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-composition',
    word: 'composition',
    definition: 'What something is made of, or the ingredients it contains.',
    sentences: [
      'The ______ of slime is fairly simple since it only contains borax, glue, and water.',
      'Scientists studied the rocky ______ of the strange meteor that fell from the sky.',
      'Our music teacher asked us to write a short musical ______ for the spring concert.'
    ],
    synonyms: ['makeup', 'structure', 'mixture'],
    antonyms: ['destruction', 'ruin', 'separation'],
    distractors: [
      'The outer wrapping used to protect a newly bought item.',
      'The process of completely destroying a tall building.',
      'The bright color painted on the outside of a small box.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-deposit',
    word: 'deposit',
    definition: 'To put money into a bank account for safekeeping.',
    sentences: [
      'The bakery made a large ______ in the bank because they sold three expensive wedding cakes.',
      'Tom will ______ the extra money he earned from mowing lawns into his savings account.',
      'You must make a small ______ to reserve the community center for your birthday party.'
    ],
    synonyms: ['save', 'bank', 'entrust'],
    antonyms: ['withdraw', 'take', 'spend'],
    distractors: [
      'To completely spend all of your money on toys and games.',
      'To suddenly drop a heavy object onto the hard floor.',
      'To slowly take money out of a broken piggy bank.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-posture',
    word: 'posture',
    definition: 'The way a person holds their body when sitting or standing.',
    sentences: [
      'It is important to sit on the edge of your chair and use good ______ when playing an instrument.',
      'The doctor said my bad ______ was causing the pain in my neck and shoulders.',
      'The dancer practiced keeping an upright ______ while balancing the heavy book on her head.'
    ],
    synonyms: ['stance', 'pose', 'carriage'],
    antonyms: ['slouch', 'slump', 'droop'],
    distractors: [
      'The specific way a person speaks when they are giving a big speech.',
      'The colorful clothes a person chooses to wear on a very special day.',
      'The quick speed at which a person can run in a long distance race.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-proposal',
    word: 'proposal',
    definition: 'A formal plan or suggestion that is given to others to consider.',
    sentences: [
      'The school is reviewing three different ______ for installing the new playground equipment.',
      'The mayor presented a surprising ______ to build a new library in the center of town.',
      'We voted on the ______ to have pizza every Friday for the rest of the school year.'
    ],
    synonyms: ['plan', 'suggestion', 'offer'],
    antonyms: ['refusal', 'rejection', 'denial'],
    distractors: [
      'A completed building that has just finished being fully constructed.',
      'A silly joke told during the middle of a serious presentation.',
      'An angry letter written to complain about bad service.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-imposter',
    word: 'imposter',
    definition: 'A person who tricks others by pretending to be someone else.',
    sentences: [
      'The ______ tricked the family into giving him money by pretending to be a famous lawyer.',
      'The security guard quickly realized the man in the uniform was actually an ______.',
      'In the mystery game, you have to figure out which player is the sneaky ______.'
    ],
    synonyms: ['fake', 'fraud', 'pretender'],
    antonyms: ['expert', 'professional', 'original'],
    distractors: [
      'A highly trusted teacher who helps students study for exams.',
      'A brave police officer who solves very difficult local crimes.',
      'A very honest person who always tells the complete truth.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-composure',
    word: 'composure',
    definition: 'Remaining calm and in control of your emotions during a tough situation.',
    sentences: [
      'The young ice skater showed great ______ when she went onto the ice to begin her routine.',
      'Even when the fire alarm loudly rang, the teacher kept her ______ and guided the class outside.',
      'It is hard to keep your ______ when you are feeling very angry about losing a game.'
    ],
    synonyms: ['calmness', 'coolness', 'poise'],
    antonyms: ['panic', 'anger', 'anxiety'],
    distractors: [
      'Feeling extreme panic and wildly running around in circles.',
      'Showing deep sadness by loudly crying in front of everyone.',
      'Feeling completely exhausted after running a very long race.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-composite',
    word: 'composite',
    definition: 'Something that is made up of several different parts put together.',
    sentences: [
      'Many cultures are a ______ of different traditions that came from people settling there over time.',
      'The weird picture was a ______ of three different animal faces glued into one image.',
      'The new airplane wings are made from a strong ______ material of plastic and glass.'
    ],
    synonyms: ['blend', 'combination', 'mixture'],
    antonyms: ['pure', 'single', 'separate'],
    distractors: [
      'Something that is made of only one completely pure ingredient.',
      'A very simple object that is broken into many tiny pieces.',
      'A completely solid rock that is extremely smooth to touch.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-imposition',
    word: 'imposition',
    definition: 'Something asked of you that is unfair or a burden on your time.',
    sentences: [
      'Turning in an assignment late is an ______ on the teacher because it affects their workload.',
      'I know it\'s a huge ______, but could you drive me to the airport at 4:00 AM tomorrow?',
      'The unexpected house guests were an ______ because we didn\'t have enough food for dinner.'
    ],
    synonyms: ['burden', 'bother', 'inconvenience'],
    antonyms: ['help', 'benefit', 'advantage'],
    distractors: [
      'A wonderful gift that someone gives you completely by surprise.',
      'A very helpful action that makes your difficult day much easier.',
      'A funny joke that makes everyone quickly laugh out loud.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-juxtapose',
    word: 'juxtapose',
    definition: 'To place two things side-by-side to compare or contrast them.',
    sentences: [
      'Sally would ______ the photographs on her computer to see the small differences between them.',
      'The art teacher asked us to ______ a drawing of a bright apple next to a drawing of a dark plum.',
      'The author likes to ______ the rich king\'s castle with the poor farmer\'s tiny wooden hut.'
    ],
    synonyms: ['compare', 'contrast', 'pair'],
    antonyms: ['separate', 'divide', 'isolate'],
    distractors: [
      'To completely separate two things so they never touch each other.',
      'To quickly throw two items very far away into the deep garbage.',
      'To carefully paint a single beautiful picture of a tall mountain.'
    ],
    masteryLevel: 0
  },
  {
    id: 'vocab-compost',
    word: 'compost',
    definition: 'Nutrient-rich dirt made from decaying plants that helps gardens grow.',
    sentences: [
      'Timothy added ______ to the soil to help his plants produce more fresh fruits and vegetables.',
      'We put our rotten apple cores and old leaves into the ______ bin in the backyard.',
      'Using natural ______ is much better for the earth than using dangerous chemical fertilizers.'
    ],
    synonyms: ['fertilizer', 'mulch', 'soil'],
    antonyms: ['trash', 'garbage', 'poison'],
    distractors: [
      'Toxic chemicals that are very harmful to growing plants.',
      'A clean basket used to carry fresh fruits from the market.',
      'Fresh water used to wash dirty vegetables in the kitchen sink.'
    ],
    masteryLevel: 0
  }
];

export const SPELLING_WORDS = [
  'ache', 'attack', 'blank', 'blanket', 'crooked',
  'drink', 'electric', 'jacket', 'junk', 'mistake',
  'public', 'question', 'risk', 'shark', 'sink',
  'squirrel', 'stomach', 'struck', 'topic', 'track'
];