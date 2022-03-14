function validate(input, message, func) {
    if (input.validity.valid) {
        input.className = "";
        message.className = "";
        message.textContent = "";
    } else {
        input.className = "input-error";
        message.className = "message-error";
        func(input, message);
    }
}

//#region Имя
function nameError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Введите имя";
    } else if (input.validity.tooShort) {
        message.textContent = "Минимальная длина: 2 символа";
    } else if (input.validity.patternMismatch) {
        message.textContent = "Допустимые символы: русский алфавит. Первая буква - заглавная, остальные буквы - строчные";
    }
}
//#endregion

//#region Год рождения
{
    const year = document.getElementById("birth-year");
    year.setAttribute("max", new Date().getFullYear());
}
function birthYearError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Введите год рождения";
    } else if (input.validity.rangeUnderflow) {
        message.textContent = `Самый ранний год: ${input.min}`;
    } else if (input.validity.rangeOverflow) {
        message.textContent = `Самый поздний год: ${input.max}`;
    } else if (!input.validity.valid) {
        message.textContent = "Недопустимый формат";
    }
}
//#endregion

//#region Дата прибытия в приют
{
    const date = document.getElementById("arrival-date");
    const now = new Date();
    date.setAttribute("max", `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
}
function arrivalDateError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Введите дату прибытия в приют";
    } else if (input.validity.rangeUnderflow) {
        message.textContent = `Самая ранняя дата: ${new Date(input.min).toLocaleDateString()}`;
    } else if (input.validity.rangeOverflow) {
        message.textContent = `Самая поздняя дата: ${new Date(input.max).toLocaleDateString()}`;
    }
}
//#endregion

//#region Изображение
function imageError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Выберите изображение";
    }    
}
function validFileSize(input) {
    // 512 Кбайт = 524288 байт
    if (input.files[0].size >= 524288) {
        return false;
    }        
    return true;
}
//#endregion

//#region О питомце
function aboutError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Введите информацию о питомце";
    } else if (input.validity.tooShort) {
        message.textContent = "Минимальная длина: 30 символов";
    }
}
//#endregion

//#region Телефон
function telError(input, message) {
    if (input.validity.tooShort) {
        message.textContent = "Минимальная длина: 11 символов";
    } else if (input.validity.patternMismatch) {
        message.textContent = "Допустимый формат: 8XXXXXXXXXX";
    }
}
//#endregion

//#region Электронная почта
function emailError(input, message) {
    if (input.validity.tooShort) {
        message.textContent = "Минимальная длина: 5 символов";
    } else if (input.validity.typeMismatch | input.validity.patternMismatch) {
        message.textContent = "Допустимый формат: email@mail.ru";
    }
}
//#endregion

//#region form
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
    const inputs = Array.from(form.getElementsByTagName("input"));
    inputs.push(document.getElementById("about"));
    for (const input of inputs) {
        const message = document.getElementById(`${input.id}-error`);
        switch (input.id) {
            case "name":                       
                validate(input, message, nameError);
                break;
            case "birth-year":                       
                validate(input, message, birthYearError);
                break;
            case "arrival-date":                       
                validate(input, message, arrivalDateError);
                break;
            case "image":
                validate(input, message, imageError);
                if (input.validity.valid) {
                    if (validFileSize(input)) {
                        input.className = "";
                        message.className = "";
                        message.textContent = "";
                    } else {
                        input.className = "input-error";
                        message.className = "message-error";
                        message.textContent = "Выберите изображение размером менее 512 Кбайт";
                    }
                }
                break;
            case "about":                       
                validate(input, message, aboutError);
                break;
            case "tel":                       
                validate(input, message, telError);
                break;
            case "email":                       
                validate(input, message, emailError);
                break;
        }
        if (!input.validity.valid) {
            event.preventDefault();
        }
    }
});
//#endregion