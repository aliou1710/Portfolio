export class FormServiceDefinition{
    constructor(title : string, modalbody : string, contentBody : string, color: string){
        this.title =   title;
        this.modalbody= modalbody;
        this.contentBody = contentBody
    }
    public title : string;
    public modalbody : string;
    public contentBody : string;
    public color: string
}