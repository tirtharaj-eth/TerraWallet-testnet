const { MnemonicKey } =  require('@terra-money/terra.js');

const wallet = new MnemonicKey();
console.log(
     "Mnemonic Key:", wallet.mnemonic,
     "\n\nWallet Address:", wallet.accAddress
); 