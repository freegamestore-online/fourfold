// Content batches 1 and 2: 120 original, family-friendly puzzles (ids 1-60 and 61-120).
// Each puzzle has four groups of four words. Difficulty runs 1 (easiest) to 4 (hardest)
// and is used once per puzzle.
// Each group's redHerring names the trap: a word that could fit another group.

export type Difficulty = 1 | 2 | 3 | 4;

export interface Group {
  label: string;
  words: [string, string, string, string];
  difficulty: Difficulty;
  redHerring: string;
}

export interface Puzzle {
  id: number;
  groups: [Group, Group, Group, Group];
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    groups: [
      { label: "Farm animals", words: ["COW", "HEN", "GOAT", "MULE"], difficulty: 1, redHerring: "MULE is also slang for a stubborn person, but here it is a working farm animal." },
      { label: "Breakfast foods", words: ["TOAST", "BACON", "WAFFLE", "PANCAKE"], difficulty: 2, redHerring: "BACON comes from a pig, which pulls toward the farm animals, but it belongs at the breakfast table." },
      { label: "Trees", words: ["OAK", "ELM", "PINE", "ASH"], difficulty: 3, redHerring: "ASH is also the grey powder left after a fire, so it can drift toward burning words." },
      { label: "Units of length", words: ["MILE", "YARD", "INCH", "FOOT"], difficulty: 4, redHerring: "FOOT is a body part and YARD is a farm enclosure, so both can pull you away from measuring." },
    ],
  },
  {
    id: 2,
    groups: [
      { label: "Musical instruments", words: ["CELLO", "OBOE", "HARP", "TUBA"], difficulty: 1, redHerring: "HARP is also a verb meaning to keep returning to one subject, a word-play trap." },
      { label: "Dances", words: ["TANGO", "WALTZ", "SALSA", "POLKA"], difficulty: 2, redHerring: "SALSA is also a tomato sauce, which tempts a food reading, but the group is dances." },
      { label: "Fish", words: ["TROUT", "PERCH", "SOLE", "BASS"], difficulty: 3, redHerring: "BASS is also a low-pitched instrument, a trap that pulls toward the instruments group." },
      { label: "Sports", words: ["RUGBY", "SQUASH", "POLO", "DARTS"], difficulty: 4, redHerring: "SQUASH is a vegetable and POLO is a shirt, so both can pull you away from sports." },
    ],
  },
  {
    id: 3,
    groups: [
      { label: "Planets", words: ["MARS", "VENUS", "SATURN", "JUPITER"], difficulty: 1, redHerring: "MARS is also a chocolate bar, but here it is the fourth planet from the Sun." },
      { label: "Metals", words: ["IRON", "TIN", "LEAD", "ZINC"], difficulty: 2, redHerring: "LEAD is also a verb meaning to guide, and TIN is a container, so both can mislead." },
      { label: "Greek letters", words: ["ALPHA", "BETA", "GAMMA", "DELTA"], difficulty: 3, redHerring: "DELTA is also a river landform and an airline name, but the group is letters." },
      { label: "Golf scores", words: ["BIRDIE", "EAGLE", "PAR", "BOGEY"], difficulty: 4, redHerring: "BIRDIE and EAGLE are animals, which might pull you toward a zoo theme, but they are golf scores." },
    ],
  },
  {
    id: 4,
    groups: [
      { label: "Cheeses", words: ["BRIE", "EDAM", "FETA", "GOUDA"], difficulty: 1, redHerring: "EDAM spelled backwards is MADE, a word-play trap that has nothing to do with the cheese group." },
      { label: "Pasta shapes", words: ["PENNE", "FUSILLI", "ORZO", "RIGATONI"], difficulty: 2, redHerring: "ORZO looks like rice, so it might drift into a grains group, but it is a pasta." },
      { label: "Hats", words: ["BERET", "FEDORA", "FEZ", "BOWLER"], difficulty: 3, redHerring: "BOWLER is also a cricket player, which tempts a sports reading, but here it is a hat." },
      { label: "Fabrics", words: ["SILK", "LINEN", "WOOL", "DENIM"], difficulty: 4, redHerring: "WOOL comes from sheep, so an animal theme might pull you away from the fabrics." },
    ],
  },
  {
    id: 5,
    groups: [
      { label: "Weather", words: ["SLEET", "HAIL", "FOG", "MIST"], difficulty: 1, redHerring: "HAIL is also a greeting, and MIST is also a kind of cloud, so both can drift elsewhere." },
      { label: "Clouds", words: ["CIRRUS", "CUMULUS", "STRATUS", "NIMBUS"], difficulty: 2, redHerring: "NIMBUS is also a name for a broom, and STRATUS sounds like space, but both are clouds." },
      { label: "Herbs", words: ["BASIL", "SAGE", "THYME", "MINT"], difficulty: 3, redHerring: "SAGE can mean a wise person and MINT is a sweet, both tempting thoughts away from herbs." },
      { label: "Flowers", words: ["ROSE", "LILY", "IRIS", "DAISY"], difficulty: 4, redHerring: "ROSE is also the past tense of rise, a grammar trap that can pull you away from flowers." },
    ],
  },
  {
    id: 6,
    groups: [
      { label: "Units of time", words: ["SECOND", "MINUTE", "HOUR", "WEEK"], difficulty: 1, redHerring: "MINUTE also means tiny, a trap for size words." },
      { label: "Things with keys", words: ["PIANO", "MAP", "LOCK", "KEYBOARD"], difficulty: 2, redHerring: "PIANO and KEYBOARD are instruments, which tempts a music group that is not in this puzzle." },
      { label: "Space objects", words: ["COMET", "METEOR", "NEBULA", "QUASAR"], difficulty: 3, redHerring: "METEOR and COMET are both sky objects, and a shooting star can feel like a time word." },
      { label: "Things with a bridge", words: ["NOSE", "VIOLIN", "GLASSES", "RIVER"], difficulty: 4, redHerring: "A river is the first thing a bridge brings to mind, but NOSE and GLASSES have bridges too." },
    ],
  },
  {
    id: 7,
    groups: [
      { label: "Fairy-tale characters", words: ["GRETEL", "CINDERELLA", "RAPUNZEL", "PINOCCHIO"], difficulty: 1, redHerring: "PINOCCHIO is a wooden puppet, which could tempt a toys reading, but he is a story character." },
      { label: "Shakespeare plays", words: ["HAMLET", "OTHELLO", "MACBETH", "TEMPEST"], difficulty: 2, redHerring: "HAMLET is also a small village and a cigar, which fit no literature group here." },
      { label: "Fictional detectives", words: ["HOLMES", "POIROT", "MARPLE", "MORSE"], difficulty: 3, redHerring: "MORSE is also a signal code, so it can drift toward a puzzle about messages." },
      { label: "Jane Austen heroines", words: ["EMMA", "ANNE", "ELINOR", "MARIANNE"], difficulty: 4, redHerring: "EMMA and ANNE are common names, so they can slip into a names group, but these are Austen heroines." },
    ],
  },
  {
    id: 8,
    groups: [
      { label: "Mountain ranges", words: ["EVEREST", "ANDES", "ALPS", "ROCKIES"], difficulty: 1, redHerring: "EVEREST is a single peak rather than a range, and it is also a film title, a distraction." },
      { label: "Rivers", words: ["NILE", "AMAZON", "DANUBE", "THAMES"], difficulty: 2, redHerring: "AMAZON is also a huge online shop, a brand trap rather than a river." },
      { label: "Islands", words: ["CUBA", "MALTA", "CRETE", "IBIZA"], difficulty: 3, redHerring: "MALTA is also a malted drink, and CUBA is a country, so the island link is the key." },
      { label: "Things with a mouth", words: ["CAVE", "JUG", "BOTTLE", "TRUMPET"], difficulty: 4, redHerring: "Rivers have mouths too, so the rivers group competes here, but this group is objects and places." },
    ],
  },
  {
    id: 9,
    groups: [
      { label: "Toys", words: ["KITE", "MARBLES", "TOP", "DOLL"], difficulty: 1, redHerring: "TOP could mean the top of a list, but it also describes a spinning toy." },
      { label: "Board games", words: ["CHESS", "LUDO", "CLUE", "RISK"], difficulty: 2, redHerring: "CLUE and RISK are everyday words that could mean anything, but here they are games." },
      { label: "Card games", words: ["POKER", "BRIDGE", "SNAP", "WHIST"], difficulty: 3, redHerring: "BRIDGE is also a structure over water, a trap for geography thinking." },
      { label: "Chess pieces", words: ["ROOK", "KNIGHT", "BISHOP", "PAWN"], difficulty: 4, redHerring: "CHESS is the game rather than a piece, and ROOK is also a crow, which can pull toward birds." },
    ],
  },
  {
    id: 10,
    groups: [
      { label: "Fruits", words: ["APPLE", "MANGO", "PEACH", "PLUM"], difficulty: 1, redHerring: "PEACH and PLUM are also colours, so they can feel like a colour word, but they are fruit here." },
      { label: "Kitchen tools", words: ["WHISK", "LADLE", "SIEVE", "TONGS"], difficulty: 2, redHerring: "SIEVE is also slang for a forgetful person, which pulls toward memory words." },
      { label: "Pastries", words: ["ECLAIR", "STRUDEL", "CROISSANT", "BRIOCHE"], difficulty: 3, redHerring: "BRIOCHE is a sweet bread as well as a pastry, so it can drift toward the bread words." },
      { label: "Cooking verbs", words: ["WHIP", "FOLD", "STIR", "KNEAD"], difficulty: 4, redHerring: "WHIP can be a cream or a tool, and WHISK is a tool here, but WHIP is a verb." },
    ],
  },
  {
    id: 11,
    groups: [
      { label: "Dog breeds", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], difficulty: 1, redHerring: "BOXER is also a sports competitor, a trap that pulls you toward sports." },
      { label: "Cat breeds", words: ["SIAMESE", "PERSIAN", "MANX", "BENGAL"], difficulty: 2, redHerring: "BENGAL is also a tiger, which could pull you toward big wild animals rather than cats." },
      { label: "Birds", words: ["RAVEN", "ROBIN", "WREN", "SWIFT"], difficulty: 3, redHerring: "SWIFT is also a famous writer's name and ROBIN a first name, but both are birds here." },
      { label: "Animals with shells", words: ["SNAIL", "TORTOISE", "CRAB", "OYSTER"], difficulty: 4, redHerring: "OYSTER is also a food, which could pull you toward a meal, but this group is shelled animals." },
    ],
  },
  {
    id: 12,
    groups: [
      { label: "Basic shapes", words: ["CIRCLE", "SQUARE", "OVAL", "STAR"], difficulty: 1, redHerring: "SQUARE is also a polygon, so it can fit the polygons group as well." },
      { label: "Polygons", words: ["HEXAGON", "OCTAGON", "PENTAGON", "TRIANGLE"], difficulty: 2, redHerring: "TRIANGLE is also a musical instrument, which can pull you toward music." },
      { label: "Maths words", words: ["SUM", "RATIO", "FACTOR", "PRODUCT"], difficulty: 3, redHerring: "FACTOR and PRODUCT are everyday words too, so they could fit an ordinary-language group." },
      { label: "Types of number", words: ["PRIME", "ODD", "EVEN", "WHOLE"], difficulty: 4, redHerring: "ODD and EVEN are everyday adjectives, so they can fit a description group rather than maths." },
    ],
  },
  {
    id: 13,
    groups: [
      { label: "Sports", words: ["SWIMMING", "ROWING", "FENCING", "ARCHERY"], difficulty: 1, redHerring: "FENCING is also a boundary wall, which tempts a garden theme." },
      { label: "Things you hit with", words: ["BAT", "RACKET", "MALLET", "CLUB"], difficulty: 2, redHerring: "CLUB is also a sports team and a card suit, which can pull you away from hitting." },
      { label: "Tennis terms", words: ["LOVE", "DEUCE", "SET", "ACE"], difficulty: 3, redHerring: "LOVE and ACE are everyday words, and ACE is also a playing card, so ordinary language is the trap." },
      { label: "Yoga poses", words: ["COBRA", "TREE", "LOTUS", "BOAT"], difficulty: 4, redHerring: "BOAT is also a rowing craft, which could pull you toward the sports group, but here it is a pose." },
    ],
  },
  {
    id: 14,
    groups: [
      { label: "Tempo markings", words: ["ALLEGRO", "LARGO", "PRESTO", "ADAGIO"], difficulty: 1, redHerring: "PRESTO is also a magic word, a trap for fans of wordplay." },
      { label: "Stringed instruments", words: ["BANJO", "UKULELE", "LUTE", "ZITHER"], difficulty: 2, redHerring: "LUTE is also a sealing clay used in craft work, which can pull you toward crafts." },
      { label: "Parts of a song", words: ["CHORUS", "VERSE", "BRIDGE", "HOOK"], difficulty: 3, redHerring: "BRIDGE and HOOK are everyday words too, and a hook can also be a pirate's hand." },
      { label: "Words that go before STAND", words: ["BAND", "HAND", "GRAND", "UNDER"], difficulty: 4, redHerring: "BAND and GRAND are music words, which tempts you to group them with instruments or tempo." },
    ],
  },
  {
    id: 15,
    groups: [
      { label: "Parts of the eye", words: ["IRIS", "PUPIL", "LENS", "RETINA"], difficulty: 1, redHerring: "IRIS is also a flower, so it can be pulled toward plants." },
      { label: "Parts of a flower", words: ["PETAL", "STEM", "SEPAL", "PISTIL"], difficulty: 2, redHerring: "STEM is also a verb meaning to stop a flow, but here it is a flower part." },
      { label: "Parts of the foot", words: ["HEEL", "ARCH", "TOE", "SOLE"], difficulty: 3, redHerring: "SOLE is also a flatfish, which could lead you toward sea creatures." },
      { label: "Things with a face", words: ["CLOCK", "CLIFF", "COIN", "DICE"], difficulty: 4, redHerring: "A face is also a part of the body, so the eye and foot groups can pull you away from this one." },
    ],
  },
  {
    id: 16,
    groups: [
      { label: "Currencies", words: ["YEN", "EURO", "PESO", "RAND"], difficulty: 1, redHerring: "EURO is also a kangaroo, a trap that pulls toward animals." },
      { label: "Money slang", words: ["BUCKS", "QUID", "DOUGH", "CASH"], difficulty: 2, redHerring: "BUCKS are also male deer, a trap that pulls toward animals." },
      { label: "Parts of a bank", words: ["TELLER", "VAULT", "LEDGER", "LOAN"], difficulty: 3, redHerring: "VAULT is also a gymnastics move, but here it is a bank's storeroom." },
      { label: "Words that go before CARD", words: ["CREDIT", "DEBIT", "POST", "GIFT"], difficulty: 4, redHerring: "POST is also a word for mail, which can pull you toward delivery words." },
    ],
  },
  {
    id: 17,
    groups: [
      { label: "Painters", words: ["MONET", "DALI", "GOYA", "MATISSE"], difficulty: 1, redHerring: "MATISSE is also a name used for art styles, so it can slip into the art movements group." },
      { label: "Art supplies", words: ["PAINT", "EASEL", "CANVAS", "BRUSH"], difficulty: 2, redHerring: "BRUSH could be a hairstyle or a tool, but here it is an art tool." },
      { label: "Art movements", words: ["CUBISM", "DADA", "POP", "BAROQUE"], difficulty: 3, redHerring: "POP is also a kind of music, which tempts a music group that is not in this puzzle." },
      { label: "Colours named after fruit", words: ["LIME", "TANGERINE", "APRICOT", "CHERRY"], difficulty: 4, redHerring: "CHERRY is also a red fruit, a trap for fruit thinking that the fruit group in another puzzle would reinforce." },
    ],
  },
  {
    id: 18,
    groups: [
      { label: "Sea creatures", words: ["SQUID", "OCTOPUS", "MANTA", "STARFISH"], difficulty: 1, redHerring: "MANTA is also a kind of ray, which could pull you toward fish." },
      { label: "Oceans", words: ["ARCTIC", "ATLANTIC", "INDIAN", "PACIFIC"], difficulty: 2, redHerring: "ARCTIC is also a fox, and INDIAN is also a people, so both can mislead." },
      { label: "Beach things", words: ["BUCKET", "TOWEL", "PARASOL", "SANDAL"], difficulty: 3, redHerring: "SANDAL is footwear, and SPADE is also a beach tool, so the beach group is contested." },
      { label: "Card suits", words: ["SPADE", "CLUB", "HEART", "DIAMOND"], difficulty: 4, redHerring: "SPADE could be a beach tool, but it belongs with the card suits." },
    ],
  },
  {
    id: 19,
    groups: [
      { label: "Lab equipment", words: ["BEAKER", "PIPETTE", "FLASK", "MICROSCOPE"], difficulty: 1, redHerring: "FLASK is also a small container for a drink, which can pull toward drinks." },
      { label: "Famous scientists", words: ["NEWTON", "CURIE", "DARWIN", "EINSTEIN"], difficulty: 2, redHerring: "NEWTON is also a unit of force, which fits the units group, and DARWIN is a city in Australia." },
      { label: "Units named after people", words: ["WATT", "AMP", "VOLT", "OHM"], difficulty: 3, redHerring: "VOLT is also a car brand, so it can pull toward vehicles, and AMP is short for amplifier." },
      { label: "Things with poles", words: ["MAGNET", "EARTH", "TENT", "BATTERY"], difficulty: 4, redHerring: "EARTH is also a planet, which can pull toward space, but here it has poles." },
    ],
  },
  {
    id: 20,
    groups: [
      { label: "Pirate things", words: ["PARROT", "EYEPATCH", "HOOK", "CUTLASS"], difficulty: 1, redHerring: "HOOK is also a fishing tool, which might pull you toward fishing." },
      { label: "Parts of a ship", words: ["HULL", "DECK", "MAST", "RUDDER"], difficulty: 2, redHerring: "DECK can also mean a deck of cards, a trap that pulls toward card games." },
      { label: "Sewing things", words: ["THIMBLE", "NEEDLE", "THREAD", "BUTTON"], difficulty: 3, redHerring: "NEEDLE is also a pine leaf, a trap toward trees." },
      { label: "Words ending in SHIP", words: ["WORSHIP", "HARDSHIP", "KINSHIP", "OWNERSHIP"], difficulty: 4, redHerring: "SHIP is hidden inside these words, which tempts the ship parts group, but the link is the ending." },
    ],
  },
  {
    id: 21,
    groups: [
      { label: "Norse gods", words: ["THOR", "ODIN", "LOKI", "FREYA"], difficulty: 1, redHerring: "LOKI is also a comic-book character, which could pull toward comics, but here he is a god." },
      { label: "Greek gods", words: ["ZEUS", "HERA", "ARES", "APOLLO"], difficulty: 2, redHerring: "APOLLO is also a famous moon mission, a trap for space words." },
      { label: "Egyptian gods", words: ["HORUS", "PTAH", "OSIRIS", "ANUBIS"], difficulty: 3, redHerring: "ANUBIS has a jackal's head, which might pull you toward animals, but he is a god." },
      { label: "Mythical creatures", words: ["UNICORN", "GRIFFIN", "PHOENIX", "KRAKEN"], difficulty: 4, redHerring: "PHOENIX is also a city in the United States, a geography trap, but here it is a mythical bird." },
    ],
  },
  {
    id: 22,
    groups: [
      { label: "Gemstones", words: ["RUBY", "OPAL", "JADE", "ONYX"], difficulty: 1, redHerring: "JADE is also a shade of green, so it can pull toward colours." },
      { label: "Rock types", words: ["GRANITE", "MARBLE", "SLATE", "BASALT"], difficulty: 2, redHerring: "MARBLE is also a glass toy, and SLATE is a verb for criticising, both traps." },
      { label: "Ways to clean", words: ["WASH", "SCRUB", "RINSE", "WIPE"], difficulty: 3, redHerring: "WASH can be a noun for laundry, but here it is a cleaning verb." },
      { label: "Ways to cut food", words: ["DICE", "SLICE", "CHOP", "MINCE"], difficulty: 4, redHerring: "DICE is also a game played with cubes, which can pull you toward games." },
    ],
  },
  {
    id: 23,
    groups: [
      { label: "Small boats", words: ["KAYAK", "CANOE", "DINGHY", "YACHT"], difficulty: 1, redHerring: "CANOE is also a verb meaning to paddle, which could be a word trap." },
      { label: "Wheeled vehicles", words: ["SKATEBOARD", "TRAM", "WHEELBARROW", "SCOOTER"], difficulty: 2, redHerring: "TRAM runs on rails, which might pull toward railways, but it is a wheeled vehicle here." },
      { label: "Horse-drawn carriages", words: ["COACH", "HANSOM", "CHARIOT", "SLEIGH"], difficulty: 3, redHerring: "COACH is also a sports trainer, a trap toward sports." },
      { label: "Words ending in WAY", words: ["RAILWAY", "MOTORWAY", "HIGHWAY", "GANGWAY"], difficulty: 4, redHerring: "RAILWAY is also a kind of train track, which could pull you toward the vehicles group." },
    ],
  },
  {
    id: 24,
    groups: [
      { label: "Footwear", words: ["SANDAL", "CLOG", "LOAFER", "BOOT"], difficulty: 1, redHerring: "BOOT can also mean to kick a ball, a verb trap toward sports." },
      { label: "Coats", words: ["PARKA", "ANORAK", "PONCHO", "CAPE"], difficulty: 2, redHerring: "CAPE is also a region of land, a geography trap." },
      { label: "Things with tongues", words: ["SHOE", "BELL", "FLAME", "WAGON"], difficulty: 3, redHerring: "SHOE is a footwear word, which pulls toward the footwear group, though here it has a tongue." },
      { label: "Shirts", words: ["POLO", "TUNIC", "HENLEY", "BLOUSE"], difficulty: 4, redHerring: "POLO is also a sport, which tempts a sports reading." },
    ],
  },
  {
    id: 25,
    groups: [
      { label: "Languages", words: ["HINDI", "SWAHILI", "TAMIL", "FRENCH"], difficulty: 1, redHerring: "FRENCH is also a kind of fries or a style of bread, which pulls toward food." },
      { label: "Ways to talk idly", words: ["NATTER", "GOSSIP", "PRATTLE", "CHAT"], difficulty: 2, redHerring: "GOSSIP can also be a person who gossips, which might pull toward people words." },
      { label: "Things with rings", words: ["TREE", "BELL", "ARENA", "PHONE"], difficulty: 3, redHerring: "ARENA is a sports venue and PHONE can ring, so both sit near other groups." },
      { label: "Words that go before BALL", words: ["EYE", "MEAT", "SNOW", "HAND"], difficulty: 4, redHerring: "EYE and HAND are body parts, which might tempt a body group, but the link is the ball." },
    ],
  },
  {
    id: 26,
    groups: [
      { label: "Elements", words: ["CARBON", "OXYGEN", "HELIUM", "NEON"], difficulty: 1, redHerring: "NEON is also a colour and a sign style, so it can pull toward colours." },
      { label: "Subatomic particles", words: ["PROTON", "NEUTRON", "ELECTRON", "QUARK"], difficulty: 2, redHerring: "QUARK is also a soft cheese in German, a food trap." },
      { label: "Changes of state", words: ["MELT", "BOIL", "FREEZE", "EVAPORATE"], difficulty: 3, redHerring: "FREEZE and BOIL are everyday words too, but here they are changes of state." },
      { label: "Words that end in SPHERE", words: ["ATMOSPHERE", "BIOSPHERE", "HEMISPHERE", "STRATOSPHERE"], difficulty: 4, redHerring: "STRATOSPHERE contains STRATUS, a cloud word, a trap that could pull toward the weather." },
    ],
  },
  {
    id: 27,
    groups: [
      { label: "Breads", words: ["BAGUETTE", "CIABATTA", "FOCACCIA", "BAGEL"], difficulty: 1, redHerring: "BAGEL is also a breakfast item, which can pull toward a meal group." },
      { label: "Desserts", words: ["TRIFLE", "MOUSSE", "SORBET", "PUDDING"], difficulty: 2, redHerring: "TRIFLE is also a word for something unimportant, which can mislead you." },
      { label: "Words that go before CAKE", words: ["CUP", "PAN", "FISH", "CHEESE"], difficulty: 3, redHerring: "CHEESE is also a food group on its own, so it can drift toward the cheese words." },
      { label: "Types of roll", words: ["SWISS", "EGG", "SPRING", "CINNAMON"], difficulty: 4, redHerring: "SWISS is also a cheese, a strong trap that pulls toward the cheese words." },
    ],
  },
  {
    id: 28,
    groups: [
      { label: "Insects", words: ["BEETLE", "MOTH", "WASP", "LADYBUG"], difficulty: 1, redHerring: "WASP is also a stinging creature, which can pull toward the stinging group." },
      { label: "Arachnids", words: ["SPIDER", "TICK", "SCORPION", "MITE"], difficulty: 2, redHerring: "TICK is also the sound a clock makes, a word trap." },
      { label: "Words for annoy", words: ["NAG", "PESTER", "BUG", "IRK"], difficulty: 3, redHerring: "BUG is also an insect, which pulls toward the insects group." },
      { label: "Things that can sting", words: ["NETTLE", "HORNET", "CACTUS", "STINGRAY"], difficulty: 4, redHerring: "HORNET is an insect, which pulls toward the insects group, but here it belongs with stingers." },
    ],
  },
  {
    id: 29,
    groups: [
      { label: "Types of tea", words: ["GREEN", "CHAI", "OOLONG", "MATCHA"], difficulty: 1, redHerring: "GREEN is also a colour, which can pull toward colours." },
      { label: "Things that are brewed", words: ["COFFEE", "BEER", "CIDER", "STORM"], difficulty: 2, redHerring: "STORM is brewed in the figurative sense, a trap toward weather words." },
      { label: "Tea set items", words: ["SAUCER", "TEAPOT", "STRAINER", "CREAMER"], difficulty: 3, redHerring: "CREAMER is also a non-dairy powder, which can pull toward dairy words." },
      { label: "Words that go before LEAF", words: ["BAY", "FIG", "MAPLE", "CLOVER"], difficulty: 4, redHerring: "BAY and FIG are also herbs and fruit, which could pull you toward food." },
    ],
  },
  {
    id: 30,
    groups: [
      { label: "Explorers", words: ["MAGELLAN", "COLUMBUS", "CORTES", "DRAKE"], difficulty: 1, redHerring: "DRAKE is also a male duck, a trap toward animals." },
      { label: "Male animals", words: ["BUCK", "BULL", "RAM", "STAG"], difficulty: 2, redHerring: "BUCK is also slang for a dollar, a trap toward money words." },
      { label: "Ship types", words: ["CARAVEL", "GALLEON", "CLIPPER", "SCHOONER"], difficulty: 3, redHerring: "CLIPPER is also a nail tool, which can pull toward home tools." },
      { label: "Words that go before FISH", words: ["SWORD", "CAT", "STAR", "JELLY"], difficulty: 4, redHerring: "STAR is also a famous person, which pulls toward celebrity words." },
    ],
  },
  {
    id: 31,
    groups: [
      { label: "Nursery rhyme characters", words: ["JACK", "JILL", "HUMPTY", "BOPEEP"], difficulty: 1, redHerring: "JACK is also a playing card, which can pull toward card games." },
      { label: "Words that go before POT", words: ["FLOWER", "TEA", "HOT", "CRACK"], difficulty: 2, redHerring: "TEA is also a drink, which can pull toward drinks." },
      { label: "Things you can pick", words: ["LOCK", "NOSE", "FRUIT", "POCKET"], difficulty: 3, redHerring: "LOCK is something you can pick, but the group is about picking, not keys." },
      { label: "Words that go before MAN", words: ["POSTMAN", "SNOWMAN", "FIREMAN", "MILKMAN"], difficulty: 4, redHerring: "SNOWMAN has snow in it, which could pull toward weather, but the link is the word man." },
    ],
  },
  {
    id: 32,
    groups: [
      { label: "Ancient civilisations", words: ["AZTECS", "INCAS", "MAYANS", "EGYPTIANS"], difficulty: 1, redHerring: "EGYPTIANS built pyramids, which might pull toward the wonders group." },
      { label: "Ancient wonders", words: ["PYRAMID", "COLOSSUS", "LIGHTHOUSE", "MAUSOLEUM"], difficulty: 2, redHerring: "PYRAMID is also a shape, but the link here is the ancient wonders." },
      { label: "Roman emperors", words: ["NERO", "OTHO", "CLAUDIUS", "TRAJAN"], difficulty: 3, redHerring: "OTHO sounds like Othello, which can pull toward Shakespeare plays." },
      { label: "Salads", words: ["CAESAR", "NICOISE", "WALDORF", "COBB"], difficulty: 4, redHerring: "CAESAR is also a Roman emperor's title, which tempts the emperors group, but it is a salad." },
    ],
  },
  {
    id: 33,
    groups: [
      { label: "Portable lights", words: ["TORCH", "LAMP", "LANTERN", "CANDLE"], difficulty: 1, redHerring: "LAMP could be a fixed fitting, but the group is portable light sources." },
      { label: "Words that go before LIGHT", words: ["SPOT", "SUN", "HEAD", "FLASH"], difficulty: 2, redHerring: "FLASH is also a light, which can pull toward the portable lights group." },
      { label: "Things that bend light", words: ["PRISM", "LENS", "MIRROR", "GLASS"], difficulty: 3, redHerring: "GLASS is also a material, which could tempt a materials group." },
      { label: "Words that go before FLY", words: ["FIRE", "BUTTER", "DRAGON", "HOUSE"], difficulty: 4, redHerring: "FIRE is also a light, which can pull toward the light words, but the link is fly." },
    ],
  },
  {
    id: 34,
    groups: [
      { label: "Things with teeth", words: ["COMB", "SAW", "ZIP", "GEAR"], difficulty: 1, redHerring: "ZIP is also a word for speed, a trap toward fast words." },
      { label: "Things with ears", words: ["CORN", "JUG", "RABBIT", "WHEAT"], difficulty: 2, redHerring: "CORN and WHEAT are crops, which could pull toward a food group." },
      { label: "Words that end in KEY", words: ["MONKEY", "DONKEY", "TURKEY", "HOCKEY"], difficulty: 3, redHerring: "TURKEY is also a country, a geography trap." },
      { label: "Things with eyes", words: ["POTATO", "NEEDLE", "HURRICANE", "PEACOCK"], difficulty: 4, redHerring: "POTATO and PEACOCK are also foods and animals, traps for those other groups." },
    ],
  },
  {
    id: 35,
    groups: [
      { label: "Inventors", words: ["EDISON", "TESLA", "TURING", "BELL"], difficulty: 1, redHerring: "BELL is also a sound, which pulls toward the ringing group." },
      { label: "Things that ring", words: ["PHONE", "DOORBELL", "ALARM", "SIREN"], difficulty: 2, redHerring: "SIREN is also a mythical sea creature, a trap toward myth." },
      { label: "Things with strings", words: ["KITE", "PUPPET", "RACKET", "VIOLIN"], difficulty: 3, redHerring: "RACKET is also a loud noise, a trap toward sound words." },
      { label: "Things that spin", words: ["WHEEL", "PLANET", "GALAXY", "BOTTLE"], difficulty: 4, redHerring: "PLANET and GALAXY are space words, which pull toward space, but here they spin." },
    ],
  },
  {
    id: 36,
    groups: [
      { label: "Things you roll", words: ["DICE", "EYES", "BALL", "DRUM"], difficulty: 1, redHerring: "EYES can be rolled, a surprising trap toward body parts." },
      { label: "Casino games", words: ["ROULETTE", "BLACKJACK", "KENO", "BACCARAT"], difficulty: 2, redHerring: "BLACKJACK is also a pirate flag, which can pull toward a pirate theme." },
      { label: "Poker hands", words: ["FLUSH", "STRAIGHT", "PAIR", "TRIPS"], difficulty: 3, redHerring: "FLUSH is also a blush of colour, a word trap." },
      { label: "Gambling words", words: ["BET", "WAGER", "ANTE", "STAKE"], difficulty: 4, redHerring: "STAKE is also a wooden post, and ANTE is also a poker bet, so both can drift." },
    ],
  },
  {
    id: 37,
    groups: [
      { label: "Body joints", words: ["KNEE", "ANKLE", "WRIST", "HIP"], difficulty: 1, redHerring: "HIP is also slang for cool, a trap for style words." },
      { label: "Bones", words: ["SKULL", "FEMUR", "RIB", "TIBIA"], difficulty: 2, redHerring: "RIB is also a verb meaning to tease, which pulls toward the teasing group." },
      { label: "Words for tease", words: ["KID", "TEASE", "MOCK", "JEER"], difficulty: 3, redHerring: "KID is also a young goat, a trap toward animals." },
      { label: "Plumbing parts", words: ["ELBOW", "VALVE", "WASHER", "TAP"], difficulty: 4, redHerring: "ELBOW is also a body joint, which tempts the joints group, but here it is a pipe fitting." },
    ],
  },
  {
    id: 38,
    groups: [
      { label: "Architectural features", words: ["ARCH", "DOME", "BUTTRESS", "COLUMN"], difficulty: 1, redHerring: "COLUMN is also a newspaper feature, a trap toward writing." },
      { label: "Church features", words: ["ALTAR", "PEW", "NAVE", "SPIRE"], difficulty: 2, redHerring: "SPIRE is also an architectural feature, which could pull toward the architecture group." },
      { label: "Houses around the world", words: ["BARN", "IGLOO", "TEPEE", "YURT"], difficulty: 3, redHerring: "BARN is a farm building, which can pull toward farms, and FARM sits in the next group." },
      { label: "Words that go before HOUSE", words: ["GREEN", "DOLL", "WARE", "FARM"], difficulty: 4, redHerring: "FARM is also a barn-style building, which can pull you toward the houses group." },
    ],
  },
  {
    id: 39,
    groups: [
      { label: "Baby animals", words: ["CUB", "KID", "FOAL", "CALF"], difficulty: 1, redHerring: "KID is also slang for a child, a trap toward people." },
      { label: "Animal homes", words: ["SETT", "LAIR", "HIVE", "WARREN"], difficulty: 2, redHerring: "HIVE is also a busy place, a trap toward busy words." },
      { label: "Animal sounds", words: ["BLEAT", "HOOT", "NEIGH", "PURR"], difficulty: 3, redHerring: "PURR is also a word for a machine's hum, which can pull toward machines." },
      { label: "Collective nouns", words: ["PRIDE", "GAGGLE", "PARLIAMENT", "BEVY"], difficulty: 4, redHerring: "PRIDE is also a feeling, a trap toward emotion words." },
    ],
  },
  {
    id: 40,
    groups: [
      { label: "Famous ships", words: ["MAYFLOWER", "TITANIC", "BEAGLE", "VICTORY"], difficulty: 1, redHerring: "BEAGLE is also a dog breed, a trap toward dogs." },
      { label: "Things at sea", words: ["BUOY", "ANCHOR", "COMPASS", "TIDE"], difficulty: 2, redHerring: "COMPASS is also a range of subjects, which can pull toward school words." },
      { label: "Ways to stop", words: ["HALT", "CEASE", "DESIST", "QUIT"], difficulty: 3, redHerring: "QUIT can mean to resign, a different sense of stopping that can lead you away." },
      { label: "Words that go before POST", words: ["GOAL", "SIGN", "LAMP", "MILE"], difficulty: 4, redHerring: "MILE is also a unit of distance, which can pull toward units." },
    ],
  },
  {
    id: 41,
    groups: [
      { label: "Fairy-tale things", words: ["BEANSTALK", "SLIPPER", "MIRROR", "CRUMB"], difficulty: 1, redHerring: "MIRROR is also a reflective glass, a trap toward light objects." },
      { label: "Vegetables", words: ["CARROT", "PARSNIP", "LEEK", "CELERY"], difficulty: 2, redHerring: "CARROT is also a bait, which can pull you toward the carrot-and-stick idea." },
      { label: "Soups", words: ["BROTH", "CHOWDER", "BISQUE", "GAZPACHO"], difficulty: 3, redHerring: "BISQUE is also a pottery finish, a trap toward art words." },
      { label: "Words that go before STICK", words: ["CHOP", "JOY", "DRUM", "MATCH"], difficulty: 4, redHerring: "CHOP can also mean a cut, which pulls toward cutting words." },
    ],
  },
  {
    id: 42,
    groups: [
      { label: "Hairstyles", words: ["BRAID", "BOB", "MULLET", "PONYTAIL"], difficulty: 1, redHerring: "MULLET is also a fish, a trap toward the fish group." },
      { label: "Fish", words: ["TUNA", "SALMON", "HADDOCK", "MACKEREL"], difficulty: 2, redHerring: "SALMON is also a shade of pink, which can pull toward colours." },
      { label: "Ways to shout", words: ["BELLOW", "HOLLER", "YELL", "SHRIEK"], difficulty: 3, redHerring: "BELLOW is also the sound of a bull, which can pull toward animals." },
      { label: "Things with tails", words: ["COMET", "KITE", "TUXEDO", "PENNY"], difficulty: 4, redHerring: "PONYTAIL is a hairstyle with a tail, and PENNY has heads or tails, so both can mislead." },
    ],
  },
  {
    id: 43,
    groups: [
      { label: "Extinct animals", words: ["DODO", "MAMMOTH", "MOA", "AUROCHS"], difficulty: 1, redHerring: "MAMMOTH also means huge, a trap toward size words." },
      { label: "Words for huge", words: ["GIANT", "JUMBO", "VAST", "ENORMOUS"], difficulty: 2, redHerring: "JUMBO is also a large animal name, which can pull toward animals." },
      { label: "Things that fly", words: ["KITE", "BALLOON", "GLIDER", "PARACHUTE"], difficulty: 3, redHerring: "KITE is also a bird of prey, which can pull toward birds." },
      { label: "Bee words", words: ["DRONE", "QUEEN", "WORKER", "HIVE"], difficulty: 4, redHerring: "DRONE is also an aircraft, which fits the things that fly, but here it is a male bee." },
    ],
  },
  {
    id: 44,
    groups: [
      { label: "Sweets", words: ["TOFFEE", "FUDGE", "NOUGAT", "MARZIPAN"], difficulty: 1, redHerring: "FUDGE is also a word for a made-up or dodgy result, a trap for word lovers." },
      { label: "Dairy products", words: ["YOGURT", "BUTTER", "CREAM", "WHEY"], difficulty: 2, redHerring: "BUTTER is also a verb for flattering someone, a word trap." },
      { label: "Words for cold", words: ["ICY", "FROSTY", "CHILLY", "NIPPY"], difficulty: 3, redHerring: "FROSTY is also a cartoon snowman, which can pull toward cartoons." },
      { label: "Terms of endearment", words: ["SUGAR", "HONEY", "SWEETIE", "DARLING"], difficulty: 4, redHerring: "SUGAR and HONEY are foods, which might pull toward the sweets group." },
    ],
  },
  {
    id: 45,
    groups: [
      { label: "Office supplies", words: ["STAPLER", "PAPERCLIP", "HIGHLIGHTER", "TAPE"], difficulty: 1, redHerring: "TAPE is also a cassette or recording, which can pull toward music." },
      { label: "Computer parts", words: ["MONITOR", "PROCESSOR", "MOTHERBOARD", "MOUSE"], difficulty: 2, redHerring: "MOUSE is also a desk accessory, which can pull toward the office group." },
      { label: "File types", words: ["PDF", "JPEG", "ZIP", "GIF"], difficulty: 3, redHerring: "ZIP is also a fastener on clothes, a trap toward clothing." },
      { label: "Words that go before BOARD", words: ["KEY", "SURF", "CHALK", "DASH"], difficulty: 4, redHerring: "KEY is also a computer part, which can pull toward the computer group." },
    ],
  },
  {
    id: 46,
    groups: [
      { label: "Car body styles", words: ["SEDAN", "COUPE", "HATCHBACK", "ESTATE"], difficulty: 1, redHerring: "ESTATE is also a piece of land or property, a trap toward property words." },
      { label: "Car parts", words: ["BONNET", "FENDER", "CHASSIS", "BUMPER"], difficulty: 2, redHerring: "FENDER is also a guitar part, which can pull toward music." },
      { label: "Lifting machines", words: ["JACK", "CRANE", "HOIST", "WINCH"], difficulty: 3, redHerring: "JACK is also a playing card, which can pull toward card games." },
      { label: "Words that go before WHEEL", words: ["FERRIS", "STEERING", "PADDLE", "WATER"], difficulty: 4, redHerring: "STEERING is also a car part, which could pull toward the car parts group." },
    ],
  },
  {
    id: 47,
    groups: [
      { label: "Theatre features", words: ["STAGE", "CURTAIN", "ORCHESTRA", "BALCONY"], difficulty: 1, redHerring: "ORCHESTRA is also a group of musicians, which can pull toward music." },
      { label: "Parts of a play", words: ["ACT", "SCENE", "PROLOGUE", "EPILOGUE"], difficulty: 2, redHerring: "SCENE is also a view or a setting, which can pull toward landscapes." },
      { label: "Words for pretend", words: ["FEIGN", "POSE", "BLUFF", "SHAM"], difficulty: 3, redHerring: "POSE is also a body position, a trap toward body words." },
      { label: "Words that go before HAND", words: ["DECK", "FARM", "UNDER", "HIRED"], difficulty: 4, redHerring: "STAGE sits in the theatre group, though stagehand is also a word, a trap." },
    ],
  },
  {
    id: 48,
    groups: [
      { label: "Cartoon dogs", words: ["SNOOPY", "PLUTO", "GOOFY", "SCOOBY"], difficulty: 1, redHerring: "GOOFY is also an everyday adjective, which can pull toward words." },
      { label: "Cartoon cats", words: ["GARFIELD", "TOM", "FELIX", "SYLVESTER"], difficulty: 2, redHerring: "TOM is also a male cat, a trap toward cats in general." },
      { label: "Cartoon mice", words: ["MICKEY", "MINNIE", "JERRY", "STUART"], difficulty: 3, redHerring: "JERRY is the mouse who outwits a cat, so the cats group can pull you away." },
      { label: "Cartoon ducks", words: ["DONALD", "DAFFY", "HUEY", "DEWEY"], difficulty: 4, redHerring: "DEWEY is also a library classification system, which can pull toward libraries." },
    ],
  },
  {
    id: 49,
    groups: [
      { label: "Very angry", words: ["FUMING", "IRATE", "LIVID", "SEETHING"], difficulty: 1, redHerring: "SEETHING can also mean bubbling as liquid boils, which pulls toward cooking." },
      { label: "Very happy", words: ["GLEE", "JOY", "ELATED", "CHEERFUL"], difficulty: 2, redHerring: "GLEE is also a singing show, which can pull toward music." },
      { label: "Very sad", words: ["GLUM", "BLUE", "DOWN", "LOW"], difficulty: 3, redHerring: "BLUE is also a colour, which can pull toward colours." },
      { label: "Words that go before ACHE", words: ["BACK", "TOOTH", "HEAD", "EAR"], difficulty: 4, redHerring: "EAR is also the part of corn that holds the seeds, which can pull toward crops." },
    ],
  },
  {
    id: 50,
    groups: [
      { label: "Writing tools", words: ["PEN", "PENCIL", "CRAYON", "CHALK"], difficulty: 1, redHerring: "CHALK is also a white cliff rock, a trap toward geography." },
      { label: "Things that hold ink", words: ["CARTRIDGE", "INKWELL", "PRINTER", "MARKER"], difficulty: 2, redHerring: "MARKER is also a writing tool, which pulls toward the writing tools group." },
      { label: "Typography terms", words: ["FONT", "KERNING", "SERIF", "LEADING"], difficulty: 3, redHerring: "LEADING is also a verb meaning to guide, which can pull toward leadership words." },
      { label: "Write quickly", words: ["SCRAWL", "SCRIBBLE", "DOODLE", "JOT"], difficulty: 4, redHerring: "DOODLE is also a noun for a quick drawing, which pulls toward art." },
    ],
  },
  {
    id: 51,
    groups: [
      { label: "Shades of blue", words: ["NAVY", "AZURE", "COBALT", "TEAL"], difficulty: 1, redHerring: "TEAL is also a small duck, which can pull toward birds." },
      { label: "Shades of red", words: ["CRIMSON", "SCARLET", "MAROON", "RUST"], difficulty: 2, redHerring: "RUST is also a metal decay, which can pull toward metals." },
      { label: "Shades of green", words: ["EMERALD", "OLIVE", "SAGE", "MINT"], difficulty: 3, redHerring: "SAGE and MINT are herbs, which can pull toward the herbs group." },
      { label: "Shades of yellow", words: ["LEMON", "MUSTARD", "GOLD", "AMBER"], difficulty: 4, redHerring: "MUSTARD is also a condiment, which pulls toward food." },
    ],
  },
  {
    id: 52,
    groups: [
      { label: "Desert features", words: ["OASIS", "DUNE", "MESA", "WADI"], difficulty: 1, redHerring: "MESA means table in Spanish, a trap toward furniture." },
      { label: "Desert animals", words: ["CAMEL", "GECKO", "JACKAL", "MEERKAT"], difficulty: 2, redHerring: "JACKAL is also slang for a person who does another's work, a word trap." },
      { label: "Words for dry", words: ["ARID", "PARCHED", "BARREN", "DRY"], difficulty: 3, redHerring: "BARREN can describe land or a person, which can pull toward people words." },
      { label: "Words that go before STORM", words: ["SAND", "SNOW", "THUNDER", "BRAIN"], difficulty: 4, redHerring: "SAND is also a desert feature, which pulls toward the desert features group." },
    ],
  },
  {
    id: 53,
    groups: [
      { label: "Words from Hindi", words: ["BUNGALOW", "JUNGLE", "SHAMPOO", "LOOT"], difficulty: 1, redHerring: "LOOT is also a heist word, which can pull toward crime." },
      { label: "Words from Japanese", words: ["TSUNAMI", "ORIGAMI", "KARAOKE", "BONSAI"], difficulty: 2, redHerring: "BONSAI is also a small tree, which can pull toward trees." },
      { label: "Words from Arabic", words: ["ALGEBRA", "ZENITH", "MAGAZINE", "SOFA"], difficulty: 3, redHerring: "SOFA is furniture, which can pull toward the home." },
      { label: "Words from German", words: ["KINDERGARTEN", "WANDERLUST", "POSTER", "RUCKSACK"], difficulty: 4, redHerring: "RUCKSACK is a kind of bag, which can pull toward carrying things." },
    ],
  },
  {
    id: 54,
    groups: [
      { label: "Fairground rides", words: ["CAROUSEL", "DODGEMS", "TEACUPS", "ROLLERCOASTER"], difficulty: 1, redHerring: "TEACUPS are also crockery, which can pull toward the kitchen." },
      { label: "Fair food", words: ["CANDYFLOSS", "POPCORN", "NACHOS", "HOTDOG"], difficulty: 2, redHerring: "HOTDOG is also a sausage, which can pull toward meat." },
      { label: "Words for fair", words: ["FAIR", "FETE", "GALA", "JAMBOREE"], difficulty: 3, redHerring: "FAIR also means just or even-handed, a trap for word meanings." },
      { label: "Words that go before RING", words: ["EAR", "BOXING", "FAIRY", "WEDDING"], difficulty: 4, redHerring: "FAIRY is close to FAIR, a spelling trap." },
    ],
  },
  {
    id: 55,
    groups: [
      { label: "Birds of prey", words: ["FALCON", "OSPREY", "EAGLE", "OWL"], difficulty: 1, redHerring: "FALCON is also a spacecraft name, which can pull toward space." },
      { label: "Things with wings", words: ["PLANE", "HOSPITAL", "PALACE", "THEATRE"], difficulty: 2, redHerring: "PLANE is also a flat surface, which can pull toward the flat group." },
      { label: "Words for flat", words: ["LEVEL", "EVEN", "SMOOTH", "FLAT"], difficulty: 3, redHerring: "EVEN is also a number word, which can pull toward maths." },
      { label: "Things that hover", words: ["HUMMINGBIRD", "DRAGONFLY", "HELICOPTER", "HOVERCRAFT"], difficulty: 4, redHerring: "HUMMINGBIRD is a bird, which might pull toward birds of prey." },
    ],
  },
  {
    id: 56,
    groups: [
      { label: "Nuts", words: ["ALMOND", "CASHEW", "PECAN", "WALNUT"], difficulty: 1, redHerring: "CASHEW is also a colour name, which can pull toward colours." },
      { label: "Things that can be cracked", words: ["JOKE", "CODE", "SAFE", "EGG"], difficulty: 2, redHerring: "EGG is also a food, which can pull toward the food groups." },
      { label: "Slang for head", words: ["NUT", "BEAN", "NOGGIN", "NODDLE"], difficulty: 3, redHerring: "BEAN is also a food, which can pull toward the food groups." },
      { label: "Words that go before BUTTER", words: ["PEANUT", "COCOA", "APPLE", "SHEA"], difficulty: 4, redHerring: "PEANUT is a nut, which pulls toward the nuts group, but here it is a butter." },
    ],
  },
  {
    id: 57,
    groups: [
      { label: "Things in a library", words: ["SHELF", "INDEX", "CATALOGUE", "BOOKMARK"], difficulty: 1, redHerring: "INDEX is also a finger, which can pull toward body parts." },
      { label: "Parts of a book", words: ["SPINE", "PREFACE", "CHAPTER", "GLOSSARY"], difficulty: 2, redHerring: "SPINE is also a prickly thorn, which can pull toward plants." },
      { label: "Types of book", words: ["NOVEL", "MEMOIR", "ALMANAC", "ATLAS"], difficulty: 3, redHerring: "ATLAS is also a Greek god and a bone in the neck, a trap for myth words." },
      { label: "Words that go before CASE", words: ["BOOK", "SUIT", "BRIEF", "NUT"], difficulty: 4, redHerring: "BOOK is also the start of BOOKMARK, which sits in the library group." },
    ],
  },
  {
    id: 58,
    groups: [
      { label: "Things you can pitch", words: ["TENT", "BALL", "VOICE", "SALES"], difficulty: 1, redHerring: "TENT is also a circus structure, which can pull toward the circus." },
      { label: "Camping gear", words: ["STOVE", "HAMMOCK", "COMPASS", "KETTLE"], difficulty: 2, redHerring: "KETTLE is also a kitchen item, which can pull toward the kitchen." },
      { label: "Words that go before FIRE", words: ["BACK", "CROSS", "GUN", "WILD"], difficulty: 3, redHerring: "CROSS is also an angry word, which can pull toward moods." },
      { label: "Words that go before BAG", words: ["SAND", "TEA", "HAND", "MAIL"], difficulty: 4, redHerring: "SAND is also a beach word, which can pull toward beaches." },
    ],
  },
  {
    id: 59,
    groups: [
      { label: "Organs of the body", words: ["LIVER", "KIDNEY", "LUNG", "STOMACH"], difficulty: 1, redHerring: "STOMACH is also a verb meaning to tolerate, a word trap." },
      { label: "Parts of a cell", words: ["NUCLEUS", "MEMBRANE", "RIBOSOME", "VACUOLE"], difficulty: 2, redHerring: "NUCLEUS is also a physics word, which can pull toward atoms." },
      { label: "Words that go before POWER", words: ["SOLAR", "WILL", "HORSE", "BRAIN"], difficulty: 3, redHerring: "HORSE is an animal, which can pull toward animals." },
      { label: "Things that can be beaten", words: ["HEART", "RUG", "CARPET", "EGG"], difficulty: 4, redHerring: "HEART is also an organ, which can pull toward the organs group." },
    ],
  },
  {
    id: 60,
    groups: [
      { label: "Types of bear", words: ["POLAR", "GRIZZLY", "PANDA", "SLOTH"], difficulty: 1, redHerring: "SLOTH is also an animal and a sin, but the sloth bear is a real bear." },
      { label: "Words that go before BEAR", words: ["TEDDY", "GUMMY", "HONEY", "SUN"], difficulty: 2, redHerring: "HONEY is also a food, which can pull toward the food groups." },
      { label: "Words for endure", words: ["BEAR", "STAND", "TOLERATE", "ABIDE"], difficulty: 3, redHerring: "BEAR is also an animal, which can pull toward the bear group." },
      { label: "Constellations", words: ["ORION", "LYRA", "DRACO", "URSA"], difficulty: 4, redHerring: "URSA means bear in Latin, a trap toward the bear groups." },
    ],
  },
  {
    id: 61,
    groups: [
      { label: "Pets", words: ["HAMSTER", "GERBIL", "BUDGIE", "GUPPY"], difficulty: 1, redHerring: "GERBIL is also a rodent, so it could sit in the rodents group." },
      { label: "Rodents", words: ["BEAVER", "VOLE", "SHREW", "LEMMING"], difficulty: 2, redHerring: "LEMMING is also a phrase for following the crowd, a trap for idioms." },
      { label: "Spices", words: ["CUMIN", "PAPRIKA", "NUTMEG", "CLOVE"], difficulty: 3, redHerring: "CLOVE is also a hitch knot, a trap toward knots." },
      { label: "Words that go before BERRY", words: ["BLACK", "STRAW", "RASP", "GOOSE"], difficulty: 4, redHerring: "BLACK could be a colour, but it belongs before BERRY." },
    ],
  },
  {
    id: 62,
    groups: [
      { label: "Winds", words: ["BREEZE", "GALE", "MISTRAL", "SIROCCO"], difficulty: 1, redHerring: "GALE is also a sudden burst of laughter, a trap toward laughter." },
      { label: "Dinosaurs", words: ["RAPTOR", "DIPLODOCUS", "IGUANODON", "PTERODACTYL"], difficulty: 2, redHerring: "RAPTOR is also a bird of prey, which might pull you toward birds." },
      { label: "Music genres", words: ["JAZZ", "REGGAE", "FOLK", "SOUL"], difficulty: 3, redHerring: "SOUL is also a feeling, a trap toward emotion words." },
      { label: "Words that go before DOG", words: ["LAP", "SEA", "SHEEP", "WATCH"], difficulty: 4, redHerring: "LAP is also a circuit of a track, a trap toward sports." },
    ],
  },
  {
    id: 63,
    groups: [
      { label: "Shrubs", words: ["HOLLY", "HEATHER", "LILAC", "JASMINE"], difficulty: 1, redHerring: "HEATHER is also a girl's name, a trap toward names." },
      { label: "Zodiac signs", words: ["ARIES", "LEO", "LIBRA", "VIRGO"], difficulty: 2, redHerring: "LIBRA is also a set of scales, a trap toward weighing." },
      { label: "Bakeware", words: ["SKILLET", "CASSEROLE", "RAMEKIN", "WOK"], difficulty: 3, redHerring: "WOK is a pan, which could pull you toward the cooking pans." },
      { label: "Words that go before STONE", words: ["GRAVE", "FLINT", "TOMB", "BRIM"], difficulty: 4, redHerring: "TOMB is also a burial place, which could pull you toward graves." },
    ],
  },
  {
    id: 64,
    groups: [
      { label: "Hair accessories", words: ["SCRUNCHIE", "HAIRPIN", "TIARA", "HEADBAND"], difficulty: 1, redHerring: "TIARA is also a piece of jewellery, which pulls toward the jewellery group." },
      { label: "Jewellery", words: ["BRACELET", "NECKLACE", "BROOCH", "ANKLET"], difficulty: 2, redHerring: "BROOCH is also a clasp for fastening, a trap toward fastenings." },
      { label: "Fabric patterns", words: ["PAISLEY", "TARTAN", "GINGHAM", "HOUNDSTOOTH"], difficulty: 3, redHerring: "HOUNDSTOOTH sounds like a dog, a trap toward animals." },
      { label: "Words that go before BOOK", words: ["COOK", "TEXT", "SCRAP", "PASS"], difficulty: 4, redHerring: "PASS is also a mountain route, a trap toward geography." },
    ],
  },
  {
    id: 65,
    groups: [
      { label: "Pizza toppings", words: ["PEPPERONI", "ANCHOVY", "SALAMI", "PINEAPPLE"], difficulty: 1, redHerring: "SALAMI is also a sausage, a trap toward meat." },
      { label: "Breakfast cereals", words: ["CORNFLAKES", "MUESLI", "PORRIDGE", "GRANOLA"], difficulty: 2, redHerring: "CORNFLAKES contains corn, a trap toward crops." },
      { label: "Shades of purple", words: ["VIOLET", "MAUVE", "LAVENDER", "INDIGO"], difficulty: 3, redHerring: "INDIGO is also a shade of blue, a trap toward blue." },
      { label: "Wild cats", words: ["LYNX", "OCELOT", "COUGAR", "CHEETAH"], difficulty: 4, redHerring: "CHEETAH is also a running-shoe brand, a trap toward shoes." },
    ],
  },
  {
    id: 66,
    groups: [
      { label: "Composers", words: ["MOZART", "CHOPIN", "HAYDN", "BACH"], difficulty: 1, redHerring: "BACH is also the German word for a stream, a trap toward water." },
      { label: "Writers", words: ["DICKENS", "TWAIN", "ORWELL", "CHEKHOV"], difficulty: 2, redHerring: "TWAIN is also a number, a trap toward maths." },
      { label: "Film genres", words: ["WESTERN", "THRILLER", "COMEDY", "MUSICAL"], difficulty: 3, redHerring: "MUSICAL could fit the music theme, a trap toward music." },
      { label: "Sauces", words: ["PESTO", "GRAVY", "RAGU", "AIOLI"], difficulty: 4, redHerring: "GRAVY is also slang for easy money, a trap toward money words." },
    ],
  },
  {
    id: 67,
    groups: [
      { label: "Sports", words: ["CRICKET", "BADMINTON", "JUDO", "KARATE"], difficulty: 1, redHerring: "CRICKET is also an insect, a trap toward insects." },
      { label: "Cricket terms", words: ["WICKET", "STUMP", "YORKER", "GULLY"], difficulty: 2, redHerring: "GULLY is also a small ravine, a trap toward geography." },
      { label: "Garments", words: ["KILT", "SARONG", "KIMONO", "SARI"], difficulty: 3, redHerring: "KIMONO is a Japanese robe, a trap toward Japan." },
      { label: "Note values", words: ["CROTCHET", "QUAVER", "MINIM", "SEMIBREVE"], difficulty: 4, redHerring: "MINIM and QUAVER are also words for something tiny, a trap." },
    ],
  },
  {
    id: 68,
    groups: [
      { label: "Metric units", words: ["GRAM", "LITRE", "TONNE", "METRE"], difficulty: 1, redHerring: "METRE is also a rhythm in poetry, a trap toward poetry." },
      { label: "Solid shapes", words: ["CUBE", "CONE", "CYLINDER", "TORUS"], difficulty: 2, redHerring: "CONE is also a traffic marker, a trap toward roads." },
      { label: "Angles", words: ["ACUTE", "OBTUSE", "REFLEX", "RIGHT"], difficulty: 3, redHerring: "RIGHT is also a direction and a correct answer, a trap for everyday words." },
      { label: "Playground equipment", words: ["SEESAW", "SWING", "SLIDE", "ROUNDABOUT"], difficulty: 4, redHerring: "SWING is also a jazz style, a trap toward music." },
    ],
  },
  {
    id: 69,
    groups: [
      { label: "Tropical fruit", words: ["GUAVA", "PAPAYA", "LYCHEE", "DURIAN"], difficulty: 1, redHerring: "DURIAN is famously smelly, a trap toward strong smells." },
      { label: "Seeds", words: ["SESAME", "POPPY", "CHIA", "FLAX"], difficulty: 2, redHerring: "POPPY is also a flower, a trap toward flowers." },
      { label: "Lakes", words: ["TITICACA", "GENEVA", "BAIKAL", "VICTORIA"], difficulty: 3, redHerring: "VICTORIA is also a queen and a railway station, a trap toward royalty." },
      { label: "World capitals", words: ["PARIS", "LIMA", "OSLO", "HANOI"], difficulty: 4, redHerring: "LIMA is also a bean, a trap toward food." },
    ],
  },
  {
    id: 70,
    groups: [
      { label: "Sea mammals", words: ["DOLPHIN", "WALRUS", "MANATEE", "NARWHAL"], difficulty: 1, redHerring: "WALRUS is also a large moustache, a trap toward facial hair." },
      { label: "Snakes", words: ["ADDER", "MAMBA", "PYTHON", "BOA"], difficulty: 2, redHerring: "PYTHON is also a programming language, a trap toward computing." },
      { label: "Lizards", words: ["IGUANA", "SKINK", "GOANNA", "CHAMELEON"], difficulty: 3, redHerring: "CHAMELEON changes colour, a trap toward colours." },
      { label: "Amphibians", words: ["TOAD", "NEWT", "AXOLOTL", "TADPOLE"], difficulty: 4, redHerring: "TADPOLE is a young frog, which could pull toward babies." },
    ],
  },
  {
    id: 71,
    groups: [
      { label: "Landforms", words: ["CANYON", "FJORD", "ISTHMUS", "PLATEAU"], difficulty: 1, redHerring: "PLATEAU is also a flat stage of progress, a trap toward progress words." },
      { label: "Teeth", words: ["MOLAR", "INCISOR", "CANINE", "PREMOLAR"], difficulty: 2, redHerring: "CANINE is also a dog, a trap toward dogs." },
      { label: "Timekeepers", words: ["SUNDIAL", "HOURGLASS", "STOPWATCH", "METRONOME"], difficulty: 3, redHerring: "METRONOME is also a music device, a trap toward music." },
      { label: "Medical equipment", words: ["STETHOSCOPE", "BANDAGE", "SYRINGE", "CRUTCH"], difficulty: 4, redHerring: "CRUTCH is also a support, a trap toward support words." },
    ],
  },
  {
    id: 72,
    groups: [
      { label: "Greek heroes", words: ["ACHILLES", "HERCULES", "JASON", "ODYSSEUS"], difficulty: 1, redHerring: "JASON is also a common first name, a trap toward names." },
      { label: "Magic items", words: ["WAND", "SPELL", "CAULDRON", "BROOM"], difficulty: 2, redHerring: "SPELL is also a word for a period of time, a trap toward time." },
      { label: "Circus acts", words: ["CLOWN", "JUGGLER", "ACROBAT", "TRAPEZE"], difficulty: 3, redHerring: "TRAPEZE is also a four-sided shape, a trap toward shapes." },
      { label: "Ballet terms", words: ["PLIE", "JETE", "PIROUETTE", "ARABESQUE"], difficulty: 4, redHerring: "ARABESQUE is also a decorative pattern, a trap toward art." },
    ],
  },
  {
    id: 73,
    groups: [
      { label: "Garden tools", words: ["RAKE", "HOE", "TROWEL", "SHOVEL"], difficulty: 1, redHerring: "HOE rhymes with toe, a sound trap toward body parts." },
      { label: "Fasteners", words: ["RIVET", "SCREW", "NAIL", "BOLT"], difficulty: 2, redHerring: "NAIL is also a body part, a trap toward body words." },
      { label: "Hand tools", words: ["HAMMER", "SPANNER", "CHISEL", "WRENCH"], difficulty: 3, redHerring: "WRENCH is also a sudden painful pull, a trap toward injuries." },
      { label: "Words that go before SHOP", words: ["WORK", "SWEAT", "TOY", "CAKE"], difficulty: 4, redHerring: "CAKE is also a sweet, a trap toward baking." },
    ],
  },
  {
    id: 74,
    groups: [
      { label: "Castle features", words: ["MOAT", "DRAWBRIDGE", "PORTCULLIS", "BATTLEMENT"], difficulty: 1, redHerring: "MOAT is also a ditch, a trap toward ditches." },
      { label: "Boxing terms", words: ["JAB", "UPPERCUT", "KNOCKOUT", "ROUND"], difficulty: 2, redHerring: "ROUND is also a shape, a trap toward shapes." },
      { label: "Wedding items", words: ["VEIL", "BOUQUET", "CONFETTI", "GROOM"], difficulty: 3, redHerring: "GROOM is also a person who cares for horses, a trap toward horses." },
      { label: "Shopping", words: ["TROLLEY", "BASKET", "RECEIPT", "DISCOUNT"], difficulty: 4, redHerring: "BASKET is also a sport, a trap toward sports." },
    ],
  },
  {
    id: 75,
    groups: [
      { label: "Airport features", words: ["TERMINAL", "RUNWAY", "HANGAR", "GATE"], difficulty: 1, redHerring: "GATE is also a fence opening, a trap toward fences." },
      { label: "Train parts", words: ["CARRIAGE", "LOCOMOTIVE", "BUFFER", "CABOOSE"], difficulty: 2, redHerring: "CARRIAGE is also a horse-drawn vehicle, a trap toward carriages." },
      { label: "Seabirds", words: ["GULL", "PUFFIN", "GANNET", "ALBATROSS"], difficulty: 3, redHerring: "GANNET is also a greedy person, a trap toward people." },
      { label: "Sandwiches", words: ["REUBEN", "BLT", "PANINI", "HOAGIE"], difficulty: 4, redHerring: "BLT is an abbreviation, a trap toward letter words." },
    ],
  },
  {
    id: 76,
    groups: [
      { label: "Knitting and needlecraft", words: ["PURL", "KNIT", "CROCHET", "TATTING"], difficulty: 1, redHerring: "KNIT is also a word for a bone healing, a trap toward medicine." },
      { label: "Fairy creatures", words: ["PIXIE", "ELF", "GOBLIN", "SPRITE"], difficulty: 2, redHerring: "SPRITE is also a fizzy drink, a trap toward drinks." },
      { label: "Forest animals", words: ["MOOSE", "ELK", "BADGER", "FOX"], difficulty: 3, redHerring: "BADGER is also a verb meaning to pester, a trap toward annoying words." },
      { label: "Insects", words: ["CICADA", "EARWIG", "MANTIS", "TERMITE"], difficulty: 4, redHerring: "MANTIS is also a praying figure, a trap toward religion." },
    ],
  },
  {
    id: 77,
    groups: [
      { label: "Fish", words: ["HERRING", "PIKE", "CARP", "MARLIN"], difficulty: 1, redHerring: "PIKE is also a medieval weapon, a trap toward weapons." },
      { label: "Newspaper sections", words: ["HEADLINE", "EDITORIAL", "OBITUARY", "CLASSIFIEDS"], difficulty: 2, redHerring: "EDITORIAL is also an opinion piece, a trap toward writing." },
      { label: "Shades of pink", words: ["BLUSH", "FUCHSIA", "CERISE", "MAGENTA"], difficulty: 3, redHerring: "CERISE is also a cherry colour, a trap toward cherries." },
      { label: "Words that go before CHAIR", words: ["ARM", "HIGH", "EASY", "SWIVEL"], difficulty: 4, redHerring: "EASY is also a common word, a trap for everyday language." },
    ],
  },
  {
    id: 78,
    groups: [
      { label: "Knots", words: ["BOWLINE", "HITCH", "SHEEPSHANK", "GRANNY"], difficulty: 1, redHerring: "HITCH is also a snag or a problem, a trap toward problems." },
      { label: "Thieves", words: ["BURGLAR", "ROBBER", "PICKPOCKET", "BANDIT"], difficulty: 2, redHerring: "BANDIT is also a slot machine, a trap toward gambling." },
      { label: "Stationery", words: ["RULER", "ERASER", "PROTRACTOR", "SCISSORS"], difficulty: 3, redHerring: "RULER is also a monarch, a trap toward royalty." },
      { label: "Words that go before LINE", words: ["WAIST", "DEAD", "SIDE", "PIPE"], difficulty: 4, redHerring: "SIDE could be a face or a team, a trap toward sport." },
    ],
  },
  {
    id: 79,
    groups: [
      { label: "Volcano parts", words: ["CRATER", "MAGMA", "LAVA", "VENT"], difficulty: 1, redHerring: "VENT is also a way to express feelings, a trap toward emotions." },
      { label: "Types of rain", words: ["DRIZZLE", "DOWNPOUR", "SHOWER", "MIZZLE"], difficulty: 2, redHerring: "SHOWER is also a bathroom fitting, a trap toward bathrooms." },
      { label: "Months", words: ["MARCH", "JUNE", "OCTOBER", "APRIL"], difficulty: 3, redHerring: "MARCH is also a walk in step, a trap toward movement." },
      { label: "Words that go before BELL", words: ["BAR", "JINGLE", "DUMB", "TINKER"], difficulty: 4, redHerring: "BAR could be a pub or a bar of soap, a trap." },
    ],
  },
  {
    id: 80,
    groups: [
      { label: "Shellfish", words: ["LOBSTER", "PRAWN", "MUSSEL", "SCALLOP"], difficulty: 1, redHerring: "SCALLOP is also a wavy sewing edge, a trap toward sewing." },
      { label: "Parts of a fish", words: ["GILL", "FIN", "SCALE", "FLUKE"], difficulty: 2, redHerring: "FLUKE is also a lucky chance, a trap toward luck." },
      { label: "Bathroom fittings", words: ["BASIN", "SINK", "BATHTUB", "PLUNGER"], difficulty: 3, redHerring: "PLUNGER could be a kitchen gadget, a trap toward the kitchen." },
      { label: "Words that go before PIE", words: ["PUMPKIN", "MUD", "PORK", "HUMBLE"], difficulty: 4, redHerring: "MUD could be a dirty word, a trap toward dirt." },
    ],
  },
  {
    id: 81,
    groups: [
      { label: "Cookies", words: ["SHORTBREAD", "MACAROON", "BROWNIE", "FLAPJACK"], difficulty: 1, redHerring: "BROWNIE is also a small elf, a trap toward fairy creatures." },
      { label: "Pastry types", words: ["PUFF", "FILO", "CHOUX", "SHORTCRUST"], difficulty: 2, redHerring: "CHOUX is a French word for cabbage, a trap toward vegetables." },
      { label: "Cooking measures", words: ["PINCH", "DOLLOP", "SCOOP", "SPOONFUL"], difficulty: 3, redHerring: "SCOOP is also a news story, a trap toward news." },
      { label: "Words that go before BREAD", words: ["SODA", "GINGER", "MALT", "WHOLEMEAL"], difficulty: 4, redHerring: "GINGER is also a spice, a trap toward spices." },
    ],
  },
  {
    id: 82,
    groups: [
      { label: "Bright stars", words: ["SIRIUS", "VEGA", "POLARIS", "ALTAIR"], difficulty: 1, redHerring: "VEGA is also a car make, a trap toward cars." },
      { label: "Space missions", words: ["GEMINI", "VOYAGER", "MARINER", "SOYUZ"], difficulty: 2, redHerring: "GEMINI is also a star sign, a trap toward the zodiac." },
      { label: "Calm", words: ["PLACID", "SERENE", "TRANQUIL", "MELLOW"], difficulty: 3, redHerring: "SERENE is also a name, a trap toward names." },
      { label: "Swimming strokes", words: ["CRAWL", "BACKSTROKE", "FREESTYLE", "MEDLEY"], difficulty: 4, redHerring: "MEDLEY is also a mixed set of songs, a trap toward music." },
    ],
  },
  {
    id: 83,
    groups: [
      { label: "Jobs", words: ["BAKER", "PLUMBER", "SURGEON", "MASON"], difficulty: 1, redHerring: "MASON is also a freemason, a trap toward secret societies." },
      { label: "Medieval roles", words: ["SQUIRE", "HERALD", "JESTER", "STEWARD"], difficulty: 2, redHerring: "SQUIRE is also a country gentleman, a trap toward the countryside." },
      { label: "Swords", words: ["RAPIER", "SABRE", "KATANA", "SCIMITAR"], difficulty: 3, redHerring: "RAPIER is also a sharp wit, a trap toward wordplay." },
      { label: "Words that go before PAPER", words: ["WALL", "NEWS", "TISSUE", "WRAPPING"], difficulty: 4, redHerring: "NEWS is also an ordinary word, a trap toward news." },
    ],
  },
  {
    id: 84,
    groups: [
      { label: "Trees", words: ["CEDAR", "WILLOW", "CYPRESS", "BEECH"], difficulty: 1, redHerring: "WILLOW is also a name, a trap toward names." },
      { label: "Parts of a tree", words: ["BARK", "ROOT", "TRUNK", "BRANCH"], difficulty: 2, redHerring: "BRANCH is also a bank office, a trap toward money." },
      { label: "Words that go before TREE", words: ["FAMILY", "CHRISTMAS", "PALM", "GUM"], difficulty: 3, redHerring: "GUM is also a sweet, a trap toward sweets." },
      { label: "Saws", words: ["HACKSAW", "JIGSAW", "CHAINSAW", "BANDSAW"], difficulty: 4, redHerring: "JIGSAW is also a puzzle, a trap toward puzzles." },
    ],
  },
  {
    id: 85,
    groups: [
      { label: "Sea life", words: ["KELP", "ALGAE", "CORAL", "PLANKTON"], difficulty: 1, redHerring: "CORAL is also a colour, a trap toward colours." },
      { label: "Gases", words: ["NITROGEN", "HYDROGEN", "ARGON", "METHANE"], difficulty: 2, redHerring: "ARGON is also a name, a trap toward names." },
      { label: "Sharp points", words: ["RAZOR", "THORN", "PRICKLE", "BARB"], difficulty: 3, redHerring: "BARB is also a cutting remark, a trap toward insults." },
      { label: "Words that go before PROOF", words: ["BULLET", "SOUND", "FOOL", "SHOCK"], difficulty: 4, redHerring: "FOOL is also a dessert, a trap toward desserts." },
    ],
  },
  {
    id: 86,
    groups: [
      { label: "Wind instruments", words: ["BAGPIPES", "OCARINA", "KAZOO", "HARMONICA"], difficulty: 1, redHerring: "HARMONICA is also a mouth-blown instrument, a trap toward the other instruments." },
      { label: "Empty", words: ["VACANT", "BARE", "HOLLOW", "VOID"], difficulty: 2, redHerring: "HOLLOW is also a valley, a trap toward landscape." },
      { label: "Words that go before CRAFT", words: ["AIR", "SPACE", "WITCH", "WAR"], difficulty: 3, redHerring: "SPACE is also a place among the planets, a trap toward space." },
      { label: "Words that go before SHIRT", words: ["DRESS", "NIGHT", "OVER", "HAIR"], difficulty: 4, redHerring: "HAIR is also a hairstyle, a trap toward hair." },
    ],
  },
  {
    id: 87,
    groups: [
      { label: "Dog breeds", words: ["SPANIEL", "TERRIER", "DACHSHUND", "CORGI"], difficulty: 1, redHerring: "DACHSHUND is also a long, low dog, a trap toward length." },
      { label: "Vegetables", words: ["TURNIP", "BEETROOT", "SPINACH", "COURGETTE"], difficulty: 2, redHerring: "BEETROOT is also a deep red colour, a trap toward colours." },
      { label: "Units of energy", words: ["JOULE", "CALORIE", "ERG", "THERM"], difficulty: 3, redHerring: "CALORIE is also a food measure, a trap toward food." },
      { label: "Words that go before BOX", words: ["SOAP", "JUKE", "TOOL", "PILL"], difficulty: 4, redHerring: "PILL is also a tablet, a trap toward medicine." },
    ],
  },
  {
    id: 88,
    groups: [
      { label: "Shades of grey", words: ["CHARCOAL", "PEWTER", "GRAPHITE", "SILVER"], difficulty: 1, redHerring: "SILVER is also a precious metal, a trap toward metals." },
      { label: "Words that go before ROOM", words: ["BED", "CLASS", "MUSH", "STOCK"], difficulty: 2, redHerring: "MUSH could be food, a trap toward food." },
      { label: "Fabrics", words: ["CHIFFON", "VELVET", "SATIN", "CORDUROY"], difficulty: 3, redHerring: "SATIN is also a surname, a trap toward names." },
      { label: "Gemstones", words: ["TOPAZ", "SAPPHIRE", "GARNET", "AMETHYST"], difficulty: 4, redHerring: "GARNET is also a dark red colour, a trap toward colours." },
    ],
  },
  {
    id: 89,
    groups: [
      { label: "Dances", words: ["MAMBO", "RUMBA", "FOXTROT", "CANCAN"], difficulty: 1, redHerring: "FOXTROT is also a letter in the phonetic alphabet, a trap toward letters." },
      { label: "Fish", words: ["SARDINE", "TURBOT", "GUDGEON", "SKATE"], difficulty: 2, redHerring: "SKATE is also a sport on wheels, a trap toward sports." },
      { label: "Volcanic and sedimentary rocks", words: ["PUMICE", "OBSIDIAN", "QUARTZ", "SHALE"], difficulty: 3, redHerring: "PUMICE is also a cleaning stone for skin, a trap toward cleaning." },
      { label: "Fishing gear", words: ["REEL", "ROD", "LURE", "BAIT"], difficulty: 4, redHerring: "REEL is also a dance, a trap toward dances." },
    ],
  },
  {
    id: 90,
    groups: [
      { label: "Words that go before SHOW", words: ["ROAD", "TALENT", "GAME", "TRADE"], difficulty: 1, redHerring: "ROAD is also a path, a trap toward travel." },
      { label: "Table settings", words: ["KNIFE", "FORK", "SPOON", "NAPKIN"], difficulty: 2, redHerring: "FORK is also a split in a road, a trap toward roads." },
      { label: "Cinema features", words: ["SCREEN", "ROW", "SEAT", "USHER"], difficulty: 3, redHerring: "ROW is also a line or a paddle, a trap toward boats." },
      { label: "Words that go before SKIN", words: ["BANANA", "ONION", "PIG", "ORANGE"], difficulty: 4, redHerring: "ORANGE is also a colour, a trap toward colours." },
    ],
  },
  {
    id: 91,
    groups: [
      { label: "Large birds", words: ["PELICAN", "FLAMINGO", "OSTRICH", "EMU"], difficulty: 1, redHerring: "FLAMINGO is also a bright pink colour, a trap toward colours." },
      { label: "Plants", words: ["FERN", "MOSS", "LICHEN", "IVY"], difficulty: 2, redHerring: "IVY is also a famous university league, a trap toward education." },
      { label: "Storms", words: ["TORNADO", "CYCLONE", "TYPHOON", "BLIZZARD"], difficulty: 3, redHerring: "TYPHOON is a storm, but it can pull toward the sea." },
      { label: "Words that go before ROCK", words: ["PUNK", "GLAM", "SOFT", "HARD"], difficulty: 4, redHerring: "HARD is also an everyday adjective, a trap toward descriptions." },
    ],
  },
  {
    id: 92,
    groups: [
      { label: "Stage directions", words: ["ENTER", "EXIT", "ASIDE", "CUE"], difficulty: 1, redHerring: "CUE is also a snooker stick, a trap toward snooker." },
      { label: "Snooker terms", words: ["BREAK", "SAFETY", "CANNON", "REST"], difficulty: 2, redHerring: "REST is also a pause or a support, a trap toward support words." },
      { label: "Muses", words: ["CLIO", "ERATO", "THALIA", "URANIA"], difficulty: 3, redHerring: "URANIA is also a planet moon name, a trap toward space." },
      { label: "Words that go before SPOON", words: ["TABLE", "DESSERT", "WOODEN", "SOUP"], difficulty: 4, redHerring: "TABLE is also a piece of furniture, a trap toward furniture." },
    ],
  },
  {
    id: 93,
    groups: [
      { label: "Mythical beasts", words: ["CENTAUR", "MINOTAUR", "CHIMERA", "HYDRA"], difficulty: 1, redHerring: "HYDRA is also a freshwater animal, a trap toward nature." },
      { label: "Coins", words: ["NICKEL", "DIME", "QUARTER", "DOUBLOON"], difficulty: 2, redHerring: "QUARTER is also a part of an hour, a trap toward time." },
      { label: "Ages", words: ["BRONZE", "STONE", "ICE", "DARK"], difficulty: 3, redHerring: "ICE is also frozen water, a trap toward cold words." },
      { label: "Words that go before NUT", words: ["WING", "HAZEL", "CHEST", "GROUND"], difficulty: 4, redHerring: "CHEST is also a body part, a trap toward body words." },
    ],
  },
  {
    id: 94,
    groups: [
      { label: "Horses", words: ["PONY", "STALLION", "MARE", "COLT"], difficulty: 1, redHerring: "PONY is also a small horse, a trap toward size words." },
      { label: "Musicals", words: ["CATS", "EVITA", "GREASE", "ANNIE"], difficulty: 2, redHerring: "ANNIE is also a common name, a trap toward names." },
      { label: "Brave", words: ["BOLD", "HEROIC", "VALIANT", "FEARLESS"], difficulty: 3, redHerring: "BOLD is also a font style, a trap toward typography." },
      { label: "Words that go before CAR", words: ["SPORTS", "CABLE", "RACE", "SQUAD"], difficulty: 4, redHerring: "CABLE is also a wire, a trap toward wires." },
    ],
  },
  {
    id: 95,
    groups: [
      { label: "Bicycle parts", words: ["SPOKE", "SADDLE", "PEDAL", "HANDLEBAR"], difficulty: 1, redHerring: "SADDLE is also a horse's seat, a trap toward horses." },
      { label: "Spreads", words: ["MARMALADE", "JAM", "CURD", "PATE"], difficulty: 2, redHerring: "CURD is also a verb meaning to thicken, a word trap." },
      { label: "Crimes", words: ["BURGLARY", "ARSON", "FRAUD", "HEIST"], difficulty: 3, redHerring: "HEIST is also a robbery, which could pull toward the thieves group." },
      { label: "Words that go before SCAPE", words: ["LAND", "CITY", "STREET", "SKY"], difficulty: 4, redHerring: "SKY is also a weather word, a trap toward the weather." },
    ],
  },
  {
    id: 96,
    groups: [
      { label: "Ways to cook eggs", words: ["POACH", "SCRAMBLE", "OMELETTE", "FRITTATA"], difficulty: 1, redHerring: "SCRAMBLE is also a rush, a trap toward speed." },
      { label: "Parts of a story", words: ["GARDEN", "PLOT", "STORY", "FILM"], difficulty: 2, redHerring: "GARDEN could be a path, a trap toward plants." },
      { label: "Things that hatch", words: ["CHICK", "TURTLE", "DUCKLING", "LARVA"], difficulty: 3, redHerring: "LARVA is also a grub, a trap toward insects." },
      { label: "Words that go before BAR", words: ["CROW", "CANDY", "SNACK", "MINI"], difficulty: 4, redHerring: "CROW is also a bird, a trap toward birds." },
    ],
  },
  {
    id: 97,
    groups: [
      { label: "Things you can cast", words: ["VOTE", "NET", "PLASTER", "SHADOW"], difficulty: 1, redHerring: "NET is also a web, a trap toward spiders." },
      { label: "Pen types", words: ["BALLPOINT", "FOUNTAIN", "ROLLERBALL", "GEL"], difficulty: 2, redHerring: "GEL is also a hair product, a trap toward hair." },
      { label: "Court officials", words: ["JUDGE", "JURY", "BAILIFF", "CLERK"], difficulty: 3, redHerring: "CLERK is also a shop assistant, a trap toward shops." },
      { label: "Words that go before MATE", words: ["ROOM", "PLAY", "TEAM", "CELL"], difficulty: 4, redHerring: "CELL is also a prison room, a trap toward prisons." },
    ],
  },
  {
    id: 98,
    groups: [
      { label: "Painters", words: ["RENOIR", "VERMEER", "RUBENS", "TITIAN"], difficulty: 1, redHerring: "TITIAN is also a shade of reddish orange, a trap toward colours." },
      { label: "Sculptors", words: ["RODIN", "BERNINI", "DONATELLO", "CANOVA"], difficulty: 2, redHerring: "CANOVA was Italian, which could pull toward the Italian painters." },
      { label: "Art museums", words: ["LOUVRE", "PRADO", "UFFIZI", "TATE"], difficulty: 3, redHerring: "TATE is also a sugar brand, a trap toward food." },
      { label: "Things that can be painted", words: ["FENCE", "NAILS", "PORTRAIT", "CEILING"], difficulty: 4, redHerring: "PORTRAIT is itself a painting, a trap toward art." },
    ],
  },
  {
    id: 99,
    groups: [
      { label: "Space", words: ["ROCKET", "SATELLITE", "ASTEROID", "ORBIT"], difficulty: 1, redHerring: "ORBIT is also an eye socket, a trap toward body parts." },
      { label: "Sleep", words: ["NAP", "SNOOZE", "DOZE", "SLUMBER"], difficulty: 2, redHerring: "SNOOZE is also an alarm button, a trap toward alarms." },
      { label: "Lenses and viewers", words: ["CAMERA", "BINOCULARS", "TELESCOPE", "PERISCOPE"], difficulty: 3, redHerring: "CAMERA is also a room in old usage, a trap toward rooms." },
      { label: "Things that can be drawn", words: ["BOW", "LOTS", "BREATH", "BLIND"], difficulty: 4, redHerring: "BOW is also a ribbon, a trap toward ribbons." },
    ],
  },
  {
    id: 100,
    groups: [
      { label: "Zoo animals", words: ["GIRAFFE", "ZEBRA", "HIPPO", "RHINO"], difficulty: 1, redHerring: "HIPPO is also short for hippopotamus, a trap toward hippos." },
      { label: "Antelopes", words: ["IMPALA", "GNU", "ELAND", "ORYX"], difficulty: 2, redHerring: "GNU is also a letter, a trap toward letters." },
      { label: "Words that go before SAUCE", words: ["SOY", "TOMATO", "BARBECUE", "CHILLI"], difficulty: 3, redHerring: "CHILLI is also a spicy pepper, a trap toward spices." },
      { label: "Things with hoods", words: ["CAR", "CLOAK", "PRAM", "COWL"], difficulty: 4, redHerring: "CLOAK is also a secret or a cover, a trap toward secrecy." },
    ],
  },
  {
    id: 101,
    groups: [
      { label: "Kitchen appliances", words: ["TOASTER", "BLENDER", "MIXER", "OVEN"], difficulty: 1, redHerring: "MIXER is also a sound desk, a trap toward music." },
      { label: "Things with lids", words: ["JAR", "CASKET", "COFFER", "TUREEN"], difficulty: 2, redHerring: "CASKET is also a coffin, a trap toward funerals." },
      { label: "Breakfast drinks", words: ["JUICE", "SMOOTHIE", "CORDIAL", "LATTE"], difficulty: 3, redHerring: "CORDIAL is also a friendly word, a trap toward manners." },
      { label: "Words that go before CREAM", words: ["SOUR", "SHAVING", "CLOTTED", "DOUBLE"], difficulty: 4, redHerring: "DOUBLE is also a word for two, a trap toward numbers." },
    ],
  },
  {
    id: 102,
    groups: [
      { label: "Nautical directions", words: ["PORT", "STARBOARD", "STERN", "AFT"], difficulty: 1, redHerring: "STERN is also a serious manner, a trap toward mood words." },
      { label: "Fictional spies", words: ["BOND", "BOURNE", "SMILEY", "CONDOR"], difficulty: 2, redHerring: "BOND is also a financial certificate, a trap toward money." },
      { label: "Lazy", words: ["IDLE", "LAZY", "INDOLENT", "SLUGGISH"], difficulty: 3, redHerring: "SLUGGISH sounds like a slug, a trap toward slugs." },
      { label: "Words that go before WORLD", words: ["OLD", "NEW", "FANTASY", "DREAM"], difficulty: 4, redHerring: "DREAM is also a sleep word, a trap toward sleep." },
    ],
  },
  {
    id: 103,
    groups: [
      { label: "Browns", words: ["TAN", "SEPIA", "UMBER", "CARAMEL"], difficulty: 1, redHerring: "CARAMEL is also a sweet, a trap toward sweets." },
      { label: "Famous dogs in stories", words: ["LASSIE", "BALTO", "TOTO", "HACHIKO"], difficulty: 2, redHerring: "TOTO is also a band name, a trap toward music." },
      { label: "Words that go before BOOT", words: ["RUBBER", "SKI", "CHELSEA", "COWBOY"], difficulty: 3, redHerring: "SKI is also a sport, a trap toward sports." },
      { label: "Pastimes", words: ["BOWLING", "SKIING", "SURFING", "HIKING"], difficulty: 4, redHerring: "SKIING is close to SKI, a spelling trap." },
    ],
  },
  {
    id: 104,
    groups: [
      { label: "Baby animals", words: ["PUPPY", "KITTEN", "PIGLET", "JOEY"], difficulty: 1, redHerring: "JOEY is also a common name, a trap toward names." },
      { label: "Shoes", words: ["PUMP", "STILETTO", "MOCCASIN", "BROGUE"], difficulty: 2, redHerring: "BROGUE is also an accent, a trap toward speech." },
      { label: "Cheeses", words: ["CHEDDAR", "STILTON", "PARMESAN", "MOZZARELLA"], difficulty: 3, redHerring: "PARMESAN is also a coating, a trap toward food." },
      { label: "Flightless birds", words: ["KIWI", "PENGUIN", "RHEA", "CASSOWARY"], difficulty: 4, redHerring: "KIWI is also a fruit and a nickname, a trap toward food." },
    ],
  },
  {
    id: 105,
    groups: [
      { label: "Pastas", words: ["LASAGNE", "GNOCCHI", "RAVIOLI", "TORTELLINI"], difficulty: 1, redHerring: "GNOCCHI looks like dumplings, a trap toward dumplings." },
      { label: "Breads", words: ["PRETZEL", "CRUMPET", "MUFFIN", "TORTILLA"], difficulty: 2, redHerring: "MUFFIN is also a cake, a trap toward cakes." },
      { label: "Shakespeare characters", words: ["ROMEO", "LEAR", "PROSPERO", "PORTIA"], difficulty: 3, redHerring: "LEAR is also a king, a trap toward royalty." },
      { label: "Snacks", words: ["CRISPS", "CRACKERS", "JERKY", "SAUSAGE"], difficulty: 4, redHerring: "SAUSAGE is also a meat, a trap toward meat." },
    ],
  },
  {
    id: 106,
    groups: [
      { label: "Olympic sports", words: ["DIVING", "GYMNASTICS", "WRESTLING", "DECATHLON"], difficulty: 1, redHerring: "DIVING is also a plunge, a trap toward water words." },
      { label: "Shapes", words: ["CRESCENT", "SPIRAL", "ZIGZAG", "WAVE"], difficulty: 2, redHerring: "CRESCENT is also a moon phase, a trap toward space." },
      { label: "School items", words: ["REGISTER", "LECTERN", "TIMETABLE", "SATCHEL"], difficulty: 3, redHerring: "REGISTER is also a cash drawer, a trap toward shops." },
      { label: "Woodworking tools", words: ["LATHE", "ROUTER", "BRADAWL", "SANDER"], difficulty: 4, redHerring: "ROUTER is also a computer device, a trap toward computing." },
    ],
  },
  {
    id: 107,
    groups: [
      { label: "Quiet speech", words: ["MUTTER", "MURMUR", "WHISPER", "BABBLE"], difficulty: 1, redHerring: "BABBLE is also a stream of nonsense, a trap toward nonsense." },
      { label: "Things you hang", words: ["BUNTING", "WREATH", "GARLAND", "TINSEL"], difficulty: 2, redHerring: "TINSEL is also showy talk, a trap toward speech." },
      { label: "Typefaces", words: ["ARIAL", "HELVETICA", "GARAMOND", "COURIER"], difficulty: 3, redHerring: "COURIER is also a delivery person, a trap toward delivery." },
      { label: "Things you tie", words: ["SHOELACE", "RIBBON", "TWINE", "STRING"], difficulty: 4, redHerring: "STRING is also a set of lights, a trap toward lights." },
    ],
  },
  {
    id: 108,
    groups: [
      { label: "Punctuation", words: ["COMMA", "COLON", "HYPHEN", "ELLIPSIS"], difficulty: 1, redHerring: "COLON is also a body part, a trap toward body words." },
      { label: "Tarot cards", words: ["HERMIT", "EMPEROR", "LOVERS", "JUSTICE"], difficulty: 2, redHerring: "EMPEROR is also a penguin, a trap toward birds." },
      { label: "Units of weight", words: ["OUNCE", "POUND", "DRAM", "CARAT"], difficulty: 3, redHerring: "POUND is also a place to keep stray dogs, a trap toward dogs." },
      { label: "Emotions", words: ["JEALOUS", "SMUG", "GUILTY", "NERVOUS"], difficulty: 4, redHerring: "SMUG is also a bit of a showy style, a trap for style words." },
    ],
  },
  {
    id: 109,
    groups: [
      { label: "Garden features", words: ["POND", "GAZEBO", "PATIO", "SHED"], difficulty: 1, redHerring: "POND is also a small lake, a trap toward lakes." },
      { label: "Knitwear", words: ["BLAZER", "CARDIGAN", "HOODIE", "JUMPER"], difficulty: 2, redHerring: "BLAZER is also a jacket, a trap toward jackets." },
      { label: "Words that go before TOWN", words: ["GHOST", "HOME", "BOOM", "CHINA"], difficulty: 3, redHerring: "CHINA is also a country and crockery, a trap toward crockery." },
      { label: "Words that go before DOOR", words: ["FRONT", "TRAP", "CELLAR", "KITCHEN"], difficulty: 4, redHerring: "CELLAR is also a wine store, a trap toward drinks." },
    ],
  },
  {
    id: 110,
    groups: [
      { label: "Mushrooms", words: ["MOREL", "CHANTERELLE", "PORCINI", "ENOKI"], difficulty: 1, redHerring: "MOREL is also a moral, a trap toward morals." },
      { label: "Water sports", words: ["WATERSKI", "SNORKEL", "KITESURF", "PARASAIL"], difficulty: 2, redHerring: "PARASAIL is close to parasol, a spelling trap." },
      { label: "Things you raise", words: ["FLAG", "EYEBROW", "HEM", "PRICE"], difficulty: 3, redHerring: "EYEBROW is also a body part, a trap toward body words." },
      { label: "Words that go before LAMP", words: ["OIL", "FLOOR", "MAGIC", "PILOT"], difficulty: 4, redHerring: "PILOT is also a trial episode, a trap toward television." },
    ],
  },
  {
    id: 111,
    groups: [
      { label: "Sharks", words: ["MAKO", "HAMMERHEAD", "TIGER", "NURSE"], difficulty: 1, redHerring: "NURSE is also a caregiver, a trap toward medicine." },
      { label: "Musical modes", words: ["DORIAN", "LYDIAN", "PHRYGIAN", "MIXOLYDIAN"], difficulty: 2, redHerring: "DORIAN is also a name, a trap toward names." },
      { label: "Tiny", words: ["WEE", "TEENY", "PETITE", "TINY"], difficulty: 3, redHerring: "PETITE is also a clothing size, a trap toward clothes." },
      { label: "Words that go before GLASS", words: ["LOOKING", "WINE", "FROSTED", "STAINED"], difficulty: 4, redHerring: "WINE is also a drink, a trap toward drinks." },
    ],
  },
  {
    id: 112,
    groups: [
      { label: "Programming languages", words: ["JAVA", "PERL", "COBOL", "FORTRAN"], difficulty: 1, redHerring: "JAVA is also coffee, a trap toward drinks." },
      { label: "Coffee drinks", words: ["ESPRESSO", "MOCHA", "CAPPUCCINO", "AMERICANO"], difficulty: 2, redHerring: "MOCHA is also a chocolate flavour, a trap toward sweets." },
      { label: "Brass instruments", words: ["TROMBONE", "CORNET", "FLUGELHORN", "BUGLE"], difficulty: 3, redHerring: "BUGLE is also a plant, a trap toward plants." },
      { label: "Words that go before PIPE", words: ["BAG", "DRAIN", "BLOW", "EXHAUST"], difficulty: 4, redHerring: "BLOW is also a hit, a trap toward violence." },
    ],
  },
  {
    id: 113,
    groups: [
      { label: "Sports venues", words: ["STADIUM", "VELODROME", "RINK", "PITCH"], difficulty: 1, redHerring: "PITCH is also a sales talk, a trap toward sales." },
      { label: "Fielding positions", words: ["SLIP", "POINT", "COVER", "SILLY"], difficulty: 2, redHerring: "POINT is also a sharp end, a trap toward sharpness." },
      { label: "Mistakes", words: ["BLUNDER", "GAFFE", "ERROR", "LAPSE"], difficulty: 3, redHerring: "LAPSE is also a time gap, a trap toward time." },
      { label: "Words that go before HALL", words: ["TOWN", "DANCE", "MUSIC", "CONCERT"], difficulty: 4, redHerring: "MUSIC is also a sound, a trap toward sound words." },
    ],
  },
  {
    id: 114,
    groups: [
      { label: "Grasses", words: ["BENT", "RYE", "TIMOTHY", "FESCUE"], difficulty: 1, redHerring: "BENT is also a crooked shape, a trap toward shapes." },
      { label: "Striped things", words: ["BARCODE", "PEPPERMINT", "AWNING", "PYJAMAS"], difficulty: 2, redHerring: "PEPPERMINT is also a herb, a trap toward herbs." },
      { label: "Big", words: ["COLOSSAL", "MASSIVE", "BULKY", "HEFTY"], difficulty: 3, redHerring: "HEFTY is also a heavy weight, a trap toward weight." },
      { label: "Words that go before PLATE", words: ["NUMBER", "DINNER", "BREAD", "NAME"], difficulty: 4, redHerring: "NAME is also a title, a trap toward titles." },
    ],
  },
  {
    id: 115,
    groups: [
      { label: "Cakes", words: ["SPONGE", "GATEAU", "BATTENBERG", "MADEIRA"], difficulty: 1, redHerring: "MADEIRA is also an island, a trap toward islands." },
      { label: "Perfume notes", words: ["MUSK", "SANDALWOOD", "BERGAMOT", "PATCHOULI"], difficulty: 2, redHerring: "MUSK is also a deer scent, a trap toward animals." },
      { label: "Words that go before WORM", words: ["GLOW", "RING", "WOOD", "BLOOD"], difficulty: 3, redHerring: "BLOOD is also a family tie, a trap toward family." },
      { label: "Words that go before FIELD", words: ["BATTLE", "MINE", "PLAYING", "COAL"], difficulty: 4, redHerring: "MINE is also a possessive, a trap toward pronouns." },
    ],
  },
  {
    id: 116,
    groups: [
      { label: "Chess terms", words: ["GAMBIT", "CASTLE", "CHECK", "MATE"], difficulty: 1, redHerring: "CASTLE is also a building, a trap toward buildings." },
      { label: "Ocean waves", words: ["SWELL", "BREAKER", "RIPPLE", "SURGE"], difficulty: 2, redHerring: "SURGE is also a sudden rise in electricity, a trap toward electricity." },
      { label: "Words that go before YEAR", words: ["LEAP", "SCHOOL", "FISCAL", "GAP"], difficulty: 3, redHerring: "GAP is also a break in a view, a trap toward views." },
      { label: "Words that go before ROOT", words: ["MANDRAKE", "ARROW", "BEET", "SNAKE"], difficulty: 4, redHerring: "TAP is also a faucet, a trap toward plumbing." },
    ],
  },
  {
    id: 117,
    groups: [
      { label: "Pantomime characters", words: ["DAME", "PRINCE", "WIDOW", "VILLAIN"], difficulty: 1, redHerring: "WIDOW is also a spider, a trap toward spiders." },
      { label: "Sled dogs", words: ["MALAMUTE", "SAMOYED", "AKITA", "CHOW"], difficulty: 2, redHerring: "CHOW is also food, a trap toward food." },
      { label: "Sea shells", words: ["CONCH", "LIMPET", "WHELK", "COWRIE"], difficulty: 3, redHerring: "COWRIE is also a shell used as money, a trap toward money." },
      { label: "Words that go before TOOTH", words: ["SWEET", "WISDOM", "MILK", "BABY"], difficulty: 4, redHerring: "BABY is also a young child, a trap toward children." },
    ],
  },
  {
    id: 118,
    groups: [
      { label: "Chemist's goods", words: ["ASPIRIN", "TABLET", "LOTION", "OINTMENT"], difficulty: 1, redHerring: "TABLET is also a computer, a trap toward computing." },
      { label: "Dentist's tools", words: ["DRILL", "FLOSS", "SUCTION", "PROBE"], difficulty: 2, redHerring: "DRILL is also a practice exercise, a trap toward school." },
      { label: "Slow walk", words: ["DAWDLE", "AMBLE", "STROLL", "SAUNTER"], difficulty: 3, redHerring: "AMBLE is also a relaxed walk, a trap toward walking." },
      { label: "Words that go before SUIT", words: ["WET", "TRACK", "JUMP", "SWIM"], difficulty: 4, redHerring: "JUMP is also an athletic leap, a trap toward sport." },
    ],
  },
  {
    id: 119,
    groups: [
      { label: "Homes", words: ["COTTAGE", "MANSION", "VILLA", "CHALET"], difficulty: 1, redHerring: "CHALET is also a wooden holiday home, a trap toward holidays." },
      { label: "Stable features", words: ["HAYLOFT", "STALL", "MANGER", "TROUGH"], difficulty: 2, redHerring: "TROUGH is also a low valley, a trap toward landscape." },
      { label: "Wither", words: ["SHRIVEL", "WILT", "DROOP", "SAG"], difficulty: 3, redHerring: "WILT is also a plant problem, a trap toward gardening." },
      { label: "Words that go before COAT", words: ["RAIN", "TRENCH", "PEA", "TURN"], difficulty: 4, redHerring: "TRENCH is also a ditch, a trap toward ditches." },
    ],
  },
  {
    id: 120,
    groups: [
      { label: "Measuring tools", words: ["CALIPERS", "GAUGE", "PLUMB", "SEXTANT"], difficulty: 1, redHerring: "PLUMB is also a verb for diving deep, a trap toward water." },
      { label: "Parts of a horse", words: ["MANE", "HOOF", "FETLOCK", "WITHERS"], difficulty: 2, redHerring: "WITHERS is also a verb meaning to wilt, a trap toward plants." },
      { label: "Throw", words: ["FLING", "TOSS", "HURL", "LOB"], difficulty: 3, redHerring: "LOB is also a tennis shot, a trap toward tennis." },
      { label: "Words that go before PLAN", words: ["MASTER", "DIET", "SEATING", "ESCAPE"], difficulty: 4, redHerring: "DIET is also a way of eating, a trap toward food." },
    ],
  },
];
