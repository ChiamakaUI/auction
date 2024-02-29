import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";


// const clientId = process.env.CLIENT_ID;

const  clientId = "BP8H4QvQsSo4pxQLWsV-aVrJbd3Rbbz_YWH1iczfoZait2Ei5_FaydL1XihO93Qq8POFUezmt1cuTuQRZO-aJWk"

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.SOLANA,
  chainId: "0x3",
  rpcTarget: "https://api.testnet.solana.com",
  displayName: "Solana Testnet",
  blockExplorer: "https://explorer.solana.com/",
  ticker: "SOL",
  tickerName: "Solana",
};

const privateKeyProvider = new SolanaPrivateKeyProvider({
  config: { chainConfig },
});

export const web3auth = new Web3AuthNoModal({
  clientId,
  chainConfig,
  web3AuthNetwork: "sapphire_devnet",
});

const openloginAdapter = new OpenloginAdapter({
  privateKeyProvider: privateKeyProvider,
});

export const configureAdapter = web3auth.configureAdapter(openloginAdapter);
