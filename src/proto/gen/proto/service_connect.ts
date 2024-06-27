// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file proto/service.proto (package gitlab, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetDependenciesRequest, GetDependenciesResponse } from "./service_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service gitlab.GitLabService
 */
export const GitLabService = {
  typeName: "gitlab.GitLabService",
  methods: {
    /**
     * @generated from rpc gitlab.GitLabService.GetDependencies
     */
    getDependencies: {
      name: "GetDependencies",
      I: GetDependenciesRequest,
      O: GetDependenciesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

