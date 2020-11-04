import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import spot from './spot.module.scss';
import Send from '@material-ui/icons/Chat';
import pnp from 'sp-pnp-js';
import { ISpotlightItemReactProps } from './ISpotlightItemReactProps';
import { ClassSpotlight } from './ClassSpotlight';
import { ISpotlight } from './ISpotlight';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export default class SimpleSlider extends React.Component<ISpotlightItemReactProps, any> {
    public constructor(props:ISpotlightItemReactProps,any)
    {
        super(props);
        this.state={
            items:[]
        }
        }
            render() {
        return(
            <>
               <Slider {...settings}>
            {
                    this.state.items.map(function(item:ISpotlight){
                return(
                         <>
                             
                                <div className={spot.Cards}>
                                    <div className={spot.CardsImage}>
                                         <img src={item.DisplayPicture} alt="Spotlights" />
                                </div>
                                <div className={spot.CardsName}> 
                                    <h1>Name:</h1>
                                    <h3>{item.DisplayName}</h3>
                                    <h1>Department:</h1>
                                    <h3>{item.Description}</h3>
                                <div className={spot.CardsMessage}>
                                    <a>Send Message <i><Send /> </i></a>
                                    </div>
                                 </div>
                                 </div>
                               
                                </>
                        );
    
                         })
      
                    }
                     </Slider>
                    </>
                )
            }
    
        
public componentDidMount()
{
    // debugger;
    this._SpotlightList();
}
private _SpotlightList():void
{
    pnp.sp.web.lists.getByTitle(`Spotlight`).items.get().then
    ((response)=>{
        let SpotlightCollection=response.map(item=> new ClassSpotlight(item)).reverse();
        this.setState({items:SpotlightCollection});
    }

    )
}





}