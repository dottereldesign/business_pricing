const soundWordGroups = [
  {
    id: "luminous",
    label: "Luminous & sonorous",
    words: `
aurora aurelia aureole celestial clarity coruscate crystalline effulgent ember ethereal
euphoria fluorescence glimmer halation halo illuminate incandescence iridescent lambent
lucent luminary luminous lustre moonbeam opaline phosphorescent radiance radiant scintilla
scintillate shimmer solstice starlight translucent twilight vellichor vermilion vivid wonder
allure amaranthine ambrosial aquamarine argent azure cerulean champagne charismata diaphanous
diamond elegance elysian enamel essence evergreen exquisite filigree glorious heliotrope honeyed
illustrious ivory kaleidoscope lavender lucidity marigold mellifluous meridian moonstone nacreous
numinous obsidian orchid pearlescent periwinkle porcelain resplendent reverie roseate
saffron sapphire satin silvered splendour sublime sunbeam sundappled supernal sylvan tangerine
transcendent ultraviolet velour verdant vesper violet viridian winsome zephyr zirconia
    `,
  },
  {
    id: "nature",
    label: "Nature & weather",
    words: `
acacia alder alpine anemone arbor aspen aster autumn azalea bellbird
birch blossom bluebell bracken breeze brook buttercup canopy catalpa cedar
chrysalis clover coastline coral cove cypress dahlia dappled dawn dewdrop
drizzle dune estuary eucalyptus feather fern fieldflower firefly fjord foxglove
freesia gardenia glade gloaming gossamer grove harbour hawthorn hazel heather
honeysuckle horizon hyacinth kingfisher lagoon larkspur laurel lilac magnolia
meadow mistletoe monsoon moonflower murmuration myrtle nectarine nightingale oleander orchard
pebble petal petrichor pinecone primrose raincloud rainfall redwood riverstone rosemary
seashell shorebird snowdrop snowflake songbird starling sunflower sweetgrass sycamore thunderhead
tidepool trillium tussock valerian waterfall wildflower willow windflower wintergreen wisteria rainshadow
    `,
  },
  {
    id: "cosmic",
    label: "Cosmic & elemental",
    words: `
albedo andromeda aphelion apogee asteroid astral atmosphere atom aurorae borealis
caldera carbon comet cosmos crescent eclipse ecliptic electron equinox ether firelight
firmament flare galaxy geode gravity helium infinity ionosphere isotope jupiter
kinetic latitude lodestar lunar magnetism mars mercury meteor meteorite
nebula neptune neutrino nova nucleus orbit orbital orion oxygen penumbra
perigee photon plasma pluto polaris pulsar quasar quantum quiescence saturn
selenium solar spectrum stardust starfield starshine stratosphere supernova tellurian terra
thermal titanium trajectory universe uranium vacuum valence vector venus vortex
xenon zenith zodiac aerolite antimatter chromosphere earthlight epicentre gemstone heliacal
interstellar magnetosphere meteoric moonrise sidereal singularity sunstone umbra wavelength worldsoul
    `,
  },
  {
    id: "motion",
    label: "Movement & texture",
    words: `
amble billow bloom bounce buoyant cascade caress circle coil current
drift eddy effervescent elastic featherlight flicker float flourish flow flutter
fold glide glissade ripple hover hush lilt linger liquid lope
luminousness meander melt murmurous oscillate pirouette plume poise pulse quieten
ramble ribbon ripplework roam roll sail sashay satinwood shimmered
silken slalom slink slither soar spiral spring sway sweep
swirl swing tactile tendril thrum tremble tremolo tumble undulate velvetine
waft wander wave whirl whisper windward ripplelight supple susurration texture
trickle twinkle unfurl vibrance volute warmwater weave weightless willowsoft quiver
winnow wisp woven zestful zigzag zooming rhythmic roundabout shiver
swoop rivulet driftwood
    `,
  },
  {
    id: "craft",
    label: "Architecture & craft",
    words: `
alcove arcade archway atelier balustrade bevel blueprint brasswork buttress cabinet
canopywork cantilever carillon casement cathedral ceramic chisel cloister colonnade copper
cornice courtyard craftwork cupola dovetail enamelwork facade finial forge foundry
fretwork gallery glasshouse granary gridwork guildhall handrail hearth herringbone joinery
keystone lattice linen lintel loom masonry mezzanine mosaic moulding needlework
observatory oculus origami pavilion pergola pilaster plinth portico pottery quadrant
rafter reliquary rotunda scrollwork skylight spandrel spiralwork steeple stonework studio
terrace tessellate threshold timber tracery trellis turret typography vault veranda
vestibule weatherboard woodcut workshop wrought artisanry bookbinding cabinetry calligraphy clinker
embroidery framework glasswork intaglio marquetry millwork paperfolding patina porcelainware typeset
    `,
  },
  {
    id: "feeling",
    label: "Feeling & character",
    words: `
affinity alacrity ardour assurance audacity benevolence bliss candour charisma
cheer comfort compassion composure confidence conviviality courage curiosity delight devotion
earnestness empathy enchantment equanimity exuberance felicity fondness fortitude friendship generosity
gentleness goodwill grace gratitude honesty hopefulness humour imagination jubilation
kindliness kindness levity loyalty magnanimity marvel merriment mettle mindfulness mirth
optimism patience playfulness poisefulness promise purpose quietude reassurance resilience
resolve reverence satisfaction serenity sincerity solace spirit spontaneity steadfastness tenderness
tranquillity trust valour verve vitality welcome whimsy willingness wonderment zest
amity belonging bravery buoyancy contentment dignity eagerness elation encouragement flourishing
glee heartiness inspiration joyfulness kinship mercy openness peacefulness rapture warmth
affection contentedness camaraderie
    `,
  },
  {
    id: "literary",
    label: "Rare & literary",
    words: `
absquatulate aeolian alpenglow anodyne apricity arcadian balter bellwether bibelot
bricolage brobdingnagian callipygian chatoyant clinquant crepuscular defenestrate desiderium ebullient
eldritch eleutheromania ephemera epistolary eucatastrophe eudaemonia evanescent farouche flaneur
florilegium frisson fugacious fuliginous funambulist gambol gloam halcyon hiraeth
incunabula ineffable ineluctable insouciance lacuna lagniappe legerdemain limerence liminal
loquacious lucubration meraki mondegreen mooncalf moonglade noetic nonpareil oubliette
palimpsest panacea peregrinate perspicacious petrichorless phantasmagoria philocalist phosphene pluvial
pulchritude quiddity quiescent raconteur redolent rhapsodic riparian saudade sempiternal
serendipity sesquipedalian soliloquy sonder susurrus syzygy tintinnabulation ululation velleity
vespertine wanderlust welkin winsomeness zaffre zeitgeist zenana zoetrope euphony
anfractuous apophenia aureate bibliopole cicatrize circumlocution demesne divagate empyrean fantod
    `,
  },
  {
    id: "music",
    label: "Music & language",
    words: `
acapella adagio allegretto anthem aria arioso aubade ballad barcarolle cadence
cantabile cantata canticle carol cavatina cello chorus crescendo descant diapason
diminuendo dulcimer elegy encore euphonium falsetto fantasia fermata flute fugue
glissando harmony hymn interlude legato libretto lullaby madrigal melody minuet
nocturne octave opera oratorio overture pianissimo prelude psalm refrain resonance
rhapsody rhythm ritornello serenade solfeggio sonata songcraft sonorous soprano staccato
suite symphony tempo tenor timbre toccata tremolando troubadour vibrato
villanelle vocalise choir chorale consonance counterpoint diction elocution enunciate
euphonic lyricism orchestral phoneme prosody recitative rhyme sibilance verse
arpeggio bagatelle capriccio concertina divertimento fortissimo gavotte humoresque leitmotif melisma
monody ostinato polyphony
    `,
  },
  {
    id: "abstract",
    label: "Technology & ideas",
    words: `
algorithm analogue aperture archive array asynchronous bandwidth binary browser cache
cipher circuit cloudcode compiler constellation daemon dataflow digital eigenvector endpoint engine
ethernet filament firmware frequency function geometry glyph gradient graph
interface interweb iteration kernel lambda logic matrix memory mesh
metadata module network node notation opcode oracle packet parallel parity
pipeline pixel prism protocol query quine recursion render resolver runtime
schema semaphore signal source stack syntax telemetry tensor terminal
topology uplink vertex waveform websocket abstraction alignment architecture automata
continuum cryptogram diffraction fractal hologram hyperlink inference manifold microcosm nexus
bitstream bytecode ciphertext dataplane emulator encoding entropy filesystem nanocode neural
qubit sandbox viewport
    `,
  },
  {
    id: "playful",
    label: "Playful & satisfying",
    words: `
bamboozle bazinga befuddle biscuit blubber bonanza brouhaha bubble bumble button
canoodle caterwaul chuckle clatter confetti corkscrew crinkle cucumber curlicue dandelion
dawdle doodad doodle fizzgig flapdoodle flibbertigibbet fluffernutter folderol frolic galoshes
gargle gizmo gobbledygook gobsmacked googol hiccup hobnob hoopla hullabaloo jellybean
jiggle kerfuffle kibble knickknack kumquat lollygag macaroni malarkey marshmallow mollycoddle
monkeyshines noodle nincompoop pamplemousse pandemonium pickle pizzazz poppycock puffball quibble
razzmatazz rigmarole rumpus sassafras scallywag shenanigan skedaddle skitter snickerdoodle snollygoster
splendiferous sprocket squabble squiggle thingamajig thunderbucket tintinnabulate tomfoolery topsy-turvy trinket
whatchamacallit whimwham whippersnapper wiggle wobble wonky yahoo yippee zany zizzle
boondoggle bumfuzzle cattywampus codswallop diddly-squat fandango finagle giggle hornswoggle lickety-split
    `,
  },
];

