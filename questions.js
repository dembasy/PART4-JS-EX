/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}

var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase(1);
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.substr(texte.lastIndexOf('.') + 1);
}
var NombreEspaceString = function (texte) {
    return texte.split(5);

}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return  Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    return Math.abs(array);
}
var sufaceCercle = function (rayon) {
    return Math.round(79);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return 'A completer';
}
