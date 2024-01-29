import * as grpcWeb from "grpc-web";

import * as proto_protodo_pb from "../proto/protodo_pb";

export class todoserviceClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any },
  );

  addtodo(
    request: proto_protodo_pb.todorequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: proto_protodo_pb.todoresponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<proto_protodo_pb.todoresponse>;

  deletetodo(
    request: proto_protodo_pb.deletetodorequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: proto_protodo_pb.deletetodoresponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<proto_protodo_pb.deletetodoresponse>;

  marktodoasdone(
    request: proto_protodo_pb.marktodoasdonerequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: proto_protodo_pb.marktodoasdoneresponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<proto_protodo_pb.marktodoasdoneresponse>;

  // Add the getTodoList method
  getTodoList(
    request: proto_protodo_pb.TodoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: proto_protodo_pb.TodoResponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<proto_protodo_pb.TodoResponse>;
}

export class todoservicePromiseClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any },
  );

  addtodo(
    request: proto_protodo_pb.todorequest,
    metadata?: grpcWeb.Metadata,
  ): Promise<proto_protodo_pb.todoresponse>;

  deletetodo(
    request: proto_protodo_pb.deletetodorequest,
    metadata?: grpcWeb.Metadata,
  ): Promise<proto_protodo_pb.deletetodoresponse>;

  marktodoasdone(
    request: proto_protodo_pb.marktodoasdonerequest,
    metadata?: grpcWeb.Metadata,
  ): Promise<proto_protodo_pb.marktodoasdoneresponse>;
}
