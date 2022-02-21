/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IHypervisorInterface extends ethers.utils.Interface {
  functions: {
    "addBaseLiquidity(uint256,uint256)": FunctionFragment;
    "addLimitLiquidity(uint256,uint256)": FunctionFragment;
    "appendList(address[])": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "currentTick()": FunctionFragment;
    "deposit(uint256,uint256,address,address)": FunctionFragment;
    "getTotalAmounts()": FunctionFragment;
    "pendingFees()": FunctionFragment;
    "pool()": FunctionFragment;
    "pullLiquidity(uint256)": FunctionFragment;
    "rebalance(int24,int24,int24,int24,address,int256)": FunctionFragment;
    "removeListed(address)": FunctionFragment;
    "setDepositMax(uint256,uint256)": FunctionFragment;
    "setMaxTotalSupply(uint256)": FunctionFragment;
    "toggleWhitelist()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBaseLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLimitLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "appendList",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "currentTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingFees",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeListed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositMax",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLimitLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appendList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IHypervisor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IHypervisorInterface;

  functions: {
    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    appendList(
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    currentTick(
      overrides?: CallOverrides
    ): Promise<[number] & { tick: number }>;

    "deposit(uint256,uint256,address,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(uint256,uint256,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalAmounts(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }
    >;

    pendingFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    pullLiquidity(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      swapQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeListed(
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDepositMax(
      _deposit0Max: BigNumberish,
      _deposit1Max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxTotalSupply(
      _maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleWhitelist(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBaseLiquidity(
    amount0: BigNumberish,
    amount1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLimitLiquidity(
    amount0: BigNumberish,
    amount1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  appendList(
    listed: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  currentTick(overrides?: CallOverrides): Promise<number>;

  "deposit(uint256,uint256,address,address)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: string,
    arg3: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(uint256,uint256,address)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalAmounts(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }>;

  pendingFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pool(overrides?: CallOverrides): Promise<string>;

  pullLiquidity(
    shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalance(
    _baseLower: BigNumberish,
    _baseUpper: BigNumberish,
    _limitLower: BigNumberish,
    _limitUpper: BigNumberish,
    _feeRecipient: string,
    swapQuantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeListed(
    listed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDepositMax(
    _deposit0Max: BigNumberish,
    _deposit1Max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxTotalSupply(
    _maxTotalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleWhitelist(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    arg0: BigNumberish,
    arg1: string,
    arg2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    appendList(listed: string[], overrides?: CallOverrides): Promise<void>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    currentTick(overrides?: CallOverrides): Promise<number>;

    "deposit(uint256,uint256,address,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deposit(uint256,uint256,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalAmounts(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }
    >;

    pendingFees(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { fees0: BigNumber; fees1: BigNumber }>;

    pool(overrides?: CallOverrides): Promise<string>;

    pullLiquidity(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        base0: BigNumber;
        base1: BigNumber;
        limit0: BigNumber;
        limit1: BigNumber;
      }
    >;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      swapQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeListed(listed: string, overrides?: CallOverrides): Promise<void>;

    setDepositMax(
      _deposit0Max: BigNumberish,
      _deposit1Max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxTotalSupply(
      _maxTotalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleWhitelist(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    appendList(
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    currentTick(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit(uint256,uint256,address,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(uint256,uint256,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalAmounts(overrides?: CallOverrides): Promise<BigNumber>;

    pendingFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    pullLiquidity(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      swapQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeListed(
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDepositMax(
      _deposit0Max: BigNumberish,
      _deposit1Max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxTotalSupply(
      _maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleWhitelist(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    appendList(
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "deposit(uint256,uint256,address,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(uint256,uint256,address)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalAmounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullLiquidity(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      swapQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeListed(
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDepositMax(
      _deposit0Max: BigNumberish,
      _deposit1Max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxTotalSupply(
      _maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleWhitelist(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
