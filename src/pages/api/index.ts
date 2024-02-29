export async function fetchAnimeData() {
  try {
    const response = await fetch('https://kitsu.io/api/edge/anime');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return null;
  }
}
