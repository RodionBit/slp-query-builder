let arrSiteName = ['https://', 'http://', 'https://www', 'http://www', 'www', ''];
let arrSiteName2 = ['htt', 'www'];

// ------------------------------------------------------------------
// Ввод ссылки главной страницы и ее трансформация для строки БД
// ------------------------------------------------------------------

let mainLinkLine = document.querySelector('.main-link-input');
mainLinkLine.style.backgroundColor = 'red';
let titleMainLink = document.querySelector('.main-link-words');
titleMainLink.textContent = 'Ссылка на главную';
let nameLine = document.querySelector('.name-input');
nameLine.disabled = true;
let nameLine2 = document.querySelector('.name2-input');
let nameLine3 = document.querySelector('.name3-input');
let nameLine4 = document.querySelector('.name4-input');
let nameLine5 = document.querySelector('.name5-input');
nameLine5.style.backgroundColor = 'red';
let nameLine6 = document.querySelector('.name6-input');
nameLine6.style.backgroundColor = 'red';
let requestLinkLine = document.querySelector('.request-input');
let nameToCreatePage;
let createNewFile = document.querySelectorAll('.create-new-file');
let clickNewFile = document.querySelector('.click-create-file');
let mainBlock = document.getElementById('main-is-done');
let bdBlock = document.getElementById('bd-is-done');
let newFileBlock = document.getElementById('new-file-is-done');
let mainLinkLineCheckIfFinish = document.querySelector('.main-link-input-check-finish');
let mainLinkLineWordIfFinish = document.querySelector('.main-link-words-check-finish');
mainLinkLineWordIfFinish.textContent = 'Нет данных';
let mainLinkBr = document.querySelectorAll('.main-link-br');
let bdBr = document.querySelectorAll('.bd-words-br');
createNewFile.forEach(line => line.style.display = 'none');
let nameBdTitle = document.getElementById('bd-words');
let nameLineWordsCheckFinish = document.querySelector('.nameLine-words-check-finish');
let nameLineInputCheckFinish = document.querySelector('.nameLine-input-check-finish');
let btnCreateNewFile = document.querySelector('.btn-create-file');
let key, ctrl;
let chooseOtherCity = document.querySelector('.any-city-input-check');
let chooseMoscowCity = document.querySelector('.moscow-input-check');

function cntrlV() {
    this.addEventListener("keydown", ev => {
        ev = ev || window.event; 
        key = ev.which || ev.keyCode; 
        ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17) ? true : false);
    }, false);    
}

clickNewFile.onclick = () => {
    window.open("new-page.html", "", "width=300,height=200");
    newFileBlock.style.backgroundColor = '#ADE4FF';
    btnCreateNewFile.style.border = 'none';
    btnCreateNewFile.style.color = 'green';
    btnCreateNewFile.textContent = 'Готово!'
    btnCreateNewFile.style.paddingLeft = '0px';
}

function newFileCreator() {
    bdBr.forEach(br => br.style.display = 'none');
    let deletedSpace = 'Готово!';
    nameBdTitle.style.color = 'green';
    bdBlock.style.backgroundColor = '#ADE4FF';
    nameBdTitle.innerHTML = deletedSpace;
    if (chooseOtherCity.checked === true) {
        createNewFile.forEach(line => {
            line.style.display = 'inline-block';
            if (document.querySelector('.title-new-file')) {
                line.style.display = 'block';
            }
        })    
    } 
    nameLine.disabled = true;
    document.querySelectorAll('.temporanto').forEach(el => el.style.display = 'none');
}
// check to finish
mainLinkLineCheckIfFinish.onclick = () => {
    mainLinkLine.disabled = true;
    if (mainLinkLine.value.length === 0) {
        nameBdTitle.innerHTML = 'Добавьте название самостоятельно';
        nameBdTitle.style.color = 'red';
        nameLine.disabled = false;
        mainBlock.style.backgroundColor = '#ADE4FF';
        localStorage.setItem('indexLink', mainLinkLine.value);
        mainLinkLineCheckIfFinish.style.display = 'none';
        mainLinkLineWordIfFinish.style.display = 'none';
        mainLinkBr.forEach(br => br.style.display = 'none');
        mainLinkLine.style.backgroundColor = 'white';
        titleMainLink.textContent = 'Готово!';
        titleMainLink.style.color = 'green';
        nameLine.oninput = () => {
            if (nameLine.value.length > 0 && nameLine.value.length <= 1) {
                nameLine.insertAdjacentHTML('afterend', 
                `<br class="temporanto">
                 <br class="temporanto">
                 <li style="list-style-type: none;" class="form_radio_btn temporanto">
                    <label for="nameLine-finish" class="nameLine-words-check-finish">OK</label>
                    <input type="checkbox" class="nameLine-input-check-finish" onclick="newFileCreator()" id="nameLine-finish">
                 </li>`);
            }
            addingToStrings(); 
        }
    } else {
        mainBlock.style.backgroundColor = '#ADE4FF';
        localStorage.setItem('indexLink', mainLinkLine.value);
        mainLinkLineCheckIfFinish.style.display = 'none';
        mainLinkLineWordIfFinish.style.display = 'none';
        mainLinkBr.forEach(br => br.style.display = 'none');
        mainLinkLine.style.backgroundColor = 'white';
        mainLinkLine.disabled = true;
        titleMainLink.textContent = 'Готово!';
        titleMainLink.style.color = 'green';
        document.getElementById('requestString').innerHTML = requestLinkLine.value;
        document.getElementById('requestString').style.backgroundColor = '#DBFF2C';
        document.getElementById('mainLinkString').innerHTML = mainLinkLine.value.trim();
        document.getElementById('mainLinkString').style.backgroundColor = '#DBFF2C';
        nameLine.disabled = false;
        nameBdTitle.innerHTML = 'Поставь пробел';
        nameBdTitle.style.color = 'red';
    }
}
// check to finish
mainLinkLine.onclick = () => {
    mainLinkLine.style.backgroundColor = 'white';
    cntrlV();
    mainLinkLine.oninput = () => {
            if (arrSiteName2.includes(mainLinkLine.value.substr(0, 3)) && key == 86 && ctrl){
                titleMainLink.style.color = 'green';
                titleMainLink.innerHTML = 'Классная ссылка';
                mainLinkLineWordIfFinish.textContent = 'Ок';
                mainLinkLineWordIfFinish.style.color = 'green';
                mainLinkLineCheckIfFinish.disabled = false;
            } else {
                mainLinkLine.value = '';
                titleMainLink.style.color = 'red';
                titleMainLink.innerHTML = 'Ссылку можно только копировать';
                mainLinkLineCheckIfFinish.disabled = true;
                mainLinkLineWordIfFinish.textContent = 'Ошибка!';
                mainLinkLineWordIfFinish.style.color = 'red';
            }

        requestLinkLine.value = mainLinkLine.value;

        for (let i = 0; i < arrSiteName.length; i++) {
            if (mainLinkLine.value.indexOf(arrSiteName[i]) === 0) 
                nameLine.value = mainLinkLine.value.replace(/.+\/\/|www.|\..+/g, '');
        };

        let blink = 0;
        let el = document.getElementById('should-blink');
        let blinkInterval = setInterval(() => {
            el.style.borderColor = 'rgba(255,0,0,'+Math.abs(Math.sin(blink))+')';
            el.style.outline = 'none';
            blink += 0.03;
        }, 15);
        nameLine.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                nameLine.style.borderColor = 'black';
                clearInterval(blinkInterval);
                let deleteSpace = 'Теперь удали пробел';
                nameBdTitle.style.color = 'red';
                nameBdTitle.innerHTML = deleteSpace;
                this.addEventListener('keydown', (e) => {
                    if (e.code === 'Backspace') {
                        let deletedSpace = 'Готово!';
                        nameBdTitle.style.color = 'green';
                        bdBr.forEach(br => br.style.display = 'none');
                        bdBlock.style.backgroundColor = '#ADE4FF';
                        nameBdTitle.innerHTML = deletedSpace;
                        if (chooseOtherCity.checked === true) {
                            createNewFile.forEach(line => {
                                line.style.display = 'inline-block';
                                if (document.querySelector('.title-new-file')) {
                                    line.style.display = 'block';
                                }
                            })    
                        } 
                        if (chooseMoscowCity.checked === true) {
                            createNewFile.forEach(line => {
                                line.style.display = 'none';
                            })    
                        }
                    }
                });
                this.addEventListener('keyup', (e) => {
                    if (e.code === 'Backspace') {
                        nameLine.disabled = true;
                    }
                });
            }
        });

        localStorage.setItem('schoolName', nameLine.value);
        localStorage.setItem('schoolNameToCreatePage', nameLine.value);

        let namer = "site";
        let value = nameLine.value;

        document.cookie = encodeURIComponent(namer) + '=' + encodeURIComponent(value);
    }
};

nameLine.oninput = () => addingToStrings(); 

function addingToStrings() {
    document.getElementById('nameString').innerHTML = nameLine.value;
    document.getElementById('nameString').style.backgroundColor = '#94E791';
    nameLine2.value = nameLine.value.trim();

    document.getElementById('nameString2').innerHTML = nameLine2.value;
    document.getElementById('nameString2').style.backgroundColor = '#94E791';

    nameLine3.value = nameLine.value.trim();
    document.getElementById('nameString3').innerHTML = nameLine3.value;
    document.getElementById('nameString3').style.backgroundColor = '#94E791';

    nameLine4.value = nameLine.value.trim();
    document.getElementById('nameString4').innerHTML = nameLine4.value;
    document.getElementById('nameString4').style.backgroundColor = '#94E791';

    nameLine5.value = nameLine.value.trim();  
    nameLine6.value = nameLine.value.trim();     

    localStorage.setItem('internalLink', nameLine2.value);
    localStorage.setItem('schoolName', nameLine.value);
    localStorage.setItem('schoolNameToCreatePage', nameLine.value);
    let namer = "site";
    let value = nameLine.value;
    document.cookie = encodeURIComponent(namer) + '=' + encodeURIComponent(value);
    console.log(document.cookie);
}


// ------------------------------------------------------------------
// Ссылка на условия обучения
// ------------------------------------------------------------------

let conditionsBlock = document.getElementById('conditions-is-done');
let conditionsLine = document.querySelector('.conditions-link-input');
conditionsLine.style.backgroundColor = 'red';
let conditionsLink = document.querySelector('.conditions-link-words');
conditionsLink.textContent = 'Ссылка на страницу с условиями';
let conditionsLineCheckIfFinish = document.querySelector('.conditions-link-input-check-finish');
let conditionsLineWordIfFinish = document.querySelector('.conditions-link-words-check-finish');
conditionsLineWordIfFinish.textContent = 'Нет данных';
let conditionsBr = document.querySelectorAll('.conditions-link-br');

conditionsLine.onclick = () => {
    conditionsLine.style.backgroundColor = 'white';
    cntrlV();
    conditionsLine.oninput = () => {
        if (arrSiteName2.includes(conditionsLine.value.substr(0, 3)) && key == 86 && ctrl) {
            conditionsLink.style.color = 'green';
            conditionsLink.innerHTML = 'Классная ссылка';
            conditionsLineWordIfFinish.textContent = 'Ok';
            conditionsLineWordIfFinish.style.color = 'green';
             conditionsLineCheckIfFinish.disabled = false;
        } else {
            conditionsLine.value = '';
            conditionsLink.style.color = 'red';
            conditionsLink.innerHTML = 'Ссылку можно только копировать';
            conditionsLineWordIfFinish.textContent = 'Ошибка';
            conditionsLineWordIfFinish.style.color = 'red';
            conditionsLineCheckIfFinish.disabled = true;
        }    
    }
}
// check to finish
conditionsLineCheckIfFinish.onclick = () => {
    conditionsBlock.style.backgroundColor = '#ADE4FF';
    localStorage.setItem('conditionsLink', conditionsLine.value);
    document.getElementById('conditionsString').innerHTML = conditionsLine.value;
    document.getElementById('conditionsString').style.backgroundColor = '#FF9FBE';
    conditionsLineCheckIfFinish.style.display = 'none';
    conditionsLineWordIfFinish.style.display = 'none';
    conditionsBr.forEach(br => br.style.display = 'none');
    conditionsLine.style.backgroundColor = 'white';
    conditionsLine.disabled = true;
    conditionsLink.textContent = 'Готово!';
    conditionsLink.style.color = 'green';
}

// ------------------------------------------------------------------
// Короткое название школы
// ------------------------------------------------------------------

let shortLine = document.querySelector('.short-input');
shortLine.style.backgroundColor = 'red';
let shortLine2 = document.querySelector('.short2-input');
let shortLine3 = document.querySelector('.short3-input');
let shortLine4 = document.querySelector('.short4-input');
let shortLine5 = document.querySelector('.short5-input');
let shortLine6 = document.querySelector('.short6-input');
let schoolNameBlock = document.getElementById('school-name-is-done');
let schoolNameBr = document.querySelectorAll('.school-name-link-br');
let schoolNameButtonFinish = document.querySelector('.school-name-link-input-check-finish');
let schoolNameConfirm = document.querySelector('.conf-later');
schoolNameConfirm.style.display = 'none';
let schoolNameTextFinish = document.querySelector('.school-name-link-words-check-finish');
let schoolNameTitile = document.querySelector('.school-name-short');
// check to finish
schoolNameButtonFinish.onclick = () => {
    localStorage.setItem('listName', shortLine.value);
    schoolNameBlock.style.backgroundColor = '#ADE4FF';
    schoolNameConfirm.style.display = 'none';
    shortLine.disabled = true; 
    schoolNameBr.forEach(br => br.style.display = 'none');
    schoolNameTitile.textContent = 'Готово!' 
    refreshh2Text.textContent = 'Редактировать H2';
    refreshh2Check.disabled = false; 
    refreshh3Text.textContent = 'Редактировать H3';
    refreshh3Check.disabled = false;
    refreshh4Text.textContent = 'Редактировать H4';
    refreshh4Check.disabled = false;
}

shortLine.oninput = () => {
    if (shortLine.value.length > '2') {
        schoolNameTitile.innerHTML = 'Подтвердите добавление!';
        schoolNameTitile.style.color = 'green';
        schoolNameConfirm.style.display = 'initial';
        schoolNameTextFinish.innerHTML = 'OK';
        document.getElementById('shortString').innerHTML = shortLine.value;
        document.getElementById('shortString').style.backgroundColor = '#FF65E7';
        shortLine2.value = shortLine.value;
        shortLine3.value = shortLine.value;
        shortLine4.value = shortLine.value;
        document.getElementById('shortString4').innerHTML = shortLine4.value;
        document.getElementById('shortString4').style.backgroundColor = '#FF65E7';
        shortLine5.value = shortLine.value;
        document.getElementById('shortString5').innerHTML = shortLine5.value;
        document.getElementById('shortString5').style.backgroundColor = '#FF65E7';
        shortLine6.value = shortLine.value;
        keyWordName.value = shortLine.value;
        keyWordNameText.textContent = shortLine.value;

    }
    else {
        schoolNameTitile.innerHTML = 'Слишком короткое название!';
        schoolNameTitile.style.color = 'red';
        schoolNameConfirm.style.display = 'none';
    }
}

shortLine.onclick = () => {
    shortLine.style.backgroundColor = 'white';
    schoolNameTitile.innerHTML = 'Введите название школы';
    schoolNameTitile.style.color = 'red';
}

// ------------------------------------------------------------------
// Год основания
// ------------------------------------------------------------------

let yearOfOriginBlock = document.getElementById('year-of-origin-is-done');
let yearLine = document.querySelector('.year-input');
yearLine.style.backgroundColor = 'red';
let yearTitle = document.querySelector('.year-of-origin');
yearTitle.textContent = 'Год основания (если года нет - ввести 0)';
let yearConfirmText = document.querySelector('.year-link-words-check-finish');
let yearConfirmButton = document.querySelector('.year-link-input-check-finish');
let yearConfirm = document.querySelector('.conf-year');
yearConfirm.style.display = 'none';
let yearBr = document.querySelectorAll('.year-link-br');
// check to finish
function confirmYear() {
    yearConfirm.style.display = 'initial';
    yearTitle.style.color = 'green';
    yearConfirmText.textContent = 'OK';
    yearConfirmButton.onclick = () => {
        yearOfOriginBlock.style.backgroundColor = '#ADE4FF';
        document.getElementById('yearString').style.backgroundColor = '#7B8DFF';
        yearTitle.innerHTML = 'Готово!';
        yearConfirm.style.display = 'none';
        yearLine.disabled = true;
        yearBr.forEach(br => br.style.display = 'none');
    }
}

yearLine.oninput = () => {
    yearLine.value = yearLine.value.substr(0, 4);
    if (yearLine.value.length === 4) {
        confirmYear();
        yearLine.value = yearLine.value.substr(0, 4);
        document.getElementById('yearString').innerHTML = yearLine.value.substr(0, 4);
        yearTitle.innerHTML = 'Год указан';
        localStorage.setItem('year', yearLine.value);
    }
    if (yearLine.value === '0') {
        confirmYear();
        document.getElementById('yearString').innerHTML = '&#10005';
        document.getElementById('yearString').style.color = 'red';
        document.getElementById('yearString').style.fontWeight = 800;
        yearTitle.innerHTML = 'Указано, что год отсутствует';
        localStorage.setItem('year', '&#10005');
    }
};

yearLine.onclick = () => {
        yearLine.style.backgroundColor = 'white';
        yearTitle.textContent = 'Если года нет, ввести 0';
        yearTitle.style.color = 'red';
};

// ------------------------------------------------------------------
// Количество уроков, цены за группу и индивидуальные
// ------------------------------------------------------------------

let pricesForLessonsBlock = document.getElementById('prices-are-done');
let groupMonthLine = document.querySelector('.groupMonth-input');
groupMonthLine.disabled = true;
groupMonthLine.style.backgroundColor = 'grey';
let groupMonthLine2 = document.querySelector('.groupMonth2-input');
let numberOfLessons = document.querySelector('.number-of-lessons-in-month-input');
numberOfLessons.style.backgroundColor = 'red';
let indiMonthLine = document.querySelector('.indiMonth-input');
indiMonthLine.disabled = true;
indiMonthLine.style.backgroundColor = 'grey';
let  priceForIndividualLessonsInMonth = document.getElementById('price-for-individual-lessons-in-month');
priceForIndividualLessonsInMonth.innerHTML = 'Цена за месяц индивидуально <b>недоступна</b>';
let  priceForGroupLessonsInMonth = document.getElementById('price-for-group-lessons-in-month');
priceForGroupLessonsInMonth.innerHTML = 'Цена за месяц в группе <b>недоступна</b>'
let numberOfLessonsPerMonth = document.getElementById('number-of-lessons-in-month');
numberOfLessonsPerMonth.textContent = 'Количество занятий в месяц';
let confirmMoney = document.querySelector('.conf-money');
confirmMoney.style.display = 'none';
let moneyButtonConfirm = document.querySelector('.money-link-input-check-finish');
let moneyTextConfirm = document.querySelector('.money-link-words-check-finish');
let moneyAdditionalTextToConfirm = 'Подтвердите, что данные верны.';
let moneyBr = document.querySelectorAll('.money-br');

numberOfLessons.onclick = () => {
    groupMonthLine.disabled = false;
    indiMonthLine.disabled = false;
    numberOfLessons.style.backgroundColor = 'white';
    groupMonthLine.style.backgroundColor = 'white';
    indiMonthLine.style.backgroundColor = 'white';
    priceForGroupLessonsInMonth.innerHTML = `Введите цену за ${numberOfLessons.value} групповые занятия или 0, если цены нет`;
    priceForIndividualLessonsInMonth.innerHTML = `Введите цену за ${numberOfLessons.value} индивидуальные занятия или 0, если цены нет`;


    if (numberOfLessons.value === '') {
        numberOfLessonsPerMonth.innerHTML = 'Если количество занятий не выбрано, то по умолчанию ставим 8 занятий за месяц';
        numberOfLessonsPerMonth.style.color = 'green';
        numberOfLessons.value = '8';
        priceForGroupLessonsInMonth.style.color = 'red';
        priceForIndividualLessonsInMonth.style.color = 'red';
    } else {
        numberOfLessonsPerMonth.innerHTML = `Считаем цену из количества ${numberOfLessons.value} занятия/-й в месяц`;
        numberOfLessonsPerMonth.style.color = 'green';
    }
} 

