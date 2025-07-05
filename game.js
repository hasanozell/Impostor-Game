let playerCount = 0;
let playerNames = [];
let roles = [];
let scores = {};
let lastCelebrity = null;
let lastImpostorIndex = -1;
let impostorIndex = -1;
let votes = {};
let selectedCategory = "";

const categories = {
  karisik: [
    "Lionel Messi", "Cristiano Ronaldo", "Neymar", "Mbappé", "Arda Güler", 
    "Kevin De Bruyne", "Zlatan Ibrahimović","Ronaldinho", "Pelé", "Diego Maradona", 
    "Zinedine Zidane", "Ronaldo Nazário", "Kaká", "Thierry Henry", "Andrés Iniesta", 
    "Xavi Hernández","Sergio Ramos","Gerard Piqué", "Luka Modrić", "Toni Kroos", 
    "Erling Haaland", "Mohamed Salah","Sadio Mané", "Karim Benzema", "Vinicius Júnior",
     "Rodrygo", "Federico Valverde", "Alphonso Davies","Joshua Kimmich", "Manuel Neuer", 
    "Harry Kane", "Son Heung-min", "Virgil van Dijk", "Alisson Becker", "Ederson Moraes",
    "Ruben Dias","Bernardo Silva", "Bruno Fernandes", "Casemiro", "Rodri", 
     "Ilkay Gündogan", "Jack Grealish", "Phil Foden","Marcus Rashford", "Bukayo Saka",
      "Martin Ødegaard", "Declan Rice", "Antoine Griezmann", "Marc-André ter Stegen", "Gianluigi Donnarumma", 
    "Thibaut Courtois", "David Alaba", "Antonio Rüdiger", "Raphaël Varane", "Kyle Walker",
    "Trent Alexander-Arnold", "Jordi Alba", "Dani Carvajal", "Marcelo", "Sergio Busquets", 
    "Eden Hazard", "Romelu Lukaku", "Dries Mertens","Kevin De Bruyne","Romelu Lukaku", 
    "Eden Hazard", "Christian Eriksen", "Harry Maguire", "Raphaël Varane", "Antonio Rüdiger", 
     "Jules Kounde","Ronald Araújo", "Dayot Upamecano", "Matthijs de Ligt", "Milan Škriniar",
      "Federico Chiesa", "Dusan Vlahovic","Lautaro Martínez", "Paulo Dybala", "Rafael Leão",
       "Victor Osimhen","Khvicha Kvaratskhelia", "Jude Bellingham", "Jamal Musiala","Florian Wirtz", 
       "Leroy Sané", "Serge Gnabry","Thomas Müller", "Marco Reus", "Ousmane Dembéle", 
     "Thiago Alcântara", "Lorenzo Insigne",  "Ciro Immobile","Leonardo Bonucci", "Giorgio Chiellini", 
     "Jorginho", "Álvaro Morata","David de Gea", "Nico Williams","Gavi", 
     "Pedri", "Frenkie de Jong", "Raphinha", "Robert Lewandowski", "Pierre-Emerick Aubameyang",
      "Memphis Depay", "Antoine Griezmann", "João Félix", "Rodrigo De Paul", "Marco Asensio", 
    "Eduardo Camavinga", "Aurélien Tchouaméni", "Nicolas Jackson","Allan Saint-Maximin", "Philippe Coutinho", 
    "Jamie Vardy", "Reece James", "Kai Havertz", "Mason Mount", "Raheem Sterling",
    "Enzo Fernández", "Mykhailo Mudryk", "Thiago Silva", "Marc Cucurella", "Edin Dzeko",
    "En Neysri", "John Duran", "Cenk Tosun","Anderson Talisca", "Sebastian Szymanski",
     "İrfan Can Kahveci", "Mert Hakan Yandaş", "Osayi Samuel", "Jayden Oosterwolde","Mauro Icardi",
     "Alvaro Morata","Abdulkerim Bardakçi","Fernando Muslera","Arda Turan","Emre Belözoğlu",
    "Okan Buruk","Volkan Demirel","Sergen Yalçın","Caner Erkin","Gökhan Gönül",
    "Altay Bayındır","Kerem Aktürkoğlu","Arda Güler","Alex de Souza","Robin van Persie",
    "Mesut Özil","Radamel Falcao","Felipe Melo","Dusan Tadic","Michy Batshuayi",
    "Cole Palmer","Lamine Yamal","Desire Doue","Emiliano Martinez","Mario Götze",
    "Roberto Carlos","Jose Mourinho","Pep Guardiola","Carlo Ancelotti", "Aykut Kocaman",
    "Fatih Terim","İsmail Kartal","Şenol Guneş","Viktor Gyökeres","Quaresma",
    "Alex Ferguson","Gedson Fernandes","Rafa Silva","Alexander Sorloth","Wilfred Zaha",

    "Barış Manço", "Tarkan", "Sezen Aksu", "Cem Yılmaz",
"Ajda Pekkan", "Haluk Bilginer", "Kıvanç Tatlıtuğ", "Ezhel", "Zeynep Bastık",
"Kenan İmirzalıoğlu", "Beren Saat", "Hazal Kaya", "Hande Erçel",
"Serenay Sarıkaya", "Burak Özçivit", "Fahriye Evcen", "Can Yaman", "Demet Özdemir", "Çağatay Ulusoy", "Cansu Dere",
"Ezgi Mola", "Demet Evgar", "Tolga Çevik", "Ata Demirer", "Yılmaz Erdoğan",
"Şener Şen", "Meryem Uzerli", "Nejat İşler",
"Seda Sayan", "Gülşen", "Hande Yener", "Sertab Erener", "Teoman",
"Kenan Doğulu", "Aleyna Tilki", "Derya Uluğ",
"Acun Ilıcalı", "Müge Anlı", "Esra Erol", "Beyazıt Öztürk",
"Mehmet Ali Erbil", "Danla Bilic", "Enes Batur", "Orkun Işıtmak", "Ruhi Çenet",
"Barış Özcan", "Reynmen",
"Zeki Müren", "Orhan Gencebay", "Ferdi Tayfur", "Mahsun Kırmızıgül", "Müslüm Gürses",
"Yıldız Tilbe", "İbrahim Tatlıses", "Emel Sayın",
"Gülben Ergen", "Sibel Can", "Yalın", "Mabel Matiz", "Cem Adrian", "Oğuzhan Koç",
"Halil Sezai", "Manuş Baba", "İrem Derici", "Simge Sağın",
"Tolga Sarıtaş", "Doğu Demirkol", "Şahan Gökbakar",
"Sefo", "Oğuzhan Uğur", "Yusuf Güney",
"Ceza", "Sagopa Kajmer", "Kadıköy Boğası", "Testo Taylan", "Ali Koç",
"Ati242", "Kemal Sunal", // Senin eklediklerin
 "Volkan Konak", "Athena Gökhan", "Cem Karaca",
 "Kadir İnanır", "Türkan Şoray","Hülya Avşar", "Mustafa Sandal", "Ebru Gündeş",
"Hadise", "Murat Boz",
"Kerem Bürsin","Aras Bulut İynemli", "Kubilay Aka",
"Uraz Kaygılaroğlu","Ahmet Kural", "Murat Cemcir",
"Büşra Pekin", 
"Eser Yenenler", "İbrahim Büyükak", "Tuncel Kurtiz",
"Erdal Beşikçioğlu", "Oktay Kaynarca", "Şevval Sam", "Candan Erçetin",
"Manga", "Athena", "Hayko Cepkin", "Kalben", // Benim eklediklerim

"Rihanna", "Brad Pitt", "Angelina Jolie", "Taylor Swift",
"Emma Watson", "Shakira", "Elon Musk", "Billie Eilish",
"Selena Gomez", "Ariana Grande", "Justin Bieber", "Johnny Depp",
"Leonardo DiCaprio", "Lady Gaga", "Dua Lipa", "Zendaya",
"Emma Stone", "Jennifer Lawrence", "Natalie Portman", "Keanu Reeves", "Tom Holland",
"Robert Downey Jr.", "Chris Hemsworth", "Anne Hathaway", "Millie Bobby Brown", "Gal Gadot",
"Margot Robbie",
"Ryan Reynolds", "Henry Cavill", "Cillian Murphy", "Pedro Pascal",
"Jason Momoa", "Ben Affleck", "Matt Damon", "Chris Evans", "Tom Hiddleston", "Jake Gyllenhaal", "Andrew Garfield",
"Will Smith", "The Weeknd",
"Harry Styles", "Zayn Malik", "Miley Cyrus", "Lana Del Rey",
"Michael B. Jordan", "Dwayne Johnson", "Vin Diesel", "Hugh Jackman",
"Mr. Beast", "Ana De Armas", "Ester Exposito", // Senin eklediklerin

// Yeni eklenen yabancı ünlüler:
"Tom Cruise", 
"Al Pacino", 
"Morgan Freeman", "Christian Bale", "Scarlett Johansson",
"Chris Pratt", "Tom Hardy", "Benedict Cumberbatch", 
"Gal Gadot",
"Ryan Gosling", "Jason Statham","Lewis Hamilton"


    
  ],
  futbolcu: [
    "Lionel Messi", "Cristiano Ronaldo", "Neymar", "Mbappé", "Arda Güler", 
    "Kevin De Bruyne", "Zlatan Ibrahimović","Ronaldinho", "Pelé", "Diego Maradona", 
    "Zinedine Zidane", "Ronaldo Nazário", "Kaká", "Thierry Henry", "Andrés Iniesta", 
    "Xavi Hernández","Sergio Ramos","Gerard Piqué", "Luka Modrić", "Toni Kroos", 
    "Erling Haaland", "Mohamed Salah","Sadio Mané", "Karim Benzema", "Vinicius Júnior",
     "Rodrygo", "Federico Valverde", "Alphonso Davies","Joshua Kimmich", "Manuel Neuer", 
    "Harry Kane", "Son Heung-min", "Virgil van Dijk", "Alisson Becker", "Ederson Moraes",
    "Ruben Dias","Bernardo Silva", "Bruno Fernandes", "Casemiro", "Rodri", 
     "Ilkay Gündogan", "Jack Grealish", "Phil Foden","Marcus Rashford", "Bukayo Saka",
      "Martin Ødegaard", "Declan Rice", "Antoine Griezmann", "Marc-André ter Stegen", "Gianluigi Donnarumma", 
    "Thibaut Courtois", "David Alaba", "Antonio Rüdiger", "Raphaël Varane", "Kyle Walker",
    "Trent Alexander-Arnold", "Jordi Alba", "Dani Carvajal", "Marcelo", "Sergio Busquets", 
    "Eden Hazard", "Romelu Lukaku", "Dries Mertens","Kevin De Bruyne","Romelu Lukaku", 
    "Eden Hazard", "Christian Eriksen", "Harry Maguire", "Raphaël Varane", "Antonio Rüdiger", 
     "Jules Kounde","Ronald Araújo", "Dayot Upamecano", "Matthijs de Ligt", "Milan Škriniar",
      "Federico Chiesa", "Dusan Vlahovic","Lautaro Martínez", "Paulo Dybala", "Rafael Leão",
       "Victor Osimhen","Khvicha Kvaratskhelia", "Jude Bellingham", "Jamal Musiala","Florian Wirtz", 
       "Leroy Sané", "Serge Gnabry","Thomas Müller", "Marco Reus", "Ousmane Dembéle", 
     "Thiago Alcântara", "Lorenzo Insigne",  "Ciro Immobile","Leonardo Bonucci", "Giorgio Chiellini", 
     "Jorginho", "Álvaro Morata","David de Gea", "Nico Williams","Gavi", 
     "Pedri", "Frenkie de Jong", "Raphinha", "Robert Lewandowski", "Pierre-Emerick Aubameyang",
      "Memphis Depay", "Antoine Griezmann", "João Félix", "Rodrigo De Paul", "Marco Asensio", 
    "Eduardo Camavinga", "Aurélien Tchouaméni", "Nicolas Jackson","Allan Saint-Maximin", "Philippe Coutinho", 
    "Jamie Vardy", "Reece James", "Kai Havertz", "Mason Mount", "Raheem Sterling",
    "Enzo Fernández", "Mykhailo Mudryk", "Thiago Silva", "Marc Cucurella", "Edin Dzeko",
    "En Neysri", "John Duran", "Cenk Tosun","Anderson Talisca", "Sebastian Szymanski",
     "İrfan Can Kahveci", "Mert Hakan Yandaş", "Osayi Samuel", "Jayden Oosterwolde","Mauro Icardi",
     "Alvaro Morata","Abdulkerim Bardakçi","Fernando Muslera","Arda Turan","Emre Belözoğlu",
    "Okan Buruk","Volkan Demirel","Sergen Yalçın","Caner Erkin","Gökhan Gönül",
    "Altay Bayındır","Kerem Aktürkoğlu","Arda Güler","Alex de Souza","Robin van Persie",
    "Mesut Özil","Radamel Falcao","Felipe Melo","Dusan Tadic","Michy Batshuayi",
    "Cole Palmer","Lamine Yamal","Desire Doue","Emiliano Martinez","Mario Götze",
    "Roberto Carlos","Jose Mourinho","Pep Guardiola","Carlo Ancelotti", "Aykut Kocaman",
    "Fatih Terim","İsmail Kartal","Şenol Guneş","Viktor Gyökeres","Quaresma",
    "Alex Ferguson","Gedson Fernandes","Rafa Silva","Alexander Sorloth","Wilfred Zaha"
  ],
  turk: [
    "Barış Manço", "Tarkan", "Sezen Aksu", "Cem Yılmaz",
"Ajda Pekkan", "Haluk Bilginer", "Kıvanç Tatlıtuğ", "Ezhel", "Zeynep Bastık",
"Kenan İmirzalıoğlu", "Beren Saat", "Hazal Kaya", "Hande Erçel",
"Serenay Sarıkaya", "Burak Özçivit", "Fahriye Evcen", "Can Yaman", "Demet Özdemir", "Çağatay Ulusoy", "Cansu Dere",
"Ezgi Mola", "Demet Evgar", "Tolga Çevik", "Ata Demirer", "Yılmaz Erdoğan",
"Şener Şen", "Meryem Uzerli", "Nejat İşler",
"Seda Sayan", "Gülşen", "Hande Yener", "Sertab Erener", "Teoman",
"Kenan Doğulu", "Aleyna Tilki", "Derya Uluğ",
"Acun Ilıcalı", "Müge Anlı", "Esra Erol", "Beyazıt Öztürk",
"Mehmet Ali Erbil", "Danla Bilic", "Enes Batur", "Orkun Işıtmak", "Ruhi Çenet",
"Barış Özcan", "Reynmen",
"Zeki Müren", "Orhan Gencebay", "Ferdi Tayfur", "Mahsun Kırmızıgül", "Müslüm Gürses",
"Yıldız Tilbe", "İbrahim Tatlıses", "Emel Sayın",
"Gülben Ergen", "Sibel Can", "Yalın", "Mabel Matiz", "Cem Adrian", "Oğuzhan Koç",
"Halil Sezai", "Manuş Baba", "İrem Derici", "Simge Sağın",
"Tolga Sarıtaş", "Doğu Demirkol", "Şahan Gökbakar",
"Sefo", "Oğuzhan Uğur", "Yusuf Güney",
"Ceza", "Sagopa Kajmer", "Kadıköy Boğası", "Testo Taylan", "Ali Koç",
"Ati242", "Kemal Sunal", // Senin eklediklerin
"Volkan Konak", "Athena Gökhan", "Cem Karaca",
 "Kadir İnanır", "Türkan Şoray","Hülya Avşar", "Mustafa Sandal", "Ebru Gündeş",
"Hadise", "Murat Boz",
"Kerem Bürsin","Aras Bulut İynemli", "Kubilay Aka",
"Uraz Kaygılaroğlu","Ahmet Kural", "Murat Cemcir",
"Büşra Pekin", 
"Eser Yenenler", "İbrahim Büyükak", "Tuncel Kurtiz",
"Erdal Beşikçioğlu", "Oktay Kaynarca", "Şevval Sam", "Candan Erçetin",
"Manga", "Athena", "Hayko Cepkin", "Kalben", // Benim eklediklerim



  ],
  karisikUnlu: [
    "Barış Manço", "Tarkan", "Sezen Aksu", "Cem Yılmaz",
"Ajda Pekkan", "Haluk Bilginer", "Kıvanç Tatlıtuğ", "Ezhel", "Zeynep Bastık",
"Kenan İmirzalıoğlu", "Beren Saat", "Hazal Kaya", "Hande Erçel",
"Serenay Sarıkaya", "Burak Özçivit", "Fahriye Evcen", "Can Yaman", "Demet Özdemir", "Çağatay Ulusoy", "Cansu Dere",
"Ezgi Mola", "Demet Evgar", "Tolga Çevik", "Ata Demirer", "Yılmaz Erdoğan",
"Şener Şen", "Meryem Uzerli", "Nejat İşler",
"Seda Sayan", "Gülşen", "Hande Yener", "Sertab Erener", "Teoman",
"Kenan Doğulu", "Aleyna Tilki", "Derya Uluğ",
"Acun Ilıcalı", "Müge Anlı", "Esra Erol", "Beyazıt Öztürk",
"Mehmet Ali Erbil", "Danla Bilic", "Enes Batur", "Orkun Işıtmak", "Ruhi Çenet",
"Barış Özcan", "Reynmen",
"Zeki Müren", "Orhan Gencebay", "Ferdi Tayfur", "Mahsun Kırmızıgül", "Müslüm Gürses",
"Yıldız Tilbe", "İbrahim Tatlıses", "Emel Sayın",
"Gülben Ergen", "Sibel Can", "Yalın", "Mabel Matiz", "Cem Adrian", "Oğuzhan Koç",
"Halil Sezai", "Manuş Baba", "İrem Derici", "Simge Sağın",
"Tolga Sarıtaş", "Doğu Demirkol", "Şahan Gökbakar",
"Sefo", "Oğuzhan Uğur", "Yusuf Güney",
"Ceza", "Sagopa Kajmer", "Kadıköy Boğası", "Testo Taylan", "Ali Koç",
"Ati242", "Kemal Sunal", // Senin eklediklerin
"Volkan Konak", "Athena Gökhan", "Cem Karaca",
 "Kadir İnanır", "Türkan Şoray","Hülya Avşar", "Mustafa Sandal", "Ebru Gündeş",
"Hadise", "Murat Boz",
"Kerem Bürsin","Aras Bulut İynemli", "Kubilay Aka",
"Uraz Kaygılaroğlu","Ahmet Kural", "Murat Cemcir",
"Büşra Pekin", 
"Eser Yenenler", "İbrahim Büyükak", "Tuncel Kurtiz",
"Erdal Beşikçioğlu", "Oktay Kaynarca", "Şevval Sam", "Candan Erçetin",
"Manga", "Athena", "Hayko Cepkin", "Kalben", // Benim eklediklerim

"Rihanna", "Brad Pitt", "Angelina Jolie", "Taylor Swift",
"Emma Watson", "Shakira", "Elon Musk", "Billie Eilish",
"Selena Gomez", "Ariana Grande", "Justin Bieber", "Johnny Depp",
"Leonardo DiCaprio", "Lady Gaga", "Dua Lipa", "Zendaya",
"Emma Stone", "Jennifer Lawrence", "Natalie Portman", "Keanu Reeves", "Tom Holland",
"Robert Downey Jr.", "Chris Hemsworth", "Anne Hathaway", "Millie Bobby Brown", "Gal Gadot",
"Margot Robbie",
"Ryan Reynolds", "Henry Cavill", "Cillian Murphy", "Pedro Pascal",
"Jason Momoa", "Ben Affleck", "Matt Damon", "Chris Evans", "Tom Hiddleston", "Jake Gyllenhaal", "Andrew Garfield",
"Will Smith", "The Weeknd",
"Harry Styles", "Zayn Malik", "Miley Cyrus", "Lana Del Rey",
"Michael B. Jordan", "Dwayne Johnson", "Vin Diesel", "Hugh Jackman",
"Mr. Beast", "Ana De Armas", "Ester Exposito", // Senin eklediklerin

// Yeni eklenen yabancı ünlüler:
"Tom Cruise", 
"Al Pacino", 
"Morgan Freeman", "Christian Bale", "Scarlett Johansson",
"Chris Pratt", "Tom Hardy", "Benedict Cumberbatch", 
"Gal Gadot",
"Ryan Gosling", "Jason Statham","Lewis Hamilton"


  ]
};

