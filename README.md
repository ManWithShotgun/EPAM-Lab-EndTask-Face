
jwt: https://jwt.io/
jwt-decode (for browser): https://github.com/auth0/jwt-decode
node-jwt: https://github.com/auth0/node-jsonwebtoken
java-jwt: https://github.com/auth0/java-jwt
jwt client verify?https://auth0.com/forum/t/stealing-jwt-from-authenticated-user/352/11

react-paginate : https://github.com/AdeleD/react-paginate
пример логина: https://github.com/mxstbr/login-flow



todo: сделать bascket блок по клику, а не по hover (и так норм)
todo: сделать нормально хранение account role (не сделал, не вижу всего механизма подтверждения ролей и слежки за этим)
todo: интернационализация, сделать чисто клиентскую
todo: сделать кнопку очисти форм create, update (если url длинный неудобно удалять его); Только это не форма, а таблица и надо делать функцию которая будет чистить.
todo: изменить username на logi. Так же и на бэкенде.
fix: при create(?) and edit случается переход. Найти, устранить.
fix: если выбрать 5 страницу и изменить фильтр то страница останется 5 но пустая; пагинатор не сломается, просто будет на 5-й странице. Надо явно перейти на страницу для отображения результата.
fix: после нажатия edit textarea очищается.

нетипизированные entity в store; избыточный json; нету entity (нету сущностей) из-за чего создание новых объектов (т.к. item в bascket) через литералы объекта.

Выпадающие меню определяет контент или контент определяет меню? Генерить меню из категорий сложно, пока будет статическое меню.

из-за того что в ссылке logout href="#" надо использовать два browserHistory.goBack(), а без href или to ссылка теряет вид курсора pointer. Через навигацию истории браузера всеравно можно добраться до приватных частей, после выхода. Не знаю как пофксить.

Возможно слишком сильно дроблю action. В products все можно сделать одним action. Сильно ли это снижает производительность?

Есть ли в redux такой механизм callback'a как в react setState({newState}, callback)?

Почему люди в проектах так часто юзают const? Хоть переменная не меняется (на один рендер создается), но чем хуже let?

в action dispatch используется для цепочки вызовов или в action можно возвращать просто объект с type.

Вопросы по REST:
GET — получение ресурса   GET /customers/ (GET /customers/{id})
POST — создание ресурса   POST /customers/
PUT — обновление ресурса  PUT /customers/{id}
DELETE — удаление ресурса DELETE /customers/{id}

Какой uri должен быть у страницы с формой изменения ресурса? Пока решил так (GET /customers/{id}/edit), но это не REST. Возможно редактирование в модальном окне.


rfc 2068 http/1.1
