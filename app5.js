const isAdmin = true
const WRITE = true

console.log(`систменый файл ${isAdmin && WRITE}`)
console.log(`Обычный файл ${isAdmin || WRITE}`)
console.log(`Инвертируем ${!isAdmin}`)

const isEdited = true
const isSuperAdmin = true

console.log(`Системный файл с редактированием ${
    isAdmin && WRITE && !isEdited
}`)
let a = 7
if (a === -8 || a === 22) {

}