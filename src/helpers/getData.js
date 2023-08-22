async function fetchBeerData() {
  try {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=80"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract the desired fields (name, id, description, and image_path)
    const extractedData = data.map((beer) => ({
      name: beer.name,
      id: beer.id,
      description: beer.description,
      image_path: beer.image_url,
    }));

    return extractedData;
  } catch (error) {
    console.error("Error fetching beer data:", error);
    throw error;
  }
}

async function getBeerDataById(beerId) {
  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch beer data for ID ${beerId}`);
    }

    const beerData = await response.json();
    const extractedData = {
      id: beerData[0].id,
      name: beerData[0].name,
      image_url: beerData[0].image_url,
      description: beerData[0].description,
    };
    return extractedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchBeerData, getBeerDataById };
