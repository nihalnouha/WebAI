//write rafc for this code 
import React,{useState,useEffect, Children} from 'react';

import {ethers,Contract} from "ethers";
import axios from"axios";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";
import toast from 'react-hot-toast';

//internal import 
import { FACTORY_ABI,FACTORY_ADDRESS} from "./constants";
import {} from "../utils/shortaddress";

export const CONTEXT =React.createContext();

export const CONTEXT_Provider= ({children})=>{
 const DAPP_NAME="WebAI";
 const  [loader,setLoader]= useState(false);
 //notification
 const notifySuccess=(message)=>toast.success(message,{duration:2000});
 const notifyError=(errorMessage)=>toast.error(errorMessage,{duration:2000});

    return (
        <CONTEXT.Provider value={{}}>
          {children}
        </CONTEXT.Provider>
    )
};