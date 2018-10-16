
apiRequest('http://www.reddit.com/r/oddlysatisfying.json', oddlyDiv);

function apiRequest(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', cb);
  xhr.open('GET', url);
  xhr.send();
}

const containerDiv = document.getElementById('container');
const artDiv = document.getElementById('articleDiv');

// function oddlyDiv() {
//   const redData = JSON.parse(this.responseText);
//   const oddElem = document.getElementById('OddlySatisfying')
//   oddElem.className = 'oddTitle';
//   oddElem.innerHTML = redData.data.children[0].data.title;
//   containerDiv.appendChild(oddElem);

//   const oddUser = document.createElement('p');
//   oddUser.innerHTML = 'by: ' + redData.data.children[0].data.author;
//   containerDiv.append(oddUser);

//   const decodeDate = new Date(redData.data.children[0].data.created_utc * 1000);
//   const date = decodeDate.toLocaleDateString();
//   const oddDate = document.createElement('p');
//   oddDate.innerHTML = date;
//   containerDiv.append(oddDate);

//   const oddViews = document.createElement('p');
//   oddViews.innerHTML = 'Views ' + redData.data.children[0].data.view_count;
//   containerDiv.append(oddViews);

//   const oddExcerpt = document.createElement('p');
//   oddExcerpt.innerHTML = 'Read more...' + redData.data.children[0].data.selftext;
//   containerDiv.append(oddExcerpt);

//   console.log(redData.data.children);
//   console.log(oddViews);

// }

//refactoring object

function oddlyDiv() {
  const redData = JSON.parse(this.responseText);
  //const title = redData.data.children[0].data.title;
  const redTitle = document.createElement('title');
  redTitle.className = 'titles';
  redData.data.children.forEach(element => {
    redTitle.innerHTML = 'title: ' + element.data.title;
  });
  articleDiv.appendChild(redTitle);

  const redAuthor = document.createElement('p');
  redAuthor.className = 'authors';
  redData.data.children.forEach(element => {
    redAuthor.innerHTML = 'author: ' + element.data.author;
  });
  articleDiv.appendChild(redAuthor);

  const redDate = document.createElement('p');
  redDate.className = 'dates';
  redData.data.children.forEach(element => {
    const decodeDate = new Date(element.data.created_utc * 1000);
    const date = decodeDate.toLocaleDateString();
    redDate.innerHTML = 'date: ' + date;
  });
  articleDiv.appendChild(redDate);

  const redViews = document.createElement('p');
  redViews.className = 'views';
  redData.data.children.forEach(element => {
    redViews.innerHTML = 'view count: ' + element.data.view_count;
  });
  articleDiv.appendChild(redViews);


  const redExcerpt = document.createElement('p');
  redExcerpt.className = 'excerpts';
  redData.data.children.forEach(element => {
    redExcerpt.innerHTML = 'article: ' + element.data.selftext;
  });
  articleDiv.appendChild(redExcerpt);
  containerDiv.appendChild(articleDiv);


  console.log(redExcerpt);
}