groupMonthLine.oninput = () => {
    groupMonthLine.style.backgroundColor = 'white';
    priceForGroupLessonsInMonth.innerHTML = 'Укажите цену за месяц в группе, если цена неизвестна, то укажите 0';
    priceForGroupLessonsInMonth.style.color = 'red';
    if (groupMonthLine.value === '0') {
        priceForGroupLessonsInMonth.innerHTML = 'Указано, что данные отсутствуют';
        priceForGroupLessonsInMonth.style.color = 'green';
        document.getElementById('groupMonthString').innerHTML = '0000';
        document.getElementById('groupOneString').innerHTML = '000'
        document.getElementById('groupMonthString').style.backgroundColor = '#7FB3D5';
        document.getElementById('groupOneString').style.backgroundColor = '#7FB3D5';
        localStorage.setItem('priceGroupOne', '000');
        localStorage.setItem('priceGroupMonth', '0000');
        if (document.getElementById('groupMonthString').innerHTML === '0000') {
            document.getElementById('groupMonthString2').innerHTML = 'неизвестно';
            document.getElementById('groupMonthString2').style.backgroundColor = 'red';
        }
    } else {
        priceForGroupLessonsInMonth.innerHTML = 'Цена за месяц добавлена';
        priceForGroupLessonsInMonth.style.color = 'green';
        document.getElementById('groupMonthString').innerHTML = groupMonthLine.value;
        groupMonthLine2.value = groupMonthLine.value;
        document.getElementById('groupMonthString2').innerHTML = groupMonthLine2.value;
        document.getElementById('groupOneString').innerHTML = groupMonthLine.value / numberOfLessons.value;
        document.getElementById('groupMonthString').style.backgroundColor = '#7FB3D5';
        document.getElementById('groupOneString').style.backgroundColor = '#7FB3D5';
        document.getElementById('groupMonthString2').style.backgroundColor = '#7FB3D5';
        localStorage.setItem('priceGroupOne', groupMonthLine.value / numberOfLessons.value);
        localStorage.setItem('priceGroupMonth', groupMonthLine.value);
    }
    checkBothPriceCat()
}

indiMonthLine.oninput = () => {
    indiMonthLine.style.backgroundColor = 'white';
    priceForIndividualLessonsInMonth.innerHTML = 'Укажите цену за месяц индивидуально, если цена неизвестна, то укажите 0';
    priceForIndividualLessonsInMonth.style.color = 'red';
    if (indiMonthLine.value === '0') {
        priceForIndividualLessonsInMonth.innerHTML = 'Указано, что данные отсутствуют';
        priceForIndividualLessonsInMonth.style.color = 'green';
        document.getElementById('indiMonthString').innerHTML = '0000';
        document.getElementById('indiOneString').innerHTML = '000';
        document.getElementById('indiMonthString').style.backgroundColor = '#7FB3D5';
        document.getElementById('indiOneString').style.backgroundColor = '#7FB3D5';
        localStorage.setItem('priceIndiOne', '000');
        localStorage.setItem('priceIndiMonth', '0000');
    } else {
        priceForIndividualLessonsInMonth.innerHTML = 'Цена за месяц добавлена';
        priceForIndividualLessonsInMonth.style.color = 'green';
        document.getElementById('indiMonthString').innerHTML = indiMonthLine.value;
        document.getElementById('indiOneString').innerHTML = indiMonthLine.value / numberOfLessons.value;
        document.getElementById('indiMonthString').style.backgroundColor = '#7FB3D5';
        document.getElementById('indiOneString').style.backgroundColor = '#7FB3D5';
        localStorage.setItem('priceIndiOne', indiMonthLine.value / numberOfLessons.value);
        localStorage.setItem('priceIndiMonth', indiMonthLine.value);
    }
    checkBothPriceCat()
}

function checkBothPriceCat() {
    if (indiMonthLine.value.length  > 0 && 
        groupMonthLine.value.length > 0 ){
            confirmMoney.style.display = 'initial';
            priceForGroupLessonsInMonth.innerHTML = moneyAdditionalTextToConfirm;
            priceForIndividualLessonsInMonth.innerHTML = moneyAdditionalTextToConfirm;
            moneyTextConfirm.textContent = 'Подтвердить';
            moneyTextConfirm.style.color = 'green';
            priceForGroupLessonsInMonth.style.color = 'red';
            priceForIndividualLessonsInMonth.style.color = 'red';
        }
}
// check to finish
moneyButtonConfirm.onclick = () => {
    confirmMoney.style.display = 'none';
    groupMonthLine.disabled = true;
    indiMonthLine.disabled = true;
    numberOfLessons.disabled = true;
    priceForIndividualLessonsInMonth.style.display = 'none';
    priceForGroupLessonsInMonth.style.display = 'none';
    moneyBr.forEach(br => br.style.display = 'none');
    numberOfLessonsPerMonth.textContent = 'Готово!';
    pricesForLessonsBlock.style.backgroundColor = '#ADE4FF';
}

// ------------------------------------------------------------------
// Выберите регион обработки
// ------------------------------------------------------------------

let onlyForMoscow = document.querySelector('.for-moscow-only');
let moscowCity = document.getElementById('moscow-city');
let moscowCityText = document.querySelector('.moscow-words-check-text'); 
moscowCityText.textContent = 'Москва';
let otherCity = document.getElementById('other-city');
let otherCityText = document.querySelector('.any-city-words-check-text'); 
otherCityText.textContent = 'Регионы';
let hideEmptyInput = document.querySelectorAll('.hide-input');
let cityBlock = document.getElementById('city-is-done');
let chooseCity = document.querySelectorAll('.choose-city');
onlyForMoscow.style.display = 'none';
let colorMoscowBlock = document.querySelector('.color-moscow-block');
// check to finish
chooseCity.forEach(city => {
    city.onclick = () => {
        switch(city.value) {
            case 'moscow': 
            onlyForMoscow.style.display = 'initial';
            moscowCityText.style.backgroundColor = '#ffe0a6';
            otherCityText.style.backgroundColor = 'transparent';
            cityBlock.style.backgroundColor = 'transparent';
            break;
            case 'other': 
            onlyForMoscow.style.display = 'none';
            otherCityText.style.backgroundColor = '#ffe0a6';
            moscowCityText.style.backgroundColor = 'transparent';
            cityBlock.style.backgroundColor = '#ADE4FF';
            moscowCity.disabled = true;
            addressForRegion.forEach(line => line.style.display = 'initial');
            break;
        }
    }
})

// ------------------------------------------------------------------
// Уточнить округ
// ------------------------------------------------------------------

let okrugLine = document.querySelector('.okrug-input');
okrugLine.style.backgroundColor = 'red';
let okrugLine2 = document.querySelector('.okrug2-input'); 
let okrugLine3 = document.querySelector('.okrug3-input');
let checkAreaMoscow = document.querySelector('.btn-check-area');
checkAreaMoscow.textContent = 'Проверка адреса';

checkAreaMoscow.onclick = () => {
    window.open("https://www.moscowmap.ru/", "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
    checkAreaMoscow.textContent = 'Округ проверен!';
    checkAreaMoscow.style.color = 'green';
};

okrugLine.oninput = () => {
    keyWordGorod.value = okrugLine.value;
    keyWordGorodText.textContent = okrugLine.value;
    okrugLine2.value = okrugLine.value;
    document.getElementById('okrugString').innerHTML = okrugLine.value;
    document.getElementById('okrugString').style.backgroundColor = '#FAE5D3';
    document.getElementById('okrugString2').innerHTML = okrugLine2.value;
    document.getElementById('okrugString2').style.backgroundColor = '#FAE5D3';
    checkMetro();
}

okrugLine.onclick = () => okrugLine.style.backgroundColor = 'white';

// -----------------------------------------------------------
// МОСКВА: Метро
// -----------------------------------------------------------

let metroLine = document.querySelector('.metro-input');
metroLine.style.backgroundColor = 'red';
let metroLineText = document.querySelector('.metro-input-text');
metroLineText.textContent = 'Метро';
let metroLine2 = document.querySelector('.metro2-input');
let metroLineBr = document.querySelector('.metro-input-br');
let metroLine3 = document.querySelector('.metro3-input');
let metroLineLatin = document.querySelector('.metro-latin-input');
let metroTwo = document.querySelector('.metro-two-input');
metroTwo.style.backgroundColor = 'red';
let metroTwoText = document.querySelector('.metro-two-input-text');
metroTwoText.textContent = 'Метро 2';
let metroTwo2 = document.querySelector('.metro-two2-input');
let metroTwoBr = document.querySelector('.metro-two-br');
let metroThree = document.querySelector('.metro-three-input');
metroThree.style.backgroundColor = 'red';
let metroThreeText = document.querySelector('.metro-three-input-text');
metroThreeText.textContent = 'Метро 3';
let metroThree2 = document.querySelector('.metro-three2-input');
let metroThreeBr = document.querySelector('.metro-three-br');
let addToMetroToNameIfFilial = document.querySelectorAll('.add-metro-to-name-if-filial');
let buttonAddMetroTOName = document.querySelector('.add-to-bd-name');
let confirmMetro = document.querySelector('.conf-metro');
confirmMetro.style.display = 'none';
let metroWordsCheckFinish = document.querySelector('.metro-words-check-finish');
metroWordsCheckFinish.textContent = 'Округ и метро готовы';
let metroCheckFinish = document.querySelector('.metro-input-check-finish');
let allMetro = document.querySelectorAll('.all-metro');
let hideAfterConfirm = document.querySelectorAll('.hide-after-confirm');
addToMetroToNameIfFilial.forEach(block => block.style.display = 'none');
let metroAddNameWordsCheckFinishDa = document.querySelector('.metro-add-name-words-check-finish-da');  
metroAddNameWordsCheckFinishDa.textContent = 'Да'
let metroAddNameInputCheckFinishDa = document.querySelector('.metro-add-name-input-check-finish-da');  
let metroAddNameWordsCheckFinishNet = document.querySelector('.metro-add-name-words-check-finish-net');  
metroAddNameWordsCheckFinishNet.textContent = 'Нет'
let metroAddNameInputCheckFinishNet = document.querySelector('.metro-add-name-input-check-finish-net');  
let metroAddQuestion = document.querySelector('.metro-add-question');
metroAddQuestion.style.display = 'none';
let metroFilial = document.querySelector('.metro-filial');
metroFilial.style.display = 'none';
let metroAddNameWordsCheckFinishAdding = document.querySelector('.metro-add-name-words-check-finish-adding');  
metroAddNameWordsCheckFinishAdding.textContent = 'Добавить'
let metroAddNameInputCheckFinishAdding = document.querySelector('.metro-add-name-input-check-finish-adding'); 
let metroForNameTitle = document.querySelector('.metro-for-name-title');
metroForNameTitle.textContent = 'Метро для названия';

metroAddNameInputCheckFinishDa.onclick = () => {
    metroAddQuestion.style.display = 'none';
    addToMetroToNameIfFilial.forEach(block => block.style.display = 'initial');
    metroFilial.style.display = 'initial';
}

metroAddNameInputCheckFinishNet.onclick = () => {
    metroAddQuestion.style.display = 'none';
    if (chooseMoscowCity.checked === true) {
        createNewFile.forEach(line => {
            line.style.display = 'inline-block';
            if (document.querySelector('.title-new-file')) {
                line.style.display = 'block';
            }
        })    
    } 
}

metroLine.oninput = () => {
    document.getElementById('metroString').innerHTML = metroLine.value;
    document.getElementById('metroString').style.backgroundColor = '#DF6084';
    metroLine2.value = metroLine.value;
    document.getElementById('metroString2').innerHTML = metroLine2.value;
    document.getElementById('metroString2').style.backgroundColor = '#DF6084';
    metroLine3.value = `рядом с метро ${metroLine.value}`;
    keyWordMetro1Text.textContent = metroLine.value;
    keyWordMetro1.value = metroLine.value;
}

metroLine.onclick = () => metroLine.style.backgroundColor = 'white';

metroLine.onchange = () => {
    metroLineText.textContent = 'Готово!';
    metroLineText.style.color = 'green';
    metroLineBr.style.display = 'none';
    checkMetro();
}

metroTwo.oninput = () => {
    document.getElementById('metroTwoString').innerHTML = metroTwo.value;
    document.getElementById('metroTwoString').style.backgroundColor = '#DF6084';
    metroTwo2.value = metroTwo.value;
    document.getElementById('metroTwoString2').innerHTML = metroTwo.value;
    document.getElementById('metroTwoString2').style.backgroundColor = '#DF6084';
    keyWordMetro2Text.textContent = metroTwo.value;
    keyWordMetro2.value = metroTwo.value;
}

metroTwo.onclick = () => metroTwo.style.backgroundColor = 'white';

metroTwo.onchange = () => {
    metroTwoText.textContent = 'Готово!';
    metroTwoText.style.color = 'green';
    metroTwoBr.style.display = 'none';
    checkMetro();
}

metroThree.oninput = () => {
    document.getElementById('metroThreeString').innerHTML = metroThree.value;
    document.getElementById('metroThreeString').style.backgroundColor = '#DF6084';
    metroThree2.value = metroThree.value;
    document.getElementById('metroThreeString2').innerHTML = metroThree.value;
    document.getElementById('metroThreeString2').style.backgroundColor = '#DF6084';  
    keyWordMetro3Text.textContent = metroThree.value;
    keyWordMetro3.value = metroThree.value;
}

metroThree.onclick = () => metroThree.style.backgroundColor = 'white';

metroThree.onchange = () => {
    metroThreeText.textContent = 'Готово!';
    metroThreeText.style.color = 'green';
    metroThreeBr.style.display = 'none';
    checkMetro();
}

checkMetro();

function checkMetro() {
    if (okrugLine.value !== "0" && metroThree.value !== ""      ||
        okrugLine.value !== "0" && metroTwo.value   !== ""      ||
        okrugLine.value !== "0" && metroLine.value  !== ""      ){
            confirmMetro.style.display = 'initial';
        }
}
// check to finish
confirmMetro.onclick = () => {
    hideAfterConfirm.forEach(block => block.style.display = 'none');
    moscowCityText.style.backgroundColor = '#ffe0a6';
    otherCityText.style.backgroundColor = 'transparent';
    otherCity.disabled = true;
    cityBlock.style.backgroundColor = '#ADE4FF';
    colorMoscowBlock.style.backgroundColor = '#ADE4FF';
    confirmMetro.style.display = 'none';
    okrugLine.disabled = true;
    metroLine.style.backgroundColor = 'white';
    metroLineText.textContent = 'Готово!';
    metroLineText.style.color = 'green';
    metroLine.disabled = true;
    keyWordMetro1.value = metroLine.value;
    metroTwo.style.backgroundColor = 'white';
    metroTwoText.textContent = 'Готово!';
    metroTwoText.style.color = 'green';
    metroTwo.disabled = true;
    metroThree.style.backgroundColor = 'white';
    metroThreeText.textContent = 'Готово!';
    metroThreeText.style.color = 'green';
    metroThree.disabled = true;
    metroAddQuestion.style.display = 'initial';
    localStorage.setItem('zone', okrugLine.value);
    localStorage.setItem('metro1', metroLine.value);
    localStorage.setItem('metro2', metroTwo.value);
    localStorage.setItem('metro3', metroThree.value);
}
// check to finish
function addMetroTOName() {
    if (nameLine.value.length === 0) {
        console.log('0');
        metroForNameTitle.textContent = 'Заполните название школы!';
        metroForNameTitle.style.color = 'red';
    } else if (metroLineLatin.value === '') {
        console.log('1');
        metroForNameTitle.textContent = 'Выберите станцию метро!';
        metroForNameTitle.style.color = 'red';
    } else {
        metroForNameTitle.textContent = 'Поставьте пробел в названии школы, выше!';
        metroForNameTitle.style.color = 'red';
        // metroForNameTitle.style.border = 'none';
        // metroForNameTitle.style.paddingLeft = '0px';
        // metroAddNameWordsCheckFinishAdding.style.backgroundColor = 'red';
        // добавить metro-for-name-title
        metroAddNameInputCheckFinishAdding.disabled = false;

        nameLine.value = `${nameLine.value}${metroLineLatin.value}`;
        nameLine.style.backgroundColor = 'red';
        nameLine.disabled = false;
        nameBdTitle.innerHTML = 'Поставьте пробел <br>';
        nameBdTitle.style.color = 'red';
        bdBlock.style.backgroundColor = 'transparent';
        nameLine.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    nameLine.style.borderColor = 'black';
                    let deleteSpace = 'Теперь удали пробел';
                    nameBdTitle.style.color = 'red';
                    nameBdTitle.innerHTML = deleteSpace;
                    this.addEventListener('keydown', (e) => {
                        if (e.code === 'Backspace') {
                            let deletedSpace = 'Готово!';
                            nameBdTitle.style.color = 'green';
                            bdBr.forEach(br => br.style.display = 'none');
                            bdBlock.style.backgroundColor = '#ADE4FF';
                            nameBdTitle.innerHTML = deletedSpace;
                            if (chooseMoscowCity.checked === true) {
                                createNewFile.forEach(line => {
                                    line.style.display = 'inline-block';
                                    if (document.querySelector('.title-new-file')) {
                                        line.style.display = 'block';
                                    }
                                })    
                            }
                        }
                    });
                    this.addEventListener('keyup', (e) => {
                        if (e.code === 'Backspace') {
                            nameLine.disabled = true;
                            nameLine.style.backgroundColor = 'white';
                            metroFilial.style.display = 'none';
                        }
                    });
                }
            });
    }
}

buttonAddMetroTOName.onclick = () => addMetroTOName();

// ------------------------------------------------------------------
// Подготовка карты и логотипа
// ------------------------------------------------------------------

let checkLogoIsReady = document.getElementById('logo-is-cut');
checkLogoIsReady.style.display = 'none';
let checkMapIsReady = document.getElementById('map-is-cut');
checkMapIsReady.style.display = 'none';
let logoAndMapBlock = document.getElementById('logo-and-map-is-done');
let checkLogoIsReadyWords = document.getElementById('logo-is-cut-words');
let checkLogoIsReadyInput = document.querySelector('.logo-is-cut-input');
let confirmLogo = document.querySelector('.conf-logo'); 
confirmLogo.style.display = 'none';
let confirmMap = document.querySelector('.conf-map'); 
confirmMap.style.display = 'none';
let checkMapIsReadyWords = document.getElementById('map-is-cut-words'); 
let checkLMapIsReadyInput = document.querySelector('.map-is-cut-input');
let useNameLogo = document.getElementById('use-name-for-logo-when-save');
checkLogoIsReadyWords.textContent = ''; 
let useNameMap = document.getElementById('use-name-for-map-when-save');
checkMapIsReadyWords.textContent = '';
let prepareLogoTitle = document.querySelector('.prepare-logo-title');
prepareLogoTitle.textContent = 'Используйте это название при сохранении логотипа';
let prepareMapTitle = document.querySelector('.prepare-map-title');
prepareMapTitle.textContent = 'Используйте это название при сохранении карты';
let betweenMapLogoOne = document.querySelectorAll('.between-map-and-logo-one');
betweenMapLogoOne.forEach(br => br.style.display = 'none');
let betweenMapLogoOneAfter = document.querySelectorAll('.between-map-and-logo-one-after');
let betweenMapLogoTwoAfter = document.querySelectorAll('.between-map-and-logo-two-after');
let betweenMapLogoTwo = document.querySelectorAll('.between-map-and-logo-two');
betweenMapLogoTwo.forEach(br => br.style.display = 'none');
let hideLogoWhenFilial = document.querySelector('.hide-logo-when-filial');

nameLine5.onclick = () => {
    nameLine5.style.backgroundColor = 'white';
    prepareLogoTitle.textContent = 'Сохраните файл в формате png с таким же названием';
    prepareLogoTitle.style.color = 'red';
    confirmLogo.style.display = 'initial';
    checkLogoIsReadyWords.style.color = 'red';
    checkLogoIsReadyWords.textContent = 'Подтвердить сохранение';
    betweenMapLogoOne.forEach(br => br.style.display = 'initial');
    
};

nameLine6.onclick = () => {
    nameLine6.style.backgroundColor = 'white';
    prepareMapTitle.textContent = 'Сохраните файл в формате png с таким же званием';
    prepareMapTitle.style.color = 'red';
    confirmMap.style.display = 'initial';
    checkMapIsReadyWords.style.color = 'red';
    checkMapIsReadyWords.textContent = 'Подтвердить сохранение';
    betweenMapLogoTwo.forEach(br => br.style.display = 'initial');
};

