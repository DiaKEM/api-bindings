import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  email: Scalars['String'];
  id: Scalars['MongoID'];
  name: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  token: Scalars['String'];
  username: Scalars['String'];
};

export type CreateManybasalInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00: Scalars['Float'];
  t_01: Scalars['Float'];
  t_02: Scalars['Float'];
  t_03: Scalars['Float'];
  t_04: Scalars['Float'];
  t_05: Scalars['Float'];
  t_06: Scalars['Float'];
  t_07: Scalars['Float'];
  t_08: Scalars['Float'];
  t_09: Scalars['Float'];
  t_10: Scalars['Float'];
  t_11: Scalars['Float'];
  t_12: Scalars['Float'];
  t_13: Scalars['Float'];
  t_14: Scalars['Float'];
  t_15: Scalars['Float'];
  t_16: Scalars['Float'];
  t_17: Scalars['Float'];
  t_18: Scalars['Float'];
  t_19: Scalars['Float'];
  t_20: Scalars['Float'];
  t_21: Scalars['Float'];
  t_22: Scalars['Float'];
  t_23: Scalars['Float'];
};

export type CreateManybasalPayload = {
  __typename?: 'CreateManybasalPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Basal>>;
};

export type CreateManybloodsugarInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency: EnumbloodsugarTendency;
  value: Scalars['Float'];
};

export type CreateManybloodsugarPayload = {
  __typename?: 'CreateManybloodsugarPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Bloodsugar>>;
};

export type CreateManybolusInput = {
  calculated?: InputMaybe<BolusCalculatedInput>;
  carbonHydrates: Scalars['Float'];
  created?: InputMaybe<Scalars['Date']>;
  factor: Scalars['Float'];
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units: Array<InputMaybe<BolusUnitsInput>>;
  value: Scalars['Float'];
};

export type CreateManybolusPayload = {
  __typename?: 'CreateManybolusPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Bolus>>;
};

export type CreateManycatheterchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type CreateManycatheterchangePayload = {
  __typename?: 'CreateManycatheterchangePayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Catheterchange>>;
};

export type CreateManycorrectionbolusInput = {
  calculation: Scalars['Float'];
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManycorrectionbolusPayload = {
  __typename?: 'CreateManycorrectionbolusPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Correctionbolus>>;
};

export type CreateManyheightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManyheightPayload = {
  __typename?: 'CreateManyheightPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Height>>;
};

export type CreateManypumpbatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManypumpbatteryPayload = {
  __typename?: 'CreateManypumpbatteryPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Pumpbattery>>;
};

export type CreateManysensorchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber: Scalars['Float'];
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type CreateManysensorchangePayload = {
  __typename?: 'CreateManysensorchangePayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Sensorchange>>;
};

export type CreateManysmartphonebatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManysmartphonebatteryPayload = {
  __typename?: 'CreateManysmartphonebatteryPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Smartphonebattery>>;
};

export type CreateManyuserInput = {
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<UserApiTokensInput>>>;
  /** E-Mail address */
  email: Scalars['String'];
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name: Scalars['String'];
  /** Hashed password */
  password: Scalars['String'];
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username: Scalars['String'];
};

export type CreateManyuserPayload = {
  __typename?: 'CreateManyuserPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
};

export type CreateManyweightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManyweightPayload = {
  __typename?: 'CreateManyweightPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Weight>>;
};

export type CreateOnebasalInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00: Scalars['Float'];
  t_01: Scalars['Float'];
  t_02: Scalars['Float'];
  t_03: Scalars['Float'];
  t_04: Scalars['Float'];
  t_05: Scalars['Float'];
  t_06: Scalars['Float'];
  t_07: Scalars['Float'];
  t_08: Scalars['Float'];
  t_09: Scalars['Float'];
  t_10: Scalars['Float'];
  t_11: Scalars['Float'];
  t_12: Scalars['Float'];
  t_13: Scalars['Float'];
  t_14: Scalars['Float'];
  t_15: Scalars['Float'];
  t_16: Scalars['Float'];
  t_17: Scalars['Float'];
  t_18: Scalars['Float'];
  t_19: Scalars['Float'];
  t_20: Scalars['Float'];
  t_21: Scalars['Float'];
  t_22: Scalars['Float'];
  t_23: Scalars['Float'];
};

export type CreateOnebasalPayload = {
  __typename?: 'CreateOnebasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Basal>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnebloodsugarInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency: EnumbloodsugarTendency;
  value: Scalars['Float'];
};

export type CreateOnebloodsugarPayload = {
  __typename?: 'CreateOnebloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Bloodsugar>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnebolusInput = {
  calculated?: InputMaybe<BolusCalculatedInput>;
  carbonHydrates: Scalars['Float'];
  created?: InputMaybe<Scalars['Date']>;
  factor: Scalars['Float'];
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units: Array<InputMaybe<BolusUnitsInput>>;
  value: Scalars['Float'];
};

export type CreateOnebolusPayload = {
  __typename?: 'CreateOnebolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Bolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnecatheterchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type CreateOnecatheterchangePayload = {
  __typename?: 'CreateOnecatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Catheterchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnecorrectionbolusInput = {
  calculation: Scalars['Float'];
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateOnecorrectionbolusPayload = {
  __typename?: 'CreateOnecorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Correctionbolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneheightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateOneheightPayload = {
  __typename?: 'CreateOneheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Height>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnepumpbatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateOnepumpbatteryPayload = {
  __typename?: 'CreateOnepumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Pumpbattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnesensorchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber: Scalars['Float'];
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type CreateOnesensorchangePayload = {
  __typename?: 'CreateOnesensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Sensorchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOnesmartphonebatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateOnesmartphonebatteryPayload = {
  __typename?: 'CreateOnesmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Smartphonebattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneuserInput = {
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<UserApiTokensInput>>>;
  /** E-Mail address */
  email: Scalars['String'];
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name: Scalars['String'];
  /** Hashed password */
  password: Scalars['String'];
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username: Scalars['String'];
};

export type CreateOneuserPayload = {
  __typename?: 'CreateOneuserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneweightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateOneweightPayload = {
  __typename?: 'CreateOneweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Weight>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export enum EnumDKeyeventType {
  Basal = 'basal',
  Bloodsugar = 'bloodsugar',
  Bolus = 'bolus',
  Catheterchange = 'catheterchange',
  Correctionbolus = 'correctionbolus',
  Height = 'height',
  Pumpbattery = 'pumpbattery',
  Sensorchange = 'sensorchange',
  Smartphonebattery = 'smartphonebattery',
  Weight = 'weight',
}

export enum EnumbloodsugarTendency {
  Falling = 'FALLING',
  FallingQuickly = 'FALLING_QUICKLY',
  FallingSlightly = 'FALLING_SLIGHTLY',
  NotAvailable = 'NOT_AVAILABLE',
  NotIdentifiable = 'NOT_IDENTIFIABLE',
  Rising = 'RISING',
  RisingQuickly = 'RISING_QUICKLY',
  RisingSlightly = 'RISING_SLIGHTLY',
  Steady = 'STEADY',
}

export enum EnumbolusMode {
  Auto = 'auto',
  ManualBolus = 'manual_bolus',
  ManualFactor = 'manual_factor',
}

export enum EnumbolusUnitsType {
  Per100 = 'per100',
  Portion = 'portion',
}

export enum EnumcatheterchangePlacement {
  Buttocks = 'buttocks',
  Leg = 'leg',
  Stomach = 'stomach',
}

export enum EnumcatheterchangeSide {
  Left = 'left',
  Right = 'right',
}

export enum EnumsensorchangePlacement {
  Arm = 'arm',
  Buttocks = 'buttocks',
  Leg = 'leg',
  Stomach = 'stomach',
}

export enum EnumsensorchangeSide {
  Left = 'left',
  Right = 'right',
}

export enum EnumuserRoles {
  Admin = 'admin',
  Reader = 'reader',
  Writer = 'writer',
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FilterCountbasalInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterCountbloodsugarInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCountbolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterCountbolusInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  calculated?: InputMaybe<FilterCountbolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterCountbolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCountbolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterCountcatheterchangeInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterCountcorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCounteventInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCounteventOperatorsInput = {
  _id?: InputMaybe<FilterCountevent_IdOperatorsInput>;
};

export type FilterCountevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterCountheightInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCountpumpbatteryInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCountsensorchangeInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterCountsmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterCountuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterCountuserInput = {
  AND?: InputMaybe<Array<FilterCountuserInput>>;
  OR?: InputMaybe<Array<FilterCountuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterCountuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountuserOperatorsInput = {
  _id?: InputMaybe<FilterCountuser_IdOperatorsInput>;
};

export type FilterCountuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterCountweightInput = {
  AND?: InputMaybe<Array<FilterCounteventInput>>;
  OR?: InputMaybe<Array<FilterCounteventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCounteventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManybasalInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManybloodsugarInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManybolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManybolusInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  calculated?: InputMaybe<FilterFindManybolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterFindManybolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManybolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManycatheterchangeInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterFindManycorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyeventInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyeventOperatorsInput = {
  _id?: InputMaybe<FilterFindManyevent_IdOperatorsInput>;
};

export type FilterFindManyevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterFindManyheightInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManypumpbatteryInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManysensorchangeInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterFindManysmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindManyuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterFindManyuserInput = {
  AND?: InputMaybe<Array<FilterFindManyuserInput>>;
  OR?: InputMaybe<Array<FilterFindManyuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterFindManyuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyuserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyuser_IdOperatorsInput>;
};

export type FilterFindManyuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterFindManyweightInput = {
  AND?: InputMaybe<Array<FilterFindManyeventInput>>;
  OR?: InputMaybe<Array<FilterFindManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnebasalInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnebloodsugarInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnebolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnebolusInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  calculated?: InputMaybe<FilterFindOnebolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterFindOnebolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnebolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnecatheterchangeInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterFindOnecorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneeventInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneeventOperatorsInput = {
  _id?: InputMaybe<FilterFindOneevent_IdOperatorsInput>;
};

export type FilterFindOneevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterFindOneheightInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnepumpbatteryInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOnesensorchangeInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterFindOnesmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterFindOneuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterFindOneuserInput = {
  AND?: InputMaybe<Array<FilterFindOneuserInput>>;
  OR?: InputMaybe<Array<FilterFindOneuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterFindOneuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneuserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneuser_IdOperatorsInput>;
};

export type FilterFindOneuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterFindOneweightInput = {
  AND?: InputMaybe<Array<FilterFindOneeventInput>>;
  OR?: InputMaybe<Array<FilterFindOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManybasalInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManybloodsugarInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManybolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManybolusInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  calculated?: InputMaybe<FilterRemoveManybolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterRemoveManybolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManybolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManycatheterchangeInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveManycorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManyeventInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyeventOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyevent_IdOperatorsInput>;
};

export type FilterRemoveManyevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterRemoveManyheightInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManypumpbatteryInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManysensorchangeInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveManysmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveManyuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveManyuserInput = {
  AND?: InputMaybe<Array<FilterRemoveManyuserInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterRemoveManyuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyuserOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyuser_IdOperatorsInput>;
};

export type FilterRemoveManyuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterRemoveManyweightInput = {
  AND?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnebasalInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnebloodsugarInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnebolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnebolusInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  calculated?: InputMaybe<FilterRemoveOnebolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterRemoveOnebolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnebolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnecatheterchangeInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveOnecorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOneeventInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneeventOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneevent_IdOperatorsInput>;
};

export type FilterRemoveOneevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneheightInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnepumpbatteryInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOnesensorchangeInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveOnesmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterRemoveOneuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterRemoveOneuserInput = {
  AND?: InputMaybe<Array<FilterRemoveOneuserInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterRemoveOneuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneuserOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneuser_IdOperatorsInput>;
};

export type FilterRemoveOneuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneweightInput = {
  AND?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManybasalInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManybloodsugarInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManybolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManybolusInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  calculated?: InputMaybe<FilterUpdateManybolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterUpdateManybolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManybolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManycatheterchangeInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateManycorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManyeventInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyeventOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyevent_IdOperatorsInput>;
};

export type FilterUpdateManyevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyheightInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManypumpbatteryInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManysensorchangeInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateManysmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateManyuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateManyuserInput = {
  AND?: InputMaybe<Array<FilterUpdateManyuserInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterUpdateManyuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyuserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyuser_IdOperatorsInput>;
};

export type FilterUpdateManyuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyweightInput = {
  AND?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnebasalInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnebloodsugarInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnebolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnebolusInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  calculated?: InputMaybe<FilterUpdateOnebolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<FilterUpdateOnebolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnebolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnecatheterchangeInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateOnecorrectionbolusInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOneeventInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumDKeyeventType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneeventOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneevent_IdOperatorsInput>;
};

export type FilterUpdateOneevent_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneheightInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnepumpbatteryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOnesensorchangeInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateOnesmartphonebatteryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FilterUpdateOneuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type FilterUpdateOneuserInput = {
  AND?: InputMaybe<Array<FilterUpdateOneuserInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneuserInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneuserOperatorsInput>;
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<FilterUpdateOneuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneuserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneuser_IdOperatorsInput>;
};

export type FilterUpdateOneuser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneweightInput = {
  AND?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneeventInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneeventOperatorsInput>;
  created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create many basalEvent's */
  basalEventCreateMany?: Maybe<CreateManybasalPayload>;
  /** Create one basalEvent */
  basalEventCreateOne?: Maybe<CreateOnebasalPayload>;
  /** Remove a single basalEvent identified by its id */
  basalEventRemoveById?: Maybe<RemoveByIdbasalPayload>;
  /** Remove many basalEvent's identified by conditions */
  basalEventRemoveMany?: Maybe<RemoveManybasalPayload>;
  /** Remove a single basalEvent identified by conditions */
  basalEventRemoveOne?: Maybe<RemoveOnebasalPayload>;
  /** Update one basalEvent identified by its id */
  basalEventUpdateById?: Maybe<UpdateByIdbasalPayload>;
  /** Update many basalEvent's identified by its ids */
  basalEventUpdateMany?: Maybe<UpdateManybasalPayload>;
  /** Update one basalEvent identified by conditions */
  basalEventUpdateOne?: Maybe<UpdateOnebasalPayload>;
  /** Create many bloodSugarEvent's */
  bloodSugarEventCreateMany?: Maybe<CreateManybloodsugarPayload>;
  /** Create one bloodSugarEvent */
  bloodSugarEventCreateOne?: Maybe<CreateOnebloodsugarPayload>;
  /** Remove a single bloodSugarEvent identified by its id */
  bloodSugarEventRemoveById?: Maybe<RemoveByIdbloodsugarPayload>;
  /** Remove many bloodSugarEvent's identified by conditions */
  bloodSugarEventRemoveMany?: Maybe<RemoveManybloodsugarPayload>;
  /** Remove a single bloodSugarEvent identified by conditions */
  bloodSugarEventRemoveOne?: Maybe<RemoveOnebloodsugarPayload>;
  /** Update one bloodSugarEvent identified by its id */
  bloodSugarEventUpdateById?: Maybe<UpdateByIdbloodsugarPayload>;
  /** Update many bloodSugarEvent's identified by its ids */
  bloodSugarEventUpdateMany?: Maybe<UpdateManybloodsugarPayload>;
  /** Update one bloodSugarEvent identified by conditions */
  bloodSugarEventUpdateOne?: Maybe<UpdateOnebloodsugarPayload>;
  /** Create many bolusEvent's */
  bolusEventCreateMany?: Maybe<CreateManybolusPayload>;
  /** Create one bolusEvent */
  bolusEventCreateOne?: Maybe<CreateOnebolusPayload>;
  /** Remove a single bolusEvent identified by its id */
  bolusEventRemoveById?: Maybe<RemoveByIdbolusPayload>;
  /** Remove many bolusEvent's identified by conditions */
  bolusEventRemoveMany?: Maybe<RemoveManybolusPayload>;
  /** Remove a single bolusEvent identified by conditions */
  bolusEventRemoveOne?: Maybe<RemoveOnebolusPayload>;
  /** Update one bolusEvent identified by its id */
  bolusEventUpdateById?: Maybe<UpdateByIdbolusPayload>;
  /** Update many bolusEvent's identified by its ids */
  bolusEventUpdateMany?: Maybe<UpdateManybolusPayload>;
  /** Update one bolusEvent identified by conditions */
  bolusEventUpdateOne?: Maybe<UpdateOnebolusPayload>;
  /** Create many catheterChangeEvent's */
  catheterChangeEventCreateMany?: Maybe<CreateManycatheterchangePayload>;
  /** Create one catheterChangeEvent */
  catheterChangeEventCreateOne?: Maybe<CreateOnecatheterchangePayload>;
  /** Remove a single catheterChangeEvent identified by its id */
  catheterChangeEventRemoveById?: Maybe<RemoveByIdcatheterchangePayload>;
  /** Remove many catheterChangeEvent's identified by conditions */
  catheterChangeEventRemoveMany?: Maybe<RemoveManycatheterchangePayload>;
  /** Remove a single catheterChangeEvent identified by conditions */
  catheterChangeEventRemoveOne?: Maybe<RemoveOnecatheterchangePayload>;
  /** Update one catheterChangeEvent identified by its id */
  catheterChangeEventUpdateById?: Maybe<UpdateByIdcatheterchangePayload>;
  /** Update many catheterChangeEvent's identified by its ids */
  catheterChangeEventUpdateMany?: Maybe<UpdateManycatheterchangePayload>;
  /** Update one catheterChangeEvent identified by conditions */
  catheterChangeEventUpdateOne?: Maybe<UpdateOnecatheterchangePayload>;
  /** Create many correctionBolusEvent's */
  correctionBolusEventCreateMany?: Maybe<CreateManycorrectionbolusPayload>;
  /** Create one correctionBolusEvent */
  correctionBolusEventCreateOne?: Maybe<CreateOnecorrectionbolusPayload>;
  /** Remove a single correctionBolusEvent identified by its id */
  correctionBolusEventRemoveById?: Maybe<RemoveByIdcorrectionbolusPayload>;
  /** Remove many correctionBolusEvent's identified by conditions */
  correctionBolusEventRemoveMany?: Maybe<RemoveManycorrectionbolusPayload>;
  /** Remove a single correctionBolusEvent identified by conditions */
  correctionBolusEventRemoveOne?: Maybe<RemoveOnecorrectionbolusPayload>;
  /** Update one correctionBolusEvent identified by its id */
  correctionBolusEventUpdateById?: Maybe<UpdateByIdcorrectionbolusPayload>;
  /** Update many correctionBolusEvent's identified by its ids */
  correctionBolusEventUpdateMany?: Maybe<UpdateManycorrectionbolusPayload>;
  /** Update one correctionBolusEvent identified by conditions */
  correctionBolusEventUpdateOne?: Maybe<UpdateOnecorrectionbolusPayload>;
  /** Create many heightEvent's */
  heightEventCreateMany?: Maybe<CreateManyheightPayload>;
  /** Create one heightEvent */
  heightEventCreateOne?: Maybe<CreateOneheightPayload>;
  /** Remove a single heightEvent identified by its id */
  heightEventRemoveById?: Maybe<RemoveByIdheightPayload>;
  /** Remove many heightEvent's identified by conditions */
  heightEventRemoveMany?: Maybe<RemoveManyheightPayload>;
  /** Remove a single heightEvent identified by conditions */
  heightEventRemoveOne?: Maybe<RemoveOneheightPayload>;
  /** Update one heightEvent identified by its id */
  heightEventUpdateById?: Maybe<UpdateByIdheightPayload>;
  /** Update many heightEvent's identified by its ids */
  heightEventUpdateMany?: Maybe<UpdateManyheightPayload>;
  /** Update one heightEvent identified by conditions */
  heightEventUpdateOne?: Maybe<UpdateOneheightPayload>;
  /** Login and retrieve a JWT to interact with guarded endpoints */
  login?: Maybe<AuthToken>;
  /** Create many pumpBatteryEvent's */
  pumpBatteryEventCreateMany?: Maybe<CreateManypumpbatteryPayload>;
  /** Create one pumpBatteryEvent */
  pumpBatteryEventCreateOne?: Maybe<CreateOnepumpbatteryPayload>;
  /** Remove a single pumpBatteryEvent identified by its id */
  pumpBatteryEventRemoveById?: Maybe<RemoveByIdpumpbatteryPayload>;
  /** Remove many pumpBatteryEvent's identified by conditions */
  pumpBatteryEventRemoveMany?: Maybe<RemoveManypumpbatteryPayload>;
  /** Remove a single pumpBatteryEvent identified by conditions */
  pumpBatteryEventRemoveOne?: Maybe<RemoveOnepumpbatteryPayload>;
  /** Update one pumpBatteryEvent identified by its id */
  pumpBatteryEventUpdateById?: Maybe<UpdateByIdpumpbatteryPayload>;
  /** Update many pumpBatteryEvent's identified by its ids */
  pumpBatteryEventUpdateMany?: Maybe<UpdateManypumpbatteryPayload>;
  /** Update one pumpBatteryEvent identified by conditions */
  pumpBatteryEventUpdateOne?: Maybe<UpdateOnepumpbatteryPayload>;
  /** Create many sensorChangeEvent's */
  sensorChangeEventCreateMany?: Maybe<CreateManysensorchangePayload>;
  /** Create one sensorChangeEvent */
  sensorChangeEventCreateOne?: Maybe<CreateOnesensorchangePayload>;
  /** Remove a single sensorChangeEvent identified by its id */
  sensorChangeEventRemoveById?: Maybe<RemoveByIdsensorchangePayload>;
  /** Remove many sensorChangeEvent's identified by conditions */
  sensorChangeEventRemoveMany?: Maybe<RemoveManysensorchangePayload>;
  /** Remove a single sensorChangeEvent identified by conditions */
  sensorChangeEventRemoveOne?: Maybe<RemoveOnesensorchangePayload>;
  /** Update one sensorChangeEvent identified by its id */
  sensorChangeEventUpdateById?: Maybe<UpdateByIdsensorchangePayload>;
  /** Update many sensorChangeEvent's identified by its ids */
  sensorChangeEventUpdateMany?: Maybe<UpdateManysensorchangePayload>;
  /** Update one sensorChangeEvent identified by conditions */
  sensorChangeEventUpdateOne?: Maybe<UpdateOnesensorchangePayload>;
  /** Create many smartphoneBatteryEvent's */
  smartphoneBatteryEventCreateMany?: Maybe<CreateManysmartphonebatteryPayload>;
  /** Create one smartphoneBatteryEvent */
  smartphoneBatteryEventCreateOne?: Maybe<CreateOnesmartphonebatteryPayload>;
  /** Remove a single smartphoneBatteryEvent identified by its id */
  smartphoneBatteryEventRemoveById?: Maybe<RemoveByIdsmartphonebatteryPayload>;
  /** Remove many smartphoneBatteryEvent's identified by conditions */
  smartphoneBatteryEventRemoveMany?: Maybe<RemoveManysmartphonebatteryPayload>;
  /** Remove a single smartphoneBatteryEvent identified by conditions */
  smartphoneBatteryEventRemoveOne?: Maybe<RemoveOnesmartphonebatteryPayload>;
  /** Update one smartphoneBatteryEvent identified by its id */
  smartphoneBatteryEventUpdateById?: Maybe<UpdateByIdsmartphonebatteryPayload>;
  /** Update many smartphoneBatteryEvent's identified by its ids */
  smartphoneBatteryEventUpdateMany?: Maybe<UpdateManysmartphonebatteryPayload>;
  /** Update one smartphoneBatteryEvent identified by conditions */
  smartphoneBatteryEventUpdateOne?: Maybe<UpdateOnesmartphonebatteryPayload>;
  /** Create many user's */
  userCreateMany?: Maybe<CreateManyuserPayload>;
  /** Create one user */
  userCreateOne?: Maybe<CreateOneuserPayload>;
  /** Remove a single user identified by its id */
  userRemoveById?: Maybe<RemoveByIduserPayload>;
  /** Remove many user's identified by conditions */
  userRemoveMany?: Maybe<RemoveManyuserPayload>;
  /** Remove a single user identified by conditions */
  userRemoveOne?: Maybe<RemoveOneuserPayload>;
  /** Update one user identified by its id */
  userUpdateById?: Maybe<UpdateByIduserPayload>;
  /** Update many user's identified by its ids */
  userUpdateMany?: Maybe<UpdateManyuserPayload>;
  /** Update one user identified by conditions */
  userUpdateOne?: Maybe<UpdateOneuserPayload>;
  /** Create many weightEvent's */
  weightEventCreateMany?: Maybe<CreateManyweightPayload>;
  /** Create one weightEvent */
  weightEventCreateOne?: Maybe<CreateOneweightPayload>;
  /** Remove a single weightEvent identified by its id */
  weightEventRemoveById?: Maybe<RemoveByIdweightPayload>;
  /** Remove many weightEvent's identified by conditions */
  weightEventRemoveMany?: Maybe<RemoveManyweightPayload>;
  /** Remove a single weightEvent identified by conditions */
  weightEventRemoveOne?: Maybe<RemoveOneweightPayload>;
  /** Update one weightEvent identified by its id */
  weightEventUpdateById?: Maybe<UpdateByIdweightPayload>;
  /** Update many weightEvent's identified by its ids */
  weightEventUpdateMany?: Maybe<UpdateManyweightPayload>;
  /** Update one weightEvent identified by conditions */
  weightEventUpdateOne?: Maybe<UpdateOneweightPayload>;
};

export type MutationBasalEventCreateManyArgs = {
  records: Array<CreateManybasalInput>;
};

export type MutationBasalEventCreateOneArgs = {
  record: CreateOnebasalInput;
};

export type MutationBasalEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationBasalEventRemoveManyArgs = {
  filter: FilterRemoveManybasalInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationBasalEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnebasalInput>;
  sort?: InputMaybe<SortRemoveOnebasalInput>;
};

export type MutationBasalEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdbasalInput;
};

export type MutationBasalEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManybasalInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManybasalInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManybasalInput>;
};

export type MutationBasalEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnebasalInput>;
  record: UpdateOnebasalInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnebasalInput>;
};

export type MutationBloodSugarEventCreateManyArgs = {
  records: Array<CreateManybloodsugarInput>;
};

export type MutationBloodSugarEventCreateOneArgs = {
  record: CreateOnebloodsugarInput;
};

export type MutationBloodSugarEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationBloodSugarEventRemoveManyArgs = {
  filter: FilterRemoveManybloodsugarInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationBloodSugarEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnebloodsugarInput>;
  sort?: InputMaybe<SortRemoveOnebloodsugarInput>;
};

export type MutationBloodSugarEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdbloodsugarInput;
};

export type MutationBloodSugarEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManybloodsugarInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManybloodsugarInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManybloodsugarInput>;
};

export type MutationBloodSugarEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnebloodsugarInput>;
  record: UpdateOnebloodsugarInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnebloodsugarInput>;
};

