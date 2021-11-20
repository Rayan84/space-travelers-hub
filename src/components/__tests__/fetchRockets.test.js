import '@testing-library/jest-dom/extend-expect';
import fetchRockets from './fetchRocketsTesting';

describe('test fetching rockets', () => {
  it('test fetching rocket name', async () => {
    await fetchRockets().then((rockets) => {
      expect(rockets[0].name).toBe('name1');
    });
  });

  it('test fetching rocket img', async () => {
    await fetchRockets().then((rockets) => {
      expect(rockets[0].img).toBe('image_URL1');
    });
  });

  it('test fetching rocket description', async () => {
    await fetchRockets().then((rockets) => {
      expect(rockets[0].desc).toBe('some text1');
    });
  });

  it('test fetching rocket id', async () => {
    await fetchRockets().then((rockets) => {
      expect(rockets[0].id).toBe(1);
    });
  });
});
