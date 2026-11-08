var T=window.T||function(x){return x};
document.documentElement.classList.add("js");
function F(s){return '<img class="fi" alt="" src="data:image/svg+xml,'+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'>"+s+"</svg>")+'">'}
var FL_CL="<rect width='30' height='10' fill='#fff'/><rect y='10' width='30' height='10' fill='#D52B1E'/><rect width='10' height='10' fill='#0039A6'/><circle cx='5' cy='5' r='2' fill='#fff'/>";
var FL_UY="<rect width='30' height='20' fill='#fff'/><g fill='#0038A8'><rect y='2.2' width='30' height='2.2'/><rect y='6.7' width='30' height='2.2'/><rect y='11.1' width='30' height='2.2'/><rect y='15.6' width='30' height='2.2'/></g><rect width='11' height='11' fill='#fff'/><circle cx='5.5' cy='5.5' r='2.6' fill='#FCD116'/>";
var FL_EC="<rect width='30' height='10' fill='#FFDD00'/><rect y='10' width='30' height='5' fill='#034EA2'/><rect y='15' width='30' height='5' fill='#ED1C24'/>";
var $=function(s){return document.querySelector(s)};
var TG="https://t.me/grosmeisterkyiv",WA="https://wa.me/380509030195";
function ul(a){return '<ul>'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>'}
function tbl(h,r){return '<div class="scroll"><table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(x=>'<tr>'+x.map(y=>'<td>'+y+'</td>').join('')+'</tr>').join('')+'</table></div>'}
function stats(a){return '<div class="stats">'+a.map(x=>'<div class="stat"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div>'}
function tline(a){return '<ol class="tl">'+a.map(x=>'<li><div class="tl-h"><b>'+x[0]+'</b><span class="tl-v">'+x[1]+'</span></div><p><span class="tl-k">Коли отримують:</span> '+x[2]+'</p></li>').join('')+'</ol>'}
function sec(t,b){return '<section><div class="wrap"><h2>'+t+'</h2>'+b+'</div></section>'}
var TBD='<span class="chip">уточнюється</span>';

var C=[
{id:"chile",k:"cl",f:F(FL_CL),name:"Чилі",tag:"ВНЖ без інвестицій",badge:"без інвестицій",hp:"від $1540",hs:"ВНЖ 6–8 міс",price:"від 1540 USD",
 lead:"Одна зі стабільних країн регіону. ВНЖ можна отримати на підставі віддаленої роботи, доходу з-за кордону або контракту з чилійською фірмою (який ми допомагаємо укласти), без купівлі нерухомості та місцевої компанії.",
 why2:"підходить для віддаленої роботи, бізнесу та довгострокової стратегії",
 facts:[["Підстава","Підбирається індивідуально"],["Інвестиції","Не потрібні"],["Подача","Можлива дистанційно"]],
 why:[["ВНЖ без інвестицій","Не потрібно купувати нерухомість чи відкривати компанію. Підставою може бути віддалена робота, дохід з-за кордону або контракт з чилійською фірмою."],["Стабільність і якість життя","Передбачувана правова система, стабільна банківська система, хороша медицина та безпечні міста."],["Шлях до ПМЖ і громадянства","Тимчасовий ВНЖ, продовження, ПМЖ, громадянство. Подружжя й діти оформлюються разом із вами."]],
 steps:[["Тимчасовий ВНЖ на 2 роки","Підбираємо підставу, готуємо та подаємо документи. Отримуєте картку ВНЖ особисто в Чилі орієнтовно через 6–8 місяців після подачі."],["ПМЖ","Постійний вид на проживання отримуєте через 2 роки після проживання в Чилі (не менше ніж 183 дні на рік)."],["Громадянство","Після легального проживання в Чилі не менше 5 років."]],
 note:"Перелік документів і державні збори залежать від вашої підстави та уточнюються на консультації.",
 pk:[["Легалізація","від 1540 USD",["аналіз ситуації заявника(ів) та визначення оптимального шляху легалізації","консультації щодо необхідних документів, апостилювання та перекладу","надання трудового контракту як підстави для міграційної заявки","підготовка та подання міграційної заявки / заявок онлайн","супровід і моніторинг розгляду справи / справ","консультації щодо проходження міграційних етапів","супровід оформлення чилійського посвідчення особи (Cédula de Identidad) для кожного заявника"],"",[["1 особа","1540 USD"],["Пара","2540 USD"],["Сім’я","2540 USD"]]],
 ["Комплексна релокація","від 2560 USD",["усе з пакета «Легалізація»","індивідуальний план релокації","практична допомога в організації переїзду","підбір житла відповідно до бюджету та потреб","допомога з процесом оренди житла","допомога з відкриттям банківського рахунку","допомога з оформленням медичного страхування","консультації щодо побуту, інфраструктури та адаптації в Чилі"],"",[["1 особа","2560 USD"],["Пара","3560 USD"],["Сім’я","4080 USD"]]],
 ["Бізнес","від 3580 USD",["усі послуги пакетів «Легалізація» та «Комплексна релокація»","аналіз бізнес-ідеї та вибір оптимальної організаційно-правової форми","консультації щодо реєстрації компанії","супровід створення та реєстрації підприємства","підготовка установчих і реєстраційних документів","допомога з отриманням RUT та податковою реєстрацією","консультації щодо банківських і податкових питань","організаційний супровід запуску бізнесу"],"",[["1 особа","3580 USD"],["Пара","4580 USD"],["Сім’я","5150 USD"]]],
 ["Пошук роботи","від 325 USD",[],"Допомога з пошуком роботи в Чилі. Деталі та умови обговоримо індивідуально: напишіть нам."],
 ["Консультація адвоката","115 USD",[],"У разі укладання договору на супровід вартість консультації зараховується в оплату послуг."]],
 out:["Державні збори та переклади оплачуються окремо."],
 pay:["50% вартості — передоплата перед початком роботи","50% — після позитивного результату","Передоплата не повертається у випадках відмови з причин, що не залежать від компанії"]},

{id:"uruguay",k:"uy",f:F(FL_UY),name:"Уругвай",tag:"ПМЖ одразу, паспорт Уругваю",badge:"ПМЖ за 1–4 міс",hp:"від $2500",hs:"ПМЖ одразу",price:"від 2500 USD",
 lead:"Одна з найстабільніших і найбезпечніших країн регіону з відкритою міграційною політикою. Українці в’їжджають без візи й подають документи вже всередині країни.",
 why2:"підходить для спокійного життя, сім’ї та шляху до громадянства",
 facts:[["Підстава","Віддалена робота, дохід, інвестиції або ФОП"],["Перший документ","Дозвіл на 2 роки одразу"],["Громадянство","3 роки з сім’єю або 5 років одному"]],
 why:[["Безвіз і подача всередині країни","Українці в’їжджають як туристи й подають документи вже в Уругваї, без попередніх дозволів."],["ПМЖ без проміжних кроків","Заяву на постійне проживання зазвичай подають одразу. Після подачі можна жити, працювати й відкривати рахунки."],["Безпека та паспорт Уругваю","Одна з найбезпечніших країн регіону. Шлях до громадянства: від 3 років із сім’єю або від 5 років одному."]],
 steps:[["Етап 1. Заява й тимчасовий статус",["При першому візиті до Migración подається заява на ПМЖ, підстава: віддалена робота, дохід з-за кордону, інвестиції або відкриття ФОП в Уругваї","почати можна лише з паспорта, решту документів можна надати пізніше; потрібно підтвердити дохід","одразу видається дозвіл на тимчасове проживання на 2 роки","через 1–7 днів можна отримати Cédula en trámite на 2 роки (де-факто ВНЖ)","під час розгляду можна виїжджати з дозволом на повторний в’їзд"]],
  ["Етап 2. Отримання ПМЖ",["за регламентом розгляд триває 90 днів","на практиці: 1–3 місяці в столиці, 2–4 місяці в інших містах, якщо повний пакет подано одразу","після схвалення видається Cédula Legal Prov на 1 рік, потім Cédula Legal на 3 роки","з ПМЖ постійно перебувати в країні не обов’язково, потрібно вчасно оновлювати посвідчення"]],
  ["Етап 3. Громадянство",["легальне проживання (183 дні на рік) 3 роки з сім’єю або 5 років одному","потрібен економічний зв’язок: найпростіше відкрити ІП або компанію й сплачувати внески BPS","також центр життєвих інтересів в Уругваї та базова іспанська","процес триває від 1 до 1,5 року","після схвалення: посвідчення на 10 років і паспорт на 5 років (другий на 10)"]]],
 extra:sec("Строки до громадянства",stats([["Сім’я","від 4 до 4,5 року"],["Один заявник","від 6 до 6,5 року"]]))
  +sec("Документи на кожному етапі",tline([["Cédula en trámite","дійсний 2 роки","через 1–7 днів після першого візиту"],["Cédula Legal Prov","дійсний 1 рік","після схвалення ПМЖ"],["Cédula Legal","дійсний 3 роки","після уругвайського свідоцтва про народження в ЗАГСі"],["Cédula Ciudadano Legal","дійсний 10 років","після схвалення громадянства"],["Паспорт Уругваю","дійсний 5 років (другий 10)","після схвалення громадянства"]]))
  +sec("ВНЖ через бізнес або самозайнятість","<p>Можливі формати: підприємець (реєстрація компанії), ФОП (самозайнята особа), інвестиції, дохід від бізнесу. Потрібні реєстрація компанії або підтвердження діяльності, достатній дохід, місце проживання в Уругваї та довідка про несудимість.</p>"),
 pk:[["Дорослий","2500 USD",["комплектування пакета та запис до Migración","безкоштовна медична страховка, медогляд Carné de salud, щеплення","короткострокова оренда житла, зустріч в аеропорту й трансфер по Монтевідео","запис і супровід у DNIC, отримання першої седули (ВНЖ)","довідка про доходи, переклади від акредитованих перекладачів","документи до ЗАГСу, консультації щодо нерухомості","заміна водійського посвідчення, допомога з авто, дитячий садок або школа","консультація щодо переказу криптовалюти, вирішення побутових питань","супровід до отримання ПМЖ"]],
 ["Неповнолітній","1200 USD",[],"Тариф для дитини в складі сім’ї."]],
 out:["подача документів не в Монтевідео","відкриття банківського рахунку","реєстрація юрособи або ІП","державні мита та збори, переклади","допомога в організації пологів","пошук житла на довгу оренду (річний контракт)"],
 pay:["50% передоплата по прильоту","50% після отримання першої седули ВНЖ"]},

{id:"ecuador",k:"ec",f:F(FL_EC),name:"Еквадор",tag:"ВНЖ за дипломом онлайн",badge:"ВНЖ дистанційно",hp:"$1700",hs:"За дипломом",price:"1700 USD",
 lead:"ВНЖ оформлюється на підставі вищої освіти (диплом магістра, бакалавра або спеціаліста). Приїжджати для оформлення не потрібно: процедура проходить дистанційно через консульство протягом 3–4 місяців.",
 why2:"підходить, якщо потрібен статус «про запас» і дистанційне оформлення",
 facts:[["Підстава","Вища освіта (диплом)"],["Подача","Дистанційно, за 3–4 місяці"],["ВНЖ","2 роки, продовження без повторної перевірки диплома"]],
 why:[["Без поїздки","Уся процедура проходить дистанційно через консульство."],["ВНЖ на 2 роки без обов’язку переїжджати","Документ видається у вигляді PDF в особистому кабінеті."],["Необмежене продовження","Диплом підтверджують один раз. Жити й працювати в країні за цим ВНЖ можна без обмежень."]],
 steps:[["Підтвердження диплома","Приблизно 2 місяці. На цьому етапі Еквадор перевіряє основну підставу."],["ВНЖ через консульство","У середньому близько 1 місяця, залежить від консульства. Перевіряють лише безпекові питання."],["Отримання документа","ВНЖ на 2 роки у вигляді документа А4 (PDF в особистому кабінеті). Іноді консульство запрошує на співбесіду."],["Продовження","Достатньо подати документи знову, диплом підтверджувати не потрібно."],["Якщо ви вирішили приїхати","Звернення до поліції, фото й пластикове посвідчення (близько 30 хвилин, видають приблизно через тиждень)."]],
 extra:sec("Шлях до ПМЖ і громадянства",ul(["Після 21 місяця проживання: подача на ПМЖ","Після 3 років з ПМЖ: подача на паспорт"])+'<p class="ph">Вимоги до апостилю, перекладу й спеціальності диплома, а також перелік консульств уточнюються.</p>'),
 pk:[["Оформлення ВНЖ","1700 USD",[],"Результат: ВНЖ на 2 роки (PDF-файл в особистому кабінеті). Оформлення дистанційно, без приїзду в Еквадор, протягом 3–4 місяців. Детальний склад послуг обговоримо індивідуально: напишіть нам."]]}
];
var CMP=[["Підстава для ВНЖ","Підбирається індивідуально: віддалена робота, дохід з-за кордону або контракт з чилійською фірмою","Віддалена робота, дохід з-за кордону, інвестиції або ФОП в Уругваї","Вища освіта (диплом магістра, бакалавра або спеціаліста)"],
["Чи потрібно їхати","Можлива дистанційна подача, але забирати документи треба буде особисто","Так, при подачі документів (пакет готуємо заздалегідь)","Ні, ВНЖ видається дистанційно за 3–4 місяці"],
["Перший документ","—","Дозвіл на 2 роки видається одразу","ВНЖ на 2 роки (PDF-файл в особистому кабінеті)"],
["Шлях до ПМЖ","ВНЖ, продовження, ПМЖ","Заява на ПМЖ на 5 років подається одразу на першому прийомі (строк розгляду 1–4 місяці)","Заява на ПМЖ після 21 місяця проживання"],
["Громадянство","Через 5–7 років","3 роки після ПМЖ з сім’єю, 5 років одному","Через 3 роки після отримання ПМЖ"],
["Вартість послуг","від 1540 USD","2500 USD (дорослий), 1200 USD (дитина)","1700 USD"]];
var QUIZ=[
 {q:"Яка ваша головна мета?",o:[["Безпека та запасний план",{ec:2,uy:2,cl:1}],["Бізнес і робота",{cl:3,uy:1}],["Податки та капітал",{uy:3,cl:1}],["Спокійне життя, сім’я",{uy:2,ec:2}]]},
 {q:"Хто переїжджає?",o:[["Я один",{ec:1,cl:1}],["Пара",{uy:1,ec:1}],["Сім’я з дітьми",{uy:2,cl:1}]]},
 {q:"Що у вас є?",o:[["Диплом про вищу освіту",{ec:3}],["Дистанційний дохід",{ec:2,cl:2,uy:1}],["Капітал для інвестицій",{cl:2,uy:2}],["Поки не знаю",{}]]},
 {q:"Чи готові жити в країні фізично?",o:[["Так, планую переїзд",{cl:2,uy:2}],["Потрібен лише статус «про запас»",{ec:3}],["Поки не визначився",{}]]}
];

var P_WA='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',P_TG='M21.9 3.6 2.6 11c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.4-1.5ZM8.5 13.7l9.8-6.2c.5-.3.9-.1.5.2l-8.1 7.3-.3 3.4-1.9-4.7Z';
function msgLink(cls,href,p,label){return '<a class="msg '+cls+'" href="'+href+'" target="_blank" rel="noopener"><span class="ico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="'+p+'"/></svg></span><span class="mt">'+label+'</span></a>'}
function fin(){return '<section class="finS"><div class="wrap"><div class="final"><div class="blobs" aria-hidden="true"><i></i><i></i><i></i></div><h2>Обговоримо вашу ситуацію?</h2><p>Безкоштовна первинна консультація. Відповімо в робочий час.</p><div class="row">'+msgLink('tgm',TG,P_TG,'Написати в Telegram')+msgLink('wa',WA,P_WA,'Написати в WhatsApp')+'</div></div></div></section>'}
function card(c){return '<div class="country"><div class="top"><span class="fl">'+c.f+'</span><div><h3>'+c.name+'</h3><span class="muted">'+c.tag+'</span></div></div><div class="price">'+c.price+'</div><a class="btn line" href="#'+c.id+'">Детальніше про країну <svg class="ar" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></div>'}
var ICONS={"landmark":"<path d=\"M3 22h18\"/><path d=\"M6 18v-7\"/><path d=\"M10 18v-7\"/><path d=\"M14 18v-7\"/><path d=\"M18 18v-7\"/><path d=\"m12 2 9 6H3z\"/>","shield":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>","wifi":"<path d=\"M12 20h.01\"/><path d=\"M2 8.82a15 15 0 0 1 20 0\"/><path d=\"M5 12.859a10 10 0 0 1 14 0\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>","mountain":"<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"/>","waves":"<path d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/>","wine":"<path d=\"M8 22h8\"/><path d=\"M7 10h10\"/><path d=\"M12 15v7\"/><path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"/>","building":"<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"/><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"/><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"/><path d=\"M10 6h4\"/><path d=\"M10 10h4\"/><path d=\"M10 14h4\"/><path d=\"M10 18h4\"/>","home":"<path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/>","wallet":"<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/>","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>","pulse":"<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"/>","utensils":"<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/>","leaf":"<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>","dollar":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"/><path d=\"M12 18V6\"/>","plane":"<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"/>"};
var LIFE={"chile":{"t":"Життя в Чилі","items":[["landmark","Стабільність","Одна з найпередбачуваніших економік регіону, сильні інституції та зрозуміле законодавство."],["shield","Безпека","За рівнем безпеки Чилі зазвичай серед кращих у регіоні, особливо в Сантьяго, Вінья-дель-Мар і Вальпараїсо."],["wifi","Інфраструктура","Сучасні дороги, метро, швидкий інтернет і 4G/5G майже скрізь: зручно жити й працювати дистанційно."],["mountain","Клімат і природа","Від пустелі Атакама до льодовиків Патагонії. Середземноморський клімат у центрі, Анди, гірськолижні курорти, національні парки, Острів Пасхи."],["waves","Океан","Понад 4000 км узбережжя Тихого океану: пляжі, серфінг, свіжі морепродукти."],["wine","Вино","Чилі входить до провідних виробників вина у світі. Долини Майпо, Колчагуа і Касабланка відомі далеко за межами країни."],["building","Якість життя","Сучасні міста, хороша приватна медицина, міжнародні школи й розвинений сервіс. Зрозумілі міграційні процедури, багато експатів і діаспор."],["home","Нерухомість","Прозорий ринок, нові комплекси біля моря, доступна іпотека, іноземці можуть купувати житло."],["wallet","Вартість життя","Орієнтовно 1 300 USD на місяць для однієї людини з орендою, 1 800–2 000 для пари, близько 3 000 для сім’ї з чотирьох. За Numbeo, життя в середньому на 43% дешевше, ніж у США."]],"n":"Цифри орієнтовні й залежать від міста та способу життя."},"uruguay":{"t":"Життя в Уругваї","items":[["landmark","Стабільність","Передбачуваний регуляторний режим без різких змін, одна з найстабільніших країн регіону."],["sun","Клімат","Помірна зона з чотирма виразними порами року, океан згладжує перепади. У Монтевідео влітку вдень близько 28°C, узимку близько 14°C, а вночі близько 6°C."],["pulse","Медицина","Державна система й приватні кооперативи mutualista. Для експата mutualista коштує приблизно 100–250 USD на місяць з необмеженими візитами до лікарів. Доступ зазвичай відкривається після оформлення резидентства."],["utensils","Їжа","Яловичина доступна: близько 2–3 USD за кг."],["leaf","Спокійний ритм","Життя спокійніше й менш стресове, ніж у великих містах."],["wallet","Вартість життя","Від 1 300 USD на місяць для однієї людини, залежно від способу життя. Однокімнатна квартира в Монтевідео: близько 770 USD у центрі й близько 385 USD поза центром. Продукти: приблизно 250–650 USD на місяць."]],"n":"Цифри орієнтовні й залежать від міста та способу життя."},"ecuador":{"t":"Життя в Еквадорі","items":[["dollar","Долар США","Офіційна валюта країни з 2000 року: немає валютних ризиків, а інфляція стабільно низька, близько 2–3%."],["wallet","Вартість життя","Однокімнатна квартира в Кіто: близько 374 USD у центрі й близько 273 USD поза центром. Проїзний на місяць близько 21 USD, комунальні послуги для квартири 85 м² близько 43 USD."],["sun","Клімат","М’який гірський клімат цілий рік, наприклад у Куенці."],["users","Спільнота експатів","Куенка — третє за величиною місто країни з історичним центром під охороною ЮНЕСКО й однією з найбільших спільнот іноземців, зокрема англомовних."],["wifi","Інтернет і зв’язок","Безлімітний домашній інтернет від 60 Мбіт/с коштує близько 28 USD, мобільний тариф близько 13 USD."],["plane","Без обов’язку переїжджати","ВНЖ оформлюється дистанційно й не зобов’язує жити в країні. Ви переїжджаєте, коли це справді потрібно."]],"n":"Ціни орієнтовні, джерело: Numbeo."}};
var TONE={landmark:"blue",shield:"green",wifi:"cyan",mountain:"green",waves:"cyan",wine:"rose",building:"violet",home:"amber",wallet:"blue",sun:"amber",pulse:"rose",utensils:"amber",leaf:"green",users:"violet",dollar:"green",plane:"rose"};
function life(c){var L=LIFE[c.id];if(!L)return "";return sec(L.t,'<div class="lifegrid">'+L.items.map(function(x){return '<div class="lf t-'+(TONE[x[0]]||"blue")+'"><span class="ci" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+ICONS[x[0]]+'</svg></span><div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></div>'}).join("")+'</div>'+(L.n?'<p class="lifenote">'+L.n+'</p>':""))}
function cview(c){
 return '<div class="hero"><div class="wrap"><div><a class="back" href="'+BACK.h+'"><svg class="ar" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>'+BACK.t+'</a><h2 class="h1">'+c.f+' '+c.name+'</h2><p>'+c.lead+'</p><a class="btn gold" href="'+TG+'" target="_blank" rel="noopener">Отримати консультацію</a></div><div class="panel show">'+c.facts.map(x=>'<div class="pi"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div></div></div>'
 +sec('Чому '+c.name,'<div class="cards">'+c.why.map(w=>'<div class="country"><h3>'+w[0]+'</h3><p class="muted">'+w[1]+'</p></div>').join('')+'</div>')
 +sec('Шлях легалізації','<ol class="steps v">'+c.steps.map(s=>'<li><div><b>'+s[0]+'</b>'+(Array.isArray(s[1])?ul(s[1]):s[1])+'</div></li>').join('')+'</ol>'+(c.note?'<p class="ph">'+c.note+'</p>':''))
 +(c.extra||'')
 +sec('Пакети послуг',c.pk.map(p=>'<details><summary><span>'+p[0]+'</span><span class="pr">'+p[1]+'</span></summary><div class="in">'+(p[4]?'<div class="tiers">'+p[4].map(t=>'<div><small>'+t[0]+'</small><b>'+t[1]+'</b></div>').join('')+'</div>':'')+(p[3]?'<p>'+p[3]+'</p>':'')+(p[2].length?ul(p[2]):'')+'</div></details>').join('')+(c.out?'<h3 class="sub">Не входить у вартість</h3>'+ul(c.out):'')+(c.pay?'<h3 class="sub">Умови оплати</h3>'+ul(c.pay):''))
 +life(c)
 +fin()}

// головна
$("#cards").innerHTML=C.map(card).join('');
function cmpHTML(){
 var d='<div class="cmpd"><table><thead><tr><th></th>'+C.map(c=>'<th><span class="cn">'+c.f+c.name+'</span></th>').join('')+'</tr></thead><tbody>'+CMP.map(r=>'<tr><td class="rk">'+r[0]+'</td>'+C.map((c,i)=>'<td>'+r[i+1]+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
 var m='<div class="cmpm"><div class="ctabs" role="tablist">'+C.map((c,i)=>'<button type="button" role="tab" class="ctab" data-i="'+i+'">'+c.f+' '+c.name+'</button>').join('')+'</div><div class="cpanel" id="cpanel" role="tabpanel"></div></div>';
 return d+m;
}
function setTab(i){
 document.querySelectorAll(".ctab").forEach(function(t,k){t.classList.toggle("on",k==i);t.setAttribute("aria-selected",k==i)});
 var p=$("#cpanel");p.innerHTML=CMP.map(r=>'<div class="kv"><span class="k">'+r[0]+'</span><span class="v">'+r[i+1]+'</span></div>').join('');
 p.classList.remove("pa");void p.offsetWidth;p.classList.add("pa");
}
$("#cmp").innerHTML=cmpHTML();setTab(0);
$("#cmp").addEventListener("click",function(e){var b=e.target.closest(".ctab");if(b)setTab(+b.dataset.i)});
$("#pills").innerHTML='<a href="#why">Навіщо ВНЖ?</a><a href="#kviz">Підбір програми</a>'+C.map(c=>'<a href="#'+c.id+'">'+c.f+' '+c.name+'</a>').join('')+'<a href="#compare">Порівняння</a><a href="#faq">Часті питання</a><i class="pind" aria-hidden="true"></i>';
$("#hcards").innerHTML=C.map(c=>'<a class="hcard" href="#'+c.id+'"><span class="fl">'+c.f+'</span><span class="ht"><b>'+c.name+'</b><span class="mt"><i>'+c.hp+'</i><i>'+c.hs+'</i></span></span></a>').join('');
$("#finH").innerHTML=fin();
document.querySelectorAll(".lang button").forEach(b=>b.onclick=function(){document.querySelectorAll(".lang button").forEach(x=>x.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true")});

// анімація появи
var io=window.IntersectionObserver&&new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
function reveal(){
 document.querySelectorAll("#top .wrap>h2,#top .country,#top .fact,#top .steps li,#top details,#top .scroll,#top .cmpd,#top .ctabs,#top .final,#top .pi,#top .wrap>p").forEach(function(el){if(el.classList.contains("rv"))return;el.classList.add("rv");io?io.observe(el):el.classList.add("in")})
}

// маршрути: #chile, #uruguay, #ecuador, інакше головна
// повернення з сторінки країни: запам’ятовуємо позицію на головній (і чи був відкритий результат квізу)
var homeY=null,homeHash="",lastHash="",fromQuiz=false,BACK={t:"Усі країни",h:"#countries"};
function route(){
 var h=location.hash.slice(1),c=C.find(x=>x.id==h),wasHome=!$("#home").hidden;
 if(c&&wasHome){
  homeY=window.scrollY;homeHash=lastHash;
  BACK=fromQuiz&&$("#qinline .result")?{t:"Назад до результату",h:"#kviz"}:{t:"Усі країни",h:"#countries"};
 }
 if(c&&homeY===null)BACK={t:"Усі країни",h:"#countries"};
 $("#home").hidden=!!c;$("#cpage").hidden=!c;

 if(c){$("#cpage").innerHTML=cview(c);window.scrollTo({top:0,behavior:"instant"});document.title=c.name+": легалізація для українців | Grosmeister Relocation"}
 else{
  document.title="Grosmeister Relocation: релокація до Латинської Америки";
  if(!wasHome&&homeY!==null&&h===homeHash){window.scrollTo({top:homeY,behavior:"instant"})}
  else{if(h){navUntil=Date.now()+1200;setTimeout(spyLater,1300)}var el=h&&document.getElementById(h);el?el.scrollIntoView(wasHome?undefined:{behavior:"instant"}):window.scrollTo({top:0,behavior:wasHome?"smooth":"instant"})}
  homeY=null;
 }
 lastHash=h;fromQuiz=false;
 reveal();spy();
}
// запам’ятовуємо, з якого блоку клікнули: «Назад до результату» лише якщо перехід був із самого квізу
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");fromQuiz=!!(a&&a.closest("#qinline"))},true);
// кнопка «Назад» на сторінці країни повертає туди, звідки користувач прийшов (кнопка «Назад» у браузері працює так само)
document.addEventListener("click",function(e){
 var b=e.target.closest&&e.target.closest("#cpage .back");
 if(!b||homeY===null)return;
 e.preventDefault();location.hash=homeHash;
});

// квиз: одна логіка для модального вікна (кнопка в Hero) і для секції на сторінці (плашка «Квіз»)
// результат квізу -> готове повідомлення для чату (WhatsApp підставляє текст сам, у Telegram текст копіюється)
var QLAB=["Мета","Хто переїжджає","Що є","Готовність жити в країні"];
// «плюси» під конкретні відповіді: PLUS[країна][питання][варіант відповіді], null = для цієї відповіді плюса немає
var ARR='<svg class="ar" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
var ARI='<svg class="ari" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
var PLUS={
 cl:[["Стабільна правова й банківська система, безпечні міста","ВНЖ без інвестицій і можливість відкрити бізнес у Чилі","ВНЖ без купівлі нерухомості та місцевої компанії",null],
     ["Підставу для ВНЖ підбирають під вашу ситуацію",null,"Подружжя й діти оформлюються разом із вами"],
     [null,"Віддалена робота чи дохід з-за кордону можуть стати підставою для ВНЖ","Інвестиції не потрібні: ВНЖ без вкладень",null],
     ["Шлях ВНЖ "+ARI+" ПМЖ "+ARI+" громадянство й допомога після переїзду (RUT, банк, житло)",null,null]],
 uy:[["Одна з найбезпечніших країн регіону, в’їзд без візи","Після подачі на ПМЖ можна жити, працювати й відкривати рахунки","ПМЖ одразу, без проміжних кроків, і шлях до паспорта Уругваю","Одна з найбезпечніших і найстабільніших країн регіону"],
     [null,"Громадянство від 3 років із сім’єю","Громадянство від 3 років із сім’єю, допомога зі школою чи садком"],
     [null,"Почати можна лише з паспорта, решту документів подають пізніше","ПМЖ без проміжних кроків і можливість відкрити ІП або компанію",null],
     ["ПМЖ за 1–4 місяці, Cédula en trámite уже за 1–7 днів",null,null]],
 ec:[["Статус «про запас»: ВНЖ не зобов’язує жити в країні",null,null,"ВНЖ на 2 роки без обов’язку переїжджати"],
     ["Уся процедура дистанційно, без поїздки","Продовження без повторної перевірки диплома",null],
     ["Диплом про вищу освіту — готова підстава для ВНЖ","Оформлення дистанційно: жити й працювати за ВНЖ можна без обмежень",null,null],
     [null,"Подача через консульство, без поїздки в країну",null]]
};
// максимум балів, який країна може набрати за всі питання (для нормалізації)
function quizMax(k){return QUIZ.reduce((s,q)=>s+Math.max.apply(null,q.o.map(o=>o[1][k]||0)),0)}
// скільки питань залишено без конкретної відповіді («Поки не знаю»)
function quizUnknown(ans){return ans.filter(function(a,i){return !Object.keys(QUIZ[i].o[a][1]).length}).length}
// 2 найкращі програми. Відсоток 90–96% показуємо лише якщо відповідей достатньо; інакше pct=null
function quizRank(score,ans){
 var hide=quizUnknown(ans)>=2;
 var r=C.map((c,i)=>({c:c,i:i,raw:score[c.k]||0,n:(score[c.k]||0)/quizMax(c.k)}));
 r.sort((x,y)=>y.n-x.n||y.raw-x.raw||x.i-y.i);
 var m=r[0],a=r[1],pm=90+Math.round(6*m.n),pa=90+Math.round(6*a.n);
 if(pa>=pm)pa=pm-1;
 if(pa<90){pa=90;pm=91}
 m.pct=hide?null:pm;a.pct=hide?null:pa;
 return [m,a];
}
// 2–3 ключові плюси саме під відповіді користувача (найбільш «вагомі» відповіді першими)
function quizPluses(c,ans){
 var list=[];
 ans.forEach(function(a,qi){var p=QUIZ[qi].o[a][1][c.k]||0,t=PLUS[c.k][qi][a];if(p>0&&t)list.push({t:t,p:p,qi:qi})});
 list.sort((x,y)=>y.p-x.p||x.qi-y.qi);
 var out=list.slice(0,3).map(x=>x.t);
 for(var i=0;out.length<2&&i<c.why.length;i++)out.push(c.why[i][0]);
 return out;
}
// текст, який потрапляє в чат Telegram/WhatsApp: відповіді + дві розраховані країни
function quizMsg(res,ans){
 var N=function(c){return T(c.name)},mt=T("збіг з відповідями");
 var t=T("Добрий день! Пройдено квіз на сайті Grosmeister Relocation.")+"\n#"+T("квіз")+" #"+N(res[0].c)+" #"+N(res[1].c)+"\n\n"+T("Мої відповіді:")+"\n"+QUIZ.map((q,i)=>"• "+T(QLAB[i])+": "+T(q.o[ans[i]][0])).join("\n");
 t+="\n\n"+T("Результат підбору:")+"\n1) "+N(res[0].c)+(res[0].pct!=null?" — "+mt+" "+res[0].pct+"%":"")+" "+T("(основна програма)")+"\n2) "+N(res[1].c)+(res[1].pct!=null?" — "+mt+" "+res[1].pct+"%":"")+" "+T("(альтернативна програма)");
 t+="\n\n"+T("Прошу надіслати детальний розрахунок вартості, строків і чек-лист документів по цих двох країнах.");
 return t;
}
function rcard(r,role,ans){
 var c=r.c;
 return '<div class="rc'+(role?'':' main')+'"><div class="rc-h"><span class="rc-role">'+(role?'Альтернативна програма':'Основна програма')+'</span>'+(r.pct!=null?'<span class="rc-pct">'+r.pct+'%<small>збіг з відповідями</small></span>':'')+'</div>'
  +'<div class="top"><span class="fl">'+c.f+'</span><div><h3>'+c.name+'</h3><span class="muted">'+c.tag+'</span></div></div>'
  +(r.pct!=null?'<div class="rc-bar" role="img" aria-label="Збіг '+r.pct+'%"><i style="width:'+r.pct+'%"></i></div>':'')
  +ul(quizPluses(c,ans))
  +'<div class="rc-f"><b>'+c.price+'</b><a class="rc-more" href="#'+c.id+'">Детальніше про країну '+ARR+'</a></div></div>';
}
function copyText(t){
 function legacy(){
  var a=document.createElement("textarea"),ok=false;a.value=t;a.setAttribute("readonly","");a.style.cssText="position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(a);a.select();a.setSelectionRange(0,t.length);
  try{ok=document.execCommand("copy")}catch(e){}
  a.remove();return ok;
 }
 if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t).then(function(){return true},function(){return legacy()});
 return Promise.resolve(legacy());
}
function toast(t){
 var d=document.createElement("div");d.className="toast";d.setAttribute("role","status");d.textContent=t;document.body.appendChild(d);
 requestAnimationFrame(function(){d.classList.add("in")});
 setTimeout(function(){d.classList.remove("in");setTimeout(function(){d.remove()},400)},4500);
}
function makeQuiz(body,prog,modal){
 var step=0,score={},ans=[];
 function render(){
  if(step<QUIZ.length){
   prog.style.width=(step/QUIZ.length*100)+"%";
   var q=QUIZ[step];
   body.innerHTML=qHTML(step);
   body.querySelectorAll(".opt").forEach(btn=>btn.onclick=function(){if(body.classList.contains("qb-out"))return;var s=q.o[+btn.dataset.i][1];ans[step]=+btn.dataset.i;for(var k in s)score[k]=(score[k]||0)+s[k];btn.classList.add("sel");body.classList.add("qb-out");setTimeout(function(){body.classList.remove("qb-out");step++;go();if(modal)window.scrollTo(0,0)},220)});
  }else{
   prog.style.width="100%";
   var res=quizRank(score,ans),msg=quizMsg(res,ans),tgHref=TG+'?text='+encodeURIComponent(msg);
   body.innerHTML='<div class="result"><h2 class="rt">Ваші 2 найкращі програми</h2><div class="rcs">'+rcard(res[0],0,ans)+rcard(res[1],1,ans)+'</div><p class="rnote">'+(res[0].pct==null?'Ви відповіли «не знаю» на кілька питань, тому відсоток збігу не розраховуємо. ':'Відсоток — орієнтовна оцінка за вашими відповідями, а не гарантія результату. ')+'Точний варіант визначимо на консультації.</p>'
    +'<div class="rcta"><h3>Отримати детальний розрахунок вартості, строків та чек-лист документів по цих 2 країнах у Telegram</h3><p class="muted">Ваші відповіді та результат підставляться в чат автоматично. Якщо текст не з’явився, він уже скопійований: просто вставте його.</p><div class="rmsg">'+msgLink('tgm sm',tgHref,P_TG,'Отримати розрахунок у Telegram')+msgLink('wa sm',WA+'?text='+encodeURIComponent(msg),P_WA,'Або в WhatsApp')+'</div></div>'
    +'<button class="btn line block again" style="color:var(--ink)">Пройти знову</button></div>';
   body.querySelector(".msg.tgm").onclick=function(){copyText(msg).then(function(ok){toast(ok?T("Текст скопійовано. Якщо в чаті він не з’явився сам, просто вставте його."):T("Не вдалося скопіювати автоматично. Напишіть у чат:")+" "+T(res[0].c.name)+" "+T("та")+" "+T(res[1].c.name))})};
   body.querySelector(".again").onclick=function(){step=0;score={};ans=[];go();if(modal)window.scrollTo(0,0);else{var hd=$("#kviz .wrap>h2");(hd||body.parentNode).scrollIntoView({block:"start",behavior:"smooth"})}};
  }
 }
 function qHTML(i){var q=QUIZ[i];return '<p class="muted qn">Питання '+(i+1)+' з '+QUIZ.length+'</p><h2>'+q.q+'</h2><div class="opts">'+q.o.map((o,j)=>'<button class="opt" data-i="'+j+'">'+o[0]+'</button>').join('')+'</div>'}
 // усі питання мають однакову висоту (як найвище), щоб сторінка нижче не стрибала
 function lock(){
  var w=body.clientWidth;if(!w)return;
  var m=document.createElement("div");m.className="qmeasure";m.setAttribute("aria-hidden","true");m.style.width=w+"px";
  body.parentNode.appendChild(m);
  var mx=0;for(var i=0;i<QUIZ.length;i++){m.innerHTML=qHTML(i);if(window.I18N)I18N.apply(m);mx=Math.max(mx,m.getBoundingClientRect().height)}
  m.remove();body.style.minHeight=Math.ceil(mx)+"px";
 }
 // плавна зміна висоти (перехід до результату і назад)
 function glide(h0,h1){
  if(Math.abs(h1-h0)<3||!body.animate||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  body.style.overflow="hidden";
  var a=body.animate([{height:h0+"px"},{height:h1+"px"}],{duration:380,easing:"cubic-bezier(.2,.8,.2,1)"});
  a.onfinish=a.oncancel=function(){body.style.overflow=""};
 }
 function go(){var h0=body.offsetHeight;render();glide(h0,body.offsetHeight)}
 var lw=body.clientWidth;
 addEventListener("resize",function(){var w=body.clientWidth;if(Math.abs(w-lw)>1){lw=w;lock()}});
 addEventListener("langchange",function(){lock();if(step>=QUIZ.length)render()});
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(lock);
 return function(){step=0;score={};ans=[];lock();go()};
}
makeQuiz($("#qinline"),$("#qprog2"),false)();
// підсвітка поточного розділу в плашці під шапкою
var SPY=["why","kviz","countries","compare","faq"],spyKey="",tick=false,navUntil=0;
function spy(){
 var pills=$("#pills"),links=[].slice.call(pills.querySelectorAll("a")),on=[];
 if(!$("#cpage").hidden){
  var h=location.hash.slice(1);on=links.filter(a=>a.getAttribute("href")=="#"+h);
 }else{
  if(window.scrollY<80&&location.hash&&!C.some(c=>"#"+c.id==location.hash)&&Date.now()>navUntil){try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}}
  var line=pills.getBoundingClientRect().bottom+24,id="";
  SPY.forEach(function(s){var el=document.getElementById(s);if(!el)return;var r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line)id=s});
  on=links.filter(a=>{var t=a.getAttribute("href").slice(1);return id=="countries"?C.some(c=>c.id==t):(id&&t==id)});
 }
 links.forEach(a=>a.classList.toggle("on",on.indexOf(a)>-1));
 var ind=pills.querySelector(".pind");
 if(ind){
  if(on.length){
   var f=on[0],l=on[on.length-1],x=f.offsetLeft,w=l.offsetLeft+l.offsetWidth-x,first=!ind.classList.contains("vis");
   if(first)ind.style.transition="none";
   ind.style.transform="translate("+x+"px,"+f.offsetTop+"px)";ind.style.width=w+"px";ind.style.height=f.offsetHeight+"px";
   if(first){void ind.offsetWidth;ind.style.transition="";ind.classList.add("vis")}
  }else ind.classList.remove("vis")
 }
 var key=on.map(a=>a.getAttribute("href")).join();
 if(key!==spyKey){spyKey=key;var a=on[0];
  if(a&&pills.scrollWidth>pills.clientWidth)pills.scrollTo({left:a.offsetLeft-(pills.clientWidth-a.offsetWidth)/2,behavior:"smooth"})}
}
function spyLater(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;spy()})}
addEventListener("scroll",spyLater,{passive:true});addEventListener("resize",spyLater);addEventListener("langchange",spyLater);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(spy);
// плавне розкриття FAQ і пакетів
document.addEventListener("click",function(e){
 var s=e.target.closest&&e.target.closest("summary");if(!s)return;
 var d=s.parentNode,c=d.querySelector(":scope>.in");
 if(!c||!c.animate||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 e.preventDefault();
 if(d._a){d._a.cancel();d._a=null;c.style.overflow="";d.classList.remove("closing")}
 var pb=getComputedStyle(c).paddingBottom,pbn=parseFloat(pb)||0,h=0;
 if(!d.open){
  d.open=true;h=c.getBoundingClientRect().height-pbn;c.style.overflow="hidden";
  d._a=c.animate([{height:"0px",paddingBottom:"0px",opacity:0},{height:h+"px",paddingBottom:pb,opacity:1}],{duration:380,easing:"cubic-bezier(.2,.8,.2,1)"});
  d._a.onfinish=function(){c.style.overflow="";d._a=null}
 }else{
  h=c.getBoundingClientRect().height-pbn;c.style.overflow="hidden";d.classList.add("closing");
  d._a=c.animate([{height:h+"px",paddingBottom:pb,opacity:1},{height:"0px",paddingBottom:"0px",opacity:0}],{duration:260,easing:"ease"});
  d._a.onfinish=function(){d.open=false;d.classList.remove("closing");c.style.overflow="";d._a=null}
 }
});
addEventListener("hashchange",route);route();

// кнопка Telegram: з’являється після прокрутки, на телефоні періодично розкривається в підпис
(function(){
 var tg=document.querySelector(".tg");if(!tg)return;
 var shown=false,openT=0,loopT=0,nearFooter=false,calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
 var ft=document.querySelector("footer");
 if(ft&&"IntersectionObserver" in window)new IntersectionObserver(function(es){nearFooter=es[0].isIntersecting;if(nearFooter){tg.classList.remove("open");clearTimeout(openT)}}).observe(ft);
 function open(){if(calm||!shown||nearFooter)return;var t=tg.querySelector(".tgt");tg.style.setProperty("--tgw",t.scrollWidth+"px");tg.classList.add("open");clearTimeout(openT);openT=setTimeout(function(){tg.classList.remove("open")},4800)}
 function check(){
  var on=window.scrollY>350;
  if(on&&!shown){shown=true;tg.classList.add("show");setTimeout(open,700);loopT=setInterval(function(){if(!tg.matches(":hover"))open()},25000)}
  else if(!on&&shown){shown=false;tg.classList.remove("show","open");clearInterval(loopT);clearTimeout(openT)}
 }
 addEventListener("scroll",check,{passive:true});check();
})();
