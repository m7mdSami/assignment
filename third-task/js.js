let filterInput = document.getElementById('search');
let filterSelect = document.getElementById('select');

let filter = (filterValue) => {
    let article = document.querySelectorAll('.card');

    for (let i = 0; i < article.length; i++) {
        let title = article[i].getElementsByTagName('h2')[0];
        let source = article[i].querySelector('.source');
        let paragraphe = article[i].querySelector('.paragraphe');

        let val = title.innerHTML.toUpperCase().indexOf(filterValue) > -1 || source.innerHTML.toUpperCase().indexOf(filterValue) > -1 || paragraphe.innerHTML.toUpperCase().indexOf(filterValue) > -1;

        if (val) {
            article[i].style.display = '';
        } else {
            article[i].style.display = 'none';
        }
    }
}

let inputFilter = () => {

    let filterValue = document.getElementById('search').value.toUpperCase();

    filter(filterValue)

}

let selectFilter = () => {
    let filterValue = document.getElementById('select').value.toUpperCase().replace(/-/g, " ");
    console.log(filterValue)
    filter(filterValue)
}

filterInput.addEventListener('keyup', inputFilter);
filterSelect.addEventListener('change', selectFilter)
