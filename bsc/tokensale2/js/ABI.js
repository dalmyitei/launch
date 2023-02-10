var contractAddressMain = "0xd152Eff7595F5bB1742DFaA7450179ac85293702",
    contractAddressTest = "0xDB79844d10e9e62c0af7c178F6Fd6C50549F38E0",
    contractTokenBuilder1Main = "0x32D332487C8703D94C46F99E55b12D3BaAB45190",
    contractTokenBuilder1Test = "0x32D332487C8703D94C46F99E55b12D3BaAB45190",
    contractTokenBuilder2Main = "0x76079d9098b84cb28F2045c4fbC44EF6AAf5b0e7",
    contractTokenBuilder2Test = "0xA61Bc01643CC20e722761E35e4C270BbF4c36A03",
    contractTokenBuilder3Main = "0xeE4B8458741492455d7B9929F87342Aed9D4eF4b",
    contractTokenBuilder3Test = "0xBFFEfDCC6275bd0D6703fCe006bB69e2a06Fb4B6",
    contractTokenBuilder4Main = "0x592173bc112099c812216b62504a20aaeb38c679",
    contractTokenBuilder4Test = "0x34e18d89B43d0Ef859896D54D024072785D8C48f",
    contractTokenBuilder5Main = "0xF74A3016E6cb9C0f112F6F6ACf5e9A5dcFB13C66",
    contractTokenBuilder5Test = "0xA56750825ad3c76b53731AFaa7C9Eb982Fb7F0C3",
    contractTokenBuilder1, contractTokenBuilder2, contractTokenBuilder3, contractTokenBuilder4, contractTokenBuilder5, builderCost, builderedge, contractThis, contractThisSign, contractThisToken,
    contractThisTokenSign, balanceEth, thisDecimals, thisTokenAddress, thisAddress, thisSymbol, thisUnsold, thisUnsoldQty, available, thisBalance, thisHardcap, maxDecimals = 18,
    dayms = 86400,
    hourms = 3600,
    abi = [{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "creator",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "contractAddress",
                type: "address"
            }],
            name: "ContractCreated",
            type: "event"
        }, {
            inputs: [],
            name: "beneficiary",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "builtFree",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "builtPaid",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newBeneficiary",
                type: "address"
            }],
            name: "changeBeneficiary",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newcost",
                type: "uint256"
            }],
            name: "changeCost",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newedge",
                type: "uint256"
            }],
            name: "changeEdge",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "changeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "cost",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_rate",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_hardcap",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_free",
                type: "bool"
            }],
            name: "createTokenSale",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "edge",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "myContracts",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalBuilt",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }
    ],
    abiSale = [{
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_rate",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_hardcap",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_dappbuilderAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_edge",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "buyer",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "Contribution",
            type: "event"
        },
        {
            inputs: [],
            name: "buyToken",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_qty",
                type: "uint256"
            }],
            name: "checkAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_payment",
                type: "uint256"
            }],
            name: "checkChange",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_payment",
                type: "uint256"
            }],
            name: "checkQty",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "dappbuilderEdge",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "hardcap",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "rate",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "remaining",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "saleOn",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tokenAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRaised",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSold",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "withdrawBNB",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_address",
                type: "address"
            }],
            name: "withdrawCustomToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }
    ],
    abiToken = [{
        inputs: [{
                internalType: "string",
                name: "_name",
                type: "string"
            }, {
                internalType: "string",
                name: "_symbol",
                type: "string"
            }, {
                internalType: "uint256",
                name: "_dec",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_tax1",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_address1",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_tax2",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_address2",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_deflation",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_minSupply",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_owner",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Approval",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Transfer",
        type: "event"
    }, {
        inputs: [],
        name: "addressTax1",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "addressTax2",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            internalType: "address",
            name: "spender",
            type: "address"
        }],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "burnt",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "deflation",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "initialSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "minSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "tax1",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "tax2",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalTax1",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalTax2",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }],
    abiTokenBuilder = [{
        inputs: [{
            internalType: "uint256",
            name: "_cost",
            type: "uint256"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "oldBeneficiary",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "newBeneficiary",
            type: "address"
        }],
        name: "BeneficiarySet",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "newCost",
            type: "uint256"
        }],
        name: "Cost",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "oldOwner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "OwnerSet",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
                indexed: !0,
                internalType: "address",
                name: "tokenCreator",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                indexed: !1,
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                indexed: !1,
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            },
            {
                indexed: !1,
                internalType: "uint8",
                name: "decimals",
                type: "uint8"
            }
        ],
        name: "TokenCreated",
        type: "event"
    }, {
        inputs: [],
        name: "beneficiary",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newBeneficiary",
            type: "address"
        }],
        name: "changeBeneficiary",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "_newcost",
            type: "uint256"
        }],
        name: "changeCost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "cost",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "decimals",
                type: "uint8"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "createToken",
        outputs: [{
            internalType: "address",
            name: "tokenAddress",
            type: "address"
        }],
        stateMutability: "payable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "tokenAddress",
            type: "address"
        }],
        name: "getTokenData",
        outputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, {
            internalType: "string",
            name: "symbol",
            type: "string"
        }, {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "decimals",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "myTokens",
        outputs: [{
            internalType: "address[]",
            name: "",
            type: "address[]"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }, {
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        name: "mytokens",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        name: "tokens",
        outputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, {
            internalType: "string",
            name: "symbol",
            type: "string"
        }, {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256"
        }, {
            internalType: "uint8",
            name: "decimals",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalBuilt",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }];
