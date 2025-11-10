// --- 🎲 SPELL TABLES ---
const spellTables = {
  "Cantrip": ["Acid Splash","Blade Ward","Chill Touch","Control Flames","Create Bonfire","Dancing Lights","Druidcraft","Eldritch Blast","Fire Bolt","Friends","Frostbite","Guidance","Gust","Light","Mage Hand","Magic Stone","Mending","Message","Minor Illusion","Mold Earth","Poison Spray","Prestidigitation","Produce Flame","Ray of Frost","Resistance","Sacred Flame","Shape Water","Shillelagh","Shocking Grasp","Spare the Dying","Thaumaturgy","Thorn Whip","Thunderclap","True Strike","Vicious Mockery"],
  "1": ["Absorb Elements","Alarm","Animal Friendship","Armor of Agathys","Arms of Hadar","Bane","Beast Bond","Bless","Burning Hands","Catapult","Charm Person","Chromatic Orb","Color Spray","Command","Compelled Duel","Comprehend Languages","Create or Destroy Water","Cure Wounds","Detect Magic","Disguise Self","Dissonant Whispers","Divine Favor","Entangle","Faerie Fire","False Life","Feather Fall","Find Familiar","Fog Cloud","Goodberry","Grease","Guiding Bolt","Healing Word","Hellish Rebuke","Heroism","Hex","Hunter's Mark","Ice Knife","Identify","Inflict Wounds","Mage Armor","Magic Missile","Protection from Good & Evil","Ray of Sickness","Sanctuary","Searing Smite","Shield","Silent Image","Sleep","Thunderwave","Witch Bolt"],
  "2": ["Acid Arrow","Aganazzar's Scorcher","Aid","Alter Self","Arcane Lock","Blur","Calm Emotions","Cloud of Daggers","Darkness","Darkvision","Enlarge/Reduce","Find Steed","Flaming Sphere","Heat Metal","Hold Person","Invisibility","Knock","Lesser Restoration","Levitate","Misty Step","Moonbeam","Scorching Ray","Shatter","Silence","Spider Climb","Spike Growth","Spiritual Weapon","Suggestion","Web","Zone of Truth"],
  "3": ["Animate Dead","Bestow Curse","Blink","Call Lightning","Counterspell","Dispel Magic","Fireball","Fly","Gaseous Form","Haste","Hypnotic Pattern","Lightning Bolt","Major Image","Revivify","Slow","Tiny Hut","Water Breathing"],
  "4": ["Banishment","Blight","Confusion","Dimension Door","Greater Invisibility","Ice Storm","Polymorph","Stoneskin","Wall of Fire"],
  "5": ["Animate Objects","Cloudkill","Cone of Cold","Dominate Person","Dream","Geas","Hold Monster","Legend Lore","Raise Dead","Scrying","Teleportation Circle","Wall of Force"],
  "6": ["Blade Barrier","Chain Lightning","Circle of Death","Contingency","Disintegrate","Eyebite","Heal","Mass Suggestion","Move Earth","Sunbeam","True Seeing"],
  "7": ["Finger of Death","Forcecage","Mirage Arcane","Plane Shift","Prismatic Spray","Regenerate","Resurrection","Simulacrum","Teleport"],
  "8": ["Antimagic Field","Clone","Control Weather","Dominate Monster","Earthquake","Feeblemind","Incendiary Cloud","Mind Blank","Sunburst","Tsunami"],
  "9": ["Astral Projection","Foresight","Gate","Imprisonment","Mass Heal","Meteor Swarm","Power Word Kill","Shapechange","Time Stop","True Polymorph","Wish"]
};

// --- 💰 COIN TABLES ---
// Dice format: [count, dieSize]
// Some coin counts might be 0 (e.g. 0d6)
const coinTables = {
  "0-4":  { cp: [1, 10], sp: [1, 4], gp: [0, 0], pp: [0, 0] },
  "5-10": { cp: [2, 10], sp: [1, 6], gp: [1, 4], pp: [0, 0] },
  "11-16":{ cp: [3, 10], sp: [2, 6], gp: [2, 4], pp: [1, 2] },
  "17-20":{ cp: [4, 10], sp: [3, 6], gp: [3, 4], pp: [1, 4] },
  "21+":  { cp: [5, 10], sp: [4, 6], gp: [4, 4], pp: [2, 4] }
};

