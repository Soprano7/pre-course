const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
const germanFlag = colors.filter(function (color) {
    return color.startsWith("ч") || color.startsWith( "к") || color.startsWith( "ж")
}).join("-")

console.log(germanFlag)


