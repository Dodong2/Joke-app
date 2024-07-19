// 1: Creating the Service
const API_URL = 'https://official-joke-api.appspot.com/random_joke';

export const fetchJokes = async (signal: AbortSignal) => {
  console.log('API URL:', API_URL);

  try {
    const response = await fetch(API_URL, { signal });

    if (!response.ok) {
      console.error('Response status:', response.status, response.statusText);
      throw new Error('Failed to fetch jokes');
    }

    const data = await response.json();
    console.log('Data fetched:', data);

    // Adapt this part to match the response structure
    return {
      setup: data.setup,
      punchline: data.punchline
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Fetch error:', error);
      }
      throw error;
    } else {
      console.error('Unexpected error', error);
      throw new Error('Unexpected error occurred');
    }
  }
};