// === 🪄 MAGIC ITEMS — Weighted DMG-Style Tables ===
// Each item is repeated to increase its chance of being rolled.
const magicItems = {
  common: [
    "Potion of Healing","Potion of Healing","Potion of Healing","Potion of Healing",
    "Spell Scroll (Cantrip)","Spell Scroll (1st Level)","Spell Scroll (1st Level)",
    "Ammunition +1","Potion of Climbing","Potion of Climbing",
    "Cloak of Billowing","Cloak of Billowing",
    "Driftglobe"
  ],
  uncommon: [
    "Bag of Holding","Bag of Holding","Potion of Greater Healing","Potion of Greater Healing",
    "Boots of Elvenkind","Cloak of Protection","Cloak of Protection",
    "Ring of Water Walking","Ring of Water Walking",
    "Wand of Magic Missiles","Weapon +1","Alchemy Jug",
    "Winged Boots","Rope of Climbing","Gloves of Missile Snaring"
  ],
  rare: [
    "Amulet of Health","Weapon +2","Armor +1",
    "Cloak of Displacement","Cloak of Displacement","Wand of Fireballs",
    "Belt of Hill Giant Strength","Necklace of Fireballs",
    "Cape of the Mountebank","Potion of Superior Healing","Potion of Superior Healing"
  ],
  veryRare: [
    "Weapon +3","Armor +2","Staff of Power","Ring of Regeneration","Ring of Regeneration",
    "Rod of Absorption","Manual of Quickness of Action",
    "Cloak of Invisibility","Horn of Valhalla (Silver)","Tome of Leadership and Influence"
  ],
  legendary: [
    "Vorpal Sword","Vorpal Sword",
    "Staff of the Magi","Holy Avenger","Ring of Three Wishes",
    "Sword of Answering","Talisman of Pure Good","Staff of the Archmagi",
    "Rod of Lordly Might","Book of Exalted Deeds"
  ]
};

document.getElementById("magicButton").addEventListener("click", () => {
  const rarity = document.getElementById("raritySelect").value;
  const table = magicItems[rarity];
  const item = table[Math.floor(Math.random() * table.length)];
  document.getElementById("magicResult").textContent = `✨ ${item} ✨`;
});

// === 🎁 TRINKETS ===
// Source: Player's Handbook Trinkets Table (abridged + full set extendable)
const trinkets = [
  "A mummified goblin hand", "A piece of crystal that faintly glows in the moonlight",  "A gold coin minted in an unknown land", "A diary written in a language you don't know",
  "A brass ring that never tarnishes",  "An old chess piece made of glass",
  "A pair of knucklebone dice showing the same number on both sides",  "A small idol depicting a nightmarish creature, gives you unsettling dreams when kept near",  "A pouch made of human skin",
  "A tiny sketch portrait of a goblin",  "An empty glass vial with a label marked 'dragon's blood'",
  "A wooden top that spins silently no matter the surface",  "A metal urn containing the ashes of a hero",
  "A whistle made from bone that emits no sound",  "A dead scarab beetle the size of your hand",
  "A mechanical canary inside a filigree box, ticking but broken",  "A glass orb filled with moving smoke",
  "A silver spoon with a hole in the middle",  "A small, mirror that reflects a strange version of you",
  "A small flag with unknown heraldry",  "A tiny wooden coffin containing a lock of hair",
  "A black pirate flag",  "A necklace made of animal teeth",  "A tiny silver bell that rings on its own occasionally",
  "A black book filled with odd runes that change daily",  "A glass bottle full of nail clippings",
  "A preserved toad in a jar",  "A small box that is always cold to the touch",
  "A key to an unknown door",  "A severed finger with a ring still attached",
  "A broken arrow fletched with peacock feathers",  "A mummified mouse",
  "A locket with a curl of red hair",  "A vial of black ichor",
  "A polished stone with a hole through the center",  "A candle that burns with blue flame",  "A bent fork that hums softly when struck",  "A small bronze mask of a child's face",  "A bird's skull strung on leather cord",
  "A four-leaf clover pressed between parchment",  "A bloodstained doll",
  "A page torn from a holy text",  "A cameo carved from ivory, depicting a weeping woman",
  "A small glass vial filled with sand from a desert",  "A painted wooden toy soldier missing an arm",
  "A shriveled monkey paw",  "A dagger with a chipped blade",  "A small iron cage with an invisible creature that purrs when fed",  "A petrified frog wearing tiny clothing",  "A deck of cards with all kings",
  "A pair of spectacles with cracked lenses",  "A fossilized snail shell",
  "A copper cup engraved with dwarvish runes",  "A crystal pendant that glows faintly in darkness",
  "A faded love letter signed only 'E'",  "A ring carved from bone",  "A cracked monocle",
  "A whistle that summons no sound but smells faintly of roses",  "A coin with a hole in the center",
  "A wine cork engraved with an arcane sigil",  "A wooden amulet carved in the shape of a leaf",
  "A painted stone that looks like an eyeball",  "A necklace of dried flowers still faintly fragrant",
  "A wax seal with a stylized raven emblem",  "A piece of obsidian shaped like a dagger",  
  "A small hourglass that never runs out",  "A petrified eyeball",
  "A page of sheet music titled 'Lament for the Lost'",  "A charred fragment of a map",
    "A child's tooth in a silver box",  "A folded piece of paper that whispers when opened",
  "A small key that vibrates near locks",  "A silver button engraved with a tree",
  "A brass spyglass missing a lens",  "A glass eye painted to look reptilian",
  "A raven feather that never gets wet",  "A stone carved with your initials—though you never made it",
  "A dried lizard tail",  "A marble that always rolls toward the nearest door",
  "A cracked hourglass that runs backward",  "A red ribbon that cannot be cut",
  "A small music box that plays a lullaby you've never heard",  "A bone comb missing half its teeth",
  "A silver coin with two heads",  "A letter addressed to you, signed by your future self",
  "A page from a book that glows when moonlight hits it",  "A tiny locked chest with no keyhole",
  "A brass music note that floats in midair when released",  "A candle that won't stay lit",
    "A gemstone that feels warm to the touch",  "A scrap of cloth from an ancient banner",
  "A clay figurine of a smiling demon",  "A black feather that absorbs light",
  "A tiny hourglass with red sand",  "A rusted holy symbol of a forgotten god",
  "A book that only has blank pages but smells of ink",  "A small coin purse that meows when opened",
  "A seashell that echoes laughter",  "A gold tooth with runes",
  "A preserved butterfly with metallic wings",  "A wooden ring that floats in water",
  "A silver locket that hums faintly",  "A perfectly round stone sphere",  "A quill that never runs out of ink"
];

