const knygos = {
  grozine: [
    {
      ISBN: "BG5153F",
      leidimoMetai: 2023,
      pavadinimas: "Carienė",
      pslSkaicius: 522,
    },
    {
      ISBN: "GK3134P",
      leidimoMetai: 2013,
      pavadinimas: "Sužalota. Tikra istorija",
      pslSkaicius: 272,
    },
    {
      ISBN: "ZD5913L",
      leidimoMetai: 2012,
      pavadinimas: "Apdegęs namas",
      pslSkaicius: 320,
    },
    {
      ISBN: "JG6135B",
      leidimoMetai: 1998,
      pavadinimas: "Pergalės miestas",
      pslSkaicius: 352,
    },
  ],

  istorine: [
    {
      ISBN: "FK0913Z",
      leidimoMetai: 2003,
      pavadinimas: "Neregimoji šviesa",
      pslSkaicius: 616,
    },
    {
      ISBN: "LD9831X",
      leidimoMetai: 2005,
      pavadinimas: "Šampanės vynuogynai",
      pslSkaicius: 384,
    },
    {
      ISBN: "OI00007J",
      leidimoMetai: 2014,
      pavadinimas: "Carienės duktė",
      pslSkaicius: 504,
    },
    {
      ISBN: "MO03030X",
      leidimoMetai: 2015,
      pavadinimas: "Trojos moterys",
      pslSkaicius: 304,
    },
  ],

  negrozine: [
    {
      ISBN: "KG5123F",
      leidimoMetai: 2011,
      pavadinimas: "Mėlynas kraujas",
      pslSkaicius: 512,
    },
    {
      ISBN: "ZF6123K",
      leidimoMetai: 2005,
      pavadinimas: "Žalia šviesa",
      pslSkaicius: 304,
    },
    {
      ISBN: "KQ5413I",
      leidimoMetai: 2023,
      pavadinimas: "Nuo pirmo kąsnio",
      pslSkaicius: 280,
    },
    {
      ISBN: "ZS1073I",
      leidimoMetai: 2023,
      pavadinimas: "Sodo metai",
      pslSkaicius: 256,
    },
  ],
};


const grozineButton = document.getElementById("grozineButton");
const istorineButton = document.getElementById("istorineButton");
const negrozineButton = document.getElementById("negrozineButton");
const grozineContent = document.getElementById("grozineContent");
const istorineContent = document.getElementById("istorineContent");
const negrozineContent = document.getElementById("negrozineContent");
let numgrozine = document.getElementById("grozineButton").attributes.length;
let numistorine = document.getElementById("istorineButton").attributes.length;
let numnegrozine = document.getElementById("negrozineButton").attributes.length;
grozineButton.addEventListener("click", () =>
  displayBooks("grozine", innerHTML = numgrozine, grozineContent)
);
istorineButton.addEventListener("click", () =>
  displayBooks("istorine", (innerHTML = numistorine), istorineContent)
);
negrozineButton.addEventListener("click", () =>
  displayBooks("negrozine", innerHTML = numnegrozine, negrozineContent)
);



function displayBooks(category, content) {
  content.innerHTML = "";
  const kategorija = knygos[category];
  for (const knyga of kategorija) {
    const knygaInfo = document.createElement("div");
    knygaInfo.innerHTML = `
            ISBN: ${knyga.ISBN}<br>
            Leidimo metai: ${knyga.leidimoMetai}${
      knyga.leidimoMetai == 2023 ? " (nauja knyga)" : ""}<br>
            Pavadinimas: ${knyga.pavadinimas}<br>
            Puslapių skaičius: ${knyga.pslSkaicius}<br>
            --------------------------<br>`;
      content.appendChild(knygaInfo);
  }
}
