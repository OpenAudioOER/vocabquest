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
    id: 'dismissal',
    word: 'dismissal',
    definition: 'To allow to go away.',
    sentences: [
      'Students are always excited at the end of the day when it is ______ time.',
      'The principal announced the early ______ of all classes due to the heat wave.',
      'After the meeting concluded, the manager gave a formal ______ to the staff.'
    ],
    synonyms: ['release', 'discharge', 'departure'],
    antonyms: ['arrival', 'hiring', 'retention'],
    distractors: [
      'To force someone to stay in a small room for a very long time without any windows.',
      'To start a new job.',
      'To arrive early.'
    ],
    masteryLevel: 0
  },
  {
    id: 'mission',
    word: 'mission',
    definition: 'An important goal or task; or a place where people get help.',
    sentences: [
      'The students in math class were given the ______ to make a robot with graph paper.',
      'There are many California ______ that are near Los Angeles, which are easy to visit.',
      'The astronaut was focused on her ______ to repair the satellite in orbit.'
    ],
    synonyms: ['assignment', 'objective', 'shelter'],
    antonyms: ['aimlessness', 'hobby', 'vacation'],
    distractors: [
      'A type of delicious fruit that grows on very tall trees in the tropical jungle.',
      'A quick nap.',
      'A small toy.'
    ],
    masteryLevel: 0
  },
  {
    id: 'permission',
    word: 'permission',
    definition: 'Approval to do something.',
    sentences: [
      'It is important to get ______ to use the restroom during class time.',
      'My parents gave me ______ to go to the movies with my friends on Friday.',
      'You must have written ______ before you can go on the school field trip.'
    ],
    synonyms: ['authorization', 'consent', 'approval'],
    antonyms: ['prohibition', 'denial', 'refusal'],
    distractors: [
      'A loud sound made by a large truck when it is driving very fast down the highway.',
      'A heavy rock.',
      'A secret code.'
    ],
    masteryLevel: 0
  },
  {
    id: 'intermission',
    word: 'intermission',
    definition: 'A pause or stop between times of activity.',
    sentences: [
      'Many performances at the theater have an ______ so guests can use the restroom.',
      'During the ______ of the basketball game, the cheerleaders performed a dance.',
      'We bought some popcorn and water during the fifteen-minute ______ of the play.'
    ],
    synonyms: ['break', 'pause', 'interval'],
    antonyms: ['continuation', 'beginning', 'end'],
    distractors: [
      'A very long race that lasts for three days and requires a lot of energy to finish.',
      'A fast car.',
      'A bright light.'
    ],
    masteryLevel: 0
  },
  {
    id: 'commission',
    word: 'commission',
    definition: 'Payment for a completed job.',
    sentences: [
      'Many people who sell cars get paid based on ______, so they can be very persistent.',
      'The artist received a ______ to paint a mural on the side of the new library.',
      'She earned a large ______ after helping the family sell their house.'
    ],
    synonyms: ['fee', 'payment', 'percentage'],
    antonyms: ['salary', 'debt', 'loss'],
    distractors: [
      'A type of cold weather that happens only during the middle of the winter season.',
      'A broken tool.',
      'A lost dog.'
    ],
    masteryLevel: 0
  },
  {
    id: 'misspeak',
    word: 'misspeak',
    definition: 'To speak or pronounce incorrectly.',
    sentences: [
      'When a student is nervous during a presentation, sometimes they ______.',
      'I didn\'t mean to say that; I simply happened to ______ during our conversation.',
      'It is important to correct yourself if you ______ a difficult word in class.'
    ],
    synonyms: ['mumble', 'err', 'misstate'],
    antonyms: ['articulate', 'enunciate', 'speak clearly'],
    distractors: [
      'To sing a beautiful song in front of a very large audience at a talent show.',
      'To run fast.',
      'To sleep late.'
    ],
    masteryLevel: 0
  },
  {
    id: 'emissions',
    word: 'emissions',
    definition: 'Light, gas, or heat coming from somewhere.',
    sentences: [
      'A lot of people are trying to lower the ______ coming from their homes.',
      'The factory was criticized for the dark ______ coming from its tall chimneys.',
      'Electric cars are popular because they produce zero ______ while driving.'
    ],
    synonyms: ['discharge', 'radiation', 'exhaust'],
    antonyms: ['absorption', 'intake', 'collection'],
    distractors: [
      'A collection of old stamps that someone has kept in a book for many years.',
      'A soft pillow.',
      'A cold drink.'
    ],
    masteryLevel: 0
  },
  {
    id: 'admission',
    word: 'admission',
    definition: 'Permission to enter; or an act of admitting the truth.',
    sentences: [
      'Many Disneyland passholders try to get early ______ into the park.',
      'He later made an ______ of guilt when he saw the security camera footage.',
      'The price of ______ to the museum is five dollars for students.'
    ],
    synonyms: ['entry', 'confession', 'access'],
    antonyms: ['exclusion', 'denial', 'exit'],
    distractors: [
      'A very tall mountain that is covered in thick white snow all year long.',
      'A small bug.',
      'A new book.'
    ],
    masteryLevel: 0
  },
  {
    id: 'omission',
    word: 'omission',
    definition: 'Something left out, removed, or not done.',
    sentences: [
      'The ______ of the letter "n" changes the boy\'s name Evan to the girl\'s name Eva.',
      'The editor noticed the ______ of an important chapter in the first draft.',
      'Leaving out your name on the test was a serious ______ that caused a delay.'
    ],
    synonyms: ['exclusion', 'gap', 'failure'],
    antonyms: ['inclusion', 'addition', 'completion'],
    distractors: [
      'A bright red balloon that is floating away into the sky on a windy afternoon.',
      'A loud bark.',
      'A sweet cake.'
    ],
    masteryLevel: 0
  },
  {
    id: 'missionary',
    word: 'missionary',
    definition: 'Someone who goes to another country to teach about their religion.',
    sentences: [
      'There are two schools in the village, and each one is run by a different ______.',
      'The ______ traveled to a remote island to help build a new community center.',
      'He spent three years working as a ______ in South America.'
    ],
    synonyms: ['evangelist', 'messenger', 'envoy'],
    antonyms: ['atheist', 'local', 'native'],
    distractors: [
      'A type of fast airplane that can travel across the entire ocean in a few hours.',
      'A sharp pen.',
      'A blue ball.'
    ],
    masteryLevel: 0
  },
  {
    id: 'transmission',
    word: 'transmission',
    definition: 'A system of gears in a vehicle; or the sending of information.',
    sentences: [
      'When cars get older, sometimes they need their ______ repaired.',
      'The radio ______ suddenly cut out because of a power outage.',
      'The ______ of the virus can be prevented by washing your hands frequently.'
    ],
    synonyms: ['broadcast', 'transfer', 'gearbox'],
    antonyms: ['reception', 'stagnation', 'blockage'],
    distractors: [
      'A large bowl of soup that is very hot and has a lot of vegetables inside.',
      'A tiny seed.',
      'A old shoe.'
    ],
    masteryLevel: 0
  },
  {
    id: 'inadmissible',
    word: 'inadmissible',
    definition: 'Not allowed, especially as evidence in a trial.',
    sentences: [
      'The confession might be ruled ______ if it was given under pressure.',
      'The judge decided the photos were ______ because they were taken illegally.',
      'Hearsay is often considered ______ in a formal court of law.'
    ],
    synonyms: ['unacceptable', 'invalid', 'prohibited'],
    antonyms: ['allowable', 'valid', 'permitted'],
    distractors: [
      'A very friendly dog that likes to wag its tail and bark at the mailman.',
      'A fast bike.',
      'A warm sun.'
    ],
    masteryLevel: 0
  },
  {
    id: 'missive',
    word: 'missive',
    definition: 'A message in writing, such as a letter.',
    sentences: [
      'He wrote all about his trip to Machu Picchu in his last ______ from South America.',
      'The queen sent a secret ______ to her generals across the border.',
      'I received a long ______ from my pen pal who lives in France.'
    ],
    synonyms: ['letter', 'message', 'note'],
    antonyms: ['silence', 'speech', 'conversation'],
    distractors: [
      'A large piece of heavy furniture that is very difficult to move up the stairs.',
      'A cold wind.',
      'A red apple.'
    ],
    masteryLevel: 0
  },
  {
    id: 'remiss',
    word: 'remiss',
    definition: 'Characterized by neglect or carelessness.',
    sentences: [
      'Some students can be ______ about carrying out their responsibility of filling out their reading log.',
      'I would be ______ if I didn\'t thank you for all your hard work on this project.',
      'The guard was ______ in his duties, allowing the intruder to enter the building.'
    ],
    synonyms: ['negligent', 'careless', 'thoughtless'],
    antonyms: ['careful', 'diligent', 'attentive'],
    distractors: [
      'A very bright star that shines in the night sky and is easy for everyone to see.',
      'A happy face.',
      'A new toy.'
    ],
    masteryLevel: 0
  }
];

export const SPELLING_WORDS = [
  'dancing', 'dimmed', 'skipped', 'rubbing', 'hiking',
  'striped', 'flipped', 'wasting', 'snapping', 'traced',
  'stripped', 'landed', 'tanning', 'pleasing',
  'smelling', 'checking', 'phoning', 'dared', 'fainted'
];