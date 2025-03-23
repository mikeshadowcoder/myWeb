import { Box } from "@mui/material";


const MacWindowHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#eee",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
            }}
        >
            <Box sx={{ display: "flex", gap: "8px", marginLeft: "10px" }}>
                <Box sx={{ width: "12px", height: "12px", backgroundColor: "#ff5f56", borderRadius: "50%" }} />
                <Box sx={{ width: "12px", height: "12px", backgroundColor: "#ffbd2e", borderRadius: "50%" }} />
                <Box sx={{ width: "12px", height: "12px", backgroundColor: "#27c93f", borderRadius: "50%" }} />
            </Box>
        </Box>
    );
};

export default MacWindowHeader;
