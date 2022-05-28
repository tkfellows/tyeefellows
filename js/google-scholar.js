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
