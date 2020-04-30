import React from 'react'; 
import Axios from 'axios'
import '../Main.css'
import ReactPlayer from 'react-player'


const API_KEY = 'oLq3d1jR9aUQroza4Ttjnwn6TG6lHz6z'
const badCities = [
    {id : 1580835607, city: 'Lille'},
    {id : 1582907598, city : 'Reims'}
            ]
const cityOfMarseille = 1421725202

class TravelChoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category : '',
            city : 'Marseille',
            webcams : [],
            idAndTitleAndStatus : [],
            badCity : badCities[Math.floor(Math.random() * badCities.length)]        
        }

    }
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        //Si categorie not empty, on lance l'appel et de l'API et on fait une requête sur la catégorie
        if (this.state.category !== '') {
            Axios
            .get(`https://api.windy.com/api/webcams/v2/list/property=live/category=${this.state.category}?key=${API_KEY}`)
            .then(res => this.setState({ webcams : res.data.result.webcams }))
            .then(res=> this.setState({idAndTitleAndStatus : (this.state.webcams[Math.floor(Math.random() * this.state.webcams.length)])}))

        } 
    }


   render() {

   return(
       <>
        {this.state.city === 'Marseille' ?
            <div className='webcamtv'>
                {/* <h1>Allez l'OM</h1> */}
                <iframe className='webcams' allow="autoplay" width='380' height='210' title='webcam of Mrs'src={`https://webcams.windy.com/webcams/public/embed/player/${cityOfMarseille}/stream`}></iframe>

            </div>
        
        : this.state.category !== '' ? 
            <div className='webcamtv'>
                <h2>L'id de la webcam est : {this.state.idAndTitleAndStatus.id}</h2>
                <h3>Le lieu est : {this.state.idAndTitleAndStatus.title}</h3>
                <iframe className='webcams' allow="autoplay" width='380' height='210' title='random webcam' src={`https://webcams.windy.com/webcams/public/embed/player/${this.state.idAndTitleAndStatus.id}/stream`}></iframe>
            </div>
        : 
            <div className='webcamtv'>
                <h3>Pas de chance, vous arrivez à : {this.state.badCity.city}</h3>
                <iframe className='webcams' allow="autoplay" width='380' height='210' title='bad webcam' src={`https://webcams.windy.com/webcams/public/embed/player/${this.state.badCity.id}/stream`}></iframe>

            </div> 
        }
       </>
   ) 
   }
}

export default TravelChoice