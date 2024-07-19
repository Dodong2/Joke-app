// 4 Creating the Page
/********** Components **********/
import MainContainer from "../components/common/MainContainer";
import Loading from "../components/common/Loading";
/********** Function **********/
import { useFetchJokes } from "../hooks/useFetchJokes";
import JokeList from "../components/JokeList";
/********** Images **********/
import Laught from '../assets/img/LT.png'

const Home = () => {
  const{ joke ,loading, error, loadJokes } = useFetchJokes()
  return (
    <>
      <MainContainer>
        <div className='header'>
          <img src={Laught}/>
          <h1>Joke App</h1>
          <p>generate a random jokes</p>
        </div>
        <div>
      {loading && <Loading>Loading...</Loading>}
      {error && <p>{error}</p>}
      {joke && !loading && !error && <JokeList setup={joke.setup} punchline={joke.punchline} />}
      <button onClick={loadJokes} disabled={loading} className="generate-joke">
        {loading ? 'Loading...' : 'Get Another Joke'}
      </button>
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