document.getElementById("trinketButton").addEventListener("click", () => {
  const randomTrinket = trinkets[Math.floor(Math.random() * trinkets.length)];
  document.getElementById("trinketResult").textContent = `🎁 ${randomTrinket}`;
});

// --- Utility ---
function rollDice(count, sides) {
  if (count <= 0 || sides <= 0) return 0;
  let total = 0;
  for (let i = 0; i < count; i++) total += Math.floor(Math.random() * sides) + 1;
  return total;
}

// --- Spell Generator ---
document.getElementById("spellButton").addEventListener("click", () => {
  const level = document.getElementById("spellLevel").value;
  const spells = spellTables[level];
  const randomSpell = spells[Math.floor(Math.random() * spells.length)];
  document.getElementById("spellResult").textContent = `✨ ${randomSpell} ✨`;
});

// --- Coin Generator ---
document.getElementById("coinButton").addEventListener("click", () => {
  const cr = document.getElementById("crRange").value;
  const table = coinTables[cr];
  const results = [];

  for (const [type, dice] of Object.entries(table)) {
    const [count, sides] = dice;
    let rolled = rollDice(count, sides);

    // 25% chance no coins of this type (simulate poor loot)
    if (Math.random() < 0.25) rolled = 0;

    if (rolled > 0) results.push(`${rolled} ${type.toUpperCase()}`);
  }

  document.getElementById("coinResult").textContent =
    results.length > 0 ? results.join(" • ") : "No coins found!";
});

// === 🧠 UTILITY ===
function rollDice(count, sides) {
  if (count <= 0 || sides <= 0) return 0;
  let total = 0;
  for (let i = 0; i < count; i++) total += Math.floor(Math.random() * sides) + 1;
  return total;
}

// === 🎁 TRINKET GENERATOR ===
document.getElementById("trinketButton").addEventListener("click", () => {
  const randomTrinket = trinkets[Math.floor(Math.random() * trinkets.length)];
  document.getElementById("trinketResult").textContent = `🎁 ${randomTrinket}`;
});

// === 🪄 MAGIC ITEM GENERATOR ===
document.getElementById("magicButton").addEventListener("click", () => {
  const rarity = document.getElementById("raritySelect").value;
  const table = magicItems[rarity];
  const randomItem = table[Math.floor(Math.random() * table.length)];
  document.getElementById("magicResult").textContent = `✨ ${randomItem} ✨`;
});