function createNameInputs() {
  const count = parseInt(document.getElementById("playerCount").value);
  if (count < 3 || count > 6) {
    alert("3 ile 6 arasında bir sayı girin.");
    return;
  }

  playerCount = count;
  const container = document.getElementById("nameInputs");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    container.innerHTML += `<input type="text" id="name${i}" placeholder="Oyuncu ${i + 1} adı">`;
  }

  document.getElementById("categorySection").style.display = "block";
  document.getElementById("startGameBtn").style.display = "inline-block";
  document.getElementById("newGameBtn").style.display = "none";
  document.getElementById("scoreBoard")?.remove();
  document.getElementById("voteSection")?.remove();
}

function startGame() {
  playerNames = [];
  scores = scores || {};

  selectedCategory = document.getElementById("categorySelect").value;
  if (!selectedCategory || !categories[selectedCategory]) {
    alert("Lütfen bir kategori seçin.");
    return;
  }

  for (let i = 0; i < playerCount; i++) {
    const name = document.getElementById(`name${i}`).value.trim();
    if (!name) {
      alert("Tüm isimleri doldurun.");
      return;
    }
    playerNames.push(name);
    if (!(name in scores)) scores[name] = 0;
  }

  // Arka planı siyah yap, kategori seçimini gizle
  document.body.style.backgroundColor = "black";
  document.getElementById("categorySection").style.display = "none";

  assignRoles();
  showRoles();
}

