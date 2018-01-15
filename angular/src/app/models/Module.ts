
export class Module {

  id: number;
  owner: number;

  name: string;
  type: string;
  description: string;
  image: string;
  imageToLoad: string;

  startscene: number;
  isPublic: number;
  finished: number;

  approved: number;
  approvedBy: number;
  published: Date;

  views: number;
  rate: number;


  constructor(
    _id: number, _owner: number,
    _name: string, _type: string, _description: string, _image: string,
    _startScene: number, _isPublic: number, _finished: number,
    _approved: number, _approvedBy: number, _published: Date,
    _views: number, _rate: number
  ) {

    this.id = _id;
    this.owner= _owner;

    this.name = _name;
    this.type= _type;
    this.description= _description;
    this.image= _image;
    if(_image.split(':')[0] === 'http' ||
       _image.split(':')[0] === 'https'
    ){
      this.imageToLoad= _image;
    }
    else{
      this.imageToLoad= "../../../../media/" + _image;
    }


    this.startscene = _startScene;
    this.isPublic = _isPublic;
    this.finished = _finished;

    this.approved = _approved;
    this.approvedBy = _approvedBy;
    this.published = _published;

    this.views = _views;
    this.rate = _rate;

  }
}
