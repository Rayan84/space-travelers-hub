import fetchData from '../__mocks__/http';

const fetchRockets = () => fetchData().then((rockets) => {
  const selectedData = [];
  rockets.forEach((rocket) => {
    selectedData.push({
      id: rocket.id,
      name: rocket.rocket_name,
      img: rocket.flickr_images,
      desc: rocket.description,
    });
  });
  return selectedData;
});

export default fetchRockets;
