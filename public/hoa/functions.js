var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click', function() {
    var node;
    for (var i = 0; i < this.childNodes.length - 1; i++)
        node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
        node.classList.add('visible');
        activeDropdown = node;
    };
})

window.onclick = function(e) {
    console.log(e.target.tagName)
    console.log('dropdown');
    console.log(activeDropdown)
    if (e.target.tagName === 'LI' && activeDropdown) {
        if (e.target.innerHTML === 'Cooperativa Jep') {
            document.getElementById('credit-card-image').src = 'http://www.malldelrio.com/administrador/_lib/file/imgmarcas/jep.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Cooperativa Jep';
        } else if (e.target.innerHTML === 'Banco del Austro') {
            document.getElementById('credit-card-image').src = 'https://play-lh.googleusercontent.com/oUPx0Tjqk3dS8vGstLqSnz4PpwFuvGC0jJYEjvrFyeg-G1suFJazCG22LtblJFZGWmc=s1200';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Banco del Austro';
        }
    } else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
    }
}