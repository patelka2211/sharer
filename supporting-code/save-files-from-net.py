import requests


def save_file_from_net(url, file_path):
    response = requests.get(url)

    with open(file_path, 'w') as file:
        file.write(response.text)


# save json2html.js

save_file_from_net(
    'https://raw.githubusercontent.com/patelka2211/json2html/main/source/json2html.js', '../js/json2html.js')
