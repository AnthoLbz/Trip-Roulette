import React from 'react'; 
import Axios from 'axios'


const API_KEY = 'oLq3d1jR9aUQroza4Ttjnwn6TG6lHz6z'
// URL = 'https://api.windy.com/api/webcams/v2/list/property=live/category={this.state.category}&key=API_KEY'

//reims webcam : https://www.windy.com/fr/-Webcams/France/Grand-Est/Reims/Tour-des-Argonautes/webcams/1582907598?49.232,4.253,7
// lille webcam : https://www.windy.com/fr/-Webcams/France/Hauts-de-France/Lille/webcams/1580835607?50.233,3.047,8
//webcam=1180866703?show=webcams:image,location,player 
//IdWebCamLille : 1580835607
//IdWebCamReims : 1582907598


class TravelChoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category : 'beach',
            city : '',
            webcams : [],
            id : [],
            // locationTitle : [],
            uniqueId : 0,
            badCities : [
                {id : 1580835607, city: 'Lille'},
                {id : 1582907598, city : 'Reims'}
                        ]
        }

    }
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        //Cas n°1 : Si categorie not empty, on lance l'appel et de l'API et on fait une requête sur la catégorie
        if (this.state.category !== '') {
            Axios
            .get(`https://api.windy.com/api/webcams/v2/list/property=live/category=${this.state.category}?key=${API_KEY}`)
            .then(res => this.setState({ webcams : res.data.result.webcams }))
            .then(res => this.setState({id : this.state.webcams.map(e => (e.id))}))
            // .then(res => this.setState({locationTitle : this.state.webcams.map(e => e.title)}))
            .then(res=> this.setState({uniqueId : Number(this.state.id[Math.floor(Math.random() * this.state.id.length)])}))

        } 
    }


    // getLocationTitlefromUniqueId = (arrayOfWebcams) => {
    //     const titleLocation = arrayOfWebcams.filter(e=> e.id = 1171052360)
    //     return titleLocation[0]

    // }

    // getCityTitlefromId =(webcamId) => {
    //     Axios
    //     .get(`https://api.windy.com/api/webcams/v2/list/webcam=${webcamId}?show=webcams:image,location,player&key=oLq3d1jR9aUQroza4Ttjnwn6TG6lHz6z`)
    //     .then(res=> console.log(res.data.result.webcams[0].title))
    // }

   render() {
    //    console.log(this.state.webcams)
    // console.log(this.getCityTitlefromId(1580835607))
    // console.log(this.state.webcams)
    // console.log(this.state.locationTitle)
    // console.log(this.getLocationTitlefromUniqueId(this.state.webcams))
    
   return(
       <>

            <h1>Test</h1>
            <h2>L'id de la webcam est : {this.state.uniqueId}</h2>
            {/* <p>{this.state.webcams.title}</p> */}
            <iframe allow="autoplay" src={`https://webcams.windy.com/webcams/public/embed/player/${this.state.uniqueId}/stream`}></iframe>
       </>
   ) 
   }
}


export default TravelChoice