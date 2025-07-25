import { JumboCard } from "@jumbo/components";
import { Div } from "@jumbo/shared";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack, TextField } from "@mui/material";
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
// import '../style.css'
const center = {
  lat: 34.8731,
  lng: 28.7718,
};

const DirectionsMap = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  async function calculateRoute() {
    if (
      !originRef.current ||
      !destinationRef.current ||
      originRef.current.value === "" ||
      destinationRef.current.value === ""
    ) {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  }

  return (
    <JumboCard contentWrapper>
      <Div
        sx={{
          width: 580,
          maxWidth: "80%",
          position: "absolute",
          left: 40,
          top: 40,
          borderRadius: 2,
          border: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          p: (theme) => theme.spacing(2, 3),
          backgroundColor: "background.paper",
          zIndex: 101,
        }}
      >
        <Stack direction={"row"} spacing={1} sx={{ mb: "-4px" }}>
          <Autocomplete>
            <TextField
              label="Origin"
              variant="outlined"
              size="small"
              ref={originRef}
            />
          </Autocomplete>
          <Autocomplete>
            <TextField
              label="Destination"
              variant="outlined"
              size="small"
              ref={destinationRef}
            />
          </Autocomplete>
          <IconButton onClick={calculateRoute}>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={clearRoute}>
            <HighlightOffIcon />
          </IconButton>
        </Stack>
      </Div>
      <GoogleMap
        center={center}
        zoom={5}
        mapContainerStyle={{ width: "100%", height: "400px" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={() => {}}
      >
        <MarkerF position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </JumboCard>
  );
};

export { DirectionsMap };
