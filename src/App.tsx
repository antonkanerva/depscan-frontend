import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";
import DependencyTable from "./components/DependencyTable";
import { getDependencies } from "./service";
import type { Project } from "./types";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getDependencies(accessToken);
      setProjects(result);
    } catch (error) {
      console.error("Error fetching dependencies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box my={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Typography variant="h4" component="h1">
              DepScan - GitLab Dependency Scanner
            </Typography>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="GitLab Access Token"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              type="password"
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                "Analyze Dependencies"
              )}
            </Button>
          </form>
          {isLoading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <DependencyTable projects={projects} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
