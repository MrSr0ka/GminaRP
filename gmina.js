var clip = [
  "@matebo",
  "@Groobeach",
  "@wooyekzbyshek",
  "@Edmund_Krzak",
  "@PanKeczu",
  "@portasss",
  "Andrzej Lubon",
  "S.p Lord Heheszko",
  "Pozar gminny 14.02.2021",
  "Zgadnij kto afczy?",
  "NIPPON KAZAAAUWA!!!",
  "Died of Ligma",
  "Gminne Wariaty",
  "Nowy hosting!",
  "Jest git",
  "@Sir_Salata",
  "@sianovsky",
  "SKRRRTTT",
  "Bedrock LoL",
  "Family friendly!",
  "Masna Gmina",
  "TikTok???",
  "Dzien dobry!",
  "Good morning!",
  "Guten morgen!",
  "MobSpawner!",
  "GminaRP",
];

function randomClip() {
  var randomWord = Math.floor(Math.random() * clip.length);
  document.getElementById("randoClip").innerHTML = clip[randomWord];
}
