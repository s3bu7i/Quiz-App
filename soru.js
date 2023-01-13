
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Which javascript package management application?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Which one is not considered in the scope of frontend?", { a: "CSS", b: "HTML", c: "JS", d: "SQL" }, "d"),
    new Soru("3-Which one is considered as backend?", { a: "Node.js", b: "Typescript", c: "Angular", d: "React" }, "a"),
    new Soru("4-Which one does not use javascript programming language?", { a: "React", b: "Angular", c: "Vuejs", d: "Asp.net" }, "d"),
    new Soru("5-Which one does not use javascript programming language?", { a: "React", b: "Angular", c: "Vuejs", d: "Asp.net" }, "d")
];