import * as jspb from 'google-protobuf'



export class todorequest extends jspb.Message {
  getId(): string;
  setId(value: string): todorequest;

  getTitle(): string;
  setTitle(value: string): todorequest;

  getDone(): boolean;
  setDone(value: boolean): todorequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): todorequest.AsObject;
  static toObject(includeInstance: boolean, msg: todorequest): todorequest.AsObject;
  static serializeBinaryToWriter(message: todorequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): todorequest;
  static deserializeBinaryFromReader(message: todorequest, reader: jspb.BinaryReader): todorequest;
}

export namespace todorequest {
  export type AsObject = {
    id: string,
    title: string,
    done: boolean,
  }
}

export class todoresponse extends jspb.Message {
  getId(): string;
  setId(value: string): todoresponse;

  getTitle(): string;
  setTitle(value: string): todoresponse;

  getDone(): boolean;
  setDone(value: boolean): todoresponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): todoresponse.AsObject;
  static toObject(includeInstance: boolean, msg: todoresponse): todoresponse.AsObject;
  static serializeBinaryToWriter(message: todoresponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): todoresponse;
  static deserializeBinaryFromReader(message: todoresponse, reader: jspb.BinaryReader): todoresponse;
}

export namespace todoresponse {
  export type AsObject = {
    id: string,
    title: string,
    done: boolean,
  }
}

export class deletetodorequest extends jspb.Message {
  getId(): string;
  setId(value: string): deletetodorequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): deletetodorequest.AsObject;
  static toObject(includeInstance: boolean, msg: deletetodorequest): deletetodorequest.AsObject;
  static serializeBinaryToWriter(message: deletetodorequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): deletetodorequest;
  static deserializeBinaryFromReader(message: deletetodorequest, reader: jspb.BinaryReader): deletetodorequest;
}

export namespace deletetodorequest {
  export type AsObject = {
    id: string,
  }
}

export class deletetodoresponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): deletetodoresponse.AsObject;
  static toObject(includeInstance: boolean, msg: deletetodoresponse): deletetodoresponse.AsObject;
  static serializeBinaryToWriter(message: deletetodoresponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): deletetodoresponse;
  static deserializeBinaryFromReader(message: deletetodoresponse, reader: jspb.BinaryReader): deletetodoresponse;
}

export namespace deletetodoresponse {
  export type AsObject = {
  }
}

export class marktodoasdonerequest extends jspb.Message {
  getId(): string;
  setId(value: string): marktodoasdonerequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): marktodoasdonerequest.AsObject;
  static toObject(includeInstance: boolean, msg: marktodoasdonerequest): marktodoasdonerequest.AsObject;
  static serializeBinaryToWriter(message: marktodoasdonerequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): marktodoasdonerequest;
  static deserializeBinaryFromReader(message: marktodoasdonerequest, reader: jspb.BinaryReader): marktodoasdonerequest;
}

export namespace marktodoasdonerequest {
  export type AsObject = {
    id: string,
  }
}

export class marktodoasdoneresponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): marktodoasdoneresponse.AsObject;
  static toObject(includeInstance: boolean, msg: marktodoasdoneresponse): marktodoasdoneresponse.AsObject;
  static serializeBinaryToWriter(message: marktodoasdoneresponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): marktodoasdoneresponse;
  static deserializeBinaryFromReader(message: marktodoasdoneresponse, reader: jspb.BinaryReader): marktodoasdoneresponse;
}

export namespace marktodoasdoneresponse {
  export type AsObject = {
  }
}

