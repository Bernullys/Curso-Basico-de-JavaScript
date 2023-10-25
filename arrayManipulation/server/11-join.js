const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--"
for (let index = 0; index < elements.length; index++) {
    const element = elements[index]
    if (elements[elements.length -1] === element) {
        rtaFinal += element
    } else {
        rtaFinal += element + separator
    }
}
console.log(rtaFinal);


const unionElements = elements.join("--")
console.log(unionElements)


////////////////////split//////////////////////////

const title = "Arrays manipulation course";

const splitTitle = title.split(" ")
console.log(splitTitle)

const urlFinalTitle = splitTitle.join("-").toLocaleLowerCase()
console.log(urlFinalTitle)