const normaliseWords = (words) => words.trim().split(/\s+/);
const allSoundWords = soundWordGroups.flatMap((group) =>
  normaliseWords(group.words).map((word) => ({ word, category: group.id, categoryLabel: group.label }))
);

const soundWordGrid = document.querySelector("[data-sound-word-grid]");

if (soundWordGrid) {
  const searchInput = document.querySelector("[data-sound-word-search]");
  const categorySelect = document.querySelector("[data-sound-word-category]");
  const countOutput = document.querySelector("[data-sound-word-count]");
  const statusOutput = document.querySelector("[data-sound-word-status]");
  const columnCount = 5;
  let filteredWords = allSoundWords;

  soundWordGroups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group.id;
    option.textContent = `${group.label} (${normaliseWords(group.words).length})`;
    categorySelect.append(option);
  });

  const copyWord = async (word) => {
    try {
      await navigator.clipboard.writeText(word);
      statusOutput.textContent = `Copied: ${word}`;
    } catch {
      statusOutput.textContent = `Selected: ${word}`;
    }
  };

  const renderWords = () => {
    soundWordGrid.replaceChildren();
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < filteredWords.length; index += columnCount) {
      const row = document.createElement("tr");

      for (let column = 0; column < columnCount; column += 1) {
        const item = filteredWords[index + column];
        const cell = document.createElement("td");

        if (item) {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = item.word;
          button.setAttribute("aria-label", `Copy ${item.word}`);
          button.addEventListener("click", () => copyWord(item.word));
          cell.append(button);
        } else {
          cell.setAttribute("aria-hidden", "true");
        }

        row.append(cell);
      }

      fragment.append(row);
    }

    soundWordGrid.append(fragment);
    countOutput.textContent = `Showing ${filteredWords.length.toLocaleString("en-NZ")} words / 1,000 total`;
  };

  const filterWords = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("en-NZ");
    const category = categorySelect.value;
    filteredWords = allSoundWords.filter((item) => {
      const matchesQuery = !query || item.word.includes(query);
      const matchesCategory = category === "all" || item.category === category;
      return matchesQuery && matchesCategory;
    });
    renderWords();
  };

  searchInput.addEventListener("input", filterWords);
  categorySelect.addEventListener("change", filterWords);

  const uniqueCount = new Set(allSoundWords.map((item) => item.word)).size;
  if (allSoundWords.length !== 1000 || uniqueCount !== 1000) {
    statusOutput.textContent = `Word bank error: expected 1,000 unique words, found ${allSoundWords.length} entries and ${uniqueCount} unique words.`;
  }

  renderWords();
}
