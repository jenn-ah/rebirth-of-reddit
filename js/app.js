
apiRequest('http://www.reddit.com/r/oddlysatisfying.json', refactorData);

function apiRequest(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    const redData = JSON.parse(this.responseText);
    const rawChildren = redData.data.children;
    rawChildren.map(function (article) {
      return {
        title: article.data.title,
        author: article.data.author,
        date: decodeDate(article),
        views: article.data.view_count,
        read: article.data.selftext
    }
    });
  });
  xhr.open('GET', url);
  xhr.send();
}

const containerDiv = document.getElementById('container');
const artDiv = document.getElementById('articleDiv');


function decodeDate (element) {
  const decodeDate = new Date(element.data.created_utc * 1000);
  const date = decodeDate.toLocaleDateString();
  return date;
};

//function to refactor data from reddit
// function refactorData() {
//   const redData = JSON.parse(this.responseText);
//   const newData = redData.data.children;

//   newData.forEach(element => {

//     console.log(element.data);
//   });


//   const redTitle = document.createElement('title');
//   redTitle.className = 'titles';
//   redData.data.children.forEach(element => {
//     redTitle.innerHTML = 'title: ' + element.data.title;
//   });
//   articleDiv.appendChild(redTitle);

//   const redAuthor = document.createElement('p');
//   redAuthor.className = 'authors';
//   redData.data.children.forEach(element => {
//     redAuthor.innerHTML = 'author: ' + element.data.author;
//   });
//   articleDiv.appendChild(redAuthor);

//   const redDate = document.createElement('p');
//   redDate.className = 'dates';
//   redData.data.children.forEach(element => {
//     const decodeDate = new Date(element.data.created_utc * 1000);
//     const date = decodeDate.toLocaleDateString();
//     redDate.innerHTML = 'date: ' + date;
//   });
//   articleDiv.appendChild(redDate);

//   const redViews = document.createElement('p');
//   redViews.className = 'views';
//   redData.data.children.forEach(element => {
//     redViews.innerHTML = 'view count: ' + element.data.view_count;
//   });
//   articleDiv.appendChild(redViews);


//   const redExcerpt = document.createElement('p');
//   redExcerpt.className = 'excerpts';
//   redData.data.children.forEach(element => {
//     redExcerpt.innerHTML = 'article: ' + element.data.selftext;
//   });
//   articleDiv.appendChild(redExcerpt);
//   containerDiv.appendChild(articleDiv);


//   console.log(redData.data.children);
// }


// function createElems(item, itemClass) {
//   item.className = itemClass;

// }

// function buildCard () {

// };