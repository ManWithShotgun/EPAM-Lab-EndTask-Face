react-paginate : https://github.com/AdeleD/react-paginate
пример логина: https://github.com/mxstbr/login-flow



goto: сделать bascket блок по клику, а не по hover
goto: первым делом post запросы
goto: сделать нормально хранение account role 
fix: если выбрать 5 страницу и изменить фильтр то страница останется 5 но пустая; пагинатор не сломается, просто будет 5-ая страница
fix: после нажатия edit textarea очищается.

нетипизированные entity в store; избыточный json; нету entity (нету сущностей) из-за чего создание новых объектов (т.к. item в bascket) через литералы объекта.

Выпадающие меню опредляет контент или контент определяет меню? Генерить меню из категорий сложно, пока будет статическое меню.

из-за того что в ссылке logout href="#" надо использовать два browserHistory.goBack(), а без href или to ссылка теряет вид курсора pointer. Через навигацию истории браузера всеравно можно добраться до приватных часте, после выхода. Не знаю как пофксить.

сделать один стор (один массив) для мониторов и камер или для кажжого свой. Так же переменные offsetMonitor offsetCameras etc.

Возможно слишком сильно дроблю action. В products все можно сделать одним action. Сильно ли это снижает производительность?

Есть ли в redux такой механижм callback'a как в react setState({newState}, callback)?

Почему люди в проектах так часто юзают const? Хоть переменная не меняется (на один рендер создается), но чем хуже let?

dispatch используется для цепочки вызовов или в action можно возращать просто объект с type.

Вопросы по REST:
GET — получение ресурса   GET /customers/ (GET /customers/{id})
POST — создание ресурса   POST /customers/
PUT — обновление ресурса  PUT /customers/{id}
DELETE — удаление ресурса DELETE /customers/{id}

Какой uri должен быть у страницы с формой изменения ресурска? Пока решил так (GET /customers/{id}/edit), но это не REST. Возможно редактирование в модальном окне.

new FormData создает myltipart content-type, по этому для парсинга на сервере NodeJS надо юзать 'connect-multiparty'. На java х3 что надо юзать.


rfc 2068 http/1.1
