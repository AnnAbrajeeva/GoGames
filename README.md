# GoGames

Адаптивная Pixel Perfect верстка сайта по макету из Figma с применением GSAP анимаций

[Link to the deploy](https://gogames-healas.netlify.app/)

## Stack

* HTML5
* SASS/SCSS
* JavaScript
* GSAP
* Gulp 4

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
`git clone <this repo>`
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку __app__ корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.
