function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};
function toDateTime(secs) {
    var t = new Date(1970, 0, 1); 
    t.setSeconds(secs);
    return t;
}
function boldString(str, substr) {
    var strRegExp = new RegExp(substr, 'g');
    return str.replace(strRegExp, '<strong>'+substr+'</strong>');
  }
document.addEventListener('DOMContentLoaded', function() {

var doiList = ["10.36834/cmej.69322","10.9778/cmajo.20180204","10.1086/705124","10.1073/pnas.1603221113"];
displayName.apply(this, doiList);

function displayName(){
 	for(var i=0; i<doiList.length; i++){
        let pubItemId = document.getElementById("publication-section");
        fetch(`https://api.altmetric.com/v1/doi/${doiList[i]}`)
            .then(res => {
                handleErrors(res)
                if (res.ok) {
                    console.log('Collected data from local API for adding indicator');
                    return res.json();
                } else {
                    console.log("Unable to collect data from local API ")
                }
            })
            .then(data => {
                // Get Date of reviews
                var dateObj = toDateTime(data.published_on);
                const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {year:  'numeric', month: 'long', day:   'numeric'});
    
                let pubItem = document.createElement('div')
                pubItem.setAttribute("class","card border-3 my-4")

                let authorList = `${data.authors.join(', ')}`;
                let boldName = authorList.replace("Tyee K. Fellows",'<b>' + "Tyee K. Fellows" + '</b>');
                boldName = boldName.replace("Tyee Kenneth Fellows",'<b>' + "Tyee Kenneth Fellows" + '</b>');


                pubItem.innerHTML = 
                `
                <div class="container-fluid px-4 py-2">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-2 col-sm-3 col-md-1 col-lg-1" style='text-align: center;'>
                            <div style="@media only screen and (max-device-width: 400px) { { max-width: 10; } }" id="pubData" data-badge-popover="right" data-badge-type="donut" data-doi="${data.doi}" data-hide-no-mentions="true" class="altmetric-embed"></div>
                        </div>
                        <div class="col-2 col-sm-3 col-md-1 col-lg-1" style='text-align: center;'>
                            <div class="__dimensions_badge_embed__" data-doi="${data.doi}"  data-style="small_circle"></div>
                        </div>
                        <div class="col-3 col-sm-3 col-md-1 col-lg-1">
                            <a class="navbar-brand" href="${data.url}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Download publication">
                                <i class="bi bi-file-pdf pe-3" style='font-size:60px; color: black;'></i>
                            </a>
                        </div>
                        <div class="col-12 col-sm-12 col-md-8 col-lg-9" >
                            <p1 class="fs-5 text-start" style="text-align: justify; font-size: 0.5em">${data.title}</p1><br>
                            <p1 class="fs-6 text-start">${boldName}</p1><br>
                            <p1 class="lead fs-6 text-start"><i>${data.journal.bold()}</i>. ${longEnUSFormatter.format(dateObj)}</p1>
                        </div>
                    </div>
                </div>
                `
                pubItemId.appendChild(pubItem)
            })
            .catch(error => console.log('ERROR'))
    }
    let randNum = Math.random();

    const script = document.createElement('script');
    script.setAttribute('src',`https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?n=${randNum}`);
    script.onload = function handleScriptLoaded() {
        console.log('script has loaded');      
      };
      script.onerror = function handleScriptError() {
        console.log('error loading script');
      };
      document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.setAttribute('src',`https://badge.dimensions.ai/badge.js?n=${randNum}`);
    script2.setAttribute('charset',"utf-8")
    script2.setAttribute('async','');
    script2.onload = function handleScriptLoaded2() {
        console.log('script has loaded');      
      };
      script2.onerror = function handleScriptError2() {
        console.log('error loading script');
      };
      document.head.appendChild(script2);
}});
