/**
 * @fileoverview gRPC-Web generated client stub for protodo
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.2
// source: proto/protodo.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protodo = require('./protodo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protodo.todoserviceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protodo.todoservicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protodo.todorequest,
 *   !proto.protodo.todoresponse>}
 */
const methodDescriptor_todoservice_addtodo = new grpc.web.MethodDescriptor(
  '/protodo.todoservice/addtodo',
  grpc.web.MethodType.UNARY,
  proto.protodo.todorequest,
  proto.protodo.todoresponse,
  /**
   * @param {!proto.protodo.todorequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protodo.todoresponse.deserializeBinary
);


/**
 * @param {!proto.protodo.todorequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protodo.todoresponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protodo.todoresponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protodo.todoserviceClient.prototype.addtodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protodo.todoservice/addtodo',
      request,
      metadata || {},
      methodDescriptor_todoservice_addtodo,
      callback);
};


/**
 * @param {!proto.protodo.todorequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protodo.todoresponse>}
 *     Promise that resolves to the response
 */
proto.protodo.todoservicePromiseClient.prototype.addtodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protodo.todoservice/addtodo',
      request,
      metadata || {},
      methodDescriptor_todoservice_addtodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protodo.deletetodorequest,
 *   !proto.protodo.deletetodoresponse>}
 */
const methodDescriptor_todoservice_deletetodo = new grpc.web.MethodDescriptor(
  '/protodo.todoservice/deletetodo',
  grpc.web.MethodType.UNARY,
  proto.protodo.deletetodorequest,
  proto.protodo.deletetodoresponse,
  /**
   * @param {!proto.protodo.deletetodorequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protodo.deletetodoresponse.deserializeBinary
);


/**
 * @param {!proto.protodo.deletetodorequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protodo.deletetodoresponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protodo.deletetodoresponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protodo.todoserviceClient.prototype.deletetodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protodo.todoservice/deletetodo',
      request,
      metadata || {},
      methodDescriptor_todoservice_deletetodo,
      callback);
};


/**
 * @param {!proto.protodo.deletetodorequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protodo.deletetodoresponse>}
 *     Promise that resolves to the response
 */
proto.protodo.todoservicePromiseClient.prototype.deletetodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protodo.todoservice/deletetodo',
      request,
      metadata || {},
      methodDescriptor_todoservice_deletetodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protodo.marktodoasdonerequest,
 *   !proto.protodo.marktodoasdoneresponse>}
 */
const methodDescriptor_todoservice_marktodoasdone = new grpc.web.MethodDescriptor(
  '/protodo.todoservice/marktodoasdone',
  grpc.web.MethodType.UNARY,
  proto.protodo.marktodoasdonerequest,
  proto.protodo.marktodoasdoneresponse,
  /**
   * @param {!proto.protodo.marktodoasdonerequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protodo.marktodoasdoneresponse.deserializeBinary
);


/**
 * @param {!proto.protodo.marktodoasdonerequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protodo.marktodoasdoneresponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protodo.marktodoasdoneresponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protodo.todoserviceClient.prototype.marktodoasdone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protodo.todoservice/marktodoasdone',
      request,
      metadata || {},
      methodDescriptor_todoservice_marktodoasdone,
      callback);
};


/**
 * @param {!proto.protodo.marktodoasdonerequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protodo.marktodoasdoneresponse>}
 *     Promise that resolves to the response
 */
proto.protodo.todoservicePromiseClient.prototype.marktodoasdone =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protodo.todoservice/marktodoasdone',
      request,
      metadata || {},
      methodDescriptor_todoservice_marktodoasdone);
};


module.exports = proto.protodo;

