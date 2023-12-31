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
  p.innerHTML = `<img class="items-center" src="./image/Icon.png" alt="">
   <h1 class="text-xl lg:text-4xl font-bold">Oops!! Sorry, There is no content here</h1> 
   `
   details.innerHTML = '';
    details.appendChild(p) }
    else { 
        console.log('')
     }



    //  empty.forEach((news)=>{
    //     const div = document.createElement('div')
    //     const time = news.others?.posted_date;
    //     let hr = Math.floor(time/60);
    //     let min = hr/60;
    //     let minutes = parseInt(min);
    //     let hour = parseFloat(minutes);
    //     let minute = time%60;

    //     div.innerHTML = 
    //  })
    



    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.data?.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `

    <div class="card w-96 bg-base-100 shadow-xl ">
        <figure>
        <img class="h-60"
         src=${news?.thumbnail} alt="Shoes" />
         
         </figure>
        <div class="card-body">
            <div>
                <div class="avatar online">
                 
                </div>
              </div>       
            <div>


           <div class="flex">
           <div>
           <img class="w-14 h-14 rounded-full"
             src=${news?.authors[0].profile_picture}/>
         </div>
           <div class="ml-6">
           <h2 class="card-title"> ${news?.title} </h2>
           <p>${news?.authors[0].
           profile_name}</p>
           <p>${news?.others.views}</p> 
           </div>
           </div>

           <div>
           ${news?.verified == true?
            '<img src="./image/fi_10629607.svg"/>':' '}
           </div>                          
        </div>
      </div>
    `;
        details.innerHTML = '';           
        cardContainer.appendChild(div);
    })
}




handleCategory();
handleLoadNews('1000')
blogBtn=()=>{
    window.location.href='blog.html';

}