# Script to mirror google scholar webpage to update citations
# June 4, 2023
import requests
from bs4 import BeautifulSoup

url = 'https://scholar.google.com/citations?user=sbkVZRsAAAAJ'

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Accept-Language': 'en-CA,en;q=0.5',
    'Referer': 'https://scholar.google.com',
    'DNT': '1',
}

gs_html = requests.get(url, headers=headers)
doc = BeautifulSoup(gs_html.text, "html.parser")

with open('code/googleScholarTable.html', 'w') as f:
    f.write(str(doc.select("#gsc_rsb_st")))