function assignRoles() {
  roles = [];

  // İmpostor seçimi
  if (lastImpostorIndex === -1 || Math.random() < 0.8) {
    do {
      impostorIndex = Math.floor(Math.random() * playerCount);
    } while (impostorIndex === lastImpostorIndex);
  } else {
    impostorIndex = lastImpostorIndex;
  }
  lastImpostorIndex = impostorIndex;

  // Ünlü seçimi
  let chosenCelebrity;
  const pool = categories[selectedCategory];

  do {
    chosenCelebrity = pool[Math.floor(Math.random() * pool.length)];
  } while (chosenCelebrity === lastCelebrity);

  lastCelebrity = chosenCelebrity;

  for (let i = 0; i < playerCount; i++) {
    roles.push(i === impostorIndex ? "IMPOSTOR" : chosenCelebrity);
  }
}

function showRoles() {
  let currentIndex = 0;

  const modal = document.createElement("div");
  modal.id = "roleModal";
  Object.assign(modal.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  });

  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.padding = "30px";
  box.style.borderRadius = "10px";
  box.style.textAlign = "center";
  box.style.width = "80%";
  box.style.maxWidth = "400px";

  modal.appendChild(box);
  document.body.appendChild(modal);

  function showNextPlayer() {
    if (currentIndex >= playerCount) {
      modal.remove();
      renderVoting();
      return;
    }

    const name = playerNames[currentIndex];
    box.innerHTML = `
      <h2>${name}, rolünü görmek için hazır mısın?</h2>
      <button id="showRoleBtn">Rolü Göster</button>
    `;

    document.getElementById("showRoleBtn").onclick = () => {
      const role = roles[currentIndex];
      box.innerHTML = `
        <h2>${name}</h2>
        <p><strong>${role === "IMPOSTOR" ? "Sen bir IMPOSTOR'sun!" : "Senin ünlün: " + role}</strong></p>
        <button id="nextBtn">Sıradaki Oyuncuya Geç</button>
      `;
      document.getElementById("nextBtn").onclick = () => {
        currentIndex++;
        showNextPlayer();
      };
    };
  }

  showNextPlayer();
}

