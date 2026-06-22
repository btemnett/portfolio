import { Grid } from "@mui/material";
import PortfolioComponent from "./components/portfolioComponent";


export default function Home() {
  const animationElementskillsArray = [
    {
      skill: "JS"
    },
    {
      skill: "C#"
    },
    {
      skill: "Python"
    },
    {
      skill: "AWS"
    },
    {
      skill: "AGILE"
    },
    {
      skill: "React"
    },
    {
      skill: "TS"
    },
    {
      skill: "Bash"
    },
    {
      skill: "Linux"
    },
    {
      skill: "Terraform"
    }
  ]

  return (
    <Grid 
      container
      sx={{ 
        width: '100vw', 
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}
    >
      <PortfolioComponent animationElementskillsArray={animationElementskillsArray} />
    </Grid>
  );
}