checkLogoIsReady.onclick = () => {
    if (checkLogoIsReady.checked === true) {
        nameLine5.disabled = true;
        checkLogoIsReadyWords.style.display = 'none';
        useNameLogo.style.color = 'green';
        useNameLogo.textContent = 'Отлично!'
        prepareLogoTitle.style.display = 'none';
        convertingFiles();
        betweenMapLogoOne.forEach(br => br.style.display = 'none');
        betweenMapLogoOneAfter.forEach(br => br.style.display = 'none');
    }  
}

checkMapIsReady.onclick = () => {
    if (checkMapIsReady.checked === true) {
        nameLine6.disabled = true;
        checkMapIsReadyWords.style.display = 'none';
        useNameMap.style.color = 'green';
        useNameMap.textContent = 'Отлично!'
        prepareMapTitle.style.display = 'none';
        convertingFiles();
        betweenMapLogoTwoAfter.forEach(br => br.style.display = 'none');
    }  
}

let convertingFilesOn = document.querySelectorAll('.converting-files-on');
convertingFilesOn.forEach(line => line.style.display = 'none');
let convertingFilesOnNext = document.querySelectorAll('.converting-files-on-next')
let convertingFilesBr = document.querySelectorAll('.converting-br');
let convertingFilesOnInput = document.querySelector('.converting-files-on-input');
let convertingFilesOnText = document.querySelector('.converting-files-on-text');
convertingFilesOnText.textContent = 'Подтвердить';
let confirmDownload = document.querySelector('.conf-download');
confirmDownload.style.display = 'none';

function convertingFiles() {
    if (checkMapIsReady.checked === true && checkLogoIsReady.checked === true) {
        convertingFilesOn.forEach(line => {
            line.style.display = 'initial';
            line.style.margin = '20px 0';
        });
    }    
};

let titleConverting = document.getElementById('title-for-converting');
titleConverting.textContent = 'Сонвертируйте карту и логотип в формат webp';
titleConverting.style.color = 'red';
let checkConverting = document.getElementById('convertion-is-done');
let checkConvertingWord = document.getElementById('check-if-converted');

checkConverting.onclick = () => {
    if (checkConverting.checked === true) {
        checkConverting.style.display = 'none';
        convertingFilesOn.forEach(line => line.style.display = 'none');
        convertingFilesOnNext.forEach(line => line.style.display = 'none');
        titleConverting.style.color = 'green';
        titleConverting.textContent = 'Отлично!'
        addingFiles();
    }  
}

let hideDownloadConvertedFiles = document.querySelectorAll('.download-converted-files');
let downloadConvertedFilesInput = document.querySelector('.download-converted-files-input');
hideDownloadConvertedFiles.forEach(line => line.style.display = 'none');

function addingFiles() {
    if (checkConverting.checked === true) {
        hideDownloadConvertedFiles.forEach(line => {
            line.style.display = 'inline-block';
            line.style.margin = '4px 0';
        });
    }    
};

let titleToDownloadFiles = document.getElementById('title-to-download-files');
titleToDownloadFiles.textContent = 'Загрузите карту и логотип на сервер';
titleToDownloadFiles.style.color = 'red';
let countLogoDownloads = document.querySelector('.open-logo-loader-frame');
countLogoDownloads = 0;
let countMapDownloads = document.querySelector('.open-map-loader-frame');
countMapDownloads = 0;
let checkFilesDownloaded = document.getElementById('file-is-downloaded');
checkFilesDownloaded.style.display = 'none';
let checkFilesDownloadedWords = document.querySelector('.file-is-downloaded-words');
checkFilesDownloadedWords.textContent = '';

function checkClicksToDownload() {
    if (countLogoDownloads > 0 && countMapDownloads > 0) {
        checkFilesDownloadedWords.textContent = 'Подтвердить загрузку';
        titleToDownloadFiles.textContent = 'Потвердите загрузку файлов';
        titleToDownloadFiles.style.color = 'red';
        checkFilesDownloaded.style.display = 'none';
        titleToDownloadFiles.style.color = 'green';
        confirmDownload.style.display = 'initial';
    }  
};
// check to finish
confirmDownload.onclick = () => {
    logoAndMapBlock.style.backgroundColor = '#ADE4FF';
    createYandexMap.style.display = 'none';
    hideDownloadConvertedFiles.forEach(line => line.style.display = 'none');
    confirmDownload.style.display = 'none';
}

let logoLoaderLink = document.querySelector('.open-logo-loader-frame');
 
