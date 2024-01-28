import React from 'react'; //,{ Suspense }
import Header from './HeaderNav';
import Movies from './MainMovies';
import Footer from './FooterRev';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cinemaInfo: {
        name: 'Your Cinema',
        rate: '4.5',
        address: '123 Cinema St, City',   
      },
      movies: [ 
        { 
          id: 1,    
          name: 'Bakugan Battle Brawlers', 
          genre: 'Action, Fantasy, Comedy, Adventure', 
          director: 'Mitsuo Hashimoto', 
          price: '$10', 
          description: 'A boy wants to be the best in ranking of an inter-dimensional game.',
          image: 'https://image.tmdb.org/t/p/original/uW2xawK5brroGov2dyhuT0bUeva.jpg', 
        },
        { 
          id: 2,    
          name: 'Bungo Stray Dogs: Dead Apple', 
          genre: 'Animation, Action, Mystery', 
          director: 'Takuya Igarashi', 
          price: '$15', 
          description: 'The Armed Detective Agency investigates a bizarre series of suicides involving an eerie mist',
          image: 'https://images.thalia.media/07/-/4c1454454e184a1ca33d5b5d27f499fc/bungo-stray-dogs-dead-apple-vol-1-taschenbuch-gun-zi-englisch.jpeg', 
        },
        { 
          id: 3,    
          name: 'Howl\'s Moving Castle', 
          genre: 'Adventure, Family, Fantasy', 
          director: 'Hayao Miyazaki', 
          price: '$11', 
          description: 'Her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
          image: 'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 
        },
        { 
          id: 4,    
          name: 'The Great Gatsby', 
          genre: 'Drama, Romance', 
          director: 'Baz Luhrmann', 
          price: '$7', 
          description: 'A writer and wall street trader, Nick Carraway, finds himself drawn to the past and lifestyle of his mysterious millionaire neighbor.',
          image: 'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg', 
        }
      ], feedback: [
        { username: 'Kaedehara Kazuha', text: 'Great website!' },
        { username: 'Mark Twain', text: 'Awesome movies!' },
        { username: 'Edgar Poe', text: 'Affordable Prices!' },
        { username: 'Fyodor Dostoevsky', text: 'Amazing Content!' },
        { username: 'Sangonomiya Kokomi', text: 'Very Cheap and High Quality!' }
      ],
    }; 
  }

  handleFeedbackChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  render() {
    return (
      <div>
        <Header cinemaInfo={this.state.cinemaInfo} />
        <Movies movies={this.state.movies} />
        <Footer
          feedback={this.state.feedback}
          onFeedbackChange={this.handleFeedbackChange}
        />
      </div>
    ); 
  } 
} 

export default App; 