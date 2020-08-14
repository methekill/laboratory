import { Networks } from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      horizonURL: 'https://node.fable.id',
      networkPassphrase: Networks.TESTNET
    },
    public: {
      horizonURL: 'https://main.fable.id',
      networkPassphrase: Networks.PUBLIC
    }
  },
  defaultName: 'test',
};
export default NETWORK;
