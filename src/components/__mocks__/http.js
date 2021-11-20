const fetchData = () => Promise.resolve([
  {
    id: 1,
    rocket_name: 'name1',
    description: 'some text1',
    flickr_images: 'image_URL1',
  },
  {
    id: 2,
    rocket_name: 'name2',
    description: 'some text2',
    flickr_images: 'image_URL2',
  },
]);

export default fetchData;
