const articlesList = document.getElementById("articles-list");
const articleTemplate = document.getElementById("article-template").content;

let prevPage = 0;
let page = 1;

async function getArticles() {
    if (prevPage === page) return;        
    prevPage = page;

    let url = "/api/articles";
    url += `?page=${page}`;
    console.log(`GET ${url}`);

    let response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/json" },
        cache: "no-store"
    });
    if (response.ok === true) {
        let articles = await response.json();
        articles.forEach((article, index) => {
            let articleHref = `/articles/${article.articleId}`;
            let articleTitle = article.title;
            let articleDescription = article.description;            
            let articleClone = articleTemplate.cloneNode(true);
            if (index === 0 && page === 1) {
                articleClone.getElementById("article_hr").style.display = "none";
            }      
            articleClone.getElementById("article_a").setAttribute("href", articleHref);
            articleClone.getElementById("article-title").textContent = articleTitle;
            articleClone.getElementById("article-description").textContent = articleDescription;
            articlesList.appendChild(articleClone);
        });
        if (articles.length === 10) page++;
    }
}
getArticles();

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight - document.documentElement.clientHeight - 100) {
        getArticles();
    }
});
