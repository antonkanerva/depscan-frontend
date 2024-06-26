# DepScan Frontend

React-based web application for visualizing users' GitLab project dependencies and their version statuses. Retrieves dependency data by sending GitLab Access Tokens to the [DepScan Backend](https://github.com/antonkanerva/depscan-backend) over the gRPC protocol using web-gRPC.

## Features

- Secure submission of GitLab Access Tokens
- Fetches and displays dependency information for authorized GitLab projects
- Visualizes project names, dependencies, versions, and programming languages
- Uses gRPC over web for efficient communication with the backend

## Dependencies

Build dependencies used:
- Node 20
- TypeScript 5.0+
- React 18
- Vite 5
- Material-UI (MUI) 5

See [package.json](package.json) for additional lib dependencies.

## Setup

1. Clone the repository:
```
git clone https://github.com/your-username/depscan-frontend.git
cd depscan-frontend
```

2. Install dependencies:
```
npm install
```

3. Add a .env file in the project root with an `API_URL` key:
```
API_URL=grpc://[::1]:50051
```

4. Generate gRPC client code:
- Ensure you have the latest `.proto` files from the backend
- Run the gRPC code generation script (you may need to set this up)

## Development

To start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Building for Production

To create a production build:
```
npm run build
```

The built files will be in the `dist` directory.

## Testing

(Add information about running tests when implemented)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues related to the frontend, please open an issue in this repository. For non-frontend related issues, please refer to the applicable repository of the DepScan ecosystem in the section below.

## DepScan Ecosystem
- [DepScan API](https://github.com/antonkanerva/depscan-api)
- [DepScan Backend](https://github.com/antonkanerva/depscan-backend)
- [DepScan Frontend](https://github.com/antonkanerva/depscan-frontend)
- [DepScan Proto](https://github.com/antonkanerva/depscan-proto)
- [DepScan Scanner](https://github.com/antonkanerva/depscan-scanner)