export type MutationBolusEventCreateManyArgs = {
  records: Array<CreateManybolusInput>;
};

export type MutationBolusEventCreateOneArgs = {
  record: CreateOnebolusInput;
};

export type MutationBolusEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationBolusEventRemoveManyArgs = {
  filter: FilterRemoveManybolusInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationBolusEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnebolusInput>;
  sort?: InputMaybe<SortRemoveOnebolusInput>;
};

export type MutationBolusEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdbolusInput;
};

export type MutationBolusEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManybolusInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManybolusInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManybolusInput>;
};

export type MutationBolusEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnebolusInput>;
  record: UpdateOnebolusInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnebolusInput>;
};

export type MutationCatheterChangeEventCreateManyArgs = {
  records: Array<CreateManycatheterchangeInput>;
};

export type MutationCatheterChangeEventCreateOneArgs = {
  record: CreateOnecatheterchangeInput;
};

export type MutationCatheterChangeEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationCatheterChangeEventRemoveManyArgs = {
  filter: FilterRemoveManycatheterchangeInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationCatheterChangeEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnecatheterchangeInput>;
  sort?: InputMaybe<SortRemoveOnecatheterchangeInput>;
};

export type MutationCatheterChangeEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdcatheterchangeInput;
};

export type MutationCatheterChangeEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManycatheterchangeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManycatheterchangeInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManycatheterchangeInput>;
};

export type MutationCatheterChangeEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnecatheterchangeInput>;
  record: UpdateOnecatheterchangeInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnecatheterchangeInput>;
};

export type MutationCorrectionBolusEventCreateManyArgs = {
  records: Array<CreateManycorrectionbolusInput>;
};

export type MutationCorrectionBolusEventCreateOneArgs = {
  record: CreateOnecorrectionbolusInput;
};

export type MutationCorrectionBolusEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationCorrectionBolusEventRemoveManyArgs = {
  filter: FilterRemoveManycorrectionbolusInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationCorrectionBolusEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnecorrectionbolusInput>;
  sort?: InputMaybe<SortRemoveOnecorrectionbolusInput>;
};

export type MutationCorrectionBolusEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdcorrectionbolusInput;
};

export type MutationCorrectionBolusEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManycorrectionbolusInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManycorrectionbolusInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManycorrectionbolusInput>;
};

export type MutationCorrectionBolusEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnecorrectionbolusInput>;
  record: UpdateOnecorrectionbolusInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnecorrectionbolusInput>;
};

export type MutationHeightEventCreateManyArgs = {
  records: Array<CreateManyheightInput>;
};

export type MutationHeightEventCreateOneArgs = {
  record: CreateOneheightInput;
};

export type MutationHeightEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationHeightEventRemoveManyArgs = {
  filter: FilterRemoveManyheightInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationHeightEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneheightInput>;
  sort?: InputMaybe<SortRemoveOneheightInput>;
};

export type MutationHeightEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdheightInput;
};

export type MutationHeightEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyheightInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManyheightInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManyheightInput>;
};

export type MutationHeightEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneheightInput>;
  record: UpdateOneheightInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOneheightInput>;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationPumpBatteryEventCreateManyArgs = {
  records: Array<CreateManypumpbatteryInput>;
};

export type MutationPumpBatteryEventCreateOneArgs = {
  record: CreateOnepumpbatteryInput;
};

export type MutationPumpBatteryEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationPumpBatteryEventRemoveManyArgs = {
  filter: FilterRemoveManypumpbatteryInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationPumpBatteryEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnepumpbatteryInput>;
  sort?: InputMaybe<SortRemoveOnepumpbatteryInput>;
};

export type MutationPumpBatteryEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdpumpbatteryInput;
};

export type MutationPumpBatteryEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManypumpbatteryInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManypumpbatteryInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManypumpbatteryInput>;
};

export type MutationPumpBatteryEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnepumpbatteryInput>;
  record: UpdateOnepumpbatteryInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnepumpbatteryInput>;
};

export type MutationSensorChangeEventCreateManyArgs = {
  records: Array<CreateManysensorchangeInput>;
};

export type MutationSensorChangeEventCreateOneArgs = {
  record: CreateOnesensorchangeInput;
};

export type MutationSensorChangeEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationSensorChangeEventRemoveManyArgs = {
  filter: FilterRemoveManysensorchangeInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationSensorChangeEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnesensorchangeInput>;
  sort?: InputMaybe<SortRemoveOnesensorchangeInput>;
};

export type MutationSensorChangeEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdsensorchangeInput;
};

export type MutationSensorChangeEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManysensorchangeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManysensorchangeInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManysensorchangeInput>;
};

export type MutationSensorChangeEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnesensorchangeInput>;
  record: UpdateOnesensorchangeInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnesensorchangeInput>;
};

export type MutationSmartphoneBatteryEventCreateManyArgs = {
  records: Array<CreateManysmartphonebatteryInput>;
};

export type MutationSmartphoneBatteryEventCreateOneArgs = {
  record: CreateOnesmartphonebatteryInput;
};

export type MutationSmartphoneBatteryEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationSmartphoneBatteryEventRemoveManyArgs = {
  filter: FilterRemoveManysmartphonebatteryInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationSmartphoneBatteryEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnesmartphonebatteryInput>;
  sort?: InputMaybe<SortRemoveOnesmartphonebatteryInput>;
};

export type MutationSmartphoneBatteryEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdsmartphonebatteryInput;
};

export type MutationSmartphoneBatteryEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManysmartphonebatteryInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManysmartphonebatteryInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManysmartphonebatteryInput>;
};

export type MutationSmartphoneBatteryEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnesmartphonebatteryInput>;
  record: UpdateOnesmartphonebatteryInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOnesmartphonebatteryInput>;
};

export type MutationUserCreateManyArgs = {
  records: Array<CreateManyuserInput>;
};

export type MutationUserCreateOneArgs = {
  record: CreateOneuserInput;
};

export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyuserInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationUserRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneuserInput>;
  sort?: InputMaybe<SortRemoveOneuserInput>;
};

export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIduserInput;
};

export type MutationUserUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyuserInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManyuserInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManyuserInput>;
};

export type MutationUserUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneuserInput>;
  record: UpdateOneuserInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOneuserInput>;
};

export type MutationWeightEventCreateManyArgs = {
  records: Array<CreateManyweightInput>;
};

export type MutationWeightEventCreateOneArgs = {
  record: CreateOneweightInput;
};

export type MutationWeightEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};

export type MutationWeightEventRemoveManyArgs = {
  filter: FilterRemoveManyweightInput;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MutationWeightEventRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneweightInput>;
  sort?: InputMaybe<SortRemoveOneweightInput>;
};

export type MutationWeightEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdweightInput;
};

export type MutationWeightEventUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyweightInput>;
  limit?: InputMaybe<Scalars['Int']>;
  record: UpdateManyweightInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateManyweightInput>;
};

export type MutationWeightEventUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneweightInput>;
  record: UpdateOneweightInput;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortUpdateOneweightInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  itemCount?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Find a single basalEvent by its id */
  basalEventById?: Maybe<Basal>;
  /** Find many basalEvent's by ids */
  basalEventByIds: Array<Basal>;
  basalEventConnection?: Maybe<BasalConnection>;
  /** Get count of basalEvent's matching conditions */
  basalEventCount?: Maybe<Scalars['Int']>;
  basalEventDataLoader?: Maybe<Basal>;
  basalEventDataLoaderMany: Array<Maybe<Basal>>;
  /** Find many basalEvent's by conditions */
  basalEventMany: Array<Basal>;
  /** Find a single basalEvent by conditions */
  basalEventOne?: Maybe<Basal>;
  basalEventPagination?: Maybe<BasalPagination>;
  /** Find a single bloodSugarEvent by its id */
  bloodSugarEventById?: Maybe<Bloodsugar>;
  /** Find many bloodSugarEvent's by ids */
  bloodSugarEventByIds: Array<Bloodsugar>;
  bloodSugarEventConnection?: Maybe<BloodsugarConnection>;
  /** Get count of bloodSugarEvent's matching conditions */
  bloodSugarEventCount?: Maybe<Scalars['Int']>;
  bloodSugarEventDataLoader?: Maybe<Bloodsugar>;
  bloodSugarEventDataLoaderMany: Array<Maybe<Bloodsugar>>;
  /** Find many bloodSugarEvent's by conditions */
  bloodSugarEventMany: Array<Bloodsugar>;
  /** Find a single bloodSugarEvent by conditions */
  bloodSugarEventOne?: Maybe<Bloodsugar>;
  bloodSugarEventPagination?: Maybe<BloodsugarPagination>;
  /** Find a single bolusEvent by its id */
  bolusEventById?: Maybe<Bolus>;
  /** Find many bolusEvent's by ids */
  bolusEventByIds: Array<Bolus>;
  bolusEventConnection?: Maybe<BolusConnection>;
  /** Get count of bolusEvent's matching conditions */
  bolusEventCount?: Maybe<Scalars['Int']>;
  bolusEventDataLoader?: Maybe<Bolus>;
  bolusEventDataLoaderMany: Array<Maybe<Bolus>>;
  /** Find many bolusEvent's by conditions */
  bolusEventMany: Array<Bolus>;
  /** Find a single bolusEvent by conditions */
  bolusEventOne?: Maybe<Bolus>;
  bolusEventPagination?: Maybe<BolusPagination>;
  /** Find a single catheterChangeEvent by its id */
  catheterChangeEventById?: Maybe<Catheterchange>;
  /** Find many catheterChangeEvent's by ids */
  catheterChangeEventByIds: Array<Catheterchange>;
  catheterChangeEventConnection?: Maybe<CatheterchangeConnection>;
  /** Get count of catheterChangeEvent's matching conditions */
  catheterChangeEventCount?: Maybe<Scalars['Int']>;
  catheterChangeEventDataLoader?: Maybe<Catheterchange>;
  catheterChangeEventDataLoaderMany: Array<Maybe<Catheterchange>>;
  /** Find many catheterChangeEvent's by conditions */
  catheterChangeEventMany: Array<Catheterchange>;
  /** Find a single catheterChangeEvent by conditions */
  catheterChangeEventOne?: Maybe<Catheterchange>;
  catheterChangeEventPagination?: Maybe<CatheterchangePagination>;
  /** Find a single correctionBolusEvent by its id */
  correctionBolusEventById?: Maybe<Correctionbolus>;
  /** Find many correctionBolusEvent's by ids */
  correctionBolusEventByIds: Array<Correctionbolus>;
  correctionBolusEventConnection?: Maybe<CorrectionbolusConnection>;
  /** Get count of correctionBolusEvent's matching conditions */
  correctionBolusEventCount?: Maybe<Scalars['Int']>;
  correctionBolusEventDataLoader?: Maybe<Correctionbolus>;
  correctionBolusEventDataLoaderMany: Array<Maybe<Correctionbolus>>;
  /** Find many correctionBolusEvent's by conditions */
  correctionBolusEventMany: Array<Correctionbolus>;
  /** Find a single correctionBolusEvent by conditions */
  correctionBolusEventOne?: Maybe<Correctionbolus>;
  correctionBolusEventPagination?: Maybe<CorrectionbolusPagination>;
  /** Find a single heightEvent by its id */
  heightEventById?: Maybe<Height>;
  /** Find many heightEvent's by ids */
  heightEventByIds: Array<Height>;
  heightEventConnection?: Maybe<HeightConnection>;
  /** Get count of heightEvent's matching conditions */
  heightEventCount?: Maybe<Scalars['Int']>;
  heightEventDataLoader?: Maybe<Height>;
  heightEventDataLoaderMany: Array<Maybe<Height>>;
  /** Find many heightEvent's by conditions */
  heightEventMany: Array<Height>;
  /** Find a single heightEvent by conditions */
  heightEventOne?: Maybe<Height>;
  heightEventPagination?: Maybe<HeightPagination>;
  /** Get currently logged in user */
  me?: Maybe<User>;
  /** Find a single pumpBatteryEvent by its id */
  pumpBatteryEventById?: Maybe<Pumpbattery>;
  /** Find many pumpBatteryEvent's by ids */
  pumpBatteryEventByIds: Array<Pumpbattery>;
  pumpBatteryEventConnection?: Maybe<PumpbatteryConnection>;
  /** Get count of pumpBatteryEvent's matching conditions */
  pumpBatteryEventCount?: Maybe<Scalars['Int']>;
  pumpBatteryEventDataLoader?: Maybe<Pumpbattery>;
  pumpBatteryEventDataLoaderMany: Array<Maybe<Pumpbattery>>;
  /** Find many pumpBatteryEvent's by conditions */
  pumpBatteryEventMany: Array<Pumpbattery>;
  /** Find a single pumpBatteryEvent by conditions */
  pumpBatteryEventOne?: Maybe<Pumpbattery>;
  pumpBatteryEventPagination?: Maybe<PumpbatteryPagination>;
  /** Find a single sensorChangeEvent by its id */
  sensorChangeEventById?: Maybe<Sensorchange>;
  /** Find many sensorChangeEvent's by ids */
  sensorChangeEventByIds: Array<Sensorchange>;
  sensorChangeEventConnection?: Maybe<SensorchangeConnection>;
  /** Get count of sensorChangeEvent's matching conditions */
  sensorChangeEventCount?: Maybe<Scalars['Int']>;
  sensorChangeEventDataLoader?: Maybe<Sensorchange>;
  sensorChangeEventDataLoaderMany: Array<Maybe<Sensorchange>>;
  /** Find many sensorChangeEvent's by conditions */
  sensorChangeEventMany: Array<Sensorchange>;
  /** Find a single sensorChangeEvent by conditions */
  sensorChangeEventOne?: Maybe<Sensorchange>;
  sensorChangeEventPagination?: Maybe<SensorchangePagination>;
  /** Find a single smartphoneBatteryEvent by its id */
  smartphoneBatteryEventById?: Maybe<Smartphonebattery>;
  /** Find many smartphoneBatteryEvent's by ids */
  smartphoneBatteryEventByIds: Array<Smartphonebattery>;
  smartphoneBatteryEventConnection?: Maybe<SmartphonebatteryConnection>;
  /** Get count of smartphoneBatteryEvent's matching conditions */
  smartphoneBatteryEventCount?: Maybe<Scalars['Int']>;
  smartphoneBatteryEventDataLoader?: Maybe<Smartphonebattery>;
  smartphoneBatteryEventDataLoaderMany: Array<Maybe<Smartphonebattery>>;
  /** Find many smartphoneBatteryEvent's by conditions */
  smartphoneBatteryEventMany: Array<Smartphonebattery>;
  /** Find a single smartphoneBatteryEvent by conditions */
  smartphoneBatteryEventOne?: Maybe<Smartphonebattery>;
  smartphoneBatteryEventPagination?: Maybe<SmartphonebatteryPagination>;
  /** Find a single user by its id */
  userById?: Maybe<User>;
  /** Find a single user by its id */
  userByIdLean?: Maybe<User>;
  /** Find many user's by ids */
  userByIds: Array<User>;
  /** Find a single user by conditions */
  userByIdsLean: Array<User>;
  userConnection?: Maybe<UserConnection>;
  /** Get count of user's matching conditions */
  userCount?: Maybe<Scalars['Int']>;
  userDataLoader?: Maybe<User>;
  userDataLoaderLean?: Maybe<User>;
  userDataLoaderMany: Array<Maybe<User>>;
  userDataLoaderManyLean: Array<Maybe<User>>;
  /** Find many user's by conditions */
  userMany: Array<User>;
  /** Find many user's by conditions */
  userManyLean: Array<User>;
  /** Find a single user by conditions */
  userOne?: Maybe<User>;
  /** Find a single user by conditions */
  userOneLean?: Maybe<User>;
  userPagination?: Maybe<UserPagination>;
  /** Find a single weightEvent by its id */
  weightEventById?: Maybe<Weight>;
  /** Find many weightEvent's by ids */
  weightEventByIds: Array<Weight>;
  weightEventConnection?: Maybe<WeightConnection>;
  /** Get count of weightEvent's matching conditions */
  weightEventCount?: Maybe<Scalars['Int']>;
  weightEventDataLoader?: Maybe<Weight>;
  weightEventDataLoaderMany: Array<Maybe<Weight>>;
  /** Find many weightEvent's by conditions */
  weightEventMany: Array<Weight>;
  /** Find a single weightEvent by conditions */
  weightEventOne?: Maybe<Weight>;
  weightEventPagination?: Maybe<WeightPagination>;
};

export type QueryBasalEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBasalEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsbasalInput>;
};

export type QueryBasalEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManybasalInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionbasalEnum>;
};

export type QueryBasalEventCountArgs = {
  filter?: InputMaybe<FilterCountbasalInput>;
};

export type QueryBasalEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBasalEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryBasalEventManyArgs = {
  filter?: InputMaybe<FilterFindManybasalInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybasalInput>;
};

export type QueryBasalEventOneArgs = {
  filter?: InputMaybe<FilterFindOnebasalInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnebasalInput>;
};

export type QueryBasalEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManybasalInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybasalInput>;
};

export type QueryBloodSugarEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBloodSugarEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsbloodsugarInput>;
};

export type QueryBloodSugarEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManybloodsugarInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionbloodsugarEnum>;
};

export type QueryBloodSugarEventCountArgs = {
  filter?: InputMaybe<FilterCountbloodsugarInput>;
};

export type QueryBloodSugarEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBloodSugarEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryBloodSugarEventManyArgs = {
  filter?: InputMaybe<FilterFindManybloodsugarInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybloodsugarInput>;
};

export type QueryBloodSugarEventOneArgs = {
  filter?: InputMaybe<FilterFindOnebloodsugarInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnebloodsugarInput>;
};

export type QueryBloodSugarEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManybloodsugarInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybloodsugarInput>;
};

export type QueryBolusEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBolusEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsbolusInput>;
};

export type QueryBolusEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManybolusInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionbolusEnum>;
};

export type QueryBolusEventCountArgs = {
  filter?: InputMaybe<FilterCountbolusInput>;
};

export type QueryBolusEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryBolusEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryBolusEventManyArgs = {
  filter?: InputMaybe<FilterFindManybolusInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybolusInput>;
};

export type QueryBolusEventOneArgs = {
  filter?: InputMaybe<FilterFindOnebolusInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnebolusInput>;
};

export type QueryBolusEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManybolusInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManybolusInput>;
};

export type QueryCatheterChangeEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryCatheterChangeEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdscatheterchangeInput>;
};

export type QueryCatheterChangeEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManycatheterchangeInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectioncatheterchangeEnum>;
};

export type QueryCatheterChangeEventCountArgs = {
  filter?: InputMaybe<FilterCountcatheterchangeInput>;
};

