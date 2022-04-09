import requests
from bs4 import BeautifulSoup


class Engine:
    def __init__(self):
        pass

    def navigate(url):

        headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.41 YaBrowser/21.5.0.582 Yowser/2.5 Safari/537.36"
        }

        response = requests.get(url, headers=headers)
        response.encoding = 'utf-8'

        return BeautifulSoup(response.text, features='lxml')
