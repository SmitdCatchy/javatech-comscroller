
export class Scene {

  id: number;
  mId: number;

  background: string;
  objects: SceneObject[];
  toPreload: number[] = [];

  constructor(
    _id: number, _mId: number,
    _background: string, _objects: SceneObject[]
  ) {

    this.id = _id;
    this.mId= _mId;
    if(_background === "none"){
      this.background = "#000";
    }
    else{
      this.background = _background;
    }

    this.objects= _objects;

    for( const o of this.objects ){
      const check = o.action.split(':');

      if(check[1] === 'scene'){
        const id = +check[2];
        this.toPreload.push(id);
      }
    }

  }

  getStyle(): any{
    if(
      this.background.charAt(0) === "#" ||
      this.background.split('(')[0] === "rgb" ||
      this.background.split('(')[0] === "rgba"
    ){
      return {
        'background': this.background
      }
    }
    else if(this.background.split(':')[0] === 'http' ||this.background.split(':')[0] === 'https'){
      return {
        'background-image'          : 'url(' + this.background + ')',
        'background-repeat'   : 'no-repeat',
        'background-position' : 'center',
        'background-size'     : '100% 100%'
      }

    }
    else{
      return {
        'background-image'          : 'url(../../../../media/' + this.background + ')',
        'background-repeat'   : 'no-repeat',
        'background-position' : 'center',
        'background-size'     : '100% 100%'
      }
    }

  }
}

export class SceneObject {

  id: number;
  sId: number;

  type: string; // display type: txt, img or oth
  action: string; // functionality that the object has
  // scene:id:animin:animout - goes to scene id
  // scener:id:animin:animout:id:animin:animout - goes to random scene of ids
  // event:id - goes to event id int this scene
  // swipe:
  // arrow:

  x: number; // normalized x coordinates
  y: number; // normalized y coordinates
  w: number; // normalized width
  h: number; // normalized height
  z: number; // z-index

  cont: string; // content for text or image url
  style: string;
  event: string; // event numbers
  max : string; // the highest numbered event

  imageToPreload: string = '';

  constructor(
    _id: number, _sId: number, _type: string, _action: string,
    _x: number, _y: number, _w: number, _h: number, _z: number,
    _cont: string, _style: string, _event: string
  ) {
    this.id = _id;
    this.sId = _sId;
    this.type = _type;
    this.action = _action;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.z = _z;
    this.cont = _cont;
    this.style = _style;
    this.event = _event;
    if(_event === "10" || _event.slice(-2) === "10") this.max = "10";
    else if(isNaN(+_event.slice(-1))) this.max = "1";
    else this.max = _event.slice(-1);
  }

  getEvents(): any[]{

    // console.log(actClass);

    // let act = +actClass.slice(3);
    // console.log(act);

    if(this.event.charAt(1) === '-'){
      let limits = this.event.split('-');
      let min = +limits[0];
      let max = +limits[1];

      let events = [];
      for(let i = min; i <= max; i++){
        events.push(+i);
      }
      return events;
    }
    else if(this.event.charAt(1) === ','){
      let nums = this.event.split(',');
      let events = [];
      for( let n of nums ){
        events.push(+n);
      }
      return events;
    }
    else{
      if(!isNaN(+this.event)){
        return [+this.event];
      }
      else{
        return [1];
      }
    }
  }

