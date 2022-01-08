
export class Card {
    constructor(title, projectLocation){
        this.title = title;
        this.isActive = false;
        this.projectLocation = projectLocation;
        
    }

    set background(value){
        this._background = value;
    };
    get background(){
        return this._background;
    }    

    // set projectURL(value){
    //     this._projectURL = `${location}${value}`;
    // }

    get projectURL(){
        const location = window.location.href;
        //console.log(location);
        return `${location}${this.projectLocation}`;
    }


   
    set infoText(value){
        this._infoText = value;
    };

    get infoText(){
        return this._infoText;
    }




}