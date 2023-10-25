/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export declare namespace IBaseTokenWrapper {
  export type PermitSignatureStruct = {
    deadline: BigNumberish;
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
  };

  export type PermitSignatureStructOutput = [
    BigNumber,
    number,
    string,
    string,
  ] & { deadline: BigNumber; v: number; r: string; s: string };
}

export interface SavingsDaiTokenWrapperInterface extends utils.Interface {
  functions: {
    'POOL()': FunctionFragment;
    'TOKEN_IN()': FunctionFragment;
    'TOKEN_OUT()': FunctionFragment;
    'getTokenInForTokenOut(uint256)': FunctionFragment;
    'getTokenOutForTokenIn(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rescueETH(address,uint256)': FunctionFragment;
    'rescueTokens(address,address,uint256)': FunctionFragment;
    'supplyToken(uint256,address,uint16)': FunctionFragment;
    'supplyTokenWithPermit(uint256,address,uint16,(uint256,uint8,bytes32,bytes32))': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'withdrawToken(uint256,address)': FunctionFragment;
    'withdrawTokenWithPermit(uint256,address,(uint256,uint8,bytes32,bytes32))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'POOL'
      | 'TOKEN_IN'
      | 'TOKEN_OUT'
      | 'getTokenInForTokenOut'
      | 'getTokenOutForTokenIn'
      | 'owner'
      | 'renounceOwnership'
      | 'rescueETH'
      | 'rescueTokens'
      | 'supplyToken'
      | 'supplyTokenWithPermit'
      | 'transferOwnership'
      | 'withdrawToken'
      | 'withdrawTokenWithPermit',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'POOL', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TOKEN_IN', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TOKEN_OUT', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getTokenInForTokenOut',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTokenOutForTokenIn',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'rescueETH',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'rescueTokens',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'supplyToken',
    values: [BigNumberish, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'supplyTokenWithPermit',
    values: [
      BigNumberish,
      string,
      BigNumberish,
      IBaseTokenWrapper.PermitSignatureStruct,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawToken',
    values: [BigNumberish, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawTokenWithPermit',
    values: [BigNumberish, string, IBaseTokenWrapper.PermitSignatureStruct],
  ): string;

  decodeFunctionResult(functionFragment: 'POOL', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TOKEN_IN', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TOKEN_OUT', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getTokenInForTokenOut',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTokenOutForTokenIn',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'rescueETH', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'rescueTokens',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supplyToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supplyTokenWithPermit',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawTokenWithPermit',
    data: BytesLike,
  ): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SavingsDaiTokenWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SavingsDaiTokenWrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    POOL(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_IN(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_OUT(overrides?: CallOverrides): Promise<[string]>;

    getTokenInForTokenOut(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getTokenOutForTokenIn(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    rescueETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    rescueTokens(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    supplyToken(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    supplyTokenWithPermit(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    withdrawToken(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;

    withdrawTokenWithPermit(
      amount: BigNumberish,
      to: string,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>;
  };

  POOL(overrides?: CallOverrides): Promise<string>;

  TOKEN_IN(overrides?: CallOverrides): Promise<string>;

  TOKEN_OUT(overrides?: CallOverrides): Promise<string>;

  getTokenInForTokenOut(
    amount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getTokenOutForTokenIn(
    amount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  rescueETH(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  rescueTokens(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  supplyToken(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  supplyTokenWithPermit(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    signature: IBaseTokenWrapper.PermitSignatureStruct,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  withdrawToken(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  withdrawTokenWithPermit(
    amount: BigNumberish,
    to: string,
    signature: IBaseTokenWrapper.PermitSignatureStruct,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>;

  callStatic: {
    POOL(overrides?: CallOverrides): Promise<string>;

    TOKEN_IN(overrides?: CallOverrides): Promise<string>;

    TOKEN_OUT(overrides?: CallOverrides): Promise<string>;

    getTokenInForTokenOut(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenOutForTokenIn(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueETH(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    rescueTokens(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    supplyToken(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    supplyTokenWithPermit(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    withdrawToken(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdrawTokenWithPermit(
      amount: BigNumberish,
      to: string,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_IN(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_OUT(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenInForTokenOut(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenOutForTokenIn(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    rescueETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    rescueTokens(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    supplyToken(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    supplyTokenWithPermit(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    withdrawToken(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;

    withdrawTokenWithPermit(
      amount: BigNumberish,
      to: string,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_IN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_OUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenInForTokenOut(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTokenOutForTokenIn(
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    rescueETH(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    rescueTokens(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    supplyToken(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    supplyTokenWithPermit(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;

    withdrawTokenWithPermit(
      amount: BigNumberish,
      to: string,
      signature: IBaseTokenWrapper.PermitSignatureStruct,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>;
  };
}
