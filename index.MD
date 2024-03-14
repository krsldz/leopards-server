1. Регистрируемся на selectel, вводим промокод
2. Создаем сервер: Облачная платформа — Серверы — Создать сервер
3. Выбираем самую маленькую конфигурацию, добавляем ssh-ключ, создаем сервер

Команды, чтобы скопировать ssh-ключ:

— Переходим в скрытую директорию cd ~/.ssh
— Проверяем, что ключ есть ls, ищем ключ с разрешением .pub
— Выводим cat [имя_ключ].pub, копируем

4. Публикуем репозитории в github, отдельно frontend, отдельно backend

!! Не забываем поменять url для запросов

5. Подключаемся через ssh к серверу, устанавливаем git
https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04 
6. Генерируем ssh-ключ для гитхаба, добавляем
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

7. Создаем папки для клиента и сервера, клоним проекты
8. Устанавливаем ноду, npm

Команды:
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

9. Переходим в папку сервер, устанавливаем зависимости, запускаем
10. Переходим в папку сервер, устанавливаем зависимости, билдим клиент npm run build
11. Настраиваем ngnix https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04

Команды для nginx

установка:
sudo apt update
sudo apt install nginx

настройка:
— меняем папку html по пути var/www на папку dist из нашего клиентского билда
— меняем root в default файле по пути /etc/nginx/sites-enabled
— рестарт nginx sudo service nginx restart



P.S
Подробная инструкция Selectel https://selectel.ru/blog/tutorials/deploy-with-nginx/
