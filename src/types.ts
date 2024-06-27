import * as serviceModule from "./proto/gen/proto/service";

// Extract the classes from the module
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const ProjectClass = (serviceModule as any).Project;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const DependencyClass = (serviceModule as any).Dependency;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const GetDependenciesRequestClass = (serviceModule as any).GetDependenciesRequest;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const GetDependenciesResponseClass = (serviceModule as any).GetDependenciesResponse;

// Create and export type aliases
export type Project = InstanceType<typeof ProjectClass>;
export type Dependency = InstanceType<typeof DependencyClass>;
export type GetDependenciesRequest = InstanceType<typeof GetDependenciesRequestClass>;
export type GetDependenciesResponse = InstanceType<typeof GetDependenciesResponseClass>;

// Export the classes themselves if needed
export const Project = ProjectClass;
export const Dependency = DependencyClass;
export const GetDependenciesRequest = GetDependenciesRequestClass;
export const GetDependenciesResponse = GetDependenciesResponseClass;

// Helper function to assert that a value is of type Project
export function isProject(value: unknown): value is Project {
  return value instanceof ProjectClass;
}

// Helper function to assert that a value is of type Dependency
export function isDependency(value: unknown): value is Dependency {
  return value instanceof DependencyClass;
}
