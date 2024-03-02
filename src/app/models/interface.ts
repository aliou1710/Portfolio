
export interface FormServiceInfo{
     title : string;
     modalbody : string;
     contentBody : any;
     color: string,
     hoverColor? : string
} 
export interface FormServiceInfoDictionary{
    [key:number] : FormServiceInfo;
}