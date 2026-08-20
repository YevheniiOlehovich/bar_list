// import { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   useJsApiLoader,
// } from "@react-google-maps/api";

// import { Container, Paper, Box, Typography } from "@mui/material";

// const center = {
//   lat: 50.49165231282412,
//   lng: 32.71921137790131,
// };

// const mapOptions = {
//   disableDefaultUI: true,
//   zoomControl: false,
//   streetViewControl: false,
//   fullscreenControl: false,
//   mapTypeControl: false,
//   rotateControl: false,
//   scaleControl: true,
//   clickableIcons: true,
//   keyboardShortcuts: false,

//   styles: [
//     {
//       featureType: "poi",
//       stylers: [{ visibility: "on" }],
//     },
//     {
//       featureType: "transit",
//       stylers: [{ visibility: "off" }],
//     },
//   ],
// };

// export default function GoogleMapComponent() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
//   });

//   const [isOpen, setIsOpen] = useState(true);

//   if (!isLoaded) {
//     return null;
//   }

//   return (
//     <Container
//       maxWidth="xl"
//       sx={{
//         py: 4,
//       }}
//     >
//       <Paper
//         elevation={0}
//         sx={{
//           overflow: "hidden",
//           borderRadius: 4,
//           border: "1px solid rgba(255,255,255,0.08)",
//         }}
//       >
//         <GoogleMap
//           mapContainerStyle={{
//             width: "100%",
//             height: "420px",
//           }}
//           center={center}
//           zoom={17}
//           options={mapOptions}
//         >
//           <Marker
//             position={center}
//             onClick={() => setIsOpen(true)}
//           />

//           {isOpen && (
//             <InfoWindow
//               position={center}
//               onCloseClick={() => setIsOpen(false)}
//             >
//               <Box
//                 sx={{
//                   px: 1,
//                   py: 0.5,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: 700,
//                     fontSize: 16,
//                     color: "#111",
//                   }}
//                 >
//                   📍 Вам сюди
//                 </Typography>
//               </Box>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </Paper>
//     </Container>
//   );
// }











































import {
    GoogleMap,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";

import {
    Container,
    Paper,
} from "@mui/material";

const center = {
    lat: 50.49165231282412,
    lng: 32.71921137790131,
};

const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    rotateControl: false,
    scaleControl: true,
    clickableIcons: true,
    keyboardShortcuts: false,

    styles: [
        {
            featureType: "poi",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
        },
    ],
};

export default function GoogleMapComponent() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        return null;
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    border:
                        "1px solid rgba(255,255,255,0.08)",
                }}
            >
                <GoogleMap
                    mapContainerStyle={{
                        width: "100%",
                        height: "420px",
                    }}
                    center={center}
                    zoom={17}
                    options={mapOptions}
                >
                    <Marker
                        position={center}
                    />
                </GoogleMap>
            </Paper>
        </Container>
    );
}