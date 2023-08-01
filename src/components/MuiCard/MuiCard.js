import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function MuiCard() {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((data) => {
        setPopulationData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching population data:", error);
      });
  }, []);

  const handleLike = (index) => {
    const updatedData = [...populationData];
    const likedData = updatedData.splice(index, 1);
    updatedData.unshift(likedData[0]);
    setPopulationData(updatedData);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      padding="70px 0"
    >
      {populationData.map((dataPoint, index) => (
        <Card key={dataPoint.Year} style={{ width: "25%", margin: "10px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dataPoint.Nation}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Year: {dataPoint.Year}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Population: {dataPoint.Population}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleLike(index)}>
              Like
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default MuiCard;