export type QueryCatheterChangeEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryCatheterChangeEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryCatheterChangeEventManyArgs = {
  filter?: InputMaybe<FilterFindManycatheterchangeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManycatheterchangeInput>;
};

export type QueryCatheterChangeEventOneArgs = {
  filter?: InputMaybe<FilterFindOnecatheterchangeInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnecatheterchangeInput>;
};

export type QueryCatheterChangeEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManycatheterchangeInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManycatheterchangeInput>;
};

export type QueryCorrectionBolusEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryCorrectionBolusEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdscorrectionbolusInput>;
};

export type QueryCorrectionBolusEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManycorrectionbolusInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectioncorrectionbolusEnum>;
};

export type QueryCorrectionBolusEventCountArgs = {
  filter?: InputMaybe<FilterCountcorrectionbolusInput>;
};

export type QueryCorrectionBolusEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryCorrectionBolusEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryCorrectionBolusEventManyArgs = {
  filter?: InputMaybe<FilterFindManycorrectionbolusInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManycorrectionbolusInput>;
};

export type QueryCorrectionBolusEventOneArgs = {
  filter?: InputMaybe<FilterFindOnecorrectionbolusInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnecorrectionbolusInput>;
};

export type QueryCorrectionBolusEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManycorrectionbolusInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManycorrectionbolusInput>;
};

export type QueryHeightEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryHeightEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsheightInput>;
};

export type QueryHeightEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManyheightInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionheightEnum>;
};

export type QueryHeightEventCountArgs = {
  filter?: InputMaybe<FilterCountheightInput>;
};

export type QueryHeightEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryHeightEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryHeightEventManyArgs = {
  filter?: InputMaybe<FilterFindManyheightInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyheightInput>;
};

export type QueryHeightEventOneArgs = {
  filter?: InputMaybe<FilterFindOneheightInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneheightInput>;
};

export type QueryHeightEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManyheightInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyheightInput>;
};

export type QueryPumpBatteryEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryPumpBatteryEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdspumpbatteryInput>;
};

export type QueryPumpBatteryEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManypumpbatteryInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionpumpbatteryEnum>;
};

export type QueryPumpBatteryEventCountArgs = {
  filter?: InputMaybe<FilterCountpumpbatteryInput>;
};

export type QueryPumpBatteryEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryPumpBatteryEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryPumpBatteryEventManyArgs = {
  filter?: InputMaybe<FilterFindManypumpbatteryInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManypumpbatteryInput>;
};

export type QueryPumpBatteryEventOneArgs = {
  filter?: InputMaybe<FilterFindOnepumpbatteryInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnepumpbatteryInput>;
};

export type QueryPumpBatteryEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManypumpbatteryInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManypumpbatteryInput>;
};

export type QuerySensorChangeEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QuerySensorChangeEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdssensorchangeInput>;
};

export type QuerySensorChangeEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManysensorchangeInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionsensorchangeEnum>;
};

export type QuerySensorChangeEventCountArgs = {
  filter?: InputMaybe<FilterCountsensorchangeInput>;
};

export type QuerySensorChangeEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QuerySensorChangeEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QuerySensorChangeEventManyArgs = {
  filter?: InputMaybe<FilterFindManysensorchangeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManysensorchangeInput>;
};

export type QuerySensorChangeEventOneArgs = {
  filter?: InputMaybe<FilterFindOnesensorchangeInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnesensorchangeInput>;
};

export type QuerySensorChangeEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManysensorchangeInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManysensorchangeInput>;
};

export type QuerySmartphoneBatteryEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QuerySmartphoneBatteryEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdssmartphonebatteryInput>;
};

export type QuerySmartphoneBatteryEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManysmartphonebatteryInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionsmartphonebatteryEnum>;
};

export type QuerySmartphoneBatteryEventCountArgs = {
  filter?: InputMaybe<FilterCountsmartphonebatteryInput>;
};

export type QuerySmartphoneBatteryEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QuerySmartphoneBatteryEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QuerySmartphoneBatteryEventManyArgs = {
  filter?: InputMaybe<FilterFindManysmartphonebatteryInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManysmartphonebatteryInput>;
};

export type QuerySmartphoneBatteryEventOneArgs = {
  filter?: InputMaybe<FilterFindOnesmartphonebatteryInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOnesmartphonebatteryInput>;
};

export type QuerySmartphoneBatteryEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManysmartphonebatteryInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManysmartphonebatteryInput>;
};

export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryUserByIdLeanArgs = {
  _id: Scalars['MongoID'];
};

export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsuserInput>;
};

export type QueryUserByIdsLeanArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsuserInput>;
};

export type QueryUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManyuserInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionuserEnum>;
};

export type QueryUserCountArgs = {
  filter?: InputMaybe<FilterCountuserInput>;
};

export type QueryUserDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryUserDataLoaderLeanArgs = {
  _id: Scalars['MongoID'];
};

export type QueryUserDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryUserDataLoaderManyLeanArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryUserManyArgs = {
  filter?: InputMaybe<FilterFindManyuserInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyuserInput>;
};

export type QueryUserManyLeanArgs = {
  filter?: InputMaybe<FilterFindManyuserInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyuserInput>;
};

export type QueryUserOneArgs = {
  filter?: InputMaybe<FilterFindOneuserInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneuserInput>;
};

export type QueryUserOneLeanArgs = {
  filter?: InputMaybe<FilterFindOneuserInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneuserInput>;
};

export type QueryUserPaginationArgs = {
  filter?: InputMaybe<FilterFindManyuserInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyuserInput>;
};

export type QueryWeightEventByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryWeightEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindByIdsweightInput>;
};

export type QueryWeightEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FilterFindManyweightInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortConnectionweightEnum>;
};

export type QueryWeightEventCountArgs = {
  filter?: InputMaybe<FilterCountweightInput>;
};

export type QueryWeightEventDataLoaderArgs = {
  _id: Scalars['MongoID'];
};

export type QueryWeightEventDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};

export type QueryWeightEventManyArgs = {
  filter?: InputMaybe<FilterFindManyweightInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyweightInput>;
};

export type QueryWeightEventOneArgs = {
  filter?: InputMaybe<FilterFindOneweightInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindOneweightInput>;
};

export type QueryWeightEventPaginationArgs = {
  filter?: InputMaybe<FilterFindManyweightInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyweightInput>;
};

