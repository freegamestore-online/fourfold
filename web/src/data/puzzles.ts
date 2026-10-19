// Content batches: 180 family-friendly daily puzzles (ids 1-180).
// Each puzzle has four groups of four words. Difficulty runs 1 (easiest) to 4 (hardest)
// and is used once per puzzle.
// Each group's redHerring names the trap: a word that could fit another group.

export type Difficulty = 1 | 2 | 3 | 4;

/** "category" groups share a meaning; "wordplay" groups work on the words themselves. */
export type GroupKind = "category" | "wordplay";

export interface Group {
  label: string;
  words: [string, string, string, string];
  difficulty: Difficulty;
  kind?: GroupKind;
  redHerring: string;
}

export interface Puzzle {
  id: number;
  groups: [Group, Group, Group, Group];
  /** Words in this puzzle that also fit a different group, so the solver must choose. */
  decoys?: string[];
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    groups: [
      { label: "Farm animals", words: ["COW", "HEN", "GOAT", "MULE"], difficulty: 1, kind: "category", redHerring: "MULE is also slang for a stubborn person, but here it is a working farm animal." },
      { label: "Breakfast foods", words: ["TOAST", "BACON", "WAFFLE", "PANCAKE"], difficulty: 2, kind: "category", redHerring: "BACON comes from a pig, which pulls toward the farm animals, but it belongs at the breakfast table." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "SUN", "GAS", "STAR"], difficulty: 3, kind: "wordplay", redHerring: "STAR and SUN also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["DOG", "JELLY", "ANGEL", "MONK"], difficulty: 4, kind: "wordplay", redHerring: "STAR and SUN look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["STAR", "SUN"],
  },
  {
    id: 2,
    groups: [
      { label: "Musical instruments", words: ["CELLO", "OBOE", "HARP", "TUBA"], difficulty: 1, kind: "category", redHerring: "HARP is also a verb meaning to keep returning to one subject, a word-play trap." },
      { label: "Dances", words: ["TANGO", "WALTZ", "SALSA", "POLKA"], difficulty: 2, kind: "category", redHerring: "SALSA is also a tomato sauce, which tempts a food reading, but the group is dances." },
      { label: "Words that go before WORK", words: ["FOOT", "HOUSE", "BRICK", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["BOAT", "GUN", "SNOW", "POLICE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 3,
    groups: [
      { label: "Planets", words: ["MARS", "VENUS", "SATURN", "JUPITER"], difficulty: 1, kind: "category", redHerring: "MARS is also a chocolate bar, but here it is the fourth planet from the Sun." },
      { label: "Metals", words: ["IRON", "TIN", "LEAD", "ZINC"], difficulty: 2, kind: "category", redHerring: "LEAD is also a verb meaning to guide, and TIN is a container, so both can mislead." },
      { label: "Words that go before LIGHT", words: ["MOON", "HEAD", "BACK", "CANDLE"], difficulty: 3, kind: "wordplay", redHerring: "HEAD and MOON also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["KEY", "MILL", "HAIL", "WHET"], difficulty: 4, kind: "wordplay", redHerring: "HEAD and MOON look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["HEAD", "MOON"],
  },
  {
    id: 4,
    groups: [
      { label: "Cheeses", words: ["BRIE", "EDAM", "FETA", "GOUDA"], difficulty: 1, kind: "category", redHerring: "EDAM spelled backwards is MADE, a word-play trap that has nothing to do with the cheese group." },
      { label: "Pasta shapes", words: ["PENNE", "FUSILLI", "ORZO", "RIGATONI"], difficulty: 2, kind: "category", redHerring: "ORZO looks like rice, so it might drift into a grains group, but it is a pasta." },
      { label: "Words that go before DOG", words: ["HOT", "BULL", "WATER", "GUN"], difficulty: 3, kind: "wordplay", redHerring: "GUN and WATER also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SUPER", "SNOW", "SALES", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "GUN and WATER look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["GUN", "WATER"],
  },
  {
    id: 5,
    groups: [
      { label: "Weather", words: ["SLEET", "HAIL", "FOG", "MIST"], difficulty: 1, kind: "category", redHerring: "HAIL is also a greeting, and MIST is also a kind of cloud, so both can drift elsewhere." },
      { label: "Clouds", words: ["CIRRUS", "CUMULUS", "STRATUS", "NIMBUS"], difficulty: 2, kind: "category", redHerring: "NIMBUS is also a name for a broom, and STRATUS sounds like space, but both are clouds." },
      { label: "Words that go before MAN", words: ["BAT", "FIRE", "BUSINESS", "BOAT"], difficulty: 3, kind: "wordplay", redHerring: "BOAT and FIRE also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["GLASS", "LIGHT", "WHITE", "TREE"], difficulty: 4, kind: "wordplay", redHerring: "BOAT and FIRE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["BOAT", "FIRE"],
  },
  {
    id: 6,
    groups: [
      { label: "Units of time", words: ["SECOND", "MINUTE", "HOUR", "WEEK"], difficulty: 1, kind: "category", redHerring: "MINUTE also means tiny, a trap for size words." },
      { label: "Things with keys", words: ["PIANO", "MAP", "LOCK", "KEYBOARD"], difficulty: 2, kind: "category", redHerring: "PIANO and KEYBOARD are instruments, which tempts a music group that is not in this puzzle." },
      { label: "Words that go before LIGHT", words: ["MOON", "FIRE", "LIME", "GREEN"], difficulty: 3, kind: "wordplay", redHerring: "LIME and MOON also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["MILE", "MILL", "CORNER", "WHET"], difficulty: 4, kind: "wordplay", redHerring: "LIME and MOON look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["LIME", "MOON"],
  },
  {
    id: 7,
    groups: [
      { label: "Fairy-tale characters", words: ["GRETEL", "CINDERELLA", "RAPUNZEL", "PINOCCHIO"], difficulty: 1, kind: "category", redHerring: "PINOCCHIO is a wooden puppet, which could tempt a toys reading, but he is a story character." },
      { label: "Shakespeare plays", words: ["HAMLET", "OTHELLO", "MACBETH", "TEMPEST"], difficulty: 2, kind: "category", redHerring: "HAMLET is also a small village and a cigar, which fit no literature group here." },
      { label: "Words that go before HOUSE", words: ["FIRE", "DOG", "BOAT", "TEA"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and BOAT also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["POLICE", "BUSINESS", "POST", "SNOW"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and BOAT look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIRE", "BOAT"],
  },
  {
    id: 8,
    groups: [
      { label: "Mountain ranges", words: ["EVEREST", "ANDES", "ALPS", "ROCKIES"], difficulty: 1, kind: "category", redHerring: "EVEREST is a single peak rather than a range, and it is also a film title, a distraction." },
      { label: "Rivers", words: ["NILE", "AMAZON", "DANUBE", "THAMES"], difficulty: 2, kind: "category", redHerring: "AMAZON is also a huge online shop, a brand trap rather than a river." },
      { label: "Words that go before STONE", words: ["MILL", "SAND", "HEAD", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "HEAD and KEY also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["MOTHER", "DART", "RUNNING", "CUP"], difficulty: 4, kind: "wordplay", redHerring: "HEAD and KEY look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["HEAD", "KEY"],
  },
  {
    id: 9,
    groups: [
      { label: "Toys", words: ["KITE", "MARBLES", "TOP", "DOLL"], difficulty: 1, kind: "category", redHerring: "TOP could mean the top of a list, but it also describes a spinning toy." },
      { label: "Board games", words: ["CHESS", "LUDO", "CLUE", "RISK"], difficulty: 2, kind: "category", redHerring: "CLUE and RISK are everyday words that could mean anything, but here they are games." },
      { label: "Words that go before BALL", words: ["FOOT", "SNOW", "BEACH", "EYE"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and SNOW also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["POLICE", "SALES", "SUPER", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and SNOW look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FOOT", "SNOW"],
  },
  {
    id: 10,
    groups: [
      { label: "Fruits", words: ["APPLE", "MANGO", "PEACH", "PLUM"], difficulty: 1, kind: "category", redHerring: "PEACH and PLUM are also colours, so they can feel like a colour word, but they are fruit here." },
      { label: "Kitchen tools", words: ["WHISK", "LADLE", "SIEVE", "TONGS"], difficulty: 2, kind: "category", redHerring: "SIEVE is also slang for a forgetful person, which pulls toward memory words." },
      { label: "Words that go before HOUSE", words: ["FIELD", "FIRE", "FARM", "GLASS"], difficulty: 3, kind: "wordplay", redHerring: "FIELD and FIRE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["LEG", "HOUSE", "PAPER", "MILL"], difficulty: 4, kind: "wordplay", redHerring: "FIELD and FIRE look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIELD", "FIRE"],
  },
  {
    id: 11,
    groups: [
      { label: "Dog breeds", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], difficulty: 1, kind: "category", redHerring: "BOXER is also a sports competitor, a trap that pulls you toward sports." },
      { label: "Cat breeds", words: ["SIAMESE", "PERSIAN", "MANX", "BENGAL"], difficulty: 2, kind: "category", redHerring: "BENGAL is also a tiger, which could pull you toward big wild animals rather than cats." },
      { label: "Words that go before FLY", words: ["HOUSE", "FIRE", "CADDIS", "GREEN"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["LIGHT", "DOG", "TEA", "HOT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 12,
    groups: [
      { label: "Basic shapes", words: ["CIRCLE", "SQUARE", "OVAL", "STAR"], difficulty: 1, kind: "category", redHerring: "SQUARE is also a polygon, so it can fit the polygons group as well." },
      { label: "Polygons", words: ["HEXAGON", "OCTAGON", "PENTAGON", "TRIANGLE"], difficulty: 2, kind: "category", redHerring: "TRIANGLE is also a musical instrument, which can pull you toward music." },
      { label: "Words that go before BALL", words: ["FIRE", "SNOW", "MOTH", "HAND"], difficulty: 3, kind: "wordplay", redHerring: "SNOW and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["GUN", "POLICE", "WEATHER", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "SNOW and FIRE look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["SNOW", "FIRE"],
  },
  {
    id: 13,
    groups: [
      { label: "Sports", words: ["SWIMMING", "ROWING", "FENCING", "ARCHERY"], difficulty: 1, kind: "category", redHerring: "FENCING is also a boundary wall, which tempts a garden theme." },
      { label: "Things you hit with", words: ["BAT", "RACKET", "MALLET", "CLUB"], difficulty: 2, kind: "category", redHerring: "CLUB is also a sports team and a card suit, which can pull you away from hitting." },
      { label: "Words that go before BALL", words: ["HAND", "SNOW", "FIRE", "MEAT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and HAND also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["MILL", "PATCH", "GUESS", "LEG"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and HAND look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FIRE", "HAND"],
  },
  {
    id: 14,
    groups: [
      { label: "Tempo markings", words: ["ALLEGRO", "LARGO", "PRESTO", "ADAGIO"], difficulty: 1, kind: "category", redHerring: "PRESTO is also a magic word, a trap for fans of wordplay." },
      { label: "Stringed instruments", words: ["BANJO", "UKULELE", "LUTE", "ZITHER"], difficulty: 2, kind: "category", redHerring: "LUTE is also a sealing clay used in craft work, which can pull you toward crafts." },
      { label: "Words that go before DOG", words: ["WATER", "UNDER", "GUN", "PRAIRIE"], difficulty: 3, kind: "wordplay", redHerring: "WATER and GUN also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SNOW", "POST", "BOAT", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "WATER and GUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "GUN"],
  },
  {
    id: 15,
    groups: [
      { label: "Parts of the eye", words: ["IRIS", "PUPIL", "LENS", "RETINA"], difficulty: 1, kind: "category", redHerring: "IRIS is also a flower, so it can be pulled toward plants." },
      { label: "Parts of a flower", words: ["PETAL", "STEM", "SEPAL", "PISTIL"], difficulty: 2, kind: "category", redHerring: "STEM is also a verb meaning to stop a flow, but here it is a flower part." },
      { label: "Words that go before BALL", words: ["MOTH", "SNOW", "FOOT", "BEACH"], difficulty: 3, kind: "wordplay", redHerring: "SNOW and FOOT also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["GUN", "POLICE", "WATER", "SUPER"], difficulty: 4, kind: "wordplay", redHerring: "SNOW and FOOT look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["SNOW", "FOOT"],
  },
  {
    id: 16,
    groups: [
      { label: "Currencies", words: ["YEN", "EURO", "PESO", "RAND"], difficulty: 1, kind: "category", redHerring: "EURO is also a kangaroo, a trap that pulls toward animals." },
      { label: "Money slang", words: ["BUCKS", "QUID", "DOUGH", "CASH"], difficulty: 2, kind: "category", redHerring: "BUCKS are also male deer, a trap that pulls toward animals." },
      { label: "Words that go before WORK", words: ["BODY", "FOOT", "FIRE", "LEG"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["WEATHER", "BUSINESS", "SUPER", "WATER"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 17,
    groups: [
      { label: "Painters", words: ["MONET", "DALI", "GOYA", "MATISSE"], difficulty: 1, kind: "category", redHerring: "MATISSE is also a name used for art styles, so it can slip into the art movements group." },
      { label: "Art supplies", words: ["PAINT", "EASEL", "CANVAS", "BRUSH"], difficulty: 2, kind: "category", redHerring: "BRUSH could be a hairstyle or a tool, but here it is an art tool." },
      { label: "Words that go before FLY", words: ["BUTTER", "SAW", "FIRE", "HOUSE"], difficulty: 3, kind: "wordplay", redHerring: "SAW and BUTTER also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["SUN", "SWORD", "LION", "DOG"], difficulty: 4, kind: "wordplay", redHerring: "SAW and BUTTER look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["SAW", "BUTTER"],
  },
  {
    id: 18,
    groups: [
      { label: "Sea creatures", words: ["SQUID", "OCTOPUS", "MANTA", "STARFISH"], difficulty: 1, kind: "category", redHerring: "MANTA is also a kind of ray, which could pull you toward fish." },
      { label: "Oceans", words: ["ARCTIC", "ATLANTIC", "INDIAN", "PACIFIC"], difficulty: 2, kind: "category", redHerring: "ARCTIC is also a fox, and INDIAN is also a people, so both can mislead." },
      { label: "Words that go before WORK", words: ["HAND", "FIELD", "FOOT", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["POST", "BUSINESS", "BOAT", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 19,
    groups: [
      { label: "Lab equipment", words: ["BEAKER", "PIPETTE", "FLASK", "MICROSCOPE"], difficulty: 1, kind: "category", redHerring: "FLASK is also a small container for a drink, which can pull toward drinks." },
      { label: "Famous scientists", words: ["NEWTON", "CURIE", "DARWIN", "EINSTEIN"], difficulty: 2, kind: "category", redHerring: "NEWTON is also a unit of force, which fits the units group, and DARWIN is a city in Australia." },
      { label: "Words that go before BALL", words: ["PIN", "FIRE", "FOOT", "BASE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["GAS", "STAR", "FLASH", "SUN"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 20,
    groups: [
      { label: "Pirate things", words: ["PARROT", "EYEPATCH", "HOOK", "CUTLASS"], difficulty: 1, kind: "category", redHerring: "HOOK is also a fishing tool, which might pull you toward fishing." },
      { label: "Parts of a ship", words: ["HULL", "DECK", "MAST", "RUDDER"], difficulty: 2, kind: "category", redHerring: "DECK can also mean a deck of cards, a trap that pulls toward card games." },
      { label: "Words that go before STONE", words: ["KEY", "MOON", "LODE", "LIME"], difficulty: 3, kind: "wordplay", redHerring: "MOON and LIME also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["SPOT", "DAY", "GAS", "GREEN"], difficulty: 4, kind: "wordplay", redHerring: "MOON and LIME look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["MOON", "LIME"],
  },
  {
    id: 21,
    groups: [
      { label: "Norse gods", words: ["THOR", "ODIN", "LOKI", "FREYA"], difficulty: 1, kind: "category", redHerring: "LOKI is also a comic-book character, which could pull toward comics, but here he is a god." },
      { label: "Greek gods", words: ["ZEUS", "HERA", "ARES", "APOLLO"], difficulty: 2, kind: "category", redHerring: "APOLLO is also a famous moon mission, a trap for space words." },
      { label: "Words that go before BOARD", words: ["DASH", "CHEESE", "CUP", "CLIP"], difficulty: 3, kind: "wordplay", redHerring: "CHEESE and CUP also go before CAKE, so they can pull you toward that group." },
      { label: "Words that go before CAKE", words: ["FISH", "FRUIT", "RICE", "ANGEL"], difficulty: 4, kind: "wordplay", redHerring: "CHEESE and CUP look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["CHEESE", "CUP"],
  },
  {
    id: 22,
    groups: [
      { label: "Gemstones", words: ["RUBY", "OPAL", "JADE", "ONYX"], difficulty: 1, kind: "category", redHerring: "JADE is also a shade of green, so it can pull toward colours." },
      { label: "Rock types", words: ["GRANITE", "MARBLE", "SLATE", "BASALT"], difficulty: 2, kind: "category", redHerring: "MARBLE is also a glass toy, and SLATE is a verb for criticising, both traps." },
      { label: "Words that go before CAKE", words: ["CHEESE", "TEA", "FAIRY", "CUP"], difficulty: 3, kind: "wordplay", redHerring: "CHEESE and CUP also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["CHOPPING", "DART", "NOTICE", "CARD"], difficulty: 4, kind: "wordplay", redHerring: "CHEESE and CUP look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["CHEESE", "CUP"],
  },
  {
    id: 23,
    groups: [
      { label: "Small boats", words: ["KAYAK", "CANOE", "DINGHY", "YACHT"], difficulty: 1, kind: "category", redHerring: "CANOE is also a verb meaning to paddle, which could be a word trap." },
      { label: "Wheeled vehicles", words: ["SKATEBOARD", "TRAM", "WHEELBARROW", "SCOOTER"], difficulty: 2, kind: "category", redHerring: "TRAM runs on rails, which might pull toward railways, but it is a wheeled vehicle here." },
      { label: "Words that go before MAN", words: ["SALES", "FIRE", "FOOT", "BOAT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and BOAT also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["LIGHT", "GREEN", "HEN", "TREE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and BOAT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "BOAT"],
  },
  {
    id: 24,
    groups: [
      { label: "Footwear", words: ["SANDAL", "CLOG", "LOAFER", "BOOT"], difficulty: 1, kind: "category", redHerring: "BOOT can also mean to kick a ball, a verb trap toward sports." },
      { label: "Coats", words: ["PARKA", "ANORAK", "PONCHO", "CAPE"], difficulty: 2, kind: "category", redHerring: "CAPE is also a region of land, a geography trap." },
      { label: "Words that go before MAN", words: ["SNOW", "POLICE", "GUN", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "SNOW and FIRE also go before BALL, so they can pull you toward that group." },
      { label: "Words that go before BALL", words: ["PIN", "BASE", "HAND", "EYE"], difficulty: 4, kind: "wordplay", redHerring: "SNOW and FIRE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["SNOW", "FIRE"],
  },
  {
    id: 25,
    groups: [
      { label: "Languages", words: ["HINDI", "SWAHILI", "TAMIL", "FRENCH"], difficulty: 1, kind: "category", redHerring: "FRENCH is also a kind of fries or a style of bread, which pulls toward food." },
      { label: "Ways to talk idly", words: ["NATTER", "GOSSIP", "PRATTLE", "CHAT"], difficulty: 2, kind: "category", redHerring: "GOSSIP can also be a person who gossips, which might pull toward people words." },
      { label: "Words that go before FLY", words: ["FIRE", "GREEN", "HOVER", "CADDIS"], difficulty: 3, kind: "wordplay", redHerring: "GREEN and FIRE also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["FLOOD", "FOOT", "FLASH", "LIME"], difficulty: 4, kind: "wordplay", redHerring: "GREEN and FIRE look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["GREEN", "FIRE"],
  },
  {
    id: 26,
    groups: [
      { label: "Elements", words: ["CARBON", "OXYGEN", "HELIUM", "NEON"], difficulty: 1, kind: "category", redHerring: "NEON is also a colour and a sign style, so it can pull toward colours." },
      { label: "Subatomic particles", words: ["PROTON", "NEUTRON", "ELECTRON", "QUARK"], difficulty: 2, kind: "category", redHerring: "QUARK is also a soft cheese in German, a food trap." },
      { label: "Words that go before DOG", words: ["CORN", "WATER", "UNDER", "GUN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and GUN also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["FIRE", "SUPER", "BOAT", "POLICE"], difficulty: 4, kind: "wordplay", redHerring: "WATER and GUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "GUN"],
  },
  {
    id: 27,
    groups: [
      { label: "Breads", words: ["BAGUETTE", "CIABATTA", "FOCACCIA", "BAGEL"], difficulty: 1, kind: "category", redHerring: "BAGEL is also a breakfast item, which can pull toward a meal group." },
      { label: "Desserts", words: ["TRIFLE", "MOUSSE", "SORBET", "PUDDING"], difficulty: 2, kind: "category", redHerring: "TRIFLE is also a word for something unimportant, which can mislead you." },
      { label: "Words that go before STONE", words: ["MILE", "MOON", "LIME", "HAIL"], difficulty: 3, kind: "wordplay", redHerring: "LIME and MOON also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["FOOT", "FIRE", "FLOOD", "GREEN"], difficulty: 4, kind: "wordplay", redHerring: "LIME and MOON look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["LIME", "MOON"],
  },
  {
    id: 28,
    groups: [
      { label: "Insects", words: ["BEETLE", "MOTH", "WASP", "LADYBUG"], difficulty: 1, kind: "category", redHerring: "WASP is also a stinging creature, which can pull toward the stinging group." },
      { label: "Arachnids", words: ["SPIDER", "TICK", "SCORPION", "MITE"], difficulty: 2, kind: "category", redHerring: "TICK is also the sound a clock makes, a word trap." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "MOON", "STAR", "HEAD"], difficulty: 3, kind: "wordplay", redHerring: "STAR and MOON also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["CAT", "SAW", "LION", "DOG"], difficulty: 4, kind: "wordplay", redHerring: "STAR and MOON look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["STAR", "MOON"],
  },
  {
    id: 29,
    groups: [
      { label: "Types of tea", words: ["GREEN", "CHAI", "OOLONG", "MATCHA"], difficulty: 1, kind: "category", redHerring: "GREEN is also a colour, which can pull toward colours." },
      { label: "Things that are brewed", words: ["COFFEE", "BEER", "CIDER", "STORM"], difficulty: 2, kind: "category", redHerring: "STORM is brewed in the figurative sense, a trap toward weather words." },
      { label: "Words that go before BALL", words: ["MOTH", "HAND", "FIRE", "BEACH"], difficulty: 3, kind: "wordplay", redHerring: "HAND and FIRE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["HOUSE", "BRICK", "GUESS", "BODY"], difficulty: 4, kind: "wordplay", redHerring: "HAND and FIRE look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["HAND", "FIRE"],
  },
  {
    id: 30,
    groups: [
      { label: "Explorers", words: ["MAGELLAN", "COLUMBUS", "CORTES", "DRAKE"], difficulty: 1, kind: "category", redHerring: "DRAKE is also a male duck, a trap toward animals." },
      { label: "Male animals", words: ["BUCK", "BULL", "RAM", "STAG"], difficulty: 2, kind: "category", redHerring: "BUCK is also slang for a dollar, a trap toward money words." },
      { label: "Words that go before LIGHT", words: ["FIRE", "SPOT", "FOOT", "GAS"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before BALL, so they can pull you toward that group." },
      { label: "Words that go before BALL", words: ["BEACH", "SNOW", "MOTH", "MEAT"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 31,
    groups: [
      { label: "Nursery rhyme characters", words: ["JACK", "JILL", "HUMPTY", "BOPEEP"], difficulty: 1, kind: "category", redHerring: "JACK is also a playing card, which can pull toward card games." },
      { label: "Words that go before POT", words: ["FLOWER", "TEA", "HOT", "CRACK"], difficulty: 2, kind: "wordplay", redHerring: "TEA is also a drink, which can pull toward drinks." },
      { label: "Words that go before MAN", words: ["GUN", "FIRE", "SNOW", "FOOT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["MILL", "HOUSE", "PAPER", "FIELD"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 32,
    groups: [
      { label: "Ancient civilisations", words: ["AZTECS", "INCAS", "MAYANS", "EGYPTIANS"], difficulty: 1, kind: "category", redHerring: "EGYPTIANS built pyramids, which might pull toward the wonders group." },
      { label: "Ancient wonders", words: ["PYRAMID", "COLOSSUS", "LIGHTHOUSE", "MAUSOLEUM"], difficulty: 2, kind: "category", redHerring: "PYRAMID is also a shape, but the link here is the ancient wonders." },
      { label: "Words that go before DOG", words: ["SUN", "TOP", "WATER", "UNDER"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before BEAR, so they can pull you toward that group." },
      { label: "Words that go before BEAR", words: ["POLAR", "BROWN", "CARE", "HONEY"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 33,
    groups: [
      { label: "Portable lights", words: ["TORCH", "LAMP", "LANTERN", "CANDLE"], difficulty: 1, kind: "category", redHerring: "LAMP could be a fixed fitting, but the group is portable light sources." },
      { label: "Words that go before LIGHT", words: ["SPOT", "SUN", "HEAD", "FLASH"], difficulty: 2, kind: "wordplay", redHerring: "FLASH is also a light, which can pull toward the portable lights group." },
      { label: "Words that go before WORK", words: ["PAPER", "FIRE", "FOOT", "MILL"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before BALL, so they can pull you toward that group." },
      { label: "Words that go before BALL", words: ["SNOW", "PIN", "BEACH", "BASE"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 34,
    groups: [
      { label: "Things with teeth", words: ["COMB", "SAW", "ZIP", "GEAR"], difficulty: 1, kind: "category", redHerring: "ZIP is also a word for speed, a trap toward fast words." },
      { label: "Things with ears", words: ["CORN", "JUG", "RABBIT", "WHEAT"], difficulty: 2, kind: "category", redHerring: "CORN and WHEAT are crops, which could pull toward a food group." },
      { label: "Words that go before MAN", words: ["BOAT", "FIRE", "BUSINESS", "POST"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and BOAT also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["GLASS", "DOG", "HOT", "SUMMER"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and BOAT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "BOAT"],
  },
  {
    id: 35,
    groups: [
      { label: "Inventors", words: ["EDISON", "TESLA", "TURING", "BELL"], difficulty: 1, kind: "category", redHerring: "BELL is also a sound, which pulls toward the ringing group." },
      { label: "Things that ring", words: ["PHONE", "DOORBELL", "ALARM", "SIREN"], difficulty: 2, kind: "category", redHerring: "SIREN is also a mythical sea creature, a trap toward myth." },
      { label: "Words that go before HOUSE", words: ["WHITE", "FIRE", "BATH", "GREEN"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["FRUIT", "SAW", "HOUSE", "MAY"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 36,
    groups: [
      { label: "Things you roll", words: ["DICE", "EYES", "BALL", "DRUM"], difficulty: 1, kind: "category", redHerring: "EYES can be rolled, a surprising trap toward body parts." },
      { label: "Casino games", words: ["ROULETTE", "BLACKJACK", "KENO", "BACCARAT"], difficulty: 2, kind: "category", redHerring: "BLACKJACK is also a pirate flag, which can pull toward a pirate theme." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "FIRE", "GREEN", "GAS"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["WHITE", "DOG", "DOLL", "LIGHT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 37,
    groups: [
      { label: "Body joints", words: ["KNEE", "ANKLE", "WRIST", "HIP"], difficulty: 1, kind: "category", redHerring: "HIP is also slang for cool, a trap for style words." },
      { label: "Bones", words: ["SKULL", "FEMUR", "RIB", "TIBIA"], difficulty: 2, kind: "category", redHerring: "RIB is also a verb meaning to tease, which pulls toward the teasing group." },
      { label: "Words that go before FLY", words: ["FIRE", "HOUSE", "GREEN", "CADDIS"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["SPOT", "FOOT", "CANDLE", "MOON"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 38,
    groups: [
      { label: "Architectural features", words: ["ARCH", "DOME", "BUTTRESS", "COLUMN"], difficulty: 1, kind: "category", redHerring: "COLUMN is also a newspaper feature, a trap toward writing." },
      { label: "Church features", words: ["ALTAR", "PEW", "NAVE", "SPIRE"], difficulty: 2, kind: "category", redHerring: "SPIRE is also an architectural feature, which could pull toward the architecture group." },
      { label: "Words that go before DOG", words: ["BULL", "GUN", "HOT", "WATER"], difficulty: 3, kind: "wordplay", redHerring: "WATER and GUN also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["POST", "BAT", "FIRE", "SALES"], difficulty: 4, kind: "wordplay", redHerring: "WATER and GUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "GUN"],
  },
  {
    id: 39,
    groups: [
      { label: "Baby animals", words: ["CUB", "KID", "FOAL", "CALF"], difficulty: 1, kind: "category", redHerring: "KID is also slang for a child, a trap toward people." },
      { label: "Animal homes", words: ["SETT", "LAIR", "HIVE", "WARREN"], difficulty: 2, kind: "category", redHerring: "HIVE is also a busy place, a trap toward busy words." },
      { label: "Words that go before BEAR", words: ["CARE", "WATER", "SUN", "GUMMY"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["UNDER", "BULL", "GUN", "TOP"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 40,
    groups: [
      { label: "Famous ships", words: ["MAYFLOWER", "TITANIC", "BEAGLE", "VICTORY"], difficulty: 1, kind: "category", redHerring: "BEAGLE is also a dog breed, a trap toward dogs." },
      { label: "Things at sea", words: ["BUOY", "ANCHOR", "COMPASS", "TIDE"], difficulty: 2, kind: "category", redHerring: "COMPASS is also a range of subjects, which can pull toward school words." },
      { label: "Words that go before LIGHT", words: ["FIRE", "FOOT", "GAS", "GREEN"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["TEA", "TREE", "FIELD", "DOG"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 41,
    groups: [
      { label: "Fairy-tale things", words: ["BEANSTALK", "SLIPPER", "MIRROR", "CRUMB"], difficulty: 1, kind: "category", redHerring: "MIRROR is also a reflective glass, a trap toward light objects." },
      { label: "Vegetables", words: ["CARROT", "PARSNIP", "LEEK", "CELERY"], difficulty: 2, kind: "category", redHerring: "CARROT is also a bait, which can pull you toward the carrot-and-stick idea." },
      { label: "Words that go before WORK", words: ["MILL", "FOOT", "FIRE", "HAND"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["WEATHER", "POST", "SALES", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 42,
    groups: [
      { label: "Hairstyles", words: ["BRAID", "BOB", "MULLET", "PONYTAIL"], difficulty: 1, kind: "category", redHerring: "MULLET is also a fish, a trap toward the fish group." },
      { label: "Fish", words: ["TUNA", "SALMON", "HADDOCK", "MACKEREL"], difficulty: 2, kind: "category", redHerring: "SALMON is also a shade of pink, which can pull toward colours." },
      { label: "Words that go before BOARD", words: ["CHALK", "CHEESE", "CUP", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "CHEESE and CUP also go before CAKE, so they can pull you toward that group." },
      { label: "Words that go before CAKE", words: ["TEA", "OAT", "JOHNNY", "COFFEE"], difficulty: 4, kind: "wordplay", redHerring: "CHEESE and CUP look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["CHEESE", "CUP"],
  },
  {
    id: 43,
    groups: [
      { label: "Extinct animals", words: ["DODO", "MAMMOTH", "MOA", "AUROCHS"], difficulty: 1, kind: "category", redHerring: "MAMMOTH also means huge, a trap toward size words." },
      { label: "Words for huge", words: ["GIANT", "JUMBO", "VAST", "ENORMOUS"], difficulty: 2, kind: "category", redHerring: "JUMBO is also a large animal name, which can pull toward animals." },
      { label: "Words that go before WORK", words: ["FIRE", "GUESS", "HOUSE", "FOOT"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and FIRE also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["DRAGON", "CADDIS", "SAW", "GREEN"], difficulty: 4, kind: "wordplay", redHerring: "HOUSE and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["HOUSE", "FIRE"],
  },
  {
    id: 44,
    groups: [
      { label: "Sweets", words: ["TOFFEE", "FUDGE", "NOUGAT", "MARZIPAN"], difficulty: 1, kind: "category", redHerring: "FUDGE is also a word for a made-up or dodgy result, a trap for word lovers." },
      { label: "Dairy products", words: ["YOGURT", "BUTTER", "CREAM", "WHEY"], difficulty: 2, kind: "category", redHerring: "BUTTER is also a verb for flattering someone, a word trap." },
      { label: "Words that go before BEAR", words: ["GRIZZLY", "CARE", "WATER", "SUN"], difficulty: 3, kind: "wordplay", redHerring: "SUN and WATER also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["TOP", "UNDER", "GUN", "BULL"], difficulty: 4, kind: "wordplay", redHerring: "SUN and WATER look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["SUN", "WATER"],
  },
  {
    id: 45,
    groups: [
      { label: "Office supplies", words: ["STAPLER", "PAPERCLIP", "HIGHLIGHTER", "TAPE"], difficulty: 1, kind: "category", redHerring: "TAPE is also a cassette or recording, which can pull toward music." },
      { label: "Computer parts", words: ["MONITOR", "PROCESSOR", "MOTHERBOARD", "MOUSE"], difficulty: 2, kind: "category", redHerring: "MOUSE is also a desk accessory, which can pull toward the office group." },
      { label: "Words that go before CAKE", words: ["PAN", "CHEESE", "OAT", "CUP"], difficulty: 3, kind: "wordplay", redHerring: "CHEESE and CUP also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["CHOPPING", "DASH", "CHALK", "SWITCH"], difficulty: 4, kind: "wordplay", redHerring: "CHEESE and CUP look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["CHEESE", "CUP"],
  },
  {
    id: 46,
    groups: [
      { label: "Car body styles", words: ["SEDAN", "COUPE", "HATCHBACK", "ESTATE"], difficulty: 1, kind: "category", redHerring: "ESTATE is also a piece of land or property, a trap toward property words." },
      { label: "Car parts", words: ["BONNET", "FENDER", "CHASSIS", "BUMPER"], difficulty: 2, kind: "category", redHerring: "FENDER is also a guitar part, which can pull toward music." },
      { label: "Words that go before HOUSE", words: ["FIRE", "BOAT", "BATH", "TEA"], difficulty: 3, kind: "wordplay", redHerring: "BOAT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SALES", "SPIDER", "WATER", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "BOAT and FIRE look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["BOAT", "FIRE"],
  },
  {
    id: 47,
    groups: [
      { label: "Theatre features", words: ["STAGE", "CURTAIN", "ORCHESTRA", "BALCONY"], difficulty: 1, kind: "category", redHerring: "ORCHESTRA is also a group of musicians, which can pull toward music." },
      { label: "Parts of a play", words: ["ACT", "SCENE", "PROLOGUE", "EPILOGUE"], difficulty: 2, kind: "category", redHerring: "SCENE is also a view or a setting, which can pull toward landscapes." },
      { label: "Words that go before LIGHT", words: ["FOOT", "GREEN", "SUN", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before BALL, so they can pull you toward that group." },
      { label: "Words that go before BALL", words: ["PIN", "BEACH", "MEAT", "EYE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 48,
    groups: [
      { label: "Cartoon dogs", words: ["SNOOPY", "PLUTO", "GOOFY", "SCOOBY"], difficulty: 1, kind: "category", redHerring: "GOOFY is also an everyday adjective, which can pull toward words." },
      { label: "Cartoon cats", words: ["GARFIELD", "TOM", "FELIX", "SYLVESTER"], difficulty: 2, kind: "category", redHerring: "TOM is also a male cat, a trap toward cats in general." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "GREEN", "FOOT", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["PATCH", "BODY", "FIELD", "MILL"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 49,
    groups: [
      { label: "Very angry", words: ["FUMING", "IRATE", "LIVID", "SEETHING"], difficulty: 1, kind: "category", redHerring: "SEETHING can also mean bubbling as liquid boils, which pulls toward cooking." },
      { label: "Very happy", words: ["GLEE", "JOY", "ELATED", "CHEERFUL"], difficulty: 2, kind: "category", redHerring: "GLEE is also a singing show, which can pull toward music." },
      { label: "Words that go before HOUSE", words: ["GREEN", "DOLL", "DOG", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "GREEN and FIRE also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["CRANE", "CADDIS", "HOVER", "FRUIT"], difficulty: 4, kind: "wordplay", redHerring: "GREEN and FIRE look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["GREEN", "FIRE"],
  },
  {
    id: 50,
    groups: [
      { label: "Writing tools", words: ["PEN", "PENCIL", "CRAYON", "CHALK"], difficulty: 1, kind: "category", redHerring: "CHALK is also a white cliff rock, a trap toward geography." },
      { label: "Things that hold ink", words: ["CARTRIDGE", "INKWELL", "PRINTER", "MARKER"], difficulty: 2, kind: "category", redHerring: "MARKER is also a writing tool, which pulls toward the writing tools group." },
      { label: "Words that go before MAN", words: ["FOOT", "FIRE", "BOAT", "GUN"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["DAY", "GAS", "GREEN", "SUN"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 51,
    groups: [
      { label: "Shades of blue", words: ["NAVY", "AZURE", "COBALT", "TEAL"], difficulty: 1, kind: "category", redHerring: "TEAL is also a small duck, which can pull toward birds." },
      { label: "Shades of red", words: ["CRIMSON", "SCARLET", "MAROON", "RUST"], difficulty: 2, kind: "category", redHerring: "RUST is also a metal decay, which can pull toward metals." },
      { label: "Words that go before STONE", words: ["HEAD", "MILL", "KEY", "SAND"], difficulty: 3, kind: "wordplay", redHerring: "KEY and HEAD also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["CHALK", "CARD", "RUNNING", "SCORE"], difficulty: 4, kind: "wordplay", redHerring: "KEY and HEAD look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["KEY", "HEAD"],
  },
  {
    id: 52,
    groups: [
      { label: "Desert features", words: ["OASIS", "DUNE", "MESA", "WADI"], difficulty: 1, kind: "category", redHerring: "MESA means table in Spanish, a trap toward furniture." },
      { label: "Desert animals", words: ["CAMEL", "GECKO", "JACKAL", "MEERKAT"], difficulty: 2, kind: "category", redHerring: "JACKAL is also slang for a person who does another's work, a word trap." },
      { label: "Words that go before DOG", words: ["WATER", "TOP", "GUN", "SUN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before BEAR, so they can pull you toward that group." },
      { label: "Words that go before BEAR", words: ["CARE", "GUMMY", "POLAR", "GRIZZLY"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 53,
    groups: [
      { label: "Words from Hindi", words: ["BUNGALOW", "JUNGLE", "SHAMPOO", "LOOT"], difficulty: 1, kind: "category", redHerring: "LOOT is also a heist word, which can pull toward crime." },
      { label: "Words from Japanese", words: ["TSUNAMI", "ORIGAMI", "KARAOKE", "BONSAI"], difficulty: 2, kind: "category", redHerring: "BONSAI is also a small tree, which can pull toward trees." },
      { label: "Words that go before HOUSE", words: ["FIRE", "HOT", "FIELD", "TREE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FIELD also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["BRICK", "CLOCK", "PATCH", "BODY"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FIELD look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIRE", "FIELD"],
  },
  {
    id: 54,
    groups: [
      { label: "Fairground rides", words: ["CAROUSEL", "DODGEMS", "TEACUPS", "ROLLERCOASTER"], difficulty: 1, kind: "category", redHerring: "TEACUPS are also crockery, which can pull toward the kitchen." },
      { label: "Fair food", words: ["CANDYFLOSS", "POPCORN", "NACHOS", "HOTDOG"], difficulty: 2, kind: "category", redHerring: "HOTDOG is also a sausage, which can pull toward meat." },
      { label: "Words that go before BALL", words: ["SNOW", "HAND", "BASE", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "HAND and FIRE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["CLOCK", "BODY", "HOUSE", "FIELD"], difficulty: 4, kind: "wordplay", redHerring: "HAND and FIRE look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["HAND", "FIRE"],
  },
  {
    id: 55,
    groups: [
      { label: "Birds of prey", words: ["FALCON", "OSPREY", "EAGLE", "OWL"], difficulty: 1, kind: "category", redHerring: "FALCON is also a spacecraft name, which can pull toward space." },
      { label: "Things with wings", words: ["PLANE", "HOSPITAL", "PALACE", "THEATRE"], difficulty: 2, kind: "category", redHerring: "PLANE is also a flat surface, which can pull toward the flat group." },
      { label: "Words that go before BEAR", words: ["GRIZZLY", "WATER", "TEDDY", "SUN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["TOP", "GUN", "BULL", "UNDER"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 56,
    groups: [
      { label: "Nuts", words: ["ALMOND", "CASHEW", "PECAN", "WALNUT"], difficulty: 1, kind: "category", redHerring: "CASHEW is also a colour name, which can pull toward colours." },
      { label: "Things that can be cracked", words: ["JOKE", "CODE", "SAFE", "EGG"], difficulty: 2, kind: "category", redHerring: "EGG is also a food, which can pull toward the food groups." },
      { label: "Words that go before LIGHT", words: ["GREEN", "FIRE", "FOOT", "FLOOD"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["MAY", "CADDIS", "HORSE", "HOUSE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 57,
    groups: [
      { label: "Things in a library", words: ["SHELF", "INDEX", "CATALOGUE", "BOOKMARK"], difficulty: 1, kind: "category", redHerring: "INDEX is also a finger, which can pull toward body parts." },
      { label: "Parts of a book", words: ["SPINE", "PREFACE", "CHAPTER", "GLOSSARY"], difficulty: 2, kind: "category", redHerring: "SPINE is also a prickly thorn, which can pull toward plants." },
      { label: "Words that go before MAN", words: ["FIRE", "GUN", "WATER", "BAT"], difficulty: 3, kind: "wordplay", redHerring: "GUN and WATER also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["CORN", "TOP", "PRAIRIE", "BULL"], difficulty: 4, kind: "wordplay", redHerring: "GUN and WATER look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["GUN", "WATER"],
  },
  {
    id: 58,
    groups: [
      { label: "Things you can pitch", words: ["TENT", "BALL", "VOICE", "SALES"], difficulty: 1, kind: "category", redHerring: "TENT is also a circus structure, which can pull toward the circus." },
      { label: "Camping gear", words: ["STOVE", "HAMMOCK", "COMPASS", "KETTLE"], difficulty: 2, kind: "category", redHerring: "KETTLE is also a kitchen item, which can pull toward the kitchen." },
      { label: "Words that go before BEAR", words: ["SUN", "TEDDY", "WATER", "CARE"], difficulty: 3, kind: "wordplay", redHerring: "SUN and WATER also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["BULL", "HOT", "UNDER", "GUN"], difficulty: 4, kind: "wordplay", redHerring: "SUN and WATER look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["SUN", "WATER"],
  },
  {
    id: 59,
    groups: [
      { label: "Organs of the body", words: ["LIVER", "KIDNEY", "LUNG", "STOMACH"], difficulty: 1, kind: "category", redHerring: "STOMACH is also a verb meaning to tolerate, a word trap." },
      { label: "Parts of a cell", words: ["NUCLEUS", "MEMBRANE", "RIBOSOME", "VACUOLE"], difficulty: 2, kind: "category", redHerring: "NUCLEUS is also a physics word, which can pull toward atoms." },
      { label: "Words that go before HOUSE", words: ["BOAT", "FIRE", "DOG", "LIGHT"], difficulty: 3, kind: "wordplay", redHerring: "BOAT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["WATER", "SNOW", "WEATHER", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "BOAT and FIRE look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["BOAT", "FIRE"],
  },
  {
    id: 60,
    groups: [
      { label: "Types of bear", words: ["POLAR", "GRIZZLY", "PANDA", "SLOTH"], difficulty: 1, kind: "category", redHerring: "SLOTH is also an animal and a sin, but the sloth bear is a real bear." },
      { label: "Words that go before BEAR", words: ["TEDDY", "GUMMY", "HONEY", "SUN"], difficulty: 2, kind: "wordplay", redHerring: "HONEY is also a food, which can pull toward the food groups." },
      { label: "Words that go before BOARD", words: ["CHALK", "SCORE", "KEY", "HEAD"], difficulty: 3, kind: "wordplay", redHerring: "HEAD and KEY also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["HAIL", "MILE", "SAND", "MOON"], difficulty: 4, kind: "wordplay", redHerring: "HEAD and KEY look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["HEAD", "KEY"],
  },
  {
    id: 61,
    groups: [
      { label: "Pets", words: ["HAMSTER", "GERBIL", "BUDGIE", "GUPPY"], difficulty: 1, kind: "category", redHerring: "GERBIL is also a rodent, so it could sit in the rodents group." },
      { label: "Rodents", words: ["BEAVER", "VOLE", "SHREW", "LEMMING"], difficulty: 2, kind: "category", redHerring: "LEMMING is also a phrase for following the crowd, a trap for idioms." },
      { label: "Words that go before BALL", words: ["MOTH", "GUM", "FOOT", "SNOW"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and SNOW also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SEA", "GUN", "SUPER", "AIR"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and SNOW look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FOOT", "SNOW"],
  },
  {
    id: 62,
    groups: [
      { label: "Winds", words: ["BREEZE", "GALE", "MISTRAL", "SIROCCO"], difficulty: 1, kind: "category", redHerring: "GALE is also a sudden burst of laughter, a trap toward laughter." },
      { label: "Dinosaurs", words: ["RAPTOR", "DIPLODOCUS", "IGUANODON", "PTERODACTYL"], difficulty: 2, kind: "category", redHerring: "RAPTOR is also a bird of prey, which might pull you toward birds." },
      { label: "Words that go before LIGHT", words: ["NIGHT", "LIME", "MOON", "STAR"], difficulty: 3, kind: "wordplay", redHerring: "STAR and MOON also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["SWORD", "MUD", "JELLY", "ANGEL"], difficulty: 4, kind: "wordplay", redHerring: "STAR and MOON look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["STAR", "MOON"],
  },
  {
    id: 63,
    groups: [
      { label: "Shrubs", words: ["HOLLY", "HEATHER", "LILAC", "JASMINE"], difficulty: 1, kind: "category", redHerring: "HEATHER is also a girl's name, a trap toward names." },
      { label: "Zodiac signs", words: ["ARIES", "LEO", "LIBRA", "VIRGO"], difficulty: 2, kind: "category", redHerring: "LIBRA is also a set of scales, a trap toward weighing." },
      { label: "Words that go before FISH", words: ["PARROT", "DOG", "MUD", "ANGEL"], difficulty: 3, kind: "wordplay", redHerring: "ANGEL and MUD also go before CAKE, so they can pull you toward that group." },
      { label: "Words that go before CAKE", words: ["SPONGE", "FISH", "TEA", "FAIRY"], difficulty: 4, kind: "wordplay", redHerring: "ANGEL and MUD look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["ANGEL", "MUD"],
  },
  {
    id: 64,
    groups: [
      { label: "Hair accessories", words: ["SCRUNCHIE", "HAIRPIN", "TIARA", "HEADBAND"], difficulty: 1, kind: "category", redHerring: "TIARA is also a piece of jewellery, which pulls toward the jewellery group." },
      { label: "Jewellery", words: ["BRACELET", "NECKLACE", "BROOCH", "ANKLET"], difficulty: 2, kind: "category", redHerring: "BROOCH is also a clasp for fastening, a trap toward fastenings." },
      { label: "Words that go before FLY", words: ["BLOW", "CADDIS", "STONE", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "STONE and FIRE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["CLOCK", "HOME", "PATCH", "FIELD"], difficulty: 4, kind: "wordplay", redHerring: "STONE and FIRE look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["STONE", "FIRE"],
  },
  {
    id: 65,
    groups: [
      { label: "Pizza toppings", words: ["PEPPERONI", "ANCHOVY", "SALAMI", "PINEAPPLE"], difficulty: 1, kind: "category", redHerring: "SALAMI is also a sausage, a trap toward meat." },
      { label: "Breakfast cereals", words: ["CORNFLAKES", "MUESLI", "PORRIDGE", "GRANOLA"], difficulty: 2, kind: "category", redHerring: "CORNFLAKES contains corn, a trap toward crops." },
      { label: "Words that go before MAN", words: ["GUN", "SPACE", "AIR", "SUPER"], difficulty: 3, kind: "wordplay", redHerring: "AIR and SPACE also go before SHIP, so they can pull you toward that group." },
      { label: "Words that go before SHIP", words: ["OWNER", "PARTNER", "FRIEND", "HARD"], difficulty: 4, kind: "wordplay", redHerring: "AIR and SPACE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["AIR", "SPACE"],
  },
  {
    id: 66,
    groups: [
      { label: "Composers", words: ["MOZART", "CHOPIN", "HAYDN", "BACH"], difficulty: 1, kind: "category", redHerring: "BACH is also the German word for a stream, a trap toward water." },
      { label: "Writers", words: ["DICKENS", "TWAIN", "ORWELL", "CHEKHOV"], difficulty: 2, kind: "category", redHerring: "TWAIN is also a number, a trap toward maths." },
      { label: "Words that go before WORK", words: ["FIRE", "FOOT", "BODY", "BRICK"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["GUN", "AIR", "SUPER", "MILK"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 67,
    groups: [
      { label: "Sports", words: ["CRICKET", "BADMINTON", "JUDO", "KARATE"], difficulty: 1, kind: "category", redHerring: "CRICKET is also an insect, a trap toward insects." },
      { label: "Cricket terms", words: ["WICKET", "STUMP", "YORKER", "GULLY"], difficulty: 2, kind: "category", redHerring: "GULLY is also a small ravine, a trap toward geography." },
      { label: "Words that go before LIGHT", words: ["FIRE", "FOOT", "CANDLE", "BACK"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before BALL, so they can pull you toward that group." },
      { label: "Words that go before BALL", words: ["GUM", "SNOW", "PIN", "MEAT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 68,
    groups: [
      { label: "Metric units", words: ["GRAM", "LITRE", "TONNE", "METRE"], difficulty: 1, kind: "category", redHerring: "METRE is also a rhythm in poetry, a trap toward poetry." },
      { label: "Solid shapes", words: ["CUBE", "CONE", "CYLINDER", "TORUS"], difficulty: 2, kind: "category", redHerring: "CONE is also a traffic marker, a trap toward roads." },
      { label: "Words that go before CAKE", words: ["COFFEE", "PAN", "ANGEL", "MUD"], difficulty: 3, kind: "wordplay", redHerring: "ANGEL and MUD also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["STAR", "CLOWN", "GOLD", "LION"], difficulty: 4, kind: "wordplay", redHerring: "ANGEL and MUD look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["ANGEL", "MUD"],
  },
  {
    id: 69,
    groups: [
      { label: "Tropical fruit", words: ["GUAVA", "PAPAYA", "LYCHEE", "DURIAN"], difficulty: 1, kind: "category", redHerring: "DURIAN is famously smelly, a trap toward strong smells." },
      { label: "Seeds", words: ["SESAME", "POPPY", "CHIA", "FLAX"], difficulty: 2, kind: "category", redHerring: "POPPY is also a flower, a trap toward flowers." },
      { label: "Words that go before MAN", words: ["POLICE", "SPACE", "AIR", "SEA"], difficulty: 3, kind: "wordplay", redHerring: "SPACE and AIR also go before SHIP, so they can pull you toward that group." },
      { label: "Words that go before SHIP", words: ["KIN", "RELATION", "WAR", "HARD"], difficulty: 4, kind: "wordplay", redHerring: "SPACE and AIR look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["SPACE", "AIR"],
  },
  {
    id: 70,
    groups: [
      { label: "Sea mammals", words: ["DOLPHIN", "WALRUS", "MANATEE", "NARWHAL"], difficulty: 1, kind: "category", redHerring: "WALRUS is also a large moustache, a trap toward facial hair." },
      { label: "Snakes", words: ["ADDER", "MAMBA", "PYTHON", "BOA"], difficulty: 2, kind: "category", redHerring: "PYTHON is also a programming language, a trap toward computing." },
      { label: "Words that go before STONE", words: ["HEAD", "HAIL", "LIME", "BLOOD"], difficulty: 3, kind: "wordplay", redHerring: "LIME and HEAD also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["SPOT", "NIGHT", "CANDLE", "SUN"], difficulty: 4, kind: "wordplay", redHerring: "LIME and HEAD look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["LIME", "HEAD"],
  },
  {
    id: 71,
    groups: [
      { label: "Landforms", words: ["CANYON", "FJORD", "ISTHMUS", "PLATEAU"], difficulty: 1, kind: "category", redHerring: "PLATEAU is also a flat stage of progress, a trap toward progress words." },
      { label: "Teeth", words: ["MOLAR", "INCISOR", "CANINE", "PREMOLAR"], difficulty: 2, kind: "category", redHerring: "CANINE is also a dog, a trap toward dogs." },
      { label: "Words that go before DOG", words: ["WATER", "GUN", "HOT", "CORN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and GUN also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["BOAT", "MILK", "SPACE", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "WATER and GUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "GUN"],
  },
  {
    id: 72,
    groups: [
      { label: "Greek heroes", words: ["ACHILLES", "HERCULES", "JASON", "ODYSSEUS"], difficulty: 1, kind: "category", redHerring: "JASON is also a common first name, a trap toward names." },
      { label: "Magic items", words: ["WAND", "SPELL", "CAULDRON", "BROOM"], difficulty: 2, kind: "category", redHerring: "SPELL is also a word for a period of time, a trap toward time." },
      { label: "Words that go before BOARD", words: ["CHALK", "BREAD", "HEAD", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "KEY and HEAD also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["MILL", "LODE", "MILE", "MOON"], difficulty: 4, kind: "wordplay", redHerring: "KEY and HEAD look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["KEY", "HEAD"],
  },
  {
    id: 73,
    groups: [
      { label: "Garden tools", words: ["RAKE", "HOE", "TROWEL", "SHOVEL"], difficulty: 1, kind: "category", redHerring: "HOE rhymes with toe, a sound trap toward body parts." },
      { label: "Fasteners", words: ["RIVET", "SCREW", "NAIL", "BOLT"], difficulty: 2, kind: "category", redHerring: "NAIL is also a body part, a trap toward body words." },
      { label: "Words that go before BALL", words: ["FOOT", "MOTH", "BEACH", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "HEAD", "SPOT", "NIGHT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 74,
    groups: [
      { label: "Castle features", words: ["MOAT", "DRAWBRIDGE", "PORTCULLIS", "BATTLEMENT"], difficulty: 1, kind: "category", redHerring: "MOAT is also a ditch, a trap toward ditches." },
      { label: "Boxing terms", words: ["JAB", "UPPERCUT", "KNOCKOUT", "ROUND"], difficulty: 2, kind: "category", redHerring: "ROUND is also a shape, a trap toward shapes." },
      { label: "Words that go before BEAR", words: ["GUMMY", "SUN", "BROWN", "WATER"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["LAP", "PRAIRIE", "WAR", "GUN"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 75,
    groups: [
      { label: "Airport features", words: ["TERMINAL", "RUNWAY", "HANGAR", "GATE"], difficulty: 1, kind: "category", redHerring: "GATE is also a fence opening, a trap toward fences." },
      { label: "Train parts", words: ["CARRIAGE", "LOCOMOTIVE", "BUFFER", "CABOOSE"], difficulty: 2, kind: "category", redHerring: "CARRIAGE is also a horse-drawn vehicle, a trap toward carriages." },
      { label: "Words that go before CAKE", words: ["CUP", "CHEESE", "ANGEL", "CARROT"], difficulty: 3, kind: "wordplay", redHerring: "CHEESE and CUP also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["CHALK", "DASH", "BLACK", "SOUND"], difficulty: 4, kind: "wordplay", redHerring: "CHEESE and CUP look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["CHEESE", "CUP"],
  },
  {
    id: 76,
    groups: [
      { label: "Knitting and needlecraft", words: ["PURL", "KNIT", "CROCHET", "TATTING"], difficulty: 1, kind: "category", redHerring: "KNIT is also a word for a bone healing, a trap toward medicine." },
      { label: "Fairy creatures", words: ["PIXIE", "ELF", "GOBLIN", "SPRITE"], difficulty: 2, kind: "category", redHerring: "SPRITE is also a fizzy drink, a trap toward drinks." },
      { label: "Words that go before BOARD", words: ["SKATE", "SURF", "HEAD", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "KEY and HEAD also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["MILL", "MILE", "GRAVE", "BLOOD"], difficulty: 4, kind: "wordplay", redHerring: "KEY and HEAD look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["KEY", "HEAD"],
  },
  {
    id: 77,
    groups: [
      { label: "Fish", words: ["HERRING", "PIKE", "CARP", "MARLIN"], difficulty: 1, kind: "category", redHerring: "PIKE is also a medieval weapon, a trap toward weapons." },
      { label: "Newspaper sections", words: ["HEADLINE", "EDITORIAL", "OBITUARY", "CLASSIFIEDS"], difficulty: 2, kind: "category", redHerring: "EDITORIAL is also an opinion piece, a trap toward writing." },
      { label: "Words that go before FLY", words: ["STONE", "MAY", "BLOW", "HOUSE"], difficulty: 3, kind: "wordplay", redHerring: "STONE and HOUSE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["PAPER", "PATCH", "HOME", "ROAD"], difficulty: 4, kind: "wordplay", redHerring: "STONE and HOUSE look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["STONE", "HOUSE"],
  },
  {
    id: 78,
    groups: [
      { label: "Knots", words: ["BOWLINE", "HITCH", "SHEEPSHANK", "GRANNY"], difficulty: 1, kind: "category", redHerring: "HITCH is also a snag or a problem, a trap toward problems." },
      { label: "Thieves", words: ["BURGLAR", "ROBBER", "PICKPOCKET", "BANDIT"], difficulty: 2, kind: "category", redHerring: "BANDIT is also a slot machine, a trap toward gambling." },
      { label: "Words that go before FISH", words: ["SUN", "MOON", "LION", "DOG"], difficulty: 3, kind: "wordplay", redHerring: "SUN and MOON also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["GAS", "BACK", "CANDLE", "NIGHT"], difficulty: 4, kind: "wordplay", redHerring: "SUN and MOON look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["SUN", "MOON"],
  },
  {
    id: 79,
    groups: [
      { label: "Volcano parts", words: ["CRATER", "MAGMA", "LAVA", "VENT"], difficulty: 1, kind: "category", redHerring: "VENT is also a way to express feelings, a trap toward emotions." },
      { label: "Types of rain", words: ["DRIZZLE", "DOWNPOUR", "SHOWER", "MIZZLE"], difficulty: 2, kind: "category", redHerring: "SHOWER is also a bathroom fitting, a trap toward bathrooms." },
      { label: "Words that go before BOARD", words: ["HEAD", "SCORE", "CUP", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "HEAD and KEY also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["CORNER", "MILL", "BRIM", "LIME"], difficulty: 4, kind: "wordplay", redHerring: "HEAD and KEY look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["HEAD", "KEY"],
  },
  {
    id: 80,
    groups: [
      { label: "Shellfish", words: ["LOBSTER", "PRAWN", "MUSSEL", "SCALLOP"], difficulty: 1, kind: "category", redHerring: "SCALLOP is also a wavy sewing edge, a trap toward sewing." },
      { label: "Parts of a fish", words: ["GILL", "FIN", "SCALE", "FLUKE"], difficulty: 2, kind: "category", redHerring: "FLUKE is also a lucky chance, a trap toward luck." },
      { label: "Words that go before MAN", words: ["SALES", "FIRE", "WEATHER", "BOAT"], difficulty: 3, kind: "wordplay", redHerring: "BOAT and FIRE also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["GREEN", "FIELD", "WHITE", "ICE"], difficulty: 4, kind: "wordplay", redHerring: "BOAT and FIRE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["BOAT", "FIRE"],
  },
  {
    id: 81,
    groups: [
      { label: "Cookies", words: ["SHORTBREAD", "MACAROON", "BROWNIE", "FLAPJACK"], difficulty: 1, kind: "category", redHerring: "BROWNIE is also a small elf, a trap toward fairy creatures." },
      { label: "Pastry types", words: ["PUFF", "FILO", "CHOUX", "SHORTCRUST"], difficulty: 2, kind: "category", redHerring: "CHOUX is a French word for cabbage, a trap toward vegetables." },
      { label: "Words that go before HOUSE", words: ["DOG", "GREEN", "FIRE", "LIGHT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["CRANE", "BLOW", "HORSE", "STONE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 82,
    groups: [
      { label: "Bright stars", words: ["SIRIUS", "VEGA", "POLARIS", "ALTAIR"], difficulty: 1, kind: "category", redHerring: "VEGA is also a car make, a trap toward cars." },
      { label: "Space missions", words: ["GEMINI", "VOYAGER", "MARINER", "SOYUZ"], difficulty: 2, kind: "category", redHerring: "GEMINI is also a star sign, a trap toward the zodiac." },
      { label: "Words that go before FISH", words: ["BUTTER", "MOON", "STAR", "SAW"], difficulty: 3, kind: "wordplay", redHerring: "SAW and BUTTER also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["BLOW", "FIRE", "CADDIS", "DRAGON"], difficulty: 4, kind: "wordplay", redHerring: "SAW and BUTTER look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["SAW", "BUTTER"],
  },
  {
    id: 83,
    groups: [
      { label: "Jobs", words: ["BAKER", "PLUMBER", "SURGEON", "MASON"], difficulty: 1, kind: "category", redHerring: "MASON is also a freemason, a trap toward secret societies." },
      { label: "Medieval roles", words: ["SQUIRE", "HERALD", "JESTER", "STEWARD"], difficulty: 2, kind: "category", redHerring: "SQUIRE is also a country gentleman, a trap toward the countryside." },
      { label: "Words that go before MAN", words: ["MILK", "FIRE", "AIR", "FOOT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["GUESS", "WOOD", "BRICK", "CLOCK"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 84,
    groups: [
      { label: "Trees", words: ["CEDAR", "WILLOW", "CYPRESS", "BEECH"], difficulty: 1, kind: "category", redHerring: "WILLOW is also a name, a trap toward names." },
      { label: "Parts of a tree", words: ["BARK", "ROOT", "TRUNK", "BRANCH"], difficulty: 2, kind: "category", redHerring: "BRANCH is also a bank office, a trap toward money." },
      { label: "Words that go before MAN", words: ["FOOT", "SPACE", "FIRE", "BOAT"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["TEAM", "CLOCK", "HAND", "HOME"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 85,
    groups: [
      { label: "Sea life", words: ["KELP", "ALGAE", "CORAL", "PLANKTON"], difficulty: 1, kind: "category", redHerring: "CORAL is also a colour, a trap toward colours." },
      { label: "Gases", words: ["NITROGEN", "HYDROGEN", "ARGON", "METHANE"], difficulty: 2, kind: "category", redHerring: "ARGON is also a name, a trap toward names." },
      { label: "Words that go before FISH", words: ["MUD", "ANGEL", "JELLY", "STAR"], difficulty: 3, kind: "wordplay", redHerring: "ANGEL and MUD also go before CAKE, so they can pull you toward that group." },
      { label: "Words that go before CAKE", words: ["SPONGE", "CARROT", "CHEESE", "OAT"], difficulty: 4, kind: "wordplay", redHerring: "ANGEL and MUD look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["ANGEL", "MUD"],
  },
  {
    id: 86,
    groups: [
      { label: "Wind instruments", words: ["BAGPIPES", "OCARINA", "KAZOO", "HARMONICA"], difficulty: 1, kind: "category", redHerring: "HARMONICA is also a mouth-blown instrument, a trap toward the other instruments." },
      { label: "Empty", words: ["VACANT", "BARE", "HOLLOW", "VOID"], difficulty: 2, kind: "category", redHerring: "HOLLOW is also a valley, a trap toward landscape." },
      { label: "Words that go before LIGHT", words: ["LIME", "SIDE", "HEAD", "DAY"], difficulty: 3, kind: "wordplay", redHerring: "SIDE and HEAD also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["SKATE", "KEY", "CHEESE", "NOTICE"], difficulty: 4, kind: "wordplay", redHerring: "SIDE and HEAD look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["SIDE", "HEAD"],
  },
  {
    id: 87,
    groups: [
      { label: "Dog breeds", words: ["SPANIEL", "TERRIER", "DACHSHUND", "CORGI"], difficulty: 1, kind: "category", redHerring: "DACHSHUND is also a long, low dog, a trap toward length." },
      { label: "Vegetables", words: ["TURNIP", "BEETROOT", "SPINACH", "COURGETTE"], difficulty: 2, kind: "category", redHerring: "BEETROOT is also a deep red colour, a trap toward colours." },
      { label: "Words that go before STONE", words: ["LIME", "CORNER", "BLOOD", "MOON"], difficulty: 3, kind: "wordplay", redHerring: "LIME and MOON also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["CANDLE", "SIDE", "GREEN", "GAS"], difficulty: 4, kind: "wordplay", redHerring: "LIME and MOON look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["LIME", "MOON"],
  },
  {
    id: 88,
    groups: [
      { label: "Shades of grey", words: ["CHARCOAL", "PEWTER", "GRAPHITE", "SILVER"], difficulty: 1, kind: "category", redHerring: "SILVER is also a precious metal, a trap toward metals." },
      { label: "Words that go before ROOM", words: ["BED", "CLASS", "MUSH", "STOCK"], difficulty: 2, kind: "wordplay", redHerring: "MUSH could be food, a trap toward food." },
      { label: "Words that go before WORK", words: ["FOOT", "LEG", "FIRE", "PATCH"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["GAS", "HEAD", "GREEN", "FLOOD"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 89,
    groups: [
      { label: "Dances", words: ["MAMBO", "RUMBA", "FOXTROT", "CANCAN"], difficulty: 1, kind: "category", redHerring: "FOXTROT is also a letter in the phonetic alphabet, a trap toward letters." },
      { label: "Fish", words: ["SARDINE", "TURBOT", "GUDGEON", "SKATE"], difficulty: 2, kind: "category", redHerring: "SKATE is also a sport on wheels, a trap toward sports." },
      { label: "Words that go before BEAR", words: ["SUN", "WATER", "TEDDY", "GUMMY"], difficulty: 3, kind: "wordplay", redHerring: "SUN and WATER also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["SEA", "WATCH", "HOT", "BULL"], difficulty: 4, kind: "wordplay", redHerring: "SUN and WATER look like they fit this group, but they belong with BEAR." },
    ],
    decoys: ["SUN", "WATER"],
  },
  {
    id: 90,
    groups: [
      { label: "Words that go before SHOW", words: ["ROAD", "TALENT", "GAME", "TRADE"], difficulty: 1, kind: "wordplay", redHerring: "ROAD is also a path, a trap toward travel." },
      { label: "Table settings", words: ["KNIFE", "FORK", "SPOON", "NAPKIN"], difficulty: 2, kind: "category", redHerring: "FORK is also a split in a road, a trap toward roads." },
      { label: "Words that go before MAN", words: ["SUPER", "FIRE", "FOOT", "BUSINESS"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["FLASH", "GREEN", "SIDE", "STAR"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 91,
    groups: [
      { label: "Large birds", words: ["PELICAN", "FLAMINGO", "OSTRICH", "EMU"], difficulty: 1, kind: "category", redHerring: "FLAMINGO is also a bright pink colour, a trap toward colours." },
      { label: "Plants", words: ["FERN", "MOSS", "LICHEN", "IVY"], difficulty: 2, kind: "category", redHerring: "IVY is also a famous university league, a trap toward education." },
      { label: "Words that go before WORK", words: ["GUESS", "HOUSE", "STONE", "LEG"], difficulty: 3, kind: "wordplay", redHerring: "STONE and HOUSE also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["CADDIS", "SAW", "BLOW", "HOVER"], difficulty: 4, kind: "wordplay", redHerring: "STONE and HOUSE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["STONE", "HOUSE"],
  },
  {
    id: 92,
    groups: [
      { label: "Stage directions", words: ["ENTER", "EXIT", "ASIDE", "CUE"], difficulty: 1, kind: "category", redHerring: "CUE is also a snooker stick, a trap toward snooker." },
      { label: "Snooker terms", words: ["BREAK", "SAFETY", "CANNON", "REST"], difficulty: 2, kind: "category", redHerring: "REST is also a pause or a support, a trap toward support words." },
      { label: "Words that go before MAN", words: ["SPIDER", "SPACE", "SNOW", "AIR"], difficulty: 3, kind: "wordplay", redHerring: "SPACE and AIR also go before SHIP, so they can pull you toward that group." },
      { label: "Words that go before SHIP", words: ["KIN", "RELATION", "FLAG", "FELLOW"], difficulty: 4, kind: "wordplay", redHerring: "SPACE and AIR look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["SPACE", "AIR"],
  },
  {
    id: 93,
    groups: [
      { label: "Mythical beasts", words: ["CENTAUR", "MINOTAUR", "CHIMERA", "HYDRA"], difficulty: 1, kind: "category", redHerring: "HYDRA is also a freshwater animal, a trap toward nature." },
      { label: "Coins", words: ["NICKEL", "DIME", "QUARTER", "DOUBLOON"], difficulty: 2, kind: "category", redHerring: "QUARTER is also a part of an hour, a trap toward time." },
      { label: "Words that go before BALL", words: ["EYE", "FOOT", "FIRE", "GUM"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["BUSINESS", "OLD", "SPACE", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 94,
    groups: [
      { label: "Horses", words: ["PONY", "STALLION", "MARE", "COLT"], difficulty: 1, kind: "category", redHerring: "PONY is also a small horse, a trap toward size words." },
      { label: "Musicals", words: ["CATS", "EVITA", "GREASE", "ANNIE"], difficulty: 2, kind: "category", redHerring: "ANNIE is also a common name, a trap toward names." },
      { label: "Words that go before MAN", words: ["AIR", "SPIDER", "SEA", "GUN"], difficulty: 3, kind: "wordplay", redHerring: "GUN and SEA also go before DOG, so they can pull you toward that group." },
      { label: "Words that go before DOG", words: ["SUN", "SHEEP", "LAP", "SLED"], difficulty: 4, kind: "wordplay", redHerring: "GUN and SEA look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["GUN", "SEA"],
  },
  {
    id: 95,
    groups: [
      { label: "Bicycle parts", words: ["SPOKE", "SADDLE", "PEDAL", "HANDLEBAR"], difficulty: 1, kind: "category", redHerring: "SADDLE is also a horse's seat, a trap toward horses." },
      { label: "Spreads", words: ["MARMALADE", "JAM", "CURD", "PATE"], difficulty: 2, kind: "category", redHerring: "CURD is also a verb meaning to thicken, a word trap." },
      { label: "Words that go before BALL", words: ["MOTH", "FOOT", "FIRE", "HAND"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["LIME", "SPOT", "DAY", "SUN"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 96,
    groups: [
      { label: "Ways to cook eggs", words: ["POACH", "SCRAMBLE", "OMELETTE", "FRITTATA"], difficulty: 1, kind: "category", redHerring: "SCRAMBLE is also a rush, a trap toward speed." },
      { label: "Parts of a story", words: ["GARDEN", "PLOT", "STORY", "FILM"], difficulty: 2, kind: "category", redHerring: "GARDEN could be a path, a trap toward plants." },
      { label: "Words that go before BOARD", words: ["FLOOR", "SCORE", "HEAD", "KEY"], difficulty: 3, kind: "wordplay", redHerring: "KEY and HEAD also go before STONE, so they can pull you toward that group." },
      { label: "Words that go before STONE", words: ["MILE", "MILL", "TOMB", "CORNER"], difficulty: 4, kind: "wordplay", redHerring: "KEY and HEAD look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["KEY", "HEAD"],
  },
  {
    id: 97,
    groups: [
      { label: "Things you can cast", words: ["VOTE", "NET", "PLASTER", "SHADOW"], difficulty: 1, kind: "category", redHerring: "NET is also a web, a trap toward spiders." },
      { label: "Pen types", words: ["BALLPOINT", "FOUNTAIN", "ROLLERBALL", "GEL"], difficulty: 2, kind: "category", redHerring: "GEL is also a hair product, a trap toward hair." },
      { label: "Words that go before FISH", words: ["STAR", "SUN", "SAW", "ANGEL"], difficulty: 3, kind: "wordplay", redHerring: "STAR and SUN also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["HEAD", "LIME", "NIGHT", "CANDLE"], difficulty: 4, kind: "wordplay", redHerring: "STAR and SUN look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["STAR", "SUN"],
  },
  {
    id: 98,
    groups: [
      { label: "Painters", words: ["RENOIR", "VERMEER", "RUBENS", "TITIAN"], difficulty: 1, kind: "category", redHerring: "TITIAN is also a shade of reddish orange, a trap toward colours." },
      { label: "Sculptors", words: ["RODIN", "BERNINI", "DONATELLO", "CANOVA"], difficulty: 2, kind: "category", redHerring: "CANOVA was Italian, which could pull toward the Italian painters." },
      { label: "Words that go before SHIP", words: ["AIR", "FRIEND", "MOTHER", "SPACE"], difficulty: 3, kind: "wordplay", redHerring: "SPACE and AIR also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["WEATHER", "SNOW", "POST", "OLD"], difficulty: 4, kind: "wordplay", redHerring: "SPACE and AIR look like they fit this group, but they belong with SHIP." },
    ],
    decoys: ["SPACE", "AIR"],
  },
  {
    id: 99,
    groups: [
      { label: "Space", words: ["ROCKET", "SATELLITE", "ASTEROID", "ORBIT"], difficulty: 1, kind: "category", redHerring: "ORBIT is also an eye socket, a trap toward body parts." },
      { label: "Sleep", words: ["NAP", "SNOOZE", "DOZE", "SLUMBER"], difficulty: 2, kind: "category", redHerring: "SNOOZE is also an alarm button, a trap toward alarms." },
      { label: "Words that go before CAKE", words: ["PAN", "ANGEL", "MUD", "FISH"], difficulty: 3, kind: "wordplay", redHerring: "MUD and ANGEL also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["STAR", "DOG", "LION", "SAW"], difficulty: 4, kind: "wordplay", redHerring: "MUD and ANGEL look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["MUD", "ANGEL"],
  },
  {
    id: 100,
    groups: [
      { label: "Zoo animals", words: ["GIRAFFE", "ZEBRA", "HIPPO", "RHINO"], difficulty: 1, kind: "category", redHerring: "HIPPO is also short for hippopotamus, a trap toward hippos." },
      { label: "Antelopes", words: ["IMPALA", "GNU", "ELAND", "ORYX"], difficulty: 2, kind: "category", redHerring: "GNU is also a letter, a trap toward letters." },
      { label: "Words that go before FLY", words: ["HOUSE", "CADDIS", "FIRE", "GREEN"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["DOG", "WHITE", "DOLL", "BOAT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 101,
    groups: [
      { label: "Kitchen appliances", words: ["TOASTER", "BLENDER", "MIXER", "OVEN"], difficulty: 1, kind: "category", redHerring: "MIXER is also a sound desk, a trap toward music." },
      { label: "Things with lids", words: ["JAR", "CASKET", "COFFER", "TUREEN"], difficulty: 2, kind: "category", redHerring: "CASKET is also a coffin, a trap toward funerals." },
      { label: "Words that go before FISH", words: ["BUTTER", "SILVER", "SWORD", "SAW"], difficulty: 3, kind: "wordplay", redHerring: "BUTTER and SAW also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["MAY", "CRANE", "BLOW", "STONE"], difficulty: 4, kind: "wordplay", redHerring: "BUTTER and SAW look like they fit this group, but they belong with FISH." },
    ],
    decoys: ["BUTTER", "SAW"],
  },
  {
    id: 102,
    groups: [
      { label: "Nautical directions", words: ["PORT", "STARBOARD", "STERN", "AFT"], difficulty: 1, kind: "category", redHerring: "STERN is also a serious manner, a trap toward mood words." },
      { label: "Fictional spies", words: ["BOND", "BOURNE", "SMILEY", "CONDOR"], difficulty: 2, kind: "category", redHerring: "BOND is also a financial certificate, a trap toward money." },
      { label: "Words that go before MAN", words: ["SPACE", "BOAT", "FIRE", "SPIDER"], difficulty: 3, kind: "wordplay", redHerring: "BOAT and FIRE also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["WARE", "HEN", "SUMMER", "ICE"], difficulty: 4, kind: "wordplay", redHerring: "BOAT and FIRE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["BOAT", "FIRE"],
  },
  {
    id: 103,
    groups: [
      { label: "Browns", words: ["TAN", "SEPIA", "UMBER", "CARAMEL"], difficulty: 1, kind: "category", redHerring: "CARAMEL is also a sweet, a trap toward sweets." },
      { label: "Famous dogs in stories", words: ["LASSIE", "BALTO", "TOTO", "HACHIKO"], difficulty: 2, kind: "category", redHerring: "TOTO is also a band name, a trap toward music." },
      { label: "Words that go before LIGHT", words: ["MOON", "HEAD", "SIDE", "FLASH"], difficulty: 3, kind: "wordplay", redHerring: "SIDE and HEAD also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["SKATE", "CUP", "NOTICE", "DASH"], difficulty: 4, kind: "wordplay", redHerring: "SIDE and HEAD look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["SIDE", "HEAD"],
  },
  {
    id: 104,
    groups: [
      { label: "Baby animals", words: ["PUPPY", "KITTEN", "PIGLET", "JOEY"], difficulty: 1, kind: "category", redHerring: "JOEY is also a common name, a trap toward names." },
      { label: "Shoes", words: ["PUMP", "STILETTO", "MOCCASIN", "BROGUE"], difficulty: 2, kind: "category", redHerring: "BROGUE is also an accent, a trap toward speech." },
      { label: "Words that go before DOG", words: ["SHEEP", "WATER", "CORN", "SUN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SUN also go before BEAR, so they can pull you toward that group." },
      { label: "Words that go before BEAR", words: ["HONEY", "GRIZZLY", "GUMMY", "POLAR"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "SUN"],
  },
  {
    id: 105,
    groups: [
      { label: "Pastas", words: ["LASAGNE", "GNOCCHI", "RAVIOLI", "TORTELLINI"], difficulty: 1, kind: "category", redHerring: "GNOCCHI looks like dumplings, a trap toward dumplings." },
      { label: "Breads", words: ["PRETZEL", "CRUMPET", "MUFFIN", "TORTILLA"], difficulty: 2, kind: "category", redHerring: "MUFFIN is also a cake, a trap toward cakes." },
      { label: "Words that go before BALL", words: ["FOOT", "HAND", "FIRE", "BEACH"], difficulty: 3, kind: "wordplay", redHerring: "FOOT and FIRE also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["DAY", "SUN", "CANDLE", "GREEN"], difficulty: 4, kind: "wordplay", redHerring: "FOOT and FIRE look like they fit this group, but they belong with BALL." },
    ],
    decoys: ["FOOT", "FIRE"],
  },
  {
    id: 106,
    groups: [
      { label: "Olympic sports", words: ["DIVING", "GYMNASTICS", "WRESTLING", "DECATHLON"], difficulty: 1, kind: "category", redHerring: "DIVING is also a plunge, a trap toward water words." },
      { label: "Shapes", words: ["CRESCENT", "SPIRAL", "ZIGZAG", "WAVE"], difficulty: 2, kind: "category", redHerring: "CRESCENT is also a moon phase, a trap toward space." },
      { label: "Words that go before DOG", words: ["UNDER", "GUN", "PRAIRIE", "SEA"], difficulty: 3, kind: "wordplay", redHerring: "SEA and GUN also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SUPER", "FIRE", "MILK", "BUSINESS"], difficulty: 4, kind: "wordplay", redHerring: "SEA and GUN look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["SEA", "GUN"],
  },
  {
    id: 107,
    groups: [
      { label: "Quiet speech", words: ["MUTTER", "MURMUR", "WHISPER", "BABBLE"], difficulty: 1, kind: "category", redHerring: "BABBLE is also a stream of nonsense, a trap toward nonsense." },
      { label: "Things you hang", words: ["BUNTING", "WREATH", "GARLAND", "TINSEL"], difficulty: 2, kind: "category", redHerring: "TINSEL is also showy talk, a trap toward speech." },
      { label: "Words that go before LIGHT", words: ["GREEN", "BACK", "FLOOD", "FIRE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and GREEN also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["TREE", "HOT", "BATH", "TEA"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and GREEN look like they fit this group, but they belong with LIGHT." },
    ],
    decoys: ["FIRE", "GREEN"],
  },
  {
    id: 108,
    groups: [
      { label: "Punctuation", words: ["COMMA", "COLON", "HYPHEN", "ELLIPSIS"], difficulty: 1, kind: "category", redHerring: "COLON is also a body part, a trap toward body words." },
      { label: "Tarot cards", words: ["HERMIT", "EMPEROR", "LOVERS", "JUSTICE"], difficulty: 2, kind: "category", redHerring: "EMPEROR is also a penguin, a trap toward birds." },
      { label: "Words that go before STONE", words: ["HEAD", "KEY", "LIME", "HAIL"], difficulty: 3, kind: "wordplay", redHerring: "KEY and HEAD also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["BLACK", "SCORE", "CHOPPING", "CHEESE"], difficulty: 4, kind: "wordplay", redHerring: "KEY and HEAD look like they fit this group, but they belong with STONE." },
    ],
    decoys: ["KEY", "HEAD"],
  },
  {
    id: 109,
    groups: [
      { label: "Garden features", words: ["POND", "GAZEBO", "PATIO", "SHED"], difficulty: 1, kind: "category", redHerring: "POND is also a small lake, a trap toward lakes." },
      { label: "Knitwear", words: ["BLAZER", "CARDIGAN", "HOODIE", "JUMPER"], difficulty: 2, kind: "category", redHerring: "BLAZER is also a jacket, a trap toward jackets." },
      { label: "Words that go before FLY", words: ["BLOW", "DRAGON", "STONE", "HOUSE"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and STONE also go before WORK, so they can pull you toward that group." },
      { label: "Words that go before WORK", words: ["FOOT", "BODY", "LEG", "CLOCK"], difficulty: 4, kind: "wordplay", redHerring: "HOUSE and STONE look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["HOUSE", "STONE"],
  },
  {
    id: 110,
    groups: [
      { label: "Mushrooms", words: ["MOREL", "CHANTERELLE", "PORCINI", "ENOKI"], difficulty: 1, kind: "category", redHerring: "MOREL is also a moral, a trap toward morals." },
      { label: "Water sports", words: ["WATERSKI", "SNORKEL", "KITESURF", "PARASAIL"], difficulty: 2, kind: "category", redHerring: "PARASAIL is close to parasol, a spelling trap." },
      { label: "Words that go before DOG", words: ["WATCH", "SUN", "BULL", "WATER"], difficulty: 3, kind: "wordplay", redHerring: "SUN and WATER also go before BEAR, so they can pull you toward that group." },
      { label: "Words that go before BEAR", words: ["GRIZZLY", "POLAR", "BROWN", "HONEY"], difficulty: 4, kind: "wordplay", redHerring: "SUN and WATER look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["SUN", "WATER"],
  },
  {
    id: 111,
    groups: [
      { label: "Sharks", words: ["MAKO", "HAMMERHEAD", "TIGER", "NURSE"], difficulty: 1, kind: "category", redHerring: "NURSE is also a caregiver, a trap toward medicine." },
      { label: "Musical modes", words: ["DORIAN", "LYDIAN", "PHRYGIAN", "MIXOLYDIAN"], difficulty: 2, kind: "category", redHerring: "DORIAN is also a name, a trap toward names." },
      { label: "Words that go before MAN", words: ["FOOT", "FIRE", "POST", "SPACE"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and FOOT also go before LIGHT, so they can pull you toward that group." },
      { label: "Words that go before LIGHT", words: ["DAY", "HEAD", "SPOT", "CANDLE"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and FOOT look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["FIRE", "FOOT"],
  },
  {
    id: 112,
    groups: [
      { label: "Programming languages", words: ["JAVA", "PERL", "COBOL", "FORTRAN"], difficulty: 1, kind: "category", redHerring: "JAVA is also coffee, a trap toward drinks." },
      { label: "Coffee drinks", words: ["ESPRESSO", "MOCHA", "CAPPUCCINO", "AMERICANO"], difficulty: 2, kind: "category", redHerring: "MOCHA is also a chocolate flavour, a trap toward sweets." },
      { label: "Words that go before HOUSE", words: ["SUMMER", "FIRE", "LIGHT", "BOAT"], difficulty: 3, kind: "wordplay", redHerring: "FIRE and BOAT also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["SNOW", "POLICE", "BUSINESS", "BAT"], difficulty: 4, kind: "wordplay", redHerring: "FIRE and BOAT look like they fit this group, but they belong with HOUSE." },
    ],
    decoys: ["FIRE", "BOAT"],
  },
  {
    id: 113,
    groups: [
      { label: "Sports venues", words: ["STADIUM", "VELODROME", "RINK", "PITCH"], difficulty: 1, kind: "category", redHerring: "PITCH is also a sales talk, a trap toward sales." },
      { label: "Fielding positions", words: ["SLIP", "POINT", "COVER", "SILLY"], difficulty: 2, kind: "category", redHerring: "POINT is also a sharp end, a trap toward sharpness." },
      { label: "Words that go before CAKE", words: ["CUP", "TEA", "CHEESE", "FRUIT"], difficulty: 3, kind: "wordplay", redHerring: "CUP and CHEESE also go before BOARD, so they can pull you toward that group." },
      { label: "Words that go before BOARD", words: ["CLIP", "SCORE", "NOTICE", "SURF"], difficulty: 4, kind: "wordplay", redHerring: "CUP and CHEESE look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["CUP", "CHEESE"],
  },
  {
    id: 114,
    groups: [
      { label: "Grasses", words: ["BENT", "RYE", "TIMOTHY", "FESCUE"], difficulty: 1, kind: "category", redHerring: "BENT is also a crooked shape, a trap toward shapes." },
      { label: "Striped things", words: ["BARCODE", "PEPPERMINT", "AWNING", "PYJAMAS"], difficulty: 2, kind: "category", redHerring: "PEPPERMINT is also a herb, a trap toward herbs." },
      { label: "Words that go before FLY", words: ["FIRE", "HOVER", "GREEN", "SAW"], difficulty: 3, kind: "wordplay", redHerring: "GREEN and FIRE also go before HOUSE, so they can pull you toward that group." },
      { label: "Words that go before HOUSE", words: ["GLASS", "BOAT", "LIGHT", "TREE"], difficulty: 4, kind: "wordplay", redHerring: "GREEN and FIRE look like they fit this group, but they belong with FLY." },
    ],
    decoys: ["GREEN", "FIRE"],
  },
  {
    id: 115,
    groups: [
      { label: "Cakes", words: ["SPONGE", "GATEAU", "BATTENBERG", "MADEIRA"], difficulty: 1, kind: "category", redHerring: "MADEIRA is also an island, a trap toward islands." },
      { label: "Perfume notes", words: ["MUSK", "SANDALWOOD", "BERGAMOT", "PATCHOULI"], difficulty: 2, kind: "category", redHerring: "MUSK is also a deer scent, a trap toward animals." },
      { label: "Words that go before MAN", words: ["AIR", "SPACE", "SUPER", "SNOW"], difficulty: 3, kind: "wordplay", redHerring: "AIR and SPACE also go before SHIP, so they can pull you toward that group." },
      { label: "Words that go before SHIP", words: ["OWNER", "WAR", "FELLOW", "MOTHER"], difficulty: 4, kind: "wordplay", redHerring: "AIR and SPACE look like they fit this group, but they belong with MAN." },
    ],
    decoys: ["AIR", "SPACE"],
  },
  {
    id: 116,
    groups: [
      { label: "Chess terms", words: ["GAMBIT", "CASTLE", "CHECK", "MATE"], difficulty: 1, kind: "category", redHerring: "CASTLE is also a building, a trap toward buildings." },
      { label: "Ocean waves", words: ["SWELL", "BREAKER", "RIPPLE", "SURGE"], difficulty: 2, kind: "category", redHerring: "SURGE is also a sudden rise in electricity, a trap toward electricity." },
      { label: "Words that go before DOG", words: ["WATER", "SEA", "SHEEP", "SUN"], difficulty: 3, kind: "wordplay", redHerring: "WATER and SEA also go before MAN, so they can pull you toward that group." },
      { label: "Words that go before MAN", words: ["POST", "BOAT", "SPACE", "SPIDER"], difficulty: 4, kind: "wordplay", redHerring: "WATER and SEA look like they fit this group, but they belong with DOG." },
    ],
    decoys: ["WATER", "SEA"],
  },
  {
    id: 117,
    groups: [
      { label: "Pantomime characters", words: ["DAME", "PRINCE", "WIDOW", "VILLAIN"], difficulty: 1, kind: "category", redHerring: "WIDOW is also a spider, a trap toward spiders." },
      { label: "Sled dogs", words: ["MALAMUTE", "SAMOYED", "AKITA", "CHOW"], difficulty: 2, kind: "category", redHerring: "CHOW is also food, a trap toward food." },
      { label: "Words that go before WORK", words: ["HOUSE", "HAND", "STONE", "HOME"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and STONE also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["DRAGON", "BLOW", "BUTTER", "FRUIT"], difficulty: 4, kind: "wordplay", redHerring: "HOUSE and STONE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["HOUSE", "STONE"],
  },
  {
    id: 118,
    groups: [
      { label: "Chemist's goods", words: ["ASPIRIN", "TABLET", "LOTION", "OINTMENT"], difficulty: 1, kind: "category", redHerring: "TABLET is also a computer, a trap toward computing." },
      { label: "Dentist's tools", words: ["DRILL", "FLOSS", "SUCTION", "PROBE"], difficulty: 2, kind: "category", redHerring: "DRILL is also a practice exercise, a trap toward school." },
      { label: "Words that go before BOARD", words: ["CUP", "NOTICE", "FLOOR", "CHEESE"], difficulty: 3, kind: "wordplay", redHerring: "CUP and CHEESE also go before CAKE, so they can pull you toward that group." },
      { label: "Words that go before CAKE", words: ["FRUIT", "PAN", "POUND", "TEA"], difficulty: 4, kind: "wordplay", redHerring: "CUP and CHEESE look like they fit this group, but they belong with BOARD." },
    ],
    decoys: ["CUP", "CHEESE"],
  },
  {
    id: 119,
    groups: [
      { label: "Homes", words: ["COTTAGE", "MANSION", "VILLA", "CHALET"], difficulty: 1, kind: "category", redHerring: "CHALET is also a wooden holiday home, a trap toward holidays." },
      { label: "Stable features", words: ["HAYLOFT", "STALL", "MANGER", "TROUGH"], difficulty: 2, kind: "category", redHerring: "TROUGH is also a low valley, a trap toward landscape." },
      { label: "Words that go before WORK", words: ["OVER", "HOUSE", "GUESS", "STONE"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and STONE also go before FLY, so they can pull you toward that group." },
      { label: "Words that go before FLY", words: ["CADDIS", "FRUIT", "MAY", "HORSE"], difficulty: 4, kind: "wordplay", redHerring: "HOUSE and STONE look like they fit this group, but they belong with WORK." },
    ],
    decoys: ["HOUSE", "STONE"],
  },
  {
    id: 120,
    groups: [
      { label: "Measuring tools", words: ["CALIPERS", "GAUGE", "PLUMB", "SEXTANT"], difficulty: 1, kind: "category", redHerring: "PLUMB is also a verb for diving deep, a trap toward water." },
      { label: "Parts of a horse", words: ["MANE", "HOOF", "FETLOCK", "WITHERS"], difficulty: 2, kind: "category", redHerring: "WITHERS is also a verb meaning to wilt, a trap toward plants." },
      { label: "Words that go before CAKE", words: ["MUD", "ANGEL", "RICE", "CUP"], difficulty: 3, kind: "wordplay", redHerring: "MUD and ANGEL also go before FISH, so they can pull you toward that group." },
      { label: "Words that go before FISH", words: ["SAW", "MOON", "CAT", "SILVER"], difficulty: 4, kind: "wordplay", redHerring: "MUD and ANGEL look like they fit this group, but they belong with CAKE." },
    ],
    decoys: ["MUD", "ANGEL"],
  },

  {
    id: 121,
    groups: [
      { label: "Farm animals", words: ["COW", "HEN", "GOAT", "MULE"], difficulty: 1, kind: "category", redHerring: "MULE is also slang for a stubborn person, but here it is a working farm animal." },
      { label: "Breakfast foods", words: ["TOAST", "BACON", "WAFFLE", "PANCAKE"], difficulty: 2, kind: "category", redHerring: "BACON comes from a pig, which pulls toward the farm animals, but it belongs at the breakfast table." },
      { label: "Words that precede FIRE", words: ["CAMP", "CROSS", "OPEN", "RAPID"], difficulty: 3, kind: "wordplay", redHerring: "CAMP and CROSS can suggest farm animals, but each forms a familiar compound with FIRE." },
      { label: "Words that follow BIRD", words: ["CAGE", "SEED", "CALL", "WATCH"], difficulty: 4, kind: "wordplay", redHerring: "CAGE and SEED may suggest breakfast foods, but each forms a familiar compound after BIRD." },
    ],
    decoys: ["CAMP", "CAGE"],
  },
  {
    id: 122,
    groups: [
      { label: "Tempo markings", words: ["ALLEGRO", "LARGO", "PRESTO", "ADAGIO"], difficulty: 1, kind: "category", redHerring: "PRESTO is also a magic word, a trap for fans of wordplay." },
      { label: "Male animals", words: ["BUCK", "BULL", "RAM", "STAG"], difficulty: 2, kind: "category", redHerring: "BUCK is also slang for a dollar, a trap toward money words." },
      { label: "Words that precede STAR", words: ["NORTH", "ROCK", "SHOOTING", "SUPER"], difficulty: 3, kind: "wordplay", redHerring: "NORTH and ROCK can suggest tempo markings, but each forms a familiar compound with STAR." },
      { label: "Words that follow BACK", words: ["PACK", "YARD", "STAGE", "BONE"], difficulty: 4, kind: "wordplay", redHerring: "PACK and YARD may suggest male animals, but each forms a familiar compound after BACK." },
    ],
    decoys: ["NORTH", "PACK"],
  },
  {
    id: 123,
    groups: [
      { label: "Breads", words: ["BAGUETTE", "CIABATTA", "FOCACCIA", "BAGEL"], difficulty: 1, kind: "category", redHerring: "BAGEL is also a breakfast item, which can pull toward a meal group." },
      { label: "Parts of a cell", words: ["NUCLEUS", "MEMBRANE", "RIBOSOME", "VACUOLE"], difficulty: 2, kind: "category", redHerring: "NUCLEUS is also a physics word, which can pull toward atoms." },
      { label: "Words that precede BLUE", words: ["MOON", "GRASS", "PRINT", "BERRY"], difficulty: 3, kind: "wordplay", redHerring: "MOON and GRASS can suggest breads, but each forms a familiar compound with BLUE." },
      { label: "Words that follow COLD", words: ["SNAP", "WAR", "CASE", "FRONT"], difficulty: 4, kind: "wordplay", redHerring: "SNAP and WAR may suggest parts of a cell, but each forms a familiar compound after COLD." },
    ],
    decoys: ["MOON", "SNAP"],
  },
  {
    id: 124,
    groups: [
      { label: "Famous ships", words: ["MAYFLOWER", "TITANIC", "BEAGLE", "VICTORY"], difficulty: 1, kind: "category", redHerring: "BEAGLE is also a dog breed, a trap toward dogs." },
      { label: "Words that go before ROOM", words: ["BED", "CLASS", "MUSH", "STOCK"], difficulty: 2, kind: "category", redHerring: "MUSH could be food, a trap toward food." },
      { label: "Words that precede GREEN", words: ["HOUSE", "GOOSE", "LIGHT", "ROOM"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and GOOSE can suggest famous ships, but each forms a familiar compound with GREEN." },
      { label: "Words that follow DARK", words: ["HORSE", "MATTER", "CHOCOLATE", "AGES"], difficulty: 4, kind: "wordplay", redHerring: "HORSE and MATTER may suggest words that go before room, but each forms a familiar compound after DARK." },
    ],
    decoys: ["HOUSE", "HORSE"],
  },
  {
    id: 125,
    groups: [
      { label: "Words from Hindi", words: ["BUNGALOW", "JUNGLE", "SHAMPOO", "LOOT"], difficulty: 1, kind: "category", redHerring: "LOOT is also a heist word, which can pull toward crime." },
      { label: "Sled dogs", words: ["MALAMUTE", "SAMOYED", "AKITA", "CHOW"], difficulty: 2, kind: "category", redHerring: "CHOW is also food, a trap toward food." },
      { label: "Words that precede BLACK", words: ["MAIL", "BOARD", "BERRY", "JACK"], difficulty: 3, kind: "wordplay", redHerring: "MAIL and BOARD can suggest words from hindi, but each forms a familiar compound with BLACK." },
      { label: "Words that follow HAND", words: ["BAG", "SHAKE", "STAND", "WRITING"], difficulty: 4, kind: "wordplay", redHerring: "BAG and SHAKE may suggest sled dogs, but each forms a familiar compound after HAND." },
    ],
    decoys: ["MAIL", "BAG"],
  },
  {
    id: 126,
    groups: [
      { label: "Composers", words: ["MOZART", "CHOPIN", "HAYDN", "BACH"], difficulty: 1, kind: "category", redHerring: "BACH is also the German word for a stream, a trap toward water." },
      { label: "Subatomic particles", words: ["PROTON", "NEUTRON", "ELECTRON", "QUARK"], difficulty: 2, kind: "category", redHerring: "QUARK is also a soft cheese in German, a food trap." },
      { label: "Words that precede SIDE", words: ["KICK", "ROAD", "SHOW", "SADDLE"], difficulty: 3, kind: "wordplay", redHerring: "KICK and ROAD can suggest composers, but each forms a familiar compound with SIDE." },
      { label: "Words that follow STONE", words: ["COLD", "WALL", "FRUIT", "AGE"], difficulty: 4, kind: "wordplay", redHerring: "COLD and WALL may suggest subatomic particles, but each forms a familiar compound after STONE." },
    ],
    decoys: ["KICK", "COLD"],
  },
  {
    id: 127,
    groups: [
      { label: "Volcano parts", words: ["CRATER", "MAGMA", "LAVA", "VENT"], difficulty: 1, kind: "category", redHerring: "VENT is also a way to express feelings, a trap toward emotions." },
      { label: "Things with wings", words: ["PLANE", "HOSPITAL", "PALACE", "THEATRE"], difficulty: 2, kind: "category", redHerring: "PLANE is also a flat surface, which can pull toward the flat group." },
      { label: "Words that precede WATER", words: ["FALL", "MELON", "PROOF", "WORKS"], difficulty: 3, kind: "wordplay", redHerring: "FALL and MELON can suggest volcano parts, but each forms a familiar compound with WATER." },
      { label: "Words that follow MOON", words: ["FULL", "HARVEST", "HONEY", "BLUE"], difficulty: 4, kind: "wordplay", redHerring: "FULL and HARVEST may suggest things with wings, but each forms a familiar compound after MOON." },
    ],
    decoys: ["FALL", "FULL"],
  },
  {
    id: 128,
    groups: [
      { label: "Stage directions", words: ["ENTER", "EXIT", "ASIDE", "CUE"], difficulty: 1, kind: "category", redHerring: "CUE is also a snooker stick, a trap toward snooker." },
      { label: "Parts of a tree", words: ["BARK", "ROOT", "TRUNK", "BRANCH"], difficulty: 2, kind: "category", redHerring: "BRANCH is also a bank office, a trap toward money." },
      { label: "Words that precede SNOW", words: ["BALL", "FLAKE", "DRIFT", "PLOW"], difficulty: 3, kind: "wordplay", redHerring: "BALL and FLAKE can suggest stage directions, but each forms a familiar compound with SNOW." },
      { label: "Words that follow GOLD", words: ["RUSH", "FISH", "LEAF", "MEDAL"], difficulty: 4, kind: "wordplay", redHerring: "RUSH and FISH may suggest parts of a tree, but each forms a familiar compound after GOLD." },
    ],
    decoys: ["BALL", "RUSH"],
  },
  {
    id: 129,
    groups: [
      { label: "Pastas", words: ["LASAGNE", "GNOCCHI", "RAVIOLI", "TORTELLINI"], difficulty: 1, kind: "category", redHerring: "GNOCCHI looks like dumplings, a trap toward dumplings." },
      { label: "Fielding positions", words: ["SLIP", "POINT", "COVER", "SILLY"], difficulty: 2, kind: "category", redHerring: "POINT is also a sharp end, a trap toward sharpness." },
      { label: "Words that precede FOOT", words: ["BALL", "BRIDGE", "PRINT", "LOOSE"], difficulty: 3, kind: "wordplay", redHerring: "BALL and BRIDGE can suggest pastas, but each forms a familiar compound with FOOT." },
      { label: "Words that follow SILVER", words: ["LINING", "SCREEN", "SPOON", "BELLS"], difficulty: 4, kind: "wordplay", redHerring: "LINING and SCREEN may suggest fielding positions, but each forms a familiar compound after SILVER." },
    ],
    decoys: ["BALL", "LINING"],
  },
  {
    id: 130,
    groups: [
      { label: "Chemist's goods", words: ["ASPIRIN", "TABLET", "LOTION", "OINTMENT"], difficulty: 1, kind: "category", redHerring: "TABLET is also a computer, a trap toward computing." },
      { label: "Rock types", words: ["GRANITE", "MARBLE", "SLATE", "BASALT"], difficulty: 2, kind: "category", redHerring: "MARBLE is also a glass toy, and SLATE is a verb for criticising, both traps." },
      { label: "Words that precede CROSS", words: ["WORD", "WALK", "BOW", "ROADS"], difficulty: 3, kind: "wordplay", redHerring: "WORD and WALK can suggest chemist's goods, but each forms a familiar compound with CROSS." },
      { label: "Words that follow BELL", words: ["HOP", "FLOWER", "TOWER", "PEPPER"], difficulty: 4, kind: "wordplay", redHerring: "HOP and FLOWER may suggest rock types, but each forms a familiar compound after BELL." },
    ],
    decoys: ["WORD", "HOP"],
  },
  {
    id: 131,
    groups: [
      { label: "Dog breeds", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], difficulty: 1, kind: "category", redHerring: "BOXER is also a sports competitor, a trap that pulls you toward sports." },
      { label: "Shades of red", words: ["CRIMSON", "SCARLET", "MAROON", "RUST"], difficulty: 2, kind: "category", redHerring: "RUST is also a metal decay, which can pull toward metals." },
      { label: "Words that precede HONEY", words: ["BEE", "MOON", "COMB", "POT"], difficulty: 3, kind: "wordplay", redHerring: "BEE and MOON can suggest dog breeds, but each forms a familiar compound with HONEY." },
      { label: "Words that follow BREAD", words: ["CRUMB", "STICK", "WINNER", "LINE"], difficulty: 4, kind: "wordplay", redHerring: "CRUMB and STICK may suggest shades of red, but each forms a familiar compound after BREAD." },
    ],
    decoys: ["BEE", "CRUMB"],
  },
  {
    id: 132,
    groups: [
      { label: "Footwear", words: ["SANDAL", "CLOG", "LOAFER", "BOOT"], difficulty: 1, kind: "category", redHerring: "BOOT can also mean to kick a ball, a verb trap toward sports." },
      { label: "Parts of a fish", words: ["GILL", "FIN", "SCALE", "FLUKE"], difficulty: 2, kind: "category", redHerring: "FLUKE is also a lucky chance, a trap toward luck." },
      { label: "Words that precede EARTH", words: ["WORM", "QUAKE", "BOUND", "WORK"], difficulty: 3, kind: "wordplay", redHerring: "WORM and QUAKE can suggest footwear, but each forms a familiar compound with EARTH." },
      { label: "Words that follow RAIN", words: ["BOW", "CHECK", "DROP", "FOREST"], difficulty: 4, kind: "wordplay", redHerring: "BOW and CHECK may suggest parts of a fish, but each forms a familiar compound after RAIN." },
    ],
    decoys: ["WORM", "BOW"],
  },
  {
    id: 133,
    groups: [
      { label: "Body joints", words: ["KNEE", "ANKLE", "WRIST", "HIP"], difficulty: 1, kind: "category", redHerring: "HIP is also slang for cool, a trap for style words." },
      { label: "Knitwear", words: ["BLAZER", "CARDIGAN", "HOODIE", "JUMPER"], difficulty: 2, kind: "category", redHerring: "BLAZER is also a jacket, a trap toward jackets." },
      { label: "Words that precede WILD", words: ["CARD", "FIRE", "LIFE", "GOOSE"], difficulty: 3, kind: "wordplay", redHerring: "CARD and FIRE can suggest body joints, but each forms a familiar compound with WILD." },
      { label: "Words that follow PAPER", words: ["CLIP", "JAM", "ROUTE", "TRAIL"], difficulty: 4, kind: "wordplay", redHerring: "CLIP and JAM may suggest knitwear, but each forms a familiar compound after PAPER." },
    ],
    decoys: ["CARD", "CLIP"],
  },
  {
    id: 134,
    groups: [
      { label: "Writing tools", words: ["PEN", "PENCIL", "CRAYON", "CHALK"], difficulty: 1, kind: "category", redHerring: "CHALK is also a white cliff rock, a trap toward geography." },
      { label: "Oceans", words: ["ARCTIC", "ATLANTIC", "INDIAN", "PACIFIC"], difficulty: 2, kind: "category", redHerring: "ARCTIC is also a fox, and INDIAN is also a people, so both can mislead." },
      { label: "Words that precede RED", words: ["CARPET", "TAPE", "WOOD", "HANDED"], difficulty: 3, kind: "wordplay", redHerring: "CARPET and TAPE can suggest writing tools, but each forms a familiar compound with RED." },
      { label: "Words that follow NIGHT", words: ["OWL", "CAP", "LIGHT", "SHADE"], difficulty: 4, kind: "wordplay", redHerring: "OWL and CAP may suggest oceans, but each forms a familiar compound after NIGHT." },
    ],
    decoys: ["CARPET", "OWL"],
  },
  {
    id: 135,
    groups: [
      { label: "Shrubs", words: ["HOLLY", "HEATHER", "LILAC", "JASMINE"], difficulty: 1, kind: "category", redHerring: "HEATHER is also a girl's name, a trap toward names." },
      { label: "Parts of a play", words: ["ACT", "SCENE", "PROLOGUE", "EPILOGUE"], difficulty: 2, kind: "category", redHerring: "SCENE is also a view or a setting, which can pull toward landscapes." },
      { label: "Words that precede HIGH", words: ["HORSE", "TIDE", "WAY", "LIGHT"], difficulty: 3, kind: "wordplay", redHerring: "HORSE and TIDE can suggest shrubs, but each forms a familiar compound with HIGH." },
      { label: "Words that follow SCHOOL", words: ["BUS", "BOOK", "MATE", "YARD"], difficulty: 4, kind: "wordplay", redHerring: "BUS and BOOK may suggest parts of a play, but each forms a familiar compound after SCHOOL." },
    ],
    decoys: ["HORSE", "BUS"],
  },
  {
    id: 136,
    groups: [
      { label: "Knitting and needlecraft", words: ["PURL", "KNIT", "CROCHET", "TATTING"], difficulty: 1, kind: "category", redHerring: "KNIT is also a word for a bone healing, a trap toward medicine." },
      { label: "Fairy creatures", words: ["PIXIE", "ELF", "GOBLIN", "SPRITE"], difficulty: 2, kind: "category", redHerring: "SPRITE is also a fizzy drink, a trap toward drinks." },
      { label: "Words that precede SUN", words: ["RISE", "SET", "SPOT", "BURN"], difficulty: 3, kind: "wordplay", redHerring: "RISE and SET can suggest knitting and needlecraft, but each forms a familiar compound with SUN." },
      { label: "Words that follow FLOWER", words: ["BED", "POT", "CHILD", "POWER"], difficulty: 4, kind: "wordplay", redHerring: "BED and POT may suggest fairy creatures, but each forms a familiar compound after FLOWER." },
    ],
    decoys: ["RISE", "BED"],
  },
  {
    id: 137,
    groups: [
      { label: "Dances", words: ["MAMBO", "RUMBA", "FOXTROT", "CANCAN"], difficulty: 1, kind: "category", redHerring: "FOXTROT is also a letter in the phonetic alphabet, a trap toward letters." },
      { label: "Breads", words: ["PRETZEL", "CRUMPET", "MUFFIN", "TORTILLA"], difficulty: 2, kind: "category", redHerring: "MUFFIN is also a cake, a trap toward cakes." },
      { label: "Words that precede WIND", words: ["CHILL", "FALL", "PIPE", "UP"], difficulty: 3, kind: "wordplay", redHerring: "CHILL and FALL can suggest dances, but each forms a familiar compound with WIND." },
      { label: "Words that follow MILL", words: ["STONE", "WHEEL", "RACE", "WORK"], difficulty: 4, kind: "wordplay", redHerring: "STONE and WHEEL may suggest breads, but each forms a familiar compound after MILL." },
    ],
    decoys: ["CHILL", "STONE"],
  },
  {
    id: 138,
    groups: [
      { label: "Nautical directions", words: ["PORT", "STARBOARD", "STERN", "AFT"], difficulty: 1, kind: "category", redHerring: "STERN is also a serious manner, a trap toward mood words." },
      { label: "Stringed instruments", words: ["BANJO", "UKULELE", "LUTE", "ZITHER"], difficulty: 2, kind: "category", redHerring: "LUTE is also a sealing clay used in craft work, which can pull you toward crafts." },
      { label: "Words that precede MIND", words: ["SET", "READ", "BLIND", "OVER"], difficulty: 3, kind: "wordplay", redHerring: "SET and READ can suggest nautical directions, but each forms a familiar compound with MIND." },
      { label: "Words that follow GAME", words: ["PLAN", "SHOW", "POINT", "PLAY"], difficulty: 4, kind: "wordplay", redHerring: "PLAN and SHOW may suggest stringed instruments, but each forms a familiar compound after GAME." },
    ],
    decoys: ["SET", "PLAN"],
  },
  {
    id: 139,
    groups: [
      { label: "Cakes", words: ["SPONGE", "GATEAU", "BATTENBERG", "MADEIRA"], difficulty: 1, kind: "category", redHerring: "MADEIRA is also an island, a trap toward islands." },
      { label: "Words for huge", words: ["GIANT", "JUMBO", "VAST", "ENORMOUS"], difficulty: 2, kind: "category", redHerring: "JUMBO is also a large animal name, which can pull toward animals." },
      { label: "Words that precede TIME", words: ["TABLE", "KEEPER", "LESS", "ZONE"], difficulty: 3, kind: "wordplay", redHerring: "TABLE and KEEPER can suggest cakes, but each forms a familiar compound with TIME." },
      { label: "Words that follow LINE", words: ["DANCE", "BACK", "DRIVE", "UP"], difficulty: 4, kind: "wordplay", redHerring: "DANCE and BACK may suggest words for huge, but each forms a familiar compound after LINE." },
    ],
    decoys: ["TABLE", "DANCE"],
  },
  {
    id: 140,
    groups: [
      { label: "Mountain ranges", words: ["EVEREST", "ANDES", "ALPS", "ROCKIES"], difficulty: 1, kind: "category", redHerring: "EVEREST is a single peak rather than a range, and it is also a film title, a distraction." },
      { label: "Magic items", words: ["WAND", "SPELL", "CAULDRON", "BROOM"], difficulty: 2, kind: "category", redHerring: "SPELL is also a word for a period of time, a trap toward time." },
      { label: "Words that precede DUST", words: ["GOLD", "BOWL", "COVER", "STORM"], difficulty: 3, kind: "wordplay", redHerring: "GOLD and BOWL can suggest mountain ranges, but each forms a familiar compound with DUST." },
      { label: "Words that follow JACKET", words: ["POTATO", "LIFE", "POCKET", "BOOK"], difficulty: 4, kind: "wordplay", redHerring: "POTATO and LIFE may suggest magic items, but each forms a familiar compound after JACKET." },
    ],
    decoys: ["GOLD", "POTATO"],
  },
  {
    id: 141,
    groups: [
      { label: "Norse gods", words: ["THOR", "ODIN", "LOKI", "FREYA"], difficulty: 1, kind: "category", redHerring: "LOKI is also a comic-book character, which could pull toward comics, but here he is a god." },
      { label: "Things with lids", words: ["JAR", "CASKET", "COFFER", "TUREEN"], difficulty: 2, kind: "category", redHerring: "CASKET is also a coffin, a trap toward funerals." },
      { label: "Words that precede FIRE", words: ["CAMP", "CROSS", "OPEN", "RAPID"], difficulty: 3, kind: "wordplay", redHerring: "CAMP and CROSS can suggest norse gods, but each forms a familiar compound with FIRE." },
      { label: "Words that follow BIRD", words: ["CAGE", "SEED", "CALL", "WATCH"], difficulty: 4, kind: "wordplay", redHerring: "CAGE and SEED may suggest things with lids, but each forms a familiar compound after BIRD." },
    ],
    decoys: ["CAMP", "CAGE"],
  },
  {
    id: 142,
    groups: [
      { label: "Things with teeth", words: ["COMB", "SAW", "ZIP", "GEAR"], difficulty: 1, kind: "category", redHerring: "ZIP is also a word for speed, a trap toward fast words." },
      { label: "Kitchen tools", words: ["WHISK", "LADLE", "SIEVE", "TONGS"], difficulty: 2, kind: "category", redHerring: "SIEVE is also slang for a forgetful person, which pulls toward memory words." },
      { label: "Words that precede STAR", words: ["NORTH", "ROCK", "SHOOTING", "SUPER"], difficulty: 3, kind: "wordplay", redHerring: "NORTH and ROCK can suggest things with teeth, but each forms a familiar compound with STAR." },
      { label: "Words that follow BACK", words: ["PACK", "YARD", "STAGE", "BONE"], difficulty: 4, kind: "wordplay", redHerring: "PACK and YARD may suggest kitchen tools, but each forms a familiar compound after BACK." },
    ],
    decoys: ["NORTH", "PACK"],
  },
  {
    id: 143,
    groups: [
      { label: "Theatre features", words: ["STAGE", "CURTAIN", "ORCHESTRA", "BALCONY"], difficulty: 1, kind: "category", redHerring: "ORCHESTRA is also a group of musicians, which can pull toward music." },
      { label: "Animal homes", words: ["SETT", "LAIR", "HIVE", "WARREN"], difficulty: 2, kind: "category", redHerring: "HIVE is also a busy place, a trap toward busy words." },
      { label: "Words that precede BLUE", words: ["MOON", "GRASS", "PRINT", "BERRY"], difficulty: 3, kind: "wordplay", redHerring: "MOON and GRASS can suggest theatre features, but each forms a familiar compound with BLUE." },
      { label: "Words that follow COLD", words: ["SNAP", "WAR", "CASE", "FRONT"], difficulty: 4, kind: "wordplay", redHerring: "SNAP and WAR may suggest animal homes, but each forms a familiar compound after COLD." },
    ],
    decoys: ["MOON", "SNAP"],
  },
  {
    id: 144,
    groups: [
      { label: "Types of bear", words: ["POLAR", "GRIZZLY", "PANDA", "SLOTH"], difficulty: 1, kind: "category", redHerring: "SLOTH is also an animal and a sin, but the sloth bear is a real bear." },
      { label: "Solid shapes", words: ["CUBE", "CONE", "CYLINDER", "TORUS"], difficulty: 2, kind: "category", redHerring: "CONE is also a traffic marker, a trap toward roads." },
      { label: "Words that precede GREEN", words: ["HOUSE", "GOOSE", "LIGHT", "ROOM"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and GOOSE can suggest types of bear, but each forms a familiar compound with GREEN." },
      { label: "Words that follow DARK", words: ["HORSE", "MATTER", "CHOCOLATE", "AGES"], difficulty: 4, kind: "wordplay", redHerring: "HORSE and MATTER may suggest solid shapes, but each forms a familiar compound after DARK." },
    ],
    decoys: ["HOUSE", "HORSE"],
  },
  {
    id: 145,
    groups: [
      { label: "Garden tools", words: ["RAKE", "HOE", "TROWEL", "SHOVEL"], difficulty: 1, kind: "category", redHerring: "HOE rhymes with toe, a sound trap toward body parts." },
      { label: "Pen types", words: ["BALLPOINT", "FOUNTAIN", "ROLLERBALL", "GEL"], difficulty: 2, kind: "category", redHerring: "GEL is also a hair product, a trap toward hair." },
      { label: "Words that precede BLACK", words: ["MAIL", "BOARD", "BERRY", "JACK"], difficulty: 3, kind: "wordplay", redHerring: "MAIL and BOARD can suggest garden tools, but each forms a familiar compound with BLACK." },
      { label: "Words that follow HAND", words: ["BAG", "SHAKE", "STAND", "WRITING"], difficulty: 4, kind: "wordplay", redHerring: "BAG and SHAKE may suggest pen types, but each forms a familiar compound after HAND." },
    ],
    decoys: ["MAIL", "BAG"],
  },
  {
    id: 146,
    groups: [
      { label: "Wind instruments", words: ["BAGPIPES", "OCARINA", "KAZOO", "HARMONICA"], difficulty: 1, kind: "category", redHerring: "HARMONICA is also a mouth-blown instrument, a trap toward the other instruments." },
      { label: "Things with keys", words: ["PIANO", "MAP", "LOCK", "KEYBOARD"], difficulty: 2, kind: "category", redHerring: "PIANO and KEYBOARD are instruments, which tempts a music group that is not in this puzzle." },
      { label: "Words that precede SIDE", words: ["KICK", "ROAD", "SHOW", "SADDLE"], difficulty: 3, kind: "wordplay", redHerring: "KICK and ROAD can suggest wind instruments, but each forms a familiar compound with SIDE." },
      { label: "Words that follow STONE", words: ["COLD", "WALL", "FRUIT", "AGE"], difficulty: 4, kind: "wordplay", redHerring: "COLD and WALL may suggest things with keys, but each forms a familiar compound after STONE." },
    ],
    decoys: ["KICK", "COLD"],
  },
  {
    id: 147,
    groups: [
      { label: "Space", words: ["ROCKET", "SATELLITE", "ASTEROID", "ORBIT"], difficulty: 1, kind: "category", redHerring: "ORBIT is also an eye socket, a trap toward body parts." },
      { label: "Things that ring", words: ["PHONE", "DOORBELL", "ALARM", "SIREN"], difficulty: 2, kind: "category", redHerring: "SIREN is also a mythical sea creature, a trap toward myth." },
      { label: "Words that precede WATER", words: ["FALL", "MELON", "PROOF", "WORKS"], difficulty: 3, kind: "wordplay", redHerring: "FALL and MELON can suggest space, but each forms a familiar compound with WATER." },
      { label: "Words that follow MOON", words: ["FULL", "HARVEST", "HONEY", "BLUE"], difficulty: 4, kind: "wordplay", redHerring: "FULL and HARVEST may suggest things that ring, but each forms a familiar compound after MOON." },
    ],
    decoys: ["FALL", "FULL"],
  },
  {
    id: 148,
    groups: [
      { label: "Programming languages", words: ["JAVA", "PERL", "COBOL", "FORTRAN"], difficulty: 1, kind: "category", redHerring: "JAVA is also coffee, a trap toward drinks." },
      { label: "Jewellery", words: ["BRACELET", "NECKLACE", "BROOCH", "ANKLET"], difficulty: 2, kind: "category", redHerring: "BROOCH is also a clasp for fastening, a trap toward fastenings." },
      { label: "Words that precede SNOW", words: ["BALL", "FLAKE", "DRIFT", "PLOW"], difficulty: 3, kind: "wordplay", redHerring: "BALL and FLAKE can suggest programming languages, but each forms a familiar compound with SNOW." },
      { label: "Words that follow GOLD", words: ["RUSH", "FISH", "LEAF", "MEDAL"], difficulty: 4, kind: "wordplay", redHerring: "RUSH and FISH may suggest jewellery, but each forms a familiar compound after GOLD." },
    ],
    decoys: ["BALL", "RUSH"],
  },
  {
    id: 149,
    groups: [
      { label: "Weather", words: ["SLEET", "HAIL", "FOG", "MIST"], difficulty: 1, kind: "category", redHerring: "HAIL is also a greeting, and MIST is also a kind of cloud, so both can drift elsewhere." },
      { label: "Coins", words: ["NICKEL", "DIME", "QUARTER", "DOUBLOON"], difficulty: 2, kind: "category", redHerring: "QUARTER is also a part of an hour, a trap toward time." },
      { label: "Words that precede FOOT", words: ["BALL", "BRIDGE", "PRINT", "LOOSE"], difficulty: 3, kind: "wordplay", redHerring: "BALL and BRIDGE can suggest weather, but each forms a familiar compound with FOOT." },
      { label: "Words that follow SILVER", words: ["LINING", "SCREEN", "SPOON", "BELLS"], difficulty: 4, kind: "wordplay", redHerring: "LINING and SCREEN may suggest coins, but each forms a familiar compound after SILVER." },
    ],
    decoys: ["BALL", "LINING"],
  },
  {
    id: 150,
    groups: [
      { label: "Sea creatures", words: ["SQUID", "OCTOPUS", "MANTA", "STARFISH"], difficulty: 1, kind: "category", redHerring: "MANTA is also a kind of ray, which could pull you toward fish." },
      { label: "Dances", words: ["TANGO", "WALTZ", "SALSA", "POLKA"], difficulty: 2, kind: "category", redHerring: "SALSA is also a tomato sauce, which tempts a food reading, but the group is dances." },
      { label: "Words that precede CROSS", words: ["WORD", "WALK", "BOW", "ROADS"], difficulty: 3, kind: "wordplay", redHerring: "WORD and WALK can suggest sea creatures, but each forms a familiar compound with CROSS." },
      { label: "Words that follow BELL", words: ["HOP", "FLOWER", "TOWER", "PEPPER"], difficulty: 4, kind: "wordplay", redHerring: "HOP and FLOWER may suggest dances, but each forms a familiar compound after BELL." },
    ],
    decoys: ["WORD", "HOP"],
  },
  {
    id: 151,
    groups: [
      { label: "Nursery rhyme characters", words: ["JACK", "JILL", "HUMPTY", "BOPEEP"], difficulty: 1, kind: "category", redHerring: "JACK is also a playing card, which can pull toward card games." },
      { label: "Words that go before POT", words: ["FLOWER", "TEA", "HOT", "CRACK"], difficulty: 2, kind: "category", redHerring: "TEA is also a drink, which can pull toward drinks." },
      { label: "Words that precede HONEY", words: ["BEE", "MOON", "COMB", "POT"], difficulty: 3, kind: "wordplay", redHerring: "BEE and MOON can suggest nursery rhyme characters, but each forms a familiar compound with HONEY." },
      { label: "Words that follow BREAD", words: ["CRUMB", "STICK", "WINNER", "LINE"], difficulty: 4, kind: "wordplay", redHerring: "CRUMB and STICK may suggest words that go before pot, but each forms a familiar compound after BREAD." },
    ],
    decoys: ["BEE", "CRUMB"],
  },
  {
    id: 152,
    groups: [
      { label: "Sweets", words: ["TOFFEE", "FUDGE", "NOUGAT", "MARZIPAN"], difficulty: 1, kind: "category", redHerring: "FUDGE is also a word for a made-up or dodgy result, a trap for word lovers." },
      { label: "Words that go before BEAR", words: ["TEDDY", "GUMMY", "HONEY", "SUN"], difficulty: 2, kind: "category", redHerring: "HONEY is also a food, which can pull toward the food groups." },
      { label: "Words that precede EARTH", words: ["WORM", "QUAKE", "BOUND", "WORK"], difficulty: 3, kind: "wordplay", redHerring: "WORM and QUAKE can suggest sweets, but each forms a familiar compound with EARTH." },
      { label: "Words that follow RAIN", words: ["BOW", "CHECK", "DROP", "FOREST"], difficulty: 4, kind: "wordplay", redHerring: "BOW and CHECK may suggest words that go before bear, but each forms a familiar compound after RAIN." },
    ],
    decoys: ["WORM", "BOW"],
  },
  {
    id: 153,
    groups: [
      { label: "Things in a library", words: ["SHELF", "INDEX", "CATALOGUE", "BOOKMARK"], difficulty: 1, kind: "category", redHerring: "INDEX is also a finger, which can pull toward body parts." },
      { label: "Fish", words: ["SARDINE", "TURBOT", "GUDGEON", "SKATE"], difficulty: 2, kind: "category", redHerring: "SKATE is also a sport on wheels, a trap toward sports." },
      { label: "Words that precede WILD", words: ["CARD", "FIRE", "LIFE", "GOOSE"], difficulty: 3, kind: "wordplay", redHerring: "CARD and FIRE can suggest things in a library, but each forms a familiar compound with WILD." },
      { label: "Words that follow PAPER", words: ["CLIP", "JAM", "ROUTE", "TRAIL"], difficulty: 4, kind: "wordplay", redHerring: "CLIP and JAM may suggest fish, but each forms a familiar compound after PAPER." },
    ],
    decoys: ["CARD", "CLIP"],
  },
  {
    id: 154,
    groups: [
      { label: "Sea mammals", words: ["DOLPHIN", "WALRUS", "MANATEE", "NARWHAL"], difficulty: 1, kind: "category", redHerring: "WALRUS is also a large moustache, a trap toward facial hair." },
      { label: "Dentist's tools", words: ["DRILL", "FLOSS", "SUCTION", "PROBE"], difficulty: 2, kind: "category", redHerring: "DRILL is also a practice exercise, a trap toward school." },
      { label: "Words that precede RED", words: ["CARPET", "TAPE", "WOOD", "HANDED"], difficulty: 3, kind: "wordplay", redHerring: "CARPET and TAPE can suggest sea mammals, but each forms a familiar compound with RED." },
      { label: "Words that follow NIGHT", words: ["OWL", "CAP", "LIGHT", "SHADE"], difficulty: 4, kind: "wordplay", redHerring: "OWL and CAP may suggest dentist's tools, but each forms a familiar compound after NIGHT." },
    ],
    decoys: ["CARPET", "OWL"],
  },
  {
    id: 155,
    groups: [
      { label: "Jobs", words: ["BAKER", "PLUMBER", "SURGEON", "MASON"], difficulty: 1, kind: "category", redHerring: "MASON is also a freemason, a trap toward secret societies." },
      { label: "Desserts", words: ["TRIFLE", "MOUSSE", "SORBET", "PUDDING"], difficulty: 2, kind: "category", redHerring: "TRIFLE is also a word for something unimportant, which can mislead you." },
      { label: "Words that precede HIGH", words: ["HORSE", "TIDE", "WAY", "LIGHT"], difficulty: 3, kind: "wordplay", redHerring: "HORSE and TIDE can suggest jobs, but each forms a familiar compound with HIGH." },
      { label: "Words that follow SCHOOL", words: ["BUS", "BOOK", "MATE", "YARD"], difficulty: 4, kind: "wordplay", redHerring: "BUS and BOOK may suggest desserts, but each forms a familiar compound after SCHOOL." },
    ],
    decoys: ["HORSE", "BUS"],
  },
  {
    id: 156,
    groups: [
      { label: "Ways to cook eggs", words: ["POACH", "SCRAMBLE", "OMELETTE", "FRITTATA"], difficulty: 1, kind: "category", redHerring: "SCRAMBLE is also a rush, a trap toward speed." },
      { label: "Things that can be cracked", words: ["JOKE", "CODE", "SAFE", "EGG"], difficulty: 2, kind: "category", redHerring: "EGG is also a food, which can pull toward the food groups." },
      { label: "Words that precede SUN", words: ["RISE", "SET", "SPOT", "BURN"], difficulty: 3, kind: "wordplay", redHerring: "RISE and SET can suggest ways to cook eggs, but each forms a familiar compound with SUN." },
      { label: "Words that follow FLOWER", words: ["BED", "POT", "CHILD", "POWER"], difficulty: 4, kind: "wordplay", redHerring: "BED and POT may suggest things that can be cracked, but each forms a familiar compound after FLOWER." },
    ],
    decoys: ["RISE", "BED"],
  },
  {
    id: 157,
    groups: [
      { label: "Garden features", words: ["POND", "GAZEBO", "PATIO", "SHED"], difficulty: 1, kind: "category", redHerring: "POND is also a small lake, a trap toward lakes." },
      { label: "Gases", words: ["NITROGEN", "HYDROGEN", "ARGON", "METHANE"], difficulty: 2, kind: "category", redHerring: "ARGON is also a name, a trap toward names." },
      { label: "Words that precede WIND", words: ["CHILL", "FALL", "PIPE", "UP"], difficulty: 3, kind: "wordplay", redHerring: "CHILL and FALL can suggest garden features, but each forms a familiar compound with WIND." },
      { label: "Words that follow MILL", words: ["STONE", "WHEEL", "RACE", "WORK"], difficulty: 4, kind: "wordplay", redHerring: "STONE and WHEEL may suggest gases, but each forms a familiar compound after MILL." },
    ],
    decoys: ["CHILL", "STONE"],
  },
  {
    id: 158,
    groups: [
      { label: "Musical instruments", words: ["CELLO", "OBOE", "HARP", "TUBA"], difficulty: 1, kind: "category", redHerring: "HARP is also a verb meaning to keep returning to one subject, a word-play trap." },
      { label: "Striped things", words: ["BARCODE", "PEPPERMINT", "AWNING", "PYJAMAS"], difficulty: 2, kind: "category", redHerring: "PEPPERMINT is also a herb, a trap toward herbs." },
      { label: "Words that precede MIND", words: ["SET", "READ", "BLIND", "OVER"], difficulty: 3, kind: "wordplay", redHerring: "SET and READ can suggest musical instruments, but each forms a familiar compound with MIND." },
      { label: "Words that follow GAME", words: ["PLAN", "SHOW", "POINT", "PLAY"], difficulty: 4, kind: "wordplay", redHerring: "PLAN and SHOW may suggest striped things, but each forms a familiar compound after GAME." },
    ],
    decoys: ["SET", "PLAN"],
  },
  {
    id: 159,
    groups: [
      { label: "Parts of the eye", words: ["IRIS", "PUPIL", "LENS", "RETINA"], difficulty: 1, kind: "category", redHerring: "IRIS is also a flower, so it can be pulled toward plants." },
      { label: "Wheeled vehicles", words: ["SKATEBOARD", "TRAM", "WHEELBARROW", "SCOOTER"], difficulty: 2, kind: "category", redHerring: "TRAM runs on rails, which might pull toward railways, but it is a wheeled vehicle here." },
      { label: "Words that precede TIME", words: ["TABLE", "KEEPER", "LESS", "ZONE"], difficulty: 3, kind: "wordplay", redHerring: "TABLE and KEEPER can suggest parts of the eye, but each forms a familiar compound with TIME." },
      { label: "Words that follow LINE", words: ["DANCE", "BACK", "DRIVE", "UP"], difficulty: 4, kind: "wordplay", redHerring: "DANCE and BACK may suggest wheeled vehicles, but each forms a familiar compound after LINE." },
    ],
    decoys: ["TABLE", "DANCE"],
  },
  {
    id: 160,
    groups: [
      { label: "Insects", words: ["BEETLE", "MOTH", "WASP", "LADYBUG"], difficulty: 1, kind: "category", redHerring: "WASP is also a stinging creature, which can pull toward the stinging group." },
      { label: "Desert animals", words: ["CAMEL", "GECKO", "JACKAL", "MEERKAT"], difficulty: 2, kind: "category", redHerring: "JACKAL is also slang for a person who does another's work, a word trap." },
      { label: "Words that precede DUST", words: ["GOLD", "BOWL", "COVER", "STORM"], difficulty: 3, kind: "wordplay", redHerring: "GOLD and BOWL can suggest insects, but each forms a familiar compound with DUST." },
      { label: "Words that follow JACKET", words: ["POTATO", "LIFE", "POCKET", "BOOK"], difficulty: 4, kind: "wordplay", redHerring: "POTATO and LIFE may suggest desert animals, but each forms a familiar compound after JACKET." },
    ],
    decoys: ["GOLD", "POTATO"],
  },
  {
    id: 161,
    groups: [
      { label: "Fairy-tale things", words: ["BEANSTALK", "SLIPPER", "MIRROR", "CRUMB"], difficulty: 1, kind: "category", redHerring: "MIRROR is also a reflective glass, a trap toward light objects." },
      { label: "Pastry types", words: ["PUFF", "FILO", "CHOUX", "SHORTCRUST"], difficulty: 2, kind: "category", redHerring: "CHOUX is a French word for cabbage, a trap toward vegetables." },
      { label: "Words that precede FIRE", words: ["CAMP", "CROSS", "OPEN", "RAPID"], difficulty: 3, kind: "wordplay", redHerring: "CAMP and CROSS can suggest fairy-tale things, but each forms a familiar compound with FIRE." },
      { label: "Words that follow BIRD", words: ["CAGE", "SEED", "CALL", "WATCH"], difficulty: 4, kind: "wordplay", redHerring: "CAGE and SEED may suggest pastry types, but each forms a familiar compound after BIRD." },
    ],
    decoys: ["CAMP", "CAGE"],
  },
  {
    id: 162,
    groups: [
      { label: "Fairground rides", words: ["CAROUSEL", "DODGEMS", "TEACUPS", "ROLLERCOASTER"], difficulty: 1, kind: "category", redHerring: "TEACUPS are also crockery, which can pull toward the kitchen." },
      { label: "Water sports", words: ["WATERSKI", "SNORKEL", "KITESURF", "PARASAIL"], difficulty: 2, kind: "category", redHerring: "PARASAIL is close to parasol, a spelling trap." },
      { label: "Words that precede STAR", words: ["NORTH", "ROCK", "SHOOTING", "SUPER"], difficulty: 3, kind: "wordplay", redHerring: "NORTH and ROCK can suggest fairground rides, but each forms a familiar compound with STAR." },
      { label: "Words that follow BACK", words: ["PACK", "YARD", "STAGE", "BONE"], difficulty: 4, kind: "wordplay", redHerring: "PACK and YARD may suggest water sports, but each forms a familiar compound after BACK." },
    ],
    decoys: ["NORTH", "PACK"],
  },
  {
    id: 163,
    groups: [
      { label: "Sports", words: ["CRICKET", "BADMINTON", "JUDO", "KARATE"], difficulty: 1, kind: "category", redHerring: "CRICKET is also an insect, a trap toward insects." },
      { label: "Famous scientists", words: ["NEWTON", "CURIE", "DARWIN", "EINSTEIN"], difficulty: 2, kind: "category", redHerring: "NEWTON is also a unit of force, which fits the units group, and DARWIN is a city in Australia." },
      { label: "Words that precede BLUE", words: ["MOON", "GRASS", "PRINT", "BERRY"], difficulty: 3, kind: "wordplay", redHerring: "MOON and GRASS can suggest sports, but each forms a familiar compound with BLUE." },
      { label: "Words that follow COLD", words: ["SNAP", "WAR", "CASE", "FRONT"], difficulty: 4, kind: "wordplay", redHerring: "SNAP and WAR may suggest famous scientists, but each forms a familiar compound after COLD." },
    ],
    decoys: ["MOON", "SNAP"],
  },
  {
    id: 164,
    groups: [
      { label: "Shellfish", words: ["LOBSTER", "PRAWN", "MUSSEL", "SCALLOP"], difficulty: 1, kind: "category", redHerring: "SCALLOP is also a wavy sewing edge, a trap toward sewing." },
      { label: "Cartoon cats", words: ["GARFIELD", "TOM", "FELIX", "SYLVESTER"], difficulty: 2, kind: "category", redHerring: "TOM is also a male cat, a trap toward cats in general." },
      { label: "Words that precede GREEN", words: ["HOUSE", "GOOSE", "LIGHT", "ROOM"], difficulty: 3, kind: "wordplay", redHerring: "HOUSE and GOOSE can suggest shellfish, but each forms a familiar compound with GREEN." },
      { label: "Words that follow DARK", words: ["HORSE", "MATTER", "CHOCOLATE", "AGES"], difficulty: 4, kind: "wordplay", redHerring: "HORSE and MATTER may suggest cartoon cats, but each forms a familiar compound after DARK." },
    ],
    decoys: ["HOUSE", "HORSE"],
  },
  {
    id: 165,
    groups: [
      { label: "Mythical beasts", words: ["CENTAUR", "MINOTAUR", "CHIMERA", "HYDRA"], difficulty: 1, kind: "category", redHerring: "HYDRA is also a freshwater animal, a trap toward nature." },
      { label: "Newspaper sections", words: ["HEADLINE", "EDITORIAL", "OBITUARY", "CLASSIFIEDS"], difficulty: 2, kind: "category", redHerring: "EDITORIAL is also an opinion piece, a trap toward writing." },
      { label: "Words that precede BLACK", words: ["MAIL", "BOARD", "BERRY", "JACK"], difficulty: 3, kind: "wordplay", redHerring: "MAIL and BOARD can suggest mythical beasts, but each forms a familiar compound with BLACK." },
      { label: "Words that follow HAND", words: ["BAG", "SHAKE", "STAND", "WRITING"], difficulty: 4, kind: "wordplay", redHerring: "BAG and SHAKE may suggest newspaper sections, but each forms a familiar compound after HAND." },
    ],
    decoys: ["MAIL", "BAG"],
  },
  {
    id: 166,
    groups: [
      { label: "Olympic sports", words: ["DIVING", "GYMNASTICS", "WRESTLING", "DECATHLON"], difficulty: 1, kind: "category", redHerring: "DIVING is also a plunge, a trap toward water words." },
      { label: "Shapes", words: ["CRESCENT", "SPIRAL", "ZIGZAG", "WAVE"], difficulty: 2, kind: "category", redHerring: "CRESCENT is also a moon phase, a trap toward space." },
      { label: "Words that precede SIDE", words: ["KICK", "ROAD", "SHOW", "SADDLE"], difficulty: 3, kind: "wordplay", redHerring: "KICK and ROAD can suggest olympic sports, but each forms a familiar compound with SIDE." },
      { label: "Words that follow STONE", words: ["COLD", "WALL", "FRUIT", "AGE"], difficulty: 4, kind: "wordplay", redHerring: "COLD and WALL may suggest shapes, but each forms a familiar compound after STONE." },
    ],
    decoys: ["KICK", "COLD"],
  },
  {
    id: 167,
    groups: [
      { label: "Homes", words: ["COTTAGE", "MANSION", "VILLA", "CHALET"], difficulty: 1, kind: "category", redHerring: "CHALET is also a wooden holiday home, a trap toward holidays." },
      { label: "Parts of a flower", words: ["PETAL", "STEM", "SEPAL", "PISTIL"], difficulty: 2, kind: "category", redHerring: "STEM is also a verb meaning to stop a flow, but here it is a flower part." },
      { label: "Words that precede WATER", words: ["FALL", "MELON", "PROOF", "WORKS"], difficulty: 3, kind: "wordplay", redHerring: "FALL and MELON can suggest homes, but each forms a familiar compound with WATER." },
      { label: "Words that follow MOON", words: ["FULL", "HARVEST", "HONEY", "BLUE"], difficulty: 4, kind: "wordplay", redHerring: "FULL and HARVEST may suggest parts of a flower, but each forms a familiar compound after MOON." },
    ],
    decoys: ["FALL", "FULL"],
  },
  {
    id: 168,
    groups: [
      { label: "Basic shapes", words: ["CIRCLE", "SQUARE", "OVAL", "STAR"], difficulty: 1, kind: "category", redHerring: "SQUARE is also a polygon, so it can fit the polygons group as well." },
      { label: "Dairy products", words: ["YOGURT", "BUTTER", "CREAM", "WHEY"], difficulty: 2, kind: "category", redHerring: "BUTTER is also a verb for flattering someone, a word trap." },
      { label: "Words that precede SNOW", words: ["BALL", "FLAKE", "DRIFT", "PLOW"], difficulty: 3, kind: "wordplay", redHerring: "BALL and FLAKE can suggest basic shapes, but each forms a familiar compound with SNOW." },
      { label: "Words that follow GOLD", words: ["RUSH", "FISH", "LEAF", "MEDAL"], difficulty: 4, kind: "wordplay", redHerring: "RUSH and FISH may suggest dairy products, but each forms a familiar compound after GOLD." },
    ],
    decoys: ["BALL", "RUSH"],
  },
  {
    id: 169,
    groups: [
      { label: "Languages", words: ["HINDI", "SWAHILI", "TAMIL", "FRENCH"], difficulty: 1, kind: "category", redHerring: "FRENCH is also a kind of fries or a style of bread, which pulls toward food." },
      { label: "Fasteners", words: ["RIVET", "SCREW", "NAIL", "BOLT"], difficulty: 2, kind: "category", redHerring: "NAIL is also a body part, a trap toward body words." },
      { label: "Words that precede FOOT", words: ["BALL", "BRIDGE", "PRINT", "LOOSE"], difficulty: 3, kind: "wordplay", redHerring: "BALL and BRIDGE can suggest languages, but each forms a familiar compound with FOOT." },
      { label: "Words that follow SILVER", words: ["LINING", "SCREEN", "SPOON", "BELLS"], difficulty: 4, kind: "wordplay", redHerring: "LINING and SCREEN may suggest fasteners, but each forms a familiar compound after SILVER." },
    ],
    decoys: ["BALL", "LINING"],
  },
  {
    id: 170,
    groups: [
      { label: "Architectural features", words: ["ARCH", "DOME", "BUTTRESS", "COLUMN"], difficulty: 1, kind: "category", redHerring: "COLUMN is also a newspaper feature, a trap toward writing." },
      { label: "Fictional spies", words: ["BOND", "BOURNE", "SMILEY", "CONDOR"], difficulty: 2, kind: "category", redHerring: "BOND is also a financial certificate, a trap toward money." },
      { label: "Words that precede CROSS", words: ["WORD", "WALK", "BOW", "ROADS"], difficulty: 3, kind: "wordplay", redHerring: "WORD and WALK can suggest architectural features, but each forms a familiar compound with CROSS." },
      { label: "Words that follow BELL", words: ["HOP", "FLOWER", "TOWER", "PEPPER"], difficulty: 4, kind: "wordplay", redHerring: "HOP and FLOWER may suggest fictional spies, but each forms a familiar compound after BELL." },
    ],
    decoys: ["WORD", "HOP"],
  },
  {
    id: 171,
    groups: [
      { label: "Shades of blue", words: ["NAVY", "AZURE", "COBALT", "TEAL"], difficulty: 1, kind: "category", redHerring: "TEAL is also a small duck, which can pull toward birds." },
      { label: "Cat breeds", words: ["SIAMESE", "PERSIAN", "MANX", "BENGAL"], difficulty: 2, kind: "category", redHerring: "BENGAL is also a tiger, which could pull you toward big wild animals rather than cats." },
      { label: "Words that precede HONEY", words: ["BEE", "MOON", "COMB", "POT"], difficulty: 3, kind: "wordplay", redHerring: "BEE and MOON can suggest shades of blue, but each forms a familiar compound with HONEY." },
      { label: "Words that follow BREAD", words: ["CRUMB", "STICK", "WINNER", "LINE"], difficulty: 4, kind: "wordplay", redHerring: "CRUMB and STICK may suggest cat breeds, but each forms a familiar compound after BREAD." },
    ],
    decoys: ["BEE", "CRUMB"],
  },
  {
    id: 172,
    groups: [
      { label: "Hair accessories", words: ["SCRUNCHIE", "HAIRPIN", "TIARA", "HEADBAND"], difficulty: 1, kind: "category", redHerring: "TIARA is also a piece of jewellery, which pulls toward the jewellery group." },
      { label: "Things at sea", words: ["BUOY", "ANCHOR", "COMPASS", "TIDE"], difficulty: 2, kind: "category", redHerring: "COMPASS is also a range of subjects, which can pull toward school words." },
      { label: "Words that precede EARTH", words: ["WORM", "QUAKE", "BOUND", "WORK"], difficulty: 3, kind: "wordplay", redHerring: "WORM and QUAKE can suggest hair accessories, but each forms a familiar compound with EARTH." },
      { label: "Words that follow RAIN", words: ["BOW", "CHECK", "DROP", "FOREST"], difficulty: 4, kind: "wordplay", redHerring: "BOW and CHECK may suggest things at sea, but each forms a familiar compound after RAIN." },
    ],
    decoys: ["WORM", "BOW"],
  },
  {
    id: 173,
    groups: [
      { label: "Fish", words: ["HERRING", "PIKE", "CARP", "MARLIN"], difficulty: 1, kind: "category", redHerring: "PIKE is also a medieval weapon, a trap toward weapons." },
      { label: "Seeds", words: ["SESAME", "POPPY", "CHIA", "FLAX"], difficulty: 2, kind: "category", redHerring: "POPPY is also a flower, a trap toward flowers." },
      { label: "Words that precede WILD", words: ["CARD", "FIRE", "LIFE", "GOOSE"], difficulty: 3, kind: "wordplay", redHerring: "CARD and FIRE can suggest fish, but each forms a familiar compound with WILD." },
      { label: "Words that follow PAPER", words: ["CLIP", "JAM", "ROUTE", "TRAIL"], difficulty: 4, kind: "wordplay", redHerring: "CLIP and JAM may suggest seeds, but each forms a familiar compound after PAPER." },
    ],
    decoys: ["CARD", "CLIP"],
  },
  {
    id: 174,
    groups: [
      { label: "Words that go before SHOW", words: ["ROAD", "TALENT", "GAME", "TRADE"], difficulty: 1, kind: "category", redHerring: "ROAD is also a path, a trap toward travel." },
      { label: "Sculptors", words: ["RODIN", "BERNINI", "DONATELLO", "CANOVA"], difficulty: 2, kind: "category", redHerring: "CANOVA was Italian, which could pull toward the Italian painters." },
      { label: "Words that precede RED", words: ["CARPET", "TAPE", "WOOD", "HANDED"], difficulty: 3, kind: "wordplay", redHerring: "CARPET and TAPE can suggest words that go before show, but each forms a familiar compound with RED." },
      { label: "Words that follow NIGHT", words: ["OWL", "CAP", "LIGHT", "SHADE"], difficulty: 4, kind: "wordplay", redHerring: "OWL and CAP may suggest sculptors, but each forms a familiar compound after NIGHT." },
    ],
    decoys: ["CARPET", "OWL"],
  },
  {
    id: 175,
    groups: [
      { label: "Browns", words: ["TAN", "SEPIA", "UMBER", "CARAMEL"], difficulty: 1, kind: "category", redHerring: "CARAMEL is also a sweet, a trap toward sweets." },
      { label: "Shakespeare plays", words: ["HAMLET", "OTHELLO", "MACBETH", "TEMPEST"], difficulty: 2, kind: "category", redHerring: "HAMLET is also a small village and a cigar, which fit no literature group here." },
      { label: "Words that precede HIGH", words: ["HORSE", "TIDE", "WAY", "LIGHT"], difficulty: 3, kind: "wordplay", redHerring: "HORSE and TIDE can suggest browns, but each forms a familiar compound with HIGH." },
      { label: "Words that follow SCHOOL", words: ["BUS", "BOOK", "MATE", "YARD"], difficulty: 4, kind: "wordplay", redHerring: "BUS and BOOK may suggest shakespeare plays, but each forms a familiar compound after SCHOOL." },
    ],
    decoys: ["HORSE", "BUS"],
  },
  {
    id: 176,
    groups: [
      { label: "Chess terms", words: ["GAMBIT", "CASTLE", "CHECK", "MATE"], difficulty: 1, kind: "category", redHerring: "CASTLE is also a building, a trap toward buildings." },
      { label: "Casino games", words: ["ROULETTE", "BLACKJACK", "KENO", "BACCARAT"], difficulty: 2, kind: "category", redHerring: "BLACKJACK is also a pirate flag, which can pull toward a pirate theme." },
      { label: "Words that precede SUN", words: ["RISE", "SET", "SPOT", "BURN"], difficulty: 3, kind: "wordplay", redHerring: "RISE and SET can suggest chess terms, but each forms a familiar compound with SUN." },
      { label: "Words that follow FLOWER", words: ["BED", "POT", "CHILD", "POWER"], difficulty: 4, kind: "wordplay", redHerring: "BED and POT may suggest casino games, but each forms a familiar compound after FLOWER." },
    ],
    decoys: ["RISE", "BED"],
  },
  {
    id: 177,
    groups: [
      { label: "Toys", words: ["KITE", "MARBLES", "TOP", "DOLL"], difficulty: 1, kind: "category", redHerring: "TOP could mean the top of a list, but it also describes a spinning toy." },
      { label: "Breakfast cereals", words: ["CORNFLAKES", "MUESLI", "PORRIDGE", "GRANOLA"], difficulty: 2, kind: "category", redHerring: "CORNFLAKES contains corn, a trap toward crops." },
      { label: "Words that precede WIND", words: ["CHILL", "FALL", "PIPE", "UP"], difficulty: 3, kind: "wordplay", redHerring: "CHILL and FALL can suggest toys, but each forms a familiar compound with WIND." },
      { label: "Words that follow MILL", words: ["STONE", "WHEEL", "RACE", "WORK"], difficulty: 4, kind: "wordplay", redHerring: "STONE and WHEEL may suggest breakfast cereals, but each forms a familiar compound after MILL." },
    ],
    decoys: ["CHILL", "STONE"],
  },
  {
    id: 178,
    groups: [
      { label: "Gemstones", words: ["RUBY", "OPAL", "JADE", "ONYX"], difficulty: 1, kind: "category", redHerring: "JADE is also a shade of green, so it can pull toward colours." },
      { label: "Musicals", words: ["CATS", "EVITA", "GREASE", "ANNIE"], difficulty: 2, kind: "category", redHerring: "ANNIE is also a common name, a trap toward names." },
      { label: "Words that precede MIND", words: ["SET", "READ", "BLIND", "OVER"], difficulty: 3, kind: "wordplay", redHerring: "SET and READ can suggest gemstones, but each forms a familiar compound with MIND." },
      { label: "Words that follow GAME", words: ["PLAN", "SHOW", "POINT", "PLAY"], difficulty: 4, kind: "wordplay", redHerring: "PLAN and SHOW may suggest musicals, but each forms a familiar compound after GAME." },
    ],
    decoys: ["SET", "PLAN"],
  },
  {
    id: 179,
    groups: [
      { label: "Inventors", words: ["EDISON", "TESLA", "TURING", "BELL"], difficulty: 1, kind: "category", redHerring: "BELL is also a sound, which pulls toward the ringing group." },
      { label: "Metals", words: ["IRON", "TIN", "LEAD", "ZINC"], difficulty: 2, kind: "category", redHerring: "LEAD is also a verb meaning to guide, and TIN is a container, so both can mislead." },
      { label: "Words that precede TIME", words: ["TABLE", "KEEPER", "LESS", "ZONE"], difficulty: 3, kind: "wordplay", redHerring: "TABLE and KEEPER can suggest inventors, but each forms a familiar compound with TIME." },
      { label: "Words that follow LINE", words: ["DANCE", "BACK", "DRIVE", "UP"], difficulty: 4, kind: "wordplay", redHerring: "DANCE and BACK may suggest metals, but each forms a familiar compound after LINE." },
    ],
    decoys: ["TABLE", "DANCE"],
  },
  {
    id: 180,
    groups: [
      { label: "Cartoon dogs", words: ["SNOOPY", "PLUTO", "GOOFY", "SCOOBY"], difficulty: 1, kind: "category", redHerring: "GOOFY is also an everyday adjective, which can pull toward words." },
      { label: "Ancient wonders", words: ["PYRAMID", "COLOSSUS", "LIGHTHOUSE", "MAUSOLEUM"], difficulty: 2, kind: "category", redHerring: "PYRAMID is also a shape, but the link here is the ancient wonders." },
      { label: "Words that precede DUST", words: ["GOLD", "BOWL", "COVER", "STORM"], difficulty: 3, kind: "wordplay", redHerring: "GOLD and BOWL can suggest cartoon dogs, but each forms a familiar compound with DUST." },
      { label: "Words that follow JACKET", words: ["POTATO", "LIFE", "POCKET", "BOOK"], difficulty: 4, kind: "wordplay", redHerring: "POTATO and LIFE may suggest ancient wonders, but each forms a familiar compound after JACKET." },
    ],
    decoys: ["GOLD", "POTATO"],
  },
];
