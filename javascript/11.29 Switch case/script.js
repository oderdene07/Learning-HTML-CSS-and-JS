var a = parseInt(prompt('Dun oruulna uu: '))

switch (true){
    case a === 0 :
        console.log(a + ' Mash muu')
        break
    case a < 60 :
        console.log(a + ' Muu tentseegui')
        break
    case a >= 60 && a < 70 :
        console.log(a + ' Taaruu gehde tentssen')
        break
    case a >= 70 && a < 80 :
        console.log(a + ' Dund')
        break
    case a >= 80 && a < 90 :
        console.log(a + ' Sain')
        break
    case a >= 90 && a < 100 :
        console.log(a + ' Onts')
        break
    case a === 100 :
        console.log(a + ' Onts sain')
        break
}