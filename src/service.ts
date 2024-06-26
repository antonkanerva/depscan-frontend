// import { createPromiseClient } from "@bufbuild/connect";
// import { createGrpcWebTransport } from "@bufbuild/connect-web";
// import { GitLabService } from "./proto/gitlab_service_connectweb";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined in the environment variables");
}

// const transport = createGrpcWebTransport({
//   baseUrl: API_URL,
// });

// const client = createPromiseClient(GitLabService, transport);

// Mock response
const mockProjects = [
  {
    name: "Project A",
    language: "JavaScript",
    dependencies: [
      {
        name: "react",
        currentVersion: "18.2.0",
        latestVersion: "18.2.0",
        libYear: 0.0,
      },
      {
        name: "typescript",
        currentVersion: "4.9.5",
        latestVersion: "5.0.4",
        libYear: 0.5,
      },
      {
        name: "@mui/material",
        currentVersion: "5.13.0",
        latestVersion: "5.13.0",
        libYear: 0.0,
      },
    ],
  },
  {
    name: "Project B",
    language: "Python",
    dependencies: [
      {
        name: "django",
        currentVersion: "3.2.9",
        latestVersion: "4.2.1",
        libYear: 1.5,
      },
      {
        name: "numpy",
        currentVersion: "1.21.4",
        latestVersion: "1.24.3",
        libYear: 0.8,
      },
      {
        name: "pandas",
        currentVersion: "1.3.4",
        latestVersion: "2.0.1",
        libYear: 1.2,
      },
    ],
  },
  {
    name: "Project C",
    language: "Ruby",
    dependencies: [
      {
        name: "rails",
        currentVersion: "6.1.4",
        latestVersion: "7.0.4",
        libYear: 1.0,
      },
      {
        name: "sidekiq",
        currentVersion: "6.2.2",
        latestVersion: "7.0.9",
        libYear: 0.7,
      },
      {
        name: "pg",
        currentVersion: "1.2.3",
        latestVersion: "1.5.3",
        libYear: 0.3,
      },
    ],
  },
];

// export async function getDependencies(accessToken: string) {
export async function getDependencies() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demonstration, always return mock data
  return mockProjects;

  // In a real scenario, you would use the gRPC client like this:
  // try {
  //   const response = await client.getDependencies({
  //     accessToken: accessToken,
  //   });
  //   return response.projects;
  // } catch (error) {
  //   console.error("Error calling gRPC method:", error);
  //   throw error;
  // }
}
