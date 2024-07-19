// 2: Creating the Service
import { useState, useEffect, useRef } from "react";
import { fetchJokes } from "../services/JokeService";

interface Joke {
  setup: string;
  punchline: string;
}

export const useFetchJokes = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const initialLoad = useRef(true);

  const loadJokes = async () => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const data = await fetchJokes(signal);
      setJoke(data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialLoad.current) {
      loadJokes();
      initialLoad.current = false;
    }
  }, []);

  return { joke, loading, error, loadJokes };
};