export type RemoveByIdbasalPayload = {
  __typename?: 'RemoveByIdbasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Basal>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdbloodsugarPayload = {
  __typename?: 'RemoveByIdbloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Bloodsugar>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdbolusPayload = {
  __typename?: 'RemoveByIdbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Bolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdcatheterchangePayload = {
  __typename?: 'RemoveByIdcatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Catheterchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdcorrectionbolusPayload = {
  __typename?: 'RemoveByIdcorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Correctionbolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdheightPayload = {
  __typename?: 'RemoveByIdheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Height>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdpumpbatteryPayload = {
  __typename?: 'RemoveByIdpumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Pumpbattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdsensorchangePayload = {
  __typename?: 'RemoveByIdsensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Sensorchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdsmartphonebatteryPayload = {
  __typename?: 'RemoveByIdsmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Smartphonebattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIduserPayload = {
  __typename?: 'RemoveByIduserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdweightPayload = {
  __typename?: 'RemoveByIdweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Weight>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveManybasalPayload = {
  __typename?: 'RemoveManybasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManybloodsugarPayload = {
  __typename?: 'RemoveManybloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManybolusPayload = {
  __typename?: 'RemoveManybolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManycatheterchangePayload = {
  __typename?: 'RemoveManycatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManycorrectionbolusPayload = {
  __typename?: 'RemoveManycorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManyheightPayload = {
  __typename?: 'RemoveManyheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManypumpbatteryPayload = {
  __typename?: 'RemoveManypumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManysensorchangePayload = {
  __typename?: 'RemoveManysensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManysmartphonebatteryPayload = {
  __typename?: 'RemoveManysmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManyuserPayload = {
  __typename?: 'RemoveManyuserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManyweightPayload = {
  __typename?: 'RemoveManyweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveOnebasalPayload = {
  __typename?: 'RemoveOnebasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Basal>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnebloodsugarPayload = {
  __typename?: 'RemoveOnebloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Bloodsugar>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnebolusPayload = {
  __typename?: 'RemoveOnebolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Bolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnecatheterchangePayload = {
  __typename?: 'RemoveOnecatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Catheterchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnecorrectionbolusPayload = {
  __typename?: 'RemoveOnecorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Correctionbolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneheightPayload = {
  __typename?: 'RemoveOneheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Height>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnepumpbatteryPayload = {
  __typename?: 'RemoveOnepumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Pumpbattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnesensorchangePayload = {
  __typename?: 'RemoveOnesensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Sensorchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOnesmartphonebatteryPayload = {
  __typename?: 'RemoveOnesmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Smartphonebattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneuserPayload = {
  __typename?: 'RemoveOneuserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneweightPayload = {
  __typename?: 'RemoveOneweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Weight>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export enum SortConnectionbasalEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionbloodsugarEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionbolusEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectioncatheterchangeEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectioncorrectionbolusEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionheightEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionpumpbatteryEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionsensorchangeEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionsmartphonebatteryEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionuserEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionweightEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsbasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsbloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdscatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdscorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdspumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdssensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdssmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManybasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManybloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManybolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManycatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManycorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManyheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManypumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManysensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManysmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManyuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManyweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnebasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnebloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnebolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnecatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnecorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOneheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnepumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnesensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOnesmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOneuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOneweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnebasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnebloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnebolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnecatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnecorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOneheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnepumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnesensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOnesmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOneuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOneweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManybasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManybloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManybolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManycatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManycorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManyheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManypumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManysensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManysmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManyuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManyweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnebasalInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnebloodsugarInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnebolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnecatheterchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnecorrectionbolusInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOneheightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnepumpbatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnesensorchangeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOnesmartphonebatteryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOneuserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOneweightInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export type UpdateByIdbasalInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdbasalPayload = {
  __typename?: 'UpdateByIdbasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Basal>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdbloodsugarInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdbloodsugarPayload = {
  __typename?: 'UpdateByIdbloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Bloodsugar>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdbolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdbolusInput = {
  calculated?: InputMaybe<UpdateByIdbolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<UpdateByIdbolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdbolusPayload = {
  __typename?: 'UpdateByIdbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Bolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdbolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdcatheterchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateByIdcatheterchangePayload = {
  __typename?: 'UpdateByIdcatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Catheterchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdcorrectionbolusInput = {
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdcorrectionbolusPayload = {
  __typename?: 'UpdateByIdcorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Correctionbolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdheightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdheightPayload = {
  __typename?: 'UpdateByIdheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Height>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdpumpbatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdpumpbatteryPayload = {
  __typename?: 'UpdateByIdpumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Pumpbattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdsensorchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateByIdsensorchangePayload = {
  __typename?: 'UpdateByIdsensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Sensorchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdsmartphonebatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdsmartphonebatteryPayload = {
  __typename?: 'UpdateByIdsmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Smartphonebattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIduserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateByIduserInput = {
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<UpdateByIduserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateByIduserPayload = {
  __typename?: 'UpdateByIduserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdweightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdweightPayload = {
  __typename?: 'UpdateByIdweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Weight>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateManybasalInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type UpdateManybasalPayload = {
  __typename?: 'UpdateManybasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManybloodsugarInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManybloodsugarPayload = {
  __typename?: 'UpdateManybloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManybolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type UpdateManybolusInput = {
  calculated?: InputMaybe<UpdateManybolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<UpdateManybolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManybolusPayload = {
  __typename?: 'UpdateManybolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManybolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateManycatheterchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateManycatheterchangePayload = {
  __typename?: 'UpdateManycatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManycorrectionbolusInput = {
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManycorrectionbolusPayload = {
  __typename?: 'UpdateManycorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyheightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManyheightPayload = {
  __typename?: 'UpdateManyheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManypumpbatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManypumpbatteryPayload = {
  __typename?: 'UpdateManypumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManysensorchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateManysensorchangePayload = {
  __typename?: 'UpdateManysensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManysmartphonebatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManysmartphonebatteryPayload = {
  __typename?: 'UpdateManysmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateManyuserInput = {
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<UpdateManyuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateManyuserPayload = {
  __typename?: 'UpdateManyuserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyweightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManyweightPayload = {
  __typename?: 'UpdateManyweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateOnebasalInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  t_00?: InputMaybe<Scalars['Float']>;
  t_01?: InputMaybe<Scalars['Float']>;
  t_02?: InputMaybe<Scalars['Float']>;
  t_03?: InputMaybe<Scalars['Float']>;
  t_04?: InputMaybe<Scalars['Float']>;
  t_05?: InputMaybe<Scalars['Float']>;
  t_06?: InputMaybe<Scalars['Float']>;
  t_07?: InputMaybe<Scalars['Float']>;
  t_08?: InputMaybe<Scalars['Float']>;
  t_09?: InputMaybe<Scalars['Float']>;
  t_10?: InputMaybe<Scalars['Float']>;
  t_11?: InputMaybe<Scalars['Float']>;
  t_12?: InputMaybe<Scalars['Float']>;
  t_13?: InputMaybe<Scalars['Float']>;
  t_14?: InputMaybe<Scalars['Float']>;
  t_15?: InputMaybe<Scalars['Float']>;
  t_16?: InputMaybe<Scalars['Float']>;
  t_17?: InputMaybe<Scalars['Float']>;
  t_18?: InputMaybe<Scalars['Float']>;
  t_19?: InputMaybe<Scalars['Float']>;
  t_20?: InputMaybe<Scalars['Float']>;
  t_21?: InputMaybe<Scalars['Float']>;
  t_22?: InputMaybe<Scalars['Float']>;
  t_23?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnebasalPayload = {
  __typename?: 'UpdateOnebasalPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Basal>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnebloodsugarInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tendency?: InputMaybe<EnumbloodsugarTendency>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnebloodsugarPayload = {
  __typename?: 'UpdateOnebloodsugarPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Bloodsugar>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnebolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus?: InputMaybe<Scalars['Float']>;
  factor?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnebolusInput = {
  calculated?: InputMaybe<UpdateOnebolusCalculatedInput>;
  carbonHydrates?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  factor?: InputMaybe<Scalars['Float']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mode?: InputMaybe<EnumbolusMode>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<InputMaybe<UpdateOnebolusUnitsInput>>>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnebolusPayload = {
  __typename?: 'UpdateOnebolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Bolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnebolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EnumbolusUnitsType>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnecatheterchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumcatheterchangePlacement>;
  side?: InputMaybe<EnumcatheterchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateOnecatheterchangePayload = {
  __typename?: 'UpdateOnecatheterchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Catheterchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnecorrectionbolusInput = {
  calculation?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnecorrectionbolusPayload = {
  __typename?: 'UpdateOnecorrectionbolusPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Correctionbolus>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneheightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOneheightPayload = {
  __typename?: 'UpdateOneheightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Height>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnepumpbatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnepumpbatteryPayload = {
  __typename?: 'UpdateOnepumpbatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Pumpbattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnesensorchangeInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<EnumsensorchangePlacement>;
  serialNumber?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<EnumsensorchangeSide>;
  source?: InputMaybe<Scalars['String']>;
};

export type UpdateOnesensorchangePayload = {
  __typename?: 'UpdateOnesensorchangePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Sensorchange>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnesmartphonebatteryInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOnesmartphonebatteryPayload = {
  __typename?: 'UpdateOnesmartphonebatteryPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Smartphonebattery>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneuserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateOneuserInput = {
  /** List of apitokens */
  apiTokens?: InputMaybe<Array<InputMaybe<UpdateOneuserApiTokensInput>>>;
  /** E-Mail address */
  email?: InputMaybe<Scalars['String']>;
  /** Date of last login for user */
  lastLogin?: InputMaybe<Scalars['Date']>;
  /** First and lastname */
  name?: InputMaybe<Scalars['String']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']>;
  /** List of owned roles */
  roles?: InputMaybe<Array<InputMaybe<EnumuserRoles>>>;
  /** Unique username */
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateOneuserPayload = {
  __typename?: 'UpdateOneuserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneweightInput = {
  created?: InputMaybe<Scalars['Date']>;
  meta?: InputMaybe<Scalars['JSON']>;
  note?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateOneweightPayload = {
  __typename?: 'UpdateOneweightPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Weight>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
};

export type Basal = EventInterface & {
  __typename?: 'basal';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  t_00: Scalars['Float'];
  t_01: Scalars['Float'];
  t_02: Scalars['Float'];
  t_03: Scalars['Float'];
  t_04: Scalars['Float'];
  t_05: Scalars['Float'];
  t_06: Scalars['Float'];
  t_07: Scalars['Float'];
  t_08: Scalars['Float'];
  t_09: Scalars['Float'];
  t_10: Scalars['Float'];
  t_11: Scalars['Float'];
  t_12: Scalars['Float'];
  t_13: Scalars['Float'];
  t_14: Scalars['Float'];
  t_15: Scalars['Float'];
  t_16: Scalars['Float'];
  t_17: Scalars['Float'];
  t_18: Scalars['Float'];
  t_19: Scalars['Float'];
  t_20: Scalars['Float'];
  t_21: Scalars['Float'];
  t_22: Scalars['Float'];
  t_23: Scalars['Float'];
  type?: Maybe<EnumDKeyeventType>;
};

/** A connection to a list of items. */
export type BasalConnection = {
  __typename?: 'basalConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<BasalEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BasalEdge = {
  __typename?: 'basalEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Basal;
};

/** List of items with pagination. */
export type BasalPagination = {
  __typename?: 'basalPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Basal>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Bloodsugar = EventInterface & {
  __typename?: 'bloodsugar';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  tendency: EnumbloodsugarTendency;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type BloodsugarConnection = {
  __typename?: 'bloodsugarConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<BloodsugarEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BloodsugarEdge = {
  __typename?: 'bloodsugarEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Bloodsugar;
};

/** List of items with pagination. */
export type BloodsugarPagination = {
  __typename?: 'bloodsugarPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Bloodsugar>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Bolus = EventInterface & {
  __typename?: 'bolus';
  _id: Scalars['MongoID'];
  calculated?: Maybe<BolusCalculated>;
  carbonHydrates: Scalars['Float'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  factor: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mode?: Maybe<EnumbolusMode>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  units: Array<Maybe<BolusUnits>>;
  value: Scalars['Float'];
};

export type BolusCalculated = {
  __typename?: 'bolusCalculated';
  _id?: Maybe<Scalars['MongoID']>;
  bolus: Scalars['Float'];
  factor: Scalars['Float'];
};

export type BolusCalculatedInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  bolus: Scalars['Float'];
  factor: Scalars['Float'];
};

/** A connection to a list of items. */
export type BolusConnection = {
  __typename?: 'bolusConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<BolusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BolusEdge = {
  __typename?: 'bolusEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Bolus;
};

/** List of items with pagination. */
export type BolusPagination = {
  __typename?: 'bolusPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Bolus>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type BolusUnits = {
  __typename?: 'bolusUnits';
  _id?: Maybe<Scalars['MongoID']>;
  carbs: Scalars['Float'];
  title: Scalars['String'];
  type: EnumbolusUnitsType;
  weight?: Maybe<Scalars['Float']>;
};

export type BolusUnitsInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  carbs: Scalars['Float'];
  title: Scalars['String'];
  type: EnumbolusUnitsType;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Catheterchange = EventInterface & {
  __typename?: 'catheterchange';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  placement?: Maybe<EnumcatheterchangePlacement>;
  side?: Maybe<EnumcatheterchangeSide>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
};

/** A connection to a list of items. */
export type CatheterchangeConnection = {
  __typename?: 'catheterchangeConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<CatheterchangeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CatheterchangeEdge = {
  __typename?: 'catheterchangeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Catheterchange;
};

/** List of items with pagination. */
export type CatheterchangePagination = {
  __typename?: 'catheterchangePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Catheterchange>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Correctionbolus = EventInterface & {
  __typename?: 'correctionbolus';
  _id: Scalars['MongoID'];
  calculation: Scalars['Float'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type CorrectionbolusConnection = {
  __typename?: 'correctionbolusConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<CorrectionbolusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CorrectionbolusEdge = {
  __typename?: 'correctionbolusEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Correctionbolus;
};

/** List of items with pagination. */
export type CorrectionbolusPagination = {
  __typename?: 'correctionbolusPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Correctionbolus>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Event = EventInterface & {
  __typename?: 'event';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
};

export type EventInterface = {
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
};

export type Height = EventInterface & {
  __typename?: 'height';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type HeightConnection = {
  __typename?: 'heightConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<HeightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HeightEdge = {
  __typename?: 'heightEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Height;
};

/** List of items with pagination. */
export type HeightPagination = {
  __typename?: 'heightPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Height>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Pumpbattery = EventInterface & {
  __typename?: 'pumpbattery';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type PumpbatteryConnection = {
  __typename?: 'pumpbatteryConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<PumpbatteryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PumpbatteryEdge = {
  __typename?: 'pumpbatteryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Pumpbattery;
};

/** List of items with pagination. */
export type PumpbatteryPagination = {
  __typename?: 'pumpbatteryPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Pumpbattery>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Sensorchange = EventInterface & {
  __typename?: 'sensorchange';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  placement?: Maybe<EnumsensorchangePlacement>;
  serialNumber: Scalars['Float'];
  side?: Maybe<EnumsensorchangeSide>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
};

/** A connection to a list of items. */
export type SensorchangeConnection = {
  __typename?: 'sensorchangeConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<SensorchangeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SensorchangeEdge = {
  __typename?: 'sensorchangeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Sensorchange;
};

/** List of items with pagination. */
export type SensorchangePagination = {
  __typename?: 'sensorchangePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Sensorchange>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Smartphonebattery = EventInterface & {
  __typename?: 'smartphonebattery';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type SmartphonebatteryConnection = {
  __typename?: 'smartphonebatteryConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<SmartphonebatteryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SmartphonebatteryEdge = {
  __typename?: 'smartphonebatteryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Smartphonebattery;
};

/** List of items with pagination. */
export type SmartphonebatteryPagination = {
  __typename?: 'smartphonebatteryPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Smartphonebattery>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type User = {
  __typename?: 'user';
  _id: Scalars['MongoID'];
  /** List of apitokens */
  apiTokens?: Maybe<Array<Maybe<UserApiTokens>>>;
  /** E-Mail address */
  email: Scalars['String'];
  /** Date of last login for user */
  lastLogin?: Maybe<Scalars['Date']>;
  /** First and lastname */
  name: Scalars['String'];
  /** Hashed password */
  password: Scalars['String'];
  /** List of owned roles */
  roles?: Maybe<Array<Maybe<EnumuserRoles>>>;
  /** Unique username */
  username: Scalars['String'];
};

export type UserApiTokens = {
  __typename?: 'userApiTokens';
  _id?: Maybe<Scalars['MongoID']>;
  appName: Scalars['String'];
  token: Scalars['String'];
};

export type UserApiTokensInput = {
  _id?: InputMaybe<Scalars['MongoID']>;
  appName: Scalars['String'];
  token: Scalars['String'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'userConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'userEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: User;
};

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'userPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Weight = EventInterface & {
  __typename?: 'weight';
  _id: Scalars['MongoID'];
  created?: Maybe<Scalars['Date']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  note?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EnumDKeyeventType>;
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type WeightConnection = {
  __typename?: 'weightConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<WeightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WeightEdge = {
  __typename?: 'weightEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Weight;
};

/** List of items with pagination. */
export type WeightPagination = {
  __typename?: 'weightPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Weight>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthToken: ResolverTypeWrapper<AuthToken>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateManybasalInput: CreateManybasalInput;
  CreateManybasalPayload: ResolverTypeWrapper<CreateManybasalPayload>;
  CreateManybloodsugarInput: CreateManybloodsugarInput;
  CreateManybloodsugarPayload: ResolverTypeWrapper<CreateManybloodsugarPayload>;
  CreateManybolusInput: CreateManybolusInput;
  CreateManybolusPayload: ResolverTypeWrapper<CreateManybolusPayload>;
  CreateManycatheterchangeInput: CreateManycatheterchangeInput;
  CreateManycatheterchangePayload: ResolverTypeWrapper<CreateManycatheterchangePayload>;
  CreateManycorrectionbolusInput: CreateManycorrectionbolusInput;
  CreateManycorrectionbolusPayload: ResolverTypeWrapper<CreateManycorrectionbolusPayload>;
  CreateManyheightInput: CreateManyheightInput;
  CreateManyheightPayload: ResolverTypeWrapper<CreateManyheightPayload>;
  CreateManypumpbatteryInput: CreateManypumpbatteryInput;
  CreateManypumpbatteryPayload: ResolverTypeWrapper<CreateManypumpbatteryPayload>;
  CreateManysensorchangeInput: CreateManysensorchangeInput;
  CreateManysensorchangePayload: ResolverTypeWrapper<CreateManysensorchangePayload>;
  CreateManysmartphonebatteryInput: CreateManysmartphonebatteryInput;
  CreateManysmartphonebatteryPayload: ResolverTypeWrapper<CreateManysmartphonebatteryPayload>;
  CreateManyuserInput: CreateManyuserInput;
  CreateManyuserPayload: ResolverTypeWrapper<CreateManyuserPayload>;
  CreateManyweightInput: CreateManyweightInput;
  CreateManyweightPayload: ResolverTypeWrapper<CreateManyweightPayload>;
  CreateOnebasalInput: CreateOnebasalInput;
  CreateOnebasalPayload: ResolverTypeWrapper<CreateOnebasalPayload>;
  CreateOnebloodsugarInput: CreateOnebloodsugarInput;
  CreateOnebloodsugarPayload: ResolverTypeWrapper<CreateOnebloodsugarPayload>;
  CreateOnebolusInput: CreateOnebolusInput;
  CreateOnebolusPayload: ResolverTypeWrapper<CreateOnebolusPayload>;
  CreateOnecatheterchangeInput: CreateOnecatheterchangeInput;
  CreateOnecatheterchangePayload: ResolverTypeWrapper<CreateOnecatheterchangePayload>;
  CreateOnecorrectionbolusInput: CreateOnecorrectionbolusInput;
  CreateOnecorrectionbolusPayload: ResolverTypeWrapper<CreateOnecorrectionbolusPayload>;
  CreateOneheightInput: CreateOneheightInput;
  CreateOneheightPayload: ResolverTypeWrapper<CreateOneheightPayload>;
  CreateOnepumpbatteryInput: CreateOnepumpbatteryInput;
  CreateOnepumpbatteryPayload: ResolverTypeWrapper<CreateOnepumpbatteryPayload>;
  CreateOnesensorchangeInput: CreateOnesensorchangeInput;
  CreateOnesensorchangePayload: ResolverTypeWrapper<CreateOnesensorchangePayload>;
  CreateOnesmartphonebatteryInput: CreateOnesmartphonebatteryInput;
  CreateOnesmartphonebatteryPayload: ResolverTypeWrapper<CreateOnesmartphonebatteryPayload>;
  CreateOneuserInput: CreateOneuserInput;
  CreateOneuserPayload: ResolverTypeWrapper<CreateOneuserPayload>;
  CreateOneweightInput: CreateOneweightInput;
  CreateOneweightPayload: ResolverTypeWrapper<CreateOneweightPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  EnumDKeyeventType: EnumDKeyeventType;
  EnumbloodsugarTendency: EnumbloodsugarTendency;
  EnumbolusMode: EnumbolusMode;
  EnumbolusUnitsType: EnumbolusUnitsType;
  EnumcatheterchangePlacement: EnumcatheterchangePlacement;
  EnumcatheterchangeSide: EnumcatheterchangeSide;
  EnumsensorchangePlacement: EnumsensorchangePlacement;
  EnumsensorchangeSide: EnumsensorchangeSide;
  EnumuserRoles: EnumuserRoles;
  ErrorInterface:
    | ResolversTypes['MongoError']
    | ResolversTypes['RuntimeError']
    | ResolversTypes['ValidationError'];
  FilterCountbasalInput: FilterCountbasalInput;
  FilterCountbloodsugarInput: FilterCountbloodsugarInput;
  FilterCountbolusCalculatedInput: FilterCountbolusCalculatedInput;
  FilterCountbolusInput: FilterCountbolusInput;
  FilterCountbolusUnitsInput: FilterCountbolusUnitsInput;
  FilterCountcatheterchangeInput: FilterCountcatheterchangeInput;
  FilterCountcorrectionbolusInput: FilterCountcorrectionbolusInput;
  FilterCounteventInput: FilterCounteventInput;
  FilterCounteventOperatorsInput: FilterCounteventOperatorsInput;
  FilterCountevent_idOperatorsInput: FilterCountevent_IdOperatorsInput;
  FilterCountheightInput: FilterCountheightInput;
  FilterCountpumpbatteryInput: FilterCountpumpbatteryInput;
  FilterCountsensorchangeInput: FilterCountsensorchangeInput;
  FilterCountsmartphonebatteryInput: FilterCountsmartphonebatteryInput;
  FilterCountuserApiTokensInput: FilterCountuserApiTokensInput;
  FilterCountuserInput: FilterCountuserInput;
  FilterCountuserOperatorsInput: FilterCountuserOperatorsInput;
  FilterCountuser_idOperatorsInput: FilterCountuser_IdOperatorsInput;
  FilterCountweightInput: FilterCountweightInput;
  FilterFindManybasalInput: FilterFindManybasalInput;
  FilterFindManybloodsugarInput: FilterFindManybloodsugarInput;
  FilterFindManybolusCalculatedInput: FilterFindManybolusCalculatedInput;
  FilterFindManybolusInput: FilterFindManybolusInput;
  FilterFindManybolusUnitsInput: FilterFindManybolusUnitsInput;
  FilterFindManycatheterchangeInput: FilterFindManycatheterchangeInput;
  FilterFindManycorrectionbolusInput: FilterFindManycorrectionbolusInput;
  FilterFindManyeventInput: FilterFindManyeventInput;
  FilterFindManyeventOperatorsInput: FilterFindManyeventOperatorsInput;
  FilterFindManyevent_idOperatorsInput: FilterFindManyevent_IdOperatorsInput;
  FilterFindManyheightInput: FilterFindManyheightInput;
  FilterFindManypumpbatteryInput: FilterFindManypumpbatteryInput;
  FilterFindManysensorchangeInput: FilterFindManysensorchangeInput;
  FilterFindManysmartphonebatteryInput: FilterFindManysmartphonebatteryInput;
  FilterFindManyuserApiTokensInput: FilterFindManyuserApiTokensInput;
  FilterFindManyuserInput: FilterFindManyuserInput;
  FilterFindManyuserOperatorsInput: FilterFindManyuserOperatorsInput;
  FilterFindManyuser_idOperatorsInput: FilterFindManyuser_IdOperatorsInput;
  FilterFindManyweightInput: FilterFindManyweightInput;
  FilterFindOnebasalInput: FilterFindOnebasalInput;
  FilterFindOnebloodsugarInput: FilterFindOnebloodsugarInput;
  FilterFindOnebolusCalculatedInput: FilterFindOnebolusCalculatedInput;
  FilterFindOnebolusInput: FilterFindOnebolusInput;
  FilterFindOnebolusUnitsInput: FilterFindOnebolusUnitsInput;
  FilterFindOnecatheterchangeInput: FilterFindOnecatheterchangeInput;
  FilterFindOnecorrectionbolusInput: FilterFindOnecorrectionbolusInput;
  FilterFindOneeventInput: FilterFindOneeventInput;
  FilterFindOneeventOperatorsInput: FilterFindOneeventOperatorsInput;
  FilterFindOneevent_idOperatorsInput: FilterFindOneevent_IdOperatorsInput;
  FilterFindOneheightInput: FilterFindOneheightInput;
  FilterFindOnepumpbatteryInput: FilterFindOnepumpbatteryInput;
  FilterFindOnesensorchangeInput: FilterFindOnesensorchangeInput;
  FilterFindOnesmartphonebatteryInput: FilterFindOnesmartphonebatteryInput;
  FilterFindOneuserApiTokensInput: FilterFindOneuserApiTokensInput;
  FilterFindOneuserInput: FilterFindOneuserInput;
  FilterFindOneuserOperatorsInput: FilterFindOneuserOperatorsInput;
  FilterFindOneuser_idOperatorsInput: FilterFindOneuser_IdOperatorsInput;
  FilterFindOneweightInput: FilterFindOneweightInput;
  FilterRemoveManybasalInput: FilterRemoveManybasalInput;
  FilterRemoveManybloodsugarInput: FilterRemoveManybloodsugarInput;
  FilterRemoveManybolusCalculatedInput: FilterRemoveManybolusCalculatedInput;
  FilterRemoveManybolusInput: FilterRemoveManybolusInput;
  FilterRemoveManybolusUnitsInput: FilterRemoveManybolusUnitsInput;
  FilterRemoveManycatheterchangeInput: FilterRemoveManycatheterchangeInput;
  FilterRemoveManycorrectionbolusInput: FilterRemoveManycorrectionbolusInput;
  FilterRemoveManyeventInput: FilterRemoveManyeventInput;
  FilterRemoveManyeventOperatorsInput: FilterRemoveManyeventOperatorsInput;
  FilterRemoveManyevent_idOperatorsInput: FilterRemoveManyevent_IdOperatorsInput;
  FilterRemoveManyheightInput: FilterRemoveManyheightInput;
  FilterRemoveManypumpbatteryInput: FilterRemoveManypumpbatteryInput;
  FilterRemoveManysensorchangeInput: FilterRemoveManysensorchangeInput;
  FilterRemoveManysmartphonebatteryInput: FilterRemoveManysmartphonebatteryInput;
  FilterRemoveManyuserApiTokensInput: FilterRemoveManyuserApiTokensInput;
  FilterRemoveManyuserInput: FilterRemoveManyuserInput;
  FilterRemoveManyuserOperatorsInput: FilterRemoveManyuserOperatorsInput;
  FilterRemoveManyuser_idOperatorsInput: FilterRemoveManyuser_IdOperatorsInput;
  FilterRemoveManyweightInput: FilterRemoveManyweightInput;
  FilterRemoveOnebasalInput: FilterRemoveOnebasalInput;
  FilterRemoveOnebloodsugarInput: FilterRemoveOnebloodsugarInput;
  FilterRemoveOnebolusCalculatedInput: FilterRemoveOnebolusCalculatedInput;
  FilterRemoveOnebolusInput: FilterRemoveOnebolusInput;
  FilterRemoveOnebolusUnitsInput: FilterRemoveOnebolusUnitsInput;
  FilterRemoveOnecatheterchangeInput: FilterRemoveOnecatheterchangeInput;
  FilterRemoveOnecorrectionbolusInput: FilterRemoveOnecorrectionbolusInput;
  FilterRemoveOneeventInput: FilterRemoveOneeventInput;
  FilterRemoveOneeventOperatorsInput: FilterRemoveOneeventOperatorsInput;
  FilterRemoveOneevent_idOperatorsInput: FilterRemoveOneevent_IdOperatorsInput;
  FilterRemoveOneheightInput: FilterRemoveOneheightInput;
  FilterRemoveOnepumpbatteryInput: FilterRemoveOnepumpbatteryInput;
  FilterRemoveOnesensorchangeInput: FilterRemoveOnesensorchangeInput;
  FilterRemoveOnesmartphonebatteryInput: FilterRemoveOnesmartphonebatteryInput;
  FilterRemoveOneuserApiTokensInput: FilterRemoveOneuserApiTokensInput;
  FilterRemoveOneuserInput: FilterRemoveOneuserInput;
  FilterRemoveOneuserOperatorsInput: FilterRemoveOneuserOperatorsInput;
  FilterRemoveOneuser_idOperatorsInput: FilterRemoveOneuser_IdOperatorsInput;
  FilterRemoveOneweightInput: FilterRemoveOneweightInput;
  FilterUpdateManybasalInput: FilterUpdateManybasalInput;
  FilterUpdateManybloodsugarInput: FilterUpdateManybloodsugarInput;
  FilterUpdateManybolusCalculatedInput: FilterUpdateManybolusCalculatedInput;
  FilterUpdateManybolusInput: FilterUpdateManybolusInput;
  FilterUpdateManybolusUnitsInput: FilterUpdateManybolusUnitsInput;
  FilterUpdateManycatheterchangeInput: FilterUpdateManycatheterchangeInput;
  FilterUpdateManycorrectionbolusInput: FilterUpdateManycorrectionbolusInput;
  FilterUpdateManyeventInput: FilterUpdateManyeventInput;
  FilterUpdateManyeventOperatorsInput: FilterUpdateManyeventOperatorsInput;
  FilterUpdateManyevent_idOperatorsInput: FilterUpdateManyevent_IdOperatorsInput;
  FilterUpdateManyheightInput: FilterUpdateManyheightInput;
  FilterUpdateManypumpbatteryInput: FilterUpdateManypumpbatteryInput;
  FilterUpdateManysensorchangeInput: FilterUpdateManysensorchangeInput;
  FilterUpdateManysmartphonebatteryInput: FilterUpdateManysmartphonebatteryInput;
  FilterUpdateManyuserApiTokensInput: FilterUpdateManyuserApiTokensInput;
  FilterUpdateManyuserInput: FilterUpdateManyuserInput;
  FilterUpdateManyuserOperatorsInput: FilterUpdateManyuserOperatorsInput;
  FilterUpdateManyuser_idOperatorsInput: FilterUpdateManyuser_IdOperatorsInput;
  FilterUpdateManyweightInput: FilterUpdateManyweightInput;
  FilterUpdateOnebasalInput: FilterUpdateOnebasalInput;
  FilterUpdateOnebloodsugarInput: FilterUpdateOnebloodsugarInput;
  FilterUpdateOnebolusCalculatedInput: FilterUpdateOnebolusCalculatedInput;
  FilterUpdateOnebolusInput: FilterUpdateOnebolusInput;
  FilterUpdateOnebolusUnitsInput: FilterUpdateOnebolusUnitsInput;
  FilterUpdateOnecatheterchangeInput: FilterUpdateOnecatheterchangeInput;
  FilterUpdateOnecorrectionbolusInput: FilterUpdateOnecorrectionbolusInput;
  FilterUpdateOneeventInput: FilterUpdateOneeventInput;
  FilterUpdateOneeventOperatorsInput: FilterUpdateOneeventOperatorsInput;
  FilterUpdateOneevent_idOperatorsInput: FilterUpdateOneevent_IdOperatorsInput;
  FilterUpdateOneheightInput: FilterUpdateOneheightInput;
  FilterUpdateOnepumpbatteryInput: FilterUpdateOnepumpbatteryInput;
  FilterUpdateOnesensorchangeInput: FilterUpdateOnesensorchangeInput;
  FilterUpdateOnesmartphonebatteryInput: FilterUpdateOnesmartphonebatteryInput;
  FilterUpdateOneuserApiTokensInput: FilterUpdateOneuserApiTokensInput;
  FilterUpdateOneuserInput: FilterUpdateOneuserInput;
  FilterUpdateOneuserOperatorsInput: FilterUpdateOneuserOperatorsInput;
  FilterUpdateOneuser_idOperatorsInput: FilterUpdateOneuser_IdOperatorsInput;
  FilterUpdateOneweightInput: FilterUpdateOneweightInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  MongoError: ResolverTypeWrapper<MongoError>;
  MongoID: ResolverTypeWrapper<Scalars['MongoID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationInfo: ResolverTypeWrapper<PaginationInfo>;
  Query: ResolverTypeWrapper<{}>;
  RemoveByIdbasalPayload: ResolverTypeWrapper<RemoveByIdbasalPayload>;
  RemoveByIdbloodsugarPayload: ResolverTypeWrapper<RemoveByIdbloodsugarPayload>;
  RemoveByIdbolusPayload: ResolverTypeWrapper<RemoveByIdbolusPayload>;
  RemoveByIdcatheterchangePayload: ResolverTypeWrapper<RemoveByIdcatheterchangePayload>;
  RemoveByIdcorrectionbolusPayload: ResolverTypeWrapper<RemoveByIdcorrectionbolusPayload>;
  RemoveByIdheightPayload: ResolverTypeWrapper<RemoveByIdheightPayload>;
  RemoveByIdpumpbatteryPayload: ResolverTypeWrapper<RemoveByIdpumpbatteryPayload>;
  RemoveByIdsensorchangePayload: ResolverTypeWrapper<RemoveByIdsensorchangePayload>;
  RemoveByIdsmartphonebatteryPayload: ResolverTypeWrapper<RemoveByIdsmartphonebatteryPayload>;
  RemoveByIduserPayload: ResolverTypeWrapper<RemoveByIduserPayload>;
  RemoveByIdweightPayload: ResolverTypeWrapper<RemoveByIdweightPayload>;
  RemoveManybasalPayload: ResolverTypeWrapper<RemoveManybasalPayload>;
  RemoveManybloodsugarPayload: ResolverTypeWrapper<RemoveManybloodsugarPayload>;
  RemoveManybolusPayload: ResolverTypeWrapper<RemoveManybolusPayload>;
  RemoveManycatheterchangePayload: ResolverTypeWrapper<RemoveManycatheterchangePayload>;
  RemoveManycorrectionbolusPayload: ResolverTypeWrapper<RemoveManycorrectionbolusPayload>;
  RemoveManyheightPayload: ResolverTypeWrapper<RemoveManyheightPayload>;
  RemoveManypumpbatteryPayload: ResolverTypeWrapper<RemoveManypumpbatteryPayload>;
  RemoveManysensorchangePayload: ResolverTypeWrapper<RemoveManysensorchangePayload>;
  RemoveManysmartphonebatteryPayload: ResolverTypeWrapper<RemoveManysmartphonebatteryPayload>;
  RemoveManyuserPayload: ResolverTypeWrapper<RemoveManyuserPayload>;
  RemoveManyweightPayload: ResolverTypeWrapper<RemoveManyweightPayload>;
  RemoveOnebasalPayload: ResolverTypeWrapper<RemoveOnebasalPayload>;
  RemoveOnebloodsugarPayload: ResolverTypeWrapper<RemoveOnebloodsugarPayload>;
  RemoveOnebolusPayload: ResolverTypeWrapper<RemoveOnebolusPayload>;
  RemoveOnecatheterchangePayload: ResolverTypeWrapper<RemoveOnecatheterchangePayload>;
  RemoveOnecorrectionbolusPayload: ResolverTypeWrapper<RemoveOnecorrectionbolusPayload>;
  RemoveOneheightPayload: ResolverTypeWrapper<RemoveOneheightPayload>;
  RemoveOnepumpbatteryPayload: ResolverTypeWrapper<RemoveOnepumpbatteryPayload>;
  RemoveOnesensorchangePayload: ResolverTypeWrapper<RemoveOnesensorchangePayload>;
  RemoveOnesmartphonebatteryPayload: ResolverTypeWrapper<RemoveOnesmartphonebatteryPayload>;
  RemoveOneuserPayload: ResolverTypeWrapper<RemoveOneuserPayload>;
  RemoveOneweightPayload: ResolverTypeWrapper<RemoveOneweightPayload>;
  RuntimeError: ResolverTypeWrapper<RuntimeError>;
  SortConnectionbasalEnum: SortConnectionbasalEnum;
  SortConnectionbloodsugarEnum: SortConnectionbloodsugarEnum;
  SortConnectionbolusEnum: SortConnectionbolusEnum;
  SortConnectioncatheterchangeEnum: SortConnectioncatheterchangeEnum;
  SortConnectioncorrectionbolusEnum: SortConnectioncorrectionbolusEnum;
  SortConnectionheightEnum: SortConnectionheightEnum;
  SortConnectionpumpbatteryEnum: SortConnectionpumpbatteryEnum;
  SortConnectionsensorchangeEnum: SortConnectionsensorchangeEnum;
  SortConnectionsmartphonebatteryEnum: SortConnectionsmartphonebatteryEnum;
  SortConnectionuserEnum: SortConnectionuserEnum;
  SortConnectionweightEnum: SortConnectionweightEnum;
  SortFindByIdsbasalInput: SortFindByIdsbasalInput;
  SortFindByIdsbloodsugarInput: SortFindByIdsbloodsugarInput;
  SortFindByIdsbolusInput: SortFindByIdsbolusInput;
  SortFindByIdscatheterchangeInput: SortFindByIdscatheterchangeInput;
  SortFindByIdscorrectionbolusInput: SortFindByIdscorrectionbolusInput;
  SortFindByIdsheightInput: SortFindByIdsheightInput;
  SortFindByIdspumpbatteryInput: SortFindByIdspumpbatteryInput;
  SortFindByIdssensorchangeInput: SortFindByIdssensorchangeInput;
  SortFindByIdssmartphonebatteryInput: SortFindByIdssmartphonebatteryInput;
  SortFindByIdsuserInput: SortFindByIdsuserInput;
  SortFindByIdsweightInput: SortFindByIdsweightInput;
  SortFindManybasalInput: SortFindManybasalInput;
  SortFindManybloodsugarInput: SortFindManybloodsugarInput;
  SortFindManybolusInput: SortFindManybolusInput;
  SortFindManycatheterchangeInput: SortFindManycatheterchangeInput;
  SortFindManycorrectionbolusInput: SortFindManycorrectionbolusInput;
  SortFindManyheightInput: SortFindManyheightInput;
  SortFindManypumpbatteryInput: SortFindManypumpbatteryInput;
  SortFindManysensorchangeInput: SortFindManysensorchangeInput;
  SortFindManysmartphonebatteryInput: SortFindManysmartphonebatteryInput;
  SortFindManyuserInput: SortFindManyuserInput;
  SortFindManyweightInput: SortFindManyweightInput;
  SortFindOnebasalInput: SortFindOnebasalInput;
  SortFindOnebloodsugarInput: SortFindOnebloodsugarInput;
  SortFindOnebolusInput: SortFindOnebolusInput;
  SortFindOnecatheterchangeInput: SortFindOnecatheterchangeInput;
  SortFindOnecorrectionbolusInput: SortFindOnecorrectionbolusInput;
  SortFindOneheightInput: SortFindOneheightInput;
  SortFindOnepumpbatteryInput: SortFindOnepumpbatteryInput;
  SortFindOnesensorchangeInput: SortFindOnesensorchangeInput;
  SortFindOnesmartphonebatteryInput: SortFindOnesmartphonebatteryInput;
  SortFindOneuserInput: SortFindOneuserInput;
  SortFindOneweightInput: SortFindOneweightInput;
  SortRemoveOnebasalInput: SortRemoveOnebasalInput;
  SortRemoveOnebloodsugarInput: SortRemoveOnebloodsugarInput;
  SortRemoveOnebolusInput: SortRemoveOnebolusInput;
  SortRemoveOnecatheterchangeInput: SortRemoveOnecatheterchangeInput;
  SortRemoveOnecorrectionbolusInput: SortRemoveOnecorrectionbolusInput;
  SortRemoveOneheightInput: SortRemoveOneheightInput;
  SortRemoveOnepumpbatteryInput: SortRemoveOnepumpbatteryInput;
  SortRemoveOnesensorchangeInput: SortRemoveOnesensorchangeInput;
  SortRemoveOnesmartphonebatteryInput: SortRemoveOnesmartphonebatteryInput;
  SortRemoveOneuserInput: SortRemoveOneuserInput;
  SortRemoveOneweightInput: SortRemoveOneweightInput;
  SortUpdateManybasalInput: SortUpdateManybasalInput;
  SortUpdateManybloodsugarInput: SortUpdateManybloodsugarInput;
  SortUpdateManybolusInput: SortUpdateManybolusInput;
  SortUpdateManycatheterchangeInput: SortUpdateManycatheterchangeInput;
  SortUpdateManycorrectionbolusInput: SortUpdateManycorrectionbolusInput;
  SortUpdateManyheightInput: SortUpdateManyheightInput;
  SortUpdateManypumpbatteryInput: SortUpdateManypumpbatteryInput;
  SortUpdateManysensorchangeInput: SortUpdateManysensorchangeInput;
  SortUpdateManysmartphonebatteryInput: SortUpdateManysmartphonebatteryInput;
  SortUpdateManyuserInput: SortUpdateManyuserInput;
  SortUpdateManyweightInput: SortUpdateManyweightInput;
  SortUpdateOnebasalInput: SortUpdateOnebasalInput;
  SortUpdateOnebloodsugarInput: SortUpdateOnebloodsugarInput;
  SortUpdateOnebolusInput: SortUpdateOnebolusInput;
  SortUpdateOnecatheterchangeInput: SortUpdateOnecatheterchangeInput;
  SortUpdateOnecorrectionbolusInput: SortUpdateOnecorrectionbolusInput;
  SortUpdateOneheightInput: SortUpdateOneheightInput;
  SortUpdateOnepumpbatteryInput: SortUpdateOnepumpbatteryInput;
  SortUpdateOnesensorchangeInput: SortUpdateOnesensorchangeInput;
  SortUpdateOnesmartphonebatteryInput: SortUpdateOnesmartphonebatteryInput;
  SortUpdateOneuserInput: SortUpdateOneuserInput;
  SortUpdateOneweightInput: SortUpdateOneweightInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateByIdbasalInput: UpdateByIdbasalInput;
  UpdateByIdbasalPayload: ResolverTypeWrapper<UpdateByIdbasalPayload>;
  UpdateByIdbloodsugarInput: UpdateByIdbloodsugarInput;
  UpdateByIdbloodsugarPayload: ResolverTypeWrapper<UpdateByIdbloodsugarPayload>;
  UpdateByIdbolusCalculatedInput: UpdateByIdbolusCalculatedInput;
  UpdateByIdbolusInput: UpdateByIdbolusInput;
  UpdateByIdbolusPayload: ResolverTypeWrapper<UpdateByIdbolusPayload>;
  UpdateByIdbolusUnitsInput: UpdateByIdbolusUnitsInput;
  UpdateByIdcatheterchangeInput: UpdateByIdcatheterchangeInput;
  UpdateByIdcatheterchangePayload: ResolverTypeWrapper<UpdateByIdcatheterchangePayload>;
  UpdateByIdcorrectionbolusInput: UpdateByIdcorrectionbolusInput;
  UpdateByIdcorrectionbolusPayload: ResolverTypeWrapper<UpdateByIdcorrectionbolusPayload>;
  UpdateByIdheightInput: UpdateByIdheightInput;
  UpdateByIdheightPayload: ResolverTypeWrapper<UpdateByIdheightPayload>;
  UpdateByIdpumpbatteryInput: UpdateByIdpumpbatteryInput;
  UpdateByIdpumpbatteryPayload: ResolverTypeWrapper<UpdateByIdpumpbatteryPayload>;
  UpdateByIdsensorchangeInput: UpdateByIdsensorchangeInput;
  UpdateByIdsensorchangePayload: ResolverTypeWrapper<UpdateByIdsensorchangePayload>;
  UpdateByIdsmartphonebatteryInput: UpdateByIdsmartphonebatteryInput;
  UpdateByIdsmartphonebatteryPayload: ResolverTypeWrapper<UpdateByIdsmartphonebatteryPayload>;
  UpdateByIduserApiTokensInput: UpdateByIduserApiTokensInput;
  UpdateByIduserInput: UpdateByIduserInput;
  UpdateByIduserPayload: ResolverTypeWrapper<UpdateByIduserPayload>;
  UpdateByIdweightInput: UpdateByIdweightInput;
  UpdateByIdweightPayload: ResolverTypeWrapper<UpdateByIdweightPayload>;
  UpdateManybasalInput: UpdateManybasalInput;
  UpdateManybasalPayload: ResolverTypeWrapper<UpdateManybasalPayload>;
  UpdateManybloodsugarInput: UpdateManybloodsugarInput;
  UpdateManybloodsugarPayload: ResolverTypeWrapper<UpdateManybloodsugarPayload>;
  UpdateManybolusCalculatedInput: UpdateManybolusCalculatedInput;
  UpdateManybolusInput: UpdateManybolusInput;
  UpdateManybolusPayload: ResolverTypeWrapper<UpdateManybolusPayload>;
  UpdateManybolusUnitsInput: UpdateManybolusUnitsInput;
  UpdateManycatheterchangeInput: UpdateManycatheterchangeInput;
  UpdateManycatheterchangePayload: ResolverTypeWrapper<UpdateManycatheterchangePayload>;
  UpdateManycorrectionbolusInput: UpdateManycorrectionbolusInput;
  UpdateManycorrectionbolusPayload: ResolverTypeWrapper<UpdateManycorrectionbolusPayload>;
  UpdateManyheightInput: UpdateManyheightInput;
  UpdateManyheightPayload: ResolverTypeWrapper<UpdateManyheightPayload>;
  UpdateManypumpbatteryInput: UpdateManypumpbatteryInput;
  UpdateManypumpbatteryPayload: ResolverTypeWrapper<UpdateManypumpbatteryPayload>;
  UpdateManysensorchangeInput: UpdateManysensorchangeInput;
  UpdateManysensorchangePayload: ResolverTypeWrapper<UpdateManysensorchangePayload>;
  UpdateManysmartphonebatteryInput: UpdateManysmartphonebatteryInput;
  UpdateManysmartphonebatteryPayload: ResolverTypeWrapper<UpdateManysmartphonebatteryPayload>;
  UpdateManyuserApiTokensInput: UpdateManyuserApiTokensInput;
  UpdateManyuserInput: UpdateManyuserInput;
  UpdateManyuserPayload: ResolverTypeWrapper<UpdateManyuserPayload>;
  UpdateManyweightInput: UpdateManyweightInput;
  UpdateManyweightPayload: ResolverTypeWrapper<UpdateManyweightPayload>;
  UpdateOnebasalInput: UpdateOnebasalInput;
  UpdateOnebasalPayload: ResolverTypeWrapper<UpdateOnebasalPayload>;
  UpdateOnebloodsugarInput: UpdateOnebloodsugarInput;
  UpdateOnebloodsugarPayload: ResolverTypeWrapper<UpdateOnebloodsugarPayload>;
  UpdateOnebolusCalculatedInput: UpdateOnebolusCalculatedInput;
  UpdateOnebolusInput: UpdateOnebolusInput;
  UpdateOnebolusPayload: ResolverTypeWrapper<UpdateOnebolusPayload>;
  UpdateOnebolusUnitsInput: UpdateOnebolusUnitsInput;
  UpdateOnecatheterchangeInput: UpdateOnecatheterchangeInput;
  UpdateOnecatheterchangePayload: ResolverTypeWrapper<UpdateOnecatheterchangePayload>;
  UpdateOnecorrectionbolusInput: UpdateOnecorrectionbolusInput;
  UpdateOnecorrectionbolusPayload: ResolverTypeWrapper<UpdateOnecorrectionbolusPayload>;
  UpdateOneheightInput: UpdateOneheightInput;
  UpdateOneheightPayload: ResolverTypeWrapper<UpdateOneheightPayload>;
  UpdateOnepumpbatteryInput: UpdateOnepumpbatteryInput;
  UpdateOnepumpbatteryPayload: ResolverTypeWrapper<UpdateOnepumpbatteryPayload>;
  UpdateOnesensorchangeInput: UpdateOnesensorchangeInput;
  UpdateOnesensorchangePayload: ResolverTypeWrapper<UpdateOnesensorchangePayload>;
  UpdateOnesmartphonebatteryInput: UpdateOnesmartphonebatteryInput;
  UpdateOnesmartphonebatteryPayload: ResolverTypeWrapper<UpdateOnesmartphonebatteryPayload>;
  UpdateOneuserApiTokensInput: UpdateOneuserApiTokensInput;
  UpdateOneuserInput: UpdateOneuserInput;
  UpdateOneuserPayload: ResolverTypeWrapper<UpdateOneuserPayload>;
  UpdateOneweightInput: UpdateOneweightInput;
  UpdateOneweightPayload: ResolverTypeWrapper<UpdateOneweightPayload>;
  ValidationError: ResolverTypeWrapper<ValidationError>;
  ValidatorError: ResolverTypeWrapper<ValidatorError>;
  basal: ResolverTypeWrapper<Basal>;
  basalConnection: ResolverTypeWrapper<BasalConnection>;
  basalEdge: ResolverTypeWrapper<BasalEdge>;
  basalPagination: ResolverTypeWrapper<BasalPagination>;
  bloodsugar: ResolverTypeWrapper<Bloodsugar>;
  bloodsugarConnection: ResolverTypeWrapper<BloodsugarConnection>;
  bloodsugarEdge: ResolverTypeWrapper<BloodsugarEdge>;
  bloodsugarPagination: ResolverTypeWrapper<BloodsugarPagination>;
  bolus: ResolverTypeWrapper<Bolus>;
  bolusCalculated: ResolverTypeWrapper<BolusCalculated>;
  bolusCalculatedInput: BolusCalculatedInput;
  bolusConnection: ResolverTypeWrapper<BolusConnection>;
  bolusEdge: ResolverTypeWrapper<BolusEdge>;
  bolusPagination: ResolverTypeWrapper<BolusPagination>;
  bolusUnits: ResolverTypeWrapper<BolusUnits>;
  bolusUnitsInput: BolusUnitsInput;
  catheterchange: ResolverTypeWrapper<Catheterchange>;
  catheterchangeConnection: ResolverTypeWrapper<CatheterchangeConnection>;
  catheterchangeEdge: ResolverTypeWrapper<CatheterchangeEdge>;
  catheterchangePagination: ResolverTypeWrapper<CatheterchangePagination>;
  correctionbolus: ResolverTypeWrapper<Correctionbolus>;
  correctionbolusConnection: ResolverTypeWrapper<CorrectionbolusConnection>;
  correctionbolusEdge: ResolverTypeWrapper<CorrectionbolusEdge>;
  correctionbolusPagination: ResolverTypeWrapper<CorrectionbolusPagination>;
  event: ResolverTypeWrapper<Event>;
  eventInterface:
    | ResolversTypes['basal']
    | ResolversTypes['bloodsugar']
    | ResolversTypes['bolus']
    | ResolversTypes['catheterchange']
    | ResolversTypes['correctionbolus']
    | ResolversTypes['event']
    | ResolversTypes['height']
    | ResolversTypes['pumpbattery']
    | ResolversTypes['sensorchange']
    | ResolversTypes['smartphonebattery']
    | ResolversTypes['weight'];
  height: ResolverTypeWrapper<Height>;
  heightConnection: ResolverTypeWrapper<HeightConnection>;
  heightEdge: ResolverTypeWrapper<HeightEdge>;
  heightPagination: ResolverTypeWrapper<HeightPagination>;
  pumpbattery: ResolverTypeWrapper<Pumpbattery>;
  pumpbatteryConnection: ResolverTypeWrapper<PumpbatteryConnection>;
  pumpbatteryEdge: ResolverTypeWrapper<PumpbatteryEdge>;
  pumpbatteryPagination: ResolverTypeWrapper<PumpbatteryPagination>;
  sensorchange: ResolverTypeWrapper<Sensorchange>;
  sensorchangeConnection: ResolverTypeWrapper<SensorchangeConnection>;
  sensorchangeEdge: ResolverTypeWrapper<SensorchangeEdge>;
  sensorchangePagination: ResolverTypeWrapper<SensorchangePagination>;
  smartphonebattery: ResolverTypeWrapper<Smartphonebattery>;
  smartphonebatteryConnection: ResolverTypeWrapper<SmartphonebatteryConnection>;
  smartphonebatteryEdge: ResolverTypeWrapper<SmartphonebatteryEdge>;
  smartphonebatteryPagination: ResolverTypeWrapper<SmartphonebatteryPagination>;
  user: ResolverTypeWrapper<User>;
  userApiTokens: ResolverTypeWrapper<UserApiTokens>;
  userApiTokensInput: UserApiTokensInput;
  userConnection: ResolverTypeWrapper<UserConnection>;
  userEdge: ResolverTypeWrapper<UserEdge>;
  userPagination: ResolverTypeWrapper<UserPagination>;
  weight: ResolverTypeWrapper<Weight>;
  weightConnection: ResolverTypeWrapper<WeightConnection>;
  weightEdge: ResolverTypeWrapper<WeightEdge>;
  weightPagination: ResolverTypeWrapper<WeightPagination>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthToken: AuthToken;
  Boolean: Scalars['Boolean'];
  CreateManybasalInput: CreateManybasalInput;
  CreateManybasalPayload: CreateManybasalPayload;
  CreateManybloodsugarInput: CreateManybloodsugarInput;
  CreateManybloodsugarPayload: CreateManybloodsugarPayload;
  CreateManybolusInput: CreateManybolusInput;
  CreateManybolusPayload: CreateManybolusPayload;
  CreateManycatheterchangeInput: CreateManycatheterchangeInput;
  CreateManycatheterchangePayload: CreateManycatheterchangePayload;
  CreateManycorrectionbolusInput: CreateManycorrectionbolusInput;
  CreateManycorrectionbolusPayload: CreateManycorrectionbolusPayload;
  CreateManyheightInput: CreateManyheightInput;
  CreateManyheightPayload: CreateManyheightPayload;
  CreateManypumpbatteryInput: CreateManypumpbatteryInput;
  CreateManypumpbatteryPayload: CreateManypumpbatteryPayload;
  CreateManysensorchangeInput: CreateManysensorchangeInput;
  CreateManysensorchangePayload: CreateManysensorchangePayload;
  CreateManysmartphonebatteryInput: CreateManysmartphonebatteryInput;
  CreateManysmartphonebatteryPayload: CreateManysmartphonebatteryPayload;
  CreateManyuserInput: CreateManyuserInput;
  CreateManyuserPayload: CreateManyuserPayload;
  CreateManyweightInput: CreateManyweightInput;
  CreateManyweightPayload: CreateManyweightPayload;
  CreateOnebasalInput: CreateOnebasalInput;
  CreateOnebasalPayload: CreateOnebasalPayload;
  CreateOnebloodsugarInput: CreateOnebloodsugarInput;
  CreateOnebloodsugarPayload: CreateOnebloodsugarPayload;
  CreateOnebolusInput: CreateOnebolusInput;
  CreateOnebolusPayload: CreateOnebolusPayload;
  CreateOnecatheterchangeInput: CreateOnecatheterchangeInput;
  CreateOnecatheterchangePayload: CreateOnecatheterchangePayload;
  CreateOnecorrectionbolusInput: CreateOnecorrectionbolusInput;
  CreateOnecorrectionbolusPayload: CreateOnecorrectionbolusPayload;
  CreateOneheightInput: CreateOneheightInput;
  CreateOneheightPayload: CreateOneheightPayload;
  CreateOnepumpbatteryInput: CreateOnepumpbatteryInput;
  CreateOnepumpbatteryPayload: CreateOnepumpbatteryPayload;
  CreateOnesensorchangeInput: CreateOnesensorchangeInput;
  CreateOnesensorchangePayload: CreateOnesensorchangePayload;
  CreateOnesmartphonebatteryInput: CreateOnesmartphonebatteryInput;
  CreateOnesmartphonebatteryPayload: CreateOnesmartphonebatteryPayload;
  CreateOneuserInput: CreateOneuserInput;
  CreateOneuserPayload: CreateOneuserPayload;
  CreateOneweightInput: CreateOneweightInput;
  CreateOneweightPayload: CreateOneweightPayload;
  Date: Scalars['Date'];
  ErrorInterface:
    | ResolversParentTypes['MongoError']
    | ResolversParentTypes['RuntimeError']
    | ResolversParentTypes['ValidationError'];
  FilterCountbasalInput: FilterCountbasalInput;
  FilterCountbloodsugarInput: FilterCountbloodsugarInput;
  FilterCountbolusCalculatedInput: FilterCountbolusCalculatedInput;
  FilterCountbolusInput: FilterCountbolusInput;
  FilterCountbolusUnitsInput: FilterCountbolusUnitsInput;
  FilterCountcatheterchangeInput: FilterCountcatheterchangeInput;
  FilterCountcorrectionbolusInput: FilterCountcorrectionbolusInput;
  FilterCounteventInput: FilterCounteventInput;
  FilterCounteventOperatorsInput: FilterCounteventOperatorsInput;
  FilterCountevent_idOperatorsInput: FilterCountevent_IdOperatorsInput;
  FilterCountheightInput: FilterCountheightInput;
  FilterCountpumpbatteryInput: FilterCountpumpbatteryInput;
  FilterCountsensorchangeInput: FilterCountsensorchangeInput;
  FilterCountsmartphonebatteryInput: FilterCountsmartphonebatteryInput;
  FilterCountuserApiTokensInput: FilterCountuserApiTokensInput;
  FilterCountuserInput: FilterCountuserInput;
  FilterCountuserOperatorsInput: FilterCountuserOperatorsInput;
  FilterCountuser_idOperatorsInput: FilterCountuser_IdOperatorsInput;
  FilterCountweightInput: FilterCountweightInput;
  FilterFindManybasalInput: FilterFindManybasalInput;
  FilterFindManybloodsugarInput: FilterFindManybloodsugarInput;
  FilterFindManybolusCalculatedInput: FilterFindManybolusCalculatedInput;
  FilterFindManybolusInput: FilterFindManybolusInput;
  FilterFindManybolusUnitsInput: FilterFindManybolusUnitsInput;
  FilterFindManycatheterchangeInput: FilterFindManycatheterchangeInput;
  FilterFindManycorrectionbolusInput: FilterFindManycorrectionbolusInput;
  FilterFindManyeventInput: FilterFindManyeventInput;
  FilterFindManyeventOperatorsInput: FilterFindManyeventOperatorsInput;
  FilterFindManyevent_idOperatorsInput: FilterFindManyevent_IdOperatorsInput;
  FilterFindManyheightInput: FilterFindManyheightInput;
  FilterFindManypumpbatteryInput: FilterFindManypumpbatteryInput;
  FilterFindManysensorchangeInput: FilterFindManysensorchangeInput;
  FilterFindManysmartphonebatteryInput: FilterFindManysmartphonebatteryInput;
  FilterFindManyuserApiTokensInput: FilterFindManyuserApiTokensInput;
  FilterFindManyuserInput: FilterFindManyuserInput;
  FilterFindManyuserOperatorsInput: FilterFindManyuserOperatorsInput;
  FilterFindManyuser_idOperatorsInput: FilterFindManyuser_IdOperatorsInput;
  FilterFindManyweightInput: FilterFindManyweightInput;
  FilterFindOnebasalInput: FilterFindOnebasalInput;
  FilterFindOnebloodsugarInput: FilterFindOnebloodsugarInput;
  FilterFindOnebolusCalculatedInput: FilterFindOnebolusCalculatedInput;
  FilterFindOnebolusInput: FilterFindOnebolusInput;
  FilterFindOnebolusUnitsInput: FilterFindOnebolusUnitsInput;
  FilterFindOnecatheterchangeInput: FilterFindOnecatheterchangeInput;
  FilterFindOnecorrectionbolusInput: FilterFindOnecorrectionbolusInput;
  FilterFindOneeventInput: FilterFindOneeventInput;
  FilterFindOneeventOperatorsInput: FilterFindOneeventOperatorsInput;
  FilterFindOneevent_idOperatorsInput: FilterFindOneevent_IdOperatorsInput;
  FilterFindOneheightInput: FilterFindOneheightInput;
  FilterFindOnepumpbatteryInput: FilterFindOnepumpbatteryInput;
  FilterFindOnesensorchangeInput: FilterFindOnesensorchangeInput;
  FilterFindOnesmartphonebatteryInput: FilterFindOnesmartphonebatteryInput;
  FilterFindOneuserApiTokensInput: FilterFindOneuserApiTokensInput;
  FilterFindOneuserInput: FilterFindOneuserInput;
  FilterFindOneuserOperatorsInput: FilterFindOneuserOperatorsInput;
  FilterFindOneuser_idOperatorsInput: FilterFindOneuser_IdOperatorsInput;
  FilterFindOneweightInput: FilterFindOneweightInput;
  FilterRemoveManybasalInput: FilterRemoveManybasalInput;
  FilterRemoveManybloodsugarInput: FilterRemoveManybloodsugarInput;
  FilterRemoveManybolusCalculatedInput: FilterRemoveManybolusCalculatedInput;
  FilterRemoveManybolusInput: FilterRemoveManybolusInput;
  FilterRemoveManybolusUnitsInput: FilterRemoveManybolusUnitsInput;
  FilterRemoveManycatheterchangeInput: FilterRemoveManycatheterchangeInput;
  FilterRemoveManycorrectionbolusInput: FilterRemoveManycorrectionbolusInput;
  FilterRemoveManyeventInput: FilterRemoveManyeventInput;
  FilterRemoveManyeventOperatorsInput: FilterRemoveManyeventOperatorsInput;
  FilterRemoveManyevent_idOperatorsInput: FilterRemoveManyevent_IdOperatorsInput;
  FilterRemoveManyheightInput: FilterRemoveManyheightInput;
  FilterRemoveManypumpbatteryInput: FilterRemoveManypumpbatteryInput;
  FilterRemoveManysensorchangeInput: FilterRemoveManysensorchangeInput;
  FilterRemoveManysmartphonebatteryInput: FilterRemoveManysmartphonebatteryInput;
  FilterRemoveManyuserApiTokensInput: FilterRemoveManyuserApiTokensInput;
  FilterRemoveManyuserInput: FilterRemoveManyuserInput;
  FilterRemoveManyuserOperatorsInput: FilterRemoveManyuserOperatorsInput;
  FilterRemoveManyuser_idOperatorsInput: FilterRemoveManyuser_IdOperatorsInput;
  FilterRemoveManyweightInput: FilterRemoveManyweightInput;
  FilterRemoveOnebasalInput: FilterRemoveOnebasalInput;
  FilterRemoveOnebloodsugarInput: FilterRemoveOnebloodsugarInput;
  FilterRemoveOnebolusCalculatedInput: FilterRemoveOnebolusCalculatedInput;
  FilterRemoveOnebolusInput: FilterRemoveOnebolusInput;
  FilterRemoveOnebolusUnitsInput: FilterRemoveOnebolusUnitsInput;
  FilterRemoveOnecatheterchangeInput: FilterRemoveOnecatheterchangeInput;
  FilterRemoveOnecorrectionbolusInput: FilterRemoveOnecorrectionbolusInput;
  FilterRemoveOneeventInput: FilterRemoveOneeventInput;
  FilterRemoveOneeventOperatorsInput: FilterRemoveOneeventOperatorsInput;
  FilterRemoveOneevent_idOperatorsInput: FilterRemoveOneevent_IdOperatorsInput;
  FilterRemoveOneheightInput: FilterRemoveOneheightInput;
  FilterRemoveOnepumpbatteryInput: FilterRemoveOnepumpbatteryInput;
  FilterRemoveOnesensorchangeInput: FilterRemoveOnesensorchangeInput;
  FilterRemoveOnesmartphonebatteryInput: FilterRemoveOnesmartphonebatteryInput;
  FilterRemoveOneuserApiTokensInput: FilterRemoveOneuserApiTokensInput;
  FilterRemoveOneuserInput: FilterRemoveOneuserInput;
  FilterRemoveOneuserOperatorsInput: FilterRemoveOneuserOperatorsInput;
  FilterRemoveOneuser_idOperatorsInput: FilterRemoveOneuser_IdOperatorsInput;
  FilterRemoveOneweightInput: FilterRemoveOneweightInput;
  FilterUpdateManybasalInput: FilterUpdateManybasalInput;
  FilterUpdateManybloodsugarInput: FilterUpdateManybloodsugarInput;
  FilterUpdateManybolusCalculatedInput: FilterUpdateManybolusCalculatedInput;
  FilterUpdateManybolusInput: FilterUpdateManybolusInput;
  FilterUpdateManybolusUnitsInput: FilterUpdateManybolusUnitsInput;
  FilterUpdateManycatheterchangeInput: FilterUpdateManycatheterchangeInput;
  FilterUpdateManycorrectionbolusInput: FilterUpdateManycorrectionbolusInput;
  FilterUpdateManyeventInput: FilterUpdateManyeventInput;
  FilterUpdateManyeventOperatorsInput: FilterUpdateManyeventOperatorsInput;
  FilterUpdateManyevent_idOperatorsInput: FilterUpdateManyevent_IdOperatorsInput;
  FilterUpdateManyheightInput: FilterUpdateManyheightInput;
  FilterUpdateManypumpbatteryInput: FilterUpdateManypumpbatteryInput;
  FilterUpdateManysensorchangeInput: FilterUpdateManysensorchangeInput;
  FilterUpdateManysmartphonebatteryInput: FilterUpdateManysmartphonebatteryInput;
  FilterUpdateManyuserApiTokensInput: FilterUpdateManyuserApiTokensInput;
  FilterUpdateManyuserInput: FilterUpdateManyuserInput;
  FilterUpdateManyuserOperatorsInput: FilterUpdateManyuserOperatorsInput;
  FilterUpdateManyuser_idOperatorsInput: FilterUpdateManyuser_IdOperatorsInput;
  FilterUpdateManyweightInput: FilterUpdateManyweightInput;
  FilterUpdateOnebasalInput: FilterUpdateOnebasalInput;
  FilterUpdateOnebloodsugarInput: FilterUpdateOnebloodsugarInput;
  FilterUpdateOnebolusCalculatedInput: FilterUpdateOnebolusCalculatedInput;
  FilterUpdateOnebolusInput: FilterUpdateOnebolusInput;
  FilterUpdateOnebolusUnitsInput: FilterUpdateOnebolusUnitsInput;
  FilterUpdateOnecatheterchangeInput: FilterUpdateOnecatheterchangeInput;
  FilterUpdateOnecorrectionbolusInput: FilterUpdateOnecorrectionbolusInput;
  FilterUpdateOneeventInput: FilterUpdateOneeventInput;
  FilterUpdateOneeventOperatorsInput: FilterUpdateOneeventOperatorsInput;
  FilterUpdateOneevent_idOperatorsInput: FilterUpdateOneevent_IdOperatorsInput;
  FilterUpdateOneheightInput: FilterUpdateOneheightInput;
  FilterUpdateOnepumpbatteryInput: FilterUpdateOnepumpbatteryInput;
  FilterUpdateOnesensorchangeInput: FilterUpdateOnesensorchangeInput;
  FilterUpdateOnesmartphonebatteryInput: FilterUpdateOnesmartphonebatteryInput;
  FilterUpdateOneuserApiTokensInput: FilterUpdateOneuserApiTokensInput;
  FilterUpdateOneuserInput: FilterUpdateOneuserInput;
  FilterUpdateOneuserOperatorsInput: FilterUpdateOneuserOperatorsInput;
  FilterUpdateOneuser_idOperatorsInput: FilterUpdateOneuser_IdOperatorsInput;
  FilterUpdateOneweightInput: FilterUpdateOneweightInput;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  MongoError: MongoError;
  MongoID: Scalars['MongoID'];
  Mutation: {};
  PageInfo: PageInfo;
  PaginationInfo: PaginationInfo;
  Query: {};
  RemoveByIdbasalPayload: RemoveByIdbasalPayload;
  RemoveByIdbloodsugarPayload: RemoveByIdbloodsugarPayload;
  RemoveByIdbolusPayload: RemoveByIdbolusPayload;
  RemoveByIdcatheterchangePayload: RemoveByIdcatheterchangePayload;
  RemoveByIdcorrectionbolusPayload: RemoveByIdcorrectionbolusPayload;
  RemoveByIdheightPayload: RemoveByIdheightPayload;
  RemoveByIdpumpbatteryPayload: RemoveByIdpumpbatteryPayload;
  RemoveByIdsensorchangePayload: RemoveByIdsensorchangePayload;
  RemoveByIdsmartphonebatteryPayload: RemoveByIdsmartphonebatteryPayload;
  RemoveByIduserPayload: RemoveByIduserPayload;
  RemoveByIdweightPayload: RemoveByIdweightPayload;
  RemoveManybasalPayload: RemoveManybasalPayload;
  RemoveManybloodsugarPayload: RemoveManybloodsugarPayload;
  RemoveManybolusPayload: RemoveManybolusPayload;
  RemoveManycatheterchangePayload: RemoveManycatheterchangePayload;
  RemoveManycorrectionbolusPayload: RemoveManycorrectionbolusPayload;
  RemoveManyheightPayload: RemoveManyheightPayload;
  RemoveManypumpbatteryPayload: RemoveManypumpbatteryPayload;
  RemoveManysensorchangePayload: RemoveManysensorchangePayload;
  RemoveManysmartphonebatteryPayload: RemoveManysmartphonebatteryPayload;
  RemoveManyuserPayload: RemoveManyuserPayload;
  RemoveManyweightPayload: RemoveManyweightPayload;
  RemoveOnebasalPayload: RemoveOnebasalPayload;
  RemoveOnebloodsugarPayload: RemoveOnebloodsugarPayload;
  RemoveOnebolusPayload: RemoveOnebolusPayload;
  RemoveOnecatheterchangePayload: RemoveOnecatheterchangePayload;
  RemoveOnecorrectionbolusPayload: RemoveOnecorrectionbolusPayload;
  RemoveOneheightPayload: RemoveOneheightPayload;
  RemoveOnepumpbatteryPayload: RemoveOnepumpbatteryPayload;
  RemoveOnesensorchangePayload: RemoveOnesensorchangePayload;
  RemoveOnesmartphonebatteryPayload: RemoveOnesmartphonebatteryPayload;
  RemoveOneuserPayload: RemoveOneuserPayload;
  RemoveOneweightPayload: RemoveOneweightPayload;
  RuntimeError: RuntimeError;
  String: Scalars['String'];
  UpdateByIdbasalInput: UpdateByIdbasalInput;
  UpdateByIdbasalPayload: UpdateByIdbasalPayload;
  UpdateByIdbloodsugarInput: UpdateByIdbloodsugarInput;
  UpdateByIdbloodsugarPayload: UpdateByIdbloodsugarPayload;
  UpdateByIdbolusCalculatedInput: UpdateByIdbolusCalculatedInput;
  UpdateByIdbolusInput: UpdateByIdbolusInput;
  UpdateByIdbolusPayload: UpdateByIdbolusPayload;
  UpdateByIdbolusUnitsInput: UpdateByIdbolusUnitsInput;
  UpdateByIdcatheterchangeInput: UpdateByIdcatheterchangeInput;
  UpdateByIdcatheterchangePayload: UpdateByIdcatheterchangePayload;
  UpdateByIdcorrectionbolusInput: UpdateByIdcorrectionbolusInput;
  UpdateByIdcorrectionbolusPayload: UpdateByIdcorrectionbolusPayload;
  UpdateByIdheightInput: UpdateByIdheightInput;
  UpdateByIdheightPayload: UpdateByIdheightPayload;
  UpdateByIdpumpbatteryInput: UpdateByIdpumpbatteryInput;
  UpdateByIdpumpbatteryPayload: UpdateByIdpumpbatteryPayload;
  UpdateByIdsensorchangeInput: UpdateByIdsensorchangeInput;
  UpdateByIdsensorchangePayload: UpdateByIdsensorchangePayload;
  UpdateByIdsmartphonebatteryInput: UpdateByIdsmartphonebatteryInput;
  UpdateByIdsmartphonebatteryPayload: UpdateByIdsmartphonebatteryPayload;
  UpdateByIduserApiTokensInput: UpdateByIduserApiTokensInput;
  UpdateByIduserInput: UpdateByIduserInput;
  UpdateByIduserPayload: UpdateByIduserPayload;
  UpdateByIdweightInput: UpdateByIdweightInput;
  UpdateByIdweightPayload: UpdateByIdweightPayload;
  UpdateManybasalInput: UpdateManybasalInput;
  UpdateManybasalPayload: UpdateManybasalPayload;
  UpdateManybloodsugarInput: UpdateManybloodsugarInput;
  UpdateManybloodsugarPayload: UpdateManybloodsugarPayload;
  UpdateManybolusCalculatedInput: UpdateManybolusCalculatedInput;
  UpdateManybolusInput: UpdateManybolusInput;
  UpdateManybolusPayload: UpdateManybolusPayload;
  UpdateManybolusUnitsInput: UpdateManybolusUnitsInput;
  UpdateManycatheterchangeInput: UpdateManycatheterchangeInput;
  UpdateManycatheterchangePayload: UpdateManycatheterchangePayload;
  UpdateManycorrectionbolusInput: UpdateManycorrectionbolusInput;
  UpdateManycorrectionbolusPayload: UpdateManycorrectionbolusPayload;
  UpdateManyheightInput: UpdateManyheightInput;
  UpdateManyheightPayload: UpdateManyheightPayload;
  UpdateManypumpbatteryInput: UpdateManypumpbatteryInput;
  UpdateManypumpbatteryPayload: UpdateManypumpbatteryPayload;
  UpdateManysensorchangeInput: UpdateManysensorchangeInput;
  UpdateManysensorchangePayload: UpdateManysensorchangePayload;
  UpdateManysmartphonebatteryInput: UpdateManysmartphonebatteryInput;
  UpdateManysmartphonebatteryPayload: UpdateManysmartphonebatteryPayload;
  UpdateManyuserApiTokensInput: UpdateManyuserApiTokensInput;
  UpdateManyuserInput: UpdateManyuserInput;
  UpdateManyuserPayload: UpdateManyuserPayload;
  UpdateManyweightInput: UpdateManyweightInput;
  UpdateManyweightPayload: UpdateManyweightPayload;
  UpdateOnebasalInput: UpdateOnebasalInput;
  UpdateOnebasalPayload: UpdateOnebasalPayload;
  UpdateOnebloodsugarInput: UpdateOnebloodsugarInput;
  UpdateOnebloodsugarPayload: UpdateOnebloodsugarPayload;
  UpdateOnebolusCalculatedInput: UpdateOnebolusCalculatedInput;
  UpdateOnebolusInput: UpdateOnebolusInput;
  UpdateOnebolusPayload: UpdateOnebolusPayload;
  UpdateOnebolusUnitsInput: UpdateOnebolusUnitsInput;
  UpdateOnecatheterchangeInput: UpdateOnecatheterchangeInput;
  UpdateOnecatheterchangePayload: UpdateOnecatheterchangePayload;
  UpdateOnecorrectionbolusInput: UpdateOnecorrectionbolusInput;
  UpdateOnecorrectionbolusPayload: UpdateOnecorrectionbolusPayload;
  UpdateOneheightInput: UpdateOneheightInput;
  UpdateOneheightPayload: UpdateOneheightPayload;
  UpdateOnepumpbatteryInput: UpdateOnepumpbatteryInput;
  UpdateOnepumpbatteryPayload: UpdateOnepumpbatteryPayload;
  UpdateOnesensorchangeInput: UpdateOnesensorchangeInput;
  UpdateOnesensorchangePayload: UpdateOnesensorchangePayload;
  UpdateOnesmartphonebatteryInput: UpdateOnesmartphonebatteryInput;
  UpdateOnesmartphonebatteryPayload: UpdateOnesmartphonebatteryPayload;
  UpdateOneuserApiTokensInput: UpdateOneuserApiTokensInput;
  UpdateOneuserInput: UpdateOneuserInput;
  UpdateOneuserPayload: UpdateOneuserPayload;
  UpdateOneweightInput: UpdateOneweightInput;
  UpdateOneweightPayload: UpdateOneweightPayload;
  ValidationError: ValidationError;
  ValidatorError: ValidatorError;
  basal: Basal;
  basalConnection: BasalConnection;
  basalEdge: BasalEdge;
  basalPagination: BasalPagination;
  bloodsugar: Bloodsugar;
  bloodsugarConnection: BloodsugarConnection;
  bloodsugarEdge: BloodsugarEdge;
  bloodsugarPagination: BloodsugarPagination;
  bolus: Bolus;
  bolusCalculated: BolusCalculated;
  bolusCalculatedInput: BolusCalculatedInput;
  bolusConnection: BolusConnection;
  bolusEdge: BolusEdge;
  bolusPagination: BolusPagination;
  bolusUnits: BolusUnits;
  bolusUnitsInput: BolusUnitsInput;
  catheterchange: Catheterchange;
  catheterchangeConnection: CatheterchangeConnection;
  catheterchangeEdge: CatheterchangeEdge;
  catheterchangePagination: CatheterchangePagination;
  correctionbolus: Correctionbolus;
  correctionbolusConnection: CorrectionbolusConnection;
  correctionbolusEdge: CorrectionbolusEdge;
  correctionbolusPagination: CorrectionbolusPagination;
  event: Event;
  eventInterface:
    | ResolversParentTypes['basal']
    | ResolversParentTypes['bloodsugar']
    | ResolversParentTypes['bolus']
    | ResolversParentTypes['catheterchange']
    | ResolversParentTypes['correctionbolus']
    | ResolversParentTypes['event']
    | ResolversParentTypes['height']
    | ResolversParentTypes['pumpbattery']
    | ResolversParentTypes['sensorchange']
    | ResolversParentTypes['smartphonebattery']
    | ResolversParentTypes['weight'];
  height: Height;
  heightConnection: HeightConnection;
  heightEdge: HeightEdge;
  heightPagination: HeightPagination;
  pumpbattery: Pumpbattery;
  pumpbatteryConnection: PumpbatteryConnection;
  pumpbatteryEdge: PumpbatteryEdge;
  pumpbatteryPagination: PumpbatteryPagination;
  sensorchange: Sensorchange;
  sensorchangeConnection: SensorchangeConnection;
  sensorchangeEdge: SensorchangeEdge;
  sensorchangePagination: SensorchangePagination;
  smartphonebattery: Smartphonebattery;
  smartphonebatteryConnection: SmartphonebatteryConnection;
  smartphonebatteryEdge: SmartphonebatteryEdge;
  smartphonebatteryPagination: SmartphonebatteryPagination;
  user: User;
  userApiTokens: UserApiTokens;
  userApiTokensInput: UserApiTokensInput;
  userConnection: UserConnection;
  userEdge: UserEdge;
  userPagination: UserPagination;
  weight: Weight;
  weightConnection: WeightConnection;
  weightEdge: WeightEdge;
  weightPagination: WeightPagination;
}>;

export type AuthTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthToken'] = ResolversParentTypes['AuthToken']
> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManybasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManybasalPayload'] = ResolversParentTypes['CreateManybasalPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['basal']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManybloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManybloodsugarPayload'] = ResolversParentTypes['CreateManybloodsugarPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['bloodsugar']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManybolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManybolusPayload'] = ResolversParentTypes['CreateManybolusPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['bolus']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManycatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManycatheterchangePayload'] = ResolversParentTypes['CreateManycatheterchangePayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['catheterchange']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManycorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManycorrectionbolusPayload'] = ResolversParentTypes['CreateManycorrectionbolusPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['correctionbolus']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManyheightPayload'] = ResolversParentTypes['CreateManyheightPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['height']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManypumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManypumpbatteryPayload'] = ResolversParentTypes['CreateManypumpbatteryPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['pumpbattery']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManysensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManysensorchangePayload'] = ResolversParentTypes['CreateManysensorchangePayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['sensorchange']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManysmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManysmartphonebatteryPayload'] = ResolversParentTypes['CreateManysmartphonebatteryPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['smartphonebattery']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManyuserPayload'] = ResolversParentTypes['CreateManyuserPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['user']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateManyweightPayload'] = ResolversParentTypes['CreateManyweightPayload']
> = ResolversObject<{
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  recordIds?: Resolver<
    Array<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  records?: Resolver<
    Maybe<Array<ResolversTypes['weight']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnebasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnebasalPayload'] = ResolversParentTypes['CreateOnebasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['basal']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnebloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnebloodsugarPayload'] = ResolversParentTypes['CreateOnebloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnebolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnebolusPayload'] = ResolversParentTypes['CreateOnebolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['bolus']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnecatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnecatheterchangePayload'] = ResolversParentTypes['CreateOnecatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnecorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnecorrectionbolusPayload'] = ResolversParentTypes['CreateOnecorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOneheightPayload'] = ResolversParentTypes['CreateOneheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['height']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnepumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnepumpbatteryPayload'] = ResolversParentTypes['CreateOnepumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnesensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnesensorchangePayload'] = ResolversParentTypes['CreateOnesensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOnesmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOnesmartphonebatteryPayload'] = ResolversParentTypes['CreateOnesmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOneuserPayload'] = ResolversParentTypes['CreateOneuserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOneweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateOneweightPayload'] = ResolversParentTypes['CreateOneweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['weight']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorInterfaceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorInterface'] = ResolversParentTypes['ErrorInterface']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'MongoError' | 'RuntimeError' | 'ValidationError',
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MongoErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MongoError'] = ResolversParentTypes['MongoError']
> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MongoIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['MongoID'], any> {
  name: 'MongoID';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  basalEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManybasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventCreateManyArgs, 'records'>
  >;
  basalEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnebasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventCreateOneArgs, 'record'>
  >;
  basalEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdbasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventRemoveByIdArgs, '_id'>
  >;
  basalEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManybasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  basalEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnebasalPayload']>,
    ParentType,
    ContextType,
    Partial<MutationBasalEventRemoveOneArgs>
  >;
  basalEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdbasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventUpdateByIdArgs, '_id' | 'record'>
  >;
  basalEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManybasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventUpdateManyArgs, 'limit' | 'record'>
  >;
  basalEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnebasalPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBasalEventUpdateOneArgs, 'record'>
  >;
  bloodSugarEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManybloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventCreateManyArgs, 'records'>
  >;
  bloodSugarEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnebloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventCreateOneArgs, 'record'>
  >;
  bloodSugarEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdbloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventRemoveByIdArgs, '_id'>
  >;
  bloodSugarEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManybloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  bloodSugarEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnebloodsugarPayload']>,
    ParentType,
    ContextType,
    Partial<MutationBloodSugarEventRemoveOneArgs>
  >;
  bloodSugarEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdbloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventUpdateByIdArgs, '_id' | 'record'>
  >;
  bloodSugarEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManybloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventUpdateManyArgs, 'limit' | 'record'>
  >;
  bloodSugarEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnebloodsugarPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBloodSugarEventUpdateOneArgs, 'record'>
  >;
  bolusEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManybolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventCreateManyArgs, 'records'>
  >;
  bolusEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnebolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventCreateOneArgs, 'record'>
  >;
  bolusEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventRemoveByIdArgs, '_id'>
  >;
  bolusEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManybolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  bolusEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnebolusPayload']>,
    ParentType,
    ContextType,
    Partial<MutationBolusEventRemoveOneArgs>
  >;
  bolusEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventUpdateByIdArgs, '_id' | 'record'>
  >;
  bolusEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManybolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventUpdateManyArgs, 'limit' | 'record'>
  >;
  bolusEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnebolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationBolusEventUpdateOneArgs, 'record'>
  >;
  catheterChangeEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManycatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventCreateManyArgs, 'records'>
  >;
  catheterChangeEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnecatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventCreateOneArgs, 'record'>
  >;
  catheterChangeEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdcatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventRemoveByIdArgs, '_id'>
  >;
  catheterChangeEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManycatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  catheterChangeEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnecatheterchangePayload']>,
    ParentType,
    ContextType,
    Partial<MutationCatheterChangeEventRemoveOneArgs>
  >;
  catheterChangeEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdcatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventUpdateByIdArgs, '_id' | 'record'>
  >;
  catheterChangeEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManycatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventUpdateManyArgs, 'limit' | 'record'>
  >;
  catheterChangeEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnecatheterchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCatheterChangeEventUpdateOneArgs, 'record'>
  >;
  correctionBolusEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManycorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCorrectionBolusEventCreateManyArgs, 'records'>
  >;
  correctionBolusEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnecorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCorrectionBolusEventCreateOneArgs, 'record'>
  >;
  correctionBolusEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdcorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCorrectionBolusEventRemoveByIdArgs, '_id'>
  >;
  correctionBolusEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManycorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCorrectionBolusEventRemoveManyArgs,
      'filter' | 'limit'
    >
  >;
  correctionBolusEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnecorrectionbolusPayload']>,
    ParentType,
    ContextType,
    Partial<MutationCorrectionBolusEventRemoveOneArgs>
  >;
  correctionBolusEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdcorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCorrectionBolusEventUpdateByIdArgs, '_id' | 'record'>
  >;
  correctionBolusEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManycorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCorrectionBolusEventUpdateManyArgs,
      'limit' | 'record'
    >
  >;
  correctionBolusEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnecorrectionbolusPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCorrectionBolusEventUpdateOneArgs, 'record'>
  >;
  heightEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManyheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventCreateManyArgs, 'records'>
  >;
  heightEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOneheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventCreateOneArgs, 'record'>
  >;
  heightEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventRemoveByIdArgs, '_id'>
  >;
  heightEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManyheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  heightEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOneheightPayload']>,
    ParentType,
    ContextType,
    Partial<MutationHeightEventRemoveOneArgs>
  >;
  heightEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventUpdateByIdArgs, '_id' | 'record'>
  >;
  heightEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManyheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventUpdateManyArgs, 'limit' | 'record'>
  >;
  heightEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOneheightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationHeightEventUpdateOneArgs, 'record'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['AuthToken']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'password' | 'username'>
  >;
  pumpBatteryEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManypumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventCreateManyArgs, 'records'>
  >;
  pumpBatteryEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnepumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventCreateOneArgs, 'record'>
  >;
  pumpBatteryEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdpumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventRemoveByIdArgs, '_id'>
  >;
  pumpBatteryEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManypumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  pumpBatteryEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnepumpbatteryPayload']>,
    ParentType,
    ContextType,
    Partial<MutationPumpBatteryEventRemoveOneArgs>
  >;
  pumpBatteryEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdpumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventUpdateByIdArgs, '_id' | 'record'>
  >;
  pumpBatteryEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManypumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventUpdateManyArgs, 'limit' | 'record'>
  >;
  pumpBatteryEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnepumpbatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationPumpBatteryEventUpdateOneArgs, 'record'>
  >;
  sensorChangeEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManysensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventCreateManyArgs, 'records'>
  >;
  sensorChangeEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnesensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventCreateOneArgs, 'record'>
  >;
  sensorChangeEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdsensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventRemoveByIdArgs, '_id'>
  >;
  sensorChangeEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManysensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  sensorChangeEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnesensorchangePayload']>,
    ParentType,
    ContextType,
    Partial<MutationSensorChangeEventRemoveOneArgs>
  >;
  sensorChangeEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdsensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventUpdateByIdArgs, '_id' | 'record'>
  >;
  sensorChangeEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManysensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventUpdateManyArgs, 'limit' | 'record'>
  >;
  sensorChangeEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnesensorchangePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSensorChangeEventUpdateOneArgs, 'record'>
  >;
  smartphoneBatteryEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManysmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSmartphoneBatteryEventCreateManyArgs, 'records'>
  >;
  smartphoneBatteryEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOnesmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSmartphoneBatteryEventCreateOneArgs, 'record'>
  >;
  smartphoneBatteryEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdsmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSmartphoneBatteryEventRemoveByIdArgs, '_id'>
  >;
  smartphoneBatteryEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManysmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSmartphoneBatteryEventRemoveManyArgs,
      'filter' | 'limit'
    >
  >;
  smartphoneBatteryEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOnesmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    Partial<MutationSmartphoneBatteryEventRemoveOneArgs>
  >;
  smartphoneBatteryEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdsmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSmartphoneBatteryEventUpdateByIdArgs,
      '_id' | 'record'
    >
  >;
  smartphoneBatteryEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManysmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSmartphoneBatteryEventUpdateManyArgs,
      'limit' | 'record'
    >
  >;
  smartphoneBatteryEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOnesmartphonebatteryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSmartphoneBatteryEventUpdateOneArgs, 'record'>
  >;
  userCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManyuserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserCreateManyArgs, 'records'>
  >;
  userCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOneuserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserCreateOneArgs, 'record'>
  >;
  userRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIduserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserRemoveByIdArgs, '_id'>
  >;
  userRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManyuserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserRemoveManyArgs, 'filter' | 'limit'>
  >;
  userRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOneuserPayload']>,
    ParentType,
    ContextType,
    Partial<MutationUserRemoveOneArgs>
  >;
  userUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIduserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdateByIdArgs, '_id' | 'record'>
  >;
  userUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManyuserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdateManyArgs, 'limit' | 'record'>
  >;
  userUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOneuserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdateOneArgs, 'record'>
  >;
  weightEventCreateMany?: Resolver<
    Maybe<ResolversTypes['CreateManyweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventCreateManyArgs, 'records'>
  >;
  weightEventCreateOne?: Resolver<
    Maybe<ResolversTypes['CreateOneweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventCreateOneArgs, 'record'>
  >;
  weightEventRemoveById?: Resolver<
    Maybe<ResolversTypes['RemoveByIdweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventRemoveByIdArgs, '_id'>
  >;
  weightEventRemoveMany?: Resolver<
    Maybe<ResolversTypes['RemoveManyweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventRemoveManyArgs, 'filter' | 'limit'>
  >;
  weightEventRemoveOne?: Resolver<
    Maybe<ResolversTypes['RemoveOneweightPayload']>,
    ParentType,
    ContextType,
    Partial<MutationWeightEventRemoveOneArgs>
  >;
  weightEventUpdateById?: Resolver<
    Maybe<ResolversTypes['UpdateByIdweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventUpdateByIdArgs, '_id' | 'record'>
  >;
  weightEventUpdateMany?: Resolver<
    Maybe<ResolversTypes['UpdateManyweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventUpdateManyArgs, 'limit' | 'record'>
  >;
  weightEventUpdateOne?: Resolver<
    Maybe<ResolversTypes['UpdateOneweightPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationWeightEventUpdateOneArgs, 'record'>
  >;
}>;

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaginationInfo'] = ResolversParentTypes['PaginationInfo']
> = ResolversObject<{
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasNextPage?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  hasPreviousPage?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  itemCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  basalEventById?: Resolver<
    Maybe<ResolversTypes['basal']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventByIdArgs, '_id'>
  >;
  basalEventByIds?: Resolver<
    Array<ResolversTypes['basal']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventByIdsArgs, '_ids' | 'limit'>
  >;
  basalEventConnection?: Resolver<
    Maybe<ResolversTypes['basalConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventConnectionArgs, 'sort'>
  >;
  basalEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryBasalEventCountArgs>
  >;
  basalEventDataLoader?: Resolver<
    Maybe<ResolversTypes['basal']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventDataLoaderArgs, '_id'>
  >;
  basalEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['basal']>>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventDataLoaderManyArgs, '_ids'>
  >;
  basalEventMany?: Resolver<
    Array<ResolversTypes['basal']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventManyArgs, 'limit'>
  >;
  basalEventOne?: Resolver<
    Maybe<ResolversTypes['basal']>,
    ParentType,
    ContextType,
    Partial<QueryBasalEventOneArgs>
  >;
  basalEventPagination?: Resolver<
    Maybe<ResolversTypes['basalPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBasalEventPaginationArgs, 'perPage'>
  >;
  bloodSugarEventById?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventByIdArgs, '_id'>
  >;
  bloodSugarEventByIds?: Resolver<
    Array<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventByIdsArgs, '_ids' | 'limit'>
  >;
  bloodSugarEventConnection?: Resolver<
    Maybe<ResolversTypes['bloodsugarConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventConnectionArgs, 'sort'>
  >;
  bloodSugarEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryBloodSugarEventCountArgs>
  >;
  bloodSugarEventDataLoader?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventDataLoaderArgs, '_id'>
  >;
  bloodSugarEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['bloodsugar']>>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventDataLoaderManyArgs, '_ids'>
  >;
  bloodSugarEventMany?: Resolver<
    Array<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventManyArgs, 'limit'>
  >;
  bloodSugarEventOne?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType,
    Partial<QueryBloodSugarEventOneArgs>
  >;
  bloodSugarEventPagination?: Resolver<
    Maybe<ResolversTypes['bloodsugarPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBloodSugarEventPaginationArgs, 'perPage'>
  >;
  bolusEventById?: Resolver<
    Maybe<ResolversTypes['bolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventByIdArgs, '_id'>
  >;
  bolusEventByIds?: Resolver<
    Array<ResolversTypes['bolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventByIdsArgs, '_ids' | 'limit'>
  >;
  bolusEventConnection?: Resolver<
    Maybe<ResolversTypes['bolusConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventConnectionArgs, 'sort'>
  >;
  bolusEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryBolusEventCountArgs>
  >;
  bolusEventDataLoader?: Resolver<
    Maybe<ResolversTypes['bolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventDataLoaderArgs, '_id'>
  >;
  bolusEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['bolus']>>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventDataLoaderManyArgs, '_ids'>
  >;
  bolusEventMany?: Resolver<
    Array<ResolversTypes['bolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventManyArgs, 'limit'>
  >;
  bolusEventOne?: Resolver<
    Maybe<ResolversTypes['bolus']>,
    ParentType,
    ContextType,
    Partial<QueryBolusEventOneArgs>
  >;
  bolusEventPagination?: Resolver<
    Maybe<ResolversTypes['bolusPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBolusEventPaginationArgs, 'perPage'>
  >;
  catheterChangeEventById?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventByIdArgs, '_id'>
  >;
  catheterChangeEventByIds?: Resolver<
    Array<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventByIdsArgs, '_ids' | 'limit'>
  >;
  catheterChangeEventConnection?: Resolver<
    Maybe<ResolversTypes['catheterchangeConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventConnectionArgs, 'sort'>
  >;
  catheterChangeEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryCatheterChangeEventCountArgs>
  >;
  catheterChangeEventDataLoader?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventDataLoaderArgs, '_id'>
  >;
  catheterChangeEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['catheterchange']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventDataLoaderManyArgs, '_ids'>
  >;
  catheterChangeEventMany?: Resolver<
    Array<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventManyArgs, 'limit'>
  >;
  catheterChangeEventOne?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType,
    Partial<QueryCatheterChangeEventOneArgs>
  >;
  catheterChangeEventPagination?: Resolver<
    Maybe<ResolversTypes['catheterchangePagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryCatheterChangeEventPaginationArgs, 'perPage'>
  >;
  correctionBolusEventById?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventByIdArgs, '_id'>
  >;
  correctionBolusEventByIds?: Resolver<
    Array<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventByIdsArgs, '_ids' | 'limit'>
  >;
  correctionBolusEventConnection?: Resolver<
    Maybe<ResolversTypes['correctionbolusConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventConnectionArgs, 'sort'>
  >;
  correctionBolusEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryCorrectionBolusEventCountArgs>
  >;
  correctionBolusEventDataLoader?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventDataLoaderArgs, '_id'>
  >;
  correctionBolusEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['correctionbolus']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventDataLoaderManyArgs, '_ids'>
  >;
  correctionBolusEventMany?: Resolver<
    Array<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventManyArgs, 'limit'>
  >;
  correctionBolusEventOne?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType,
    Partial<QueryCorrectionBolusEventOneArgs>
  >;
  correctionBolusEventPagination?: Resolver<
    Maybe<ResolversTypes['correctionbolusPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryCorrectionBolusEventPaginationArgs, 'perPage'>
  >;
  heightEventById?: Resolver<
    Maybe<ResolversTypes['height']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventByIdArgs, '_id'>
  >;
  heightEventByIds?: Resolver<
    Array<ResolversTypes['height']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventByIdsArgs, '_ids' | 'limit'>
  >;
  heightEventConnection?: Resolver<
    Maybe<ResolversTypes['heightConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventConnectionArgs, 'sort'>
  >;
  heightEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryHeightEventCountArgs>
  >;
  heightEventDataLoader?: Resolver<
    Maybe<ResolversTypes['height']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventDataLoaderArgs, '_id'>
  >;
  heightEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['height']>>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventDataLoaderManyArgs, '_ids'>
  >;
  heightEventMany?: Resolver<
    Array<ResolversTypes['height']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventManyArgs, 'limit'>
  >;
  heightEventOne?: Resolver<
    Maybe<ResolversTypes['height']>,
    ParentType,
    ContextType,
    Partial<QueryHeightEventOneArgs>
  >;
  heightEventPagination?: Resolver<
    Maybe<ResolversTypes['heightPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryHeightEventPaginationArgs, 'perPage'>
  >;
  me?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  pumpBatteryEventById?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventByIdArgs, '_id'>
  >;
  pumpBatteryEventByIds?: Resolver<
    Array<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventByIdsArgs, '_ids' | 'limit'>
  >;
  pumpBatteryEventConnection?: Resolver<
    Maybe<ResolversTypes['pumpbatteryConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventConnectionArgs, 'sort'>
  >;
  pumpBatteryEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryPumpBatteryEventCountArgs>
  >;
  pumpBatteryEventDataLoader?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventDataLoaderArgs, '_id'>
  >;
  pumpBatteryEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['pumpbattery']>>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventDataLoaderManyArgs, '_ids'>
  >;
  pumpBatteryEventMany?: Resolver<
    Array<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventManyArgs, 'limit'>
  >;
  pumpBatteryEventOne?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType,
    Partial<QueryPumpBatteryEventOneArgs>
  >;
  pumpBatteryEventPagination?: Resolver<
    Maybe<ResolversTypes['pumpbatteryPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryPumpBatteryEventPaginationArgs, 'perPage'>
  >;
  sensorChangeEventById?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventByIdArgs, '_id'>
  >;
  sensorChangeEventByIds?: Resolver<
    Array<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventByIdsArgs, '_ids' | 'limit'>
  >;
  sensorChangeEventConnection?: Resolver<
    Maybe<ResolversTypes['sensorchangeConnection']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventConnectionArgs, 'sort'>
  >;
  sensorChangeEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QuerySensorChangeEventCountArgs>
  >;
  sensorChangeEventDataLoader?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventDataLoaderArgs, '_id'>
  >;
  sensorChangeEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['sensorchange']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventDataLoaderManyArgs, '_ids'>
  >;
  sensorChangeEventMany?: Resolver<
    Array<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventManyArgs, 'limit'>
  >;
  sensorChangeEventOne?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType,
    Partial<QuerySensorChangeEventOneArgs>
  >;
  sensorChangeEventPagination?: Resolver<
    Maybe<ResolversTypes['sensorchangePagination']>,
    ParentType,
    ContextType,
    RequireFields<QuerySensorChangeEventPaginationArgs, 'perPage'>
  >;
  smartphoneBatteryEventById?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventByIdArgs, '_id'>
  >;
  smartphoneBatteryEventByIds?: Resolver<
    Array<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventByIdsArgs, '_ids' | 'limit'>
  >;
  smartphoneBatteryEventConnection?: Resolver<
    Maybe<ResolversTypes['smartphonebatteryConnection']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventConnectionArgs, 'sort'>
  >;
  smartphoneBatteryEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QuerySmartphoneBatteryEventCountArgs>
  >;
  smartphoneBatteryEventDataLoader?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventDataLoaderArgs, '_id'>
  >;
  smartphoneBatteryEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['smartphonebattery']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventDataLoaderManyArgs, '_ids'>
  >;
  smartphoneBatteryEventMany?: Resolver<
    Array<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventManyArgs, 'limit'>
  >;
  smartphoneBatteryEventOne?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType,
    Partial<QuerySmartphoneBatteryEventOneArgs>
  >;
  smartphoneBatteryEventPagination?: Resolver<
    Maybe<ResolversTypes['smartphonebatteryPagination']>,
    ParentType,
    ContextType,
    RequireFields<QuerySmartphoneBatteryEventPaginationArgs, 'perPage'>
  >;
  userById?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, '_id'>
  >;
  userByIdLean?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdLeanArgs, '_id'>
  >;
  userByIds?: Resolver<
    Array<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdsArgs, '_ids' | 'limit'>
  >;
  userByIdsLean?: Resolver<
    Array<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdsLeanArgs, '_ids' | 'limit'>
  >;
  userConnection?: Resolver<
    Maybe<ResolversTypes['userConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserConnectionArgs, 'sort'>
  >;
  userCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryUserCountArgs>
  >;
  userDataLoader?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserDataLoaderArgs, '_id'>
  >;
  userDataLoaderLean?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserDataLoaderLeanArgs, '_id'>
  >;
  userDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['user']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserDataLoaderManyArgs, '_ids'>
  >;
  userDataLoaderManyLean?: Resolver<
    Array<Maybe<ResolversTypes['user']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserDataLoaderManyLeanArgs, '_ids'>
  >;
  userMany?: Resolver<
    Array<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserManyArgs, 'limit'>
  >;
  userManyLean?: Resolver<
    Array<ResolversTypes['user']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserManyLeanArgs, 'limit'>
  >;
  userOne?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    Partial<QueryUserOneArgs>
  >;
  userOneLean?: Resolver<
    Maybe<ResolversTypes['user']>,
    ParentType,
    ContextType,
    Partial<QueryUserOneLeanArgs>
  >;
  userPagination?: Resolver<
    Maybe<ResolversTypes['userPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserPaginationArgs, 'perPage'>
  >;
  weightEventById?: Resolver<
    Maybe<ResolversTypes['weight']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventByIdArgs, '_id'>
  >;
  weightEventByIds?: Resolver<
    Array<ResolversTypes['weight']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventByIdsArgs, '_ids' | 'limit'>
  >;
  weightEventConnection?: Resolver<
    Maybe<ResolversTypes['weightConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventConnectionArgs, 'sort'>
  >;
  weightEventCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<QueryWeightEventCountArgs>
  >;
  weightEventDataLoader?: Resolver<
    Maybe<ResolversTypes['weight']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventDataLoaderArgs, '_id'>
  >;
  weightEventDataLoaderMany?: Resolver<
    Array<Maybe<ResolversTypes['weight']>>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventDataLoaderManyArgs, '_ids'>
  >;
  weightEventMany?: Resolver<
    Array<ResolversTypes['weight']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventManyArgs, 'limit'>
  >;
  weightEventOne?: Resolver<
    Maybe<ResolversTypes['weight']>,
    ParentType,
    ContextType,
    Partial<QueryWeightEventOneArgs>
  >;
  weightEventPagination?: Resolver<
    Maybe<ResolversTypes['weightPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryWeightEventPaginationArgs, 'perPage'>
  >;
}>;

export type RemoveByIdbasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdbasalPayload'] = ResolversParentTypes['RemoveByIdbasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['basal']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdbloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdbloodsugarPayload'] = ResolversParentTypes['RemoveByIdbloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdbolusPayload'] = ResolversParentTypes['RemoveByIdbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['bolus']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdcatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdcatheterchangePayload'] = ResolversParentTypes['RemoveByIdcatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdcorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdcorrectionbolusPayload'] = ResolversParentTypes['RemoveByIdcorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdheightPayload'] = ResolversParentTypes['RemoveByIdheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['height']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdpumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdpumpbatteryPayload'] = ResolversParentTypes['RemoveByIdpumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdsensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdsensorchangePayload'] = ResolversParentTypes['RemoveByIdsensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdsmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdsmartphonebatteryPayload'] = ResolversParentTypes['RemoveByIdsmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIduserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIduserPayload'] = ResolversParentTypes['RemoveByIduserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveByIdweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveByIdweightPayload'] = ResolversParentTypes['RemoveByIdweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['weight']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManybasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManybasalPayload'] = ResolversParentTypes['RemoveManybasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManybloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManybloodsugarPayload'] = ResolversParentTypes['RemoveManybloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManybolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManybolusPayload'] = ResolversParentTypes['RemoveManybolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManycatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManycatheterchangePayload'] = ResolversParentTypes['RemoveManycatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManycorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManycorrectionbolusPayload'] = ResolversParentTypes['RemoveManycorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManyheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManyheightPayload'] = ResolversParentTypes['RemoveManyheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManypumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManypumpbatteryPayload'] = ResolversParentTypes['RemoveManypumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManysensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManysensorchangePayload'] = ResolversParentTypes['RemoveManysensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManysmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManysmartphonebatteryPayload'] = ResolversParentTypes['RemoveManysmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManyuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManyuserPayload'] = ResolversParentTypes['RemoveManyuserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveManyweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveManyweightPayload'] = ResolversParentTypes['RemoveManyweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnebasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnebasalPayload'] = ResolversParentTypes['RemoveOnebasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['basal']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnebloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnebloodsugarPayload'] = ResolversParentTypes['RemoveOnebloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnebolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnebolusPayload'] = ResolversParentTypes['RemoveOnebolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['bolus']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnecatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnecatheterchangePayload'] = ResolversParentTypes['RemoveOnecatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnecorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnecorrectionbolusPayload'] = ResolversParentTypes['RemoveOnecorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOneheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOneheightPayload'] = ResolversParentTypes['RemoveOneheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['height']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnepumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnepumpbatteryPayload'] = ResolversParentTypes['RemoveOnepumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnesensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnesensorchangePayload'] = ResolversParentTypes['RemoveOnesensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOnesmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOnesmartphonebatteryPayload'] = ResolversParentTypes['RemoveOnesmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOneuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOneuserPayload'] = ResolversParentTypes['RemoveOneuserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemoveOneweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RemoveOneweightPayload'] = ResolversParentTypes['RemoveOneweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['weight']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RuntimeErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RuntimeError'] = ResolversParentTypes['RuntimeError']
> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdbasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdbasalPayload'] = ResolversParentTypes['UpdateByIdbasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['basal']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdbloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdbloodsugarPayload'] = ResolversParentTypes['UpdateByIdbloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdbolusPayload'] = ResolversParentTypes['UpdateByIdbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['bolus']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdcatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdcatheterchangePayload'] = ResolversParentTypes['UpdateByIdcatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdcorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdcorrectionbolusPayload'] = ResolversParentTypes['UpdateByIdcorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdheightPayload'] = ResolversParentTypes['UpdateByIdheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['height']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdpumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdpumpbatteryPayload'] = ResolversParentTypes['UpdateByIdpumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdsensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdsensorchangePayload'] = ResolversParentTypes['UpdateByIdsensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdsmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdsmartphonebatteryPayload'] = ResolversParentTypes['UpdateByIdsmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIduserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIduserPayload'] = ResolversParentTypes['UpdateByIduserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateByIdweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateByIdweightPayload'] = ResolversParentTypes['UpdateByIdweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['weight']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManybasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManybasalPayload'] = ResolversParentTypes['UpdateManybasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManybloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManybloodsugarPayload'] = ResolversParentTypes['UpdateManybloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManybolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManybolusPayload'] = ResolversParentTypes['UpdateManybolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManycatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManycatheterchangePayload'] = ResolversParentTypes['UpdateManycatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManycorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManycorrectionbolusPayload'] = ResolversParentTypes['UpdateManycorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManyheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManyheightPayload'] = ResolversParentTypes['UpdateManyheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManypumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManypumpbatteryPayload'] = ResolversParentTypes['UpdateManypumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManysensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManysensorchangePayload'] = ResolversParentTypes['UpdateManysensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManysmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManysmartphonebatteryPayload'] = ResolversParentTypes['UpdateManysmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManyuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManyuserPayload'] = ResolversParentTypes['UpdateManyuserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManyweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateManyweightPayload'] = ResolversParentTypes['UpdateManyweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  numAffected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnebasalPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnebasalPayload'] = ResolversParentTypes['UpdateOnebasalPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['basal']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnebloodsugarPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnebloodsugarPayload'] = ResolversParentTypes['UpdateOnebloodsugarPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['bloodsugar']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnebolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnebolusPayload'] = ResolversParentTypes['UpdateOnebolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['bolus']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnecatheterchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnecatheterchangePayload'] = ResolversParentTypes['UpdateOnecatheterchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['catheterchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnecorrectionbolusPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnecorrectionbolusPayload'] = ResolversParentTypes['UpdateOnecorrectionbolusPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['correctionbolus']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneheightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOneheightPayload'] = ResolversParentTypes['UpdateOneheightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['height']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnepumpbatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnepumpbatteryPayload'] = ResolversParentTypes['UpdateOnepumpbatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['pumpbattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnesensorchangePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnesensorchangePayload'] = ResolversParentTypes['UpdateOnesensorchangePayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['sensorchange']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOnesmartphonebatteryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOnesmartphonebatteryPayload'] = ResolversParentTypes['UpdateOnesmartphonebatteryPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<
    Maybe<ResolversTypes['smartphonebattery']>,
    ParentType,
    ContextType
  >;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneuserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOneuserPayload'] = ResolversParentTypes['UpdateOneuserPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateOneweightPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateOneweightPayload'] = ResolversParentTypes['UpdateOneweightPayload']
> = ResolversObject<{
  error?: Resolver<
    Maybe<ResolversTypes['ErrorInterface']>,
    ParentType,
    ContextType
  >;
  record?: Resolver<Maybe<ResolversTypes['weight']>, ParentType, ContextType>;
  recordId?: Resolver<
    Maybe<ResolversTypes['MongoID']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidationErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidationError'] = ResolversParentTypes['ValidationError']
> = ResolversObject<{
  errors?: Resolver<
    Maybe<Array<ResolversTypes['ValidatorError']>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidatorErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidatorError'] = ResolversParentTypes['ValidatorError']
> = ResolversObject<{
  idx?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['basal'] = ResolversParentTypes['basal']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  t_00?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_01?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_02?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_03?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_04?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_05?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_06?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_07?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_08?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_09?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_10?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_11?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_12?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_13?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_14?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_15?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_16?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_17?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_18?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_19?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_20?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_21?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_22?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  t_23?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasalConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['basalConnection'] = ResolversParentTypes['basalConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['basalEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasalEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['basalEdge'] = ResolversParentTypes['basalEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['basal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasalPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['basalPagination'] = ResolversParentTypes['basalPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['basal']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BloodsugarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bloodsugar'] = ResolversParentTypes['bloodsugar']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tendency?: Resolver<
    ResolversTypes['EnumbloodsugarTendency'],
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BloodsugarConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bloodsugarConnection'] = ResolversParentTypes['bloodsugarConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['bloodsugarEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BloodsugarEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bloodsugarEdge'] = ResolversParentTypes['bloodsugarEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['bloodsugar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BloodsugarPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bloodsugarPagination'] = ResolversParentTypes['bloodsugarPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['bloodsugar']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolus'] = ResolversParentTypes['bolus']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  calculated?: Resolver<
    Maybe<ResolversTypes['bolusCalculated']>,
    ParentType,
    ContextType
  >;
  carbonHydrates?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  factor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  mode?: Resolver<
    Maybe<ResolversTypes['EnumbolusMode']>,
    ParentType,
    ContextType
  >;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  units?: Resolver<
    Array<Maybe<ResolversTypes['bolusUnits']>>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusCalculatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolusCalculated'] = ResolversParentTypes['bolusCalculated']
> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  bolus?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  factor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolusConnection'] = ResolversParentTypes['bolusConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['bolusEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolusEdge'] = ResolversParentTypes['bolusEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['bolus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolusPagination'] = ResolversParentTypes['bolusPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['bolus']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BolusUnitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['bolusUnits'] = ResolversParentTypes['bolusUnits']
> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  carbs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['EnumbolusUnitsType'],
    ParentType,
    ContextType
  >;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatheterchangeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['catheterchange'] = ResolversParentTypes['catheterchange']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placement?: Resolver<
    Maybe<ResolversTypes['EnumcatheterchangePlacement']>,
    ParentType,
    ContextType
  >;
  side?: Resolver<
    Maybe<ResolversTypes['EnumcatheterchangeSide']>,
    ParentType,
    ContextType
  >;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatheterchangeConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['catheterchangeConnection'] = ResolversParentTypes['catheterchangeConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['catheterchangeEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatheterchangeEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['catheterchangeEdge'] = ResolversParentTypes['catheterchangeEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['catheterchange'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatheterchangePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['catheterchangePagination'] = ResolversParentTypes['catheterchangePagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['catheterchange']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CorrectionbolusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['correctionbolus'] = ResolversParentTypes['correctionbolus']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  calculation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CorrectionbolusConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['correctionbolusConnection'] = ResolversParentTypes['correctionbolusConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['correctionbolusEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CorrectionbolusEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['correctionbolusEdge'] = ResolversParentTypes['correctionbolusEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['correctionbolus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CorrectionbolusPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['correctionbolusPagination'] = ResolversParentTypes['correctionbolusPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['correctionbolus']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['event'] = ResolversParentTypes['event']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventInterfaceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['eventInterface'] = ResolversParentTypes['eventInterface']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'basal'
    | 'bloodsugar'
    | 'bolus'
    | 'catheterchange'
    | 'correctionbolus'
    | 'event'
    | 'height'
    | 'pumpbattery'
    | 'sensorchange'
    | 'smartphonebattery'
    | 'weight',
    ParentType,
    ContextType
  >;
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
}>;

export type HeightResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['height'] = ResolversParentTypes['height']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeightConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['heightConnection'] = ResolversParentTypes['heightConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['heightEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeightEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['heightEdge'] = ResolversParentTypes['heightEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['height'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeightPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['heightPagination'] = ResolversParentTypes['heightPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['height']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PumpbatteryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['pumpbattery'] = ResolversParentTypes['pumpbattery']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PumpbatteryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['pumpbatteryConnection'] = ResolversParentTypes['pumpbatteryConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['pumpbatteryEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PumpbatteryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['pumpbatteryEdge'] = ResolversParentTypes['pumpbatteryEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['pumpbattery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PumpbatteryPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['pumpbatteryPagination'] = ResolversParentTypes['pumpbatteryPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['pumpbattery']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SensorchangeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['sensorchange'] = ResolversParentTypes['sensorchange']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placement?: Resolver<
    Maybe<ResolversTypes['EnumsensorchangePlacement']>,
    ParentType,
    ContextType
  >;
  serialNumber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  side?: Resolver<
    Maybe<ResolversTypes['EnumsensorchangeSide']>,
    ParentType,
    ContextType
  >;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SensorchangeConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['sensorchangeConnection'] = ResolversParentTypes['sensorchangeConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['sensorchangeEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SensorchangeEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['sensorchangeEdge'] = ResolversParentTypes['sensorchangeEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['sensorchange'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SensorchangePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['sensorchangePagination'] = ResolversParentTypes['sensorchangePagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['sensorchange']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartphonebatteryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['smartphonebattery'] = ResolversParentTypes['smartphonebattery']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartphonebatteryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['smartphonebatteryConnection'] = ResolversParentTypes['smartphonebatteryConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['smartphonebatteryEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartphonebatteryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['smartphonebatteryEdge'] = ResolversParentTypes['smartphonebatteryEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['smartphonebattery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartphonebatteryPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['smartphonebatteryPagination'] = ResolversParentTypes['smartphonebatteryPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['smartphonebattery']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  apiTokens?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['userApiTokens']>>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['EnumuserRoles']>>>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserApiTokensResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['userApiTokens'] = ResolversParentTypes['userApiTokens']
> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['MongoID']>, ParentType, ContextType>;
  appName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['userConnection'] = ResolversParentTypes['userConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['userEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['userEdge'] = ResolversParentTypes['userEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['userPagination'] = ResolversParentTypes['userPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['user']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeightResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['weight'] = ResolversParentTypes['weight']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['MongoID'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes['EnumDKeyeventType']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeightConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['weightConnection'] = ResolversParentTypes['weightConnection']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<
    Array<ResolversTypes['weightEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeightEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['weightEdge'] = ResolversParentTypes['weightEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['weight'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeightPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['weightPagination'] = ResolversParentTypes['weightPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['weight']>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    ResolversTypes['PaginationInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AuthToken?: AuthTokenResolvers<ContextType>;
  CreateManybasalPayload?: CreateManybasalPayloadResolvers<ContextType>;
  CreateManybloodsugarPayload?: CreateManybloodsugarPayloadResolvers<ContextType>;
  CreateManybolusPayload?: CreateManybolusPayloadResolvers<ContextType>;
  CreateManycatheterchangePayload?: CreateManycatheterchangePayloadResolvers<ContextType>;
  CreateManycorrectionbolusPayload?: CreateManycorrectionbolusPayloadResolvers<ContextType>;
  CreateManyheightPayload?: CreateManyheightPayloadResolvers<ContextType>;
  CreateManypumpbatteryPayload?: CreateManypumpbatteryPayloadResolvers<ContextType>;
  CreateManysensorchangePayload?: CreateManysensorchangePayloadResolvers<ContextType>;
  CreateManysmartphonebatteryPayload?: CreateManysmartphonebatteryPayloadResolvers<ContextType>;
  CreateManyuserPayload?: CreateManyuserPayloadResolvers<ContextType>;
  CreateManyweightPayload?: CreateManyweightPayloadResolvers<ContextType>;
  CreateOnebasalPayload?: CreateOnebasalPayloadResolvers<ContextType>;
  CreateOnebloodsugarPayload?: CreateOnebloodsugarPayloadResolvers<ContextType>;
  CreateOnebolusPayload?: CreateOnebolusPayloadResolvers<ContextType>;
  CreateOnecatheterchangePayload?: CreateOnecatheterchangePayloadResolvers<ContextType>;
  CreateOnecorrectionbolusPayload?: CreateOnecorrectionbolusPayloadResolvers<ContextType>;
  CreateOneheightPayload?: CreateOneheightPayloadResolvers<ContextType>;
  CreateOnepumpbatteryPayload?: CreateOnepumpbatteryPayloadResolvers<ContextType>;
  CreateOnesensorchangePayload?: CreateOnesensorchangePayloadResolvers<ContextType>;
  CreateOnesmartphonebatteryPayload?: CreateOnesmartphonebatteryPayloadResolvers<ContextType>;
  CreateOneuserPayload?: CreateOneuserPayloadResolvers<ContextType>;
  CreateOneweightPayload?: CreateOneweightPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ErrorInterface?: ErrorInterfaceResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  MongoError?: MongoErrorResolvers<ContextType>;
  MongoID?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginationInfo?: PaginationInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RemoveByIdbasalPayload?: RemoveByIdbasalPayloadResolvers<ContextType>;
  RemoveByIdbloodsugarPayload?: RemoveByIdbloodsugarPayloadResolvers<ContextType>;
  RemoveByIdbolusPayload?: RemoveByIdbolusPayloadResolvers<ContextType>;
  RemoveByIdcatheterchangePayload?: RemoveByIdcatheterchangePayloadResolvers<ContextType>;
  RemoveByIdcorrectionbolusPayload?: RemoveByIdcorrectionbolusPayloadResolvers<ContextType>;
  RemoveByIdheightPayload?: RemoveByIdheightPayloadResolvers<ContextType>;
  RemoveByIdpumpbatteryPayload?: RemoveByIdpumpbatteryPayloadResolvers<ContextType>;
  RemoveByIdsensorchangePayload?: RemoveByIdsensorchangePayloadResolvers<ContextType>;
  RemoveByIdsmartphonebatteryPayload?: RemoveByIdsmartphonebatteryPayloadResolvers<ContextType>;
  RemoveByIduserPayload?: RemoveByIduserPayloadResolvers<ContextType>;
  RemoveByIdweightPayload?: RemoveByIdweightPayloadResolvers<ContextType>;
  RemoveManybasalPayload?: RemoveManybasalPayloadResolvers<ContextType>;
  RemoveManybloodsugarPayload?: RemoveManybloodsugarPayloadResolvers<ContextType>;
  RemoveManybolusPayload?: RemoveManybolusPayloadResolvers<ContextType>;
  RemoveManycatheterchangePayload?: RemoveManycatheterchangePayloadResolvers<ContextType>;
  RemoveManycorrectionbolusPayload?: RemoveManycorrectionbolusPayloadResolvers<ContextType>;
  RemoveManyheightPayload?: RemoveManyheightPayloadResolvers<ContextType>;
  RemoveManypumpbatteryPayload?: RemoveManypumpbatteryPayloadResolvers<ContextType>;
  RemoveManysensorchangePayload?: RemoveManysensorchangePayloadResolvers<ContextType>;
  RemoveManysmartphonebatteryPayload?: RemoveManysmartphonebatteryPayloadResolvers<ContextType>;
  RemoveManyuserPayload?: RemoveManyuserPayloadResolvers<ContextType>;
  RemoveManyweightPayload?: RemoveManyweightPayloadResolvers<ContextType>;
  RemoveOnebasalPayload?: RemoveOnebasalPayloadResolvers<ContextType>;
  RemoveOnebloodsugarPayload?: RemoveOnebloodsugarPayloadResolvers<ContextType>;
  RemoveOnebolusPayload?: RemoveOnebolusPayloadResolvers<ContextType>;
  RemoveOnecatheterchangePayload?: RemoveOnecatheterchangePayloadResolvers<ContextType>;
  RemoveOnecorrectionbolusPayload?: RemoveOnecorrectionbolusPayloadResolvers<ContextType>;
  RemoveOneheightPayload?: RemoveOneheightPayloadResolvers<ContextType>;
  RemoveOnepumpbatteryPayload?: RemoveOnepumpbatteryPayloadResolvers<ContextType>;
  RemoveOnesensorchangePayload?: RemoveOnesensorchangePayloadResolvers<ContextType>;
  RemoveOnesmartphonebatteryPayload?: RemoveOnesmartphonebatteryPayloadResolvers<ContextType>;
  RemoveOneuserPayload?: RemoveOneuserPayloadResolvers<ContextType>;
  RemoveOneweightPayload?: RemoveOneweightPayloadResolvers<ContextType>;
  RuntimeError?: RuntimeErrorResolvers<ContextType>;
  UpdateByIdbasalPayload?: UpdateByIdbasalPayloadResolvers<ContextType>;
  UpdateByIdbloodsugarPayload?: UpdateByIdbloodsugarPayloadResolvers<ContextType>;
  UpdateByIdbolusPayload?: UpdateByIdbolusPayloadResolvers<ContextType>;
  UpdateByIdcatheterchangePayload?: UpdateByIdcatheterchangePayloadResolvers<ContextType>;
  UpdateByIdcorrectionbolusPayload?: UpdateByIdcorrectionbolusPayloadResolvers<ContextType>;
  UpdateByIdheightPayload?: UpdateByIdheightPayloadResolvers<ContextType>;
  UpdateByIdpumpbatteryPayload?: UpdateByIdpumpbatteryPayloadResolvers<ContextType>;
  UpdateByIdsensorchangePayload?: UpdateByIdsensorchangePayloadResolvers<ContextType>;
  UpdateByIdsmartphonebatteryPayload?: UpdateByIdsmartphonebatteryPayloadResolvers<ContextType>;
  UpdateByIduserPayload?: UpdateByIduserPayloadResolvers<ContextType>;
  UpdateByIdweightPayload?: UpdateByIdweightPayloadResolvers<ContextType>;
  UpdateManybasalPayload?: UpdateManybasalPayloadResolvers<ContextType>;
  UpdateManybloodsugarPayload?: UpdateManybloodsugarPayloadResolvers<ContextType>;
  UpdateManybolusPayload?: UpdateManybolusPayloadResolvers<ContextType>;
  UpdateManycatheterchangePayload?: UpdateManycatheterchangePayloadResolvers<ContextType>;
  UpdateManycorrectionbolusPayload?: UpdateManycorrectionbolusPayloadResolvers<ContextType>;
  UpdateManyheightPayload?: UpdateManyheightPayloadResolvers<ContextType>;
  UpdateManypumpbatteryPayload?: UpdateManypumpbatteryPayloadResolvers<ContextType>;
  UpdateManysensorchangePayload?: UpdateManysensorchangePayloadResolvers<ContextType>;
  UpdateManysmartphonebatteryPayload?: UpdateManysmartphonebatteryPayloadResolvers<ContextType>;
  UpdateManyuserPayload?: UpdateManyuserPayloadResolvers<ContextType>;
  UpdateManyweightPayload?: UpdateManyweightPayloadResolvers<ContextType>;
  UpdateOnebasalPayload?: UpdateOnebasalPayloadResolvers<ContextType>;
  UpdateOnebloodsugarPayload?: UpdateOnebloodsugarPayloadResolvers<ContextType>;
  UpdateOnebolusPayload?: UpdateOnebolusPayloadResolvers<ContextType>;
  UpdateOnecatheterchangePayload?: UpdateOnecatheterchangePayloadResolvers<ContextType>;
  UpdateOnecorrectionbolusPayload?: UpdateOnecorrectionbolusPayloadResolvers<ContextType>;
  UpdateOneheightPayload?: UpdateOneheightPayloadResolvers<ContextType>;
  UpdateOnepumpbatteryPayload?: UpdateOnepumpbatteryPayloadResolvers<ContextType>;
  UpdateOnesensorchangePayload?: UpdateOnesensorchangePayloadResolvers<ContextType>;
  UpdateOnesmartphonebatteryPayload?: UpdateOnesmartphonebatteryPayloadResolvers<ContextType>;
  UpdateOneuserPayload?: UpdateOneuserPayloadResolvers<ContextType>;
  UpdateOneweightPayload?: UpdateOneweightPayloadResolvers<ContextType>;
  ValidationError?: ValidationErrorResolvers<ContextType>;
  ValidatorError?: ValidatorErrorResolvers<ContextType>;
  basal?: BasalResolvers<ContextType>;
  basalConnection?: BasalConnectionResolvers<ContextType>;
  basalEdge?: BasalEdgeResolvers<ContextType>;
  basalPagination?: BasalPaginationResolvers<ContextType>;
  bloodsugar?: BloodsugarResolvers<ContextType>;
  bloodsugarConnection?: BloodsugarConnectionResolvers<ContextType>;
  bloodsugarEdge?: BloodsugarEdgeResolvers<ContextType>;
  bloodsugarPagination?: BloodsugarPaginationResolvers<ContextType>;
  bolus?: BolusResolvers<ContextType>;
  bolusCalculated?: BolusCalculatedResolvers<ContextType>;
  bolusConnection?: BolusConnectionResolvers<ContextType>;
  bolusEdge?: BolusEdgeResolvers<ContextType>;
  bolusPagination?: BolusPaginationResolvers<ContextType>;
  bolusUnits?: BolusUnitsResolvers<ContextType>;
  catheterchange?: CatheterchangeResolvers<ContextType>;
  catheterchangeConnection?: CatheterchangeConnectionResolvers<ContextType>;
  catheterchangeEdge?: CatheterchangeEdgeResolvers<ContextType>;
  catheterchangePagination?: CatheterchangePaginationResolvers<ContextType>;
  correctionbolus?: CorrectionbolusResolvers<ContextType>;
  correctionbolusConnection?: CorrectionbolusConnectionResolvers<ContextType>;
  correctionbolusEdge?: CorrectionbolusEdgeResolvers<ContextType>;
  correctionbolusPagination?: CorrectionbolusPaginationResolvers<ContextType>;
  event?: EventResolvers<ContextType>;
  eventInterface?: EventInterfaceResolvers<ContextType>;
  height?: HeightResolvers<ContextType>;
  heightConnection?: HeightConnectionResolvers<ContextType>;
  heightEdge?: HeightEdgeResolvers<ContextType>;
  heightPagination?: HeightPaginationResolvers<ContextType>;
  pumpbattery?: PumpbatteryResolvers<ContextType>;
  pumpbatteryConnection?: PumpbatteryConnectionResolvers<ContextType>;
  pumpbatteryEdge?: PumpbatteryEdgeResolvers<ContextType>;
  pumpbatteryPagination?: PumpbatteryPaginationResolvers<ContextType>;
  sensorchange?: SensorchangeResolvers<ContextType>;
  sensorchangeConnection?: SensorchangeConnectionResolvers<ContextType>;
  sensorchangeEdge?: SensorchangeEdgeResolvers<ContextType>;
  sensorchangePagination?: SensorchangePaginationResolvers<ContextType>;
  smartphonebattery?: SmartphonebatteryResolvers<ContextType>;
  smartphonebatteryConnection?: SmartphonebatteryConnectionResolvers<ContextType>;
  smartphonebatteryEdge?: SmartphonebatteryEdgeResolvers<ContextType>;
  smartphonebatteryPagination?: SmartphonebatteryPaginationResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
  userApiTokens?: UserApiTokensResolvers<ContextType>;
  userConnection?: UserConnectionResolvers<ContextType>;
  userEdge?: UserEdgeResolvers<ContextType>;
  userPagination?: UserPaginationResolvers<ContextType>;
  weight?: WeightResolvers<ContextType>;
  weightConnection?: WeightConnectionResolvers<ContextType>;
  weightEdge?: WeightEdgeResolvers<ContextType>;
  weightPagination?: WeightPaginationResolvers<ContextType>;
}>;
