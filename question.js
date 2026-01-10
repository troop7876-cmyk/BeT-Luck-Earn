const questions = [
  {q:"5 + 7 = ?", a:["10","11","12","13"], c:2},
  {q:"15 - 6 = ?", a:["7","8","9","10"], c:2},
  {q:"Capital of India?", a:["Delhi","Mumbai","Kolkata","Chennai"], c:0},
  {q:"Sun is a?", a:["Planet","Star","Galaxy","Moon"], c:1},
  {q:"Synonym of Fast?", a:["Quick","Slow","Late","Weak"], c:0},
];

// repeat logic to auto-generate 100
while (questions.length < 100) {
  questions.push(...questions.slice(0,5));
}
