const apiKey = process.env.GOOGLE_MAPS_API_KEY_DEV;

export const GetMapsData = async (url:string) => {
    console.log("apiKey = ",apiKey)
    try {
      const response = await fetch(url + `&key=${apiKey}`);
      const data = await response.json();
      if (data.status === 'OK') {
        return data;
      } else {
        console.error('API error:', data.error_message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
    return null;
  };