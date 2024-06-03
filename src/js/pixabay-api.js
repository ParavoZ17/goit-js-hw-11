const PIXABAY_KEY = '44174782-27b27c44e5570cc8c29375d58';

const getImages = (text) => {
  return fetch(`https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${text}
&image_type=photo&orientation=horizontal&safesearch=true`);
};

export default {
  getImages,
};
