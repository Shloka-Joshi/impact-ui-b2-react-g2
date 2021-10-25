import { Container } from "@material-ui/core";
import { Box, display } from "@mui/system";
import React from "preact/compat";
import "../../styles/common-style.css"

function SchedularComponent(){
    return(
        <div>
            <Container maxWidth="md">
                <Box sm={{display:"flex",flexDirection: "column",alignItems: "center" }}>
                    <Grid container>
                        <div className="card-style">
                            <Grid>
                                    
                            </Grid>
                        </div>
                    </Grid>
                </Box>
            </Container>            
        </div>
    );
}