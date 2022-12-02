import React from "react";
import { styled } from "@mui/system";
import { Typography, Button, Box } from "@mui/material";
import SplashNav from "./SplashNav";
import { useNavigate } from "react-router-dom";
import { getActions } from "../../store/actions/authActions";
import { connect } from "react-redux";

const MainContainer = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const InfoText = styled('div')({
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const MainSection = styled('section')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/discord-splash-img.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minWidth: '1200px',
    backgroundPosition: 'fixed',
})

const SplashSection = styled('section')({
    height: '600px',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const SplashDiv = styled('div')({
    width: '45%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const Splash = ({ login }) => {

    const navigate = useNavigate() 

    const handleDemoLogin = () => {
        const userDetails = {
            email: 'demo@gmail.com',
            password: 'password'
        }
        login(userDetails, navigate)
    }

    return (
        <MainContainer>
            <MainSection sx={{minHeight: '600px'}}>
                <SplashNav />
                <InfoText sx={{ overflowWrap: 'break-word' }}>
                    <Typography variant="h3" sx={{ fontFamily: 'Rammetto One', color: 'white'}}>IMAGINE A PLACE...</Typography>
                    <Typography variant="subtitle1" 
                        sx={{ 
                            fontSize: '18px', 
                            width: '55%',
                            maxWidth: '780px', 
                            color: 'white',
                            textAlign: 'center', 
                            marginTop: '25px',
                            fontFamily: 'Helvetica Neue',
                            fontWeight: 500
                        }}
                    >
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                        Where just you and a handful of friends can spend time together. 
                        A place that makes it easy to talk every day and hang out more often.
                    </Typography>
                </InfoText>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px',
                    }}
                >
                    <a href="https://github.com/kookumber/dizkord" target="_blank" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{
                                height: '56px',
                                width: '252px',
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '28px',
                                fontSize: '16px',
                                fontFamily: 'Helvetica Neue',
                                textTransform: 'none',
                                margin: '10px',
                                '&:hover': {
                                    color: '#5865f2',
                                    backgroundColor: 'white',
                                    boxShadow: '7px 7px 7px  rgba(0, 0, 0, 0.1)'
                                }
                            }}
                        >
                            Download My Github Repo
                        </Button>
                    </a>
                        <Button
                            onClick={handleDemoLogin}
                            sx={{
                                height: '56px',
                                width: '315px',
                                backgroundColor: '#23272A',
                                color: 'white',
                                borderRadius: '28px',
                                fontSize: '16px',
                                fontFamily: 'Helvetica Neue',
                                textTransform: 'none',
                                margin: '10px',
                                '&:hover': {
                                    backgroundColor: '#36393e',
                                    boxShadow: '7px 7px 7px  rgba(0, 0, 0, 0.1)'
                                }
                            }}
                        >
                            Open Dizkord as Demo User
                        </Button>
                    
                </Box>
            </MainSection>
            <SplashSection>
                <SplashDiv sx={{ minWidth: '600px', marginRight: '40px' }}>
                    <img src="/discord-example-img.png"/>
                </SplashDiv>
                <SplashDiv sx={{ width: '40%', minWidth: '380px'}}>
                    <Typography variant="h3" sx={{ color: '#23272A', fontWeight: 800 }}>
                        Create an invite-only place where you belong
                    </Typography>
                    <Typography sx={{ fontSize: '20px', marginTop: '15px' }}>
                        Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </Typography>
                </SplashDiv>
            </SplashSection>
        </MainContainer>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(Splash)