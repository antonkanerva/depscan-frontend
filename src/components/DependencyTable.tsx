import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type React from "react";
import { useState } from "react";

interface Dependency {
  name: string;
  currentVersion: string;
  latestVersion: string;
  libYear: number;
}

interface Project {
  name: string;
  language: string;
  dependencies: Dependency[];
}

interface RowProps {
  project: Project;
}

const calculateLibYearsSum = (dependencies: Dependency[]): number => {
  return dependencies.reduce((sum, dep) => sum + dep.libYear, 0);
};

const Row: React.FC<RowProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const libYearsSum = calculateLibYearsSum(project.dependencies);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {project.name}
        </TableCell>
        <TableCell>{project.language}</TableCell>
        <TableCell>{project.dependencies.length}</TableCell>
        <TableCell>{libYearsSum.toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dependencies
              </Typography>
              <Table size="small" aria-label="dependencies">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Current Version</TableCell>
                    <TableCell>Latest Version</TableCell>
                    <TableCell>Lib Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {project.dependencies.map((dependency) => (
                    <TableRow key={dependency.name}>
                      <TableCell component="th" scope="row">
                        {dependency.name}
                      </TableCell>
                      <TableCell>{dependency.currentVersion}</TableCell>
                      <TableCell>{dependency.latestVersion}</TableCell>
                      <TableCell>{dependency.libYear.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

interface DependencyTableProps {
  projects: Project[];
}

const DependencyTable: React.FC<DependencyTableProps> = ({ projects }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project Name</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Dependencies Count</TableCell>
            <TableCell>Lib Years Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <Row key={project.name} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DependencyTable;