logoLoaderLink.onclick = () => {
    window.open("https://admin.speak-like.pro/logo-uploader.html", "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
    countLogoDownloads++;
    logoLoaderLink.style.backgroundColor = 'green';
    logoLoaderLink.style.color = 'white';
    logoLoaderLink.style.border = '1px solid #000';
    checkClicksToDownload();
};
 
let mapLoaderLink = document.querySelector('.open-map-loader-frame');

mapLoaderLink.onclick = () => {
    window.open("https://admin.speak-like.pro/map-uploader.html", "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
    countMapDownloads++;
    mapLoaderLink.style.backgroundColor = 'green';
    mapLoaderLink.style.color = 'white';
    mapLoaderLink.style.border = '1px solid #000';
    checkClicksToDownload();
};
 
let createYandexMap = document.querySelector('.create-yandex-map-frame');
 
createYandexMap.onclick = () => {
    window.open("https://yandex.ru/map-constructor", "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
};

let createWebp = document.querySelector('.create-webp');

createWebp.onclick = () => {
    window.open("https://image.online-convert.com/ru/convert-to-webp", "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
};

// -----------------------------------------------------------
// Областные центры и города
// -----------------------------------------------------------
 
let oblastLine = document.querySelector('.oblast-input');
oblastLine.style.backgroundColor = 'red'; 
let oblastLine01 = document.querySelector('.oblast01-input'); 
let oblastLine2 = document.querySelector('.oblast2-input'); 
let oblastLine3 = document.querySelector('.oblast3-input'); 
let oblastLine3and1 = document.querySelector('.oblast3and1-input'); 
let oblastLine4 = document.querySelector('.oblast4-input'); 
let oblastLine5 = document.querySelector('.oblast5-input'); 
let cityTitle = document.getElementById('city-title');
cityTitle.textContent = 'Город';
let cityRegionBlock = document.getElementById('city-region-is-done')
let confirmCity = document.querySelector('.conf-city');
confirmCity.style.display = 'none';
let cityWordsCheckFinish = document.querySelector('.city-words-check-finish');
cityWordsCheckFinish.textContent = 'Подтвердить';
let cityInputCheckFinish = document.querySelector('.city-input-check-finish');
let inCity = '';

oblastLine.oninput = () => {
    let ofCity = '';
    let tempArr = [];
    let cut = oblastLine.value.substring(0, 3);
    // добавляет город где кроме нескольких долбаных городов
    for (let i = 0; i < inCities.length; i++) {
        tempArr.push(inCities[i]);
        if (oblastLine.value === 'Сергиев Посад') inCity = 'Сергиевом Посаде';
        else if (oblastLine.value === 'Серебряные Пруды') inCity = 'Серебряных Прудах';
        else if (oblastLine.value === 'Серпухов') inCity = 'Серпухове';
        else if (oblastLine.value === 'Орел') inCity = 'Орле';
        else if (tempArr[i].includes(cut)) {
            inCity = tempArr[i];
        }
    }
    // добавляет город чего кроме нескольких долбаных городов
    for (let i = 0; i < ofCities.length; i++) {
        tempArr.push(ofCities[i]);
        if (oblastLine.value === 'Сергиев Посад') ofCity = 'Сергиева Посада';
        else if (oblastLine.value === 'Серебряные Пруды') ofCity = 'Серебряных Прудов';
        else if (oblastLine.value === 'Серпухов') ofCity = 'Серпухова';
        else if (oblastLine.value === 'Орел') ofCity = 'Орле';
        else if (tempArr[i].includes(cut)) {
            ofCity = tempArr[i];
        }
    }
   
    document.getElementById('oblastString').innerHTML = oblastLine.value;
    document.getElementById('oblastString').style.backgroundColor = '#D6ACFA'; 
    oblastLine01.value = inCity;
    oblastLine2.value = inCity;
    document.getElementById('oblastString2').innerHTML = oblastLine2.value;
    document.getElementById('oblastString2').style.backgroundColor = '#D6ACFA'; 
    oblastLine3.value = inCity;
    oblastLine4.value = inCity;
    cityTitle.textContent = "Город выбран!"
    cityTitle.style.color = 'green';
    if (cityTitle.innerText === "Город выбран!") {
        titleLine.disabled = false;
        titleLine.style.backgroundColor = 'red';
    } 
    keyWordCity.value = oblastLine.value;    
    keyWordCityText.textContent = oblastLine.value; 
    keyWordInCity.value = `в ${inCity}`;    
    keyWordInCityText.innerHTML = `в ${inCity}`; 
    if (oblastLine.value !== "") confirmCity.style.display = 'initial';
}
// check to finish
cityWordsCheckFinish.onclick = () => {
    cityRegionBlock.style.backgroundColor = '#ADE4FF';
    localStorage.setItem('oblast', oblastLine.value);
    confirmCity.style.display = 'none';
    oblastLine.disabled = true;
}
 
let inCities = [
    'Орле',
    'Москве',           
    'Балашихе',             
    'Видном',           
    'Волоколамске',                
    'Воскресенске',                
    'Дмитрове',            
    'Домодедово',               
    'Егорьевске',              
    'Зарайске',            
    'Истре',          
    'Кашире',           
    'Клину',         
    'Коломне',            
    'Красногорске',               
    'Лосино-Петровском',      
    'Луховицах',             
    'Люберцах',            
    'Лотошино',             
    'Можайске',            
    'Мытищах',           
    'Наро-Фоминске',                 
    'Ногинске',            
    'Одинцово',             
    'Орехово-Зуево',                  
    'Павловском Посаде',                     
    'Подольске',             
    'Пушкино',            
    'Раменском',              
    'Рузе',      
    'Сергиевом Посаде',                  
    'Серебряных Прудах',                     
    'Серпухове',             
    'Солнечногорске',                  
    'Ступино',            
    'Талдоме',           
    'Чехове',          
    'Шатуре',          
    'Щёлково',            
    'Шаховском' 
];    
   
let ofCities = [
    'Орла',
    'Москвы',           
    'Балашихи',             
    'Видное',           
    'Волоколамска',                
    'Воскресенска',                
    'Дмитрова',            
    'Домодедово',               
    'Егорьевска',              
    'Зарайска',            
    'Истры',          
    'Каширы',           
    'Клина',         
    'Коломны',            
    'Красногорска',               
    'Лосино-Петровска',      
    'Луховиц',             
    'Люберец',            
    'Лотошино',             
    'Можайска',            
    'Мытищ',           
    'Наро-Фоминска',                 
    'Ногинска',            
    'Одинцово',             
    'Орехово-Зуево',                  
    'Павловского Посада',                     
    'Подольска',             
    'Пушкино',            
    'Раменского',              
    'Рузы',      
    'Сергиева Посада',                  
    'Серебряных Прудов',                     
    'Серпухова',             
    'Солнечногорска',                  
    'Ступино',            
    'Талдома',           
    'Чехова',          
    'Шатуры',          
    'Щёлково',            
    'Шаховского' 
];              
 
oblastLine.onclick = () => oblastLine.style.backgroundColor = 'white';
    
// -----------------------------------------------------------
// Получение ссылок на карты google и yandex
// -----------------------------------------------------------
 
let googleMapLine = document.querySelector('.google-map-input');
googleMapLine.style.backgroundColor = 'red';
let yandexMapLine = document.querySelector('.yandex-map-input');
yandexMapLine.style.backgroundColor = 'red';
let googleLinkName = document.getElementById('google-link-name');
let yandexLinkName = document.getElementById('yandex-link-name');
let googleLink = document.querySelector('.open-google-frame');
let yandexMapBlock = document.getElementById('yandex-map-is-done');
yandexMapBlock.style.display = 'none';
let googleMapBlock = document.getElementById('google-map-is-done');
googleMapBlock.style.display = 'none';
let yandexLink = document.querySelector('.open-yandex-frame');
let googleWantBeBright = document.querySelector('.goolgle-map-want-be-bright');
let yandexWantBeBright = document.querySelector('.yandex-map-want-be-bright');

googleLink.onclick = () => {
    window.open(`https://google.com/maps/place/${oblastLine.value} ${address1Line.value}`, "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
};
 
yandexLink.onclick = () => {
    window.open(`https://yandex.ru/search/?text=${oblastLine.value} ${address1Line.value}`, "", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=100,top=100`);
};
// check to finish 
googleMapLine.oninput = () => {
    if (googleMapLine.value.includes('https://goo.gl/maps')) {
        document.getElementById('googleMapString').innerHTML =  googleMapLine.value;
        document.getElementById('googleMapString').style.backgroundColor = '#ACFAC7';
        googleMapLine.style.backgroundColor = 'white';
        googleLinkName.innerHTML = '<br>Готово!';
        googleLinkName.style.color = 'green';
        googleWantBeBright.style.backgroundColor = '#ADE4FF';
        localStorage.setItem('googleMapLink', googleMapLine.value);
    }
    else {
        googleLinkName.innerHTML = '<br>это не похоже на ссылку на google карты<br>';
        googleLinkName.style.color = 'red';
    }
}
// check to finish 
yandexMapLine.oninput = () => {
    if (yandexMapLine.value.includes('https://yandex.ru/maps')) {
        document.getElementById('yandexMapString').innerHTML =  yandexMapLine.value;
        document.getElementById('yandexMapString').style.backgroundColor = '#ACFAC7';
        yandexMapLine.style.backgroundColor = 'white';
        yandexLinkName.innerHTML = '<br>Готово!';
        yandexLinkName.style.color = 'green';
        yandexWantBeBright.style.backgroundColor = '#ADE4FF';
        localStorage.setItem('yandexMapLink', yandexMapLine.value);
    }
    else {
        yandexLinkName.innerHTML = '<br>это не похоже на ссылку на яндекс карты<br>';
        yandexLinkName.style.color = 'red';
    }
}

// ------------------------------------------------------------------
// Адрес
// ------------------------------------------------------------------

let address1Line = document.querySelector('.address1-input');
let address2Line = document.querySelector('.address2-input');
let address3Line = document.querySelector('.address3-input');
let address4Line = document.querySelector('.address4-input');
let addressForRegion = document.querySelectorAll('.region-address');
addressForRegion.forEach(line => line.style.display = 'none');
let addressLinesAll = document.querySelectorAll('.address');
addressLinesAll.forEach(line => line.style.backgroundColor = 'red');
let address1Line2 = document.querySelector('.address12-input');
let addressBlock = document.getElementById('address-is-done');
let addresTitle = document.getElementById('addres-title');
addresTitle.textContent = 'Адрес';
let confirmAddress = document.querySelector('.conf-address');
let addressCheckIfFinish = document.querySelector('.address-input-check-finish');
let addressWordsIfFinish = document.querySelector('.address-words-check-finish');
addressWordsIfFinish.textContent = 'Нет адреса';
address2Line.disabled = true;
address2Line.style.backgroundColor = 'grey';
address3Line.disabled = true;
address3Line.style.backgroundColor = 'grey';
address4Line.disabled = true;
address4Line.style.backgroundColor = 'grey';

addressLinesAll.forEach(line => {
    line.oninput = () => {
        addresTitle.style.color = 'red';
        addresTitle.textContent = 'Адрес должен быть введен без города, этажей и названий ТЦ, если подобное имеется';   
    }
})

address1Line.oninput = () => {
    document.getElementById('address1String').innerHTML = address1Line.value;
    address1Line2.value = address1Line.value;
    document.getElementById('address1String').style.backgroundColor = '#FF9090';
    document.getElementById('address12String').innerHTML = address1Line2.value;
    document.getElementById('address12String').style.backgroundColor = '#FF9090';
    if (address1Line.value.length > 8) {
        address1Line.style.backgroundColor = 'white';
        addresTitle.style.color = 'green';
        addresTitle.textContent = 'Адрес введен';
        addressWordsIfFinish.textContent = 'Подтвердить адрес'; 
        keyWordAddress.value = address1Line.value;
        keyWordAddressText.textContent = address1Line.value; 
        address2Line.disabled = false;
        address2Line.style.backgroundColor = 'white';
    }
    if (address1Line.value.length > 0 && address1Line.value.length < 8) {
        addresTitle.style.color = 'red';
        addresTitle.textContent = 'Подозрительно короткий, нужно больше 8 символов';

    }
}

address2Line.oninput = () => {
    document.getElementById('address2String').innerHTML = address2Line.value;
    document.getElementById('address2String').style.backgroundColor = '#FF9090';
    if (address2Line.value.length > 8) {
        address2Line.style.backgroundColor = 'white';
        addresTitle.style.color = 'green';
        addresTitle.textContent = 'Адрес введен';
        addressWordsIfFinish.textContent = 'Подтвердить 2 адреса';
        address3Line.disabled = false;
        address3Line.style.backgroundColor = 'white';
    }
    if (address2Line.value.length > 0 && address2Line.value.length < 8) {
        addresTitle.style.color = 'red';
        addresTitle.textContent = 'Подозрительно короткий, нужно больше 8 символов';
    }
}

address3Line.oninput = () => {
    document.getElementById('address3String').innerHTML = address3Line.value;
    document.getElementById('address3String').style.backgroundColor = '#FF9090';
    if (address3Line.value.length > 8) {
        address3Line.style.backgroundColor = 'white';
        addresTitle.style.color = 'green';
        addresTitle.textContent = 'Адрес введен';
        addressWordsIfFinish.textContent = 'Подтвердить 3 адреса';
        address4Line.disabled = false;
        address4Line.style.backgroundColor = 'white';
    }
    if (address3Line.value.length > 0 && address3Line.value.length < 8) {
        addresTitle.style.color = 'red';
        addresTitle.textContent = 'Подозрительно короткий, нужно больше 8 символов';
    }
}

address4Line.oninput = () => {
    document.getElementById('address4String').innerHTML = address4Line.value;
    document.getElementById('address4String').style.backgroundColor = '#FF9090';
    if (address4Line.value.length > 8) {
        address4Line.style.backgroundColor = 'white';
        addresTitle.style.color = 'green';
        addresTitle.textContent = 'Адрес введен';
        addressWordsIfFinish.textContent = 'Подтвердить 4 адреса';
    }
    if (address4Line.value.length > 0 && address4Line.value.length < 8) {
        addresTitle.style.color = 'red';
        addresTitle.textContent = 'Подозрительно короткий, нужно больше 8 символов';
    }
}
// check to finish
addressCheckIfFinish.onclick = () => {
    if (addressCheckIfFinish.checked === true && address1Line.value.length === 0) {
        addressBlock.style.backgroundColor = '#ADE4FF';
        confirmAddress.style.display = 'none';
        address1Line.style.backgroundColor = 'white';
        address2Line.style.backgroundColor = 'white';
        address3Line.style.backgroundColor = 'white';
        address4Line.style.backgroundColor = 'white';
        address1Line.disabled = true;
        address2Line.disabled = true;
        address3Line.disabled = true;
        address4Line.disabled = true;
        addresTitle.textContent = 'Адреса нет';
        addresTitle.style.color = 'green';
        document.getElementById('address12String').innerHTML = 'нет адреса';
        document.getElementById('address12String').style.backgroundColor = 'red';
        localStorage.setItem('address1', address1Line.value);
        localStorage.setItem('address2', address2Line.value);
        localStorage.setItem('address3', address3Line.value);
        localStorage.setItem('address4', address4Line.value);
    }
    if (addressCheckIfFinish.checked === true && address1Line.value.length > 5) {
        addressBlock.style.backgroundColor = '#ADE4FF';
        confirmAddress.style.display = 'none';
        address1Line.style.backgroundColor = 'white';
        address2Line.style.backgroundColor = 'white';
        address3Line.style.backgroundColor = 'white';
        address4Line.style.backgroundColor = 'white';
        address1Line.disabled = true;
        address2Line.disabled = true;
        address3Line.disabled = true;
        address4Line.disabled = true;
        addresTitle.textContent = 'Адрес добавлен';
        addresTitle.style.color = 'green';
        yandexMapBlock.style.display = 'initial';
        googleMapBlock.style.display = 'initial';
        localStorage.setItem('address1', address1Line.value);
        localStorage.setItem('address2', address2Line.value);
        localStorage.setItem('address3', address3Line.value);
        localStorage.setItem('address4', address4Line.value);
    }
}

// ------------------------------------------------------------------
// Ввод телефона
// ------------------------------------------------------------------

let telBlock = document.getElementById('telephone-is-done');
let tel2 = document.querySelector('.telephone-2');
tel2.style.display = 'none';
let telTitle1 = document.querySelector('.telephone-title1');
telTitle1.textContent = 'Телефон 1';
let tel1Line = document.querySelector('.tel1-input');
tel1Line.style.backgroundColor = 'red';
let telInfoSet1 = document.querySelector('.telephone-info-set-1');
let checkIfNoNumber = document.querySelector('.telephone-info-no-number-check');
let textIfNoNumber = document.querySelector('.telephone-info-no-number-info');
textIfNoNumber.textContent = 'Нет номера';
let telTitle2 = document.querySelector('.telephone-title2');
telTitle2.textContent = 'Телефон 2';
let tel2Line = document.querySelector('.tel2-input');
tel2Line.style.backgroundColor = 'red';
let telInfoSet2 = document.querySelector('.telephone-info-set-2');
let checkIfNoNumber2 = document.querySelector('.telephone-info-no-number-check-2');
let textIfNoNumber2 = document.querySelector('.telephone-info-no-number-info-2');
let brIfNoTel = document.querySelectorAll('.br-if-no-tel');
let tel12Input = document.querySelector('.tel12-input');
let appearSometimes = document.querySelector('.appear-sometimes');
appearSometimes.style.display = 'none';
let whenFilialAdded = document.querySelector('.when-filial-added');
whenFilialAdded.style.display = 'none';
// check to finish
checkIfNoNumber.onclick = () => {
    if (checkIfNoNumber.checked === true) {
        telTitle1.textContent = 'На сайте нет номера';
        telTitle1.style.color = 'green';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        tel1Line.style.backgroundColor = 'white';
        tel1Line.disabled = true;
        telBlock.style.backgroundColor = '#ADE4FF';
        brIfNoTel.forEach(br => br.style.display = 'none');
        document.getElementById('tel1String2').innerHTML = 'нет номера телефона';
        document.getElementById('tel1String2').style.backgroundColor = 'red';
        localStorage.setItem('tel1', tel1Line.value);
        localStorage.setItem('tel2', '');
        localStorage.setItem('tel3', '');
        localStorage.setItem('tel4', '');
    }
}

tel1Line.oninput = () => {

    let space = / /gi;
    let newInput = tel1Line.value.replace(space, '')
    tel1Line.value = newInput;

    document.getElementById('tel1String').innerHTML = tel1Line.value;
    document.getElementById('tel1String').style.backgroundColor = '#D2B4DE';
    tel12Input.value = tel1Line.value;
    document.getElementById('tel1String2').innerHTML = tel12Input.value;
    document.getElementById('tel1String2').style.backgroundColor = '#D2B4DE';
    let cleanNumber = tel1Line.value.replace(/[^0-9 ]/g, '');
    let plusSevenNumber;
     
    if (tel1Line.value.length < '6') {
        telInfoSet1.innerHTML = '<br>Недономер';
        telInfoSet1.style.color = 'red';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        brIfNoTel.forEach(br => br.style.display = 'none');        
    }
    if (tel1Line.value.length >= '6' && tel1Line.value.length < '10') {
        telInfoSet1.innerHTML = 'Это городской номер?';
        telInfoSet1.style.color = 'red';
        appearSometimes.style.display = 'initial';
        checkIfNoNumber.style.display = 'initial';
        textIfNoNumber.style.display = 'initial';  
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        localStorage.setItem('tel1', tel1Line.value);
        localStorage.setItem('tel3', '');
        localStorage.setItem('tel4', '');
        checkIfCityNumber();
    }
    if (tel1Line.value.length >= '10') {
        telInfoSet1.innerHTML = 'Это городской номер?';
        telInfoSet1.style.color = 'red';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        if (cleanNumber.charAt(0) === '8' && 
            cleanNumber.length > 10) {
                let makeArr = cleanNumber.split('');
                makeArr.shift();
                makeArr.unshift('+7');
                makeArr.splice(1, 0, '-(')
                makeArr.splice(5, 0, ')-')
                makeArr.splice(9, 0, '-')
                makeArr.splice(12, 0, '-')
                plusSevenNumber = makeArr.join('');
                telInfoSet1.innerHTML = `Номер <b>${plusSevenNumber}</b> верен?`; 
                document.getElementById('tel1String').innerHTML = plusSevenNumber;
                document.getElementById('tel1String').style.backgroundColor = '#D2B4DE';
                tel12Input.value = plusSevenNumber;
                document.getElementById('tel1String2').innerHTML = tel12Input.value;
                document.getElementById('tel1String2').style.backgroundColor = '#D2B4DE';
                localStorage.setItem('tel1', plusSevenNumber);
                localStorage.setItem('tel3', '');
                localStorage.setItem('tel4', '');
        }
        if (cleanNumber.charAt(0) === '7' && 
            cleanNumber.length > 10) {  
                let makeArr = cleanNumber.split('');
                makeArr.unshift('+');
                makeArr.splice(2, 0, '-(')
                makeArr.splice(6, 0, ')-')
                makeArr.splice(10, 0, '-')
                makeArr.splice(13, 0, '-')
                plusSevenNumber = makeArr.join('');
                telInfoSet1.innerHTML = `Номер <b>${plusSevenNumber}</b> верен?`;
                document.getElementById('tel1String').innerHTML = plusSevenNumber;
                document.getElementById('tel1String').style.backgroundColor = '#D2B4DE';
                localStorage.setItem('tel1', plusSevenNumber);
                localStorage.setItem('tel3', '');
                localStorage.setItem('tel4', '');
                tel12Input.value = plusSevenNumber;
                document.getElementById('tel1String2').innerHTML = tel12Input.value;
                document.getElementById('tel1String2').style.backgroundColor = '#D2B4DE';
        }
        checkIfCityNumber();
    } 

    function checkIfCityNumber() {
        let checkIfCityNum = document.createElement('input');
        checkIfCityNum.type = 'checkbox';
        telInfoSet1.prepend(checkIfCityNum);    
        checkIfCityNum.onclick = () => {
            if (checkIfCityNum.checked === true) {
                hideForBeauty1.style.display = 'none';
                let checkIfOneMoreSpace = document.createElement('br');
                telInfoSet1.append(checkIfOneMoreSpace);
                telInfoSet1.prepend(checkIfOneMoreSpace);
                telInfoSet1.innerHTML = 'Есть еще один номер?';
                let checkIfOneMoreNum = document.createElement('input');
                checkIfOneMoreNum.type = 'checkbox';
                telInfoSet1.prepend(checkIfOneMoreNum);
                let textIfNoMoreNum = document.createElement('span');
                textIfNoMoreNum.innerHTML = 'Номеров больше нет<br>';
                telInfoSet1.prepend(textIfNoMoreNum);
                let checkIfNoMoreNum = document.createElement('input');
                checkIfNoMoreNum.type = 'checkbox';
                telInfoSet1.prepend(checkIfNoMoreNum);
                checkIfNoMoreNum.onclick = () => {
                    tel1Line.style.backgroundColor = 'white';
                    tel1Line.disabled = true;
                    telBlock.style.backgroundColor = '#ADE4FF';
                    appearSometimes.style.display = 'none';
                    disappearWhenSecond.forEach(br => br.style.display = 'none');
                    textIfNoMoreNum.style.display = 'none';
                    checkIfNoMoreNum.style.display = 'none';
                    checkIfOneMoreNum.style.display = 'none';
                    telInfoSet1.style.display = 'none';
                }
                checkIfOneMoreNum.onclick = () => {
                    tel1Line.style.backgroundColor = 'white';
                    tel1Line.disabled = true;
                    textIfNoMoreNum.style.display = 'none';
                    checkIfNoMoreNum.style.display = 'none';
                    checkIfOneMoreNum.style.display = 'none';
                    telInfoSet1.style.display = 'none';
                    addOneMoreNum();
                }
                checkIfCityNum.style.display = 'none';
                tel1Line.style.backgroundColor = 'white';
                tel1Line.disabled = true;
                brIfNoTel.forEach(br => br.style.display = 'none'); 
                telTitle1.textContent = 'Готово!'; 
                telTitle1.style.color = 'green';
            }    
        }    
    }   

    function addOneMoreNum() {
        tel2.style.display = 'initial';
        appearSometimes.style.display = 'none';
        disappearWhenSecond.forEach(br => br.style.display = 'none');
    }
}

let disappearWhenSecond = document.querySelectorAll('.disappear-when-second');
let wantToDisappear = document.querySelectorAll('.want-to-disappear');
let hideForBeauty1 = document.querySelector('.hide-for-beauty-1');
let hideForBeauty2 = document.querySelector('.hide-for-beauty-2');
// check to finish
tel2Line.oninput = () => {
    let space = / /gi;
    let newInput = tel2Line.value.replace(space, '')
    tel2Line.value = newInput;

    document.getElementById('tel2String').innerHTML = tel2Line.value;
    document.getElementById('tel2String').style.backgroundColor = '#D2B4DE';
    let cleanNumber = tel2Line.value.replace(/[^0-9 ]/g, '');
    let plusSevenNumber; 
    if (tel2Line.value.length < '6') {
        telInfoSet2.innerHTML = 'Недономер';
        telInfoSet2.style.color = 'red';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        brIfNoTel.forEach(br => br.style.display = 'none');        
    }
    if (tel2Line.value.length >= '6' && tel2Line.value.length < '10') {
        telInfoSet2.innerHTML = 'Это городской номер?';
        telInfoSet2.style.color = 'red';
        checkIfNoNumber.style.display = 'initial';
        textIfNoNumber.style.display = 'initial';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        localStorage.setItem('tel2', tel2Line.value);
        localStorage.setItem('tel3', '');
        localStorage.setItem('tel4', '');
        checkIfCityNumber();
    }
    if (tel2Line.value.length >= '10') { 
        telInfoSet2.textContent = 'Это городской номер?';
        telInfoSet2.style.color = 'red'; 
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        if (cleanNumber.charAt(0) === '8' && 
            cleanNumber.length > 10) {
                let makeArr = cleanNumber.split('');
                makeArr.shift();
                makeArr.unshift('+7');
                makeArr.splice(1, 0, '-(')
                makeArr.splice(5, 0, ')-')
                makeArr.splice(9, 0, '-')
                makeArr.splice(12, 0, '-')
                plusSevenNumber = makeArr.join('');
                telInfoSet2.innerHTML = `Нормальный номер <b>${plusSevenNumber}</b>?`;
                document.getElementById('tel2String').innerHTML = plusSevenNumber;
                document.getElementById('tel2String').style.backgroundColor = '#D2B4DE';
                localStorage.setItem('tel2', plusSevenNumber);
                localStorage.setItem('tel3', '');
                localStorage.setItem('tel4', '');
        }
        if (cleanNumber.charAt(0) === '7' && 
            cleanNumber.length > 10) {  
                let makeArr = cleanNumber.split('');
                makeArr.unshift('+');
                makeArr.splice(2, 0, '-(')
                makeArr.splice(6, 0, ')-')
                makeArr.splice(10, 0, '-')
                makeArr.splice(13, 0, '-')
                plusSevenNumber = makeArr.join('');
                telInfoSet2.innerHTML = `Нормальный номер <b>${plusSevenNumber}</b>?`;
                document.getElementById('tel2String').innerHTML = plusSevenNumber;
                document.getElementById('tel2String').style.backgroundColor = '#D2B4DE';
                localStorage.setItem('tel2', plusSevenNumber);
                localStorage.setItem('tel3', '');
                localStorage.setItem('tel4', '');
        }
        checkIfCityNumber();
    }
    function checkIfCityNumber() {
        let checkIfCityNum = document.createElement('input');
        checkIfCityNum.type = 'checkbox';
        telInfoSet2.prepend(checkIfCityNum);    
        checkIfCityNum.onclick = () => {
            if (checkIfCityNum.checked === true) {
                hideForBeauty2.style.display = 'none';
                telBlock.style.backgroundColor = '#ADE4FF';
                tel2Line.style.backgroundColor = 'white';
                tel2Line.disabled = true;
                telInfoSet2.style.display = 'none';
                checkIfNoNumber.style.display = 'none'; 
                brIfNoTel.forEach(br => br.style.display = 'none');  
                telTitle2.textContent = 'Готово!'; 
                telTitle2.style.color = 'green'; 
                wantToDisappear.forEach(br => br.style.display = 'none');
            }    
        }    
    }    
}

// ------------------------------------------------------------------
// Максимум человек в группе
// ------------------------------------------------------------------

let maxGroupLine = document.querySelector('.maxGroup-input');
maxGroupLine.style.backgroundColor = 'red';
let maxClientsBlock = document.getElementById('max-clients-is-done');
let maxStudentsTitle = document.querySelector('.max-clients-title');
maxStudentsTitle.textContent = 'Максимум в группе';
let confirmMaxStudents = document.querySelector('.conf-max-stud');
confirmMaxStudents.style.display = 'none';
let maxStudentsLinkWordsCheckFinish = document.querySelector('.max-stud-link-words-check-finish');
maxStudentsLinkWordsCheckFinish.textContent = 'Подтвердить';
let maxStudentsLinkInputCheckFinish = document.querySelector('.max-stud-link-input-check-finish');
let maxStudentsBr = document.querySelector('.max-stud-br');

maxGroupLine.onchange = () => {
    document.getElementById('maxGroupString').innerHTML = maxGroupLine.value;
    document.getElementById('maxGroupString').style.backgroundColor = '#FF61E2';
    
    // 
    document.querySelector('.max-clients-title').textContent = 'Выбрано';
    document.querySelector('.max-clients-title').style.color = 'green';
    // 
    confirmMaxStudents.style.display = 'initial';
}
// check to finish
maxStudentsLinkInputCheckFinish.onclick = () => { 
    maxClientsBlock.style.backgroundColor = '#ADE4FF'; 
    confirmMaxStudents.style.display = 'none'; 
    maxStudentsBr.style.display = 'none'; 
    maxGroupLine.disabled = true; 
    maxStudentsLinkWordsCheckFinish.textContent = 'Готово!';
    localStorage.setItem('maxGroup', maxGroupLine.value);
}

maxGroupLine.onclick = () => maxGroupLine.style.backgroundColor = 'white';

// ------------------------------------------------------------------
// Заголовок страницы
// ------------------------------------------------------------------

let titleLine = document.querySelector('.title-input');
titleLine.disabled = true;
titleLine.style.backgroundColor = 'grey';
let confirmTitle = document.querySelector('.conf-title');
confirmTitle.style.display = 'none';
let titleLineResult = document.querySelector('.title-input-result');
titleLineResult.style.display = 'none';
titleLineResult.style.backgroundColor = 'grey';
titleLineResult.disabled = true;
let brTitleInitial = document.querySelectorAll('.br-title-initial');
brTitleInitial.forEach(br => br.style.display = 'none');
let titleLineResultText = document.querySelector('.title-input-result-text');
let titleInputText = document.querySelector('.title-input-text');
let titleInputTextNumber = document.querySelector('.title-input-text-number');
let titleInputResultSymbolsTotal = document.querySelector('.title-input-result-symblos-total');
let titleTextThatReady = document.querySelector('.title-input-text-that-ready');
let checkboxThatReady = document.querySelector('.title-input-ready');
let titleBlock = document.getElementById('title-is-done');
let brAfterClickOnTextarea = document.querySelectorAll('.br-after-click-on-textarea');
let brAfterClickOnConfirm = document.querySelectorAll('.br-after-click-on-confirm');

titleLine.onclick = () => brTitleInitial.forEach(br => br.style.display = 'initial');

titleLine.oninput = () => {
    titleLineResult.style.display = 'initial';
    if (titleLine.value.length > 0 && titleLine.value.length < 15) {
        titleInputText.textContent = `Слишком маленький текст (${titleLine.value.length} символов)`;
        titleInputText.style.color = 'red';
        titleLineResult.style.backgroundColor = 'grey';
        titleLineResult.disabled = true;
        titleLineResult.style.color = 'transparent';

    }
    if (titleLine.value.length >= 15) {
        titleInputText.textContent = `Добавлен текст на (${titleLine.value.length} символов). Отредактируйте тектс в поле ниже.`;
        titleInputText.style.color = 'green';
        titleLineResult.disabled = false;
        titleLineResult.style.backgroundColor = 'white';
        titleLineResult.style.color = 'black';
    }
    if (titleLine.value.length > 70) {
        titleInputText.textContent = `Слишком длинный текст (${titleLine.value.length} символов)`;
        titleInputText.style.color = 'red';
        titleLineResult.style.backgroundColor = 'grey';
        titleLineResult.disabled = true;
        titleLineResult.style.color = 'transparent';
    }
    titleInputResultSymbolsTotal.innerHTML = `<br>Всего символов ${titleLineResult.value.length}. Минимиум должно быть 50, максимум 70!`; 
    titleTextThatReady.textContent = 'Ошибка';
    titleTextThatReady.style.color = 'red';
    titleLineResult.oninput = () => { 
        titleInputResultSymbolsTotal.innerHTML = `<br>Всего символов внутри поля ${titleLineResult.value.length}. Минимум - 50! Максимум - 70!`;    
        document.getElementById('titleString').innerHTML = titleLineResult.value; 

        if (titleLineResult.value.length >= 50 && titleLineResult.value.length <= 70) { 
            checkboxThatReady.disabled = false;
            titleTextThatReady.style.color = 'green';
            titleTextThatReady.textContent = 'Подтвердить'; 
            confirmTitle.style.display = 'initial'; 
            checkboxThatReady.onclick = () => {
                titleBlock.style.backgroundColor = '#ADE4FF';
                titleLine.disabled = true;
                titleLineResult.disabled = true;
                titleInputResultSymbolsTotal.innerHTML = '';
                titleTextThatReady.innerHTML = '';
                checkboxThatReady.style.display = 'none';
                titleInputText.textContent = 'Информация добавлена';
            }
        } else {
            checkboxThatReady.disabled = true;
            titleTextThatReady.style.color = 'red'
            titleTextThatReady.textContent = 'Ошибка';
        }
    }
    titleLineResult.onclick = () => {
        titleLine.disabled = true;
        titleInputResultSymbolsTotal.innerHTML = `<br>Всего символов внутри поля ${titleLineResult.value.length}. Минимум - 50! Максимум - 70!`;
        titleLine.style.display = 'none';
        titleInputText.style.display = 'none';
        brAfterClickOnTextarea.forEach(br => br.style.display = 'none');
    } 

    titleLineResult.value = `${titleLine.value} | ${okrugLine.value} ${metroLine.value} ${metroTwo.value} ${metroThree.value} | в ${oblastLine01.value}`;
 
    document.getElementById('titleString').innerHTML = titleLineResult.value;
    document.getElementById('titleString').style.backgroundColor = '#D1FF61'
    document.getElementById('titleString2').innerHTML = titleLine.value;
    document.getElementById('titleString2').style.backgroundColor = '#D1FF61' 
     
    titleLine.style.backgroundColor = 'white'; 
    
    titleLine3.value = `${titleLine.value} в ${oblastLine01.value} ${metroLine3.value}`; 

    titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов`;

    if (titleLine3.value.length >= 71) {
        titleLine3Counter.style.color = 'red';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов. Уменьшите количество символов до 70!`;
        titleLine3CheckReady.disabled = true;
        titleLine3TextReady.textContent = 'Уменьшите количество символов!'
        titleLine3TextReady.style.color = 'red';
    } else {
        titleLine3Counter.style.color = 'black';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов.`;
        titleLine3CheckReady.disabled = false;
        titleLine3TextReady.textContent = 'H1 готов'
        titleLine3TextReady.style.color = 'black';
    }
}

confirmTitle.onclick = () => {
    confirmTitle.style.display = 'none';
    brAfterClickOnConfirm.forEach(br => br.style.display = 'none');
    localStorage.setItem('title', titleLineResult.value);
}

// ------------------------------------------------------------------
// Начало описания Meta Description
// ------------------------------------------------------------------

let metaBlock = document.getElementById('meta-description-is-done');
let metaDescrTitleText = document.querySelector('.meta-description-title-text');
let checkSymbolsNumber = document.querySelector('.check-symbols-number');
let metaDescrTitlePrelimRes = document.querySelector('.meta-description-title-prelim-result');
let metaDescrCheckReady = document.querySelector('.meta-description-checkbox-ready');
let metaDescrTextReady = document.querySelector('.meta-description-text-ready');
let metaDescrCheckEdit = document.querySelector('.meta-description-checkbox-edit');
let metaDescrTextEdit = document.querySelector('.meta-description-text-edit');
let metaDescrInputEdit = document.querySelector('.meta-description-input-edit');
let metaDescrCheckReadyAfterEdit = document.querySelector('.meta-description-checkbox-ready-after-edit');
let metaDescrTextReadyAfterEdit = document.querySelector('.meta-description-text-ready-after-edit');
let metaDescrCheckSymbolsNumberCheckbox = document.querySelector('.meta-description-checkbox-check-symbols-number');
let metaDescrCheckSymbolsNumberText = document.querySelector('.meta-description-text-check-symbols-number');
metaDescrCheckSymbolsNumberText.textContent = 'Проверьте количество символов. Их должно быть меньше 156.';
let metaDeascrBlockToEdit = document.querySelector('.meta-description-if-need-edit');
metaDeascrBlockToEdit.style.display = 'none';
let metaBr = document.querySelectorAll('.meta-br');
let confirmEditFinish = document.querySelector('.conf-edit-finish');
confirmEditFinish.style.display = 'none';
let metaDescrTextReadyAfterEditCountSymbols = document.querySelector('.meta-description-text-ready-after-edit-count-symbols');
let metaDescrCheckReadyAfterEditFinish = document.querySelector('.meta-description-checkbox-ready-after-edit-finish');
metaDescrCheckReadyAfterEditFinish.style.display = 'none';
let metaDescrTextReadyAfterEditFinish = document.querySelector('.meta-description-text-ready-after-edit-finish');
metaDescrTitlePrelimRes.style.border = '1px solid #c1c1c1';
metaDescrTitlePrelimRes.style.height = '150px';
metaDescrTitlePrelimRes.style.backgroundColor = 'white';

metaDescrTitlePrelimRes.innerHTML = `
★ <span id="titleString2"></span> в <span id="oblastString2"></span> ► ЦЕНА: ~ <span id="groupMonthString2"></span> /мес ► АДРЕС: <span id="okrugString2"></span> <span id="metroString2"></span> <span id="metroTwoString2"></span> <span id="metroThreeString2"></span> <span id="address12String"></span> ► ТЕЛЕФОН: <span id="tel1String2"></span>`;

metaDescrTitleText.textContent = 'Данные для Meta Description';    
   
metaDescrCheckSymbolsNumberCheckbox.onclick = () => {
    if (metaDescrCheckSymbolsNumberCheckbox.checked === true) {
         
        metaDescrCheckSymbolsNumberText.style.color = 'red';
         
        setTimeout(() => {
            metaDescrCheckSymbolsNumberCheckbox.checked = false;
            metaDescrCheckSymbolsNumberText.style.color = 'black';
        }, 2000);
         
        metaDescrCheckSymbolsNumberText.textContent = `Проверено. Символов ${metaDescrTitlePrelimRes.textContent.length}/156`;
         
        if (metaDescrTitlePrelimRes.textContent.length >= 156) {
            metaDescrTitleText.textContent = 'Meta Description нужно сократить до 155 символов. Нажмите редактировать Meta Description';
            metaDescrTitleText.style.color = 'red';
            metaDescrTextEdit.style.color = 'red';
            setTimeout(() => metaDescrTextEdit.style.color = 'black', 5000);
        } else {
            metaDescrCheckReady.disabled = false;
        }
    }
}

metaDescrTextReady.textContent = 'OK';
// check to finish
metaDescrCheckReady.onclick = () => {
    if (metaDescrCheckReady.checked === true) {
        metaDescrCheckEdit.style.display = 'none';
        metaDescrTextEdit.style.display = 'none';
        metaDescrCheckReady.style.display = 'none';
        metaDescrTextReady.style.display = 'none';
        metaDescrCheckSymbolsNumberCheckbox.style.display = 'none';
        metaDescrCheckSymbolsNumberText.style.display = 'none';
        metaBr.forEach(br => br.style.display = 'none');
        metaDescrTitleText.textContent = 'Готово!'; 
        metaDescrTitleText.style.color = 'green';
        metaBlock.style.backgroundColor = '#ADE4FF';
        document.getElementById('metaDescriptionString').innerHTML = metaDescrTitlePrelimRes.innerHTML;
        document.getElementById('metaDescriptionString').style.backgroundColor = '#61FF93';
        checkSymbolsNumber.style.display = 'none';
        metaDescrTitlePrelimRes.style.display = 'none';
    }
}

metaDescrTextEdit.textContent = 'Редактировать';

metaDescrCheckEdit.onclick = () => {
    if (metaDescrCheckEdit.checked === true) {
        metaDeascrBlockToEdit.style.display = 'initial';
        metaDescrInputEdit.value = metaDescrTitlePrelimRes.innerText;
        metaDescrTextReady.style.display = 'none';
        metaDescrCheckReady.style.display = 'none';
    } else {
        metaDeascrBlockToEdit.style.display = 'none';
        confirmEditFinish.style.display = 'initial';
    }
}
 
metaDescrTextReadyAfterEditCountSymbols.textContent = 'Отредактируйте Meta Description';  
 
metaDescrInputEdit.onfocus = () => {
    metaDescrTextReadyAfterEditCountSymbols.textContent = 'Возможно изменилось количество символов в редакторе, обновите запрос!';   
    metaDescrTextReadyAfterEditCountSymbols.style.color = 'red';
    metaDescrTextReadyAfterEdit.style.color = 'red';
    metaDescrTextReadyAfterEdit.textContent = 'Обновить';
    confirmEditFinish.style.display = 'none';
    metaDescrCheckReadyAfterEditFinish.style.display = 'none';
    metaDescrTextReadyAfterEditFinish.textContent = '';
    window.scrollTo(0, 0);
}
 
metaDescrTextReadyAfterEdit.textContent = 'Обновить';
 
metaDescrCheckReadyAfterEdit.onclick = () => {
    if (metaDescrCheckReadyAfterEdit.checked === true) {
        setTimeout(() => {
            metaDescrCheckReadyAfterEdit.checked = false;
            metaDescrTextReadyAfterEdit.style.color = 'black';
            metaDescrTextReadyAfterEditCountSymbols.style.color = 'black';
        }, 2000);
        metaDescrTextReadyAfterEdit.style.color = 'red';
        metaDescrTextReadyAfterEdit.textContent = 'Обновлено';
        confirmEditFinish.style.display = 'initial';
        metaDescrCheckReadyAfterEditFinish.style.display = 'none';
        metaDescrTextReadyAfterEditFinish.textContent = 'Готово!';
        metaDescrTextReadyAfterEditFinish.style.color = 'green';
        document.getElementById('metaDescriptionString').innerHTML = metaDescrInputEdit.value;
        document.getElementById('metaDescriptionString').style.backgroundColor = '#61FF93'
    }
}
// check to finish
metaDescrCheckReadyAfterEditFinish.onclick = () => {
    if (metaDescrCheckReadyAfterEditFinish.checked === true) {
        metaDescrCheckEdit.style.display = 'none';
        metaDescrTextEdit.style.display = 'none';
        metaDescrCheckReady.style.display = 'none';
        metaDescrTextReady.style.display = 'none';
        metaDescrCheckSymbolsNumberCheckbox.style.display = 'none';
        metaDescrCheckSymbolsNumberText.style.display = 'none';
        metaBr.forEach(br => br.style.display = 'none');
        metaDescrTitleText.textContent = 'Meta Description готово'; 
        metaDescrTitleText.style.color = 'green';
        metaBlock.style.backgroundColor = '#ADE4FF';
        metaDescrTextReadyAfterEditCountSymbols.style.display = 'none';
        metaDescrTextReadyAfterEdit.style.display = 'none';
        metaDescrCheckReadyAfterEdit.style.display = 'none';
        metaDescrCheckReadyAfterEditFinish.style.display = 'none';
        metaDescrTextReadyAfterEditFinish.style.display = 'none';
        metaDescrInputEdit.style.display = 'none';
        checkSymbolsNumber.style.display = 'none';
        metaDescrTitlePrelimRes.style.display = 'none';
        localStorage.setItem('metaDescription', metaDescrInputEdit.value);
    }
}

// ------------------------------------------------------------------
// H1 страницы
// ------------------------------------------------------------------

let title3Block = document.getElementById('h1-is-done');
let title3Title = document.querySelector('.title3-input-title');
title3Title.textContent = 'Описание должно быть от 40 и до 70 знаков';
let titleLine3 = document.querySelector('.title3-input');
titleLine3.style.backgroundColor = 'red';
let titleLine3Counter = document.querySelector('.title3-input-counter');
let titleLine3TextReady = document.querySelector('.title3-input-text-ready');
titleLine3TextReady.textContent = 'H1 готов';
let titleLine3CheckReady = document.querySelector('.title3-input-check-ready');
titleLine3CheckReady.disabled = true;
let titleLine3Confirm = document.querySelector('.conf-title3');
titleLine3Confirm.style.display = 'none';
let titleLineBr = document.querySelectorAll('.title3-br');
let title3InputBr = document.querySelectorAll('.title3-input-br');
title3InputBr.forEach(br => br.style.display = 'none');

titleLine3.oninput = () => {
    titleLine3.style.backgroundColor = 'white';
    title3InputBr.forEach(br => br.style.display = 'initial');
    // 
    if (titleLine3.value.length >= 71) {
        titleLine3Counter.style.color = 'red';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов. Уменьшите количество символов до 70!`;
        titleLine3CheckReady.disabled = true;
        titleLine3TextReady.textContent = 'Уменьшите количество символов!'
        titleLine3TextReady.style.color = 'red';
    } else if (titleLine3.value.length < 40) {
        titleLine3Counter.style.color = 'red';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов. Увеличьте количество символов от 40!`;
        titleLine3CheckReady.disabled = true;
        titleLine3TextReady.textContent = 'Увеличьте количество символов!'
        titleLine3TextReady.style.color = 'red';
    } else {
        titleLine3Counter.style.color = 'black';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов.`;
        titleLine3CheckReady.disabled = false;
        titleLine3TextReady.textContent = 'H1 готов'
        titleLine3TextReady.style.color = 'green';
        titleLine3Confirm.style.display = 'initial';
    }

}
// check to finish
titleLine3CheckReady.onclick = () => {
    if (titleLine3CheckReady.checked === true) {
        titleLine3CheckReady.style.display = 'none';
        titleLine3TextReady.style.display = 'none';
        document.getElementById('titleString3').innerHTML = titleLine3.value;
        document.getElementById('titleString3').style.backgroundColor = '#FFD461';
        titleLine3.style.backgroundColor = 'white';
        titleLine3.disabled = true;
        title3Title.textContent = 'Готово!';
        title3Title.style.color = 'green';
        title3Block.style.backgroundColor = '#ADE4FF';
        titleLine3Counter.style.display = 'none';
        titleLine3CheckReady.disabled = true;
        titleLineBr.forEach(br=> br.style.display = 'none');
        title3InputBr.forEach(br => br.style.display = 'none');
        localStorage.setItem('h1', titleLine3.value);
    }
}

// ------------------------------------------------------------------
// H2 страницы
// ------------------------------------------------------------------

let titleh2Block = document.getElementById('h2-is-done');
let titleh2Title = document.querySelector('.titleh2-input-title');
titleh2Title.textContent = 'Описание должно быть от 30 и до 90 знаков';
let titleLineh2 = document.querySelector('.titleh2-input');
let titleLineh2Counter = document.querySelector('.titleh2-input-counter');
let titleLineh2TextReady = document.querySelector('.titleh2-input-text-ready');
titleLineh2TextReady.textContent = 'H2 готов';
let titleLineh2CheckReady = document.querySelector('.titleh2-input-check-ready');
let titleLineh2Confirm = document.querySelector('.conf-titleh2');
titleLineh2Confirm.style.display = 'none';
let titleLineh2Br = document.querySelectorAll('.titleh2-br');
let titleh2InputBr = document.querySelectorAll('.titleh2-input-br');
titleh2InputBr.forEach(br => br.style.display = 'none');
let showh2 = document.querySelector('.show-titleh2');
showh2.style.display = 'none';
let h2String = document.getElementById('h2String');
let refreshh2 = document.querySelector('.conf-h2-refresh');
let refreshh2Br = document.querySelectorAll('.h2-refresh-br');
let refreshh2Check = document.querySelector('.h2-refresh-input-check-ready');
let refreshh2Text = document.querySelector('.h2-refresh-input-text-ready');
refreshh2Text.textContent = 'H2 недоступно';
refreshh2Check.disabled = true;

refreshh2Check.onclick = () => {
    if (refreshh2Check.checked === true) {
        showh2.style.display = 'initial';
        refreshh2Text.textContent = 'Скрыть H2';
        titleLineh2.value = `Цены, условия и контакты < br>${shortLine.value} в ${oblastLine3.value}`;
        refreshh2.style.display = 'none';
        refreshh2Br.forEach(br => br.style.display = 'none');
    } else {
        showh2.style.display = 'none';
        refreshh2Text.textContent = 'Показать H2';
    }
}

titleLineh2.oninput = () => {
    titleLineh2.style.backgroundColor = 'white';
    titleh2InputBr.forEach(br => br.style.display = 'initial'); 
    if (titleLineh2.value.length >= 91) {
        titleLineh2Counter.style.color = 'red';
        titleLineh2Counter.textContent = `Количество ${titleLineh2.value.length}/ 90 символов. Уменьшите количество символов до 90!`;
        titleLineh2CheckReady.disabled = true;
        titleLineh2TextReady.textContent = 'Уменьшите количество символов!'
        titleLineh2TextReady.style.color = 'red';
    } else if (titleLineh2.value.length < 30) {
        titleLineh2Counter.style.color = 'red';
        titleLineh2Counter.textContent = `Количество ${titleLineh2.value.length}/ 90 символов. Увеличьте количество символов от 30!`;
        titleLineh2CheckReady.disabled = true;
        titleLineh2TextReady.textContent = 'Увеличьте количество символов!'
        titleLineh2TextReady.style.color = 'red';
    } else {
        titleLineh2Counter.style.color = 'black';
        titleLineh2Counter.textContent = `Количество ${titleLineh2.value.length}/ 90 символов.`;
        titleLineh2CheckReady.disabled = false;
        titleLineh2TextReady.textContent = 'H2 готов'
        titleLineh2TextReady.style.color = 'green';
        titleLineh2Confirm.style.display = 'initial';
    }
}
// check to finish
titleLineh2CheckReady.onclick = () => {
    if (titleLineh2CheckReady.checked === true) {
        titleLineh2CheckReady.style.display = 'none';
        titleLineh2TextReady.style.display = 'none';
        document.getElementById('h2String').innerHTML = titleLineh2.value;
        document.getElementById('h2String').style.backgroundColor = '#FFD461';
        titleLineh2.style.backgroundColor = 'white';
        titleLineh2.disabled = true;
        titleh2Title.textContent = 'Готово!';
        titleh2Title.style.color = 'green';
        titleh2Block.style.backgroundColor = '#ADE4FF';
        titleLineh2Counter.style.display = 'none';
        titleLineh2CheckReady.disabled = true;
        titleh2InputBr.forEach(br => br.style.display = 'none');
        localStorage.setItem('h2', titleLineh2.value);
    }
}

// ------------------------------------------------------------------
// H3 страницы
// ------------------------------------------------------------------

let titleh3Block = document.getElementById('h3-is-done');
let titleh3Title = document.querySelector('.titleh3-input-title');
titleh3Title.textContent = 'Описание должно быть от 30 и до 90 знаков';
let titleLineh3 = document.querySelector('.titleh3-input');
let titleLineh3Counter = document.querySelector('.titleh3-input-counter');
let titleLineh3TextReady = document.querySelector('.titleh3-input-text-ready');
titleLineh3TextReady.textContent = 'h3 готов';
let titleLineh3CheckReady = document.querySelector('.titleh3-input-check-ready');
let titleLineh3Confirm = document.querySelector('.conf-titleh3');
titleLineh3Confirm.style.display = 'none';
let titleLineh3Br = document.querySelectorAll('.titleh3-br');
let titleh3InputBr = document.querySelectorAll('.titleh3-input-br');
titleh3InputBr.forEach(br => br.style.display = 'none');
let showh3 = document.querySelector('.show-titleh3');
showh3.style.display = 'none';
let h3String = document.getElementById('h3String');
let refreshh3 = document.querySelector('.conf-h3-refresh');
let refreshh3Br = document.querySelectorAll('.h3-refresh-br');
let refreshh3Check = document.querySelector('.h3-refresh-input-check-ready');
let refreshh3Text = document.querySelector('.h3-refresh-input-text-ready');
refreshh3Text.textContent = 'h3 недоступно';
refreshh3Check.disabled = true;

refreshh3Check.onclick = () => {
    if (refreshh3Check.checked === true) {
        showh3.style.display = 'initial';
        refreshh3Text.textContent = 'Скрыть h3';
         titleLineh3.value = `Вся информация об курсах иностранного языка в ${shortLine.value} в ${oblastLine3.value}`;
        refreshh3.style.display = 'none';
        refreshh3Br.forEach(br => br.style.display = 'none');
    } else {
        showh3.style.display = 'none';
        refreshh3Text.textContent = 'Показать h3';
    }
}

titleLineh3.oninput = () => {
    titleLineh3.style.backgroundColor = 'white';
    titleh3InputBr.forEach(br => br.style.display = 'initial'); 
    if (titleLineh3.value.length >= 91) {
        titleLineh3Counter.style.color = 'red';
        titleLineh3Counter.textContent = `Количество ${titleLineh3.value.length}/ 90 символов. Уменьшите количество символов до 90!`;
        titleLineh3CheckReady.disabled = true;
        titleLineh3TextReady.textContent = 'Уменьшите количество символов!'
        titleLineh3TextReady.style.color = 'red';
    } else if (titleLineh3.value.length < 30) {
        titleLineh3Counter.style.color = 'red';
        titleLineh3Counter.textContent = `Количество ${titleLineh3.value.length}/ 90 символов. Увеличьте количество символов от 30!`;
        titleLineh3CheckReady.disabled = true;
        titleLineh3TextReady.textContent = 'Увеличьте количество символов!'
        titleLineh3TextReady.style.color = 'red';
    } else {
        titleLineh3Counter.style.color = 'black';
        titleLineh3Counter.textContent = `Количество ${titleLineh3.value.length}/ 90 символов.`;
        titleLineh3CheckReady.disabled = false;
        titleLineh3TextReady.textContent = 'h3 готов'
        titleLineh3TextReady.style.color = 'green';
        titleLineh3Confirm.style.display = 'initial';
    }
}
// check to finish
titleLineh3CheckReady.onclick = () => {
    if (titleLineh3CheckReady.checked === true) {
        titleLineh3CheckReady.style.display = 'none';
        titleLineh3TextReady.style.display = 'none';
        document.getElementById('h3String').innerHTML = titleLineh3.value;
        document.getElementById('h3String').style.backgroundColor = '#FFD461';
        titleLineh3.style.backgroundColor = 'white';
        titleLineh3.disabled = true;
        titleh3Title.textContent = 'Готово!';
        titleh3Title.style.color = 'green';
        titleh3Block.style.backgroundColor = '#ADE4FF';
        titleLineh3Counter.style.display = 'none';
        titleLineh3CheckReady.disabled = true;
        titleh3InputBr.forEach(br => br.style.display = 'none');
        localStorage.setItem('h3', titleLineh3.value);
    }
}

// ------------------------------------------------------------------
// H4 страницы
// ------------------------------------------------------------------

let titleh4Block = document.getElementById('h4-is-done');
let titleh4Title = document.querySelector('.titleh4-input-title');
titleh4Title.textContent = 'Описание должно быть от 30 и до 90 знаков';
let titleLineh4 = document.querySelector('.titleh4-input');
let titleLineh4Counter = document.querySelector('.titleh4-input-counter');
let titleLineh4TextReady = document.querySelector('.titleh4-input-text-ready');
titleLineh4TextReady.textContent = 'h4 готов';
let titleLineh4CheckReady = document.querySelector('.titleh4-input-check-ready');
let titleLineh4Confirm = document.querySelector('.conf-titleh4');
titleLineh4Confirm.style.display = 'none';
let titleLineh4Br = document.querySelectorAll('.titleh4-br');
let titleh4InputBr = document.querySelectorAll('.titleh4-input-br');
titleh4InputBr.forEach(br => br.style.display = 'none');
let showh4 = document.querySelector('.show-titleh4');
showh4.style.display = 'none';
let h4String = document.getElementById('h4String');
let refreshh4 = document.querySelector('.conf-h4-refresh');
let refreshh4Br = document.querySelectorAll('.h4-refresh-br');
let refreshh4Check = document.querySelector('.h4-refresh-input-check-ready');
let refreshh4Text = document.querySelector('.h4-refresh-input-text-ready');
refreshh4Text.textContent = 'h4 недоступно';
refreshh4Check.disabled = true;

refreshh4Check.onclick = () => {
    if (refreshh4Check.checked === true) {
        showh4.style.display = 'initial';
        refreshh4Text.textContent = 'Скрыть h4';
         titleLineh4.value = `Школа иностранных языков < br>${shortLine.value}`;
        refreshh4.style.display = 'none';
        refreshh4Br.forEach(br => br.style.display = 'none');
    } else {
        showh4.style.display = 'none';
        refreshh4Text.textContent = 'Показать h4';
    }
}

titleLineh4.oninput = () => {
    titleLineh4.style.backgroundColor = 'white';
    titleh4InputBr.forEach(br => br.style.display = 'initial'); 
    if (titleLineh4.value.length >= 71) {
        titleLineh4Counter.style.color = 'red';
        titleLineh4Counter.textContent = `Количество ${titleLineh4.value.length}/ 70 символов. Уменьшите количество символов до 70!`;
        titleLineh4CheckReady.disabled = true;
        titleLineh4TextReady.textContent = 'Уменьшите количество символов!'
        titleLineh4TextReady.style.color = 'red';
    } else if (titleLineh4.value.length < 20) {
        titleLineh4Counter.style.color = 'red';
        titleLineh4Counter.textContent = `Количество ${titleLineh4.value.length}/ 70 символов. Увеличьте количество символов от 20!`;
        titleLineh4CheckReady.disabled = true;
        titleLineh4TextReady.textContent = 'Увеличьте количество символов!'
        titleLineh4TextReady.style.color = 'red';
    } else {
        titleLineh4Counter.style.color = 'black';
        titleLineh4Counter.textContent = `Количество ${titleLineh4.value.length}/ 70 символов.`;
        titleLineh4CheckReady.disabled = false;
        titleLineh4TextReady.textContent = 'h4 готов'
        titleLineh4TextReady.style.color = 'green';
        titleLineh4Confirm.style.display = 'initial';
    }
}
// check to finish
titleLineh4CheckReady.onclick = () => {
    if (titleLineh4CheckReady.checked === true) {
        titleLineh4CheckReady.style.display = 'none';
        titleLineh4TextReady.style.display = 'none';
        document.getElementById('h4String').innerHTML = titleLineh4.value;
        document.getElementById('h4String').style.backgroundColor = '#FFD461';
        titleLineh4.style.backgroundColor = 'white';
        titleLineh4.disabled = true;
        titleh4Title.textContent = 'Готово!';
        titleh4Title.style.color = 'green';
        titleh4Block.style.backgroundColor = '#ADE4FF';
        titleLineh4Counter.style.display = 'none';
        titleLineh4CheckReady.disabled = true;
        titleh4InputBr.forEach(br => br.style.display = 'none');
        localStorage.setItem('h4', titleLineh4.value);
    }
}

// ------------------------------------------------------------------
// Возрастные категории
// ------------------------------------------------------------------

let ageBlock = document.getElementById('age-is-done');
let ageTitle = document.querySelector('.age-title');
ageTitle.textContent = 'Укажите возраст клиентов';
let ageInputFrom = document.querySelector('.age-input-from');
ageInputFrom.style.backgroundColor = 'red';
let ageInputTo = document.querySelector('.age-input-to');
ageInputTo.style.backgroundColor = 'red';
let ageFillingTextIfNo = document.querySelector('.filling-age-text-no');
ageFillingTextIfNo.textContent = 'Данных нет';
let ageFillingCheckIfNo = document.querySelector('.filling-age-check-no');
let ageFillingTextIfYes = document.querySelector('.filling-age-text-yes');
ageFillingTextIfYes.textContent = 'Готово';
let ageFillingCheckIfYes = document.querySelector('.filling-age-check-yes');
ageFillingCheckIfYes.disabled = true;
let ageFillingInputs = document.querySelectorAll('.ages');
let ageWord = document.querySelectorAll('.age-word');
let ageBr = document.querySelectorAll('.age-br');
let confNoAgeData = document.querySelector('.conf-no-age-data');
let ageFinalle;


ageFillingInputs.forEach(input => {
    input.oninput = () => {
        if (ageInputFrom.value === '0'  || 
            ageInputFrom.value === '00' ){
            document.getElementById('clientCategory').innerHTML = `до ${ageInputTo.value}`;
            ageFinalle = `до ${ageInputTo.value}`;
            localStorage.setItem('clientCategory', ageFinalle);
            document.getElementById('clientCategory').style.backgroundColor = '#E8DAEF';
        }

        if (ageInputFrom.value >=  '1'  && 
            ageInputFrom.value !== '00' && 
            ageInputTo.value   === '00' ){
            document.getElementById('clientCategory').innerHTML = `${ageInputFrom.value}+`;
            ageFinalle = `${ageInputFrom.value}+`;
            localStorage.setItem('clientCategory', ageFinalle);
            document.getElementById('clientCategory').style.backgroundColor = '#E8DAEF';
        }

        if (ageInputFrom.value >=  '1'  && 
            ageInputFrom.value !== '00' && 
            ageInputTo.value   !== '00' ){
            document.getElementById('clientCategory').innerHTML = `${ageInputFrom.value}-${ageInputTo.value}`;
            ageFinalle = `${ageInputFrom.value}-${ageInputTo.value}`;
            localStorage.setItem('clientCategory', ageFinalle);
            document.getElementById('clientCategory').style.backgroundColor = '#E8DAEF';
        }

        if (ageInputFrom.value !== '!' &&
            ageInputTo.value   !== '!' ){
            ageFillingCheckIfYes.disabled = false;
            ageFillingCheckIfNo.disabled = true;
            ageFillingTextIfYes.textContent = 'Готово';
            ageFillingTextIfYes.style.color = 'green';
            confNoAgeData.style.display = 'none';
        }
    }
})

ageInputFrom.onclick = () => ageInputFrom.style.backgroundColor = 'white';
ageInputTo.onclick   = () => ageInputTo.style.backgroundColor   = 'white';

// check to finish
ageFillingCheckIfYes.onclick = () => {
    if (ageFillingCheckIfYes.checked === true) {
        ageTitle.textContent = 'Готово!';
        ageTitle.style.color = 'green';
        ageInputFrom.style.display = 'none';
        ageInputTo.style.display = 'none';
        ageFillingTextIfNo.style.display = 'none';
        ageFillingCheckIfNo.style.display = 'none';
        ageFillingTextIfYes.style.display = 'none';
        ageFillingCheckIfYes.style.display = 'none';
        ageWord.forEach(word => word.style.display = 'none');
        ageBr.forEach(br => br.style.display = 'none');
        ageBlock.style.backgroundColor = '#ADE4FF';
    }
}

// check to finish
ageFillingCheckIfNo.onclick = () => {
    if (ageFillingCheckIfNo.checked === true) {
        ageTitle.textContent = 'Данных по возрасту не указано';
        ageTitle.style.color = 'green';
        ageInputFrom.style.display = 'none';
        ageInputTo.style.display = 'none';
        ageFillingTextIfNo.style.display = 'none';
        ageFillingCheckIfNo.style.display = 'none';
        ageFillingTextIfYes.style.display = 'none';
        ageFillingCheckIfYes.style.display = 'none';
        ageWord.forEach(word => word.style.display = 'none');
        ageBr.forEach(br => br.style.display = 'none');
        ageBlock.style.backgroundColor = '#ADE4FF';
        document.getElementById('clientCategory').innerHTML = `&#10005;`;
        document.getElementById('clientCategory').style.backgroundColor = '#E8DAEF';
        document.getElementById('clientCategory').style.color = 'red';
        document.getElementById('clientCategory').style.fontWeight = '800';
        localStorage.setItem('clientCategory', `&#10005;`);
    }
}

// ------------------------------------------------------------------
// Лицензия в школе
// ------------------------------------------------------------------
 
let licenseBlock = document.getElementById('license-is-done'); 
let licenseTitle = document.querySelector('.license-title'); 
let licenseHas = document.querySelector('.license-has');
licenseHas.style.backgroundColor = 'red'; 
let licenseBr = document.querySelectorAll('.license-br'); 
licenseTitle.textContent = 'Есть ли лицензия у школы?';
licenseTitle.style.fontWeight = '800';
let confirmlicense = document.querySelector('.conf-license');
confirmlicense.style.display = 'none';
let licenseLinkWordsCheckFinish = document.querySelector('.license-link-words-check-finish');
licenseLinkWordsCheckFinish.textContent = 'Подтвердить';
let licenseLinkInputCheckFinish = document.querySelector('.license-link-input-check-finish');
 
licenseHas.onchange = () => {
    if (licenseHas.value === 'yes') {
        licenseTitle.textContent = 'Есть лицензия!';
        licenseTitle.style.color = 'green';
        licenseTitle.style.fontWeight = '800';
        licenseBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasLicense').innerHTML = 'есть';
        document.getElementById('schoolHasLicense').style.backgroundColor = '#FFC300';
        confirmlicense.style.display = 'initial';
        localStorage.setItem('license', 'есть');
    } else {
        licenseTitle.textContent = 'Нет лицензии!';
        licenseTitle.style.color = 'green';
        licenseTitle.style.fontWeight = '800';
        licenseBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasLicense').innerHTML = '&#10005';
        document.getElementById('schoolHasLicense').style.color = 'red';
        document.getElementById('schoolHasLicense').style.fontWeight = '800';
        document.getElementById('schoolHasLicense').style.backgroundColor = '#FFC300';
        confirmlicense.style.display = 'initial';
        localStorage.setItem('license', '&#10005');
    }
}
// check to finish
confirmlicense.onclick = () => {
    confirmlicense.style.display = 'none';
    licenseBlock.style.backgroundColor = '#ADE4FF';
    licenseHas.disabled = true;
}
 
licenseHas.onclick = () => licenseHas.style.backgroundColor = 'white';

// ------------------------------------------------------------------
// Сеть школ
// ------------------------------------------------------------------
 
let netBlock = document.getElementById('net-is-done'); 
let netTitle = document.querySelector('.net-title'); 
let netHas = document.querySelector('.net-has');
netHas.style.backgroundColor = 'red'; 
let netBr = document.querySelectorAll('.net-br');
netTitle.textContent = 'Это сеть школ?';
netTitle.style.fontWeight = '800';
let confirmnet = document.querySelector('.conf-net');
confirmnet.style.display = 'none';
let netLinkWordsCheckFinish = document.querySelector('.net-link-words-check-finish');
netLinkWordsCheckFinish.textContent = 'Подтвердить';
let netLinkInputCheckFinish = document.querySelector('.net-link-input-check-finish');
 
netHas.oninput = () => {
    if (netHas.value === 'yes') {
        netTitle.textContent = 'Есть сеть школ!';
        netTitle.style.color = 'green';
        netTitle.style.fontWeight = '800';
        netBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasNet').innerHTML = 'есть';
        document.getElementById('schoolHasNet').style.backgroundColor = '#F5B7B1';
        confirmnet.style.display = 'initial';
        localStorage.setItem('net', 'есть');
    } else {
        netTitle.textContent = 'Не сеть школ!';
        netTitle.style.color = 'green';
        netTitle.style.fontWeight = '800';
        netBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasNet').innerHTML = '&#10005';
        document.getElementById('schoolHasNet').style.color = 'red';
        document.getElementById('schoolHasNet').style.fontWeight = '800';
        document.getElementById('schoolHasNet').style.backgroundColor = '#F5B7B1';
        confirmnet.style.display = 'initial';
        localStorage.setItem('net', '&#10005');
    }
}
// check to finish
confirmnet.onclick = () => {
    confirmnet.style.display = 'none';
    netBlock.style.backgroundColor = '#ADE4FF';
    netHas.disabled = true;
}

netHas.onclick = () => netHas.style.backgroundColor = 'white';

// ------------------------------------------------------------------
// Носители языка
// ------------------------------------------------------------------
 
let foreignerBlock = document.getElementById('foreigner-is-done'); 
let foreignerTitle = document.querySelector('.foreigner-title'); 
let foreignerHas = document.querySelector('.foreigner-has');
foreignerHas.style.backgroundColor = 'red'; 
let foreignerBr = document.querySelectorAll('.foreigner-br');
foreignerTitle.textContent = 'Есть ли иностранные преподаватели?';
foreignerTitle.style.fontWeight = '800';
let confirmforeigner = document.querySelector('.conf-foreigner');
confirmforeigner.style.display = 'none';
let foreignerLinkWordsCheckFinish = document.querySelector('.foreigner-link-words-check-finish');
foreignerLinkWordsCheckFinish.textContent = 'Подтвердить';
let foreignerLinkInputCheckFinish = document.querySelector('.foreigner-link-input-check-finish');

foreignerHas.oninput = () => {
    if (foreignerHas.value === 'yes') {
        foreignerTitle.textContent = 'Есть носители языка!';
        foreignerTitle.style.color = 'green';
        foreignerTitle.style.fontWeight = '800';
        foreignerBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasForeigner').innerHTML = 'есть';
        document.getElementById('schoolHasForeigner').style.backgroundColor = '#28B463';
        confirmforeigner.style.display = 'initial';
        localStorage.setItem('foreigNTutor', 'есть');
    } else {
        foreignerTitle.textContent = 'Нет носителей языка!';
        foreignerTitle.style.color = 'green';
        foreignerTitle.style.fontWeight = '800';
        foreignerBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasForeigner').innerHTML = '&#10005';
        document.getElementById('schoolHasForeigner').style.color = 'red';
        document.getElementById('schoolHasForeigner').style.fontWeight = '800';
        document.getElementById('schoolHasForeigner').style.backgroundColor = '#28B463';
        confirmforeigner.style.display = 'initial'; 
        localStorage.setItem('foreigNTutor', '&#10005');       
    }
}
// check to finish
confirmforeigner.onclick = () => {
    confirmforeigner.style.display = 'none';
    foreignerBlock.style.backgroundColor = '#ADE4FF';
    foreignerHas.disabled = true;
}

foreignerHas.onclick = () => foreignerHas.style.backgroundColor = 'white';

// ------------------------------------------------------------------
// Школа работает или нет
// ------------------------------------------------------------------
 
let activeBlock = document.getElementById('active-is-done'); 
let activeTitle = document.querySelector('.active-title'); 
let activeHas = document.querySelector('.active-has');
activeHas.style.backgroundColor = 'red'; 
let activeBr = document.querySelectorAll('.active-br');
activeTitle.textContent = 'Школа работает или закрылась? (Публикуем даже закрытые)';
activeTitle.style.fontWeight = '800';
let confirmactive = document.querySelector('.conf-active');
confirmactive.style.display = 'none';
let activeLinkWordsCheckFinish = document.querySelector('.active-link-words-check-finish');
activeLinkWordsCheckFinish.textContent = 'Подтвердить';
let activeLinkInputCheckFinish = document.querySelector('.active-link-input-check-finish');

activeHas.oninput = () => {
    if (activeHas.value === 'yes') {
        activeTitle.textContent = 'Школа работает!';
        activeTitle.style.color = 'green';
        activeTitle.style.fontWeight = '800';
        activeBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasActive').innerHTML = '1';
        document.getElementById('schoolHasActive').style.backgroundColor = '#7F8C8D';
        confirmactive.style.display = 'initial'; 
        localStorage.setItem('active', 'есть');
    } else {
        activeTitle.textContent = 'Школа не работает!';
        activeTitle.style.color = 'green';
        activeTitle.style.fontWeight = '800';
        activeBr.forEach(br => br.style.display = 'none');
        document.getElementById('schoolHasActive').innerHTML = '0';
        document.getElementById('schoolHasActive').style.color = 'red';
        document.getElementById('schoolHasActive').style.fontWeight = '800';
        document.getElementById('schoolHasActive').style.backgroundColor = '#7F8C8D';
        confirmactive.style.display = 'initial'; 
        localStorage.setItem('active', '&#10005');
    }
}
 
activeHas.onclick = () => activeHas.style.backgroundColor = 'white';
// check to finish
confirmactive.onclick = () => {
    confirmactive.style.display = 'none';
    activeBlock.style.backgroundColor = '#ADE4FF';
    activeHas.disabled = true;
}

// ------------------------------------------------------------------
// Описание школы
// ------------------------------------------------------------------

let textBlock = document.getElementById('text-about-school-is-done');
let labelOfTextAboutSchool = document.querySelector('.label-text-about-school');
labelOfTextAboutSchool.textContent = 'Дать описание школы от 500 до 1000 печатных знаков. Копировать текст в поле запрещено. Можно только печатать. В описании должны быть использованны выбранные ключевые слова.'; 
let textAboutSchool = document.querySelector('.text-about-school');
textAboutSchool.style.backgroundColor = 'red'; 
let mustIncludeAboutSchoolTitle = document.querySelector('.must-have-text-about-school');
mustIncludeAboutSchoolTitle.textContent = 'Подтвердите, что текст включает в себя следующие данные:';
mustIncludeAboutSchoolTitle.style.fontWeight = '800'; 
let mustIncludeAboutSchoolCheckOne = document.querySelector('.must-have-1-check-about-school');
let mustIncludeAboutSchoolTextOne = document.querySelector('.must-have-1-text-about-school');
mustIncludeAboutSchoolTextOne.textContent = 'короткое название школы';
let mustIncludeAboutSchoolCheckTwo = document.querySelector('.must-have-2-check-about-school');
let mustIncludeAboutSchoolTextTwo = document.querySelector('.must-have-2-text-about-school');
mustIncludeAboutSchoolTextTwo.textContent = 'адрес (улица, метро, город)'; 
let mustIncludeAboutSchoolCheckThree = document.querySelector('.must-have-3-check-about-school');
let mustIncludeAboutSchoolTextThree = document.querySelector('.must-have-3-text-about-school');
mustIncludeAboutSchoolTextThree.textContent = 'возрастная группа клиентов';
let mustIncludeAboutSchoolCheckFour = document.querySelector('.must-have-4-check-about-school');
let mustIncludeAboutSchoolTextFour = document.querySelector('.must-have-4-text-about-school');
mustIncludeAboutSchoolTextFour.textContent = 'наличие лицензии в школе';
let mustIncludeAboutSchoolCheckFive = document.querySelector('.must-have-5-check-about-school');
let mustIncludeAboutSchoolTextFive = document.querySelector('.must-have-5-text-about-school');
mustIncludeAboutSchoolTextFive.textContent = 'сетевая школа или нет'; 
let mustIncludeAboutSchoolCheckSix = document.querySelector('.must-have-6-check-about-school');
let mustIncludeAboutSchoolTextSix = document.querySelector('.must-have-6-text-about-school');
mustIncludeAboutSchoolTextSix.textContent = 'носители языка'; 
let mustIncludeAboutSchoolCheckSeven = document.querySelector('.must-have-7-check-about-school');
let mustIncludeAboutSchoolTextSeven = document.querySelector('.must-have-7-text-about-school');
mustIncludeAboutSchoolTextSeven.textContent = 'примерные цены'; 
let mustIncludeAboutSchoolCheckEight = document.querySelector('.must-have-8-check-about-school');
let mustIncludeAboutSchoolTextEight = document.querySelector('.must-have-8-text-about-school');
mustIncludeAboutSchoolTextEight.textContent = 'год основания (если есть)';
let mustIncludeAboutSchoolCheckNine = document.querySelector('.must-have-9-check-about-school');
let mustIncludeAboutSchoolTextNine = document.querySelector('.must-have-9-text-about-school');
mustIncludeAboutSchoolTextNine.textContent = 'максимум учеников в группе'; 
let mustIncludeAboutSchoolCheckTen = document.querySelector('.must-have-10-check-about-school');
let mustIncludeAboutSchoolTextTen = document.querySelector('.must-have-10-text-about-school');
mustIncludeAboutSchoolTextTen.textContent = 'нет ошибок'; 
let mustIncludeAboutSchoolCheckEleven = document.querySelector('.must-have-11-check-about-school');
let mustIncludeAboutSchoolTextEleven = document.querySelector('.must-have-11-text-about-school');
mustIncludeAboutSchoolTextEleven.textContent = 'позитивное описание';
let checkIfSchoolTextIsReady = document.querySelector('.checkbox-complete-text-about-school');
checkIfSchoolTextIsReady.disabled = true; 
let textIfSchoolTextIsReady = document.querySelector('.text-complete-text-about-school');
textIfSchoolTextIsReady.textContent = 'не готово';
let checkText = document.querySelectorAll('.text-ch');
let textCounter = document.querySelector('.text-about-school-counter');
textCounter.textContent = `Всего ${textAboutSchool.value.length} символов`;
textAboutSchool.addEventListener('paste', e => e.preventDefault());
let textBr = document.querySelectorAll('.br-about-school');

textAboutSchool.oninput = () => { 
    textAboutSchool.style.backgroundColor = 'white'; 
    mustIncludeAboutSchoolCheckEleven.checked = false;
    textIfSchoolTextIsReady.textContent = 'не готово';
    textIfSchoolTextIsReady.style.color = 'red'; 
    textCounter.textContent = `Всего ${textAboutSchool.value.length} символов`; 
    if (textAboutSchool.value.length > 500) {
        textCounter.style.color = 'green';
        mustIncludeAboutSchoolTitle.style.color = 'red';
    }
    let textLength = textAboutSchool.value.length > 500 ? true : false;
    checkText.forEach(check => {
        check.onclick = () => {
            if (textLength                                  === true &&
                mustIncludeAboutSchoolCheckOne.checked      === true &&
                mustIncludeAboutSchoolCheckTwo.checked      === true &&
                mustIncludeAboutSchoolCheckThree.checked    === true &&
                mustIncludeAboutSchoolCheckFour.checked     === true &&
                mustIncludeAboutSchoolCheckFive.checked     === true &&
                mustIncludeAboutSchoolCheckSix.checked      === true &&
                mustIncludeAboutSchoolCheckSeven.checked    === true &&
                mustIncludeAboutSchoolCheckEight.checked    === true &&
                mustIncludeAboutSchoolCheckNine.checked     === true &&
                mustIncludeAboutSchoolCheckTen.checked      === true &&
                mustIncludeAboutSchoolCheckEleven.checked   === true ){
                checkIfSchoolTextIsReady.disabled = false;
                textIfSchoolTextIsReady.textContent = 'Готово!';
                textIfSchoolTextIsReady.style.color = 'green';
            } else {
                checkIfSchoolTextIsReady.disabled = true;
                textIfSchoolTextIsReady.textContent = 'не готово';
                textIfSchoolTextIsReady.style.color = 'red';
            }
        }
    }) 
    if (textLength === false) {
        checkIfSchoolTextIsReady.disabled = true;
        mustIncludeAboutSchoolCheckEleven.checked = false;
        textIfSchoolTextIsReady.textContent = 'Описание не готово';
        textIfSchoolTextIsReady.style.color = 'red';
    } else {
        mustIncludeAboutSchoolCheckEleven.disabled = false;
    }
    document.getElementById('bigTextString').innerHTML = textAboutSchool.value;
    document.getElementById('bigTextString').style.backgroundColor = '#EC9F9F';
}
// check to finish
checkIfSchoolTextIsReady.onclick = () => {
    if (checkIfSchoolTextIsReady.checked === true) {
        textBlock.style.backgroundColor = '#ADE4FF';
        labelOfTextAboutSchool.textContent = 'Готово';
        labelOfTextAboutSchool.style.color = 'green';
        textAboutSchool.disabled = true;
        textBr.forEach(br => br.style.display = 'none');
        mustIncludeAboutSchoolTitle.style.display = 'none';
        mustIncludeAboutSchoolCheckOne.style.display = 'none';
        mustIncludeAboutSchoolTextOne.style.display = 'none';
        mustIncludeAboutSchoolCheckTwo.style.display = 'none';
        mustIncludeAboutSchoolTextTwo.style.display = 'none';
        mustIncludeAboutSchoolCheckThree.style.display = 'none';
        mustIncludeAboutSchoolTextThree.style.display = 'none';
        mustIncludeAboutSchoolCheckFour.style.display = 'none';
        mustIncludeAboutSchoolTextFour.style.display = 'none';
        mustIncludeAboutSchoolCheckFive.style.display = 'none';
        mustIncludeAboutSchoolTextFive.style.display = 'none';
        mustIncludeAboutSchoolCheckSix.style.display = 'none';
        mustIncludeAboutSchoolTextSix.style.display = 'none';
        mustIncludeAboutSchoolCheckSeven.style.display = 'none';
        mustIncludeAboutSchoolTextSeven.style.display = 'none';
        mustIncludeAboutSchoolCheckEight.style.display = 'none';
        mustIncludeAboutSchoolTextEight.style.display = 'none';
        mustIncludeAboutSchoolCheckNine.style.display = 'none';
        mustIncludeAboutSchoolTextNine.style.display = 'none';
        mustIncludeAboutSchoolCheckTen.style.display = 'none';
        mustIncludeAboutSchoolTextTen.style.display = 'none';
        mustIncludeAboutSchoolCheckEleven.style.display = 'none';
        mustIncludeAboutSchoolTextEleven.style.display = 'none';
        checkIfSchoolTextIsReady.style.display = 'none';
        textIfSchoolTextIsReady.style.display = 'none';
        textCounter.style.display = 'none';
        localStorage.setItem('bigDescription', textAboutSchool.value);
        console.log(localStorage.getItem('bigDescription'));
        
    }
}

// ------------------------------------------------------------------
// meta keywords
// ------------------------------------------------------------------

let keyWordBlock = document.getElementById('meta-key-words-is-done');
let keyWordCity = document.getElementById('key-word-city');
let keyWordCityText = document.querySelector('.key-word-city');
let keyWordInCity = document.getElementById('key-word-in-city');
let keyWordInCityText = document.querySelector('.key-word-in-city');
let keyWordSchool = document.getElementById('key-word-shkola');
let keyWordKursi = document.getElementById('key-word-kursi');
let keyWordEng1 = document.getElementById('key-word-angliski');
let keyWordEng2 = document.getElementById('key-word-angliskogo');
let keyWordLan = document.getElementById('key-word-iazik');
let keyWordCentre = document.getElementById('key-word-centr');
let keyWordLang2 = document.getElementById('key-word-iazikovoi');
let keyWordIntern = document.getElementById('key-word-inostranni');
let keyWordAddress = document.getElementById('key-word-adres');
let keyWordAddressText = document.querySelector('.key-word-adres');
let keyWordMetro1 = document.getElementById('key-word-metro1');
let keyWordMetro1Text = document.querySelector('.key-word-metro1');
let keyWordMetro2 = document.getElementById('key-word-metro2');
let keyWordMetro2Text = document.querySelector('.key-word-metro2');
let keyWordMetro3 = document.getElementById('key-word-metro3');
let keyWordMetro3Text = document.querySelector('.key-word-metro3');
let keyWordKitaiski = document.getElementById('key-word-kitaiski');
let keyWordNemecki = document.getElementById('key-word-nemecki');
let keyWordFrancuzki = document.getElementById('key-word-francuzki');
let keyWordPrice = document.getElementById('key-word-cena');
let keyWordKids = document.getElementById('key-word-dla-detei');
let keyWordAdults = document.getElementById('key-word-dla-vzroslih');
let keyWordLesson = document.getElementById('key-word-zanatia');
let keyWordGorod = document.getElementById('key-word-gorod');
let keyWordGorodText = document.querySelector('.key-word-gorod-text');
let keyWordName = document.getElementById('key-word-nazvanie');
let keyWordNameText = document.querySelector('.key-word-nazvanie');
let keyWordButton = document.querySelectorAll('.key-word-btn');
let keyWordArr = [];
let keyWordFinishCheck = document.querySelector('.finish-keywords');
keyWordFinishCheck.disabled = true;
let keyWordFinishText = document.querySelector('.finish-keywords-text');
keyWordFinishText.textContent = 'OK';
let keyWordBr = document.querySelectorAll('.key-word-br');
let confirmFinishKeyWords = document.querySelector('.conf-finish-keywords');
confirmFinishKeyWords.style.display = 'none';

let keyWordString;

function keyWordFin() {
    
    if (keyWordArr.length < 7) {
        keyWordFinishCheck.disabled = true;
    } else {
        keyWordFinishCheck.disabled = false;
        keyWordFinishText.style.color = 'green';
        keyWordFinishText.textContent = 'Подтвердить';
        confirmFinishKeyWords.style.display = 'initial';
    }
};

keyWordButton.forEach(button => {
    button.onclick = () => {
        if (button.checked === true) {
            keyWordArr.push(button.value);
            keyWordString = keyWordArr.join(', ');          
            document.getElementById('keywordsString').innerHTML = keyWordString;
            document.getElementById('keywordsString').style.backgroundColor = '#C0EC9F'; 
            keyWordFin();
        } else {
            keyWordArr.pop(button.value);
            keyWordString = keyWordArr.join(', ');
            document.getElementById('keywordsString').innerHTML = keyWordString;
            keyWordFin();
        }
    }
})
// check to finish
keyWordFinishCheck.onclick = () => {
    if (keyWordFinishCheck.checked === true) {
        keyWordBlock.style.backgroundColor = '#ADE4FF';
        localStorage.setItem('metaKeywords', keyWordString);
        keyWordButton.forEach(button => {
            button.disabled = true;
            keyWordBr.forEach(br => br.style.display = 'none');
            confirmFinishKeyWords.style.display = 'none';
        })
    }
}

// ------------------------------------------------------------------
// id школы в БД
// ------------------------------------------------------------------

let idLine = document.querySelector('.id-input');
idLine.style.backgroundColor = 'red';
let idLineTitle = document.querySelector('.id-input-title');
let idLineCheck = document.querySelector('.id-input-check');
idLineCheck.disabled = true;
let idLineText = document.querySelector('.id-input-text');
idLineText.textContent = 'Подтвердить';
let idBlock = document.getElementById('id-is-done');
let idBr = document.querySelectorAll('.id-input-br');
let confirmID = document.querySelector('.conf-id-input');

idLine.onclick = () => idLine.style.backgroundColor = 'white';

idLine.oninput = () => {
    if (idLine.value <= idLine.placeholder) {
        idLineTitle.textContent = 'Номер равен или меньше последнего в базе данных';
        idLineTitle.style.color = 'red';
        idLineText.textContent = 'Ошибка';
        idLineText.style.color = 'red';
        idLineCheck.disabled = true;
    } else {
        idLineTitle.textContent = 'Подтвердите номер';
        idLineCheck.disabled = false;
        idLineTitle.style.color = 'green';
        idLineCheck.disabled = false;
        idLineText.textContent = 'Подтвердить';
        idLineText.style.color = 'green';
        document.getElementById('idString').innerHTML = idLine.value;
        document.getElementById('idString').style.backgroundColor = '#ADB6FF';
        localStorage.setItem('id', idLine.value);
    }
}
// check to finish
idLineCheck.onclick = () => {
    if (idLineCheck.checked === true  && idLine.value !== '') {
        idLineText.textContent = 'Готово';
        idLineText.style.color = 'green';
        idLineCheck.style.display = 'none';
        idBlock.style.backgroundColor = '#ADE4FF';
        idBr.forEach(br => br.style.display = 'none')
        confirmID.style.display = 'none';
        idLine.disabled = true;
    } else {
        idLineText.textContent = 'Ошибка';
        idLineText.style.color = 'red';
        idLineTitle.textContent = 'Провеьте введен ли номер';
        idLineTitle.style.color = 'red';
    }
}

// ------------------------------------------------------------------
// Указываем город заполнения
// ------------------------------------------------------------------


let citydbBlock = document.getElementById('citydb-is-done');
let citydbTitle = document.querySelector('.citydb-title');
let citydbHas = document.querySelector('.citydb-has');
citydbHas.style.backgroundColor = 'red';
let citydbBr = document.querySelectorAll('.citydb-br');
let confirmcitydb = document.querySelector('.conf-citydb');
confirmcitydb.style.display = 'none';
let citydbLinkWordsCheckFinish = document.querySelector('.citydb-link-words-check-finish');
citydbLinkWordsCheckFinish.textContent = 'Подтвердить';
let citydbLinkInputCheckFinish = document.querySelector('.citydb-link-input-check-finish');

citydbHas.onclick = () => citydbHas.style.backgroundColor = 'white';

citydbHas.onchange = () => {
    if (citydbHas.value !== '') {
        confirmcitydb.style.display = 'initial';
        citydbTitle.textContent = `Указан город ${citydbHas.value}`;
        citydbTitle.style.color = 'green';
        citydbTitle.style.fontWeight = '800';
        citydbBr.forEach(br => br.style.display = 'none');
        localStorage.setItem('citydb', citydbHas.value);
    } else {
        confirmcitydb.style.display = 'none';
        localStorage.setItem('citydb', citydbHas.value);
    }    
}
// check to finish
confirmcitydb.onclick = () => {
        citydbBlock.style.backgroundColor = '#ADE4FF';
        document.getElementById('schoolHasCitydb').innerHTML = citydbHas.value;
        document.getElementById('schoolHasCitydb').style.backgroundColor = '#2E86C1';    
        citydbHas.disabled = true;
        confirmcitydb.style.display = 'none';
}

// ------------------------------------------------------------------
// Кнопка завершения
// ------------------------------------------------------------------

let finishBlock = document.getElementById('finish-it');
let finishButton = document.querySelector('.finish-it-button');
finishButton.textContent = 'скопировать';
finishButton.style.border = '1px solid #000';
finishButton.style.padding = '4px 8px';
finishButton.style.fontSize = '15px';
finishButton.style.textTransform = 'uppercase';
finishButton.style.cursor = 'not-allowed';
finishButton.style.borderRadius = '10px';
finishButton.style.borderColor = '#c1c1c1';
finishButton.style.backgroundColor = '#c1c1c1';
finishButton.style.opacity = '.7';
finishButton.style.color = '#fff';

finishBlock.style.display = 'flex';
finishBlock.style.justifyContent = 'space-evenly';
finishBlock.style.margin = '10px 0 20px';
finishBlock.style.position = 'sticky';
finishBlock.style.top = '-30px';
// finishBlock.style.backgroundColor = '#fff';
// finishBlock.style.border = '1px solid #000';

// ------------------------------------------------------------------
// Кнопка очистки памяти
// ------------------------------------------------------------------


// let cleanButton = document.querySelector('.clean-it-button');
// cleanButton.textContent = 'очистить память';
// cleanButton.style.border = '1px solid #000';
// cleanButton.style.padding = '4px 8px';
// cleanButton.style.fontSize = '15px';
// cleanButton.style.textTransform = 'uppercase';
// cleanButton.style.cursor = 'pointer';
// cleanButton.style.borderRadius = '10px';
// cleanButton.style.borderColor = '#c1c1c1';


// ------------------------------------------------------------------
// Вывод запроса
// ------------------------------------------------------------------

let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let result = document.querySelector('.window-result');

let line = `(
'<span id="nameString"></span>', 
'<span id="shortString"></span>', 
'<span id="yearString"></span>',
'<span id="mainLinkString"></span>', 
'<span id="requestString"></span>', 
'<span id="conditionsString"></span>', 
'../school-<span id="nameString2"></span>.html', 
'<span id="groupOneString"></span>',
'<span id="groupMonthString"></span>', 
'<span id="indiOneString"></span>',
'<span id="indiMonthString"></span>',
'<span id="oblastString"></span>', 
'<span id="okrugString"></span>', 
'<span id="metroString"></span>', 
'<span id="metroTwoString"></span>', 
'<span id="metroThreeString"></span>', 
'<span id="address1String"></span>', 
'<span id="address2String"></span>', 
'<span id="address3String"></span>', 
'<span id="address4String"></span>', 
'<span id="tel1String"></span>', 
'<span id="tel2String"></span>', 
'<span id="tel3String"></span>', 
'<span id="tel4String"></span>', 
<span id="maxGroupString"></span>, 
'<span id="titleString"></span>', 
'<span id="metaDescriptionString"></span>',
'<span id="keywordsString"></span>',
'<span id="bigTextString"></span>', 
'<span id="titleString3"></span>', 
'<span id="h2String"></span>', 
'<span id="h3String"></span>', 
'<span id="h4String"></span>', 
'/img/<span id="nameString3"></span>.webp', 
'логотип школы <span id="shortString4"></span>', 
'/img/map/<span id="nameString4"></span>.webp', 
'карта расположения школы <span id="shortString5"></span>', 
'<span id="googleMapString"></span>',
'<span id="yandexMapString"></span>',
'<span id="yandexRatingString"></span>',
'<span id="googleRatingString"></span>',
'<span id="clientCategory"></span>', 
'<span id="schoolHasLicense"></span>', 
'<span id="schoolHasNet"></span>', 
'<span id="schoolHasForeigner"></span>', 
'<span id="schoolHasCitydb"></span>',
'<span id="idString"></span>',
'<span id="schoolHasActive"></span>')
;`;


out2.innerHTML = line;

// let objToSend = [];

// function objectToSend() {

//     objToSend[0]  = localStorage.getItem('schoolName');
//     objToSend[1]  = localStorage.getItem('listName');
//     objToSend[2]  = localStorage.getItem('year');
//     objToSend[3]  = localStorage.getItem('indexLink');
//     objToSend[4]  = localStorage.getItem('indexLink');
//     objToSend[5]  = localStorage.getItem('conditionsLink');
//     objToSend[6]  = `../school-${localStorage.getItem('internalLink')}.html`;
//     objToSend[7]  = localStorage.getItem('priceGroupOne');
//     objToSend[8]  = localStorage.getItem('priceGroupMonth');
//     objToSend[9]  = localStorage.getItem('priceIndiOne');
//     objToSend[10] = localStorage.getItem('priceIndiMonth');
//     // нр
//     objToSend[11] = localStorage.getItem('oblast');
    
//     objToSend[12] = localStorage.getItem('zone');
//     objToSend[13] = localStorage.getItem('metro1');
//     objToSend[14] = localStorage.getItem('metro2');
//     objToSend[15] = localStorage.getItem('metro3');
//     objToSend[16] = localStorage.getItem('address1');
//     objToSend[17] = localStorage.getItem('address2');
//     objToSend[18] = localStorage.getItem('address3');
//     objToSend[19] = localStorage.getItem('address4');
//     // р
//     objToSend[20] = localStorage.getItem('tel1');
//     objToSend[21] = localStorage.getItem('tel2');
//     objToSend[22] = localStorage.getItem('tel3');
//     objToSend[23] = localStorage.getItem('tel4');
//     objToSend[24] = localStorage.getItem('maxGroup');
//     // нр
//     objToSend[25] = localStorage.getItem('title');
//     objToSend[26] = localStorage.getItem('metaDescription');
//     objToSend[27] = localStorage.getItem('metaKeywords');
//     objToSend[28] = localStorage.getItem('bigDescription');
//     objToSend[29] = localStorage.getItem('h1');
//     objToSend[30] = localStorage.getItem('h2');
//     objToSend[31] = localStorage.getItem('h3');
//     objToSend[32] = localStorage.getItem('h4');
//     // р
//     objToSend[31] = `/img/${localStorage.getItem('schoolName')}.webp`;
//     objToSend[32] = `логотип школы ${localStorage.getItem('listName')}`
//     objToSend[33] = `/img/map/${localStorage.getItem('schoolName')}.webp`;
//     objToSend[34] = `карта школы ${localStorage.getItem('listName')}`; 
//     // нр
//     objToSend[35] = localStorage.getItem('yandexMapLink');
//     objToSend[36] = localStorage.getItem('googleMapLink');
//     // р
//     objToSend[37] = '';
//     objToSend[38] = ''; 
//     // нр
//     objToSend[39] = localStorage.getItem('clientCategory');
//     objToSend[40] = localStorage.getItem('license'); 
//     objToSend[41] = localStorage.getItem('net');
//     objToSend[42] = localStorage.getItem('foreigNTutor'); 
//     objToSend[41] = localStorage.getItem('citydb');
//     objToSend[42] = localStorage.getItem('id'); 
//     objToSend[43] = localStorage.getItem('active');

//     let stringToSend = "INSERT INTO `catalog-school`(`name`, `list_name`, `year`, `link_index`, `link_request`, `link_conditions`, `link_internal`, `price_group`, `price_group_month`, `price_indi`, `price_indi_month`, `oblast`, `zone`, `metro`, `metro_2`, `metro_3`, `address_1`, `address_2`, `address_3`, `address_4`, `tel_1`, `tel_2`, `tel_3`, `tel_4`, `group_max`, `title`, `meta_description`, `meta_keywords`, `big_description`, `h1`, `h2`, `h3`, `h4`, `logo`, `logo_alt`, `map`, `map_alt`, `google-map-link`, `yandex-map-link`, `search_yandex_rating`, `search_google_rating`, `client_category`, `license`, `one_or_net`, `foreign_tutor`, `city`, `id`, `active`) VALUES" + `(${JSON.stringify(objToSend).slice(1, JSON.stringify(objToSend).length -1)})`;

//     localStorage.setItem('stringToSend', stringToSend);

//     window.open("send-query.html", "", `scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
//     width=1000,height=600,left=0,top=0`);


//     let string = "string";
//     let data = stringToSend;
//     document.cookie = encodeURIComponent(string) + '=' + encodeURIComponent(data);
//     console.log(decodeURIComponent(document.cookie).substring(667));

//     // localStorage.clear();
// }

finishButton.onclick = () => {
    // objectToSend();
    // console.log(out2.textContent);

    var range = document.createRange();
    range.selectNode(out2); //changed here
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    window.open('https://t.me/rodion_slp')
    

    // out2.execCommand('copy');


    let modalWindow = document.createElement('div');
    let container = document.querySelector('.container');
    modalWindow.style.width = '450px';
    modalWindow.classList.add('modal-window')
    modalWindow.style.height = '160px';
    // modalWindow.style.border = '1px solid #000';
    modalWindow.style.position = 'relative';
    modalWindow.style.zIndex = '99999';
    modalWindow.style.backgroundColor = '#fff';
    modalWindow.style.margin = '0 auto';
    modalWindow.style.boxShadow = `0px 5px 10px 2px rgba(34, 60, 80, 0.2)`;
    container.prepend(modalWindow);
    let modalWindowText = document.createElement('span');
    modalWindowText.style.width = '83%';
    modalWindowText.style.height = '33%';
    modalWindowText.style.adjustText = 'center';
    modalWindowText.style.margin = '15% auto 0';
    modalWindowText.style.padding = '9% 3% 0';
    modalWindowText.textContent = 'Продолжить заполнение следующего филиала?'
    // modalWindowText.style.border = '1px solid #000';
    modalWindowText.style.display = 'block';
    modalWindowText.style.textAlign = 'center';
    modalWindow.prepend(modalWindowText);
    let modalWindowButtonBox = document.createElement('div');
    modalWindowButtonBox.style.width = '83%';
    modalWindowButtonBox.style.height = '15%';
    // modalWindowButtonBox.style.border = '1px solid #000';
    modalWindowButtonBox.style.margin = '0 auto 0';
    modalWindowButtonBox.style.display = 'flex';
    modalWindowButtonBox.style.flexDirection = 'row';
    modalWindowButtonBox.style.justifyContent = 'space-around';
    // modalWindowButtonBox.style.minWidth = '250px';
    modalWindow.append(modalWindowButtonBox);
    let modalWindowButtonYes = document.createElement('div');
    modalWindowButtonYes.style.width = '40%';
    modalWindowButtonYes.style.height = '100%';
    modalWindowButtonYes.style.border = '1px solid #95A5A6';
    modalWindowButtonYes.textContent = 'Завершить';
    modalWindowButtonYes.style.display = 'flex';
    modalWindowButtonYes.style.lineHeight = '1.5';
    modalWindowButtonYes.style.justifyContent = 'center';
    modalWindowButtonYes.style.cursor = 'pointer';
    modalWindowButtonYes.id = 'continue-adding';
    modalWindowButtonYes.style.backgroundColor = '#EAEDED';
    modalWindowButtonBox.prepend(modalWindowButtonYes);
    let modalWindowButtonNo = document.createElement('div');
    modalWindowButtonNo.style.width = '40%';
    modalWindowButtonNo.style.height = '100%';
    modalWindowButtonNo.style.border = '1px solid #95A5A6';
    modalWindowButtonNo.textContent = 'Продолжить';
    modalWindowButtonNo.style.display = 'flex';
    modalWindowButtonNo.style.lineHeight = '1.5';
    modalWindowButtonNo.style.justifyContent = 'center';
    modalWindowButtonNo.style.cursor = 'pointer';
    modalWindowButtonNo.id = 'finish-adding';
    modalWindowButtonNo.style.backgroundColor = '#EAEDED';
    modalWindowButtonBox.prepend(modalWindowButtonNo);
    let mWindow = document.querySelectorAll('.modal-window');
    if (mWindow.length > 1 ) mWindow[1].remove();
    let buttonNo = document.getElementById('continue-adding');
    let buttonYes = document.getElementById('finish-adding');
    buttonNo.onclick = () => {
        localStorage.clear();
        window.location.reload();
        // (function () {
        //     let cookies = document.cookie.split("; ");
        //     for (let c = 0; c < cookies.length; c++) {
        //         let d = window.location.hostname.split(".");
        //         while (d.length > 0) {
        //             let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        //             let p = location.pathname.split('/');
        //             document.cookie = cookieBase + '/';
        //             while (p.length > 0) {
        //                 document.cookie = cookieBase + p.join('/');
        //                 p.pop();
        //             };
        //             d.shift();
        //         }
        //     }
        // })();
    }
    buttonYes.onclick = () => {
        mWindow[0].remove();

        cityBlock.remove();
        mainBlock.remove();
        conditionsBlock.remove();
        schoolNameBlock.remove();
        yearOfOriginBlock.remove();
        pricesForLessonsBlock.remove();
        maxClientsBlock.remove();
        ageBlock.remove();
        licenseBlock.remove();
        netBlock.remove();
        foreignerBlock.remove();
        citydbBlock.remove();
        hideLogoWhenFilial.remove();
        cityRegionBlock.remove();

        // название для бд
        nameBdTitle.innerHTML = 'Необходимо обновить название БД';
        nameBdTitle.style.color = 'red';
        nameLine.disabled = true;
        bdBlock.style.backgroundColor = 'transparent';

        for (let i = 0; i < metroLineLatin.length; i++) {
            if (nameLine.value.includes(metroLineLatin[i].value)) {
                let cleanIt = nameLine.value.substr(0, nameLine.value.length - metroLineLatin.value.length)
                nameLine.value = cleanIt;
                nameLine6.value = cleanIt;
            }
            
        }

        // адрес 
        address1Line.style.backgroundColor = 'red';
        addressBlock.style.backgroundColor = 'transparent';
        address1Line.disabled = false;
        addresTitle.textContent = 'Добавте адрес';
        addresTitle.style.color = 'red';
        address1Line.value = '';
        confirmMap.style.display = 'initial';
        checkMapIsReady.checked = false;
        checkConverting.checked = false;
        logoAndMapBlock.style.backgroundColor = 'transparent';
        mapLoaderLink.style.backgroundColor = '#f1f1f1';
        mapLoaderLink.style.color = '#000';
        mapLoaderLink.style.border = '1px solid #000';
        checkMapIsReadyWords.style.color = 'red';
        checkMapIsReadyWords.textContent = 'Подтвердить сохранение';
        betweenMapLogoTwo.forEach(br => br.style.display = 'initial');
        nameLine6.disabled = false;
        checkMapIsReadyWords.style.display = 'initial';
        useNameMap.style.display = 'none';
        prepareMapTitle.textContent = 'Используйте это название при сохранении карты. Метро должно совпадать с указанным в поле!';
        prepareMapTitle.style.color = 'red';
        prepareMapTitle.style.display = 'initial';
        betweenMapLogoTwoAfter.forEach(br => br.style.display = 'initial');
        confirmAddress.style.display = 'initial';
        addressCheckIfFinish.checked = false;

        
        // yandex ссылка
        yandexMapBlock.style.display = 'none';
        yandexLinkName.innerHTML = '<br>Подготовьте ссылку!<br>';
        yandexLinkName.style.color = 'red';
        yandexWantBeBright.style.backgroundColor = 'transparent';
        yandexMapLine.value = '';
        yandexMapLine.style.backgroundColor = 'red';


        // goodle ссылка
        googleMapBlock.style.display = 'none';
        googleLinkName.innerHTML = '<br>Подготовьте ссылку!<br>';
        googleLinkName.style.color = 'red';
        googleWantBeBright.style.backgroundColor = 'transparent';
        googleMapLine.value = '';
        googleMapLine.style.backgroundColor = 'red';



        // телефон
        tel2.style.display = 'none';
        telBlock.style.backgroundColor = 'transparent';
        tel1Line.disabled = false;
        tel1Line.value = '';
        tel1Line.style.backgroundColor = 'red';
        telTitle1.textContent = 'Введите номер телефона'; 
        telTitle1.style.color = 'red';
        tel2Line.disabled = false;
        tel2Line.value = '';
        telTitle2.textContent = 'Введите номер телефона'; 
        telTitle2.style.color = 'red'; 
        tel2Line.style.backgroundColor = 'red';
        checkIfNoNumber.style.display = 'none';
        textIfNoNumber.style.display = 'none';
        brIfNoTel.forEach(br => br.style.display = 'none');
        disappearWhenSecond.forEach(br => br.style.display = 'initial');
        whenFilialAdded.style.display = 'initial';
        telInfoSet1.style.display = 'initial';
        telInfoSet2.style.display = 'initial';
        telInfoSet1.innerHTML = '';
        telInfoSet2.innerHTML = '';

        // Заголовок страницы
        titleLine.disabled = false;
        titleLine.style.backgroundColor = 'red';
        titleLine.style.backgroundColor = 'white';
        titleLineResult.style.display = 'initial'; 
        titleLineResult.style.backgroundColor = 'white';
        titleLineResult.disabled = false;
        confirmTitle.style.display = 'initial';
        brAfterClickOnConfirm.forEach(br => br.style.display = 'initial');
        titleBlock.style.backgroundColor = 'transparent';
        checkboxThatReady.disabled = false;
        titleTextThatReady.style.color = 'green';
        titleTextThatReady.textContent = 'Подтвердить';
        confirmTitle.style.display = 'initial';
        checkboxThatReady.style.display = 'none';
        titleInputText.style.display = 'initial';
        titleInputText.style.color = 'red';
        titleInputText.textContent = `Ведите новый заголовок. Он должен отличаться от предыдущего! Сейчас (${titleLine.value.length} символов)`;
        titleInputText.style.color = 'black';
        confirmTitle.checked = false;

        // meta-description
        metaDescrCheckReadyAfterEditFinish.checked = false
        metaDescrCheckEdit.style.display = 'initial';
        metaDescrTextEdit.style.display = 'initial';
        metaDescrCheckReady.style.display = 'initial';
        metaDescrTextReady.style.display = 'initial';
        metaDescrCheckSymbolsNumberCheckbox.style.display = 'initial';
        metaDescrCheckSymbolsNumberText.style.display = 'initial';
        metaBr.forEach(br => br.style.display = 'none');
        metaDescrTitleText.textContent = 'Обновите текст'; 
        metaDescrTitleText.style.color = 'red';
        metaBlock.style.backgroundColor = 'transparent';
        metaDescrTextReadyAfterEditCountSymbols.style.display = 'initial';
        metaDescrTextReadyAfterEdit.style.display = 'initial';
        metaDescrCheckReadyAfterEdit.style.display = 'initial';
        metaDescrCheckReadyAfterEditFinish.style.display = 'initial';
        metaDescrTextReadyAfterEditFinish.style.display = 'initial';
        metaDescrInputEdit.style.display = 'initial';
        checkSymbolsNumber.style.display = 'initial';
        metaDescrTitlePrelimRes.style.display = 'initial';
        metaDescrTitlePrelimRes.style.display = 'none';
        // checkSymbolsNumber.style.display = 'none';
        checkSymbolsNumber.style.display = 'none';
        metaDescrTextReadyAfterEditCountSymbols.textContent = ''; 
        metaDescrTextReadyAfterEdit.textContent = 'Обновить';
        metaDescrTextReadyAfterEditFinish.textContent = 'Подтвердить изменения';
        metaDescrTextReadyAfterEditFinish.style.color = 'green';
        metaDescrCheckReadyAfterEditFinish.checked = false;

        // H1 страницы
        titleLine3TextReady.style.display = 'initial';
        title3Title.textContent = 'Описание должно быть от 40 и до 70 знаков';
        titleLine3.style.backgroundColor = 'white';
        titleLine3.disabled = false;
        titleLine3.value = '';
        titleLine3.style.backgroundColor = 'red';
        title3Title.textContent = 'Начните вводить h1';
        title3Title.style.color = 'red';
        title3Block.style.backgroundColor = 'transparent';
        titleLine3Counter.style.display = 'initial';
        titleLineBr.forEach(br=> br.style.display = 'initial');
        title3InputBr.forEach(br => br.style.display = 'initial');
        titleLine3TextReady.textContent = 'H1 не готов'
        titleLine3TextReady.style.color = 'red';
        titleLine3Counter.textContent = `Количество ${titleLine3.value.length}/ 70 символов.`;
        titleLine3CheckReady.disabled = true;
        titleLine3CheckReady.checked = false;
        titleLine3Confirm.style.display = 'initial';

        // H2 страницы
        showh2.style.display = 'initial';
        titleLineh2TextReady.style.display = 'initial';
        titleLineh2.style.backgroundColor = 'red';
        titleLineh2.disabled = false;
        titleh2Title.textContent = 'Измените текст, чтобы он отличался от последней версии!';
        titleh2Title.style.color = 'red';
        titleh2Block.style.backgroundColor = 'transparent';
        titleLineh2Counter.style.display = 'initial';
        titleLineh2CheckReady.disabled = false;
        titleh2InputBr.forEach(br => br.style.display = 'initial');
        titleLineh2CheckReady.checked = false;
        titleLineh2CheckReady.disabled = true;

        // H3 страницы
        showh3.style.display = 'initial';
        titleLineh3TextReady.style.display = 'initial';
        titleLineh3.style.backgroundColor = 'red';
        titleLineh3.disabled = false;
        titleh3Title.textContent = 'Измените текст, чтобы он отличался от последней версии!';
        titleh3Title.style.color = 'red';
        titleh3Block.style.backgroundColor = 'transparent';
        titleLineh3Counter.style.display = 'initial';
        titleLineh3CheckReady.disabled = false;
        titleh3InputBr.forEach(br => br.style.display = 'initial');
        titleLineh3CheckReady.checked = false;
        titleLineh3CheckReady.disabled = true;

        // H4 страницы
        showh4.style.display = 'initial';
        titleLineh4TextReady.style.display = 'initial';
        titleLineh4.style.backgroundColor = 'red';
        titleLineh4.disabled = false;
        titleh4Title.textContent = 'Измените текст, чтобы он отличался от последней версии!';
        titleh4Title.style.color = 'red';
        titleh4Block.style.backgroundColor = 'transparent';
        titleLineh4Counter.style.display = 'initial';
        titleLineh4CheckReady.disabled = false;
        titleh4InputBr.forEach(br => br.style.display = 'initial');
        titleLineh4CheckReady.checked = false;
        titleLineh4CheckReady.disabled = true;

        // школа работает
        activeTitle.textContent = 'Выберите работает ли филиал';
        activeTitle.style.color = 'black';
        confirmactive.style.display = 'initial';
        activeBlock.style.backgroundColor = 'transparent';
        activeHas.disabled = false;
        activeHas.style.backgroundColor = 'red'; 

        // meta keywords
        keyWordFinishCheck.disabled = false;
        keyWordFinishCheck.checked = false;
        keyWordBlock.style.backgroundColor = 'transparent';
        keyWordButton.forEach(button => {
            button.disabled = false;
            keyWordBr.forEach(br => br.style.display = 'initial');
            confirmFinishKeyWords.style.display = 'initial';
        })
        keyWordButton.forEach(button => {
            button.checked = false;
        })
        keyWordArr = [];
        confirmFinishKeyWords.style.display = 'none';
        keyWordString = keyWordArr.join(', ');

        // Описание школы
        textAboutSchool.style.backgroundColor = 'red'; 
        checkIfSchoolTextIsReady.checked = true;
        textBlock.style.backgroundColor = 'transparent';
        labelOfTextAboutSchool.textContent = 'Дайте описание';
        labelOfTextAboutSchool.style.color = 'red';
        textAboutSchool.disabled = false;
        textAboutSchool.value = '';
        textBr.forEach(br => br.style.display = 'initial');
        mustIncludeAboutSchoolTitle.style.display = 'initial';
        mustIncludeAboutSchoolTextOne.style.display = 'initial';
        mustIncludeAboutSchoolTextTwo.style.display = 'initial';
        mustIncludeAboutSchoolTextThree.style.display = 'initial';
        mustIncludeAboutSchoolTextFour.style.display = 'initial';
        mustIncludeAboutSchoolTextFive.style.display = 'initial';
        mustIncludeAboutSchoolTextSix.style.display = 'initial';
        mustIncludeAboutSchoolTextSeven.style.display = 'initial';
        mustIncludeAboutSchoolTextEight.style.display = 'initial';
        mustIncludeAboutSchoolTextNine.style.display = 'initial';
        mustIncludeAboutSchoolTextTen.style.display = 'initial';
        mustIncludeAboutSchoolTextEleven.style.display = 'initial';
        textIfSchoolTextIsReady.style.display = 'initial';
        textCounter.style.display = 'initial';
        mustIncludeAboutSchoolCheckOne.checked      = false; 
        mustIncludeAboutSchoolCheckTwo.checked      = false; 
        mustIncludeAboutSchoolCheckThree.checked    = false; 
        mustIncludeAboutSchoolCheckFour.checked     = false; 
        mustIncludeAboutSchoolCheckFive.checked     = false; 
        mustIncludeAboutSchoolCheckSix.checked      = false; 
        mustIncludeAboutSchoolCheckSeven.checked    = false; 
        mustIncludeAboutSchoolCheckEight.checked    = false; 
        mustIncludeAboutSchoolCheckNine.checked     = false; 
        mustIncludeAboutSchoolCheckTen.checked      = false; 
        mustIncludeAboutSchoolCheckEleven.checked   = false;
        checkIfSchoolTextIsReady.checked            = false;
        textIfSchoolTextIsReady.textContent = 'не готово';
        textIfSchoolTextIsReady.style.color = 'red'; 
        mustIncludeAboutSchoolTitle.style.color = '#000';
        textCounter.style.color = '#000';

       // id школы в БД
        idLine.style.backgroundColor = 'red';
        idLineText.textContent = 'Заполните ID';
        idLineText.style.color = 'red';
        idBlock.style.backgroundColor = 'initial';
        idLine.disabled = false;
        idLineTitle.textContent = 'Плюc один к указанному';
        idLineTitle.style.color = 'red';
        idLineText.textContent = 'Подтвердить';
        confirmID.style.display = 'initial';
        console.log();

        // метро
        // регион обработки
        okrugLine.style.backgroundColor = 'red';
        metroLine.style.backgroundColor = 'red';
        metroLineText.textContent = 'Еще раз выберите метро';
        metroTwo.style.backgroundColor = 'red';
        metroTwoText.textContent = 'Еще раз выберите метро 2';
        metroThree.style.backgroundColor = 'red';
        metroThreeText.textContent = 'Еще раз выберите метро 3';
        otherCity.disabled = false;
        cityBlock.style.backgroundColor = 'transparent';
        colorMoscowBlock.style.backgroundColor = 'transparent';
        confirmMetro.style.display = 'none';
        okrugLine.disabled = false;
        okrugLine.value = '0';
        metroLineText.textContent = 'Заполните поле'
        metroLineText.style.color = 'red';
        metroLine.disabled = false;
        metroLine.value = '';
        metroTwoText.textContent = 'Заполните поле';
        metroTwoText.style.color = 'red';
        metroTwo.disabled = false;
        metroTwo.value = '';
        metroThreeText.textContent = 'Заполните поле';
        metroThreeText.style.color = 'red';
        metroThree.disabled = false;
        metroThree.value = '';
        
        // файл 
        newFileBlock.style.backgroundColor = 'transparent';
        btnCreateNewFile.style.border = '1px solid #000';
        btnCreateNewFile.style.color = '#000';
        btnCreateNewFile.textContent = 'создать новый файл';
    };
    

    // поставьте пробел в названии школы выше
}

// function selectText(containerid) {
//     if (document.selection) { // IE
//         let range = document.body.createTextRange();
//         range.moveToElementText(document.getElementById(containerid));
//         range.select();
//     } else if (window.getSelection) {
//         let range = document.createRange();
//         range.selectNode(document.getElementById(containerid));
//         window.getSelection().removeAllRanges();
//         window.getSelection().addRange(range);
//     }
// }

// finishButton.addEventListener('click', () => {
//     selectText('selectable')
// })
