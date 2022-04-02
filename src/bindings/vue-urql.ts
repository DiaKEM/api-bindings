import gql from 'graphql-tag';
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
