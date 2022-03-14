let articles = document.getElementById("articles");
let articleTemplate = document.getElementById("article_template").content;

/*
Вакцинирование питомцев
/articles/vaccination-of-pets.html
Вакцинация – профилактическая мера, направленная на формирование у домашних животных стойкого иммунитета к инфекционным заболеваниям.
*/
{
    let articleClone = articleTemplate.cloneNode(true);
    let articleTitle = "Вакцинирование питомцев";
    let articleHref = "/pages/articles/vaccination-of-pets.html";
    let articleDescription = "Вакцинация – профилактическая мера, направленная на формирование у домашних животных стойкого иммунитета к инфекционным заболеваниям.";
    
    // if (idx === 0)
    articleClone.getElementById("article_hr").style.display = "none";

    articleClone.getElementById("article_a").setAttribute("href", articleHref);
    articleClone.getElementById("article_title").textContent = articleTitle;
    articleClone.getElementById("article_description").textContent = articleDescription;
    articles.appendChild(articleClone);
}