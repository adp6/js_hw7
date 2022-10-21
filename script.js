

window.onload = ()=> {
    let li = document.querySelectorAll('li');
    let liQuery = document.querySelector('li');
    let liActive = document.querySelector('.active');
    let menu = document.querySelector('.menu-list');
    let arrNew = [];
    let [...ul] = menu.children;
    for(let i = 2; i<ul.length; i++) {
        let liActive = document.querySelector(`li:nth-child(${i})`)
        arrNew.push(liActive.nextElementSibling);
    }
    console.log(li, liQuery.parentNode);
    console.log(document.querySelector('nav').innerHTML);
    console.log(arrNew)

    class FilmAdd{
        constructor(year, genre, name, watchCount){
            this.year = year;
            this.genre = genre;
            this.name = name;
            this.watchCount = watchCount;
        }
        getYear() {
            return this.year;
        }
        getView() {
            return this.watchCount;
        }
    }
    let drive = new FilmAdd(2011, 'thriller', 'Drive', 900000);
    let joker = new FilmAdd(2019, 'thriller','Joker', 1000000);
    let americanPsycho = new FilmAdd(2000, 'dark comedy', 'American Psycho', 600000);
    function sortByView(...arg) {
        let viewArr = [];
        arg.forEach(item => {
            
            viewArr.push(item.watchCount);
        });
        viewArr.sort((a,b) => a-b);
        return viewArr
    }
    function sortByYear(...arg) {
       let yearArr = [];
       arg.forEach(item => {
        yearArr.push(item.year)
       })
       yearArr.sort((a,b) => a-b)
       return yearArr
    }

    console.log(sortByView(drive, joker, americanPsycho));
    console.log(sortByYear(drive, joker, americanPsycho));
    let arrHFN = [document.querySelector('header'), document.querySelector('footer'), document.querySelector('nav')];
    console.log(arrHFN);
}