const img = document.getElementById('cookie')
const count = document.getElementById('clicker__counter');
img.onclick = () => {
    count.textContent = Number(count.textContent) + 1
    if (count.textContent %2 != 0){
        img.width += 50
        img.height += 50
    }
    else {
        img.width -= 50
        img.height -= 50
    }
}
