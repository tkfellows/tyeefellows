// const GOOGLE_SCHOLAR_API_URL = 'https://serpapi.com/search.json?engine=google_scholar_author';
// const AUTHOR_ID = 'sbkVZRsAAAAJ';
// const SECRETE_API_KEY = '2288f953bd7078146df9eea93be7081fd5c065a5b81fbca16239805b7ff5b78b';

// async function getGoogleScholarData() {
//     // const response = await fetch(GOOGLE_SCHOLAR_API_URL + '&author_id=' + AUTHOR_ID + '&api_key=' + SECRETE_API_KEY);
//     const response = await fetch("https://serpapi.com/searches/9a4fb7c3ff88425b/629247c4ea1442bb52735048.json");
//     const gsdata = response.json();
//     console.log(gsdata);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     getGoogleScholarData();
// });

var dd = document.querySelector('dd');

var xhr = new XMLHttpRequest();

xhr.open('GET','https://cors-anywhere.herokuapp.com/https://scholar.google.com/citations?user=sbkVZRsAAAAJ&hl=en');
xhr.responseType = 'document';

xhr.onload = function() {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        var response = xhr.responseXML.querySelectorAll('#gsc_rsb_st tr');

        var gsCitation = document.getElementById('gs-citation');
        gsCitation.innerText = response[1].children[1].textContent;
        var gsHIndex = document.getElementById('gs-h-index');
        gsHIndex.innerText = response[2].children[1].textContent;
        var gsi10Index = document.getElementById('gs-i10-index');
        gsi10Index.innerText = response[3].children[1].textContent;
    }
};

xhr.onerror = function()
{
    console.error(xhr.status, xhr.statusText);
}
xhr.send();