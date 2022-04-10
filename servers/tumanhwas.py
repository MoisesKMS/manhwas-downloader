from base import Engine as m
import json
from bs4 import BeautifulSoup
import array

host = 'https://tumanhwas.com/'


def latest_updates():
    # ** Main function to get the latest updates **

    body = m.Engine.navigate(host).find_all('div', 'listupd')[0]

    # get Titles
    titles = body.find_all('div', 'tt')
    listSeries = []

    # get Series
    seriesContainer = body.find_all('div', 'bsx')

    for serie in seriesContainer:
        # get Title
        title = serie.find('div', 'tt').text.strip()

        # get Url
        urlSerie = serie.find('a')['href'].strip().split('leer')[1][1:]
        urlSerie = urlSerie.split('-')
        urlSerie = ' '.join(urlSerie)
        urlSerie = '-'.join(urlSerie.split(' ')[:-1])
        urlSerie = host + 'manga/' + urlSerie

        # get Image
        image = serie.find('img')['src'].strip()

        # get last Chapter
        # *title
        chapterName = serie.find('div', 'epxs').text.strip()
        # *link
        chapterLink = serie.find('a')['href'].strip()
        chapterList = {}
        chapterList['capitulo_nombre'] = chapterName
        chapterList['capitulo_url'] = chapterLink

        objSerie = {
            'titulo': title,
            'url': urlSerie,
            'imagen': image,
            'ultimo_capitulo': chapterList
        }

        listSeries.append(objSerie)

    result = {}
    result['last_updates'] = listSeries
    return json.dumps(result, ensure_ascii=False).encode('utf-8')
