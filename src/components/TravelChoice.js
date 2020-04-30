import React from 'react'; 
import Axios from 'axios'
import '../Main.css'

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
            city : '',
            webcams : [],
            idAndTitleAndStatus : [],
            badCity : badCities[Math.floor(Math.random() * badCities.length)]        
        }

    }
    componentDidMount() {
        this.getData()
    }

    getProps = () => {
        this.props.test === 'Heaven' ?
            this.setState({city : 'Marseille'})
        : this.props.test !== 'Hell' ?
            this.setState({category : this.props.test})
        : console.log('affichage de bad city')
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
                <div className='webcamdetails'>
                    <h3>Allez l'OM</h3>
                </div>
                <iframe className='webcams' allow="autoplay" width='380' height='210' title='webcam of Mrs'src={`https://webcams.windy.com/webcams/public/embed/player/${cityOfMarseille}/stream`}></iframe>
            </div>
        
        : this.state.category !== '' ? 
            <div className='webcamtv'>
                <div className='webcamdetails'>
                    <p>L'id de la webcam est : {this.state.idAndTitleAndStatus.id}</p>
                    
                    <h3>Bienvenue à {this.state.idAndTitleAndStatus.title}</h3>
                    </div>
                    <iframe className='webcams' allow="autoplay" width='380' height='210' title='random webcam' src={`https://webcams.windy.com/webcams/public/embed/player/${this.state.idAndTitleAndStatus.id}/stream`}></iframe>
                </div>
        : 
            <div className='webcamtv'>
                    <div className='webcamdetails'>
                    <h3>Pas de chance, vous arrivez à {this.state.badCity.city}</h3>
                    </div>
                <iframe className='webcams' allow="autoplay" width='380' height='210' title='bad webcam' src={`https://webcams.windy.com/webcams/public/embed/player/${this.state.badCity.id}/stream`}></iframe>

            </div> 
        }
       </>
   ) 
   }
}

export default TravelChoice