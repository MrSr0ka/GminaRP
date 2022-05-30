var clip = [
  "@matebo",
  "@Groobeach",
  "@wooyekzbyshek",
  "@Edmund_Krzak",
  "@PanKeczu",
  "@portasss",
  "Andrzej Lubon",
  "S.p Lord Heheszko",
  "Srodkowy Srodkowy!!",
  "Zgadnij kto afczy?",
  "NIPPON KAZAAAUWA!!!",
  "Died of Ligma",
  "Gminne Wariaty",
  "Nowy hosting!",
  "Jest git",
  "@Sir_Salata",
  "@sianosvky",
  "SKRRRTTT",
  "Bedrock ssie",
  "Stare chlopy a glupie",
];

function randomClip() {
  var randomWord = Math.floor(Math.random() * clip.length);
  document.getElementById("randoClip").innerHTML = clip[randomWord];
}
