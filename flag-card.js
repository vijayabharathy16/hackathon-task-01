

// fetch("https://restcountries.com/v3.1/all").then(function(data){
//   data.json().then(function(countrydata){
//     console.log(countrydata);
//     let ind=countrydata.filter((country)=>country.name.common=="India");
//     console.log(ind);

//     for(var country of countrydata){ 
// // function createflag(){
//   const comdiv=document.createElement("div");
//   comdiv.setAttribute("class","flag-container");

//   comdiv.innerHTML=`<img src=${country.flags.png}
//   alt="India flag" class="info-img">
//   <div class="flag-info">
//   <h3>${country.name.common}</h3>
//   <p><span>Capital :</span>${country.capital}</p>
//   <p><span>Region :</span> ${country.region}</p>
//   <p><span>Country Code :</span>${country.idd.root}${country.idd.suffixes}</p>
//   <p><span>Latlng:</span>${country.latlng}</p>
//   <div class="buton">
//   <a href="https://openweathermap.org/" target="_blank"><button>Click for Weather<button></a>
//   </div>
//   </div>`
//   document.body.append(comdiv);
//   // }
//   // createflag(country);
// } 

//   })
// })
// .catch(function(error){
//   console.log(error);
// })




    // function weatherdata(capital){
    //   fetch("https://api.openweathermap.org/data/2.5/weather?q="+capital+"&appid=888d2767d9c310a5cc337e35e6086f46").then(async function(data){

    //   var data=await data.json();
    //   // alert(data);
    // alert(JSON.stringify(data.main));
    // console.log(data);
    //   }).catch(function(error){
    //     console.log(error)
    //     alert("something went wrong");
    //   })
    // };





    fetch("https://restcountries.com/v3.1/all").then(function(data){
        data.json().then(function(countrydata){
            console.log(countrydata);
        
        
        
        
          for(let country of countrydata){
            var sec=document.createElement("section");
            sec.className="col-xxl-3 col-lg-4 col-md-6 col-sm-12";
        
        
           var div1=document.createElement("div");
           div1.setAttribute("class","card");
        
          //  div1.style.width="18rem";
        
        
           let head=document.createElement("h2");
           head.setAttribute("class","card-title card-header")
           div1.append(head)
           head.innerHTML=country.name.common;
          div1.append(head)
        
        
           let img=document.createElement("img");
           img.setAttribute("class","card-img-top");
           img.src=country.flags.png;
           img.alt="country flag";
           div1.append(img)
        
           let div2=document.createElement("div");
           div2.setAttribute("class","card-body")
        
           let capital=document.createElement("p");
           capital.setAttribute("class","card-text")
           capital.innerHTML=`<span>Capital : <span>`+country.capital;
           div2.appendChild(capital);
        
           let region=document.createElement("p");
           region.setAttribute("class","card-text");
           region.innerHTML=`<span>Region : <span>`+country.region;
           div2.appendChild(region);
        
           let code=document.createElement("p")
           code.setAttribute("class","card-text");
           code.innerHTML=`<span>Country Code : <span>`+country.fifa;
           div2.appendChild(code);
        
           let location=document.createElement("p");
           location.setAttribute("class","card-text");
           location.innerHTML=`<span>Latlng : <span>`+country.latlng;
           div2.append(location);
        
          //  div2.appendChild(capital,region,code,location);
        
        
           const button = document.createElement('button');
           button.innerText="Click for Weather";
        
           button.setAttribute("class","btn btn-primary");
        
           button.addEventListener("click",function(){
              fetch("https://api.openweathermap.org/data/2.5/weather?q="+country.name.common+"&appid=888d2767d9c310a5cc337e35e6086f46").then(async function(data){
        
              var data=await data.json();
              // alert(data);
            alert(JSON.stringify(data.main));
            console.log(data);
              }).catch(function(error){
                console.log(error)
                alert("something went wrong");
              })
        
           })
        
        
           div2.appendChild(button);
           div1.appendChild(div2);
        
          sec.append(div1);
        document.body.appendChild(sec);
        
        
        
        
        }
        
        
        });
          })
          .catch(function(error){
            alert("something went wrong");
        console.log(error);
          })
        
        
        
        
        
        
        
        
        
        
        
        
          // sec.innerHTML=`<div id="id1"class="card style="width: 18rem;">
        //   <h5 class="card-title card-header">${country.name.common}</h5>
        //   <img src=${country.flags.png} class="card-img-top" alt="country flag">
        //   <div id="id2"class="card-body">
        
        //     <p class="card-text"><span>Capital :</span>${country.capital}</p>
        //     <p class="card-text"><span>Region :</span>${country.region}l</p>
        //     <p class="card-text"><span>Country code :</span>${country.fifa}</p>
        //     <p class="card-text"><span>Latlng :</span>${country.latlng}</p>
        
        
        
        
        //   </div>
        // </div>
        // `
        /* <a href="#" onclick="weatherdata(${capital})" class="btn btn-primary">Click for Weather</a> */
        
        // const validateRequest = () => weatherdata(button.id);
        // const button = document.createElement('button');
        // button.setAttribute("id",capital);
        // button.onclick = validateRequest;
        // button.innerHTML = 'Click for Weather';
        
        // document.getElementById(capital).addEventListener("click",function demo(){
        //   weatherdata(capital)
        // })
        
        // 
        // var div2=document.getElementById("id2");
        
        // div2.append("button);
        // div1.append(div2);
        // sec.append(div1);
        
        
        // document.body.appendChild(button);
        // document.body.appendChild(sec);