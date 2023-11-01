let lang = navigator.languages[0] || 'en-EN'
if(lang == 'ru-RU') {
	document.getElementById("quantumDescription").innerHTML = ' — профессиональный Discord-бот, способный предоставить весь необходимый функционал серверу в его развитии: <span style="color: rgb(255, 255, 255, 0.7)">экономика</span>, <span style="color: rgb(255, 255, 255, 0.7)">AI-модерация</span>, <span style="color: rgb(255, 255, 255, 0.7)">интерактивные игры</span>, <span style="color: rgb(255, 255, 255, 0.7)">приветствия</span>, <span style="color: rgb(255, 255, 255, 0.7)">программирование<br>слеш-команд</span> и многое другое. Попробуйте!'
	document.getElementById("inviteButton").innerHTML = 'Пригласить'
	document.getElementById("aboutButton").innerHTML = 'Подробнее'

	document.getElementById("funcDesignName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m17.674 11.408l-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614ZM3.296 20.602l6.364-6.364"/><path fill="currentColor" d="m18.403 3.182l2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61Z"/><path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.121-2.121Z"/></g></svg> ･ Дизайн бота'
	document.getElementById("funcDesignDescription").innerHTML = 'Начните знакомство с ботом со свежим и уникальным дизайном. Разработчики вдохновлялись Леонардо да Винчи.'

	document.getElementById("funcModerationName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7Z"/></svg> ･ AI-модерация'
	document.getElementById("funcModerationDescription").innerHTML = 'Защитите свой Discord-сервер при помощи AI-модерации бота с двумя степенями проверки. Долой нарушителей!'

	document.getElementById("funcSlashName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm5.723 13L16.58 6h-2.303L7.42 18h2.303Z"/></svg> ･ Кастомные слеш-команды'
	document.getElementById("funcSlashDescription").innerHTML = 'Ощутите себя программистом, создавая свои собственные слеш-команды, которые уже поддерживают немало возможностей.'

	document.getElementById("funcGamesName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" d="M5.502 3a4.5 4.5 0 0 0 0 9h5.008a4.5 4.5 0 1 0 0-9H5.502ZM3.504 7.5a.5.5 0 0 1 .5-.5h1V6a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0V8h-1a.5.5 0 0 1-.5-.5ZM11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"/></svg> ･ Интерактивные игры'
	document.getElementById("funcGamesDescription").innerHTML = 'Максимально повысьте активность на Вашем сервере при помощи тех самых игр, с которыми можно будет делать невообразимые вещи..'

	document.getElementById("funcSearchName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg> ･ Поиск нужной функции'
	document.getElementById("funcSearchDescription").innerHTML = 'Найдите нужную функцию, используя поиск. Понимает даже мелкие ошибки в тексте или же неправильную раскладку.'

	document.getElementById("funcPermsName").innerHTML = '<svg transform="translate(0 2)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 1573v475h-512v-256h-256v-256h-256v-207q-74 39-155 59t-165 20q-97 0-187-25t-168-71t-142-110t-111-143t-71-168T0 704q0-97 25-187t71-168t110-142T349 96t168-71T704 0q97 0 187 25t168 71t142 110t111 143t71 168t25 187q0 51-8 101t-23 98l671 670zM512 704q40 0 75-15t61-41t41-61t15-75q0-40-15-75t-41-61t-61-41t-75-15q-40 0-75 15t-61 41t-41 61t-15 75q0 40 15 75t41 61t61 41t75 15z"/></svg> ･ Настройка прав команды'
	document.getElementById("funcPermsDescription").innerHTML = 'Теперь Вы можете устанавливать, кто сможет пользоваться той или иной командой. Это будет особенно удобно серверам, которые как раз таки используют иную систему модерации.'

	document.getElementById("funcMoreName").innerHTML = 'Удивительно! Но это ещё не всё...'
	document.getElementById("funcMoreDescription").innerHTML = 'Описана только 1/3 часть функционала бота. А чтобы узнать о нём больше - пригласите его на свой Discord-сервер и ощутите всю мощь бота.'
	document.getElementById("buttonAddToDiscord").innerHTML = 'Добавить в Discord'

	document.getElementById("shortDescriptionQuantum").innerHTML = 'Профессиональный помощник для Вашего сервера, имеющий весь необходимый функционал для его развития.'
	document.getElementById("footerMonitorings").innerHTML = 'Мониторинги'
	document.getElementById("footerLinks").innerHTML = 'Полезные Ссылки'
	document.getElementById("footerAnother").innerHTML = 'Остальное'

	document.getElementById("footerServer").innerHTML = 'Сервер поддержки'
	document.getElementById("footerTerms").innerHTML = 'Политика использования' 
	document.getElementById("footerPrivacy").innerHTML = 'Конфиденциальность'

	document.getElementById("footerSecret").innerHTML = '© 2023 Все права защищены'
}
