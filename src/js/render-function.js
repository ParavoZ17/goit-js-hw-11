const createLoading = document.createElement('p');
createLoading.innerHTML = 'Loading images, please wait...';
createLoading.className = 'loading';

const createImgCardItem = (img, key) => {
  const imgInfoItem = document.createElement('div');
  const itemTitle = document.createElement('span');
  const itemValue = document.createElement('span');
  imgInfoItem.className = 'imgInfoItem';
  itemTitle.className = 'item';
  itemValue.className = 'item';
  itemTitle.className = 'itemTitle';
  itemValue.className = 'itemValue';
  itemTitle.innerHTML = key;
  itemValue.innerHTML = img[key];
  imgInfoItem.appendChild(itemTitle);
  imgInfoItem.appendChild(itemValue);

  return imgInfoItem;
};

const createImgCard = (img) => {
  const link = document.createElement('a');
  const imgCard = document.createElement('div');
  const image = document.createElement('img');
  const imgInfo = document.createElement('div');
  link.className = 'gallery-link';
  link.href = img.largeImageURL;
  link.append(image);
  imgCard.className = 'imgCard gallery-item';
  image.className = 'gallery-image imgBox';
  image.alt = img.tags;
  image.src = img.webformatURL;
  imgInfo.className = 'imgInfo';
  link.appendChild(image);
  imgCard.append(link);
  imgCard.appendChild(imgInfo);
  imgInfo.appendChild(createImgCardItem(img, 'likes'));
  imgInfo.appendChild(createImgCardItem(img, 'views'));
  imgInfo.appendChild(createImgCardItem(img, 'comments'));
  imgInfo.appendChild(createImgCardItem(img, 'downloads'));

  return imgCard;
};

export default {
  createLoading,
  createImgCard,
};