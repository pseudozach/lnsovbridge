type Info = {
  version: number;
  protocolversion: number;
  blocks: number;
  timeoffset: number;
  connections: number;
  proxy: string;
  difficulty: number;
  testnet: boolean;
  relayfee: number;
};

type BestBlock = {
  hash: string,
  height: number,
};

type Block = {
  hash: string;
  confirmations: number;
  strippedsize: number;
  size: number;
  weight: number;
  height: number;
  version: number;
  versionHex: string;
  merkleroot: string;
  tx: string[];
  time: number;
  nonce: number;
  bits: string;
  difficulty: number;
  previousblockhash: string;
  nextblockhash: string;
};

/**
 * A generic interface that can be used for multiple chain nodes and implementations
 */
interface ChainClientInterface {
  connect(): Promise<void>;
  disconnect(): Promise<void>;

  getInfo(): Promise<Info>;
  getBestBlock(): Promise<BestBlock>;
  getBlock(blockHash: string): Promise<Block>;

  loadTxFiler (reload: boolean, addresses: string[], outpoints: string[]): Promise<null>;

  sendRawTransaction(rawTransaction: string, allowHighFees: boolean): Promise<string>;
  getRawTransaction(transactionHash: string, verbose: number): Promise<any>;

  estimateFee(numberBlock: number): Promise<number>;

  generate(blocks: number): Promise<string[]>;

  on(event: 'error', listener: (error: string) => void): this;
  emit(event: 'error', error: string): boolean;

  on(event: 'block.connected', listener: (height: number) => void): this;
  emit(event: 'block.connected', height: number): boolean;

  on(event: 'transaction.relevant.mempool', listener: (transactionHex: string) => void): this;
  emit(event: 'transaction.relevant.mempool', transactionHex: string): boolean;

  on(event: 'transaction.relevant.block', listener: (transactionhex: string, blockHeigh: number) => void): this;
  emit(event: 'transaction.relevant.block', transactionhex: string, blockHeigh: number): boolean;
}

export default ChainClientInterface;
export { Info, BestBlock, Block };
