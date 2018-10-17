
apiRequest('funny');
//apiRequest('todayilearned');
//apiRequest('interestingasfuck');

const containerDiv = document.getElementById('container');
const headerNavButtons = document.getElementsByClassName('headerNav');
const clickButtons = document.getElementsByClassName('buttons');
const clearContainer = document.createElement('div');

//api request function
function apiRequest(subred, method = 'GET') {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {

    const redData = JSON.parse(this.responseText);
    const rawChildren = redData.data.children;
    const cleaned = rawChildren.map(function (article) {
      return {
        image: article.data.thumbnail,
        title: article.data.title,
        author: article.data.author,
        date: decodeDate(article),
        read: article.data.selftext
      }
    });
    containerDiv.innerHTML = "";
    const cards = cleaned.forEach(function (element) {
      return buildCard(element);
    });
  });

  xhr.open(method, `https://www.reddit.com/r/${subred}.json`);
  xhr.send();
}

//decoding date function
function decodeDate(element) {
  const decodeDate = new Date(element.data.created_utc * 1000);
  const date = decodeDate.toLocaleDateString();
  return date;
};


//building cards function
function buildCard(element) {
  //const articleElem = document.createElement('div');
  //articleElem.className = 'article';
  const bodyElem = document.createElement('div');
  bodyElem.className = 'bodyEl';
  containerDiv.appendChild(bodyElem);

  // const redHead = document.createElement('div');
  // redHead.className = 'heads';
  // bodyElem.appendChild(redHead);

  const redImg = document.createElement('img');
  redImg.className = 'images';
  redImg.src = element.image;
  //redImg.addEventListener('click', (elem) => {

  //});
  bodyElem.appendChild(redImg);


  const redTitle = document.createElement('p');
  redTitle.className = 'titles';
  redTitle.innerHTML = element.title;
  bodyElem.appendChild(redTitle);

  const redAuthor = document.createElement('p');
  redAuthor.className = 'authors';
  redAuthor.innerHTML = element.author;
  bodyElem.appendChild(redAuthor);

  const redDate = document.createElement('p');
  redDate.className = 'dates';
  redDate.innerHTML = element.date;
  bodyElem.appendChild(redDate);

  const redExcerpt = document.createElement('p');
  redExcerpt.className = 'excerpts';
  redExcerpt.innerHTML = textValidation(element.read);
  bodyElem.appendChild(redExcerpt);


  containerDiv.appendChild(bodyElem);
  
  return bodyElem;

};

// function imgValidation (elem) {
// if (elem === null || elem === '' || elem === undefined) {
//   return 'element has no thumbnail';
// } else {
//   return elem;
//   }
// };

function textValidation(elem) {
  if (elem === '') {
    return 'Article has no text input.'
  } else {
    return elem;
  }
}

const funnyButton = document.getElementById('funnyButton');
funnyButton.addEventListener('click', () => {
  return apiRequest('funny');
});

const intAFButton = document.getElementById('inAFButton');
intAFButton.addEventListener('click', () => {
  return apiRequest('interestingasfuck');
});

const oddlySatisButton = document.getElementById('oddlySatis');
oddlySatisButton.addEventListener('click', () => {
  return apiRequest('oddlysatisfying');
});

