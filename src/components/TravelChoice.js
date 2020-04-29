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
            query : '',
            webcams : [],
            id : [],
            uniqueId : 0   
        }

        //this.getOneId = this.getOneId.bind(this)

    }
    componentDidMount() {
        this.getData()
        this.getOneId()
    }

    getData = () => {
        //Cas n°1 : Si categorie not empty, on requête sur la catégorie
        
        Axios
        .get(`https://api.windy.com/api/webcams/v2/list/property=live/category=${this.state.category}?key=${API_KEY}`)
        .then(res => this.setState({ webcams : res.data.result.webcams }))
        .then(res => this.setState({id : this.state.webcams.map(e => (e.id))}))
        //Cas n°2 : Sinon on requête sur la city
    }

    getOneId = () => {
        let items = this.state.id
        let item = Number(items[Math.floor(Math.random() * items.length)])
        this.setState({uniqueId : item})
        // return item
        // console.log(this.state.uniqueId)
        // this.setState({uniqueId : item})

        // this.setState({uniqueId : items[Math.floor(Math.random() * items.length)]})
        // this.setState({uniqueId : this.state.uniqueId})   
    }

   render() {
    //    console.log(this.state.webcams)
       console.log(this.state.uniqueId)
    // console.log(this.getOneId())
    // console.log(this.getOneId())
   return(
       <>

            <h1>Test</h1>
            <iframe allow="autoplay" src='https://webcams.windy.com/webcams/public/embed/player/1580835607/stream'></iframe>

       </>
   ) 
   }
}


export default TravelChoice