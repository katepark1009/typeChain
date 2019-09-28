class Block {
    public index: number;
    public hash: string;
    public prevloadHash: string;
    public data: string;
    public timestamp: number; 
    constructor(
      index: number,
      hash: string,
      prevloadHash: string,
      data: string,
      timestamp: number, 
    ){
        this.index = index;    
        this.hash = hash,
        this.prevloadHash = prevloadHash,
        this.data = data,
        this.timestamp = timestamp
    }
}

const genesisBlock:Block = new Block(0, '202020202',"", "hi", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};