function renderVoting() {
  let currentVoteIndex = 0;
  let individualVotes = {};

  const modal = document.createElement("div");
  modal.id = "voteModal";
  Object.assign(modal.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  });

  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.padding = "30px";
  box.style.borderRadius = "10px";
  box.style.textAlign = "center";
  box.style.width = "80%";
  box.style.maxWidth = "400px";

  modal.appendChild(box);
  document.body.appendChild(modal);

  function showNextVote() {
    if (currentVoteIndex >= playerCount) {
      modal.remove();
      calculateVotesFromObject(individualVotes);
      return;
    }

    const voterName = playerNames[currentVoteIndex];
    box.innerHTML = `
      <h2>${voterName}, kime oy veriyorsun?</h2>
      <select id="voteSelect">${playerNames.map(name => `<option value="${name}">${name}</option>`).join("")}</select><br><br>
      <button id="submitVote">Oyu Kaydet</button>
    `;

    document.getElementById("submitVote").onclick = () => {
      const selected = document.getElementById("voteSelect").value;
      individualVotes[selected] = (individualVotes[selected] || 0) + 1;
      currentVoteIndex++;
      showNextVote();
    };
  }

  showNextVote();
}

function calculateVotesFromObject(votes) {
  const votedOut = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
  const impostorName = playerNames[impostorIndex];

  const modal = document.createElement("div");
  modal.id = "resultModal";
  Object.assign(modal.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  });

  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.padding = "30px";
  box.style.borderRadius = "10px";
  box.style.textAlign = "center";
  box.style.width = "80%";
  box.style.maxWidth = "400px";

  if (votedOut === impostorName) {
    box.innerHTML = `
      <h2>İmpostor doğru tahmin edildi!</h2>
      <p>İmpostor: ${impostorName}</p>
      <p>Kimse puan almadı.</p>
    `;
  } else {
    scores[impostorName]++;
    box.innerHTML = `
      <h2>Yanlış tahmin!</h2>
      <p>Seçilen kişi: ${votedOut}</p>
      <p>Gerçek impostor: ${impostorName}</p>
      <p><strong>${impostorName}</strong> +1 puan aldı!</p>
    `;
  }

  box.innerHTML += `<br><button onclick="closeResultModal()">Tamam</button>`;
  modal.appendChild(box);
  document.body.appendChild(modal);
}

function closeResultModal() {
  document.getElementById("resultModal")?.remove();
  renderScores();
  document.getElementById("newGameBtn").style.display = "inline-block";
}

function renderScores() {
  const old = document.getElementById("scoreBoard");
  if (old) old.remove();

  const scoreDiv = document.createElement("div");
  scoreDiv.id = "scoreBoard";
  scoreDiv.innerHTML = "<h3>Puan Tablosu</h3>";

  for (const name of playerNames) {
    scoreDiv.innerHTML += `<p>${name}: ${scores[name]} puan</p>`;
  }

  document.querySelector(".container").appendChild(scoreDiv);
}

function resetGame() {
  document.getElementById("nameInputs").innerHTML = "";
  document.getElementById("startGameBtn").style.display = "none";
  document.getElementById("newGameBtn").style.display = "none";
  document.getElementById("voteSection")?.remove();
  document.getElementById("scoreBoard")?.remove();
  document.getElementById("categorySection").style.display = "none";
  document.body.style.backgroundColor = "#eaf4ff";

  
}
