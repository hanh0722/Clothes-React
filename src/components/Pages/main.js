import React from 'react';
import SwiperContainer from '../slider/slider';
import Box from '../box/box';
import Section from '../section/section';
import ListProduct from '../boxProducts/listproduct';
import Banner from '../Banner/banner';
import FeedbackAll from '../feedback/feedbackall';
import ListProductAll from '../latestproduct/listproduct';
import SliderFeedback from '../sliderfeedback/sliderfeedback';
// import LazyLoad from 'react-lazyload';
const filterArray = (condition, array) =>{
    const Result = array.filter(items =>{
      return items.name.includes(condition)
    })
    return Result;
}
class Main extends React.Component{
    constructor(){
        super();
        this.state = {
          products: [],
          mainArray: [],
          starting: [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/products').then(response => response.json())
        .then(data =>{
            this.setState({
                mainArray: data,
                products: data
            });
        }).catch(err => console.log(err));
    }
    onFilter = (result) =>{
    if(result === 'all'){
        this.setState({products: this.state.mainArray});
    }
    else if(result === 'croptop'){
        const newData = filterArray('crop top', this.state.mainArray);
        this.setState({products: newData})
    }
    else if(result === 'dress'){
        const newData = filterArray('dress', this.state.mainArray);
        this.setState({products: newData});
    }
    else if(result === 'jacket'){
        const newData = filterArray('jacket', this.state.mainArray);
        this.setState({products: newData});
    }
    else if(result === 'men'){
        const newData = this.state.mainArray.filter(items =>{
        return items.gender === 'male'
        })
        this.setState({products: newData});
    }
    else if(result === 'women'){
        const newData = this.state.mainArray.filter(items =>{
        return items.gender === 'female'
        })
        this.setState({products: newData});
    }
}
    render(){
        return(
            <div>
                <SwiperContainer/>
                <Box/>
                <Section/>
                <ListProduct/>
                {/* <LazyLoad height={200} offset={100} once> */}
                <Banner/>
                {/* </LazyLoad> */}
                <FeedbackAll/>
                <ListProductAll onFilter={this.onFilter} onData={this.state.products}/>
                <SliderFeedback/>
            </div>
        )
    }
}

export default Main;