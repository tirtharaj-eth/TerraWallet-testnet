const { MnemonicKey, LCDClient, MsgSend } =  require('@terra-money/terra.js');

async function main() {
  const mKey = new MnemonicKey({
    mnemonic:
      'bus doll fatal lend rich pioneer pride vapor group charge hero beauty forum cotton erupt helmet fold into common concert thank wine siren fire',
  });

  const provider = new LCDClient({
    chainID: 'bombay-12',
    URL: 'https://purple-autumn-fire.terra-testnet.quiknode.pro/468a439a44595f6b8ad240735022b77f25115a50/',
    gasPrices: { uluna: 0.38 },
  });

  const wallet = provider.wallet(mKey);

  const send = new MsgSend(
    'terra14j0ul0nsvmfa4cw4gpvwraawwmplsfsvx89fyy',
    'terra1eyrhnjxd4d6ec0k2aequj4gx6ajdpvheupk6vf',
    { uluna: 5 }
  );

  wallet
    .createAndSignTx({
      msgs: [send],
      memo: 'Check Check, transaction sent using QuickNode',
    })
    .then(tx => {
      return provider.tx.broadcast(tx);
    })
    .then(result => {
      console.log(`TX hash: ${result.txhash}  ${result.raw_log}`);
    });
}

main().catch(console.error);