'use strict';

var Fixtures = {
    general : {
        currencyDenominationList : [
            'PP', 'GP', 'SP', 'EP', 'CP'],
        colorList: [
            'progress-bar-forest',
            'progress-bar-sky',
            'progress-bar-orange',
            'progress-bar-red',
            'progress-bar-purple',
            'progress-bar-teal',
            'progress-bar-indigo',
            'progress-bar-brown',
            'progress-bar-yellow',
            'progress-bar-magenta',
            'progress-bar-green',
            'progress-bar-blue',
            'progress-bar-red',
            'progress-bar-purple',
            'progress-bar-teal',
            'progress-bar-blue',
            'progress-bar-indigo'
        ]
    },
    armor : {
        armorTypeOptions : [
            'Light', 'Medium', 'Heavy', 'Shields'],
        armorStealthOptions : [
            'Advantage', 'Normal', 'Disadvantage']
    },
    hitDiceType : {
        hitDiceOptions : [
            'D4', 'D6', 'D8', 'D10', 'D12', 'D20']
    },
    magicItem : {
        magicItemTypeOptions : [
            'Armor', 'Sword', 'Rod', 'Ring', 'Staff',
            'Wand', 'Potion', 'Wondrous Item'],
        magicItemRarityOptions : [
            'Uncommon', 'Common', 'Rare', 'Rarity Varies',
            'Very Rare', 'Legendary']
    },
    spell : {
        spellTypeOptions : [
            'Ability Check',
            'Attack Roll',
            'Automatic',
            'Contest',
            'Melee Spell Attack',
            'Ranged Spell Attack',
            'Savings Throw'],
        spellSaveAttrOptions : [
            'Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'],
        spellSchoolOptions : [
            'Abjuration',
            'Conjuration',
            'Divination',
            'Enchantment',
            'Evocation',
            'Illusion',
            'Necromancy',
            'Transmutation'],
        spellCastingTimeOptions : [
            '1 action',
            '1 action or 8 hours',
            '1 bonus action',
            '1 hour',
            '1 minute',
            '1 reaction',
            '10 minutes',
            '12 hours',
            '24 hours',
            '8 hours'],
        spellDurationOptions : [
            '1 day',
            '1 hour',
            '1 minute',
            '1 round',
            '10 days',
            '10 minutes',
            '24 hours',
            '30 days',
            '7 days',
            '8 hours',
            'Concentration, up to 1 day',
            'Concentration, up to 1 hour',
            'Concentration, up to 1 minute',
            'Concentration, up to 1 round',
            'Concentration, up to 10 minutes',
            'Concentration, up to 2 hours',
            'Concentration, up to 24 hours',
            'Concentration, up to 8 hours',
            'Concentration, up to one minute',
            'Instantaneous',
            'Special',
            'Until dispelled',
            'Until dispelled or triggered',
            'Up to 1 hour',
            'Up to 1 minute',
            'Up to 8 hours'],
        spellComponentsOptions : [
            'S',
            'S, M',
            'V',
            'V, M',
            'V, S',
            'V, S, M'],
        spellRangeOptions : [
            '1 mile',
            '10 feet',
            '100 feet',
            '120 feet',
            '150 feet',
            '30 feet',
            '300 feet',
            '5 feet',
            '500 feet',
            '500 miles',
            '60 feet',
            '90 feet',
            'Self',
            'Self (10-foot radius)',
            'Self (10-foot-radius hemisphere)',
            'Self (10-foot-radius sphere)',
            'Self (100-foot line)',
            'Self (15-foot cone)',
            'Self (15-foot cube)',
            'Self (15-foot radius)',
            'Self (30-foot cone)',
            'Self (30-foot radius)',
            'Self (5-mile radius)',
            'Self (60-foot cone)',
            'Self (60-foot line)',
            'Sight',
            'Special',
            'Touch',
            'Unlimited']
    },
    spellStats : {
        spellcastingAbilityOptions: [
            'INT', 'WIS', 'CHA']
    },
    weapon : {
        weaponProficiencyOptions : [
            'Simple', 'Martial', 'Improvised', 'Nonlethal', 'Exotic'],
        weaponHandednessOptions : [
            'Light', 'One-Handed', 'Two-Handed'],
        weaponTypeOptions : [
            'Melee', 'Ranged'],
        weaponSizeOptions : [
            'Small', 'Medium', 'Large'],
        weaponPropertyOptions : [
            'Ammunition', 'Finesse', 'Heavy', 'Light', 'Loading',
            'Range', 'Reach', 'Special', 'Thrown', 'Versatile'],
        weaponDamageTypeOptions : [
            'Bludgeoning', 'Piercing', 'Slashing']
    },
    resting : {
        shortRestMessage : 'Your daily features, and relevant spell slots have been restored.',
        longRestMessage : 'Your hit dice, spell slots, hit points, ' +
              'and daily features have been restored.'
    },
    // List all migrations that should be applied
    migration : {
        scripts : [
            migration_110_1_skills,
            migration_110_2_spells,
            migration_110_3_stats
        ]
    },
    wizardProfile: {
        classes : ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
              'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
        races : ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome',
              'Half-Elf', 'Half-Orc', 'Tiefling']
    },
    spellList : {
        spellNames: [
            'Acid Arrow',
            'Acid Splash',
            'Aid',
            'Alarm',
            'Alter Self',
            'Animal Friendship',
            'Animal Messenger',
            'Animal Shapes',
            'Animate Dead',
            'Animate Objects',
            'Antilife Shell',
            'Antimagic Field',
            'Antipathy/Sympathy',
            'Arcane Eye',
            'Arcane Hand',
            'Arcane Lock',
            'Arcane Sword',
            'Arcanist\'s Magic Aura',
            'Astral Projection',
            'Augury',
            'Awaken',
            'Bane',
            'Banishment',
            'Barkskin',
            'Beacon of Hope',
            'Bestow Curse',
            'Black Tentacles',
            'Blade Barrier',
            'Bless',
            'Blight',
            'Blindness/Deafness',
            'Blink',
            'Blur',
            'Branding Smite',
            'Burning Hands',
            'Call Lightning',
            'Calm Emotions',
            'Chain Lightning',
            'Charm Person',
            'Chill Touch',
            'Circle of Death',
            'Clairvoyance',
            'Clone',
            'Cloudkill',
            'Color Spray',
            'Command',
            'Commune',
            'Commune with Nature',
            'Comprehend Languages',
            'Compulsion',
            'Cone of Cold',
            'Confusion',
            'Conjure Animals',
            'Conjure Celestial',
            'Conjure Elemental',
            'Conjure Fey',
            'Conjure Minor Elementals',
            'Conjure Woodland Beings',
            'Contact Other Plane',
            'Contagion',
            'Contingency',
            'Continual Flame',
            'Control Water',
            'Control Weather',
            'Counterspell',
            'Create Food and Water',
            'Create Undead',
            'Create or Destroy Water',
            'Creation',
            'Cure Wounds',
            'Dancing Lights',
            'Darkness',
            'Darkvision',
            'Daylight',
            'Death Ward',
            'Delayed Blast Fireball',
            'Demiplane',
            'Detect Evil and Good',
            'Detect Magic',
            'Detect Poison and Disease',
            'Detect Thoughts',
            'Dimension Door',
            'Disguise Self',
            'Disintegrate',
            'Dispel Evil and Good',
            'Dispel Magic',
            'Divination',
            'Divine Favor',
            'Divine Word',
            'Dominate Beast',
            'Dominate Monster',
            'Dominate Person',
            'Dream',
            'Druidcraft',
            'Earthquake',
            'Eldritch Blast',
            'Enhance Ability',
            'Enlarge/Reduce',
            'Entangle',
            'Enthrall',
            'Etherealness',
            'Expeditious Retreat',
            'Eyebite',
            'Fabricate',
            'Faerie Fire',
            'Faithful Hound',
            'False Life',
            'Fear',
            'Feather Fall',
            'Feeblemind',
            'Find Familiar',
            'Find Steed',
            'Find Traps',
            'Find the Path',
            'Finger of Death',
            'Fire Bolt',
            'Fire Shield',
            'Fire Storm',
            'Fireball',
            'Flame Blade',
            'Flame Strike',
            'Flaming Sphere',
            'Flesh to Stone',
            'Floating Disk',
            'Fly',
            'Fog Cloud',
            'Forbiddance',
            'Forcecage',
            'Foresight',
            'Freedom of Movement',
            'Freezing Sphere',
            'Gaseous Form',
            'Gate',
            'Geas',
            'Gentle Repose',
            'Giant Insect',
            'Glibness',
            'Globe of Invulnerability',
            'Glyph of Warding',
            'Goodberry',
            'Grease',
            'Greater Invisibility',
            'Greater Restoration',
            'Guardian of Faith',
            'Guards and Wards',
            'Guidance',
            'Guiding Bolt',
            'Gust of Wind',
            'Hallow',
            'Hallucinatory Terrain',
            'Harm',
            'Haste',
            'Heal',
            'Healing Word',
            'Heat Metal',
            'Hellish Rebuke',
            'Heroes\' Feast',
            'Heroism',
            'Hideous Laughter',
            'Hold Monster',
            'Hold Person',
            'Holy Aura',
            'Hunter\'s Mark',
            'Hypnotic Pattern',
            'Ice Storm',
            'Identify',
            'Illusory Script',
            'Imprisonment',
            'Incendiary Cloud',
            'Inflict Wounds',
            'Insect Plague',
            'Instant Summons',
            'Invisibility',
            'Irresistible Dance',
            'Jump',
            'Knock',
            'Legend Lore',
            'Lesser Restoration',
            'Levitate',
            'Light',
            'Lightning Bolt',
            'Locate Animals or Plants',
            'Locate Creature',
            'Locate Object',
            'Longstrider',
            'Mage Armor',
            'Mage Hand',
            'Magic Circle',
            'Magic Jar',
            'Magic Missile',
            'Magic Mouth',
            'Magic Weapon',
            'Magnificent Mansion',
            'Major Image',
            'Mass Cure Wounds',
            'Mass Heal',
            'Mass Healing Word',
            'Mass Suggestion',
            'Maze',
            'Meld into Stone',
            'Mending',
            'Message',
            'Meteor Swarm',
            'Mind Blank',
            'Minor Illusion',
            'Mirage Arcane',
            'Mirror Image',
            'Mislead',
            'Misty Step',
            'Modify Memory',
            'Moonbeam',
            'Move Earth',
            'Nondetection',
            'Pass without Trace',
            'Passwall',
            'Phantasmal Killer',
            'Phantom Steed',
            'Planar Ally',
            'Planar Binding',
            'Plane Shift',
            'Plant Growth',
            'Poison Spray',
            'Polymorph',
            'Power Word Kill',
            'Prayer of Healing',
            'Prestidigitation',
            'Prismatic Spray',
            'Prismatic Wall',
            'Private Sanctum',
            'Produce Flame',
            'Programmed Illusion',
            'Project Image',
            'Protection from Energy',
            'Protection from Evil and Good',
            'Protection from Poison',
            'Purify Food and Drink',
            'Raise Dead',
            'Ray of Enfeeblement',
            'Ray of Frost',
            'Regenerate',
            'Reincarnate',
            'Remove Curse',
            'Resilient Sphere',
            'Resistance',
            'Resurrection',
            'Reverse Gravity',
            'Revivify',
            'Rope Trick',
            'Sacred Flame',
            'Sanctuary',
            'Scorching Ray',
            'Scrying',
            'Secret Chest',
            'See Invisibility',
            'Seeming',
            'Sending',
            'Sequester',
            'Shapechange',
            'Shatter',
            'Shield',
            'Shield of Faith',
            'Shillelagh',
            'Shocking Grasp',
            'Silence',
            'Silent Image',
            'Simulacrum',
            'Sleep',
            'Sleet Storm',
            'Slow',
            'Spare the Dying',
            'Speak with Animals',
            'Speak with Dead',
            'Speak with Plants',
            'Spider Climb',
            'Spike Growth',
            'Spirit Guardians',
            'Spiritual Weapon',
            'Stinking Cloud',
            'Stone Shape',
            'Stoneskin',
            'Storm of Vengeance',
            'Suggestion',
            'Sunbeam',
            'Sunburst',
            'Symbol',
            'Telekinesis',
            'Telepathic Bond',
            'Teleport',
            'Teleportation Circle',
            'Thaumaturgy',
            'Thunderwave',
            'Time Stop',
            'Tiny Hut',
            'Tongues',
            'Transport via Plants',
            'Tree Stride',
            'True Polymorph',
            'True Resurrection',
            'True Seeing',
            'True Strike',
            'Unseen Servant',
            'Vampiric Touch',
            'Vicious Mockery',
            'Wall of Fire',
            'Wall of Force',
            'Wall of Ice',
            'Wall of Stone',
            'Wall of Thorns',
            'Warding Bond',
            'Water Breathing',
            'Water Walk',
            'Web',
            'Weird',
            'Wind Walk',
            'Wind Wall',
            'Wish',
            'Word of Recall',
            'Zone of Truth'
        ]
    }
};
