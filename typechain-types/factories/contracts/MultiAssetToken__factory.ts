/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MultiAssetToken,
  MultiAssetTokenInterface,
} from "../../contracts/MultiAssetToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAllForAssets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ApprovalForAssets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "replacesId",
        type: "uint64",
      },
    ],
    name: "AssetAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "replacesId",
        type: "uint64",
      },
    ],
    name: "AssetAddedToToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AssetPrioritySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "AssetRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "AssetSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "acceptAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approveForAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getActiveAssetPriorities",
    outputs: [
      {
        internalType: "uint16[]",
        name: "",
        type: "uint16[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getActiveAssets",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApprovedForAssets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "getAssetMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "newAssetId",
        type: "uint64",
      },
    ],
    name: "getAssetReplacements",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getPendingAssets",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAllForAssets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxRejections",
        type: "uint256",
      },
    ],
    name: "rejectAllAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "rejectAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAllForAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint16[]",
        name: "priorities",
        type: "uint16[]",
      },
    ],
    name: "setPriority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025fd380380620025fd833981016040819052620000349162000127565b600062000042838262000220565b50600162000051828262000220565b505050620002ec565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b838211156200011d5760008385830101525b9695505050505050565b600080604083850312156200013b57600080fd5b82516001600160401b03808211156200015357600080fd5b620001618683870162000070565b935060208501519150808211156200017857600080fd5b50620001878582860162000070565b9150509250929050565b600181811c90821680620001a657607f821691505b602082108103620001c757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021b57600081815260208120601f850160051c81016020861015620001f65750805b601f850160051c820191505b81811015620002175782815560010162000202565b5050505b505050565b81516001600160401b038111156200023c576200023c6200005a565b62000254816200024d845462000191565b84620001cd565b602080601f8311600181146200028c5760008415620002735750858301515b600019600386901b1c1916600185901b17855562000217565b600085815260208120601f198616915b82811015620002bd578886015182559484019460019091019084016200029c565b5085821015620002dc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61230180620002fc6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80635ea72f36116100de578063a22cb46511610097578063e467a48f11610071578063e467a48f146103ba578063e7de4de4146103cd578063e985e9c5146103e0578063fc3517c81461041c57600080fd5b8063a22cb46514610345578063b88d4fde14610358578063df6f556b1461036b57600080fd5b80635ea72f36146102d05780636352211e146102e357806370a08231146102f65780637280281e146103175780638507dc281461032a57806395d89b411461033d57600080fd5b806322f6da9c1161013057806322f6da9c1461024457806323b872dd1461025757806342842e0e1461026a57806351532e5a1461027d5780635e2e32921461029d5780635e94354a146102b057600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e0578063096835be146101f557806322e6d16014610208575b600080fd5b61018b610186366004611b54565b61042f565b60405190151581526020015b60405180910390f35b6101a8610481565b6040516101979190611bc5565b6101c86101c3366004611bd8565b610513565b6040516001600160a01b039091168152602001610197565b6101f36101ee366004611c0d565b61056c565b005b6101f3610203366004611c7d565b6105f1565b61018b610216366004611d42565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6101f3610252366004611d8c565b6106d3565b6101f3610265366004611dc1565b61085b565b6101f3610278366004611dc1565b61088c565b61029061028b366004611bd8565b6108a7565b6040516101979190611dfd565b6101a86102ab366004611e4a565b61093b565b6102c36102be366004611bd8565b610a67565b6040516101979190611e6d565b6101f36102de366004611c0d565b610aef565b6101c86102f1366004611bd8565b610b6f565b610309610304366004611ea9565b610be6565b604051908152602001610197565b610290610325366004611bd8565b610c6c565b6101f3610338366004611ec4565b610cd5565b6101a8610ce4565b6101f3610353366004611ec4565b610cf3565b6101f3610366366004611f00565b610cfe565b6103a2610379366004611e4a565b60009182526009602090815260408084206001600160401b039384168552909152909120541690565b6040516001600160401b039091168152602001610197565b6101c86103c8366004611bd8565b610d36565b6101f36103db366004611fbf565b610d86565b61018b6103ee366004611d42565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101f361042a366004611d8c565b610ed3565b60006001600160e01b03198216631a2a4ce160e31b148061046057506001600160e01b031982166380ac58cd60e01b145b8061047b57506001600160e01b031982166301ffc9a760e01b145b92915050565b60606000805461049090611fe1565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90611fe1565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105505760405162461bcd60e51b81526004016105479061201b565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061057782610b6f565b9050806001600160a01b0316836001600160a01b0316036105aa5760405162461bcd60e51b81526004016105479061206b565b336001600160a01b03821614806105c657506105c681336103ee565b6105e25760405162461bcd60e51b8152600401610547906120b0565b6105ec8383611267565b505050565b80516000838152600a6020526040902054811461065c5760405162461bcd60e51b8152602060048201526024808201527f4d756c746941737365743a20426164207072696f72697479206c697374206c656044820152630dccee8d60e31b6064820152608401610547565b610667335b846112d5565b6106835760405162461bcd60e51b81526004016105479061210d565b6000838152600b6020908152604090912083516106a292850190611a5f565b5060405183907ff0bfd70b0068f973d58178846ca67112671ec45e060838f7de5662036bcf801790600090a2505050565b6000838152600d602052604090205482106107305760405162461bcd60e51b815260206004820152601f60248201527f4d756c746941737365743a20696e646578206f7574206f6620626f756e6473006044820152606401610547565b6000838152600d602052604090205482106107a25760405162461bcd60e51b815260206004820152602c60248201527f4d756c746941737365743a2050656e64696e6720617373657420696e6465782060448201526b6f7574206f662072616e676560a01b6064820152608401610547565b6107ab33610661565b6107c75760405162461bcd60e51b81526004016105479061210d565b6000838152600d602052604090206107df9083611387565b6000838152600c602090815260408083206001600160401b038516808552908352818420805460ff1916905586845260098352818420818552909252808320805467ffffffffffffffff1916905551909185917f1010837a46db9510cad56c9b63e97183557a136e9d4ddbec309ce52c99afb1249190a3505050565b610865338261146d565b6108815760405162461bcd60e51b81526004016105479061214e565b6105ec83838361150c565b6105ec83838360405180602001604052806000815250610cfe565b6000818152600d602090815260409182902080548351818402810184019094528084526060939283018282801561092f57602002820191906000526020600020906000905b82829054906101000a90046001600160401b03166001600160401b0316815260200190600801906020826007010492830192600103820291508084116108ec5790505b50505050509050919050565b6000828152600c602090815260408083206001600160401b038516845290915290205460609060ff166109be5760405162461bcd60e51b815260206004820152602560248201527f4d756c746941737365743a20546f6b656e20646f6573206e6f74206861766520604482015264185cdcd95d60da1b6064820152608401610547565b6001600160401b038216600090815260086020526040902080546109e190611fe1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0d90611fe1565b8015610a5a5780601f10610a2f57610100808354040283529160200191610a5a565b820191906000526020600020905b815481529060010190602001808311610a3d57829003601f168201915b5050505050905092915050565b6000818152600b602090815260409182902080548351818402810184019094528084526060939283018282801561092f57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610aac575094979650505050505050565b6000610afa82610b6f565b9050806001600160a01b0316836001600160a01b031603610b2d5760405162461bcd60e51b81526004016105479061206b565b336001600160a01b0382161480610b495750610b498133610216565b610b655760405162461bcd60e51b8152600401610547906120b0565b6105ec83836116bc565b6000818152600260205260408120546001600160a01b03168061047b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610547565b60006001600160a01b038216610c505760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610547565b506001600160a01b031660009081526003602052604090205490565b6000818152600a602090815260409182902080548351818402810184019094528084526060939283018282801561092f57600091825260209182902080546001600160401b031684529082028301929091600891018084116108ec575094979650505050505050565b610ce033838361172a565b5050565b60606001805461049090611fe1565b610ce03383836117f9565b610d08338361146d565b610d245760405162461bcd60e51b81526004016105479061214e565b610d30848484846118bf565b50505050565b6000818152600260205260408120546001600160a01b0316610d6a5760405162461bcd60e51b81526004016105479061201b565b506000908152600660205260409020546001600160a01b031690565b610d9033836112d5565b610dac5760405162461bcd60e51b81526004016105479061210d565b6000828152600d602052604090205481811115610e0b5760405162461bcd60e51b815260206004820152601b60248201527f556e6578706563746564206e756d626572206f662061737365747300000000006044820152606401610547565b60005b81811015610e89576000848152600d60205260408120805483908110610e3657610e366121a3565b6000918252602080832060048304015488845260098252604080852060039094166008026101000a9091046001600160401b031684529190529020805467ffffffffffffffff1916905550600101610e0e565b506000838152600d60205260408120610ea191611b08565b60405160009084907f1010837a46db9510cad56c9b63e97183557a136e9d4ddbec309ce52c99afb124908390a3505050565b6000838152600d60205260409020548210610f305760405162461bcd60e51b815260206004820152601f60248201527f4d756c746941737365743a20696e646578206f7574206f6620626f756e6473006044820152606401610547565b610f3933610661565b610f555760405162461bcd60e51b81526004016105479061210d565b6000838152600d60205260409020805483908110610f7557610f756121a3565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03166001600160401b0316816001600160401b031614610ffe5760405162461bcd60e51b815260206004820152601c60248201527f4d756c746941737365743a20556e6578706563746564206173736574000000006044820152606401610547565b60008381526009602090815260408083206001600160401b038086168552925282205416908082156110d6576110d083600a60008981526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156110bd57602002820191906000526020600020906000905b82829054906101000a90046001600160401b03166001600160401b03168152602001906008019060208260070104928301926001038202915080841161107a5790505b50505050506118f590919063ffffffff16565b90925090505b8015611157576000868152600a602052604090208054859190879081106110ff576110ff6121a3565b600091825260208083206004830401805460039093166008026101000a6001600160401b03818102199094169584160294909417909355888252600c835260408083209187168352925220805460ff191690556111e5565b6000868152600b60209081526040808320600a8352908320805482546001808201855593865284862060108204018054600f90921660020261010090810a61ffff8181021990941693909416939093029190911790558154928301825590845291832060048204018054600390921660080290920a6001600160401b03818102199092169188160217905592505b6000868152600d602052604090206111fd9086611387565b60008681526009602090815260408083206001600160401b0380891680865291909352818420805467ffffffffffffffff19169055905191861692909189917f3f2709a99f6c06b4e57bbb38eb0134332f96f51a3da314f41a515adbb28b17cc91a4505050505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061129c82610b6f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166113095760405162461bcd60e51b81526004016105479061201b565b600061131483610b6f565b9050806001600160a01b0316846001600160a01b0316148061135b57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b8061137f5750836001600160a01b031661137484610d36565b6001600160a01b0316145b949350505050565b8154811061139457600080fd5b815482906113a4906001906121cf565b815481106113b4576113b46121a3565b90600052602060002090600491828204019190066008029054906101000a90046001600160401b03168282815481106113ef576113ef6121a3565b90600052602060002090600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b0316021790555081805480611438576114386121e6565b60008281526020902060046000199092019182040180546001600160401b03600860038516026101000a021916905590555050565b6000818152600260205260408120546001600160a01b03166114a15760405162461bcd60e51b81526004016105479061201b565b60006114ac83610b6f565b9050806001600160a01b0316846001600160a01b031614806114f357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061137f5750836001600160a01b031661137484610513565b826001600160a01b031661151f82610b6f565b6001600160a01b0316146115875760405162461bcd60e51b815260206004820152602960248201527f4d756c746941737365743a207472616e736665722066726f6d20696e636f727260448201526832b1ba1037bbb732b960b91b6064820152608401610547565b6001600160a01b0382166115ee5760405162461bcd60e51b815260206004820152602860248201527f4d756c746941737365743a207472616e7366657220746f20746865207a65726f604482015267206164647265737360c01b6064820152608401610547565b6115f9600082611267565b6116046000826116bc565b6001600160a01b038316600090815260036020526040812080546001929061162d9084906121cf565b90915550506001600160a01b038216600090815260036020526040812080546001929061165b9084906121fc565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600081815260066020526040902080546001600160a01b0319166001600160a01b03841690811790915581906116f182610b6f565b6001600160a01b03167fb90cc0d925ac3511ab6af2d7ca73ffcf7ec4bd871fff36b958ecf440079c463e60405160405180910390a45050565b816001600160a01b0316836001600160a01b03160361178b5760405162461bcd60e51b815260206004820152601d60248201527f4d756c746941737365743a20617070726f766520746f2063616c6c65720000006044820152606401610547565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f0cff4fcf777050010027190b8061fd8bfd1de16d81b1f94e9752df1427a2623591015b60405180910390a3505050565b816001600160a01b0316836001600160a01b03160361185a5760405162461bcd60e51b815260206004820152601d60248201527f4d756c746941737365743a20617070726f766520746f2063616c6c65720000006044820152606401610547565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3191016117ec565b6118ca84848461150c565b6118d68484848461195e565b610d305760405162461bcd60e51b815260040161054790612214565b50565b81516000908190815b8181101561194d57846001600160401b0316868281518110611922576119226121a3565b60200260200101516001600160401b031603611945579250600191506119579050565b6001016118fe565b5060008092509250505b9250929050565b60006001600160a01b0384163b15611a5457604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119a2903390899088908890600401612271565b6020604051808303816000875af19250505080156119dd575060408051601f3d908101601f191682019092526119da918101906122ae565b60015b611a3a573d808015611a0b576040519150601f19603f3d011682016040523d82523d6000602084013e611a10565b606091505b508051600003611a325760405162461bcd60e51b815260040161054790612214565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061137f565b506001949350505050565b82805482825590600052602060002090600f01601090048101928215611af85791602002820160005b83821115611ac857835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302611a88565b8015611af65782816101000a81549061ffff0219169055600201602081600101049283019260010302611ac8565b505b50611b04929150611b29565b5090565b5080546000825560030160049004906000526020600020908101906118f291905b5b80821115611b045760008155600101611b2a565b6001600160e01b0319811681146118f257600080fd5b600060208284031215611b6657600080fd5b8135611b7181611b3e565b9392505050565b6000815180845260005b81811015611b9e57602081850181015186830182015201611b82565b81811115611bb0576000602083870101525b50601f01601f19169290920160200192915050565b602081526000611b716020830184611b78565b600060208284031215611bea57600080fd5b5035919050565b80356001600160a01b0381168114611c0857600080fd5b919050565b60008060408385031215611c2057600080fd5b611c2983611bf1565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611c7557611c75611c37565b604052919050565b60008060408385031215611c9057600080fd5b823591506020808401356001600160401b0380821115611caf57600080fd5b818601915086601f830112611cc357600080fd5b813581811115611cd557611cd5611c37565b8060051b9150611ce6848301611c4d565b8181529183018401918481019089841115611d0057600080fd5b938501935b83851015611d32578435925061ffff83168314611d225760008081fd5b8282529385019390850190611d05565b8096505050505050509250929050565b60008060408385031215611d5557600080fd5b611d5e83611bf1565b9150611d6c60208401611bf1565b90509250929050565b80356001600160401b0381168114611c0857600080fd5b600080600060608486031215611da157600080fd5b8335925060208401359150611db860408501611d75565b90509250925092565b600080600060608486031215611dd657600080fd5b611ddf84611bf1565b9250611ded60208501611bf1565b9150604084013590509250925092565b6020808252825182820181905260009190848201906040850190845b81811015611e3e5783516001600160401b031683529284019291840191600101611e19565b50909695505050505050565b60008060408385031215611e5d57600080fd5b82359150611d6c60208401611d75565b6020808252825182820181905260009190848201906040850190845b81811015611e3e57835161ffff1683529284019291840191600101611e89565b600060208284031215611ebb57600080fd5b611b7182611bf1565b60008060408385031215611ed757600080fd5b611ee083611bf1565b915060208301358015158114611ef557600080fd5b809150509250929050565b60008060008060808587031215611f1657600080fd5b611f1f85611bf1565b93506020611f2e818701611bf1565b93506040860135925060608601356001600160401b0380821115611f5157600080fd5b818801915088601f830112611f6557600080fd5b813581811115611f7757611f77611c37565b611f89601f8201601f19168501611c4d565b91508082528984828501011115611f9f57600080fd5b808484018584013760008482840101525080935050505092959194509250565b60008060408385031215611fd257600080fd5b50508035926020909101359150565b600181811c90821680611ff557607f821691505b60208210810361201557634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526030908201527f4d756c746941737365743a20617070726f76656420717565727920666f72206e60408201526f37b732bc34b9ba32b73a103a37b5b2b760811b606082015260800190565b60208082526025908201527f4d756c746941737365743a20617070726f76616c20746f2063757272656e742060408201526437bbb732b960d91b606082015260800190565b6020808252603c908201527f4d756c746941737365743a20617070726f76652063616c6c6572206973206e6f60408201527f74206f776e6572206e6f7220617070726f76656420666f7220616c6c00000000606082015260800190565b60208082526021908201527f4d756c746941737365743a206e6f74206f776e6572206f7220617070726f76656040820152601960fa1b606082015260800190565b60208082526035908201527f4d756c746941737365743a207472616e736665722063616c6c6572206973206e6040820152741bdd081bdddb995c881b9bdc88185c1c1c9bdd9959605a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156121e1576121e16121b9565b500390565b634e487b7160e01b600052603160045260246000fd5b6000821982111561220f5761220f6121b9565b500190565b60208082526037908201527f4d756c746941737365743a207472616e7366657220746f206e6f6e204552433760408201527f323120526563656976657220696d706c656d656e746572000000000000000000606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906122a490830184611b78565b9695505050505050565b6000602082840312156122c057600080fd5b8151611b7181611b3e56fea2646970667358221220950217bd5e937f0f624be96d1cab5e7637e2f708a40afbfb57dc4bb1b297fe5164736f6c634300080f0033";

type MultiAssetTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiAssetTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiAssetToken__factory extends ContractFactory {
  constructor(...args: MultiAssetTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiAssetToken> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<MultiAssetToken>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): MultiAssetToken {
    return super.attach(address) as MultiAssetToken;
  }
  override connect(signer: Signer): MultiAssetToken__factory {
    return super.connect(signer) as MultiAssetToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiAssetTokenInterface {
    return new utils.Interface(_abi) as MultiAssetTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiAssetToken {
    return new Contract(address, _abi, signerOrProvider) as MultiAssetToken;
  }
}
