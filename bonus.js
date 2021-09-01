const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById('country-container');
const error = document.getElementById('error');

searchBtn.addEventListener('click',function(){
    countryContainer.innerHTML ='';
    const search = searchInput.value;

    if(search === ''){
        error.innerText = 'Search field cannot be empty';
        return;
    }
    const url = `https://restcountries.eu/rest/v2/name/${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(item =>{
            const div = document.createElement('div');
            div.classList.add('col-md-3')
            searchInput.value = '';
            div.innerHTML = `
            <!-- Image -->
            <div class="rounded overflow-hidden border p-2">
              <img
                src="${item.flag}"
                class="w-100"
                alt=""
              />
            </div>
            <!-- Body -->
            <div
              class="
                py-2
                d-flex
                justify-content-between
                align-items-center
                d-md-block
                text-md-center
              "
            >
              <h1>${item.name}</h1>
              <button class="btn btn-dark">Learn More</button>
            </div>
            
            `
             countryContainer.appendChild(div);
            
        });
        
    });
    
});