export class Article{
    name: string;
    url: string;
    votes: number;
    constructor(name: string, url: string, votes?: number) {
        this.name = name;
        this.url = url;
        this.votes = votes || 0;
    }
    voteUp():void{
        this.votes += 1;
    }
    voteDown():void{
        this.votes -= 1;
    }
}
