import { ISpotlight } from "./ISpotlight";
export class ClassSpotlight{
    public Title:string;
    public DisplayName:string;
    public Description:string;
    public DisplayPicture:string;
    public Date:string;
    public SpotlightType:string;


    constructor(item: ISpotlight){
        this.Title= item.Title;
        this.DisplayName= item.DisplayName;
        this.Description= item.Description;
        this.DisplayPicture= item.DisplayPicture;
        this.Date= item.Date;
        this.SpotlightType= item.SpotlightType;
       
    }
}