const API_KEY = '52c48788d8a711dabb49fbe97a8b7ba82da39f117ecb2764e4d2aa778b5e9c0f';
const THESIS_STATS_URL = 'https://oc2-index.library.ubc.ca/collections/24/items/1.0166301/_statistics';
const THESIS_METADATA_URL = 'https://open.library.ubc.ca/collections/24/items/1.0166301/media-embed/0';

async function getThesisData() {
    const thesisMetaResponse = await fetch(THESIS_METADATA_URL + '?key=' + API_KEY).catch(err => console.log(err));
    const thesisMeta = await thesisMetaResponse.json();
    const thesisStatResponse = await fetch(THESIS_STATS_URL + '?key=' + API_KEY).catch(err => console.log(err));
    const thesisStat = await thesisStatResponse.json();
    return [thesisMeta, thesisStat];
}

async function embedThesis() {
    const data = await getThesisData();
    return data
};

document.addEventListener('DOMContentLoaded', function() {
    embedThesis().then(res => {
        let pubItem = document.createElement('div')
        pubItem.setAttribute("class","card border-3 my-4")

        const divContainer = document.createElement('div');
        divContainer.classList.add('container-fluid','px-4', 'py-2');
        const divRow = document.createElement('div');
        divRow.classList.add('row','d-flex','justify-content-between','align-items-center');
        
        const divViews = document.createElement('div');
        divViews.classList.add('col-2','col-sm-3','col-md-1','col-lg-1');
        divViews.style.cssText += 'text-align: center; ';
        divViews.innerHTML = `
        <a class="navbar-brand position-relative" href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0166301" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Total views">
            <i class="bi bi-eye align-self-center ps-3" style='font-size:30px; color: black;'></i>
        </a><br>
        <p1 style='font-size:18px;'>${res[1].data.views.total}</p1>
        `;

        const divDownloads = document.createElement('div');
        divDownloads.classList.add('col-2','col-sm-3','col-md-1','col-lg-1');
        divDownloads.style.cssText += 'text-align: center;';
        divDownloads.innerHTML = `<a class="navbar-brand" href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0166301" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Total downloads"><i class="bi bi-download ps-3" style='font-size:30px; color: black;'></i></a><br><p1 style='font-size:18px;'>${res[1].data.interactions.total}</p1>`;

        const divPdf = document.createElement('div');
        divPdf.classList.add('col-3','col-sm-3','col-md-1','col-lg-1');
        divPdf.innerHTML = `<a class="navbar-brand" href="https://open.library.ubc.ca/media/download/pdf/24/1.0166301/1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Download publication"><i class="bi bi-file-pdf" style='font-size:60px; color: black;'></i></a>`

        const divText = document.createElement('div');
        divText.classList.add('col-12','col-sm-12','col-md-8','col-lg-9');
        // Wrapping Thesis Title
        const pTitle = document.createElement('p1');
        pTitle.classList.add('fs-5','text-start');
        pTitle.style.cssText += 'text-align:justify;font-size:0.5em;'
        pTitle.textContent = res[0].metadata.Title[0].value;
        // Wrapping Thesis Author
        const pName = document.createElement('p1');
        pName.classList.add('fs-6','text-start');
        pName.innerHTML = '<br><b>' + res[0].metadata.Creator[0].value + '</b>. (MSc Thesis).<br>' ;
        // Wrapping Publisher and Date of publication
        const pJournalDate = document.createElement('p1');
        pJournalDate.classList.add('lead','fs-6','text-start');
        var publishedDate = new Date(res[0].metadata.DateAvailable[0].value+'T00:00:00');
        const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {year:  'numeric', month: 'long', day:   'numeric'});
        pJournalDate.innerHTML = '<i><b>' + res[0].metadata.Publisher[0].value + '</b></i>. ' + longEnUSFormatter.format(publishedDate);

        const pubSection = document.getElementById('publication-section');

        divText.append(pTitle);
        divText.append(pName);
        divText.append(pJournalDate);
        divRow.append(divViews);
        divRow.append(divDownloads);
        divRow.append(divPdf);
        divRow.append(divText);
        divContainer.append(divRow);
        pubItem.append(divContainer);
        pubSection.append(pubItem);
    });
});