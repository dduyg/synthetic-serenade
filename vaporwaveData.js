document.addEventListener('DOMContentLoaded', function () {
  const vaporwaveData = [
    { title: "Neon Dreams", lyric: "Beneath the neon skyline, pixelated memories flicker and fade in the embrace of a digital dream. A symphony of colors, where the city never sleeps, and dreams pulse with neon beats. In the glow of cybernetic stars, nostalgia dances in glitched memoirs." },
    { title: "Synthscape Sunset", lyric: "Sunset hues bleed into the synthscape, where glitchy brilliance meets the rhythm of a bygone era. Among the pixelated palm trees, I chase the sunset breeze. In the synthscape's embrace, I find serenity, lost in the analog grace." },
    { title: "Retro-Future Reverie", lyric: "Lost in the reverie of retro-future, I navigate the vaporwaves, chasing the echoes of a distant cassette tape. Beyond the digital horizon, where memories intertwine, I find echoes of love, a melody so divine. In this retro-future dream, time is a fleeting beam." },
    { title: "Cybernetic Symphony", lyric: "Cybernetic dreams unravel in the neon night, a symphony of glitched beats echoing through the cityscape. In the binary ballet, I dance with shadows of yesterday. Neon echoes in the cybernetic sea, a symphony of dreams, wild and free." },
    { title: "Waves of Vapor", lyric: "Among the fractured reflections of a virtual sea, I ride the waves of vapor, lost in the neon currents. In the glitched waves, dreams collide, a journey through the vapor tide. Pixelated dreams in the virtual ride." },
    { title: "Static Stardust", lyric: "Beneath the static sky, where pixels shimmer like stardust, I find serenity in the glitches of a digital universe. Stardust echoes in the binary breeze, a pixelated universe, where memories tease. In the static, a universe at ease." },
    { title: "Synthesized Shadows", lyric: "Synthesized sunsets cast shadows on the walls of a pixelated city, where dreams unfold in glitched vignettes. Shadows dance in the neon glow, a synthesized dreamscape in the afterglow. Glitched shadows in the pixelated flow." },
    { title: "Neon Embrace", lyric: "In the neon embrace, where glitch meets shades, I ride the wavelength of a vaporized memory. Neon kisses in the digital air, a love story beyond compare. Glitched embrace in the neon flare." },
    { title: "Sonic Tapestry", lyric: "Analog echoes bounce off the walls of a pixelated city, a sonic tapestry woven with glitched threads. Sonic echoes in the pixel breeze, a tapestry of memories, a symphony with ease. Glitched tapestry, where memories please." },
    { title: "Pixelated Sunsets", lyric: "Chasing pixelated sunsets in a cybernetic dreamscape, I find solace in the glitched remnants of a cassette symphony. In the pixelated sunset's glow, dreams unfold, a symphony of pixels, a story to be told. Glitched sunsets in the stories old." },
    { title: "Flickering Neon", lyric: "Beneath the flickering neon glow, where nostalgia hums in binary, I walk the vaporized streets of a pixelated city. In the binary hum, memories revive, a neon city where dreams arrive. Glitched neon in the digital hive." },
    { title: "Bygone Rhythm", lyric: "Among the echoes of a bygone future, I find rhythm in the glitched beats of a digital heartbeat. A bygone rhythm in the pixelated night, memories dancing in the glitched light. Glitched beats in the analog delight." },
    { title: "Neon Paradise", lyric: "Glowing city lights, a neon paradise, In the twilight haze, where dreams entice. Synthwave echoes in the urban air, Chasing illusions, we're beyond compare. Neon dreams pulsating in the city's embrace, a paradise where memories interlace. In the neon twilight, illusions take flight, a symphony of colors, pure delight." },
    { title: "Digital Dreamscape", lyric: "Beneath the pixels, dreams unfold, A digital dreamscape, stories untold. Glitchy echoes in the circuitry, A symphony of bytes, pure poetry. In the digital realm, where dreamscape blooms, pixels dance in digital rooms. Stories woven in the code, a dreamscape untold." },
    { title: "Cybernetic Serenity", lyric: "Amidst the circuits, a cybernetic grace, Serenity found in the digital space. Neon whispers in the electric wind, A tranquil journey, where realities blend. In the cybernetic haven, where dreams align, serenity found in the binary design. Electric whispers in the digital breeze, a cybernetic journey, pure ease." },
    { title: "Cassette Moonlight", lyric: "Under the cassette moonlight, memories sway, Analog love in the echoes of yesterday. Pixelated shadows dance on the wall, In this retro reverie, we stand tall. Moonlit memories in the cassette's glow, a love story that continues to grow. Pixelated moonbeams in the cassette's embrace, memories of love in this moonlit space." },
    { title: "Synthesized Whispers", lyric: "Synthesized whispers in the midnight air, A pixelated heart with a love to declare. Chromatic love letters written in code, In the binary, our connection bestowed. In the midnight whispers, love takes flight, a symphony of codes, pure and bright. Pixelated whispers in the neon glow, a love story in the digital flow." },
    { title: "VHS Horizons", lyric: "VHS horizons paint the sky, Analog dreams soaring high. Glitched sunsets in magnetic hues, A journey through time, no time to lose. VHS dreams in the horizon's bloom, a symphony of analog dreams, pure and groom. Magnetic echoes in the VHS tide, a journey through time, our love guide." },
    { title: "Lunar Lullaby", lyric: "Beneath the lunar glow, a lullaby weaves, A vapor trail of dreams, where the heart believes. Moonlit echoes in the neon breeze, A cosmic serenade, a tranquil tease. Lunar whispers in the neon air, a lullaby of love, beyond compare. Cosmic echoes in the lunar night, a lullaby of love, pure and bright." },
    { title: "Retro Rendezvous", lyric: "In the neon city, a retro rendezvous, Analog beats in a cybernetic brew. Glitchy pathways to a bygone day, Where love and pixels forever sway. In the neon rendezvous, where love unfolds, a symphony of beats, pure and bold. Glitched pathways in the neon glow, a rendezvous of love, the stories we sow." },
    { title: "Analog Euphoria", lyric: "Analog euphoria in the cassette air, Synthesized love beyond compare. Glowing circuits in the midnight sky, A symphony of bliss, oh so high. In the cassette euphoria, love takes flight, a symphony of circuits, pure delight. Glitched bliss in the analog embrace, a euphoria of love, timeless and base." },
    { title: "Pixel Paradise", lyric: "Lost in the pixels, a paradise unfolds, Synthwave dreams in stories told. Neon rivers flowing through the code, In this pixelated realm, love bestowed. In the pixel paradise, where dreams converge, a symphony of pixels, pure and verge. Glitched dreams in the pixel flow, a paradise of love, forever to grow." },
    { title: "Circuit Symphony", lyric: "In the circuits, a symphony of light, Cyber dreams dancing in the night. Glitched notes play in binary, A cybernetic ballet, pure ecstasy. In the circuit symphony, where dreams unite, a symphony of circuits, pure and bright. Glitched ballet in the neon night, a symphony of love, pure and right." },
    { title: "Binary Bliss", lyric: "Lost in the binary, a realm of bliss, Synthesized love, an eternal kiss. Neon pulses in the digital tide, A cybernetic love story, where hearts reside. In the binary bliss, where love takes form, a symphony of codes, pure and warm. Glitched pulses in the digital stream, a bliss of love, a timeless dream." },
    { title: "Magnetic Moonbeams", lyric: "Beneath magnetic moonbeams, dreams unfold, Analog love in a story untold. Pixelated whispers in the night, A symphony of love, pure and bright. In the magnetic moonbeams, where love glows, a symphony of love, pure and close. Pixelated whispers in the moonlit air, a love story that's beyond compare." },
    { title: "Retro Reflections", lyric: "Retro reflections in the neon glow, Analog love continues to grow. Glitched memories in the city's embrace, In this vaporwave realm, a timeless space. In the neon reflections, where love persists, a symphony of memories, pure and kissed. Glitched reflections in the pixelated tide, a retro love that will never hide." },
    { title: "Cassette Canopy", lyric: "Under the cassette canopy, love prevails, Analog hearts in nostalgic trails. Pixelated raindrops gently fall, In this vaporwave love, a timeless call. Under the cassette canopy, where love cascades, a symphony of love, pure and graced. Pixelated raindrops in the analog night, a love story taking flight." },
    { title: "Synthwave Serenity", lyric: "Glitched echoes in the magnetic sea, where dreams take flight, eternally. In the cosmic breeze, a love story in pixels, with ease. Glitched whispers in the midnight air, a love story that will forever glide." },
    { title: "Pixelated Promenade", lyric: "Pixelated promenade, a digital dance, Synthwave romance, a love trance. Glitched steps in the neon glow, A journey through pixels, to love we go. In the pixelated promenade, where dreams entwine, a symphony of love, pure and fine. Glitched steps in the neon embrace, a love story, a timeless grace." },
    { title: "Digital Dusk", lyric: "Digital dusk paints the city sky, Analog love as the pixels fly. Neon dreams in the twilight air, A love story beyond compare. In the digital dusk, where love takes flight, a symphony of pixels, shining bright. Glitched dreams in the neon embrace, a love story, a timeless grace." },
    { title: "Cassette Constellations", lyric: "Cassette constellations in the cosmic night, Analog love, a celestial light. Pixelated stars in the glitched expanse. In the cassette constellations, where love takes flight, a symphony of celestial love, shining bright. Glitched stars in the cosmic night, a love story, forever in the light." },
    { title: "Chromatic Dreams", lyric: "Prism waves dance in the moonlit glow, Cybernetic heartbeat, a retro flow. Glittering pixels, nostalgia's embrace, Vapor trails of dreams in cyberspace. In the chromatic dreams, where colors unite, a symphony of dreams, pure and bright. Glitched waves in the moonlit flow, a dreamscape of love, forever to grow." },
    { title: "Synthwave Serenity", lyric: "Electric whispers in a neon breeze, Visions of the future, a timeless tease. Cassette memories, rewound in time, In the cyber city, our spirits climb. In the synthwave serenity, where echoes align, a symphony of dreams, pure and fine." },
    { title: "Luminescent Reverie", lyric: "Starlight flickers in a digital sea, Electric illusions set my mind free. A pixelated heart, a pixelated soul, Vapor trails of memories take control. In the luminescent reverie, where dreams entwine, a symphony of trails, pure and fine." },
    { title: "Holographic Horizon", lyric: "Sunset boulevard in a holographic hue, Glowing cityscape, a dream pursued. Retro echoes of a future unknown, In this cybernetic realm, we're not alone. In the holographic horizon, where dreams align, a symphony of futures, pure and fine. Glitched echoes in the binary breeze, a holographic story, a journey to seize." },
    { title: "Pixelated Utopia", lyric: "A digital oasis where the pixels play, Synthesized melodies guide our way. Neon city lights, a fantasy unfold, In this 8-bit dreamscape, our story's told. In the pixelated utopia, where dreams unite, a symphony of pixels, pure and bright. Glitched lights in the neon city, a utopia of love, forever to be witty." },
    { title: "Luminous Mirage", lyric: "In the luminous mirage where illusions sway, Pixelated dreams in the moonlit bay. Synthesized whispers in the cosmic tide, A neon serenade, where love and dreams coincide. Glitched reflections in the pixelated night, A mirage of love, in the digital light. Neon illusions, a celestial delight." },
    { title: "Ephemeral Odyssey", lyric: "Embarking on an ephemeral odyssey, Glitched trails of dreams, wild and free. Synthwave whispers in the midnight air, Pixelated fantasies beyond compare. Neon echoes in the cosmic sea, An odyssey of love, pure and free. Glitched odyssey, where dreams decree." },
    { title: "Spectral Nocturne", lyric: "In the spectral nocturne of digital grace, Synthesized dreams in the moonlit space. Neon constellations in the glitched sky, Pixelated love as time goes by. Glitched whispers in the midnight breeze, A nocturne of love, a cosmic tease. Synthwave echoes in the spectral sea." },
    { title: "Quantum Dreamscape", lyric: "In the quantum dreamscape of glitched delight, Pixelated fantasies take flight. Synthesized whispers in the cosmic breeze, A symphony of love that never sees. Glitched trails in the quantum stream, A dreamscape of love, a vibrant beam. Synthwave echoes in the quantum dream." },
    { title: "Cosmic Reverie", lyric: "In the cosmic reverie where dreams entwine, Pixelated fantasies in the moonlit shine. Synthesized whispers in the astral air, A reverie of love beyond compare. Glitched echoes in the stellar sea, A serenade of love, where dreams decree." },
    { title: "Luminescent Horizons", lyric: "Beneath luminescent horizons, neon whispers paint the skies. Dreams take flight in the ethereal glow, a symphony of colors that dance and flow." },
    { title: "Ephemeral Dreams", lyric: "Ephemeral dreams in the moonlit mist, where nostalgia and reality coexist. A tapestry of memories woven in vapor, like whispers in the silent vaporwave caper." },
    { title: "Cityscape Serenity", lyric: "Cityscape serenity in hues of blue, pixelated waves of calm ensue. Amidst the urban echoes, a tranquil refrain, a digital sanctuary for the wandering brain." },
    { title: "Quantum Shores", lyric: "On quantum shores, where glitches play, waves of data in a rhythmic ballet. Analog echoes of a distant shore, a portal to dimensions never seen before." },
    { title: "Technicolor Tranquility", lyric: "In technicolor tranquility, where pastels paint the reality. Synthesized echoes of a serene ballet, a utopia where time gently sways." },
    { title: "Dystopian Utopia", lyric: "In a dystopian utopia, neon structures pierce the sky. Shadows of the future, where echoes lie, glitched visions in the city's eye." },
    { title: "Celestial Synthesis", lyric: "Celestial synthesis in the cosmic breeze, where pixelated stars create a tapestry. Lost in the astral currents, a cosmic ballet, a journey through the vapor of the Milky Way." },
    { title: "Chronicles of Cyberspace", lyric: "Chronicles of cyberspace, where echoes trace, a digital saga in the virtual grace. Neon archives of the binary lore, a journey through circuits forevermore." },
    { title: "Spectral Symphony", lyric: "A spectral symphony in the midnight air, where ghostly echoes paint a vapor lair. Phantoms dance in the pixelated haze, a haunting melody that forever stays." },
    { title: "Aurora Dreams", lyric: "Aurora dreams in the neon glow, where colors of the spectrum gently flow. Synthesized visions in the Arctic night, a dance of light in the celestial light." },
    { title: "Cosmic Echoes", lyric: "Cosmic echoes in the boundless space, a kaleidoscope of stars in a stellar chase. In the quantum silence, where galaxies conspire, a symphony of the universe, eternal fire." },
    { title: "Holographic Harmony", lyric: "Holographic harmony in a pixelated sea, where waves of light embrace the reality. In the glitched matrix of fantasies untold, a hologram ballet in a digital fold." },
    { title: "Ethereal Oasis", lyric: "An ethereal oasis in the desert of code, where mirages shimmer in the digital abode. Among the bits and bytes, a mirage unfolds, a pixelated refuge where the cyber soul molds." },
    { title: "Serenade of Shadows", lyric: "Serenade of shadows in the neon night, where silhouettes dance in the pixelated light. In the city's embrace, where darkness meets glow, a collapse of shadows in a vaporwave show." },
    { title: "Ethereal Enigma", lyric: "In the ethereal enigma of binary schemes, where trails of data flow in vibrant streams. Through glitched corridors of the cybernetic mind, the line blurs in the digital sea, a kaleidoscope of the elusive and undefined." },
    { title: "Mystic Metropolis", lyric: "In the mystic metropolis, where digital whispers in the data gleam. Among towering structures, a hypnotic journey unfolds through the corridors of coded lore, a labyrinth of mystery forevermore. Cybernetic echoes resonate in the void, a nexus of overwhelming possibilities where time is destroyed." },
    { title: "Binary Serenity", lyric: "Silent cyber streets in the circuitry's glow, where echoes of code in the shadows flow. Through the binary alleys, a cityscape of arches, pastel skies paint a tranquil space. A vaporwave reverie in muted gray, shadows in the urban maze, a memory of illusions beneath the digital seas." },
    { title: "Enchanted Forest", lyric: "Amidst ancient trees, a mystical forest sighs. Neon fireflies illuminate the emerald night skies. A serenade of tranquillity enchant the woodland air, chasing shadows, lost in the enchanted lair. Echoes of solitude in the whispering leaves, where time stands still and memories weave." },
    { title: "Pixelated Cityscape", lyric: "Vapor trails of yesteryears paint the virtual sky, lost in pixelated thoughts as the city passes by. In the maze of memories, where time is an illusion, lingering with the labyrinth of leaves in a glitched fusion." },
    { title: "Virtual Echoes", lyric: "Among the fractured reflections of a virtual sea, chasing the ghost of a VHS era, where time is set free. Analog tears fall in pixelated rain, washing away the fragments of a memory's sweet pain. Vapor trails of yesterday linger in pixelated views." },
    { title: "Silent City Shadows", lyric: "In the silent city shadows, whispers of forgotten tales bounce off skyscrapers. In the arms of the virtual embrace, fragmented tears transform to glitched grace. A synthetic vortex, where binary fantasies transcend pixelated skies." },
    { title: "Synthscape's Embrace", lyric: "In the synthscape's embrace, where hues of sunset bleed, digital flowers dance in meadows pixelated, a neon creed. A synthetic sun gracefully dips, casting vaporized glow on the virtual horizon, where dreams in neon whispers flow." },
    { title: "Virtual Horizon Illusions", lyric: "In the virtual horizon's embrace, glitched mountains pierce the synthetic sky, chasing chromatic illusions, where time dissolves in pixelated confusions. Through the whispers of tales long forgotten resound, casting pixelated shadows on the code-lit ground." },   
  ];

  let displayedLyrics = [];

  function generateRandomLyric() {
    const randomIndex = Math.floor(Math.random() * vaporwaveData.length);
    const randomLyric = vaporwaveData[randomIndex];

    // Check if the lyric has been displayed recently
    if (!displayedLyrics.includes(randomLyric)) {
      // Display the lyric
      const lyricContainer = document.getElementById("lyric");
      lyricContainer.innerHTML = randomLyric.lyric;

      // Add the displayed lyric to the array
      displayedLyrics.push(randomLyric);

      // If the array becomes too large, you can reset it to an empty array
      if (displayedLyrics.length > vaporwaveData.length / 2) {
        displayedLyrics = [];
      }
    } else {
      // If the lyric has been displayed recently, generate a new one
      generateRandomLyric();
    }
  }

  // Function to be called when the button is clicked
  function onButtonClick() {
    generateRandomLyric();
  }

  // Initial call to display a random lyric when the page loads
  generateRandomLyric();

  // Add event listener to the button
  document.getElementById("generateButton").addEventListener("click", onButtonClick);
});