  getStyle(w: number, h: number): any{
    const x = this.stageX(this.x, w) + 'px';
    const y = this.stageY(this.y, h) + 'px';
    const width = this.stageX(this.w, w) + 'px';
    const height = this.stageY(this.h, h) + 'px';
    const z = this.z;

    let bg : string = '#FFF';
    let bgs = 'cover';

    let color = '#000';
    let size = this.stageX(30, w) + 'px';
    let family = 'CGR';
    let style = 'normal';
    let textShadow = '';
    let align = 'left';

    let border = '';
    let radius = '';
    let boxShadow = '';
    let margin = '';
    let padding = '';

    let display = "";
    let opacity = "";
    let overflow = "";

    const attributes = this.style.split(';');
    for(const atr of attributes){
      const datas = atr.split(":");
      if(datas[0].trim() === 'color'){
        color = datas[1];
      }
      if(datas[0].trim() === 'font-size'){
        size = this.stageX(+datas[1].match(/\d+/)[0], w)+ 'px';
      }
      if(datas[0].trim() === 'font-family'){
        family = datas[1];
      }
      if(datas[0].trim() === 'font-style'){
        style = datas[1];
      }
      if(datas[0].trim() === 'text-shadow'){
        textShadow = datas[1];
      }
      if(datas[0].trim() === 'text-align'){
        align = datas[1];
      }
      if(datas[0].trim() === 'border'){
        border = datas[1];
      }
      if(datas[0].trim() === 'border-radius'){
        radius = datas[1];
      }
      if(datas[0].trim() === 'box-shadow'){
        boxShadow = datas[1];
      }
      if(datas[0].trim() === 'margin'){
        margin = datas[1];
      }
      if(datas[0].trim() === 'padding'){
        padding = datas[1];
      }

      if(datas[0].trim() === 'display'){
        display = datas[1];
      }
      if(datas[0].trim() === 'opacity'){
        opacity = datas[1];
      }
      if(datas[0].trim() === 'overflow'){
        overflow = datas[1];
      }

      if(this.type === 'img'){
        bg =  this.cont;
        bgs = 'contain';
      }
      if(datas[0] === 'background'){
        bg = datas[1];
      }
      if(datas[0] === 'scale'){
        bgs = datas[1];
      }

    }

    if(bg !== '' && bg.charAt(0) !== "#"){
      this.imageToPreload = bg;
    }
    if(bg === "none"){
      bg = "#000";
    }

    // console.log("#####-BEGIN-#####");
    // console.log(bg);
    // console.log(bg.charAt(0));
    // console.log(bg.split('(')[0]);
    // console.log(bg.split(':')[0]);
    // console.log("#####-END-#####");


    if(
      bg.charAt(0) === "#" ||
      bg.split('(')[0] === "rgb" ||
      bg.split('(')[0] === "rgba"
    ){
      return {
        'position'        : 'absolute',
        'left'            : x,
        'top'             : y,
        'width'           : width,
        'height'          : height,
        'z-index'         : z,

        'color'           : color,
        'font-size'       : size,
        'font-family'     : family,
        'font-style'      : style,
        'text-shadow'     : textShadow,
        'text-align'      : align,
        'white-space'     : 'pre-wrap',

        'border'          : border,
        'border-radius'   : radius,
        'box-shadow'      : boxShadow,
        'margin'          : margin,
        'padding'         : padding,

        'opacity'         : opacity,
        'overflow'        : overflow,

        'display'         : 'flex',
        'justify-content' : 'center',
        'align-items'     : 'center',

        'background-color': bg
      }
    }
    else if(bg.split(':')[0] === 'http' || bg.split(':')[0] === 'https'){
      return {
        'position'        : 'absolute',
        'left'            : x,
        'top'             : y,
        'width'           : width,
        'height'          : height,
        'z-index'         : z,

        'color'           : color,
        'font-size'       : size,
        'font-family'     : family,
        'font-style'      : style,
        'text-shadow'     : textShadow,
        'text-align'      : align,
        'white-space'     : 'pre-wrap',

        'border'          : border,
        'border-radius'   : radius,
        'box-shadow'      : boxShadow,
        'margin'          : margin,
        'padding'         : padding,

        'opacity'         : opacity,
        'overflow'        : overflow,

        'display'         : 'flex',
        'justify-content' : 'center',
        'align-items'     : 'center',

        'background-image'          : 'url(' + bg + ')',
        'background-repeat'   : 'no-repeat',
        'background-position' : 'center',
        'background-size'     : '100% 100%'
      }

    }
    else{
      return {
        'position'        : 'absolute',
        'left'            : x,
        'top'             : y,
        'width'           : width,
        'height'          : height,
        'z-index'         : z,

        'color'           : color,
        'font-size'       : size,
        'font-family'     : family,
        'font-style'      : style,
        'text-shadow'     : textShadow,
        'text-align'      : align,
        'white-space'     : 'pre-wrap',

        'border'          : border,
        'border-radius'   : radius,
        'box-shadow'      : boxShadow,
        'margin'          : margin,
        'padding'         : padding,

        'opacity'         : opacity,
        'overflow'        : overflow,

        'display'         : 'flex',
        'justify-content' : 'center',
        'align-items'     : 'center',

        'background-image'    : 'url(../../../../media/' + bg + ')',
        'background-repeat'   : 'no-repeat',
        'background-position' : 'center',
        'background-size'     : '100% 100%'
      }
    }

  }

  stageX(c: number, w: number): number{
    const document_width = 1920;//normalized width
    const stage_width = w;
    return c * stage_width / document_width;
  }
  stageY(c: number, h: number): number{
    const document_height = 1080;//normalized height
    const stage_height = h;
    return c * stage_height / document_height;
  }

}
