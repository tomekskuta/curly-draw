const tracks = [
  { title: "Long Gone", artist: "Phum Viphurit" },
  { title: "What Once Was", artist: "Her's" },
  { title: "Can't Stop", artist: "Red Hot Chili Peppers" },
  { title: "Time To Dance", artist: "The Shoes, ANTHONIN TERNANT" },
  { title: "Conquer All", artist: "Behemoth" },
  { title: "Live Like Animals", artist: "Nothing But Thieves" },
  { title: "Daffodils", artist: "Mark Ronson, Kevin Parker" },
  { title: "Walls", artist: "CRX" },
  { title: "Meat On My Bones", artist: "Bad Sounds" },
  { title: "Dusseldorf", artist: "Teleman" },
  { title: "I Want You So Bad I Can't Breath", artist: "OK Go" },
  { title: "I Can't Escape Myself", artist: "The Sound" },
  { title: "Magnetic Heart", artist: "HYMMJ" },
  { title: "Meat On My Bones", artist: "Bad Sounds" },
  { title: "Tranquility Base Hotel & Casino", artist: "Arctic Monkeys" },
  { title: "Dzieci Malarzy", artist: "Natalia Przybysz" },
  { title: "AYA", artist: "Kasia Kowalska" },
  { title: "Meat On My Bones", artist: "Bad Sounds" },
  { title: "D is for Dangerous", artist: "Arctic Monkeys" },
  { title: "The Less I KnowTthe Better", artist: "Tame Impala" },
  { title: "Feels Like We Only Goes Backwards", artist: "Tame Impala" },
  { title: "Iron Sky", artist: "Paolo Nutini" },
  { title: "Battle for the Sun", artist: "Placebo" },
  { title: "I Appear Missing", artist: "Queens of the Stone Age" },
  { title: "Początek", artist: "Męskie Granie Orskiestra" },
  { title: "Afraid", artist: "The Neighbourhood" },
  { title: "Deep Six", artist: "Marylin Manson" },
  { title: "Tonight You Are Mine", artist: "The Technicolors" },
  { title: "The Package", artist: "Perfect Circle" },
  { title: "Videotape", artist: "Radiohead" },
  { title: "Paranoid Android", artist: "Radiohead" },
  { title: "Four out of Five", artist: "Arctic Monkeys" },
  { title: "Blue Boy", artist: "Mac DeMarco" },
  { title: "I'll Be Around", artist: "The Growlers" },
  { title: "City Club", artist: "The Growlers" },
  { title: "Personal Jesus", artist: "Depeche Mode" },
  { title: "White Room", artist: "Cream" },
  { title: "Right / Wrong", artist: "Night Beats" },
  { title: "Weird Fishes / Arpeggi", artist: "Radiohead" },
  { title: "City Club", artist: "The Growlers" },
  { title: "Ballad of the Mighty I", artist: "Noel Gallagher's High Flying Birds" },
  { title: "Underdog", artist: "Kasabian" },
  { title: "Adimiz Miskindir Bizim", artist: "Mazhar Ve Fuat" },
  { title: "Treat Me Like Your Mother", artist: "The Dead Weather" },
  { title: "I Wanna Make It Wit Chu", artist: "Dessert Sessions" }
];

const counter = [0, 1, 2, 3, 4];

let chosenTracks = [];

const getById = id => document.getElementById(id);
const createElem = element => document.createElement(element);

const button = getById('button');
const drawScore = getById('draw-score');
const list = getById('list');

button.addEventListener('click', event => {
  list.innerHTML = '';
  chosenTracks = [];
  counter.map(elem => {
    const addTrack = () => {
      const chosenTrack = tracks[Math.floor(Math.random() * tracks.length)];
      if (chosenTracks.some(track => track.title === chosenTrack.title)) return addTrack();
      return chosenTracks.push(chosenTrack);
    }
    addTrack();
  });
  chosenTracks.map(track => {
    const listElement = createElem('LI');
    listElement.classList.add('list-element');
    const songWrapper = createElem('div');
    const artistWrapper = createElem('div');
    songWrapper.classList.add('song-wrapper');
    artistWrapper.classList.add('artist-wrapper');
    songWrapper.innerHTML = track.title;
    artistWrapper.innerHTML = track.artist;
    listElement.appendChild(songWrapper);
    listElement.appendChild(artistWrapper);
    list.appendChild(listElement);
  })
})