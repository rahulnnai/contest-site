let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then ((contests)=> {
    console.log(contests)
    ihtml = ""
    for(item in contests) {
        console.log(contests[item])
         ihtml +=`
        <div class="card" style="width: 22rem;">
        <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p>Site is ${contests[item].site}</p>
          <p class="card-text">Status is ${contests[item].status}</p>
          <p class="card-text">In 24 hours ? <b>${contests[item].in_24_hours}</b></p>
          <p>Starts at: ${contests[item].start_time}</p>
          <p>End at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>

        </div>
    </div>
         `
    }
    cardContainer.innerHTML = ihtml
})