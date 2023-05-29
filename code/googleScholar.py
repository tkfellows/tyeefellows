# Script to mirror google scholar webpage to update citations
# May 28, 2023
import requests

url = 'https://scholar.google.com/citations?user=sbkVZRsAAAAJ'

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Accept-Language': 'en-CA,en;q=0.5',
    'Referer': 'https://scholar.google.com',
    'DNT': '1',
}

r = requests.get(url, headers=headers)


with open('tkfellows/tyeefellows-website/code/googleScholar.html', 'w') as f:
    f.write(r.text)