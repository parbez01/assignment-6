const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container')
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category}</a>       
        `;
        tabContainer.appendChild(div);
    });
    // console.log(data.data);
};



const handleLoadNews = async (categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    //    console.log(data.data);
    const details=document.getElementById('details')


    if (categoryId == 1005) {
     const p = document.createElement('p');
 p.className = " mx-auto gap-10 flex text-center items-center justify-center"
  p.innerHTML = ` <img class="items-center block" src="./image/Icon.png" alt="">
   <h1 class="text-4xl font-bold">Oops!! Sorry, There is no content here</h1> 
   `
   details.innerHTML = '';
    details.appendChild(p) }
    else { 
        console.log('')
     }

    


    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.data?.forEach((news) => {
        console.log(news?.authors[0].verified)
        const div = document.createElement('div');
        div.innerHTML = `

    <div class="card w-96 bg-base-100 shadow-xl ">
        <figure>
        <img class="h-60"
         src=${news?.
                thumbnail} alt="Shoes" /></figure>
        <div class="card-body">
            <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full">
                    <img
                      src=${news?.authors[0].profile_picture}/>
                  </div>
                </div>
              </div>
         
            <div>
            <h2 class="card-title"> ${news?.title} </h2>
            <p>${news?.authors[0].
            profile_name}</p>
                ${news?.verified == true?
                '<img src="fi_10629607.svg"/>':' '}
                ${console.log(news.verified)}

            </div>
            <p>${news?.others.views}</p>
         
        </div>
      </div>
    `;
    
        cardContainer.appendChild(div);
    })
}




handleCategory();
handleLoadNews('1000')
blogBtn=()=>{
    window.location.href='blog.html';

}